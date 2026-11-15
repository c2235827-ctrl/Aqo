import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { SITE_CONFIG, type NavItem } from '../config/site';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!mobileOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileOpen]);

  const handleNavClick = (item: NavItem, event: React.MouseEvent<HTMLAnchorElement>) => {
    if (item.sectionId) {
      event.preventDefault();
      setMobileOpen(false);
      if (location.pathname === '/') {
        const el = document.getElementById(item.sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate(`/#${item.sectionId}`);
      }
    }
  };

  const isActive = (item: NavItem) => {
    if (item.sectionId) {
      return location.pathname === '/' && location.hash === `#${item.sectionId}`;
    }
    if (item.to === '/') {
      return location.pathname === '/' && !location.hash;
    }
    return location.pathname === item.to;
  };

  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-8 px-6">
        <Link
          to="/"
          className="font-display text-xl font-bold tracking-tight text-neutral-950 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950"
        >
          {SITE_CONFIG.brandName}
        </Link>

        <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-7">
          {SITE_CONFIG.navigation.map((item) => {
            const active = isActive(item);
            return (
              <Link
                key={item.label}
                to={item.to}
                onClick={(e) => handleNavClick(item, e)}
                className={`relative py-1 text-sm font-medium transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950 ${
                  active
                    ? 'text-neutral-950 after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-neutral-950'
                    : 'text-neutral-600 hover:text-neutral-950'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href={SITE_CONFIG.telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-lg bg-neutral-950 px-4 py-2 text-sm font-medium text-white transition-colors duration-150 hover:bg-neutral-800 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950"
          >
            <span>Get Started</span>
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-200 text-neutral-950 transition-colors hover:bg-neutral-100 lg:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950"
          >
            {mobileOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          id="mobile-navigation-drawer"
          className="border-t border-neutral-200 bg-white px-6 py-6 lg:hidden"
        >
          <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
            {SITE_CONFIG.navigation.map((item) => {
              const active = isActive(item);
              return (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={(e) => handleNavClick(item, e)}
                  className={`flex min-h-[44px] items-center rounded-lg px-3 text-base font-medium transition-colors ${
                    active
                      ? 'bg-neutral-100 text-neutral-950'
                      : 'text-neutral-700 hover:bg-neutral-50 hover:text-neutral-950'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-5 border-t border-neutral-200 pt-5">
            <a
              href={SITE_CONFIG.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg bg-neutral-950 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
            >
              <span>Get Started on Telegram</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
