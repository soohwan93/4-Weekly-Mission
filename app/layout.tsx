import "./globals.css";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { UserDataProvider } from "@/util/contexts/UserDataProvider";
import { metadata } from "@/util/metadata";
import ReactQueryProviders from "@/util/contexts/ReactQueryProvider";

export interface ChildernProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: ChildernProps) {
  return (
    <html lang="ko">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
        />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.image} />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={metadata.url} />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.image} />
      </Head>
      <body className="font-Pretendard">
        <ReactQueryProviders>
          <UserDataProvider>
            <Header />
            {children}
            <Footer />
          </UserDataProvider>
          <div id="modal-root" />
        </ReactQueryProviders>
      </body>
    </html>
  );
}
