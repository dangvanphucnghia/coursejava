import Link from "next/link";
import type { ReactNode } from "react";
import {
  FiArrowRight,
  FiAward,
  FiBookOpen,
  FiCheckCircle,
  FiClock,
  FiFileText,
  FiLayers,
  FiTarget,
  FiUsers,
} from "react-icons/fi";
import type { Course, CourseTheme } from "@/data/courses";
import type { CourseDetail } from "@/data/course-details";

type CourseDetailTemplateProps = {
  course: Course;
  detail: CourseDetail;
};

const themeStyles: Record<
  CourseTheme,
  {
    accentText: string;
    accentBg: string;
    accentSoft: string;
    accentBorder: string;
    heroGlow: string;
  }
> = {
  cyan: {
    accentText: "text-cyan-700",
    accentBg: "bg-cyan-600",
    accentSoft: "bg-cyan-50 text-cyan-900",
    accentBorder: "border-cyan-200",
    heroGlow: "from-cyan-500/25",
  },
  blue: {
    accentText: "text-blue-700",
    accentBg: "bg-blue-600",
    accentSoft: "bg-blue-50 text-blue-900",
    accentBorder: "border-blue-200",
    heroGlow: "from-blue-500/25",
  },
  emerald: {
    accentText: "text-emerald-700",
    accentBg: "bg-emerald-600",
    accentSoft: "bg-emerald-50 text-emerald-900",
    accentBorder: "border-emerald-200",
    heroGlow: "from-emerald-500/25",
  },
  amber: {
    accentText: "text-amber-800",
    accentBg: "bg-amber-500",
    accentSoft: "bg-amber-50 text-amber-950",
    accentBorder: "border-amber-200",
    heroGlow: "from-amber-500/25",
  },
  violet: {
    accentText: "text-violet-700",
    accentBg: "bg-violet-600",
    accentSoft: "bg-violet-50 text-violet-950",
    accentBorder: "border-violet-200",
    heroGlow: "from-violet-500/25",
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
    <main className="bg-slate-50">
      <section className="relative overflow-hidden bg-slate-950 py-14 text-white sm:py-16 lg:py-20">
        <div
          className={`absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,var(--tw-gradient-from),transparent_36%),linear-gradient(120deg,rgba(15,23,42,0.72),rgba(15,23,42,1))] ${theme.heroGlow}`}
        />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.78fr] lg:px-8">
          <div>
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:bg-white/15"
            >
              ← Quay về khóa học
            </Link>

            <p className="mt-8 text-sm font-bold uppercase tracking-wide text-cyan-300">
              {course.eyebrow}
            </p>
            <h1 className="mt-3 max-w-4xl text-4xl font-extrabold sm:text-5xl lg:text-6xl">
              {detail.heroTitle}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              {detail.summary}
            </p>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400 sm:text-base">
              {detail.promise}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CtaLink
                href={detail.primaryCtaHref}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-extrabold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-300"
              >
                {detail.primaryCtaLabel}
                <FiArrowRight className="h-4 w-4" aria-hidden="true" />
              </CtaLink>
              <a
                href="#lessons"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/15"
              >
                {detail.secondaryCtaLabel}
              </a>
            </div>
          </div>

          <aside className="rounded-lg border border-white/10 bg-white/[0.06] p-5 shadow-2xl shadow-slate-950/30">
            <div className="rounded-lg bg-white p-5 text-slate-950">
              <div className="flex items-center gap-3">
                <span className={`grid h-12 w-12 place-items-center rounded-lg text-white ${theme.accentBg}`}>
                  <FiBookOpen className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-500">Course</p>
                  <h2 className="text-xl font-extrabold">{course.title}</h2>
                </div>
              </div>

              <dl className="mt-6 grid gap-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-center justify-between gap-4 rounded-lg bg-slate-50 px-4 py-3"
                  >
                    <dt className="text-sm font-semibold text-slate-500">{stat.label}</dt>
                    <dd className="text-right text-sm font-extrabold text-slate-950">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className={`mt-5 rounded-lg border p-4 ${theme.accentSoft} ${theme.accentBorder}`}>
                <p className="text-sm font-extrabold">Cách học đúng chuẩn</p>
                <p className="mt-2 text-sm leading-6">
                  Học theo module, làm bài tập ngay sau mỗi lesson, cuối module refactor lại
                  project nhỏ trước khi chuyển qua phần tiếp theo.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="py-14 sm:py-16" aria-labelledby="course-overview-title">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <span className={`grid h-11 w-11 place-items-center rounded-lg text-white ${theme.accentBg}`}>
                <FiUsers className="h-5 w-5" aria-hidden="true" />
              </span>
              <h2 id="course-overview-title" className="text-xl font-extrabold text-slate-950">
                Phù hợp với
              </h2>
            </div>
            <ul className="mt-5 space-y-3">
              {detail.audience.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-slate-600">
                  <FiCheckCircle className="mt-1 h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-slate-950 text-cyan-300">
                <FiLayers className="h-5 w-5" aria-hidden="true" />
              </span>
              <h2 className="text-xl font-extrabold text-slate-950">Cần chuẩn bị</h2>
            </div>
            <ul className="mt-5 space-y-3">
              {detail.prerequisites.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-slate-600">
                  <FiCheckCircle className="mt-1 h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <span className={`grid h-11 w-11 place-items-center rounded-lg text-white ${theme.accentBg}`}>
                <FiTarget className="h-5 w-5" aria-hidden="true" />
              </span>
              <h2 className="text-xl font-extrabold text-slate-950">Kết quả đạt được</h2>
            </div>
            <ul className="mt-5 space-y-3">
              {detail.outcomes.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-slate-600">
                  <FiCheckCircle className="mt-1 h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16" aria-labelledby="study-plan-title">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-8">
          <div>
            <p className={`text-sm font-bold uppercase tracking-wide ${theme.accentText}`}>
              Study method
            </p>
            <h2
              id="study-plan-title"
              className="mt-3 text-3xl font-extrabold text-slate-950 sm:text-4xl"
            >
              Cách học để không bị ngợp.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Mỗi khóa được thiết kế theo nhịp: hiểu khái niệm, làm bài tập nhỏ, áp dụng
              vào project và review lại bằng checklist.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {detail.studyPlan.map((item, index) => (
              <article key={item} className="rounded-lg border border-slate-200 bg-slate-50 p-5">
                <span className={`inline-flex rounded-full px-3 py-1 text-xs font-extrabold ${theme.accentSoft}`}>
                  Step {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-4 text-sm font-semibold leading-6 text-slate-700">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="lessons" className="py-14 sm:py-16" aria-labelledby="lessons-title">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className={`text-sm font-bold uppercase tracking-wide ${theme.accentText}`}>
              Syllabus chi tiết
            </p>
            <h2
              id="lessons-title"
              className="mt-3 text-3xl font-extrabold text-slate-950 sm:text-4xl"
            >
              Module, mục tiêu và bài tập sau từng bài.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Lesson nào cũng có mục tiêu học và bài thực hành cụ thể để người mới biết
              mình cần làm gì sau khi xem tài liệu.
            </p>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {detail.modules.map((module, moduleIndex) => (
              <details
                key={module.title}
                open={moduleIndex === 0}
                className="group rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span
                      className={`grid h-10 w-10 place-items-center rounded-lg text-sm font-extrabold text-white ${theme.accentBg}`}
                    >
                      {String(moduleIndex + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-lg font-extrabold text-slate-950">{module.title}</h3>
                      <p className="text-sm text-slate-500">{module.lessons.length} bài học</p>
                    </div>
                  </div>
                  <FiClock
                    className="h-5 w-5 shrink-0 text-slate-400 transition group-open:text-cyan-700"
                    aria-hidden="true"
                  />
                </summary>

                <p className="mt-4 rounded-lg bg-slate-50 p-4 text-sm leading-6 text-slate-600">
                  {module.description}
                </p>

                <ol className="mt-5 space-y-3">
                  {module.lessons.map((lesson, lessonIndex) => (
                    <li
                      key={lesson.title}
                      className="rounded-lg bg-slate-50 p-4 ring-1 ring-slate-100"
                    >
                      <div className="flex gap-3">
                        <span className={`shrink-0 text-sm font-extrabold ${theme.accentText}`}>
                          {String(lessonIndex + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <h4 className="text-sm font-extrabold text-slate-950">
                            {lesson.title}
                          </h4>
                          <p className="mt-2 text-sm leading-6 text-slate-600">
                            <span className="font-bold text-slate-800">Mục tiêu:</span>{" "}
                            {lesson.goal}
                          </p>
                          <p className="mt-2 text-sm leading-6 text-slate-600">
                            <span className="font-bold text-slate-800">Bài tập:</span>{" "}
                            {lesson.practice}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ol>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16" aria-labelledby="project-title">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className={`rounded-lg border bg-slate-50 p-6 sm:p-8 ${theme.accentBorder}`}>
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <div className="flex items-center gap-3">
                  <span className={`grid h-12 w-12 place-items-center rounded-lg text-white ${theme.accentBg}`}>
                    <FiAward className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <p className={`text-sm font-bold uppercase tracking-wide ${theme.accentText}`}>
                    Project cuối khóa
                  </p>
                </div>
                <h2
                  id="project-title"
                  className="mt-5 text-3xl font-extrabold text-slate-950"
                >
                  {detail.finalProject.title}
                </h2>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  {detail.finalProject.description}
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <article className="rounded-lg bg-white p-5 ring-1 ring-slate-200">
                  <h3 className="text-base font-extrabold text-slate-950">Yêu cầu sản phẩm</h3>
                  <ul className="mt-4 space-y-3">
                    {detail.finalProject.requirements.map((item) => (
                      <li key={item} className="flex gap-2 text-sm leading-6 text-slate-600">
                        <FiCheckCircle className="mt-1 h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>

                <article className="rounded-lg bg-white p-5 ring-1 ring-slate-200">
                  <h3 className="text-base font-extrabold text-slate-950">Tiêu chí đạt</h3>
                  <ul className="mt-4 space-y-3">
                    {detail.finalProject.evaluation.map((item) => (
                      <li key={item} className="flex gap-2 text-sm leading-6 text-slate-600">
                        <FiCheckCircle className="mt-1 h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16" aria-labelledby="resources-title">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className={`text-sm font-bold uppercase tracking-wide ${theme.accentText}`}>
                Tài liệu học tập
              </p>
              <h2
                id="resources-title"
                className="mt-3 text-3xl font-extrabold text-slate-950 sm:text-4xl"
              >
                Checklist, bài tập và tài liệu đi kèm.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Các tài liệu này giúp người học tự kiểm tra, luyện tập và hoàn thiện project
                theo chuẩn dễ theo dõi.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {detail.resources.map((resource) => (
              <article key={resource.title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between gap-4">
                  <span className={`grid h-11 w-11 place-items-center rounded-lg text-white ${theme.accentBg}`}>
                    <FiFileText className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className={`rounded-full px-3 py-1 text-xs font-bold ${theme.accentSoft}`}>
                    {resource.type}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-extrabold text-slate-950">{resource.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{resource.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-14 text-white sm:py-16" aria-labelledby="next-steps-title">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-cyan-300">Next steps</p>
            <h2 id="next-steps-title" className="mt-3 text-3xl font-extrabold">
              Học xong nên làm gì tiếp?
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Đừng học rời rạc. Mỗi khóa đều dẫn sang kỹ năng hoặc project kế tiếp trong lộ
              trình full-stack.
            </p>
          </div>

          <div className="grid gap-3">
            {detail.nextSteps.map((step, index) => (
              <div key={step} className="flex gap-4 rounded-lg border border-white/10 bg-white/10 p-4">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-cyan-400 text-sm font-extrabold text-slate-950">
                  {index + 1}
                </span>
                <p className="text-sm font-semibold leading-6 text-slate-100">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
