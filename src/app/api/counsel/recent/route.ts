import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

function maskName(name: string): string {
  if (!name || !name.trim()) return '신*고객';
  const t = name.trim();
  if (t.length === 1) return t + '*';
  if (t.length === 2) return t[0] + '*';
  return t[0] + '*' + t.slice(2);
}

function formatRelativeTime(targetDate: Date, nowDate: Date): string {
  const diffMs = nowDate.getTime() - targetDate.getTime();
  const diffMin = Math.max(0, Math.floor(diffMs / (1000 * 60)));

  if (diffMin <= 1) return '방금 전';
  if (diffMin < 60) return `${diffMin}분 전`;

  const diffHours = Math.floor(diffMin / 60);
  if (diffHours < 6) return `${diffHours}시간 전`;

  // KST (UTC + 9)
  const kstTarget = new Date(targetDate.getTime() + 9 * 60 * 60 * 1000);
  const kstNow = new Date(nowDate.getTime() + 9 * 60 * 60 * 1000);

  const isSameDay =
    kstTarget.getUTCDate() === kstNow.getUTCDate() &&
    kstTarget.getUTCMonth() === kstNow.getUTCMonth() &&
    kstTarget.getUTCFullYear() === kstNow.getUTCFullYear();

  const hh = String(kstTarget.getUTCHours()).padStart(2, '0');
  const mm = String(kstTarget.getUTCMinutes()).padStart(2, '0');

  if (isSameDay) {
    return `오늘 ${hh}:${mm}`;
  }

  const yesterday = new Date(kstNow.getTime() - 24 * 60 * 60 * 1000);
  const isYesterday =
    kstTarget.getUTCDate() === yesterday.getUTCDate() &&
    kstTarget.getUTCMonth() === yesterday.getUTCMonth() &&
    kstTarget.getUTCFullYear() === yesterday.getUTCFullYear();

  if (isYesterday) {
    return `어제 ${hh}:${mm}`;
  }

  const month = String(kstTarget.getUTCMonth() + 1).padStart(2, '0');
  const day = String(kstTarget.getUTCDate()).padStart(2, '0');
  return `${month}-${day} ${hh}:${mm}`;
}

const nationwidePool = [
  // 1 ~ 10 (최근 1~2시간)
  { name: '김*수', region: '서울', location: '요양병원', offsetMin: 8 },
  { name: '이*영', region: '경기', location: '자택', offsetMin: 18 },
  { name: '박*훈', region: '인천', location: '대학병원', offsetMin: 29 },
  { name: '최*민', region: '서울', location: '일반병원', offsetMin: 42 },
  { name: '정*진', region: '경기', location: '요양원', offsetMin: 57 },
  { name: '강*우', region: '부산', location: '종합병원', offsetMin: 74 },
  { name: '조*현', region: '대구', location: '요양병원', offsetMin: 92 },
  { name: '윤*호', region: '대전', location: '자택', offsetMin: 110 },
  { name: '장*서', region: '광주', location: '호스피스', offsetMin: 128 },
  { name: '임*준', region: '인천', location: '요양병원', offsetMin: 146 },

  // 11 ~ 20 (오늘 주간/새벽)
  { name: '한*원', region: '울산', location: '종합병원', offsetMin: 168 },
  { name: '오*석', region: '경기', location: '자택', offsetMin: 195 },
  { name: '서*윤', region: '서울', location: '대학병원', offsetMin: 224 },
  { name: '신*재', region: '세종', location: '요양병원', offsetMin: 256 },
  { name: '권*태', region: '강원', location: '일반병원', offsetMin: 290 },
  { name: '황*연', region: '충남', location: '요양원', offsetMin: 325 },
  { name: '안*희', region: '충북', location: '자택', offsetMin: 362 },
  { name: '송*근', region: '전북', location: '종합병원', offsetMin: 400 },
  { name: '류*승', region: '전남', location: '요양병원', offsetMin: 440 },
  { name: '홍*정', region: '경북', location: '호스피스', offsetMin: 485 },

  // 21 ~ 30
  { name: '고*은', region: '경남', location: '대학병원', offsetMin: 530 },
  { name: '문*식', region: '제주', location: '자택', offsetMin: 580 },
  { name: '양*혁', region: '서울', location: '요양병원', offsetMin: 630 },
  { name: '손*찬', region: '경기', location: '일반병원', offsetMin: 685 },
  { name: '배*아', region: '인천', location: '요양원', offsetMin: 740 },
  { name: '백*환', region: '부산', location: '종합병원', offsetMin: 795 },
  { name: '허*숙', region: '대구', location: '자택', offsetMin: 855 },
  { name: '유*선', region: '대전', location: '요양병원', offsetMin: 915 },
  { name: '남*규', region: '광주', location: '대학병원', offsetMin: 980 },
  { name: '심*진', region: '서울', location: '호스피스', offsetMin: 1045 },

  // 31 ~ 40 (어제)
  { name: '노*경', region: '경기', location: '요양병원', offsetMin: 1110 },
  { name: '하*주', region: '인천', location: '자택', offsetMin: 1175 },
  { name: '곽*성', region: '강원', location: '일반병원', offsetMin: 1240 },
  { name: '성*철', region: '충남', location: '종합병원', offsetMin: 1305 },
  { name: '차*영', region: '충북', location: '요양원', offsetMin: 1370 },
  { name: '주*현', region: '전북', location: '대학병원', offsetMin: 1435 },
  { name: '우*민', region: '전남', location: '자택', offsetMin: 1500 },
  { name: '구*본', region: '경북', location: '요양병원', offsetMin: 1565 },
  { name: '민*기', region: '경남', location: '호스피스', offsetMin: 1630 },
  { name: '진*수', region: '서울', location: '종합병원', offsetMin: 1695 },

  // 41 ~ 50
  { name: '지*훈', region: '경기', location: '요양병원', offsetMin: 1760 },
  { name: '엄*태', region: '인천', location: '일반병원', offsetMin: 1825 },
  { name: '채*서', region: '부산', location: '자택', offsetMin: 1890 },
  { name: '원*빈', region: '대구', location: '대학병원', offsetMin: 1955 },
  { name: '천*일', region: '대전', location: '요양원', offsetMin: 2020 },
  { name: '방*옥', region: '울산', location: '요양병원', offsetMin: 2085 },
  { name: '공*명', region: '세종', location: '자택', offsetMin: 2150 },
  { name: '현*석', region: '서울', location: '종합병원', offsetMin: 2215 },
  { name: '함*우', region: '경기', location: '호스피스', offsetMin: 2280 },
  { name: '변*정', region: '인천', location: '요양병원', offsetMin: 2345 },

  // 51 ~ 60 (2일 전)
  { name: '염*호', region: '강원', location: '일반병원', offsetMin: 2410 },
  { name: '여*환', region: '충남', location: '자택', offsetMin: 2475 },
  { name: '추*미', region: '충북', location: '대학병원', offsetMin: 2540 },
  { name: '도*현', region: '전북', location: '요양원', offsetMin: 2605 },
  { name: '소*영', region: '전남', location: '종합병원', offsetMin: 2670 },
  { name: '석*진', region: '경북', location: '요양병원', offsetMin: 2735 },
  { name: '선*원', region: '경남', location: '자택', offsetMin: 2800 },
  { name: '설*희', region: '서울', location: '호스피스', offsetMin: 2865 },
  { name: '마*준', region: '경기', location: '대학병원', offsetMin: 2930 },
  { name: '길*수', region: '인천', location: '요양병원', offsetMin: 2995 },

  // 61 ~ 70
  { name: '김*옥', region: '부산', location: '일반병원', offsetMin: 3060 },
  { name: '이*태', region: '대구', location: '자택', offsetMin: 3125 },
  { name: '박*미', region: '대전', location: '종합병원', offsetMin: 3190 },
  { name: '최*규', region: '광주', location: '요양원', offsetMin: 3255 },
  { name: '정*순', region: '울산', location: '요양병원', offsetMin: 3320 },
  { name: '강*식', region: '서울', location: '대학병원', offsetMin: 3385 },
  { name: '조*자', region: '경기', location: '자택', offsetMin: 3450 },
  { name: '윤*철', region: '인천', location: '호스피스', offsetMin: 3515 },
  { name: '장*혜', region: '세종', location: '요양병원', offsetMin: 3580 },
  { name: '임*동', region: '강원', location: '종합병원', offsetMin: 3645 },

  // 71 ~ 80 (3일 전)
  { name: '한*수', region: '충남', location: '일반병원', offsetMin: 3710 },
  { name: '오*경', region: '충북', location: '자택', offsetMin: 3775 },
  { name: '서*호', region: '전북', location: '요양병원', offsetMin: 3840 },
  { name: '신*숙', region: '전남', location: '대학병원', offsetMin: 3905 },
  { name: '권*오', region: '경북', location: '요양원', offsetMin: 3970 },
  { name: '황*자', region: '경남', location: '종합병원', offsetMin: 4035 },
  { name: '안*선', region: '제주', location: '자택', offsetMin: 4100 },
  { name: '송*복', region: '서울', location: '요양병원', offsetMin: 4165 },
  { name: '류*인', region: '경기', location: '호스피스', offsetMin: 4230 },
  { name: '홍*기', region: '인천', location: '대학병원', offsetMin: 4295 },

  // 81 ~ 90
  { name: '고*환', region: '부산', location: '일반병원', offsetMin: 4360 },
  { name: '문*자', region: '대구', location: '자택', offsetMin: 4425 },
  { name: '양*덕', region: '대전', location: '요양병원', offsetMin: 4490 },
  { name: '손*애', region: '광주', location: '종합병원', offsetMin: 4555 },
  { name: '배*길', region: '울산', location: '요양원', offsetMin: 4620 },
  { name: '백*순', region: '강원', location: '대학병원', offsetMin: 4685 },
  { name: '허*칠', region: '충남', location: '자택', offsetMin: 4750 },
  { name: '유*분', region: '충북', location: '호스피스', offsetMin: 4815 },
  { name: '남*화', region: '전북', location: '요양병원', offsetMin: 4880 },
  { name: '심*익', region: '전남', location: '종합병원', offsetMin: 4945 },

  // 91 ~ 100
  { name: '노*상', region: '경북', location: '일반병원', offsetMin: 5010 },
  { name: '하*영', region: '경남', location: '자택', offsetMin: 5075 },
  { name: '곽*희', region: '서울', location: '대학병원', offsetMin: 5140 },
  { name: '성*모', region: '경기', location: '요양원', offsetMin: 5205 },
  { name: '차*준', region: '인천', location: '요양병원', offsetMin: 5270 },
  { name: '주*성', region: '부산', location: '호스피스', offsetMin: 5335 },
  { name: '우*철', region: '대구', location: '종합병원', offsetMin: 5400 },
  { name: '구*인', region: '대전', location: '자택', offsetMin: 5465 },
  { name: '민*홍', region: '광주', location: '일반병원', offsetMin: 5530 },
  { name: '진*광', region: '세종', location: '요양병원', offsetMin: 5595 }
];

export async function GET() {
  const now = new Date();
  const realList: any[] = [];

  try {
    const { data: realRequests } = await supabase
      .from('counsel_requests')
      .select('id, name, region, patient_location, funeral_home, created_at')
      .order('created_at', { ascending: false })
      .limit(20);

    if (realRequests && realRequests.length > 0) {
      realRequests.forEach(req => {
        let region = req.region?.trim() || '';
        if (!region) {
          const loc = req.patient_location || req.funeral_home || '';
          if (loc.includes('서울')) region = '서울';
          else if (loc.includes('경기') || loc.includes('일산') || loc.includes('성남') || loc.includes('수원')) region = '경기';
          else if (loc.includes('인천')) region = '인천';
          else region = '수도권';
        }

        let locStr = req.patient_location?.trim() || req.funeral_home?.trim() || '상담접수';
        if (locStr.length > 12) locStr = locStr.slice(0, 12);

        const targetTime = req.created_at ? new Date(req.created_at) : now;

        realList.push({
          id: `real_${req.id}`,
          name: maskName(req.name),
          region,
          location: locStr,
          date: formatRelativeTime(targetTime, now),
          isReal: true
        });
      });
    }
  } catch (err) {
    console.error('Supabase fetch error in /api/counsel/recent:', err);
  }

  // 100인 풀 데이터 상대시간 계산
  const poolList = nationwidePool.map((item, idx) => {
    const itemDate = new Date(now.getTime() - item.offsetMin * 60 * 1000);
    return {
      id: `pool_${idx}`,
      name: item.name,
      region: item.region,
      location: item.location,
      date: formatRelativeTime(itemDate, now),
      isReal: false
    };
  });

  // 실제 고객 신청건을 최상단에 배치 후 풀 데이터 병합
  const combined = [...realList, ...poolList];

  return NextResponse.json({ success: true, data: combined });
}
