import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import { FloatingMascot } from "@/components/FloatingMascot";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { IntroVideo } from "@/components/layout/IntroVideo";
import "./globals.css";

const beVietnam = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "CourseJava - Học lập trình Full-stack từ số 0",
  description:
    "Nền tảng học Java, Next.js, Full-stack và English for Developers miễn phí cho người mới bắt đầu.",
  metadataBase: new URL("https://coursejava.com"),
  keywords: [
    "CourseJava",
    "học Java miễn phí",
    "học lập trình từ số 0",
    "Full-stack roadmap",
    "English for Developers",
  ],
  openGraph: {
    title: "CourseJava - Học lập trình Full-stack từ số 0",
    description:
      "Nền tảng học Java, Next.js, Full-stack và English for Developers miễn phí cho người mới bắt đầu.",
    url: "https://coursejava.com",
    siteName: "CourseJava",
    locale: "vi_VN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className={`${beVietnam.className} bg-slate-50 text-slate-950 antialiased`}>
        <IntroVideo />
        <Header />
        {children}
        <Footer />
        <FloatingMascot text="Cần gì thì gọi Nghĩa" />
      </body>
    </html>
  );
}
