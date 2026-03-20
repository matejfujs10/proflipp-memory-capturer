import { track } from '@vercel/analytics';

type EventName =
  | 'landing_view'
  | 'gallery_view'
  | 'pricing_view'
  | 'contact_page_view'
  | 'contact_submit'
  | 'book_click'
  | 'cta_click';

const firedEvents = new Set<string>();

/**
 * Track an analytics event. Fires only once per session by default.
 * Set `once: false` to allow repeated firing.
 */
export function trackEvent(
  event: EventName,
  props?: Record<string, string | number | boolean>,
  options?: { once?: boolean }
) {
  const once = options?.once ?? true;

  if (once && firedEvents.has(event)) return;
  if (once) firedEvents.add(event);

  if (import.meta.env.DEV) {
    console.log(`[Analytics] ${event}`, props ?? '');
  }

  track(event, props);
}

/**
 * Track CTA / booking button clicks. Always fires (not once-only).
 */
export function trackCTA(label: string) {
  trackEvent('book_click', { label }, { once: false });
}

/**
 * Track a generic CTA click. Always fires.
 */
export function trackClick(label: string) {
  trackEvent('cta_click', { label }, { once: false });
}
