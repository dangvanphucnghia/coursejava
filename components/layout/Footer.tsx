import Link from "next/link";
import { FiArrowUp, FiGithub, FiMail, FiMapPin } from "react-icons/fi";

const footerLinks = [
  {
    title: "Học tập",
    links: [
      { href: "/#roadmap", label: "Roadmap Full-stack" },
      { href: "/courses", label: "Khóa học miễn phí" },
      { href: "/courses/java-core", label: "Java Core" },
      { href: "/#english-free", label: "English Free" },
    ],
  },
  {
    title: "Thực hành",
    links: [
      { href: "/#projects", label: "Project thực chiến" },
      { href: "/#benefits", label: "Lợi ích học tập" },
      { href: "/#blog", label: "Blog/Tài liệu" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">
      <div
        className="absolute inset-0 bg-grid-dark bg-[size:52px_52px] opacity-40"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"
        aria-hidden="true"
      />
      <div
        className="aurora -left-24 bottom-[-8rem] h-80 w-80 bg-cyan-500/15"
        aria-hidden="true"
      />

      <div className="shell relative grid gap-12 py-16 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <span className="relative grid h-11 w-11 place-items-center overflow-hidden rounded-2xl bg-white/10 ring-1 ring-white/15">
              <span
                className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.8),transparent_65%)]"
                aria-hidden="true"
              />
              <span className="relative font-mono text-sm font-bold">CJ</span>
            </span>
            <span>
              <span className="block text-lg font-extrabold tracking-tight">CourseJava</span>
              <span className="block font-mono text-[0.65rem] font-medium uppercase tracking-[0.16em] text-slate-400">
                learn from zero
              </span>
            </span>
          </Link>

          <p className="mt-6 max-w-md text-sm leading-7 text-slate-400">
            Nền tảng học lập trình và tiếng Anh miễn phí cho người mới bắt đầu, tập trung vào
            Java, Next.js, full-stack và project thực chiến.
          </p>

          <div className="mt-7 flex flex-wrap gap-3 text-sm">
            <a
              href="mailto:nghia812014@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2.5 font-semibold text-slate-200 transition hover:border-cyan-300/50 hover:bg-cyan-400 hover:text-slate-950"
            >
              <FiMail className="h-4 w-4" aria-hidden="true" />
              nghia812014@gmail.com
            </a>
            <a
              href="https://github.com/dangvanphucnghia"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2.5 font-semibold text-slate-200 transition hover:border-amber-300/50 hover:bg-amber-300 hover:text-slate-950"
            >
              <FiGithub className="h-4 w-4" aria-hidden="true" />
              GitHub
            </a>
          </div>
        </div>

        <div className="grid gap-10 sm:grid-cols-2">
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h2 className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.18em] text-cyan-300">
                {group.title}
              </h2>
              <ul className="mt-5 space-y-3.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
                    >
                      <span
                        className="h-px w-0 bg-cyan-300 transition-all duration-300 group-hover:w-4"
                        aria-hidden="true"
                      />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="shell flex flex-col gap-4 py-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 CourseJava. Học miễn phí, xây nền tảng thật.</p>

          <div className="flex items-center gap-5">
            <p className="inline-flex items-center gap-2">
              <FiMapPin className="h-4 w-4" aria-hidden="true" />
              Vietnam · Online learning
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 font-semibold text-slate-300 transition hover:border-white/25 hover:text-white"
            >
              Lên đầu trang
              <FiArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
