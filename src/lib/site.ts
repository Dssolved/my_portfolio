// Absolute origin of the deployed site, used for metadata, sitemap, robots,
// and structured data. Set NEXT_PUBLIC_SITE_URL in production; on Vercel it
// falls back to the project's production domain automatically.
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");
