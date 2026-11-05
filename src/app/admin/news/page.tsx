'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  Newspaper,
  Plus,
  Trash2,
  Edit3,
  RefreshCw,
  ExternalLink,
  Search,
  Check,
  X,
  Upload,
  Eye,
  EyeOff,
  Pin,
  Users,
  Sparkles,
} from 'lucide-react';
import { NewsPost, NEWS_CATEGORIES } from '@/lib/news';

const WRITE_CATEGORIES = NEWS_CATEGORIES.filter((c) => c !== '전체');

export default function AdminNewsPage() {
  const [posts, setPosts] = useState<NewsPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterCategory, setFilterCategory] = useState<string>('전체');
  const [searchKeyword, setSearchKeyword] = useState<string>('');

  // 작성 / 수정 모달 상태
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | string | null>(null);
  const [category, setCategory] = useState<string>('상조·장례 뉴스');
  const [title, setTitle] = useState<string>('');
  const [summary, setSummary] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [keywords, setKeywords] = useState<string>('');
  const [author, setAuthor] = useState<string>('공무원라이프 무빈소장례');
  const [imageUrl, setImageUrl] = useState<string>('');
  const [isNotice, setIsNotice] = useState<boolean>(false);
  const [isPublic, setIsPublic] = useState<boolean>(true);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isUploadingImage, setIsUploadingImage] = useState<boolean>(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/news?include_private=1&limit=200');
      const data = await res.json();
      if (data && data.success && Array.isArray(data.posts)) {
        setPosts(data.posts);
      }
    } catch (err) {
      console.error('Failed to load news posts:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const openCreateModal = () => {
    setEditingId(null);
    setCategory('상조·장례 뉴스');
    setTitle('');
    setSummary('');
    setContent('');
    setKeywords('무빈소장례, 상조뉴스, 장례정보, 후불제상조');
    setAuthor('공무원라이프 무빈소장례');
    setImageUrl('');
    setIsNotice(false);
    setIsPublic(true);
    setIsModalOpen(true);
  };

  const openEditModal = (post: NewsPost) => {
    setEditingId(post.id);
    setCategory(post.category || '상조·장례 뉴스');
    setTitle(post.title || '');
    setSummary(post.summary || '');
    setContent(post.content || '');
    setKeywords(post.keywords || '');
    setAuthor(post.author || '공무원라이프 무빈소장례');
    setImageUrl(post.image_url || '');
    setIsNotice(Number(post.is_notice) === 1);
    setIsPublic(Number(post.is_public) !== 0);
    setIsModalOpen(true);
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert('이미지 파일(jpg, png, gif, webp)만 업로드 가능합니다.');
      return;
    }

    setIsUploadingImage(true);
    try {
      const formData = new FormData();
      formData.append('file', file);

      const res = await fetch('/api/news?action=upload', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (data.success && data.url) {
        setImageUrl(data.url);
      } else {
        alert(data.error || '이미지 업로드에 실패했습니다.');
      }
    } catch (err) {
      console.error(err);
      alert('이미지 업로드 중 오류가 발생했습니다.');
    } finally {
      setIsUploadingImage(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      alert('제목과 본문 내용을 입력해 주세요.');
      return;
    }

    setIsSubmitting(true);
    try {
      const payload = {
        id: editingId || undefined,
        category,
        title: title.trim(),
        summary: summary.trim(),
        content: content.trim(),
        keywords: keywords.trim(),
        author: author.trim() || '공무원라이프 무빈소장례',
        image_url: imageUrl.trim() || null,
        is_notice: isNotice ? 1 : 0,
        is_public: isPublic ? 1 : 0,
      };

      const url = editingId ? '/api/news?action=update' : '/api/news';
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (data.success) {
        alert(editingId ? '게시물이 수정되었습니다.' : '새 게시물이 등록되었습니다.');
        setIsModalOpen(false);
        fetchPosts();
      } else {
        alert(data.error || '저장에 실패했습니다.');
      }
    } catch (err) {
      console.error(err);
      alert('저장 중 오류가 발생했습니다.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (post: NewsPost) => {
    if (!confirm(`"${post.title}" 게시물을 정말 삭제하시겠습니까?`)) return;

    try {
      const res = await fetch(`/api/news?id=${post.id}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (data.success) {
        setPosts((prev) => prev.filter((p) => String(p.id) !== String(post.id)));
      } else {
        alert(data.error || '삭제에 실패했습니다.');
      }
    } catch (err) {
      console.error(err);
      alert('삭제 중 오류가 발생했습니다.');
    }
  };

  const handleTogglePublic = async (post: NewsPost) => {
    const nextPublic = Number(post.is_public) === 1 ? 0 : 1;
    try {
      const res = await fetch('/api/news?action=visibility', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ids: [post.id], is_public: nextPublic }),
      });
      const data = await res.json();
      if (data.success) {
        setPosts((prev) =>
          prev.map((p) =>
            String(p.id) === String(post.id) ? { ...p, is_public: nextPublic } : p
          )
        );
      }
    } catch (err) {
      console.error(err);
    }
  };

  const filteredPosts = posts.filter((p) => {
    const matchCat = filterCategory === '전체' || p.category === filterCategory;
    const q = searchKeyword.trim().toLowerCase();
    if (!q) return matchCat;
    return (
      matchCat &&
      ((p.title || '').toLowerCase().includes(q) ||
        (p.content || '').toLowerCase().includes(q) ||
        (p.keywords || '').toLowerCase().includes(q))
    );
  });

  return (
    <div className="w-full min-h-screen bg-gray-50 pt-[100px] pb-20 font-sans text-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        {/* 관리자 상단 탭 네비게이션 */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <Link
              href="/admin/counsel"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <Users className="w-4 h-4" />
              상담 신청 관리
            </Link>
            <Link
              href="/admin/news"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold bg-[#00387f] text-white shadow-sm"
            >
              <Newspaper className="w-4 h-4" />
              상조·장례 뉴스 관리
            </Link>
          </div>
          <Link
            href="/sub/news"
            target="_blank"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold text-[#00387f] bg-blue-50 border border-blue-200 hover:bg-blue-100 transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            홈페이지 게시판 화면 보기 (/sub/news)
          </Link>
        </div>

        {/* 타이틀 & 액션 버튼 */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <Newspaper className="w-6 h-6 text-[#00387f]" />
              상조·장례 뉴스 및 칼럼 관리
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              등록된 글은 고유 URL, 메타태그, 사이트맵(sitemap.xml)에 즉시 반영되어 구글·네이버 검색엔진에 수집됩니다.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={fetchPosts}
              className="flex items-center gap-1.5 px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors shadow-sm"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
              새로고침
            </button>
            <button
              onClick={openCreateModal}
              className="flex items-center gap-1.5 px-5 py-2.5 bg-[#00387f] text-white rounded-lg text-sm font-bold hover:bg-[#002b63] transition-colors shadow-sm"
            >
              <Plus className="w-4 h-4" />
              새 뉴스·칼럼 글쓰기
            </button>
          </div>
        </div>

        {/* SEO 작성 팁 안내 배너 */}
        <div className="bg-blue-50/80 border border-blue-200 rounded-xl p-4 mb-6 flex items-start gap-3">
          <Sparkles className="w-5 h-5 text-[#00387f] shrink-0 mt-0.5" />
          <div className="text-xs md:text-sm text-gray-700 leading-relaxed">
            <strong className="text-[#00387f]">구글·네이버 상위노출 작성 팁:</strong> 공무원라이프 홈페이지에 올린 글과 동일한 주제를 올리실 때는 <strong>제목의 키워드 조합(예: 무빈소장례, 가족장, 직장장, 장례비용)</strong>과 <strong>첫 문단 문장</strong>을 조금 다르게 다듬어서 등록해 주세요. 두 사이트 모두 검색엔진에서 원본 고품질 문서로 인정받아 동시 상위노출 효과가 극대화됩니다.
          </div>
        </div>

        {/* 카테고리 필터 & 검색 */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div className="flex flex-wrap items-center gap-2">
            {NEWS_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold border transition-colors ${
                  filterCategory === cat
                    ? 'bg-[#00387f] text-white border-[#00387f]'
                    : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
              placeholder="제목 또는 키워드 검색..."
              className="w-full pl-9 pr-4 py-2 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#00387f]"
            />
          </div>
        </div>

        {/* 게시글 목록 테이블 */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 text-gray-700 border-b border-gray-200 text-xs uppercase">
                <tr>
                  <th className="px-4 py-4 font-bold whitespace-nowrap w-16 text-center">번호</th>
                  <th className="px-4 py-4 font-bold whitespace-nowrap">카테고리</th>
                  <th className="px-4 py-4 font-bold min-w-[280px]">제목 / 키워드</th>
                  <th className="px-4 py-4 font-bold whitespace-nowrap text-center">상태</th>
                  <th className="px-4 py-4 font-bold whitespace-nowrap text-center">조회수</th>
                  <th className="px-4 py-4 font-bold whitespace-nowrap">등록일</th>
                  <th className="px-4 py-4 font-bold whitespace-nowrap text-center">관리</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {loading ? (
                  <tr>
                    <td colSpan={7} className="px-6 py-12 text-center text-gray-500">
                      게시물을 불러오는 중입니다...
                    </td>
                  </tr>
                ) : filteredPosts.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="px-6 py-12 text-center text-gray-500">
                      등록된 게시물이 없습니다. 우측 상단 [새 뉴스·칼럼 글쓰기] 버튼을 눌러 첫 글을 작성해 보세요.
                    </td>
                  </tr>
                ) : (
                  filteredPosts.map((post) => {
                    const isNoticeRow = Number(post.is_notice) === 1;
                    const isPublicRow = Number(post.is_public) !== 0;

                    return (
                      <tr
                        key={post.id}
                        className={`hover:bg-blue-50/40 transition-colors ${
                          isNoticeRow ? 'bg-blue-50/20' : ''
                        }`}
                      >
                        <td className="px-4 py-4 text-center whitespace-nowrap font-medium text-gray-500">
                          {isNoticeRow ? (
                            <span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded bg-[#00387f] text-white text-[11px] font-bold">
                              <Pin className="w-3 h-3" />
                              고정
                            </span>
                          ) : (
                            post.id
                          )}
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-gray-100 text-gray-700 border border-gray-200">
                            {post.category}
                          </span>
                        </td>
                        <td className="px-4 py-4">
                          <div className="font-bold text-gray-900 mb-1 flex items-center gap-2">
                            <button
                              type="button"
                              onClick={() => openEditModal(post)}
                              className="text-left hover:text-[#00387f] hover:underline"
                            >
                              {post.title}
                            </button>
                            {post.image_url && (
                              <span className="text-[10px] font-bold px-1.5 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded">
                                이미지포함
                              </span>
                            )}
                          </div>
                          {post.keywords && (
                            <div className="text-xs text-gray-400 truncate max-w-md">
                              키워드: {post.keywords}
                            </div>
                          )}
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-center">
                          <button
                            type="button"
                            onClick={() => handleTogglePublic(post)}
                            className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold border transition-colors ${
                              isPublicRow
                                ? 'bg-green-50 text-green-700 border-green-200 hover:bg-green-100'
                                : 'bg-gray-100 text-gray-500 border-gray-300 hover:bg-gray-200'
                            }`}
                            title="클릭하여 공개/비공개 전환"
                          >
                            {isPublicRow ? (
                              <>
                                <Eye className="w-3 h-3" /> 공개중
                              </>
                            ) : (
                              <>
                                <EyeOff className="w-3 h-3" /> 비공개
                              </>
                            )}
                          </button>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-center text-gray-600">
                          {post.views || 0}
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-gray-500 text-xs">
                          {(post.created_at || '').substring(0, 16)}
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-center">
                          <div className="inline-flex items-center gap-1.5">
                            <Link
                              href={`/sub/news/${post.id}`}
                              target="_blank"
                              className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
                              title="새 창에서 게시글 확인"
                            >
                              <ExternalLink className="w-3.5 h-3.5" />
                              보기
                            </Link>
                            <button
                              type="button"
                              onClick={() => openEditModal(post)}
                              className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-md transition-colors"
                            >
                              <Edit3 className="w-3.5 h-3.5" />
                              수정
                            </button>
                            <button
                              type="button"
                              onClick={() => handleDelete(post)}
                              className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium text-red-600 bg-red-50 hover:bg-red-100 border border-red-200 rounded-md transition-colors"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                              삭제
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* 글쓰기 / 수정 모달 */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-3xl w-full shadow-2xl border border-gray-200 overflow-hidden my-8">
            <div className="flex items-center justify-between px-6 py-4 bg-[#00387f] text-white">
              <h2 className="text-lg font-bold flex items-center gap-2">
                <Newspaper className="w-5 h-5" />
                {editingId ? '상조·장례 뉴스 게시물 수정' : '새 상조·장례 뉴스 글쓰기'}
              </h2>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="p-1 text-white/80 hover:text-white rounded-lg"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-5 max-h-[82vh] overflow-y-auto">
              {/* 카테고리 및 옵션 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5">
                    카테고리 선택 *
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-gray-300 rounded-xl text-sm font-medium focus:outline-none focus:border-[#00387f]"
                  >
                    {WRITE_CATEGORIES.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5">
                    작성자 표기
                  </label>
                  <input
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:border-[#00387f]"
                  />
                </div>
              </div>

              {/* 상단 고정 / 공개 여부 체크 */}
              <div className="flex flex-wrap items-center gap-6 bg-gray-50 px-4 py-3 rounded-xl border border-gray-200">
                <label className="inline-flex items-center gap-2 cursor-pointer text-sm font-medium text-gray-800">
                  <input
                    type="checkbox"
                    checked={isNotice}
                    onChange={(e) => setIsNotice(e.target.checked)}
                    className="w-4 h-4 accent-[#00387f] rounded"
                  />
                  <span>목록 최상단 고정 (중요소식 뱃지 표시)</span>
                </label>

                <label className="inline-flex items-center gap-2 cursor-pointer text-sm font-medium text-gray-800">
                  <input
                    type="checkbox"
                    checked={isPublic}
                    onChange={(e) => setIsPublic(e.target.checked)}
                    className="w-4 h-4 accent-[#00387f] rounded"
                  />
                  <span>홈페이지 및 검색엔진 즉시 공개</span>
                </label>
              </div>

              {/* 제목 */}
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5">
                  제목 (고객이 검색할 핵심 키워드를 포함해 주세요) *
                </label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="예: 무빈소장례 절차와 비용, 일반 3일장과 무엇이 다를까요?"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm font-bold focus:outline-none focus:border-[#00387f]"
                />
              </div>

              {/* 검색엔진 요약설명 (선택) */}
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5">
                  한 줄 요약 설명 (비워두시면 본문 앞부분으로 자동 생성됩니다)
                </label>
                <input
                  type="text"
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}
                  placeholder="구글·네이버 검색 결과 제목 아래에 노출될 핵심 요약 문장 (100~140자 권장)"
                  className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:border-[#00387f]"
                />
              </div>

              {/* 본문 내용 */}
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5">
                  본문 내용 *
                </label>
                <textarea
                  required
                  rows={12}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="상조·장례 뉴스 및 장례정보 본문을 입력해 주세요. 줄바꿈이 그대로 반영됩니다."
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm leading-relaxed focus:outline-none focus:border-[#00387f]"
                />
              </div>

              {/* 핵심 키워드 태그 */}
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5">
                  검색 키워드 태그 (쉼표 , 로 구분)
                </label>
                <input
                  type="text"
                  value={keywords}
                  onChange={(e) => setKeywords(e.target.value)}
                  placeholder="예: 무빈소장례, 가족장비용, 상조뉴스, 화장장예약, 후불제상조"
                  className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:border-[#00387f]"
                />
              </div>

              {/* 대표 이미지 첨부 */}
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5">
                  대표 이미지 첨부 (선택)
                </label>
                <div className="flex flex-wrap items-center gap-3">
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    disabled={isUploadingImage}
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-xl text-xs font-bold transition-colors"
                  >
                    <Upload className="w-4 h-4" />
                    {isUploadingImage ? '업로드 중...' : '컴퓨터에서 사진 선택'}
                  </button>
                  {imageUrl && (
                    <button
                      type="button"
                      onClick={() => setImageUrl('')}
                      className="text-xs font-bold text-red-600 hover:underline"
                    >
                      이미지 제거
                    </button>
                  )}
                </div>

                {imageUrl && (
                  <div className="mt-3 p-3 bg-gray-50 border border-gray-200 rounded-xl inline-block">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={imageUrl}
                      alt="미리보기"
                      className="max-h-40 rounded-lg object-contain"
                    />
                  </div>
                )}
              </div>

              {/* 하단 저장 / 취소 버튼 */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-200">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-2.5 bg-white border border-gray-300 rounded-xl text-sm font-bold text-gray-700 hover:bg-gray-50"
                >
                  취소
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-1.5 px-6 py-2.5 bg-[#00387f] hover:bg-[#002b63] text-white rounded-xl text-sm font-bold shadow-sm disabled:opacity-50"
                >
                  <Check className="w-4 h-4" />
                  {isSubmitting
                    ? '저장 중...'
                    : editingId
                    ? '수정 내용 저장'
                    : '게시물 등록하기'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

