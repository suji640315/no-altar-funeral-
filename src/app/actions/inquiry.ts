'use server';

import { createClient } from '@supabase/supabase-js';
import { InquirySchema, InquiryFormValues, UpdateStatusSchema, UpdateStatusValues } from '@/lib/schema';
import { sendAlimtalk } from '@/lib/alimtalk';
import { revalidatePath } from 'next/cache';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || ''; // Needs Service Role Key for server actions bypassing RLS if needed, or anon for public inserts.

const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey, {
  auth: { autoRefreshToken: false, persistSession: false },
});

export async function submitInquiry(data: InquiryFormValues) {
  try {
    // 1. Validation
    const parsed = InquirySchema.parse(data);

    // 2. Database Insert
    const { data: inquiry, error } = await supabaseAdmin
      .from('inquiries')
      .insert([parsed])
      .select()
      .single();

    if (error) throw error;

    // 3. Send Notification to Admin / On-call Director
    const adminPhone = process.env.ADMIN_NOTIFICATION_PHONE || '01012345678';
    const templateCode = process.env.ALIMTALK_TEMPLATE_ADMIN_ALERT || 'TMPL_ADMIN_ALERT_01';
    const notificationResult = await sendAlimtalk({
      inquiryId: inquiry.id,
      recipientPhone: adminPhone,
      templateCode: templateCode,
      variables: {
        name: inquiry.name,
        phone: inquiry.phone,
        urgency: inquiry.urgency_status === 'EMERGENCY_DECEASED' ? '긴급(임종)' : '사전상담',
        region: inquiry.region,
      },
    });

    // 4. Log Notification
    await supabaseAdmin.from('notification_logs').insert([{
      inquiry_id: inquiry.id,
      recipient_phone: adminPhone,
      template_code: templateCode,
      status: notificationResult.status,
      response_payload: notificationResult.responsePayload,
    }]);

    // Update inquiry to mark alimtalk sent if success
    if (notificationResult.status !== 'FAILED') {
      await supabaseAdmin.from('inquiries').update({ alimtalk_sent: true }).eq('id', inquiry.id);
    }

    revalidatePath('/admin');
    return { success: true, inquiryId: inquiry.id };
  } catch (error) {
    console.error('Error submitting inquiry:', error);
    return { success: false, error: '접수 중 오류가 발생했습니다.' };
  }
}

export async function updateInquiryStatus(data: UpdateStatusValues) {
  try {
    const parsed = UpdateStatusSchema.parse(data);

    const { error } = await supabaseAdmin
      .from('inquiries')
      .update({
        dispatch_status: parsed.status,
        assigned_director: parsed.assigned_director,
      })
      .eq('id', parsed.id);

    if (error) throw error;

    revalidatePath('/admin');
    return { success: true };
  } catch (error) {
    console.error('Error updating status:', error);
    return { success: false, error: '상태 업데이트 실패' };
  }
}
