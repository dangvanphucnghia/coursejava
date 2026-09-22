"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FiArrowRight, FiMenu, FiX } from "react-icons/fi";

const navItems = [
  { href: "/", label: "Trang chủ" },
  { href: "/#roadmap", label: "Roadmap" },
  { href: "/courses", label: "Khóa học" },
  { href: "/#english-free", label: "English Free" },
  { href: "/#projects", label: "Project" },
  { href: "/#blog", label: "Tài liệu" },
];

function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <span className="relative grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-2xl bg-slate-950 shadow-card">
        <span className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.85),transparent_62%)]" />
        <span className="relative font-mono text-sm font-bold text-white">CJ</span>
      </span>
      {compact ? null : (
        <span className="leading-tight">
          <span className="block text-[0.95rem] font-extrabold tracking-tight text-slate-950">
            CourseJava
          </span>
          <span className="block font-mono text-[0.65rem] font-medium uppercase tracking-[0.16em] text-slate-500">
            learn from zero
          </span>
        </span>
      )}
    </span>
  );
}

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;

      setIsScrolled(scrolled > 12);
      setProgress(scrollable > 0 ? Math.min(100, (scrolled / scrollable) * 100) : 0);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Lock the page behind the drawer while it is open.
  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isMenuOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href.replace("/#", "/"));

  return (
    <>
      <header
        className={[
          "sticky top-0 z-50 transition-all duration-300",
          isScrolled
            ? "border-b border-slate-200/70 bg-white/80 shadow-soft backdrop-blur-xl"
            : "border-b border-transparent bg-white/55 backdrop-blur-md",
        ].join(" ")}
      >
        <div
          className={[
            "shell flex items-center justify-between gap-4 transition-all duration-300",
            isScrolled ? "h-16" : "h-[4.5rem]",
          ].join(" ")}
        >
          <Link href="/" aria-label="CourseJava trang chủ" className="group">
            <span className="transition duration-300 group-hover:opacity-80">
              <Logo />
            </span>
          </Link>

          <nav
            className="hidden items-center gap-0.5 rounded-full border border-slate-200/80 bg-white/70 p-1 shadow-soft backdrop-blur lg:flex"
            aria-label="Điều hướng chính"
          >
            {navItems.map((item) => {
              const active = item.href === "/courses" && isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    "relative rounded-full px-3.5 py-2 text-sm font-semibold transition duration-200",
                    active
                      ? "bg-slate-950 text-white shadow-sm"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-950",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/courses"
              className="group hidden items-center gap-2 rounded-full bg-slate-950 px-5 py-2.5 text-sm font-bold text-white shadow-card transition duration-200 hover:bg-brand-600 active:scale-[0.98] sm:inline-flex"
            >
              Học miễn phí
              <FiArrowRight
                className="h-4 w-4 transition duration-200 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>

            <button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              className="grid h-11 w-11 place-items-center rounded-2xl border border-slate-200 bg-white text-slate-900 shadow-soft transition hover:border-slate-300 lg:hidden"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav"
              aria-label={isMenuOpen ? "Đóng menu" : "Mở menu"}
            >
              {isMenuOpen ? (
                <FiX className="h-5 w-5" aria-hidden="true" />
              ) : (
                <FiMenu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Reading progress */}
        <div className="absolute inset-x-0 bottom-0 h-0.5 bg-transparent">
          <div
            className="h-full bg-gradient-to-r from-brand-400 via-sky-400 to-violet-400 transition-[width] duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        id="mobile-nav"
        className={[
          "fixed inset-0 z-[55] lg:hidden",
          isMenuOpen ? "pointer-events-auto" : "pointer-events-none",
        ].join(" ")}
        aria-hidden={!isMenuOpen}
      >
        <button
          type="button"
          tabIndex={isMenuOpen ? 0 : -1}
          onClick={() => setIsMenuOpen(false)}
          aria-label="Đóng menu"
          className={[
            "absolute inset-0 bg-slate-950/50 backdrop-blur-sm transition-opacity duration-300",
            isMenuOpen ? "opacity-100" : "opacity-0",
          ].join(" ")}
        />

        <div
          className={[
            "absolute inset-x-3 top-3 overflow-hidden rounded-4xl border border-slate-200 bg-white p-5 shadow-lift transition-all duration-300",
            isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0",
          ].join(" ")}
        >
          <div className="flex items-center justify-between">
            <Logo />
            <button
              type="button"
              tabIndex={isMenuOpen ? 0 : -1}
              onClick={() => setIsMenuOpen(false)}
              className="grid h-10 w-10 place-items-center rounded-2xl border border-slate-200 text-slate-700 transition hover:bg-slate-50"
              aria-label="Đóng menu"
            >
              <FiX className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <nav className="mt-5 grid gap-1" aria-label="Điều hướng mobile">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                tabIndex={isMenuOpen ? 0 : -1}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-between rounded-2xl px-4 py-3.5 text-base font-bold text-slate-800 transition hover:bg-slate-50 hover:text-brand-700"
              >
                <span className="flex items-center gap-3">
                  <span className="font-mono text-xs font-semibold text-slate-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {item.label}
                </span>
                <FiArrowRight className="h-4 w-4 text-slate-300" aria-hidden="true" />
              </Link>
            ))}
          </nav>

          <Link
            href="/courses"
            tabIndex={isMenuOpen ? 0 : -1}
            onClick={() => setIsMenuOpen(false)}
            className="btn-ink mt-4 w-full"
          >
            Bắt đầu học miễn phí
            <FiArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </>
  );
}
