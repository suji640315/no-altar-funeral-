import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const getFilePath = () => {
  // Use /tmp for serverless environment like Vercel
  if (process.env.VERCEL) {
    return '/tmp/counsels.json';
  }
  return path.join(process.cwd(), 'counsels.json');
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const filePath = getFilePath();
    
    let data = [];
    try {
      const fileContent = await fs.readFile(filePath, 'utf8');
      data = JSON.parse(fileContent);
    } catch (e) {
      // File doesn't exist yet, which is fine
    }

    const newEntry = {
      id: Date.now(),
      ...body,
      createdAt: new Date().toISOString()
    };

    data.push(newEntry);
    
    await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf8');

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("File DB Error:", error.message);
    return NextResponse.json({ success: false, error: "서버 오류가 발생했습니다." }, { status: 500 });
  }
}

export async function GET() {
  try {
    const filePath = getFilePath();
    const fileContent = await fs.readFile(filePath, 'utf8');
    const data = JSON.parse(fileContent);
    
    // Sort descending by ID (newest first)
    data.sort((a: any, b: any) => b.id - a.id);
    
    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    return NextResponse.json({ success: true, data: [] });
  }
}
