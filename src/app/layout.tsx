import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyBottomBar from "@/components/StickyBottomBar";

export const metadata: Metadata = {
  metadataBase: new URL('https://xn--9n2b17ct9ctte97j.net'),
  title: '공무원라이프 무빈소장례 | 공무원 협약 검증 100% 후불제 가족장·직장',
  description: '공무원 노조 협약 기준 그대로! 단 1원의 부당 추가금 없는 정직한 무빈소 장례. 24시 긴급 접수 및 화장장 예약 대행, 1급 장례지도사 정식 입관식 집도.',
  keywords: ['무빈소장례', '무빈소장례비용', '공무원상조무빈소', '무빈소가족장', '직장장례', '후불제장례'],
  alternates: {
    canonical: 'https://xn--9n2b17ct9ctte97j.net/',
  },
  openGraph: {
    title: '공무원라이프 무빈소장례 | 공무원 협약 검증 100% 후불제 가족장',
    description: '공직 사회가 신뢰한 의전 품질, 일반 시민 여러분께도 거품 없는 무빈소 정찰제로 모십니다.',
    url: 'https://xn--9n2b17ct9ctte97j.net/',
    siteName: '공무원라이프 무빈소장례',
    images: [
      {
        url: '/images/og-mubinso.jpg',
        width: 1200,
        height: 630,
        alt: '공무원라이프 무빈소장례',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  verification: {
    other: {
      'naver-site-verification': '9311aef667e0c3155d8b14c354266450bac27899',
    },
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["FuneralHome", "LocalBusiness"],
  "name": "공무원라이프 무빈소장례",
  "alternateName": "공무원라이프 무빈소장례사업부",
  "description": "공무원 노조 공식 협약 기준 100% 후불제 무빈소 장례 및 가족장 전문 상조 브랜드",
  "image": "https://xn--9n2b17ct9ctte97j.net/images/og-mubinso.jpg",
  "telephone": "02-477-8379",
  "url": "https://xn--9n2b17ct9ctte97j.net/",
  "priceRange": "₩1,200,000 - ₩1,300,000",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "하남대로 947, A동 401호(풍산동, 하남테크노밸리U1센터)",
    "addressLocality": "하남시",
    "addressRegion": "경기도",
    "postalCode": "12918",
    "addressCountry": "KR",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "37.5458",
    "longitude": "127.2037"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    }
  ],
  "sameAs": [
    "https://blog.naver.com/officialslife",
    "https://pf.kakao.com/_NpBqxb",
    "https://www.instagram.com/officialslife",
    "https://www.facebook.com/officialslife"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body className="pt-20 pb-16 md:pb-0">
        <Header />
        {children}
        <Footer />
        <StickyBottomBar />
      </body>
    </html>
  );
}
