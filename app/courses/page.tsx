import type { Metadata } from "next";
import Link from "next/link";
import { FiArrowRight, FiFilter, FiGitBranch } from "react-icons/fi";
import {
  courseCategoryOptions,
  courses,
  type CourseCategory,
} from "@/data/courses";
import { CourseCard } from "@/components/ui/CourseCard";
import { FadeIn } from "@/components/ui/FadeIn";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Khóa học miễn phí - CourseJava",
  description:
    "Danh sách khóa học Java, Frontend, Full-stack và English for Developers miễn phí cho người mới bắt đầu.",
};

type CoursesPageProps = {
  searchParams?: Promise<{
    category?: string;
  }>;
};

const validCategories: CourseCategory[] = ["java", "frontend", "backend", "english", "project"];

function isCourseCategory(value: string | undefined): value is CourseCategory {
  return Boolean(value && validCategories.includes(value as CourseCategory));
}

const heroStats = [
  { value: `${courses.length}`, label: "khóa học" },
  { value: "0đ", label: "học phí" },
  { value: "6", label: "chặng roadmap" },
];

export default async function CoursesPage({ searchParams }: CoursesPageProps) {
  const params = await searchParams;
  const selectedCategory = isCourseCategory(params?.category) ? params.category : "all";
  const visibleCourses =
    selectedCategory === "all"
      ? courses
      : courses.filter((course) => course.category === selectedCategory);

  const countFor = (value: CourseCategory | "all") =>
    value === "all" ? courses.length : courses.filter((c) => c.category === value).length;

  return (
    <main id="main" className="bg-ink-50">
      {/* Hero band */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div
          className="absolute inset-0 bg-grid-dark bg-[size:52px_52px] opacity-60"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(85%_70%_at_12%_0%,rgba(8,145,178,0.5),transparent_66%),radial-gradient(60%_60%_at_100%_10%,rgba(109,40,217,0.4),transparent_62%)]"
          aria-hidden="true"
        />
        <div
          className="aurora -left-24 top-0 h-80 w-80 animate-float-slow bg-cyan-500/20"
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink-50 to-transparent"
          aria-hidden="true"
        />

        <div className="shell relative py-16 sm:py-20 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <FadeIn>
                <span className="eyebrow text-cyan-300">
                  <span
                    className="inline-block h-1.5 w-1.5 rounded-full bg-current"
                    aria-hidden="true"
                  />
                  CourseJava Courses
                </span>
              </FadeIn>

              <FadeIn delay={80}>
                <h1 className="mt-4 max-w-3xl text-[2.4rem] font-extrabold leading-[1.08] sm:text-5xl lg:text-[3.5rem]">
                  Khóa học <span className="text-gradient">miễn phí</span> cho người mới học
                  lập trình.
                </h1>
              </FadeIn>

              <FadeIn delay={150}>
                <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                  Chọn khóa học theo lộ trình: frontend căn bản, Java Core, English Free,
                  backend Spring Boot và project thực chiến.
                </p>
              </FadeIn>

              <FadeIn delay={220}>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <Link href="/courses/java-core" className="btn-primary group">
                    Vào Java Core
                    <FiArrowRight
                      className="h-4 w-4 transition duration-200 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </Link>
                  <Link href="/#roadmap" className="btn-ghost-dark">
                    <FiGitBranch className="h-4 w-4" aria-hidden="true" />
                    Xem roadmap full-stack
                  </Link>
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={260}>
              <dl className="grid grid-cols-3 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10">
                {heroStats.map((stat) => (
                  <div key={stat.label} className="bg-slate-950/70 p-5 text-center backdrop-blur">
                    <dt className="sr-only">{stat.label}</dt>
                    <dd>
                      <span className="block text-2xl font-extrabold sm:text-3xl">
                        {stat.value}
                      </span>
                      <span className="mt-1.5 block font-mono text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-slate-400">
                        {stat.label}
                      </span>
                    </dd>
                  </div>
                ))}
              </dl>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* List */}
      <section className="py-14 sm:py-16" aria-labelledby="course-list-title">
        <div className="shell">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <span className="eyebrow text-slate-500">
                <FiFilter className="h-3.5 w-3.5" aria-hidden="true" />
                Bộ lọc
              </span>
              <h2
                id="course-list-title"
                className="mt-3 text-2xl font-extrabold text-slate-950 sm:text-3xl"
              >
                Danh sách khóa học
                <span className="ml-3 align-middle font-mono text-sm font-bold text-slate-400">
                  {visibleCourses.length}/{courses.length}
                </span>
              </h2>
            </div>

            <div className="no-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
              {courseCategoryOptions.map((option) => {
                const isActive = selectedCategory === option.value;
                const href =
                  option.value === "all" ? "/courses" : `/courses?category=${option.value}`;

                return (
                  <Link
                    key={option.value}
                    href={href}
                    aria-current={isActive ? "page" : undefined}
                    className={[
                      "inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-2.5 text-sm font-bold transition duration-200",
                      isActive
                        ? "bg-slate-950 text-white shadow-card"
                        : "bg-white text-slate-600 ring-1 ring-slate-200 hover:ring-brand-300 hover:text-brand-700",
                    ].join(" ")}
                  >
                    {option.label}
                    <span
                      className={[
                        "rounded-full px-1.5 py-0.5 font-mono text-[0.65rem]",
                        isActive ? "bg-white/15 text-white" : "bg-slate-100 text-slate-500",
                      ].join(" ")}
                    >
                      {countFor(option.value)}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {visibleCourses.map((course, index) => (
              <Reveal key={course.slug} delay={index * 70} className="h-full">
                <CourseCard course={course} showOutcomes />
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="relative mt-14 overflow-hidden rounded-[2rem] bg-slate-950 px-6 py-10 text-white shadow-lift sm:px-10">
              <div
                className="absolute inset-0 bg-[radial-gradient(70%_100%_at_0%_0%,rgba(8,145,178,0.45),transparent_60%),radial-gradient(60%_100%_at_100%_100%,rgba(124,58,237,0.35),transparent_60%)]"
                aria-hidden="true"
              />

              <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div className="max-w-2xl">
                  <span className="eyebrow text-cyan-300">
                    <span
                      className="inline-block h-1.5 w-1.5 rounded-full bg-current"
                      aria-hidden="true"
                    />
                    Gợi ý thứ tự học
                  </span>
                  <h2 className="mt-3 text-2xl font-extrabold sm:text-3xl">
                    Nên học theo thứ tự nào?
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    Nếu bạn bắt đầu từ số 0, hãy đi theo roadmap bên dưới — mỗi bước đều dựa
                    trên kiến thức của bước trước.
                  </p>

                  <ol className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-2">
                    {[
                      "HTML/CSS",
                      "JavaScript",
                      "React/Next.js",
                      "Java Core",
                      "Spring Boot",
                      "Database",
                      "Project",
                    ].map((step, index, list) => (
                      <li key={step} className="flex items-center gap-2">
                        <span className="chip-dark font-mono text-[0.68rem]">{step}</span>
                        {index < list.length - 1 ? (
                          <FiArrowRight
                            className="h-3.5 w-3.5 text-slate-500"
                            aria-hidden="true"
                          />
                        ) : null}
                      </li>
                    ))}
                  </ol>
                </div>

                <Link href="/#roadmap" className="btn-primary group shrink-0">
                  Xem lộ trình
                  <FiArrowRight
                    className="h-4 w-4 transition duration-200 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
