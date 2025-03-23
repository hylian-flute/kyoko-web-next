import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Design shop Kyoko K",
  description: "『大人可愛い』をテーマにエレガントなデザインやシンプルでも大人可愛いデザイン",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <link rel="icon" href="/image/favicon.png" sizes="any" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
