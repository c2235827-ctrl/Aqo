import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = Number(process.env.PORT) || 3000;
const isProduction = process.env.NODE_ENV === 'production';

interface RateLimitEntry {
  count: number;
  resetAt: number;
}

const rateLimitStore = new Map<string, RateLimitEntry>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 10;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitStore.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (entry.count >= RATE_LIMIT_MAX_REQUESTS) {
    return true;
  }

  entry.count += 1;
  return false;
}

function getBaseUrl(req: express.Request): string {
  const configured = process.env.APP_URL || process.env.VITE_SITE_URL;
  if (configured && configured.startsWith('http')) {
    return configured.replace(/\/$/, '');
  }
  const protocol = req.headers['x-forwarded-proto'] || req.protocol || 'http';
  const host = req.headers['x-forwarded-host'] || req.headers.host || `localhost:${PORT}`;
  return `${protocol}://${host}`;
}

async function startServer() {
  const app = express();
  app.set('trust proxy', true);
  app.use(express.json({ limit: '32kb' }));

  app.get('/robots.txt', (req, res) => {
    const baseUrl = getBaseUrl(req);
    res.type('text/plain');
    res.send(`User-agent: *\nAllow: /\n\nSitemap: ${baseUrl}/sitemap.xml\n`);
  });

  app.get('/sitemap.xml', (req, res) => {
    const baseUrl = getBaseUrl(req);
    const routes = ['/', '/features', '/about', '/pricing', '/contact', '/privacy', '/terms'];
    const urls = routes
      .map(
        (route) => `  <url>\n    <loc>${baseUrl}${route}</loc>\n    <changefreq>weekly</changefreq>\n  </url>`
      )
      .join('\n');

    res.type('application/xml');
    res.send(
      `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
    );
  });

  app.post('/api/contact', (req, res) => {
    const clientIp = req.ip || 'unknown';
    if (isRateLimited(clientIp)) {
      res.status(429).json({
        ok: false,
        delivered: false,
        status: 'rate_limited',
        message: 'Too many requests from this network. Please wait a few minutes before retrying.',
      });
      return;
    }

    const body = req.body || {};
    const fullName = typeof body.fullName === 'string' ? body.fullName.trim() : '';
    const email = typeof body.email === 'string' ? body.email.trim() : '';
    const subject = typeof body.subject === 'string' ? body.subject.trim() : '';
    const message = typeof body.message === 'string' ? body.message.trim() : '';
    const website = typeof body.website === 'string' ? body.website.trim() : '';

    // Honeypot check: quietly reject automated spam without leaking detection details
    if (website.length > 0) {
      res.status(400).json({
        ok: false,
        delivered: false,
        status: 'validation_error',
        message: 'Unable to validate submission.',
      });
      return;
    }

    const errors: Record<string, string> = {};
    if (fullName.length < 2 || fullName.length > 120) {
      errors.fullName = 'Please enter your full name (2 to 120 characters).';
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email) || email.length > 160) {
      errors.email = 'Please provide a valid email address.';
    }
    if (subject.length < 3 || subject.length > 160) {
      errors.subject = 'Please enter a subject (3 to 160 characters).';
    }
    if (message.length < 10 || message.length > 4000) {
      errors.message = 'Please enter a message between 10 and 4000 characters.';
    }

    if (Object.keys(errors).length > 0) {
      res.status(400).json({
        ok: false,
        delivered: false,
        status: 'validation_error',
        message: 'Please correct the highlighted fields and try again.',
        errors,
      });
      return;
    }

    const mailboxConfigured = Boolean(
      process.env.CONTACT_TO_EMAIL && process.env.SMTP_HOST && process.env.SMTP_USER
    );

    if (!mailboxConfigured) {
      res.status(200).json({
        ok: true,
        delivered: false,
        status: 'pending_configuration',
        message:
          'Your enquiry passed validation, however the official Aqoriel mailbox is not yet configured for email dispatch. For immediate assistance, please message @aqoriel_bot on Telegram.',
      });
      return;
    }

    // Future SMTP dispatch hook once official mailbox credentials are supplied
    res.status(200).json({
      ok: true,
      delivered: true,
      status: 'delivered',
      message: 'Thank you. Your enquiry has been accepted for delivery.',
    });
  });

  if (isProduction) {
    const distDir = path.join(__dirname, 'dist');
    app.use(express.static(distDir));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distDir, 'index.html'));
    });
  } else {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Aqoriel server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
