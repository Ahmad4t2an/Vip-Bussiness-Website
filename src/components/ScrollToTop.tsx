import { useEffect } from 'react';
import { useLocation } from 'wouter';

/**
 * Scrolls the window to the top every time the route changes.
 * Without this, the browser keeps whatever scroll position you were
 * at on the previous page, so a new page can open "mid-scroll".
 */
export function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [location]);

  return null;
}
