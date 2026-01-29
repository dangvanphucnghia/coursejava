"use client";

import Image from "next/image";
import { useState } from "react";
import { SocialLinks } from "./SocialLinks";
import { HiOutlineMail } from "react-icons/hi";
import { FloatingMascot } from "@/components/FloatingMascot";

type Lang = "vi" | "en";

const TEXT: Record<Lang, any> = {
  vi: {
    name: "ĐẶNG VĂN PHÚC NGHĨA",
    roleTop: "JAVA",
    roleBottom: "DEVELOPER",
    exp: "+1 NĂM KINH NGHIỆM",
    desc:
      "Xây dựng backend sạch, tối ưu hiệu năng, và thiết kế hệ thống dễ mở rộng. Tập trung vào trải nghiệm người dùng và chất lượng sản phẩm.",
    ctaStart: "BẮT ĐẦU",
    ctaProjects: "DỰ ÁN",
    ctaCourses: "KHOÁ HỌC",
    captionLeft: "BACKEND • JAVA • API",
  },
  en: {
    name: "DANG VAN PHUC NGHIA",
    roleTop: "JAVA",
    roleBottom: "DEVELOPER",
    exp: "1+ YEAR EXPERIENCE",
    desc:
      "Build clean backends, optimize performance, and design scalable systems. Focused on user experience and product quality.",
    ctaStart: "START PORTFOLIO",
    ctaProjects: "VIEW PROJECTS",
    ctaCourses: "COURSES",
    captionLeft: "BACKEND • JAVA • API",
  },
};

export function Hero() {
  const [lang, setLang] = useState<Lang>("vi");
  const t = TEXT[lang];

  return (
    <main className="relative overflow-hidden bg-[#0b0c10]">
      {/* Mascot */}
      <FloatingMascot />

      {/* Background: gradient + blur blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-[-120px] h-[420px] w-[420px] rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-32 right-[-140px] h-[520px] w-[520px] rounded-full bg-white/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_20%,rgba(255,255,255,0.10),transparent_60%),radial-gradient(900px_500px_at_80%_30%,rgba(255,255,255,0.06),transparent_60%)]" />
      </div>

      <div className="mx-auto min-h-[100svh] max-w-[1600px] px-4 sm:px-8 lg:px-16">
        <div className="grid min-h-[100svh] grid-cols-1 items-center gap-10 py-10 md:grid-cols-[1.05fr_0.95fr] md:py-0">
          {/* LEFT */}
          <section className="relative z-10">
            {/* Language Switch */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setLang("vi")}
                className={[
                  "rounded-full px-3 py-1 text-[11px] font-bold tracking-[0.22em] transition",
                  lang === "vi"
                    ? "bg-white text-black"
                    : "border border-white/20 bg-white/5 text-white/70 hover:border-white/35 hover:text-white",
                ].join(" ")}
                aria-pressed={lang === "vi"}
              >
                VI
              </button>

              <button
                type="button"
                onClick={() => setLang("en")}
                className={[
                  "rounded-full px-3 py-1 text-[11px] font-bold tracking-[0.22em] transition",
                  lang === "en"
                    ? "bg-white text-black"
                    : "border border-white/20 bg-white/5 text-white/70 hover:border-white/35 hover:text-white",
                ].join(" ")}
                aria-pressed={lang === "en"}
              >
                EN
              </button>
            </div>

            <h1 className="mt-5 text-white">
              <span className="block text-[clamp(2.2rem,6vw,5.4rem)] font-extrabold leading-[0.96] tracking-[-0.02em]">
                Portfolio
              </span>
              <span className="mt-3 block text-[clamp(0.8rem,2vw,1.2rem)] font-semibold tracking-[0.32em] text-white/70">
                {t.name}
              </span>
            </h1>

            <div className="mt-6">
              <div className="text-[clamp(2.6rem,7vw,6.6rem)] font-extrabold leading-[0.9] tracking-[-0.03em]">
                <span className="block text-white">{t.roleTop}</span>
                <span className="block text-white/35">{t.roleBottom}</span>
              </div>

              <p className="mt-4 max-w-[44ch] text-[clamp(0.9rem,2.2vw,1.15rem)] font-medium leading-[1.65] text-white/70">
                {t.desc}
              </p>

              <p className="mt-4 text-[12px] font-semibold tracking-[0.28em] text-white/60">
                {t.exp}
              </p>

              {/* Email */}
              <a
                href="mailto:nghia812014@gmail.com"
                className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[13px] font-semibold text-white/75 backdrop-blur transition hover:border-white/30 hover:text-white"
                aria-label="Email nghia812014@gmail.com"
              >
                <span className="grid h-8 w-8 place-items-center rounded-full border border-white/15 bg-black/20">
                  <HiOutlineMail className="h-5 w-5" />
                </span>
                <span className="truncate max-w-[15rem] sm:max-w-none">
                  nghia812014@gmail.com
                </span>
              </a>

              {/* Social */}
              <div className="mt-6">
                <SocialLinks />
              </div>

              {/* CTA */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:flex-wrap">
                <a
                  href="#start"
                  className="inline-flex w-full justify-center rounded-full bg-white px-6 py-3 text-[12px] font-bold tracking-[0.22em] text-black transition hover:opacity-90 sm:w-auto"
                >
                  {t.ctaStart}
                </a>

                <a
                  href="#projects"
                  className="inline-flex w-full justify-center rounded-full border border-white/18 bg-white/5 px-6 py-3 text-[12px] font-bold tracking-[0.22em] text-white/80 backdrop-blur transition hover:border-white/30 hover:text-white sm:w-auto"
                >
                  {t.ctaProjects}
                </a>

                <a
                  href="#courses"
                  className="inline-flex w-full justify-center rounded-full border border-white/18 bg-white/5 px-6 py-3 text-[12px] font-bold tracking-[0.22em] text-white/80 backdrop-blur transition hover:border-white/30 hover:text-white sm:w-auto"
                >
                  {t.ctaCourses}
                </a>
              </div>
            </div>
          </section>

          {/* RIGHT */}
          <section className="relative z-10 flex justify-center md:justify-end">
            <div className="relative w-full max-w-[520px]">
              {/* Accent ring behind card */}
              <div className="pointer-events-none absolute -inset-6 rounded-[34px] bg-[radial-gradient(closest-side,rgba(255,255,255,0.20),transparent_70%)] blur-2xl" />

              {/* Image card */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-3xl border border-white/15 bg-white/5 shadow-[0_24px_80px_rgba(0,0,0,0.55)] backdrop-blur">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

                <Image
                  src="/images/hero 1.png"
                  alt="Hero"
                  fill
                  priority
                  sizes="(min-width: 1024px) 42vw, (min-width: 768px) 46vw, 92vw"
                  className="object-cover"
                />
              </div>

              {/* Tiny caption */}
              <div className="mt-4 flex items-center justify-between text-[11px] tracking-[0.22em] text-white/55">
                <span>{t.captionLeft}</span>
                <span>2026</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
