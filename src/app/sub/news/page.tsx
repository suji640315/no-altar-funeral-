import type { Metadata } from 'next';
import Link from 'next/link';
import { getNewsList } from '@/lib/news';
import NewsBoardClient from './NewsBoardClient';
import { Newspaper, Phone, MessageSquare } from 'lucide-react';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata: Metadata = {
  title: '상조·장례 뉴스 및 장례정보 소식 | 공무원라이프 무빈소장례',
  description:
    '최신 상조·장례 뉴스, 무빈소장례·가족장 비용 및 절차 가이드, 사망진단서 발급, e하늘 화장장 예약 등 꼭 알아야 할 장례정보 소식을 전해드립니다.',
  keywords: [
    '상조뉴스',
    '장례뉴스',
    '장례정보',
    '상조소식',
    '무빈소장례',
    '가족장비용',
    '장례절차가이드',
    '후불제상조',
    '공무원라이프',
  ],
  alternates: {
    canonical: 'https://xn--9n2b17ct9ctte97j.net/sub/news',
  },
  openGraph: {
    title: '상조·장례 뉴스 및 장례정보 소식 | 공무원라이프 무빈소장례',
    description:
      '공무원라이프 무빈소장례 전문센터가 전하는 최신 상조·장례 뉴스 및 실속 있는 장례 절차·비용 정보 가이드.',
    url: 'https://xn--9n2b17ct9ctte97j.net/sub/news',
    siteName: '무빈소장례',
    type: 'website',
  },
};

export default async function NewsBoardPage() {
  const posts = await getNewsList({ limit: 100 });

  // ItemList JSON-LD for Google & Naver Search Bot
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: '상조·장례 뉴스 및 장례정보 소식',
    description:
      '공무원라이프 무빈소장례 전문센터의 최신 상조·장례 뉴스 및 장례절차 정보 칼럼 목록',
    itemListElement: posts.slice(0, 20).map((post, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      url: `https://xn--9n2b17ct9ctte97j.net/sub/news/${post.id}`,
      name: post.title,
    })),
  };

  return (
    <div className="w-full min-h-screen bg-gray-50/40 pt-[80px] pb-24 flex flex-col justify-between font-sans text-gray-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      {/* 상단 타이틀 헤더 */}
      <div className="w-full bg-[#00387f] py-12 text-center text-white">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2 text-white">
          상조·장례 뉴스
        </h1>
        <div className="w-9 h-[2px] bg-white/80 mx-auto my-3"></div>
        <p className="text-blue-100 text-sm md:text-base font-normal max-w-2xl mx-auto px-4 break-keep">
          알아두면 큰 힘이 되는 상조·장례 정보 소식과 무빈소·가족장 실속 가이드를 전해드립니다
        </p>
      </div>

      <div className="container mx-auto max-w-5xl px-4 py-12 md:py-16 flex-1">
        {/* 인트로 안내 박스 (SEO 텍스트 강화) */}
        <div className="bg-gradient-to-br from-blue-50/90 via-slate-50 to-indigo-50/60 border border-blue-100/90 rounded-2xl p-6 md:p-8 mb-10 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00387f] text-white font-semibold text-xs shadow-sm">
              <Newspaper className="w-3.5 h-3.5" />
              상조·장례 전문 칼럼 &amp; 뉴스
            </span>
          </div>
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-2 tracking-tight leading-snug break-keep">
            투명한 장례 문화와 합리적인 상조 선택을 위한 공식 정보 마당
          </h2>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed break-keep">
            (주)공무원라이프 무빈소장례 전문센터는 최근 변화하는 장례 문화 뉴스부터 무빈소장례·가족장 비용 비교, 임종 직후 필수 행정 절차, 화장장 예약 방법까지 유가족께 실질적인 도움이 되는 검증된 정보를 정기적으로 업데이트합니다.
          </p>
        </div>

        {/* 게시판 목록 및 카테고리 필터 */}
        <NewsBoardClient initialPosts={posts} />

        {/* 하단 상담 안내 배너 */}
        <div className="mt-14 bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
              24시간 장례 긴급출동 &amp; 사전 무료상담
            </span>
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mt-2 break-keep">
              무빈소장례 비용이나 절차가 궁금하신가요?
            </h3>
            <p className="text-sm text-gray-600 mt-1 break-keep">
              전담 국가공인 장례지도사가 365일 24시간 친절하고 상세하게 안내해 드립니다.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0 w-full md:w-auto">
            <a
              href="tel:02-477-8379"
              className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl text-sm shadow-sm transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>직통상담 02-477-8379</span>
            </a>
            <Link
              href="/sub/counsel"
              className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#00387f] hover:bg-[#002b63] text-white font-bold rounded-xl text-sm shadow-sm transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>무료상담 및 할인카드 신청</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

