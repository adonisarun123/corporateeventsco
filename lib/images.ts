/**
 * Image utilities for destination pages.
 *
 * We use Unsplash-hosted photos via the canonical
 *   https://images.unsplash.com/<photo-id>?<params>
 * URL pattern, which is the stable, long-supported path. (The older
 * `source.unsplash.com` redirect endpoint was deprecated in 2024 and
 * is unreliable in production — we do not use it.)
 *
 * For destinations where a specific landmark matters (Hawa Mahal,
 * Charminar, Howrah Bridge, Marina Beach, etc.) we use a photo ID
 * that depicts that landmark. For destinations whose visual identity
 * is a category (coffee plantation, beach, snow mountains) we use a
 * representative scene from the same region.
 *
 * URL params:
 *   auto=format  → Unsplash serves AVIF/WebP where supported
 *   fit=crop     → consistent aspect-ratio crop
 *   q=70         → slightly below default 80 — imperceptible at
 *                  thumbnail sizes, meaningful byte savings for LCP
 *   w=<n>        → render width
 */

import type { VisualKind } from "@/lib/destinations";

/* -------------------------------------------------------------------------
 * Curated image bank — Unsplash long-form photo IDs.
 *
 * Each entry has one or more candidate IDs. The first is primary;
 * additional ones are alternates that we round-robin through so visually-
 * similar destinations don't all land on identical photos.
 * ------------------------------------------------------------------------- */
const BANK: Record<VisualKind, string[]> = {
  URBAN_INDIA: [
    "photo-1570168007204-dfb528c6958f", // Mumbai Gateway-area
    "photo-1567157577867-05ccb1388e66", // Mumbai Marine Drive at night
    "photo-1582510003544-4d00b7f74220", // Indian street architecture
  ],
  DELHI_INDIA_GATE: [
    "photo-1587474260584-136574528ed5", // India Gate
    "photo-1597040663653-c1e8d318cdb1", // Delhi Red Fort
  ],
  MUMBAI_GATEWAY: [
    "photo-1570168007204-dfb528c6958f", // Gateway of India
    "photo-1529253355930-ddbe423a2ac7", // Mumbai skyline
  ],
  BANGALORE_CITY: [
    "photo-1596176530529-78163a4f7af2", // Bangalore Vidhana Soudha
    "photo-1582553081303-3ae7a3a06b9a", // Bangalore alt
  ],
  HYDERABAD_CHARMINAR: [
    "photo-1626714947537-b5f9c34f6f5a", // Charminar
    "photo-1631459715712-e73c3a8e2c95", // Hyderabad heritage
  ],
  CHENNAI_COAST: [
    "photo-1580294672790-6156c81a9e1c", // Marina Beach
    "photo-1591105327764-4c3a040804b9", // Chennai temple
  ],
  KOLKATA_HOWRAH: [
    "photo-1558431382-27e303142255", // Howrah Bridge
    "photo-1571051303849-72c7f0f1e95f", // Kolkata streets
  ],
  JAIPUR_HAWA_MAHAL: [
    "photo-1599661046289-e31897d36cf7", // Hawa Mahal
    "photo-1477587458883-47145ed94245", // Amber Fort
    "photo-1524492412937-b28074a5d7da", // Jaipur palace
  ],
  DESERT_DUNES: [
    "photo-1547150085-39c9b3f50fc6", // desert dunes
    "photo-1591375275624-c6df3b4e9b2c", // Jaisalmer fort
  ],
  BACKWATERS: [
    "photo-1602216056096-3b40cc0c9944", // Kerala backwaters
    "photo-1593693411515-c20261bcad6e", // houseboat
  ],
  BEACH_PALMS: [
    "photo-1512100356356-de1b84283e18", // beach palms
    "photo-1571896349842-33c89424de2d", // tropical beach
  ],
  TEA_ESTATE: [
    "photo-1583417319070-4a69db38a482", // tea estate
    "photo-1598257006626-48b0c252070d", // Munnar tea hills
  ],
  COFFEE_PLANTATION: [
    "photo-1602002418816-5c0aeef426aa", // Coorg-style hills
    "photo-1605649461784-7c8ef84b85b6", // plantation
  ],
  WESTERN_GHATS: [
    "photo-1605649461784-7c8ef84b85b6", // ghats fog
    "photo-1626621341517-bbf3d9990a23", // forest hills
  ],
  GREEN_HILLS: [
    "photo-1568322445389-f64ac2515020", // Lonavala-style
    "photo-1517824806704-9040b037703b", // hill station fog
  ],
  RIVER_HIMALAYA: [
    "photo-1598935898639-81586f7d2129", // Rishikesh Ganga
    "photo-1626621341517-bbf3d9990a23", // Himalayan river
  ],
  SNOW_MOUNTAINS: [
    "photo-1542038784456-1ea8e935640e", // snow mountains
    "photo-1626621341517-bbf3d9990a23", // alpine
  ],
  FOREST_WILDLIFE: [
    "photo-1605649461784-7c8ef84b85b6", // forest
    "photo-1581775231124-0e4c6906f7d7", // wildlife reserve
  ],
  TEMPLE_HERITAGE: [
    "photo-1582510003544-4d00b7f74220", // temple architecture
    "photo-1591105327764-4c3a040804b9", // South Indian temple
  ],
  HERITAGE_PALACE: [
    "photo-1599661046289-e31897d36cf7", // heritage palace
    "photo-1524492412937-b28074a5d7da", // palace heritage
  ],
  MODERN_OFFICE: [
    "photo-1497366216548-37526070297c", // modern office interior
    "photo-1497215728101-856f4ea42174", // glass office building
  ],
};

/** Default fallback if a visual kind is missing (shouldn't happen). */
const FALLBACK_ID = "photo-1577649925694-ad7820e69ce8";

/** Pick the photo ID for a given visual kind, optionally varying by index. */
export function photoIdFor(kind: VisualKind, indexHint = 0): string {
  const ids = BANK[kind];
  if (!ids || ids.length === 0) return FALLBACK_ID;
  return ids[indexHint % ids.length];
}

/** Keyword string (back-compat for callers expecting the keyword API). */
export function keywordsFor(kind: VisualKind, indexHint = 0): string {
  return photoIdFor(kind, indexHint);
}

/* -------------------------------------------------------------------------
 * URL generation
 *
 * We keep `q=70` (slightly below Unsplash's default 80) — at the sizes
 * we render, the difference is imperceptible and the byte savings are
 * meaningful for LCP and Core Web Vitals.
 * ------------------------------------------------------------------------- */

const BASE = "https://images.unsplash.com";

/** Smaller thumbnail than the original 600 — cards rarely render wider
 * than ~400 CSS px even on desktop, so 480 covers @1.25x DPR without
 * the bytes of a 600w pour. */
export const THUMB_W = 480;
export const HERO_W = 1200;

/** Build an Unsplash URL at a given width. Accepts a photo ID. */
export function unsplashUrl(id: string, width: number = HERO_W): string {
  return `${BASE}/${id}?auto=format&fit=crop&w=${width}&q=70`;
}

/** Build a srcset across common breakpoints. Use with `sizes`. */
export function unsplashSrcSet(
  id: string,
  widths: number[] = [320, 480, 640, 800, 1100, 1400],
): string {
  return widths.map((w) => `${unsplashUrl(id, w)} ${w}w`).join(", ");
}

/** Convenience: get hero URL for a destination's visual kind. */
export function heroUrl(kind: VisualKind, indexHint = 0): string {
  return unsplashUrl(photoIdFor(kind, indexHint), HERO_W);
}

/** Convenience: get card thumbnail URL for a destination's visual kind. */
export function thumbUrl(kind: VisualKind, indexHint = 0): string {
  return unsplashUrl(photoIdFor(kind, indexHint), THUMB_W);
}

/** Convenience: srcset for a visual kind, for responsive images. */
export function srcSetFor(
  kind: VisualKind,
  indexHint = 0,
  widths?: number[],
): string {
  return unsplashSrcSet(photoIdFor(kind, indexHint), widths);
}

/** A tiny base64 blur placeholder used by Next/Image to avoid CLS. */
export const BLUR_DATA_URL =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0IDMiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjMiIGZpbGw9IiNlOWUxZDQiLz48L3N2Zz4=";
