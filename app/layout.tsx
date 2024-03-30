"use client";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ContextProvider } from "@/util/ContextProvider";
import { usePathname } from "next/navigation";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const pathName = usePathname();
  const isApplyLayout = !pathName.includes("sign");
  return (
    <html lang="ko">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
        {/* 카카오톡 공유하기 설정 */}
        <script
          src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.1/kakao.min.js"
          integrity="sha384-kDljxUXHaJ9xAb2AzRd59KxjrFjzHa5TAoFQ6GbYTCAG0bjM55XohjjDT7tDDC01"
          crossOrigin="anonymous"
        ></script>
        <title>Linkbrary</title>
      </head>
      <body className="font-Pretendard">
        <ContextProvider>
          {isApplyLayout && <Header />}
          {children}
          {isApplyLayout && <Footer />}
          <div id="modal-root" />
        </ContextProvider>
      </body>
    </html>
  );
}
