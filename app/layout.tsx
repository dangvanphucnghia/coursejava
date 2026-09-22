import type { Metadata, Viewport } from "next";
import { Be_Vietnam_Pro, JetBrains_Mono } from "next/font/google";
import { FloatingMascot } from "@/components/FloatingMascot";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { IntroVideo } from "@/components/layout/IntroVideo";
import "./globals.css";

const beVietnam = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
  display: "swap",
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

export const viewport: Viewport = {
  themeColor: "#020617",
  colorScheme: "light",
};

// Marks the document as script-capable before paint, so the scroll-reveal
// hidden state never applies when JavaScript is unavailable.
const bootScript = `document.documentElement.classList.add("js")`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="vi"
      className={`${beVietnam.variable} ${jetBrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body className="bg-ink-50 font-sans text-slate-950 antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-slate-950 focus:px-5 focus:py-3 focus:text-sm focus:font-bold focus:text-white"
        >
          Bỏ qua tới nội dung chính
        </a>
        <IntroVideo />
        <Header />
        {children}
        <Footer />
        <FloatingMascot text="Cần gì thì gọi Nghĩa" />
      </body>
    </html>
  );
}
