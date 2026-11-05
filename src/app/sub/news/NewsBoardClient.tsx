'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { NewsPost, NEWS_CATEGORIES } from '@/lib/news';
import { Search, Calendar, Eye, Pin, ChevronRight, Newspaper } from 'lucide-react';

interface Props {
  initialPosts: NewsPost[];
}

export default function NewsBoardClient({ initialPosts }: Props) {
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredPosts = useMemo(() => {
    return initialPosts.filter((post) => {
      const matchCat =
        selectedCategory === '전체' || post.category === selectedCategory;
      const q = searchQuery.trim().toLowerCase();
      if (!q) return matchCat;
      const matchSearch =
        (post.title || '').toLowerCase().includes(q) ||
        (post.summary || '').toLowerCase().includes(q) ||
        (post.content || '').toLowerCase().includes(q) ||
        (post.keywords || '').toLowerCase().includes(q);
      return matchCat && matchSearch;
    });
  }, [initialPosts, selectedCategory, searchQuery]);

  const getCategoryBadgeStyle = (category: string) => {
    switch (category) {
      case '상조·장례 뉴스':
        return 'bg-blue-50 text-[#00387f] border-blue-200';
      case '무빈소·가족장 정보':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case '장례절차 가이드':
        return 'bg-indigo-50 text-indigo-700 border-indigo-200';
      case '공지사항':
        return 'bg-amber-50 text-amber-800 border-amber-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const formatDate = (dateStr: string) => {
    if (!dateStr) return '';
    return dateStr.substring(0, 10);
  };

  return (
    <div>
      {/* 카테고리 탭 & 검색창 */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div className="flex flex-wrap items-center gap-2">
          {NEWS_CATEGORIES.map((cat) => {
            const active = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs md:text-sm font-bold transition-all border ${
                  active
                    ? 'bg-[#00387f] text-white border-[#00387f] shadow-sm'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-blue-300 hover:text-[#00387f]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="상조·장례 키워드 검색..."
            className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00387f]/20 focus:border-[#00387f]"
          />
        </div>
      </div>

      {/* 게시글 목록 (시맨틱 아티클 리스트) */}
      {filteredPosts.length === 0 ? (
        <div className="bg-white border border-gray-200 rounded-2xl py-16 text-center px-4">
          <Newspaper className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-600 font-semibold">등록된 게시물이 없습니다.</p>
          <p className="text-xs text-gray-400 mt-1">다른 카테고리나 검색어를 선택해 보세요.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredPosts.map((post) => {
            const isNotice = Number(post.is_notice) === 1;
            const keywords = post.keywords
              ? post.keywords
                  .split(',')
                  .map((k) => k.trim())
                  .filter(Boolean)
                  .slice(0, 4)
              : [];

            return (
              <article
                key={post.id}
                className={`bg-white border rounded-2xl transition-all duration-200 hover:shadow-md hover:border-blue-300 overflow-hidden ${
                  isNotice ? 'border-blue-200 bg-blue-50/20' : 'border-gray-200'
                }`}
              >
                <Link
                  href={`/sub/news/${post.id}`}
                  className="flex flex-col md:flex-row items-stretch justify-between p-5 md:p-6 gap-5 group"
                >
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2.5">
                        {isNotice && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#00387f] text-white">
                            <Pin className="w-3 h-3" />
                            중요소식
                          </span>
                        )}
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold border ${getCategoryBadgeStyle(
                            post.category
                          )}`}
                        >
                          {post.category}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs text-gray-400 ml-1">
                          <Calendar className="w-3.5 h-3.5" />
                          <time dateTime={post.created_at}>{formatDate(post.created_at)}</time>
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs text-gray-400">
                          <Eye className="w-3.5 h-3.5" />
                          <span>{post.views || 0}</span>
                        </span>
                      </div>

                      <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-[#00387f] transition-colors leading-snug mb-2 break-keep">
                        {post.title}
                      </h3>

                      <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed break-keep">
                        {post.summary || post.content.replace(/<[^>]+>/g, '').slice(0, 150)}
                      </p>
                    </div>

                    {keywords.length > 0 && (
                      <div className="flex flex-wrap items-center gap-1.5 mt-4 pt-3 border-t border-gray-100">
                        {keywords.map((kw, i) => (
                          <span
                            key={i}
                            className="text-[11px] font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded-md"
                          >
                            #{kw}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {post.image_url && (
                    <div className="w-full md:w-48 h-40 md:h-36 rounded-xl overflow-hidden bg-gray-100 border border-gray-100 shrink-0 relative">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={post.image_url}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}

                  <div className="hidden md:flex items-center justify-center pl-2 text-gray-300 group-hover:text-[#00387f] group-hover:translate-x-1 transition-all">
                    <ChevronRight className="w-6 h-6" />
                  </div>
                </Link>
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
}

