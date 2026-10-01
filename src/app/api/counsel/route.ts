import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // 카카오 알림톡 전송 로직 (Aligo)
    try {
      const typeStr = body.type === 'VIP' ? 'VIP카드 신청' : '무빈소장례 상담';
      const name = body.name || '미입력';
      const phone = body.phone || '미입력';
      const region = body.region || '미입력';
      const location = body.patientLocation ? `${region} / ${body.patientLocation}` : region;
      const details = body.funeralHome ? `장례식장: ${body.funeralHome} / ${body.notes || ''}` : (body.notes || '없음');
      
      const now = new Date();
      const kstTime = new Date(now.getTime() + (9 * 60 * 60 * 1000));
      const dateStr = kstTime.toISOString().replace('T', ' ').substring(0, 19);

      // 승인된 템플릿과 정확히 일치해야 함
      const msgText = 
`[공무원라이프 새 상담접수]
• 구분: ${typeStr}
• 고객명: ${name}
• 연락처: ${phone}
• 위치/지역: ${location}
• 상세: ${details}
• 일시: ${dateStr}
※ 관리자 페이지에서 확인 후 신속히 연락 바랍니다.`;
      
      const aligoParams = new URLSearchParams();
      aligoParams.append('apikey', '0v3j2ixm9hua4mt8mm9ascfmori9tfp4'); // API Key
      aligoParams.append('userid', 'naeun1103'); // ID
      aligoParams.append('senderkey', 'e01732d5b41eef91b97d9e912c2bcb64f40ef6b0'); // 발신프로필 키
      aligoParams.append('tpl_code', 'UL_6756'); // 템플릿 코드
      aligoParams.append('sender', '01055172715'); // 발신번호 (대체문자용)
      
      aligoParams.append('receiver_1', '01055172715'); // 수신번호 (김오신 담당자)
      aligoParams.append('subject_1', '상담접수알림');
      aligoParams.append('message_1', msgText);
      
      const aligoRes = await fetch('http://www.xn--ob0br3ru1cxypqxah90d.com/alimtalk_proxy.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: aligoParams.toString()
      });
      
      const aligoData = await aligoRes.json();
      console.log('Alimtalk Send Result:', aligoData);
      
    } catch (smsError) {
      console.error('Aligo Alimtalk Failed:', smsError);
    }
    
    
    // DB 저장 로직 (Supabase)
    try {
      const { error: dbError } = await supabase.from('counsel_requests').insert({
        type: typeStr,
        name: body.name || '',
        phone: body.phone || '',
        region: body.region || '',
        funeral_home: body.funeralHome || '',
        patient_location: body.patientLocation || '',
        notes: body.notes || ''
      });
      if (dbError) console.error('Supabase Insert Error:', dbError);
    } catch (err) {
      console.error('Supabase Exception:', err);
    }

    return NextResponse.json({ success: true, debug: typeof smsError !== 'undefined' ? smsError.toString() : null });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ success: false, error: '서버 오류가 발생했습니다.' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('counsel_requests')
      .select('*')
      .order('created_at', { ascending: false });
      
    if (error) throw error;
    
    return NextResponse.json({ success: true, data: data || [] });
  } catch (error) {
    console.error('Supabase Fetch Error:', error);
    return NextResponse.json({ success: false, data: [] });
  }
}
