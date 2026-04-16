import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://ai.soulsync.today',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
