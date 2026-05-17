import type { MetadataRoute } from 'next';
import { episodes } from '@/content/episodes';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://pepper.kimsheritage.com';

  return episodes
    .filter((ep) => ep.published)
    .flatMap((ep) => [
      {
        url: `${base}/ep/${ep.slug}`,
        lastModified: ep.date ? new Date(ep.date) : new Date(),
        alternates: {
          languages: {
            ko: `${base}/ep/${ep.slug}`,
            en: `${base}/en/ep/${ep.slug}`,
          },
        },
      },
      {
        url: `${base}/en/ep/${ep.slug}`,
        lastModified: ep.date ? new Date(ep.date) : new Date(),
      },
    ]);
}
