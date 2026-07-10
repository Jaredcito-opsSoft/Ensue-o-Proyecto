export function isLikelyMapsUrl(value?: string | null) {
  if (!value) return false;
  try {
    const url = new URL(value);
    return (
      url.hostname.includes("google.") ||
      url.hostname.includes("goo.gl") ||
      url.hostname.includes("maps.app.goo.gl")
    );
  } catch {
    return false;
  }
}

export function getMapsHref(address: string, mapsUrl?: string | null) {
  if (isLikelyMapsUrl(mapsUrl)) return mapsUrl as string;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}
