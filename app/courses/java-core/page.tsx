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
                JAVA CORE
              </h1>

              <p className="mt-4 text-pretty text-base leading-relaxed text-slate-700 sm:text-lg">
                Học Java nền tảng từ cơ bản đến nâng cao, lộ trình rõ ràng — học xong
                tự tin bước vào Backend / Spring Boot.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#course"
                  className="inline-flex w-full items-center justify-center rounded-full bg-[#184b55] px-7 py-4 text-sm font-bold uppercase tracking-widest text-white shadow-md shadow-[#184b55]/20 transition hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#184b55]/40 active:scale-[0.99] sm:w-auto"
                >
                  Start Course
                  <span className="ml-2 inline-block" aria-hidden>
                    ↓
                  </span>
                </a>

                <div className="flex w-full items-center justify-center gap-2 rounded-full bg-white/70 px-5 py-3 text-sm font-semibold text-slate-700 ring-1 ring-slate-200 backdrop-blur sm:w-auto">
                  <span className="text-[#184b55]">30</span> bài học • Có Project theo Phase
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section
        id="course"
        className="mx-auto max-w-6xl scroll-mt-24 px-4 pb-20 pt-10 sm:px-6 lg:px-8"
      >
        {/* header */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <h2 className="text-balance text-2xl font-bold tracking-tight sm:text-3xl">
              Danh sách bài học Java Core
            </h2>
            <p className="mt-2 text-pretty text-sm leading-relaxed text-slate-600 sm:text-base">
              Học theo thứ tự từ 01 → 30 để nắm chắc nền tảng. Các bài Project giúp
              luyện tập theo từng giai đoạn.
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <a
              href="#course"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200 transition hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#184b55]/30 sm:w-auto"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Bắt đầu học
            </a>

            <Link
              href="/courses"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-[#184b55] shadow-sm ring-1 ring-slate-200 transition hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#184b55]/30 sm:w-auto"
            >
              ← Quay lại
            </Link>
          </div>
        </div>

        {/* list */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {lessons.map((lesson, index) => {
            const no = String(index + 1).padStart(2, "0");
            const lower = lesson.toLowerCase();
            const isProject = lower.includes("project");
            const isAdvanced = lower.includes("advanced");

            const pillClass = isProject
              ? "bg-emerald-50 text-emerald-700 ring-emerald-100"
              : isAdvanced
              ? "bg-orange-50 text-orange-700 ring-orange-100"
              : "bg-slate-50 text-slate-700 ring-slate-200";

            const accentClass = isProject
              ? "bg-emerald-500/80"
              : isAdvanced
              ? "bg-orange-500/80"
              : "bg-[#184b55]/70";

            const numberClass = isProject
              ? "bg-emerald-50 text-emerald-700 ring-emerald-100"
              : isAdvanced
              ? "bg-orange-50 text-orange-700 ring-orange-100"
              : "bg-[#184b55]/10 text-[#184b55] ring-[#184b55]/10";

            return (
              <article
                key={`${no}-${lesson}`}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-[2px] hover:shadow-md focus-within:ring-2 focus-within:ring-[#184b55]/25"
              >
                {/* top accent */}
                <div className={`absolute inset-x-0 top-0 h-1 ${accentClass}`} />

                <div className="flex items-start gap-4">
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-extrabold ring-1 ${numberClass}`}
                    aria-label={`Bài ${no}`}
                    title={`Bài ${no}`}
                  >
                    {no}
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-pretty line-clamp-2 text-base font-semibold leading-snug text-slate-900">
                      {lesson}
                    </h3>

                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      <span
                        className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ring-1 ${pillClass}`}
                      >
                        {isProject ? "Project" : isAdvanced ? "Advanced" : "Core"}
                      </span>

                      <span className="inline-flex items-center rounded-full bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600 ring-1 ring-slate-200">
                        ~ 10–25 phút
                      </span>

                      <span className="ml-auto inline-flex items-center gap-2 text-xs font-semibold text-slate-500">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        Ready
                      </span>
                    </div>
                  </div>
                </div>

                {/* action */}
                <div className="mt-4 flex items-center justify-between gap-3">
                  <span className="text-xs font-semibold text-slate-500">
                    Học theo thứ tự
                  </span>

                  <button
                    type="button"
                    className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2.5 text-xs font-bold text-white shadow-sm transition hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/60 active:scale-[0.99]"
                    aria-label={`Bắt đầu bài ${no}: ${lesson}`}
                  >
                    Start
                    <span
                      aria-hidden
                      className="transition-transform group-hover:translate-x-[2px]"
                    >
                      →
                    </span>
                  </button>
                </div>

                {/* subtle corner glow */}
                <div className="pointer-events-none absolute -bottom-12 -right-12 h-44 w-44 rounded-full bg-[#184b55]/10 blur-2xl opacity-0 transition group-hover:opacity-100" />
              </article>
            );
          })}
        </div>

        {/* footer hint */}
        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <a
              href="#course"
              className="inline-flex w-full items-center justify-center rounded-full bg-[#184b55] px-6 py-3 text-sm font-bold text-white shadow-md shadow-[#184b55]/20 transition hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#184b55]/40 sm:w-auto"
            >
              Lên danh sách học ngay
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
