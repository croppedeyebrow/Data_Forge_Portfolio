import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Data_Forge Portfolio | 백엔드 개발자 기술 역량 포트폴리오",
  description:
    "백엔드 핵심 프로젝트들의 기획 의도, 활용 기술, 트러블슈팅 과정을 상세히 정리한 싱글 페이지 웹 포트폴리오입니다.",
  keywords: [
    "백엔드",
    "개발자",
    "포트폴리오",
    "Java",
    "Spring Boot",
    "Python",
    "Node.js",
    "React",
    "TypeScript",
  ],
  authors: [{ name: "Data_Forge" }],
  icons: {
    icon: "/data_forge_favicon.ico",
    shortcut: "/data_forge_favicon.ico",
    apple: "/data_forge_logo.png",
  },
  openGraph: {
    title: "Data_Forge Portfolio | 백엔드 개발자 기술 역량 포트폴리오",
    description:
      "백엔드 핵심 프로젝트들의 기획 의도, 활용 기술, 트러블슈팅 과정을 상세히 정리한 싱글 페이지 웹 포트폴리오입니다.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
