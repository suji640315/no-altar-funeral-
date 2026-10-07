import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '24시 무빈소 1:1 맞춤상담 및 간편견적 | 무빈소장례',
  description: '24시간 긴급 장례접수, 관내 안치실 배정, 화장장 예약, 10만원 특별할인카드 적용 상담. 직통전화 02-477-8379.',
  alternates: {
    canonical: 'https://xn--9n2b17ct9ctte97j.net/sub/counsel',
  },
  openGraph: {
    title: '24시 무빈소 맞춤상담 신청 | 무빈소장례',
    description: '접수 즉시 전담 장례지도사 5분 이내 신속 해피콜 및 안치실 배정 안내.',
    url: 'https://xn--9n2b17ct9ctte97j.net/sub/counsel',
  },
};

export default function CounselLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
