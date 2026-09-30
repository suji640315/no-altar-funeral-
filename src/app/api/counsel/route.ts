import { NextResponse } from 'next/server';
import { createPool } from '@vercel/postgres';

// Use connectionString from either POSTGRES_URL or DATABASE_URL (Neon compatibility)
const pool = createPool({
  connectionString: process.env.POSTGRES_URL || process.env.DATABASE_URL
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, region, funeralHome, patientLocation, notes } = body;
    
    // Ensure table exists
    await pool.sql`
      CREATE TABLE IF NOT EXISTS counsels (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        phone VARCHAR(255) NOT NULL,
        region VARCHAR(255) NOT NULL,
        funeral_home VARCHAR(255),
        notes TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;
    
    // Safely add the new column if it doesn't exist
    await pool.sql`
      ALTER TABLE counsels ADD COLUMN IF NOT EXISTS patient_location VARCHAR(255);
    `;

    await pool.sql`
      INSERT INTO counsels (name, phone, region, funeral_home, patient_location, notes)
      VALUES (${name}, ${phone}, ${region}, ${funeralHome}, ${patientLocation}, ${notes});
    `;

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("DB Error:", error.message);
    return NextResponse.json({ success: false, error: "데이터베이스 연결이 필요합니다." }, { status: 500 });
  }
}

export async function GET() {
  try {
    const { rows } = await pool.sql`SELECT * FROM counsels ORDER BY created_at DESC`;
    return NextResponse.json({ success: true, data: rows });
  } catch (error: any) {
    console.error("DB Error:", error.message);
    return NextResponse.json({ success: true, data: [] });
  }
}
