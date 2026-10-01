import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Aligo SMS 전송 로직
    try {
      // 폼 데이터 구성 (상담신청 및 VIP카드 발급 공통 처리)
      const typeStr = body.type === 'VIP' ? '[VIP카드 특별발급 신청]' : '[무빈소장례.net 신규상담]';
      const msgText = 
`${typeStr}
이름: ${body.name || '미입력'}
연락처: ${body.phone || '미입력'}
지역: ${body.region || '미입력'}
환자계신곳: ${body.patientLocation || '미입력'}
원하는장례식장: ${body.funeralHome || '미입력'}
요청사항: ${body.notes || '없음'}`;
      
      const aligoParams = new URLSearchParams();
      aligoParams.append('key', '0v3j2ixm9hua4mt8mm9ascfmori9tfp4'); // 제공해주신 API Key
      aligoParams.append('userid', 'naeun1103'); // 제공해주신 ID
      aligoParams.append('sender', '01055172715'); // 발신번호 (대표번호)
      aligoParams.append('receiver', '01055172715'); // 수신번호 (김오신 담당자)
      aligoParams.append('msg', msgText);
      aligoParams.append('title', '신규 장례 접수알림');
      
      const aligoRes = await fetch('https://apis.aligo.in/send/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: aligoParams.toString()
      });
      
      const aligoData = await aligoRes.json();
      console.log('Aligo Send Result:', aligoData);
      
    } catch (smsError) {
      console.error('Aligo SMS Failed:', smsError);
    }
    
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ success: false, error: '서버 오류가 발생했습니다.' }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ success: true, data: [] });
}
