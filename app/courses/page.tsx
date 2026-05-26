import type { Metadata } from "next";
import Link from "next/link";
import { FiArrowRight, FiFilter } from "react-icons/fi";
import {
  courseCategoryOptions,
  courses,
  type CourseCategory,
} from "@/data/courses";
import { CourseCard } from "@/components/ui/CourseCard";

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

export default async function CoursesPage({ searchParams }: CoursesPageProps) {
  const params = await searchParams;
  const selectedCategory = isCourseCategory(params?.category) ? params.category : "all";
  const visibleCourses =
    selectedCategory === "all"
      ? courses
      : courses.filter((course) => course.category === selectedCategory);

  return (
    <main className="bg-slate-50">
      <section className="border-b border-slate-200 bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-wide text-cyan-700">
              CourseJava Courses
            </p>
            <h1 className="mt-3 text-4xl font-extrabold text-slate-950 sm:text-5xl">
              Khóa học miễn phí cho người mới học lập trình.
            </h1>
            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
              Chọn khóa học theo lộ trình: frontend căn bản, Java Core, English Free,
              backend Spring Boot và project thực chiến.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/courses/java-core"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-600 px-6 py-3 text-sm font-extrabold text-white shadow-sm shadow-cyan-600/20 transition hover:bg-cyan-700"
            >
              Vào Java Core
              <FiArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/#roadmap"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-900 transition hover:border-cyan-300 hover:text-cyan-700"
            >
              Xem roadmap full-stack
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-14" aria-labelledby="course-list-title">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-slate-500">
                <FiFilter className="h-4 w-4" aria-hidden="true" />
                Bộ lọc
              </div>
              <h2 id="course-list-title" className="mt-2 text-2xl font-extrabold text-slate-950">
                Danh sách khóa học
              </h2>
            </div>

            <div className="flex gap-2 overflow-x-auto pb-1">
              {courseCategoryOptions.map((option) => {
                const isActive = selectedCategory === option.value;
                const href = option.value === "all" ? "/courses" : `/courses?category=${option.value}`;

                return (
                  <Link
                    key={option.value}
                    href={href}
                    className={[
                      "shrink-0 rounded-full px-4 py-2 text-sm font-bold transition",
                      isActive
                        ? "bg-slate-950 text-white"
                        : "bg-white text-slate-600 ring-1 ring-slate-200 hover:text-cyan-700",
                    ].join(" ")}
                  >
                    {option.label}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {visibleCourses.map((course) => (
              <CourseCard key={course.slug} course={course} showOutcomes />
            ))}
          </div>

          <div className="mt-10 rounded-lg border border-cyan-200 bg-cyan-50 p-6">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-xl font-extrabold text-slate-950">
                  Nên học theo thứ tự nào?
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  Nếu bạn bắt đầu từ số 0, hãy đi theo roadmap: HTML/CSS → JavaScript →
                  React/Next.js → Java Core → Spring Boot → Database → Project.
                </p>
              </div>
              <Link
                href="/#roadmap"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
              >
                Xem lộ trình
                <FiArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
