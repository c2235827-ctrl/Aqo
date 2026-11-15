import { useEffect } from 'react';
import { BrowserRouter, Link, Route, Routes, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { FeaturesPage } from './pages/FeaturesPage';
import { AboutPage } from './pages/AboutPage';
import { PricingPage } from './pages/PricingPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPage, TermsPage } from './pages/LegalPages';

function ScrollHandler() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const targetId = hash.slice(1);
      requestAnimationFrame(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [pathname, hash]);

  return null;
}

function NotFoundPage() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <p className="font-mono text-xs text-neutral-500">404</p>
        <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
          Page Not Found
        </h1>
        <p className="mt-4 text-base text-neutral-600">
          The page you requested is unavailable or has moved.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-neutral-950 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollHandler />
      <div className="flex min-h-screen flex-col bg-white text-neutral-950">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
