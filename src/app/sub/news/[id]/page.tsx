import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getNewsById } from '@/lib/news';
import NewsCtaBanner from '@/components/NewsCtaBanner';
import {
  Calendar,
  Eye,
  User,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Tag,
} from 'lucide-react';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

interface PageProps {
  params: { id: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { post } = await getNewsById(params.id, true);

  if (!post) {
    return {
      title: '게시물을 찾을 수 없습니다 | 공무원라이프 무빈소장례',
    };
  }

  const description =
    post.summary ||
    post.content
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
      .slice(0, 150);

  const canonicalUrl = `https://xn--9n2b17ct9ctte97j.net/sub/news/${post.id}`;
  const ogImageUrl = post.image_url
    ? post.image_url.startsWith('http')
      ? post.image_url
      : `https://xn--9n2b17ct9ctte97j.net${post.image_url}`
    : 'https://xn--9n2b17ct9ctte97j.net/logo.png';

  const keywordList = post.keywords
    ? post.keywords
        .split(',')
        .map((k) => k.trim())
        .filter(Boolean)
    : ['무빈소장례', '상조뉴스', '장례정보', '후불제상조', '공무원라이프'];

  return {
    title: `${post.title} | 상조·장례 뉴스 - 공무원라이프 무빈소장례`,
    description,
    keywords: keywordList,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: post.title,
      description,
      url: canonicalUrl,
      siteName: '무빈소장례',
      type: 'article',
      publishedTime: post.created_at,
      modifiedTime: post.updated_at || post.created_at,
      images: [
        {
          url: ogImageUrl,
          alt: post.title,
        },
      ],
    },
  };
}

export default async function NewsDetailPage({ params }: PageProps) {
  const { post, prev_post, next_post } = await getNewsById(params.id, false);

  if (!post) {
    notFound();
  }

  const canonicalUrl = `https://xn--9n2b17ct9ctte97j.net/sub/news/${post.id}`;
  const ogImageUrl = post.image_url
    ? post.image_url.startsWith('http')
      ? post.image_url
      : `https://xn--9n2b17ct9ctte97j.net${post.image_url}`
    : 'https://xn--9n2b17ct9ctte97j.net/logo.png';

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalUrl,
    },
    headline: post.title,
    description:
      post.summary ||
      post.content
        .replace(/<[^>]+>/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()
        .slice(0, 150),
    image: [ogImageUrl],
    datePublished: post.created_at,
    dateModified: post.updated_at || post.created_at,
    author: {
      '@type': 'Organization',
      name: post.author || '(주)공무원라이프 무빈소장례',
      url: 'https://xn--9n2b17ct9ctte97j.net',
    },
    publisher: {
      '@type': 'Organization',
      name: '(주)공무원라이프 무빈소장례',
      logo: {
        '@type': 'ImageObject',
        url: 'https://xn--9n2b17ct9ctte97j.net/logo.png',
      },
    },
  };

  const keywords = post.keywords
    ? post.keywords
        .split(',')
        .map((k) => k.trim())
        .filter(Boolean)
    : [];

  const isHtmlContent = /<[a-z][\s\S]*>/i.test(post.content);

  return (
    <div className="w-full min-h-screen bg-gray-50/40 pt-[80px] pb-24 font-sans text-gray-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* 상단 타이틀 헤더 */}
      <div className="w-full bg-[#00387f] py-10 text-center text-white">
        <p className="text-xs md:text-sm font-bold text-blue-200 mb-1">
          상조·장례 뉴스 및 장례정보 소식
        </p>
        <div className="text-2xl md:text-3xl font-bold tracking-tight text-white">
          {post.category || '상조·장례 뉴스'}
        </div>
      </div>

      <div className="container mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* 상단 목록 돌아가기 */}
        <div className="mb-6">
          <Link
            href="/sub/news"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-gray-600 hover:text-[#00387f] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>상조·장례 뉴스 목록으로</span>
          </Link>
        </div>

        {/* 본문 아티클 카드 */}
        <article className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
          {/* 아티클 헤더 */}
          <header className="p-6 md:p-10 border-b border-gray-100 bg-gradient-to-b from-slate-50/70 to-white">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-[#00387f] border border-blue-200">
                {post.category}
              </span>
            </div>

            <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-snug break-keep mb-5">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-gray-500">
              <span className="inline-flex items-center gap-1.5 font-medium text-gray-700">
                <User className="w-4 h-4 text-[#00387f]" />
                <span>{post.author || '공무원라이프 무빈소장례'}</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-gray-400" />
                <time dateTime={post.created_at}>
                  {(post.created_at || '').substring(0, 16)}
                </time>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Eye className="w-4 h-4 text-gray-400" />
                <span>조회 {post.views || 0}</span>
              </span>
            </div>
          </header>

          {/* 대표 이미지가 있을 경우 노출 */}
          {post.image_url && (
            <div className="px-6 md:px-10 pt-8">
              <div className="rounded-xl overflow-hidden border border-gray-100 bg-gray-50 flex justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.image_url}
                  alt={post.title}
                  className="max-h-[520px] w-auto object-contain"
                />
              </div>
            </div>
          )}

          {/* 본문 내용 */}
          <div className="p-6 md:p-10 text-base md:text-[17px] text-gray-800 leading-relaxed break-keep">
            {isHtmlContent ? (
              <div
                className="prose max-w-none prose-headings:text-gray-900 prose-p:leading-relaxed prose-a:text-blue-600"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            ) : (
              <div className="space-y-4 whitespace-pre-line leading-8">
                {post.content}
              </div>
            )}
          </div>

          {/* 키워드 태그 영역 */}
          {keywords.length > 0 && (
            <div className="px-6 md:px-10 pb-8 pt-4 border-t border-gray-100 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1 text-xs font-bold text-gray-500 mr-1">
                <Tag className="w-3.5 h-3.5" />
                관련 키워드:
              </span>
              {keywords.map((kw, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium"
                >
                  #{kw}
                </span>
              ))}
            </div>
          )}
        </article>

        {/* 이전글 / 다음글 네비게이션 */}
        <div className="mt-6 bg-white border border-gray-200 rounded-2xl divide-y divide-gray-100 overflow-hidden shadow-xs">
          {next_post && (
            <Link
              href={`/sub/news/${next_post.id}`}
              className="flex items-center justify-between px-5 py-4 hover:bg-blue-50/40 transition-colors group"
            >
              <div className="flex items-center gap-3 min-w-0">
                <span className="inline-flex items-center gap-1 text-xs font-bold text-gray-500 shrink-0">
                  <ChevronRight className="w-4 h-4 rotate-[-90deg]" />
                  다음글
                </span>
                <span className="text-sm font-medium text-gray-800 group-hover:text-[#00387f] truncate">
                  {next_post.title}
                </span>
              </div>
              <span className="text-xs text-gray-400 shrink-0 ml-4 hidden sm:inline">
                {(next_post.created_at || '').substring(0, 10)}
              </span>
            </Link>
          )}
          {prev_post && (
            <Link
              href={`/sub/news/${prev_post.id}`}
              className="flex items-center justify-between px-5 py-4 hover:bg-blue-50/40 transition-colors group"
            >
              <div className="flex items-center gap-3 min-w-0">
                <span className="inline-flex items-center gap-1 text-xs font-bold text-gray-500 shrink-0">
                  <ChevronLeft className="w-4 h-4 rotate-[-90deg]" />
                  이전글
                </span>
                <span className="text-sm font-medium text-gray-800 group-hover:text-[#00387f] truncate">
                  {prev_post.title}
                </span>
              </div>
              <span className="text-xs text-gray-400 shrink-0 ml-4 hidden sm:inline">
                {(prev_post.created_at || '').substring(0, 10)}
              </span>
            </Link>
          )}
        </div>

        {/* 하단 상담 & 할인카드 발급 액션 배너 */}
        <NewsCtaBanner />

        <div className="mt-8 text-center">
          <Link
            href="/sub/news"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 font-bold rounded-xl text-sm shadow-xs transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>목록으로 돌아가기</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

