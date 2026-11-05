export interface NewsPost {
  id: number | string;
  category: string;
  title: string;
  summary: string;
  content: string;
  author: string;
  image_url: string | null;
  keywords: string;
  views: number | string;
  is_notice: number | string;
  is_public: number | string;
  created_at: string;
  updated_at: string;
}

export const NEWS_CATEGORIES = [
  '전체',
  '상조·장례 뉴스',
  '무빈소·가족장 정보',
  '장례절차 가이드',
  '공지사항',
] as const;

export const REMOTE_NEWS_API = 'http://www.xn--ob0br3ru1cxypqxah90d.com/api/mubinso_news.php';

export async function getNewsList(options?: {
  category?: string;
  limit?: number;
  includePrivate?: boolean;
  q?: string;
}): Promise<NewsPost[]> {
  try {
    const params = new URLSearchParams();
    if (options?.category && options.category !== '전체') {
      params.set('category', options.category);
    }
    if (options?.limit) {
      params.set('limit', String(options.limit));
    }
    if (options?.includePrivate) {
      params.set('include_private', '1');
    }
    if (options?.q) {
      params.set('q', options.q);
    }

    const qs = params.toString();
    const url = qs ? `${REMOTE_NEWS_API}?${qs}` : REMOTE_NEWS_API;

    const res = await fetch(url, {
      cache: 'no-store',
    });

    if (!res.ok) return [];
    const data = await res.json();
    if (data && data.success && Array.isArray(data.posts)) {
      return data.posts;
    }
    return [];
  } catch (err) {
    console.error('Failed to fetch news list:', err);
    return [];
  }
}

export async function getNewsById(
  id: string | number,
  noView = false
): Promise<{
  post: NewsPost | null;
  prev_post: { id: number | string; title: string; category: string; created_at: string } | null;
  next_post: { id: number | string; title: string; category: string; created_at: string } | null;
}> {
  try {
    const url = `${REMOTE_NEWS_API}?id=${encodeURIComponent(String(id))}${noView ? '&no_view=1' : ''}`;
    const res = await fetch(url, {
      cache: 'no-store',
    });
    if (!res.ok) {
      return { post: null, prev_post: null, next_post: null };
    }
    const data = await res.json();
    if (data && data.success && data.post) {
      return {
        post: data.post,
        prev_post: data.prev_post || null,
        next_post: data.next_post || null,
      };
    }
    return { post: null, prev_post: null, next_post: null };
  } catch (err) {
    console.error('Failed to fetch news detail:', err);
    return { post: null, prev_post: null, next_post: null };
  }
}

