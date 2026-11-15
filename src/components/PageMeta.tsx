import { useEffect } from 'react';
import { SITE_CONFIG } from '../config/site';

interface PageMetaProps {
  title: string;
  description: string;
  path?: string;
}

export function PageMeta({ title, description, path = '/' }: PageMetaProps) {
  useEffect(() => {
    document.title = title;

    const updateMeta = (selector: string, attribute: 'name' | 'property', key: string, content: string) => {
      let element = document.querySelector<HTMLMetaElement>(selector);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    updateMeta('meta[name="description"]', 'name', 'description', description);
    updateMeta('meta[property="og:title"]', 'property', 'og:title', title);
    updateMeta('meta[property="og:description"]', 'property', 'og:description', description);
    updateMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    updateMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);

    if (SITE_CONFIG.siteUrl) {
      const normalizedBase = SITE_CONFIG.siteUrl.replace(/\/$/, '');
      const canonicalHref = `${normalizedBase}${path}`;
      let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', canonicalHref);
    }
  }, [title, description, path]);

  return null;
}
