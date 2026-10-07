import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '24시 무빈소 맞춤상담 및 견적안내 | 공무원라이프 무빈소장례',
  description: '24시간 긴급 장례접수, 안치실 배정, 10만원 특별할인카드 적용 견적 상담. 직통전화 02-477-8379.',
  alternates: {
    canonical: 'https://xn--9n2b17ct9ctte97j.net/sub/counsel',
  },
};

export default function CounselLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
