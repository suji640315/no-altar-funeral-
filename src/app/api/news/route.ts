import { NextResponse } from 'next/server';
import { REMOTE_NEWS_API } from '@/lib/news';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const qs = searchParams.toString();
    const targetUrl = qs ? `${REMOTE_NEWS_API}?${qs}` : REMOTE_NEWS_API;

    const res = await fetch(targetUrl, { cache: 'no-store' });
    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (err: any) {
    console.error('GET /api/news error:', err);
    return NextResponse.json(
      { success: false, error: err?.message || '데이터를 불러오지 못했습니다.' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const action = searchParams.get('action') || '';
    const contentType = request.headers.get('content-type') || '';

    const targetUrl = action
      ? `${REMOTE_NEWS_API}?action=${encodeURIComponent(action)}`
      : REMOTE_NEWS_API;

    if (contentType.includes('multipart/form-data')) {
      const formData = await request.formData();
      const res = await fetch(targetUrl, {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      return NextResponse.json(data, { status: res.status });
    }

    const body = await request.text();
    const res = await fetch(targetUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body,
    });
    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (err: any) {
    console.error('POST /api/news error:', err);
    return NextResponse.json(
      { success: false, error: err?.message || '요청 처리 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.text();
    const res = await fetch(`${REMOTE_NEWS_API}?action=update`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body,
    });
    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (err: any) {
    console.error('PUT /api/news error:', err);
    return NextResponse.json(
      { success: false, error: err?.message || '수정 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const bodyText = await request.text().catch(() => '');

    const targetUrl = id
      ? `${REMOTE_NEWS_API}?action=delete&id=${encodeURIComponent(id)}`
      : `${REMOTE_NEWS_API}?action=delete`;

    const res = await fetch(targetUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: bodyText || JSON.stringify({ id }),
    });
    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (err: any) {
    console.error('DELETE /api/news error:', err);
    return NextResponse.json(
      { success: false, error: err?.message || '삭제 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}

