// Modular wrapper for Kakao Alimtalk API (Solapi/Aligo) with SMS fallback
// We use dummy implementations for the real API calls here to simulate the structure.

export type NotificationPayload = {
  inquiryId: string;
  recipientPhone: string;
  templateCode: string;
  variables: Record<string, string>;
};

export async function sendAlimtalk(payload: NotificationPayload) {
  try {
    // 1. Prepare Request to Solapi/Aligo
    // const response = await fetch('https://api.solapi.com/messages/v4/send', { ... })
    
    console.log(`[ALIMTALK] Sending ${payload.templateCode} to ${payload.recipientPhone}`, payload.variables);
    
    // Simulate API Call Delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    
    // 2. Simulate Success
    const isSuccess = Math.random() > 0.1; // 90% success rate simulation

    if (!isSuccess) {
      console.warn(`[ALIMTALK] Failed to send to ${payload.recipientPhone}, falling back to SMS...`);
      return await sendFallbackSMS(payload);
    }

    return {
      status: 'SUCCESS',
      responsePayload: { messageId: `msg_${Math.random().toString(36).substring(7)}`, type: 'ATA' },
    };
  } catch (error) {
    console.error('[ALIMTALK ERROR]', error);
    return await sendFallbackSMS(payload);
  }
}

async function sendFallbackSMS(payload: NotificationPayload) {
  try {
    console.log(`[SMS FALLBACK] Sending SMS to ${payload.recipientPhone}`);
    await new Promise((resolve) => setTimeout(resolve, 500));
    return {
      status: 'FALLBACK_SMS',
      responsePayload: { messageId: `msg_${Math.random().toString(36).substring(7)}`, type: 'SMS' },
    };
  } catch (error) {
    return {
      status: 'FAILED',
      responsePayload: { error: String(error) },
    };
  }
}
