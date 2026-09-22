import Link from "next/link";
import { FiArrowUpRight, FiBookOpen, FiCheckCircle, FiClock } from "react-icons/fi";
import type { Course, CourseTheme } from "@/data/courses";

type CourseCardProps = {
  course: Course;
  showOutcomes?: boolean;
  className?: string;
};

type ThemeStyle = {
  /** Gradient used by the icon tile and the accent bar on hover. */
  gradient: string;
  badge: string;
  accentText: string;
  glow: string;
  hoverBorder: string;
};

const themeStyles: Record<CourseTheme, ThemeStyle> = {
  cyan: {
    gradient: "from-cyan-400 to-sky-500",
    badge: "bg-cyan-50 text-cyan-800 ring-cyan-200/80",
    accentText: "text-cyan-700",
    glow: "group-hover:shadow-[0_34px_70px_-30px_rgba(8,145,178,0.55)]",
    hoverBorder: "group-hover:border-cyan-300",
  },
  blue: {
    gradient: "from-blue-500 to-indigo-500",
    badge: "bg-blue-50 text-blue-800 ring-blue-200/80",
    accentText: "text-blue-700",
    glow: "group-hover:shadow-[0_34px_70px_-30px_rgba(37,99,235,0.5)]",
    hoverBorder: "group-hover:border-blue-300",
  },
  emerald: {
    gradient: "from-emerald-400 to-teal-500",
    badge: "bg-emerald-50 text-emerald-800 ring-emerald-200/80",
    accentText: "text-emerald-700",
    glow: "group-hover:shadow-[0_34px_70px_-30px_rgba(5,150,105,0.5)]",
    hoverBorder: "group-hover:border-emerald-300",
  },
  amber: {
    gradient: "from-amber-400 to-orange-500",
    badge: "bg-amber-50 text-amber-900 ring-amber-200/80",
    accentText: "text-amber-800",
    glow: "group-hover:shadow-[0_34px_70px_-30px_rgba(217,119,6,0.5)]",
    hoverBorder: "group-hover:border-amber-300",
  },
  violet: {
    gradient: "from-violet-500 to-fuchsia-500",
    badge: "bg-violet-50 text-violet-800 ring-violet-200/80",
    accentText: "text-violet-700",
    glow: "group-hover:shadow-[0_34px_70px_-30px_rgba(124,58,237,0.5)]",
    hoverBorder: "group-hover:border-violet-300",
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

  return (
    <Link
      href={course.href}
      aria-label={`Xem khóa học ${course.title}`}
      className={[
        "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-6",
        "shadow-soft transition duration-300 hover:-translate-y-1.5",
        theme.glow,
        theme.hoverBorder,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {/* Accent bar that wipes in on hover */}
      <span
        className={`absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r transition-transform duration-500 group-hover:scale-x-100 ${theme.gradient}`}
        aria-hidden="true"
      />
      {/* Soft tint that blooms from the icon corner */}
      <span
        className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-20 ${theme.gradient}`}
        aria-hidden="true"
      />

      <div className="relative flex items-start justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={`inline-flex items-center rounded-full px-3 py-1 font-mono text-[0.68rem] font-bold uppercase tracking-[0.1em] ring-1 ${theme.badge}`}
          >
            {course.priceLabel}
          </span>
          {isAvailable ? (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-[0.7rem] font-bold text-emerald-700 ring-1 ring-emerald-200/80">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
              Đang mở
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-[0.7rem] font-bold text-slate-600 ring-1 ring-slate-200">
              <span className="h-1.5 w-1.5 rounded-full bg-slate-400" aria-hidden="true" />
              Sắp ra mắt
            </span>
          )}
        </div>

        <span
          className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br text-white shadow-card transition duration-300 group-hover:scale-105 ${theme.gradient}`}
        >
          <FiBookOpen className="h-5 w-5" aria-hidden="true" />
        </span>
      </div>

      <div className="relative mt-5 flex-1">
        <p className={`font-mono text-[0.68rem] font-semibold uppercase tracking-[0.14em] ${theme.accentText}`}>
          {course.eyebrow}
        </p>
        <h3 className="mt-2 text-xl font-extrabold leading-snug text-slate-950">{course.title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">{course.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {course.tags.map((tag) => (
            <span key={tag} className="chip">
              {tag}
            </span>
          ))}
        </div>

        {showOutcomes ? (
          <ul className="mt-5 space-y-2.5 border-t border-dashed border-slate-200 pt-5">
            {course.outcomes.map((outcome) => (
              <li key={outcome} className="flex gap-2.5 text-sm leading-6 text-slate-600">
                <FiCheckCircle
                  className="mt-1 h-4 w-4 shrink-0 text-emerald-500"
                  aria-hidden="true"
                />
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      <div className="relative mt-6 flex items-center justify-between gap-4 border-t border-slate-100 pt-5">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold text-slate-500">
          <span className="inline-flex items-center gap-1.5">
            <FiClock className="h-3.5 w-3.5" aria-hidden="true" />
            {course.duration}
          </span>
          <span className="h-1 w-1 rounded-full bg-slate-300" aria-hidden="true" />
          <span>{categoryLabels[course.category]}</span>
        </div>

        <span className="inline-flex items-center gap-2 text-sm font-bold text-slate-900">
          <span className="hidden sm:inline">
            {course.ctaLabel ?? (isAvailable ? "Xem khóa học" : "Xem lộ trình")}
          </span>
          <span className="grid h-9 w-9 place-items-center rounded-full bg-slate-100 text-slate-900 transition duration-300 group-hover:bg-slate-950 group-hover:text-white">
            <FiArrowUpRight
              className="h-4 w-4 transition duration-300 group-hover:rotate-45"
              aria-hidden="true"
            />
          </span>
        </span>
      </div>
    </Link>
  );
}
