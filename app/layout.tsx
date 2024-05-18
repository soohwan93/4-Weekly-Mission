import "./globals.css";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { UserProvider } from "@/util/contexts/UserProvider";

import ReactQueryProviders from "@/util/contexts/ReactQueryProvider";

export const metadata = {
  title: "Linkbrary",
  description: "세상의 모든 정보를 쉽게 저장하고 관리해 보세요",
  openGraph: {
    type: "website",
    url: "https://weekly-mission-week2-ksh.netlify.app/",
    title: "Linkbrary",
    description: "세상의 모든 정보를 쉽게 저장하고 관리해 보세요",
    images: [
      {
        url: "https://i0.wp.com/library.re.kr/wp-content/uploads/2022/05/996907.jpg?resize=1080%2C675&ssl=1",
        width: 1080,
        height: 675,
        alt: "Linkbrary Thumbnail",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    url: "https://weekly-mission-week2-ksh.netlify.app/",
    title: "Linkbrary",
    description: "세상의 모든 정보를 쉽게 저장하고 관리해 보세요",
    images: [
      {
        url: "https://i0.wp.com/library.re.kr/wp-content/uploads/2022/05/996907.jpg?resize=1080%2C675&ssl=1",
        alt: "Linkbrary Thumbnail",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
};
export interface ChildernProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: ChildernProps) {
  return (
    <html lang="ko">
      <body className="font-Pretendard">
        <ReactQueryProviders>
          <UserProvider>
            <Header />
            {children}
            <Footer />
          </UserProvider>
          <div id="modal-root" />
        </ReactQueryProviders>
      </body>
    </html>
  );
}
