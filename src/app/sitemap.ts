import { MetadataRoute } from 'next';
import { getNewsList } from '@/lib/news';

export const dynamic = 'force-dynamic';
export const revalidate = 60; // 60초 캐시 주기 또는 즉시 revalidatePath 대응

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://xn--9n2b17ct9ctte97j.net').replace(/\/$/, '');
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/sub/goods`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/sub/counsel`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/sub/news`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/sub/company`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/sub/procedure`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/sub/coalition`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  try {
    const posts = await getNewsList({ limit: 500 });
    const newsRoutes: MetadataRoute.Sitemap = posts
      .filter((post) => post.is_public !== 0 && post.is_public !== false)
      .map((post) => {
        const dateStr = post.updated_at || post.created_at;
        const modDate = dateStr ? new Date(dateStr.replace(' ', 'T')) : now;
        return {
          url: `${baseUrl}/sub/news/${post.id}`,
          lastModified: isNaN(modDate.getTime()) ? now : modDate,
          changeFrequency: 'weekly',
          priority: 0.7,
        };
      });

    return [...staticRoutes, ...newsRoutes];
  } catch (err) {
    console.error('Sitemap news fetch error:', err);
    return staticRoutes;
  }
}
