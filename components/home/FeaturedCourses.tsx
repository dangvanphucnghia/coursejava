import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { featuredCourses } from "@/data/courses";
import { CourseCard } from "@/components/ui/CourseCard";

export function FeaturedCourses() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20" aria-labelledby="featured-courses-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-wide text-cyan-700">
              Khóa học nổi bật
            </p>
            <h2
              id="featured-courses-title"
              className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl"
            >
              Bắt đầu bằng những khóa học nền tảng, miễn phí.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Nội dung được sắp xếp cho người mới, ưu tiên học đến đâu thực hành đến đó.
            </p>
          </div>

          <Link
            href="/courses"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-900 transition hover:border-cyan-300 hover:text-cyan-700"
          >
            Xem tất cả khóa học
            <FiArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {featuredCourses.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
