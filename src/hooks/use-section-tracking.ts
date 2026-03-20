import { useEffect, useRef } from 'react';
import { trackEvent } from '@/lib/analytics';

type TrackableSection = 'gallery_view' | 'pricing_view';

/**
 * Returns a ref to attach to a section element.
 * Fires the given analytics event once when the section enters the viewport.
 */
export function useSectionTracking(event: TrackableSection) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          trackEvent(event);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [event]);

  return ref;
}
