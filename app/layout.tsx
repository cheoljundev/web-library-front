import type {Metadata} from "next";
import "./globals.css";
import localFont from "next/font/local";
import Header from "@/app/Header";
import Footer from "@/app/Footer";

const pretendard = localFont({
  src: "../fonts/PretendardVariable.woff2",
  display: "swap",
  variable: "--font-pretendard",
})

export const metadata: Metadata = {
  title: "온라인 도서관",
  description: "온라인 도서관 대출 시스템",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body
      className={`${pretendard.variable} antialiased font-pretendard`}
    >
    <Header/>
    {children}
    <Footer/>
    </body>
    </html>
  );
}
