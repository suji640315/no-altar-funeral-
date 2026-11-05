import Link from 'next/link';
import { getNewsList } from '@/lib/news';
import { Newspaper, ChevronRight, Calendar } from 'lucide-react';

export default async function LatestNewsSection() {
  const posts = await getNewsList({ limit: 3 });

  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <section className="max-w-5xl mx-auto px-4 w-full mb-20">
      <div className="flex items-end justify-between mb-6">
        <div>
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00387f] bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-full mb-2">
            <Newspaper className="w-3.5 h-3.5" />
            상조·장례 정보 및 최신 소식
          </span>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
            상조·장례 뉴스
          </h2>
        </div>
        <Link
          href="/sub/news"
          className="inline-flex items-center gap-1 text-xs md:text-sm font-bold text-[#00387f] hover:underline"
        >
          <span>전체보기</span>
          <ChevronRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
        {posts.slice(0, 3).map((post) => (
          <Link
            key={post.id}
            href={`/sub/news/${post.id}`}
            className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col justify-between hover:shadow-lg hover:border-blue-300 hover:-translate-y-0.5 transition-all group"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-2.5 py-0.5 text-[11px] font-bold rounded-full bg-blue-50 text-[#00387f] border border-blue-100">
                  {post.category}
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] text-gray-400">
                  <Calendar className="w-3 h-3" />
                  {(post.created_at || '').substring(0, 10)}
                </span>
              </div>

              <h3 className="text-base font-bold text-gray-900 group-hover:text-[#00387f] transition-colors line-clamp-2 leading-snug mb-2 break-keep">
                {post.title}
              </h3>

              <p className="text-xs md:text-[13px] text-gray-600 line-clamp-3 leading-relaxed break-keep">
                {post.summary || post.content.replace(/<[^>]+>/g, '').slice(0, 110)}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-gray-500 group-hover:text-[#00387f]">
              <span>자세히 보기</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

