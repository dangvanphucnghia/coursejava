import type { Metadata } from "next";
import Link from "next/link";
import {
  FiArrowRight,
  FiAward,
  FiBookOpen,
  FiCheckCircle,
  FiCode,
  FiDownload,
  FiLayers,
  FiTarget,
} from "react-icons/fi";
import {
  javaCoreCourse,
  javaCoreFinalProject,
  javaCoreLearningLink,
  javaCoreLessons,
} from "@/data/courses";

export const metadata: Metadata = {
  title: "Java Core miễn phí - CourseJava",
  description:
    "Khóa học Java Core miễn phí cho người mới: cú pháp Java, OOP, Collections, Exception, I/O và project cuối khóa.",
};

const totalListedLessons = javaCoreLessons.reduce(
  (total, module) => total + module.lessons.length,
  0
);

const courseStats = [
  { label: "Chi phí", value: javaCoreCourse.priceLabel },
  { label: "Trình độ", value: javaCoreCourse.level },
  { label: "Số bài", value: `${javaCoreCourse.lessonsCount ?? totalListedLessons} bài` },
];

const targetAudiences = [
  "Người mới bắt đầu học lập trình từ số 0",
  "Người muốn học Java trước khi sang Spring Boot",
  "Người cần nền tảng OOP, Collections và Java I/O",
];

export default function JavaCorePage() {
  return (
    <main className="bg-slate-50">
      <section className="bg-slate-950 py-14 text-white sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.78fr] lg:px-8">
          <div>
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:bg-white/15"
            >
              ← Quay về khóa học
            </Link>

            <p className="mt-8 text-sm font-bold uppercase tracking-wide text-cyan-300">
              {javaCoreCourse.eyebrow}
            </p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Java Core Basic cho người mới bắt đầu.
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              {javaCoreCourse.description} Khóa học đi chậm, giải thích đơn giản và có
              project theo từng phase để bạn luyện tư duy lập trình thật.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={javaCoreLearningLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-extrabold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-300"
              >
                Học ngay miễn phí
                <FiArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#lessons"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/15"
              >
                Xem danh sách bài học
              </a>
            </div>
          </div>

          <aside className="rounded-lg border border-white/10 bg-white/[0.06] p-5 shadow-2xl shadow-slate-950/30">
            <div className="rounded-lg bg-white p-5 text-slate-950">
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-lg bg-cyan-600 text-white">
                  <FiCode className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-500">Course</p>
                  <h2 className="text-xl font-extrabold">{javaCoreCourse.title}</h2>
                </div>
              </div>

              <dl className="mt-6 grid gap-3">
                {courseStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-center justify-between rounded-lg bg-slate-50 px-4 py-3"
                  >
                    <dt className="text-sm font-semibold text-slate-500">{stat.label}</dt>
                    <dd className="text-sm font-extrabold text-slate-950">{stat.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-5 rounded-lg bg-cyan-50 p-4">
                <p className="text-sm font-bold text-cyan-900">
                  {totalListedLessons} bài học đang hiển thị trong syllabus.
                </p>
                <p className="mt-2 text-sm leading-6 text-cyan-800">
                  Tổng số bài sẽ tiếp tục được cập nhật theo lộ trình 65 bài giảng.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="py-14 sm:py-16" aria-labelledby="goals-title">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-cyan-600 text-white">
                <FiTarget className="h-5 w-5" aria-hidden="true" />
              </span>
              <h2 id="goals-title" className="text-2xl font-extrabold text-slate-950">
                Mục tiêu học
              </h2>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {javaCoreCourse.outcomes.map((goal) => (
                <div key={goal} className="rounded-lg bg-slate-50 p-4">
                  <FiCheckCircle className="h-5 w-5 text-emerald-600" aria-hidden="true" />
                  <p className="mt-3 text-sm font-semibold leading-6 text-slate-700">{goal}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-slate-950 text-cyan-300">
                <FiLayers className="h-5 w-5" aria-hidden="true" />
              </span>
              <h2 className="text-2xl font-extrabold text-slate-950">Phù hợp với</h2>
            </div>
            <ul className="mt-6 space-y-4">
              {targetAudiences.map((audience) => (
                <li key={audience} className="flex gap-3 text-sm leading-6 text-slate-600">
                  <FiCheckCircle
                    className="mt-1 h-4 w-4 shrink-0 text-emerald-600"
                    aria-hidden="true"
                  />
                  {audience}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section id="lessons" className="bg-white py-14 sm:py-16" aria-labelledby="lessons-title">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-wide text-cyan-700">Syllabus</p>
            <h2
              id="lessons-title"
              className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl"
            >
              Danh sách bài học Java Core.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Nội dung giữ theo lộ trình Java Core hiện có và được gom thành module để dễ học,
              dễ theo dõi tiến độ.
            </p>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {javaCoreLessons.map((module, moduleIndex) => (
              <details
                key={module.title}
                open={moduleIndex === 0}
                className="group rounded-lg border border-slate-200 bg-slate-50 p-5"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-lg bg-white text-sm font-extrabold text-cyan-700 ring-1 ring-slate-200">
                      {String(moduleIndex + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-lg font-extrabold text-slate-950">{module.title}</h3>
                      <p className="text-sm text-slate-500">{module.lessons.length} bài học</p>
                    </div>
                  </div>
                  <FiBookOpen
                    className="h-5 w-5 shrink-0 text-slate-400 transition group-open:text-cyan-700"
                    aria-hidden="true"
                  />
                </summary>

                <ol className="mt-5 space-y-3">
                  {module.lessons.map((lesson, lessonIndex) => (
                    <li
                      key={lesson}
                      className="flex gap-3 rounded-lg bg-white px-4 py-3 text-sm font-semibold text-slate-700 ring-1 ring-slate-100"
                    >
                      <span className="text-cyan-700">
                        {String(lessonIndex + 1).padStart(2, "0")}
                      </span>
                      <span>{lesson}</span>
                    </li>
                  ))}
                </ol>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16" aria-labelledby="project-title">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <div className="flex items-center gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-lg bg-emerald-600 text-white">
                    <FiAward className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <p className="text-sm font-bold uppercase tracking-wide text-emerald-700">
                    Project cuối khóa
                  </p>
                </div>
                <h2
                  id="project-title"
                  className="mt-5 text-3xl font-extrabold tracking-tight text-slate-950"
                >
                  {javaCoreFinalProject.title}
                </h2>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  {javaCoreFinalProject.description}
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {javaCoreFinalProject.deliverables.map((deliverable) => (
                  <div key={deliverable} className="rounded-lg bg-slate-50 p-4">
                    <FiCheckCircle className="h-5 w-5 text-emerald-600" aria-hidden="true" />
                    <p className="mt-3 text-sm font-semibold leading-6 text-slate-700">
                      {deliverable}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 border-t border-slate-200 pt-6 sm:flex-row">
              <a
                href={javaCoreLearningLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-600 px-6 py-3 text-sm font-extrabold text-white shadow-sm shadow-cyan-600/20 transition hover:bg-cyan-700"
              >
                Bắt đầu học Java Core
                <FiDownload className="h-4 w-4" aria-hidden="true" />
              </a>
              <Link
                href="/courses"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-900 transition hover:border-cyan-300 hover:text-cyan-700"
              >
                Xem khóa học khác
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
