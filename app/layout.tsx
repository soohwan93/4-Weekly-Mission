import "./globals.css";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export interface ChildernProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: ChildernProps) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
        />
        {/* 랜딩페이지 설정 */}
        <meta
          property="og:image"
          content="https://i0.wp.com/library.re.kr/wp-content/uploads/2022/05/996907.jpg?resize=1080%2C675&ssl=1"
        />
        <meta property="og:title" content="Linkbrary" />
        <meta
          property="og:description"
          content="세상의 모든 정보를 쉽게 저장하고 관리해 보세요"
        />
        <meta
          property="og:url"
          content="https://weekly-mission-week2-ksh.netlify.app/"
        />
        {/* 트위터 랜딩페이지 설정 */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="https://i0.wp.com/library.re.kr/wp-content/uploads/2022/05/996907.jpg?resize=1080%2C675&ssl=1"
        />
        <meta name="twitter:title" content="Linkbrary" />
        <meta
          name="twitter:description"
          content="세상의 모든 정보를 쉽게 저장하고 관리해 보세요"
        />
        <title>Linkbrary</title>
      </head>
      <body className="font-Pretendard">
        <Header />
        {children}
        <Footer />
        <div id="modal-root" />
      </body>
    </html>
  );
}
