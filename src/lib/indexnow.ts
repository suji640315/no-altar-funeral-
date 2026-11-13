export const INDEXNOW_KEY = process.env.INDEXNOW_KEY || 'c03798cf0f014e2cb5a85489eb205166';
export const SITE_HOST = 'xn--9n2b17ct9ctte97j.net';

/**
 * 네이버 및 검색엔진(Bing, Naver 등)에 URL이 변경되었음을 즉시 통지하는 IndexNow API 함수
 */
export async function submitToIndexNow(urls: string[]): Promise<{ success: boolean; status?: number; error?: string }> {
  if (!urls || urls.length === 0) {
    return { success: false, error: 'Empty URLs' };
  }

  try {
    const payload = {
      host: SITE_HOST,
      key: INDEXNOW_KEY,
      keyLocation: `https://${SITE_HOST}/${INDEXNOW_KEY}.txt`,
      urlList: urls,
    };

    console.log('[IndexNow] Submitting URLs:', urls);

    const res = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    console.log(`[IndexNow] Response status: ${res.status}`);
    return {
      success: res.status === 200 || res.status === 202,
      status: res.status,
    };
  } catch (err: any) {
    console.error('[IndexNow] Submission failed:', err);
    return { success: false, error: err?.message };
  }
}

