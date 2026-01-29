import Image from "next/image";
import { SocialLinks } from "./SocialLinks";
import { HiOutlineMail } from "react-icons/hi";
import { FloatingMascot } from "@/components/FloatingMascot";

export function Hero() {
  return (
    <main className="hero-bg">
      {/* ✅ icon bay theo chuột + xin chào */}
      <FloatingMascot />

      <div className="mx-auto min-h-[100svh] max-w-[1600px] px-4 sm:px-8 lg:px-16">
        {/* ✅ 2 cột NGAY TỪ MOBILE */}
        <div className="grid min-h-[100svh] grid-cols-[1.15fr_0.85fr] items-start gap-4 py-10 sm:gap-6 md:grid-cols-[1fr_1fr] md:items-center md:py-0 lg:grid-cols-[1fr_1.15fr]">
          {/* LEFT */}
          <section className="pt-4 md:py-10">
            <div className="text-soft-shadow text-white">
              <h1 className="text-[clamp(2.0rem,6.2vw,5.6rem)] font-extrabold leading-[0.95]">
                Portfolio
              </h1>

              <p className="mt-2 text-[clamp(0.7rem,2.1vw,1.25rem)] font-semibold tracking-[0.28em] text-white/80">
                ĐẶNG VĂN PHÚC NGHĨA
              </p>

              {/* ✅ Mobile: tách JAVA / DEVELOPER xuống dòng cho vừa cột trái */}
              <div className="mt-5 font-extrabold leading-[0.92]">
                <span className="block text-[clamp(2.2rem,7.2vw,6.6rem)] text-white">
                  JAVA
                </span>
                <span className="block text-[clamp(2.0rem,6.6vw,6.6rem)] text-white/45">
                  DEVELOPER
                </span>
              </div>

              <p className="mt-3 text-[clamp(0.75rem,2.2vw,1.4rem)] font-semibold tracking-[0.22em] text-white/80">
                +1 NĂM KINH NGHIỆM
              </p>

              {/* Email */}
              <a
                href="mailto:nghia812014@gmail.com"
                className="mt-3 inline-flex items-center gap-2 text-[clamp(0.72rem,2.2vw,1.15rem)] font-semibold tracking-[0.06em] text-white/75 transition hover:text-white"
                aria-label="Email nghia812014@gmail.com"
              >
                <span className="grid h-7 w-7 place-items-center rounded-full border border-white/20 bg-black/10 backdrop-blur-sm sm:h-8 sm:w-8">
                  <HiOutlineMail className="h-4 w-4 text-white/85 sm:h-5 sm:w-5" />
                </span>
                <span className="truncate max-w-[10.5rem] sm:max-w-none">
                  nghia812014@gmail.com
                </span>
              </a>
            </div>

            {/* Icons */}
            <div className="mt-5">
              <SocialLinks />
            </div>

            {/* Button */}
            <div className="mt-6">
              <a
                href="#start"
                className="inline-flex w-full max-w-[220px] items-center justify-center rounded-full border border-white/20 bg-black/10 px-6 py-3 text-[0.62rem] font-semibold tracking-[0.32em] text-white/70 backdrop-blur-sm transition hover:border-white/35 hover:text-white sm:max-w-[260px] sm:px-8 sm:text-[0.68rem]"
              >
                START PORTFOLIO
              </a>
            </div>
          </section>

          {/* RIGHT */}
          <section className="flex justify-end pt-4 md:py-10">
            {/* ✅ Mobile 2 cột: ảnh phải nhỏ, cao vừa màn hình */}
            <div
              className="
    relative overflow-hidden rounded-[18px] border border-white/10
    bg-black/10 backdrop-blur-sm
    shadow-[0_18px_60px_rgba(0,0,0,0.30)]
    aspect-[3/4] w-full
    sm:rounded-[22px] md:aspect-[932/1049] md:rounded-[26px]
    lg:h-[calc(100vh-7.5rem)] lg:w-auto lg:rounded-[28px]
  "
            >
              {/* glow sau lưng */}
              <div className="pointer-events-none absolute -right-10 top-10 h-[320px] w-[320px] rounded-full bg-white/10 blur-3xl" />
              <div className="pointer-events-none absolute left-10 bottom-10 h-[260px] w-[260px] rounded-full bg-white/5 blur-3xl" />

              {/* overlay tối nhẹ cho khung “ăn” với nền */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

              <Image
                src="/images/hero 1.png"
                alt="Hero"
                fill
                priority
                className="object-contain p-6 md:p-10"
                sizes="(min-width: 1024px) 58vw, (min-width: 768px) 48vw, 44vw"
              />
            </div>

          </section>
        </div>
      </div>
    </main>
  );
}
