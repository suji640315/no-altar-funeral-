export const dynamic = 'force-dynamic';

export function GET() {
  return new Response('c03798cf0f014e2cb5a85489eb205166', {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
