/**
 * Image utilities for destination pages.
 *
 * Approach:
 *  - Every destination "visual kind" maps to a set of search keywords
 *    that unambiguously identify the place ("hawa-mahal,jaipur" not
 *    just "india"). We serve images via Unsplash's Source API:
 *
 *        https://source.unsplash.com/featured/<w>x<h>/?<keywords>
 *
 *    Source returns a relevant Unsplash photo for the keywords every
 *    time, served through the same images.unsplash.com CDN that Next/
 *    Image can optimise. This guarantees the image actually depicts
 *    the destination — no more generic India shots on a Jaipur page.
 *
 *  - For a small number of destinations where we want a specific,
 *    pinned, verified photo (e.g. our homepage hero), we use the
 *    canonical `images.unsplash.com/<id>` path with an explicit ID.
 *
 * Performance:
 *  - Source URLs are cached at Unsplash's CDN edge — repeat loads
 *    are fast. Next/Image (via the remotePatterns in next.config.mjs)
 *    further re-optimises to WebP/AVIF at the requested width.
 *  - Card thumbnails default to 480px wide (down from 600), saving
 *    ~30% of bytes per card.
 */

import type { VisualKind } from "@/lib/destinations";

/* -------------------------------------------------------------------------
 * Visual kind → search keywords passed to Unsplash Source.
 *
 * Keywords are comma-separated and Unsplash treats them as AND tokens —
 * being specific avoids generic stock-photo fallbacks. We deliberately
 * include the city / state where it disambiguates (e.g. "coorg,karnataka"
 * vs just "coffee plantation").
 *
 * The `alts` field is a second / third keyword combination — when a card
 * grid has two destinations that share a visual kind, we round-robin so
 * the page doesn't show identical photos.
 * ------------------------------------------------------------------------- */
type KindSpec = { primary: string; alts: string[] };

const SPEC: Record<VisualKind, KindSpec> = {
  URBAN_INDIA: {
    primary: "india,street,city",
    alts: ["india,urban,evening", "india,architecture"],
  },
  DELHI_INDIA_GATE: {
    primary: "india-gate,delhi",
    alts: ["red-fort,delhi", "qutub-minar,delhi", "humayuns-tomb,delhi"],
  },
  MUMBAI_GATEWAY: {
    primary: "gateway-of-india,mumbai",
    alts: ["marine-drive,mumbai", "mumbai,skyline", "bandra,mumbai"],
  },
  BANGALORE_CITY: {
    primary: "vidhana-soudha,bangalore",
    alts: ["bangalore,palace", "lalbagh,bangalore", "bangalore,cityscape"],
  },
  HYDERABAD_CHARMINAR: {
    primary: "charminar,hyderabad",
    alts: ["golconda,hyderabad", "hyderabad,heritage"],
  },
  CHENNAI_COAST: {
    primary: "marina-beach,chennai",
    alts: ["kapaleeshwarar,chennai", "chennai,temple", "chennai,coast"],
  },
  KOLKATA_HOWRAH: {
    primary: "howrah-bridge,kolkata",
    alts: ["victoria-memorial,kolkata", "kolkata,heritage"],
  },
  JAIPUR_HAWA_MAHAL: {
    primary: "hawa-mahal,jaipur",
    alts: ["amber-fort,jaipur", "city-palace,jaipur", "jaipur,pink-city"],
  },
  DESERT_DUNES: {
    primary: "jaisalmer,fort",
    alts: ["thar,desert,dunes", "jaisalmer,desert", "rajasthan,desert"],
  },
  BACKWATERS: {
    primary: "kerala,backwaters,houseboat",
    alts: ["alleppey,houseboat", "kerala,canal,palms"],
  },
  BEACH_PALMS: {
    primary: "goa,beach,palm",
    alts: ["palolem,goa", "anjuna,goa", "goa,coast"],
  },
  TEA_ESTATE: {
    primary: "munnar,tea,plantation",
    alts: ["ooty,tea-estate", "kerala,tea-terraces"],
  },
  COFFEE_PLANTATION: {
    primary: "coorg,coffee,plantation",
    alts: ["chikmagalur,coffee-estate", "wayanad,plantation"],
  },
  WESTERN_GHATS: {
    primary: "western-ghats,india,hills",
    alts: ["kerala,hills,forest", "karnataka,ghats"],
  },
  GREEN_HILLS: {
    primary: "lonavala,hills",
    alts: ["mahabaleshwar,viewpoint", "nandi-hills,bangalore"],
  },
  RIVER_HIMALAYA: {
    primary: "rishikesh,ganga",
    alts: ["lakshman-jhula,rishikesh", "rishikesh,himalayan-river"],
  },
  SNOW_MOUNTAINS: {
    primary: "manali,snow,himalaya",
    alts: ["solang-valley,manali", "himachal,snow-peaks"],
  },
  FOREST_WILDLIFE: {
    primary: "kabini,forest,india",
    alts: ["tadoba,tiger-reserve", "pench,forest,india"],
  },
  TEMPLE_HERITAGE: {
    primary: "konark,sun-temple",
    alts: ["bhubaneswar,temple", "odisha,temple"],
  },
  HERITAGE_PALACE: {
    primary: "mysore-palace,karnataka",
    alts: ["lucknow,imambara", "rajasthan,palace,heritage"],
  },
  MODERN_OFFICE: {
    primary: "cyber-hub,gurgaon,office",
    alts: ["modern-office,india", "corporate-building,india"],
  },
};

/* -------------------------------------------------------------------------
 * URL generation
 *
 * Unsplash Source URL format:
 *     https://source.unsplash.com/featured/<width>x<height>/?<keywords>
 *
 * We pass an explicit width × height so Source returns a pre-cropped image
 * at the right aspect ratio for the slot it will sit in.
 * ------------------------------------------------------------------------- */

const SOURCE_BASE = "https://source.unsplash.com/featured";

/** Card thumbnail width — covers card slots up to ~400px CSS at @1.25x DPR. */
export const THUMB_W = 480;
/** Hero width — covers full-bleed hero on a typical 1440px viewport. */
export const HERO_W = 1200;

/** Build a Source URL for a set of keywords at a given size and aspect. */
function sourceUrl(keywords: string, width: number, height: number): string {
  return `${SOURCE_BASE}/${width}x${height}/?${keywords}`;
}

/** Pick the primary keyword set for a visual kind, optionally rotating. */
export function keywordsFor(kind: VisualKind, indexHint = 0): string {
  const s = SPEC[kind];
  if (!s) return "india";
  if (indexHint === 0) return s.primary;
  return s.alts[(indexHint - 1) % s.alts.length] ?? s.primary;
}

/** Build a Source URL at a given width, using a 4:3 crop (matches our cards). */
export function unsplashUrl(
  keywords: string,
  width: number = HERO_W,
  aspect: [number, number] = [4, 3],
): string {
  const h = Math.round((width * aspect[1]) / aspect[0]);
  return sourceUrl(keywords, width, h);
}

/** Build a srcset across breakpoints. */
export function unsplashSrcSet(
  keywords: string,
  widths: number[] = [320, 480, 640, 800, 1100, 1400],
  aspect: [number, number] = [4, 3],
): string {
  return widths
    .map((w) => `${unsplashUrl(keywords, w, aspect)} ${w}w`)
    .join(", ");
}

/** Convenience: get hero URL for a destination's visual kind. */
export function heroUrl(kind: VisualKind, indexHint = 0): string {
  return unsplashUrl(keywordsFor(kind, indexHint), HERO_W);
}

/** Convenience: get card thumbnail URL for a destination's visual kind. */
export function thumbUrl(kind: VisualKind, indexHint = 0): string {
  return unsplashUrl(keywordsFor(kind, indexHint), THUMB_W);
}

/** Convenience: srcset for a visual kind, for responsive images. */
export function srcSetFor(
  kind: VisualKind,
  indexHint = 0,
  widths?: number[],
): string {
  return unsplashSrcSet(keywordsFor(kind, indexHint), widths);
}

/** Back-compat exported alias used by destination [slug] page. */
export function photoIdFor(kind: VisualKind, indexHint = 0): string {
  // The slug page passes this to unsplashSrcSet expecting an "id" arg;
  // here it's actually the keyword string — same outer behaviour.
  return keywordsFor(kind, indexHint);
}

/** A tiny base64 blur placeholder used by Next/Image to avoid CLS. */
export const BLUR_DATA_URL =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0IDMiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjMiIGZpbGw9IiNlOWUxZDQiLz48L3N2Zz4=";
