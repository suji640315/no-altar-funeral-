import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "무빈소 장례 - 프리미엄 무빈소 장례 서비스",
  description: "합리적이고 품격 있는 무빈소 장례. 24시간 긴급 출동 및 사전 상담 가능.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
