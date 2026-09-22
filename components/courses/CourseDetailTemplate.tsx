import Link from "next/link";
import type { ReactNode } from "react";
import {
  FiArrowLeft,
  FiArrowRight,
  FiAward,
  FiBookOpen,
  FiCheckCircle,
  FiChevronDown,
  FiFileText,
  FiLayers,
  FiTarget,
  FiUsers,
} from "react-icons/fi";
import type { Course, CourseTheme } from "@/data/courses";
import type { CourseDetail } from "@/data/course-details";
import { FadeIn } from "@/components/ui/FadeIn";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

type CourseDetailTemplateProps = {
  course: Course;
  detail: CourseDetail;
};

type ThemeStyle = {
  accentText: string;
  /** Literal class for the dark hero band — Tailwind cannot see built-at-runtime names. */
  accentOnDark: string;
  gradient: string;
  soft: string;
  border: string;
  /** Radial tint layered over the dark hero. */
  heroGlow: string;
};

const themeStyles: Record<CourseTheme, ThemeStyle> = {
  cyan: {
    accentText: "text-cyan-700",
    accentOnDark: "text-cyan-300",
    gradient: "from-cyan-400 to-sky-500",
    soft: "bg-cyan-50 text-cyan-900 ring-cyan-200/70",
    border: "border-cyan-200",
    heroGlow: "rgba(6,182,212,0.45)",
  },
  blue: {
    accentText: "text-blue-700",
    accentOnDark: "text-blue-300",
    gradient: "from-blue-500 to-indigo-500",
    soft: "bg-blue-50 text-blue-900 ring-blue-200/70",
    border: "border-blue-200",
    heroGlow: "rgba(59,130,246,0.45)",
  },
  emerald: {
    accentText: "text-emerald-700",
    accentOnDark: "text-emerald-300",
    gradient: "from-emerald-400 to-teal-500",
    soft: "bg-emerald-50 text-emerald-900 ring-emerald-200/70",
    border: "border-emerald-200",
    heroGlow: "rgba(16,185,129,0.45)",
  },
  amber: {
    accentText: "text-amber-800",
    accentOnDark: "text-amber-300",
    gradient: "from-amber-400 to-orange-500",
    soft: "bg-amber-50 text-amber-950 ring-amber-200/70",
    border: "border-amber-200",
    heroGlow: "rgba(245,158,11,0.42)",
  },
  violet: {
    accentText: "text-violet-700",
    accentOnDark: "text-violet-300",
    gradient: "from-violet-500 to-fuchsia-500",
    soft: "bg-violet-50 text-violet-950 ring-violet-200/70",
    border: "border-violet-200",
    heroGlow: "rgba(139,92,246,0.45)",
  },
};

const categoryLabels: Record<Course["category"], string> = {
  java: "Java",
  frontend: "Frontend",
  backend: "Backend",
  english: "English Free",
  project: "Project",
};

function isExternalUrl(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

function CtaLink({
  href,
  className,
  children,
}: {
  href: string;
  className: string;
  children: ReactNode;
}) {
  if (isExternalUrl(href)) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

function InfoCard({
  title,
  items,
  icon,
  iconClassName,
}: {
  title: string;
  items: string[];
  icon: ReactNode;
  iconClassName: string;
}) {
  return (
    <article className="group h-full rounded-3xl border border-slate-200/80 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1.5 hover:shadow-lift">
      <div className="flex items-center gap-3">
        <span
          className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl shadow-card transition duration-300 group-hover:scale-105 ${iconClassName}`}
        >
          {icon}
        </span>
        <h2 className="text-lg font-extrabold text-slate-950">{title}</h2>
      </div>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-2.5 text-sm leading-6 text-slate-600">
            <FiCheckCircle className="mt-1 h-4 w-4 shrink-0 text-emerald-500" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export function CourseDetailTemplate({ course, detail }: CourseDetailTemplateProps) {
  const theme = themeStyles[course.theme];
  const totalLessons = detail.modules.reduce((total, module) => total + module.lessons.length, 0);
  const stats = [
    { label: "Danh mục", value: categoryLabels[course.category] },
    { label: "Trình độ", value: course.level },
    { label: "Thời lượng", value: detail.studyTime },
    { label: "Bài học", value: `${totalLessons} bài` },
  ];

  return (
    <main id="main" className="bg-ink-50">
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div
          className="absolute inset-0 bg-grid-dark bg-[size:52px_52px] opacity-60"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(80% 65% at 15% 0%, ${theme.heroGlow}, transparent 64%), linear-gradient(140deg, rgba(15,23,42,0.6), rgba(2,6,23,0.98))`,
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink-50 to-transparent"
          aria-hidden="true"
        />

        <div className="shell relative grid gap-12 py-14 sm:py-16 lg:grid-cols-[1fr_0.76fr] lg:gap-10 lg:py-20">
          <div>
            <FadeIn>
              <Link
                href="/courses"
                className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-4 py-2 text-sm font-semibold text-slate-200 backdrop-blur transition hover:border-white/30 hover:bg-white/[0.14]"
              >
                <FiArrowLeft
                  className="h-4 w-4 transition duration-200 group-hover:-translate-x-0.5"
                  aria-hidden="true"
                />
                Quay về khóa học
              </Link>
            </FadeIn>

            <FadeIn delay={70}>
              <span className={`eyebrow mt-8 ${theme.accentOnDark}`}>
                <span
                  className="inline-block h-1.5 w-1.5 rounded-full bg-current"
                  aria-hidden="true"
                />
                {course.eyebrow}
              </span>
            </FadeIn>

            <FadeIn delay={130}>
              <h1 className="mt-4 max-w-3xl text-[2.35rem] font-extrabold leading-[1.08] sm:text-5xl lg:text-[3.4rem]">
                {detail.heroTitle}
              </h1>
            </FadeIn>

            <FadeIn delay={190}>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                {detail.summary}
              </p>
            </FadeIn>

            <FadeIn delay={240}>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">{detail.promise}</p>
            </FadeIn>

            <FadeIn delay={300}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <CtaLink href={detail.primaryCtaHref} className="btn-primary group">
                  {detail.primaryCtaLabel}
                  <FiArrowRight
                    className="h-4 w-4 transition duration-200 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </CtaLink>
                <a href="#lessons" className="btn-ghost-dark">
                  {detail.secondaryCtaLabel}
                </a>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={200} as="aside" className="lg:justify-self-end">
            <div className="relative w-full max-w-md">
              <div
                className={`absolute -inset-3 rounded-[2.5rem] bg-gradient-to-br opacity-25 blur-2xl ${theme.gradient}`}
                aria-hidden="true"
              />
              <div className="glass relative rounded-4xl p-4 shadow-[0_40px_100px_-40px_rgba(2,6,23,0.9)]">
                <div className="rounded-3xl bg-white p-6 text-slate-950">
                  <div className="flex items-center gap-3">
                    <span
                      className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br text-white shadow-card ${theme.gradient}`}
                    >
                      <FiBookOpen className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <p className="font-mono text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-slate-500">
                        Course
                      </p>
                      <h2 className="truncate text-lg font-extrabold">{course.title}</h2>
                    </div>
                  </div>

                  <dl className="mt-6 divide-y divide-slate-100 overflow-hidden rounded-2xl bg-slate-50 ring-1 ring-inset ring-slate-100">
                    {stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="flex items-center justify-between gap-4 px-4 py-3"
                      >
                        <dt className="text-sm font-semibold text-slate-500">{stat.label}</dt>
                        <dd className="text-right text-sm font-extrabold text-slate-950">
                          {stat.value}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  <div className={`mt-5 rounded-2xl p-4 ring-1 ring-inset ${theme.soft}`}>
                    <p className="text-sm font-extrabold">Cách học đúng chuẩn</p>
                    <p className="mt-2 text-sm leading-6 opacity-90">
                      Học theo module, làm bài tập ngay sau mỗi lesson, cuối module refactor
                      lại project nhỏ trước khi chuyển qua phần tiếp theo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 sm:py-20" aria-labelledby="course-overview-title">
        <div className="shell grid gap-6 lg:grid-cols-3">
          <h2 id="course-overview-title" className="sr-only">
            Tổng quan khóa học
          </h2>

          <Reveal className="h-full">
            <InfoCard
              title="Phù hợp với"
              items={detail.audience}
              icon={<FiUsers className="h-5 w-5 text-white" aria-hidden="true" />}
              iconClassName={`bg-gradient-to-br text-white ${theme.gradient}`}
            />
          </Reveal>

          <Reveal delay={90} className="h-full">
            <InfoCard
              title="Cần chuẩn bị"
              items={detail.prerequisites}
              icon={<FiLayers className="h-5 w-5 text-cyan-300" aria-hidden="true" />}
              iconClassName="bg-slate-950"
            />
          </Reveal>

          <Reveal delay={180} className="h-full">
            <InfoCard
              title="Kết quả đạt được"
              items={detail.outcomes}
              icon={<FiTarget className="h-5 w-5 text-white" aria-hidden="true" />}
              iconClassName={`bg-gradient-to-br text-white ${theme.gradient}`}
            />
          </Reveal>
        </div>
      </section>

      {/* Study method */}
      <section className="bg-white py-16 sm:py-20" aria-labelledby="study-plan-title">
        <div className="shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SectionHeading
            id="study-plan-title"
            eyebrow="Study method"
            accentClassName={theme.accentText}
            title="Cách học để không bị ngợp."
            description="Mỗi khóa được thiết kế theo nhịp: hiểu khái niệm, làm bài tập nhỏ, áp dụng vào project và review lại bằng checklist."
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {detail.studyPlan.map((item, index) => (
              <Reveal key={item} delay={index * 70} className="h-full">
                <article className="group h-full rounded-3xl border border-slate-200/80 bg-slate-50/70 p-5 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lift">
                  <div className="flex items-center justify-between">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 font-mono text-[0.66rem] font-bold uppercase tracking-[0.1em] ring-1 ring-inset ${theme.soft}`}
                    >
                      Step {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-mono text-xl font-bold text-slate-200 transition group-hover:text-slate-300">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="mt-4 text-sm font-semibold leading-6 text-slate-700">{item}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Syllabus */}
      <section id="lessons" className="py-16 sm:py-20" aria-labelledby="lessons-title">
        <div className="shell">
          <SectionHeading
            id="lessons-title"
            eyebrow="Syllabus chi tiết"
            accentClassName={theme.accentText}
            title="Module, mục tiêu và bài tập sau từng bài."
            description="Lesson nào cũng có mục tiêu học và bài thực hành cụ thể để người mới biết mình cần làm gì sau khi xem tài liệu."
          />

          {/* items-start keeps a collapsed module from stretching to match an
              expanded one in the same row. */}
          <div className="mt-12 grid items-start gap-5 lg:grid-cols-2">
            {detail.modules.map((module, moduleIndex) => (
              <Reveal key={module.title} delay={(moduleIndex % 2) * 80}>
                <details
                  open={moduleIndex === 0}
                  className="group overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-soft transition duration-300 open:shadow-card hover:border-slate-300"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6">
                    <div className="flex min-w-0 items-center gap-3">
                      <span
                        className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br font-mono text-sm font-bold text-white shadow-card ${theme.gradient}`}
                      >
                        {String(moduleIndex + 1).padStart(2, "0")}
                      </span>
                      <div className="min-w-0">
                        <h3 className="text-lg font-extrabold text-slate-950">{module.title}</h3>
                        <p className="mt-0.5 font-mono text-xs font-semibold text-slate-500">
                          {module.lessons.length} bài học
                        </p>
                      </div>
                    </div>
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-slate-100 text-slate-600 transition duration-300 group-open:rotate-180 group-open:bg-slate-950 group-open:text-white">
                      <FiChevronDown className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </summary>

                  <div className="px-6 pb-6">
                    <p className="rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-600 ring-1 ring-inset ring-slate-100">
                      {module.description}
                    </p>

                    <ol className="mt-5 space-y-3">
                      {module.lessons.map((lesson, lessonIndex) => (
                        <li
                          key={lesson.title}
                          className="rounded-2xl bg-slate-50/70 p-4 ring-1 ring-inset ring-slate-100 transition hover:bg-white hover:ring-slate-200"
                        >
                          <div className="flex gap-3">
                            <span
                              className={`shrink-0 font-mono text-sm font-bold ${theme.accentText}`}
                            >
                              {String(lessonIndex + 1).padStart(2, "0")}
                            </span>
                            <div className="min-w-0">
                              <h4 className="text-sm font-extrabold text-slate-950">
                                {lesson.title}
                              </h4>
                              <p className="mt-2 text-sm leading-6 text-slate-600">
                                <span className="font-bold text-slate-800">Mục tiêu:</span>{" "}
                                {lesson.goal}
                              </p>
                              <p className="mt-1.5 text-sm leading-6 text-slate-600">
                                <span className="font-bold text-slate-800">Bài tập:</span>{" "}
                                {lesson.practice}
                              </p>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </div>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final project */}
      <section className="bg-white py-16 sm:py-20" aria-labelledby="project-title">
        <div className="shell">
          <Reveal>
            <div
              className={`overflow-hidden rounded-[2rem] border bg-gradient-to-br from-slate-50 to-white p-6 shadow-soft sm:p-10 ${theme.border}`}
            >
              <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                <div>
                  <div className="flex items-center gap-3">
                    <span
                      className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br text-white shadow-card ${theme.gradient}`}
                    >
                      <FiAward className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className={`eyebrow ${theme.accentText}`}>Project cuối khóa</span>
                  </div>

                  <h2 id="project-title" className="mt-5 text-2xl font-extrabold text-slate-950 sm:text-3xl">
                    {detail.finalProject.title}
                  </h2>
                  <p className="mt-4 text-base leading-7 text-slate-600">
                    {detail.finalProject.description}
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <article className="rounded-2xl bg-white p-5 shadow-soft ring-1 ring-slate-200/80">
                    <h3 className="text-base font-extrabold text-slate-950">Yêu cầu sản phẩm</h3>
                    <ul className="mt-4 space-y-3">
                      {detail.finalProject.requirements.map((item) => (
                        <li key={item} className="flex gap-2.5 text-sm leading-6 text-slate-600">
                          <FiCheckCircle
                            className="mt-1 h-4 w-4 shrink-0 text-emerald-500"
                            aria-hidden="true"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </article>

                  <article className="rounded-2xl bg-white p-5 shadow-soft ring-1 ring-slate-200/80">
                    <h3 className="text-base font-extrabold text-slate-950">Tiêu chí đạt</h3>
                    <ul className="mt-4 space-y-3">
                      {detail.finalProject.evaluation.map((item) => (
                        <li key={item} className="flex gap-2.5 text-sm leading-6 text-slate-600">
                          <FiCheckCircle
                            className="mt-1 h-4 w-4 shrink-0 text-emerald-500"
                            aria-hidden="true"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16 sm:py-20" aria-labelledby="resources-title">
        <div className="shell">
          <SectionHeading
            id="resources-title"
            eyebrow="Tài liệu học tập"
            accentClassName={theme.accentText}
            title="Checklist, bài tập và tài liệu đi kèm."
            description="Các tài liệu này giúp người học tự kiểm tra, luyện tập và hoàn thiện project theo chuẩn dễ theo dõi."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {detail.resources.map((resource, index) => (
              <Reveal key={resource.title} delay={index * 80} className="h-full">
                <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                  <span
                    className={`absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r transition-transform duration-500 group-hover:scale-x-100 ${theme.gradient}`}
                    aria-hidden="true"
                  />
                  <div className="flex items-center justify-between gap-4">
                    <span
                      className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br text-white shadow-card transition duration-300 group-hover:scale-105 ${theme.gradient}`}
                    >
                      <FiFileText className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span
                      className={`rounded-full px-3 py-1 font-mono text-[0.66rem] font-bold uppercase tracking-[0.1em] ring-1 ring-inset ${theme.soft}`}
                    >
                      {resource.type}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-extrabold text-slate-950">{resource.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                    {resource.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Next steps */}
      <section
        className="relative overflow-hidden bg-slate-950 py-16 text-white sm:py-20"
        aria-labelledby="next-steps-title"
      >
        <div
          className="absolute inset-0 bg-grid-dark bg-[size:52px_52px] opacity-50"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(70%_70%_at_5%_0%,rgba(8,145,178,0.4),transparent_62%)]"
          aria-hidden="true"
        />

        <div className="shell relative grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
          <SectionHeading
            id="next-steps-title"
            eyebrow="Next steps"
            tone="dark"
            accentClassName="text-cyan-300"
            title="Học xong nên làm gì tiếp?"
            description="Đừng học rời rạc. Mỗi khóa đều dẫn sang kỹ năng hoặc project kế tiếp trong lộ trình full-stack."
          >
            <Reveal delay={200}>
              <Link href="/courses" className="btn-primary group mt-8">
                Xem khóa học khác
                <FiArrowRight
                  className="h-4 w-4 transition duration-200 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            </Reveal>
          </SectionHeading>

          <div className="grid gap-3">
            {detail.nextSteps.map((step, index) => (
              <Reveal key={step} delay={index * 70}>
                <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur transition duration-300 hover:border-white/25 hover:bg-white/[0.1]">
                  <span
                    className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br font-mono text-sm font-bold text-white ${theme.gradient}`}
                  >
                    {index + 1}
                  </span>
                  <p className="text-sm font-semibold leading-6 text-slate-100">{step}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
