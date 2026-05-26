import Link from "next/link";
import { FiArrowRight, FiBookOpen, FiCheckCircle, FiClock } from "react-icons/fi";
import type { Course, CourseTheme } from "@/data/courses";

type CourseCardProps = {
  course: Course;
  showOutcomes?: boolean;
  className?: string;
};

const themeStyles: Record<
  CourseTheme,
  {
    badge: string;
    icon: string;
    cta: string;
    border: string;
  }
> = {
  cyan: {
    badge: "bg-cyan-50 text-cyan-700 ring-cyan-200",
    icon: "bg-cyan-500 text-white",
    cta: "text-cyan-700",
    border: "hover:border-cyan-300",
  },
  blue: {
    badge: "bg-blue-50 text-blue-700 ring-blue-200",
    icon: "bg-blue-600 text-white",
    cta: "text-blue-700",
    border: "hover:border-blue-300",
  },
  emerald: {
    badge: "bg-emerald-50 text-emerald-700 ring-emerald-200",
    icon: "bg-emerald-600 text-white",
    cta: "text-emerald-700",
    border: "hover:border-emerald-300",
  },
  amber: {
    badge: "bg-amber-50 text-amber-800 ring-amber-200",
    icon: "bg-amber-500 text-white",
    cta: "text-amber-800",
    border: "hover:border-amber-300",
  },
  violet: {
    badge: "bg-violet-50 text-violet-700 ring-violet-200",
    icon: "bg-violet-600 text-white",
    cta: "text-violet-700",
    border: "hover:border-violet-300",
  },
};

const categoryLabels: Record<Course["category"], string> = {
  java: "Java",
  frontend: "Frontend",
  backend: "Backend",
  english: "English",
  project: "Project",
};

export function CourseCard({ course, showOutcomes = false, className = "" }: CourseCardProps) {
  const theme = themeStyles[course.theme];
  const isAvailable = course.status === "available";
  const rootClassName = [
    "group flex h-full flex-col rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition duration-200",
    `hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/70 ${theme.border}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const cardContent = (
    <>
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex flex-wrap gap-2">
            <span
              className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ring-1 ${theme.badge}`}
            >
              {course.priceLabel}
            </span>
            {isAvailable ? null : (
              <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 ring-1 ring-slate-200">
                Lộ trình
              </span>
            )}
          </div>
          <p className="mt-4 text-sm font-semibold text-slate-500">{course.eyebrow}</p>
        </div>

        <div className={`grid h-11 w-11 shrink-0 place-items-center rounded-lg shadow-sm ${theme.icon}`}>
          <FiBookOpen className="h-5 w-5" aria-hidden="true" />
        </div>
      </div>

      <div className="mt-4 flex-1">
        <h3 className="text-xl font-extrabold text-slate-950">{course.title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">{course.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {course.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600"
            >
              {tag}
            </span>
          ))}
        </div>

        {showOutcomes ? (
          <ul className="mt-5 space-y-3">
            {course.outcomes.map((outcome) => (
              <li key={outcome} className="flex gap-2 text-sm leading-6 text-slate-600">
                <FiCheckCircle className="mt-1 h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true" />
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      <div className="mt-6 flex items-center justify-between gap-4 border-t border-slate-100 pt-4">
        <div className="space-y-1 text-xs font-semibold text-slate-500">
          <div className="flex items-center gap-1.5">
            <FiClock className="h-3.5 w-3.5" aria-hidden="true" />
            <span>{course.duration}</span>
          </div>
          <div>{categoryLabels[course.category]}</div>
        </div>

        <span
          className={`inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-2 text-sm font-bold transition group-hover:bg-slate-950 group-hover:text-white ${
            isAvailable ? theme.cta : "text-slate-700"
          }`}
        >
          {course.ctaLabel ?? (isAvailable ? "Xem khóa học" : "Xem lộ trình")}
          <FiArrowRight
            className="h-4 w-4 transition group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </span>
      </div>
    </>
  );

  return (
    <Link href={course.href} className={rootClassName} aria-label={`Xem khóa học ${course.title}`}>
      {cardContent}
    </Link>
  );
}
