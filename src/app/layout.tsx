import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyBottomBar from "@/components/StickyBottomBar";

export const metadata: Metadata = {
  title: "(주)공무원라이프 - 전국 긴급 후불제 무빈소장례",
  description: "공무원 노동조합 및 기업 단체 MOU 협약으로 검증된 신뢰, 대한민국 공무원라이프가 보증하는 100% 후불제 전국 무빈소장례 플랫폼",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className="pt-20 pb-16 md:pb-0">
        <Header />
        {children}
        <Footer />
        <StickyBottomBar />
      </body>
    </html>
  );
}
