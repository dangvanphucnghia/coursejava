import Link from "next/link";
import { FiGithub, FiMail, FiMap } from "react-icons/fi";

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
    <footer className="border-t border-slate-200 bg-[#0f172a] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:px-8">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-cyan-400 text-slate-950">
              CJ
            </span>
            <span>
              <span className="block text-lg font-extrabold">CourseJava</span>
              <span className="block text-sm text-slate-300">
                Full-stack roadmap + English for Developers
              </span>
            </span>
          </Link>

          <p className="mt-5 max-w-xl text-sm leading-6 text-slate-300">
            Nền tảng học lập trình và tiếng Anh miễn phí cho người mới bắt đầu,
            tập trung vào Java, Next.js, full-stack và project thực chiến.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-300">
            <a
              href="mailto:nghia812014@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 transition hover:bg-cyan-400 hover:text-slate-950"
            >
              <FiMail className="h-4 w-4" aria-hidden="true" />
              nghia812014@gmail.com
            </a>
            <a
              href="https://github.com/dangvanphucnghia"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 transition hover:bg-amber-300 hover:text-slate-950"
            >
              <FiGithub className="h-4 w-4" aria-hidden="true" />
              GitHub
            </a>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h2 className="text-sm font-bold uppercase text-cyan-300">
                {group.title}
              </h2>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-300 transition hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© 2026 CourseJava. Học miễn phí, xây nền tảng thật.</p>
          <p className="inline-flex items-center gap-2">
            <FiMap className="h-4 w-4" aria-hidden="true" />
            Vietnam · Online learning
          </p>
        </div>
      </div>
    </footer>
  );
}
