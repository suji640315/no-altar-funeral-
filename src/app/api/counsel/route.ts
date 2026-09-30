import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: 'DB required' }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ success: true, data: [] });
}

