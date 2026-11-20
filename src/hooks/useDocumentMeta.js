import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { site } from '../data/site';

function setMeta(selector, attribute, value) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement('meta');
    const match = selector.match(/\[(name|property)="(.+)"\]/);
    if (match) element.setAttribute(match[1], match[2]);
    document.head.appendChild(element);
  }
  element.setAttribute(attribute, value);
}

export function useDocumentMeta(title, description) {
  const { pathname } = useLocation();

  useEffect(() => {
    const fullTitle = title ? `${title} | ${site.name}` : `${site.name} | ${site.role}`;
    document.title = fullTitle;

    if (description) {
      setMeta('meta[name="description"]', 'content', description);
      setMeta('meta[property="og:description"]', 'content', description);
      setMeta('meta[name="twitter:description"]', 'content', description);
    }

    setMeta('meta[property="og:title"]', 'content', fullTitle);
    setMeta('meta[name="twitter:title"]', 'content', fullTitle);

    const canonicalHref = `${site.url}${pathname === '/' ? '/' : pathname}`;
    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalHref);
  }, [title, description, pathname]);
}
