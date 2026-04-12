import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DESIGN.md Showcase — 日本語デザインシステム比較",
  description:
    "awesome-design-md-jp の DESIGN.md ファイルを活用して、各社のデザインシステムを同じデモコンテンツで比較できるシングルページWebアプリ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
