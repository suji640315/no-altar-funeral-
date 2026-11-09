import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyBottomBar from "@/components/StickyBottomBar";

export const metadata: Metadata = {
  metadataBase: new URL('https://xn--9n2b17ct9ctte97j.net'),
  title: '무빈소장례 전문 공무원라이프 | 품격 있는 가족장·직장 정찰제 비용안내',
  description: '공공기관 공식 협약 기준 그대로, 빈소 비용 거품 없이 1급 장례지도사가 정성을 다하는 무빈소장례 전문. 입관식·화장·안치까지 원스톱 지원',
  keywords: ['무빈소장례', '무빈소장례비용', '가족장', '공무원무빈소장례', '후불제상조', '공무원라이프', '화장장례'],
  alternates: {
    canonical: 'https://xn--9n2b17ct9ctte97j.net',
  },
  openGraph: {
    title: '무빈소장례 전문 공무원라이프 | 품격 있는 가족장·직장 정찰제 비용안내',
    description: '공공기관 공식 협약 기준 그대로, 빈소 비용 거품 없이 1급 장례지도사가 정성을 다하는 무빈소장례 전문. 입관식·화장·안치까지 원스톱 지원',
    url: 'https://xn--9n2b17ct9ctte97j.net',
    siteName: '무빈소장례 전문 공무원라이프',
    images: [
      {
        url: 'https://xn--9n2b17ct9ctte97j.net/images/og-mubinso.jpg',
        width: 1200,
        height: 630,
        alt: '무빈소장례 전문 공무원라이프 대표 썸네일 이미지',
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
    "https://pf.kakao.com/_NpBqxb/friend",
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
