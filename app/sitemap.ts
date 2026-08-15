import type { MetadataRoute } from 'next';

const routes = [
  '',
  '/solutions',
  '/industries',
  '/demos',
  '/demos/voice-receptionist',
  '/demos/call-audit',
  '/about',
  '/contact',
  '/audit',
  '/privacy',
  '/terms',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://arvion.ai';
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
  }));
}
