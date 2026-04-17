import Image from "next/image";
import Link from "next/link";

const lessons = [
  "Introduce and Setup Environment",
  "Structure of a Java class",
  "Data types",
  "Java Output",
  "Method",
  "OOP in Java",
  "Wrapper class",
  "Keyword - static",
  "Define the scope of variables",
  "Call a method in Java",
  "Java Input",
  "String",
  "Regex",
  "Encapsulation",
  "Project - Phase 1",
  "Constructor",
  "Inheritance",
  "Project - Phase 2",
  "Project - Phase 3",
  "Polymorphism",
  "Abstraction",
  "Keyword - final",
  "Project - Phase 4",
  "ArrayList",
  "Sort Object",
  "[Advanced - Lambda] - Overview",
  "[Advanced - Lambda] - Advanced sort",
  "Project - Phase 5",
  "Java IO",
  "Project - Phase 6",
];

export default function JavaCorePage() {
  return (
    <main className="min-h-screen bg-[#f6f9fc] text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="relative h-[88svh] min-h-[620px]">
          <Image
            src="/images/anh-bien-dao.png"
            alt="Java Core Background"
            fill
            priority
            className="object-cover"
          />

          {/* overlay (đẹp và dễ đọc chữ hơn) */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/70 to-[#f6f9fc]" />

          {/* subtle blobs */}
          <div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-[#184b55]/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 -right-28 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl" />

          {/* top nav */}
          <div className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-4 pt-6 sm:px-6 lg:px-8">
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-[#184b55] shadow-sm ring-1 ring-slate-200 backdrop-blur transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#184b55]/40"
            >
              <span aria-hidden>←</span> Courses
            </Link>

            <span className="hidden rounded-full bg-white/70 px-4 py-2 text-xs font-semibold tracking-[0.25em] text-slate-700 ring-1 ring-slate-200 backdrop-blur sm:inline-block">
              COURSEJAVA.COM
            </span>
          </div>

          {/* hero content */}
          <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-center px-4 pb-14 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="mb-5 inline-flex w-fit items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm font-semibold text-orange-600 ring-1 ring-orange-200/60 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-orange-500" />
                Learn with me now
              </p>

              <h1 className="text-balance text-[clamp(2.4rem,6.5vw,5.2rem)] font-extrabold leading-[1.04] tracking-tight text-[#184b55]">
                JAVA CORE BASIC
              </h1>

              <p className="mt-4 text-pretty text-base leading-relaxed text-slate-700 sm:text-lg">
                Java Core Cơ Bản Cho Người Mới - Đơn Giản, Dễ Hiểu
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="https://drive.google.com/drive/folders/16bIcZakK8T1OuEUC0Lek3sPDbi1BrOSd?hl=vi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-full bg-[#184b55] px-7 py-4 text-sm font-bold uppercase tracking-widest text-white shadow-md shadow-[#184b55]/20 transition hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#184b55]/40 active:scale-[0.99] sm:w-auto"
                >
                  Học Ngay
                  <span className="ml-2 inline-block" aria-hidden>
                    ↓
                  </span>
                </a>

                <div className="flex w-full items-center justify-center gap-2 rounded-full bg-white/70 px-5 py-3 text-sm font-semibold text-slate-700 ring-1 ring-slate-200 backdrop-blur sm:w-auto">
                  <span className="text-[#184b55]">Tổng 65 bài giảng</span> Số lượng bài giảng sẽ cập nhật mỗi ngày
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
