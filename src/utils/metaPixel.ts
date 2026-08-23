export const META_PIXEL_ID =
  process.env.NEXT_PUBLIC_META_PIXEL_ID || "2050379479180660";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    _fbq?: unknown;
  }
}

/**
 * Tracks a pageview event with Meta Pixel.
 */
export const pageview = () => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "PageView");
  }
};

/**
 * Tracks custom or standard conversion events with Meta Pixel.
 * @param name Event name (e.g. 'Lead', 'CompleteRegistration', 'Subscribe')
 * @param options Additional parameter metadata object
 */
export const event = (name: string, options: Record<string, unknown> = {}) => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", name, options);
  }
};
