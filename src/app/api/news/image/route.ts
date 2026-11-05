import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const file = searchParams.get('file') || '';

    // Prevent directory traversal
    const cleanFile = file.replace(/\.\./g, '').replace(/^\/+/, '');
    if (!cleanFile) {
      return new NextResponse('Missing file parameter', { status: 400 });
    }

    const remoteUrl = `http://www.xn--ob0br3ru1cxypqxah90d.com/uploads/mubinso_news/${cleanFile}`;
    const res = await fetch(remoteUrl);

    if (!res.ok) {
      return new NextResponse('Image not found', { status: 404 });
    }

    const contentType = res.headers.get('content-type') || 'image/jpeg';
    const buffer = await res.arrayBuffer();

    return new NextResponse(buffer, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (err) {
    console.error('Image proxy error:', err);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

