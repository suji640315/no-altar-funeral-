import { NextResponse } from 'next/server';
import { createPool } from '@vercel/postgres';

const pool = createPool({
  connectionString: process.env.POSTGRES_URL || process.env.DATABASE_URL
});

export async function GET() {
  try {
    // Fetch latest 20 counsels
    const { rows } = await pool.sql`
      SELECT id, name, region, patient_location, created_at 
      FROM counsels 
      ORDER BY created_at DESC 
      LIMIT 20
    `;

    // Mask the names for privacy (e.g. 홍길동 -> 홍*동)
    const maskedRows = rows.map(row => {
      let maskedName = row.name;
      if (row.name.length >= 2) {
        maskedName = row.name.charAt(0) + '*' + (row.name.length > 2 ? row.name.slice(2) : '');
      }
      
      return {
        id: row.id,
        name: maskedName,
        region: row.region,
        location: row.patient_location || '자택',
        date: new Date(row.created_at).toISOString().slice(0, 10)
      };
    });

    return NextResponse.json({ success: true, data: maskedRows });
  } catch (error: any) {
    console.error("DB Error:", error.message);
    return NextResponse.json({ success: false, data: [] });
  }
}