"use client";
import "./globals.css";
import Header from "./components/Header";
import { useRef } from "react";

import Footer from "./components/Footer";
import { ContextProvider } from "@/util/ContextProvider";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const footerTarget = useRef<HTMLDivElement>(null);

  return (
    <html lang="ko">
      <body className="font-Pretendard">
        <ContextProvider>
          <Header />
          {children}
          <Footer footerTarget={footerTarget} />
        </ContextProvider>
      </body>
    </html>
  );
}
