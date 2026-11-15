import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';
import { TelegramIcon } from './Icons';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  const handleSectionLink = (sectionId: string, event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    if (location.pathname === '/') {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  return (
    <footer className="border-t border-neutral-200 bg-white text-neutral-950">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Link
              to="/"
              className="font-display text-lg font-bold tracking-tight text-neutral-950"
            >
              {SITE_CONFIG.brandName}
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-neutral-600">
              {SITE_CONFIG.tagline}
            </p>
            <p className="mt-4 text-xs text-neutral-500">
              Developed and owned by {SITE_CONFIG.parentCompany}.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 md:col-span-8">
            <div>
              <h2 className="font-display text-xs font-semibold tracking-wide text-neutral-950">
                Product
              </h2>
              <ul className="mt-4 space-y-2.5 text-sm text-neutral-600">
                <li>
                  <Link to="/features" className="transition-colors hover:text-neutral-950">
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    to="/#how-it-works"
                    onClick={(e) => handleSectionLink('how-it-works', e)}
                    className="transition-colors hover:text-neutral-950"
                  >
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link to="/pricing" className="transition-colors hover:text-neutral-950">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xs font-semibold tracking-wide text-neutral-950">
                Company
              </h2>
              <ul className="mt-4 space-y-2.5 text-sm text-neutral-600">
                <li>
                  <Link to="/about" className="transition-colors hover:text-neutral-950">
                    About Aqoriel
                  </Link>
                </li>
                <li>
                  <Link to="/about#terranova" className="transition-colors hover:text-neutral-950">
                    TerraNova Systems Ltd
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xs font-semibold tracking-wide text-neutral-950">
                Support
              </h2>
              <ul className="mt-4 space-y-2.5 text-sm text-neutral-600">
                <li>
                  <Link to="/contact" className="transition-colors hover:text-neutral-950">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/#faq"
                    onClick={(e) => handleSectionLink('faq', e)}
                    className="transition-colors hover:text-neutral-950"
                  >
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="transition-colors hover:text-neutral-950">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="transition-colors hover:text-neutral-950">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xs font-semibold tracking-wide text-neutral-950">
                Connect
              </h2>
              <ul className="mt-4 space-y-2.5 text-sm text-neutral-600">
                <li>
                  <a
                    href={SITE_CONFIG.telegramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-medium text-neutral-950 transition-colors hover:text-neutral-600"
                  >
                    <TelegramIcon className="h-4 w-4 shrink-0" />
                    <span className="font-mono text-xs">{SITE_CONFIG.telegramHandle}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  </a>
                </li>
                <li className="text-xs leading-relaxed text-neutral-500">
                  Official Telegram assistant for academic support.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-neutral-200 pt-8 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} {SITE_CONFIG.brandName}. A product of {SITE_CONFIG.parentCompany}. All
            rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="hover:text-neutral-950 transition-colors">
              Privacy Policy
            </Link>
            <span aria-hidden="true">·</span>
            <Link to="/terms" className="hover:text-neutral-950 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
