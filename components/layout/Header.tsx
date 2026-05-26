import Link from "next/link";
import { FiArrowRight, FiBookOpen } from "react-icons/fi";

const navItems = [
  { href: "/", label: "Trang chủ" },
  { href: "/#roadmap", label: "Roadmap Full-stack" },
  { href: "/courses", label: "Khóa học" },
  { href: "/#english-free", label: "English Free" },
  { href: "/#projects", label: "Project" },
  { href: "/#blog", label: "Blog/Tài liệu" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="CourseJava trang chủ">
          <span className="grid h-10 w-10 place-items-center rounded-lg bg-slate-950 text-cyan-300 shadow-sm">
            <FiBookOpen className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="leading-tight">
            <span className="block text-base font-extrabold text-slate-950">
              CourseJava
            </span>
            <span className="block text-xs font-semibold text-slate-500">Learn from zero</span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-1 rounded-full border border-slate-200 bg-slate-50/80 p-1 lg:flex"
          aria-label="Điều hướng chính"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-white hover:text-slate-950 hover:shadow-sm"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/courses"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-bold text-white shadow-sm shadow-slate-950/20 transition hover:bg-cyan-600"
        >
          Học miễn phí
          <FiArrowRight className="hidden h-4 w-4 sm:block" aria-hidden="true" />
        </Link>
      </div>

      <nav
        className="flex gap-2 overflow-x-auto border-t border-slate-100 bg-white/90 px-4 py-2 lg:hidden"
        aria-label="Điều hướng mobile"
      >
        {navItems.slice(1).map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="shrink-0 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:bg-cyan-100 hover:text-cyan-800"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
