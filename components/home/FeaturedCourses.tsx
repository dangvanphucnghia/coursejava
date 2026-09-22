import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { featuredCourses } from "@/data/courses";
import { CourseCard } from "@/components/ui/CourseCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FeaturedCourses() {
  return (
    <section
      className="relative bg-ink-50 py-20 sm:py-28"
      aria-labelledby="featured-courses-title"
    >
      <div className="shell">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            id="featured-courses-title"
            eyebrow="Khóa học nổi bật"
            title={
              <>
                Chọn đúng điểm bắt đầu, học theo{" "}
                <span className="text-gradient-ink">từng chặng nhỏ</span>.
              </>
            }
            description="Mỗi khóa có mục tiêu, bài thực hành và project nối tiếp để bạn không phải tự đoán hôm nay nên học gì."
          />

          <Reveal delay={120}>
            <Link
              href="/courses"
              className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-900 shadow-soft transition duration-200 hover:border-brand-400 hover:text-brand-700"
            >
              Xem tất cả khóa học
              <FiArrowRight
                className="h-4 w-4 transition duration-200 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featuredCourses.map((course, index) => (
            <Reveal key={course.slug} delay={index * 90} className="h-full">
              <CourseCard course={course} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
