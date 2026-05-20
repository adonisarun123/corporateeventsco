/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" },
    ],
    // Sizes Next/Image will pre-generate. Aligns with the breakpoints
    // we emit in srcsets so the browser fetches the smallest variant
    // that fits the viewport.
    deviceSizes: [360, 480, 640, 768, 1024, 1280, 1440],
    imageSizes: [120, 240, 320, 480, 600, 800],
    formats: ["image/avif", "image/webp"],
    // 31 days — Unsplash photos are stable, browser cache aggressively.
    minimumCacheTTL: 60 * 60 * 24 * 31,
  },
  reactStrictMode: true,
  poweredByHeader: false,
  // Generate trailing slashes off — cleaner canonical URLs for SEO.
  trailingSlash: false,
  // Compress responses (default true, kept explicit for clarity).
  compress: true,
};

export default nextConfig;
