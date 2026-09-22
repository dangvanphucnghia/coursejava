import Link from "next/link";
import {
  FiActivity,
  FiArrowRight,
  FiBookOpen,
  FiCheck,
  FiCode,
  FiPlayCircle,
  FiZap,
} from "react-icons/fi";
import { FadeIn } from "@/components/ui/FadeIn";

const heroStats = [
  { label: "Roadmap", value: "Full-stack", hint: "6 chặng có thứ tự" },
  { label: "Chi phí", value: "Miễn phí", hint: "không giới hạn bài học" },
  { label: "Bắt đầu", value: "Từ số 0", hint: "không cần nền tảng" },
];

const learningQueue = [
  { title: "HTML/CSS", detail: "Layout, responsive, semantic", done: true },
  { title: "JavaScript", detail: "DOM, data, async flow", done: true },
  { title: "Java Core", detail: "OOP, Collections, I/O", done: false },
  { title: "English Dev", detail: "Docs, errors, vocabulary", done: false },
];

const roadmapPreview = [
  { label: "Frontend", progress: 78, bar: "from-cyan-400 to-sky-400" },
  { label: "Java Core", progress: 64, bar: "from-emerald-400 to-teal-300" },
  { label: "Project", progress: 46, bar: "from-amber-300 to-orange-300" },
];

const techStack = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Java",
  "Spring Boot",
  "MySQL",
  "Git",
  "REST API",
  "Tailwind CSS",
];

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-slate-950 text-white"
      aria-labelledby="hero-title"
    >
      {/* Layered background: grid → aurora → bottom fade into the light page */}
      <div
        className="absolute inset-0 bg-grid-dark bg-[size:52px_52px] opacity-70"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(90%_60%_at_15%_0%,rgba(8,47,73,0.95),transparent_70%),radial-gradient(70%_55%_at_100%_10%,rgba(76,29,149,0.55),transparent_68%),linear-gradient(180deg,rgba(2,6,23,0.55),rgba(2,6,23,0.95))]"
        aria-hidden="true"
      />
      <div
        className="aurora -left-24 top-[-6rem] h-[26rem] w-[26rem] animate-float-slow bg-cyan-500/25"
        aria-hidden="true"
      />
      <div
        className="aurora right-[-8rem] top-24 h-[30rem] w-[30rem] animate-float-slower bg-violet-500/20"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink-50 via-ink-50/70 to-transparent"
        aria-hidden="true"
      />

      <div className="shell relative grid gap-12 py-16 md:py-24 lg:grid-cols-[1fr_1.02fr] lg:items-center lg:gap-10 lg:py-28">
        <div className="flex flex-col">
          <FadeIn>
            <span className="inline-flex w-fit items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.08] py-2 pl-2.5 pr-4 text-[0.8rem] font-semibold text-cyan-100 backdrop-blur">
              <span className="relative grid h-5 w-5 place-items-center">
                <span
                  className="absolute inset-0 animate-pulse-ring rounded-full bg-cyan-400/60"
                  aria-hidden="true"
                />
                <span className="relative h-2 w-2 rounded-full bg-cyan-300" aria-hidden="true" />
              </span>
              Nền tảng học online miễn phí cho developer mới
            </span>
          </FadeIn>

          <FadeIn delay={80}>
            <h1
              id="hero-title"
              className="mt-7 max-w-3xl text-[2.6rem] font-extrabold leading-[1.06] sm:text-6xl lg:text-[4.1rem]"
            >
              Học <span className="text-gradient">Full-stack</span> từ số 0 bằng lộ trình rõ,
              bài tập thật.
            </h1>
          </FadeIn>

          <FadeIn delay={150}>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              CourseJava gom Java, Frontend, English for Developers và project thực chiến vào
              một hành trình dễ theo dõi — để bạn học đều, làm đều và thấy tiến bộ rõ.
            </p>
          </FadeIn>

          <FadeIn delay={220}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/courses" className="btn-primary group">
                Vào khu học miễn phí
                <FiPlayCircle
                  className="h-5 w-5 transition duration-200 group-hover:scale-110"
                  aria-hidden="true"
                />
              </Link>
              <Link href="/#roadmap" className="btn-ghost-dark group">
                Xem roadmap
                <FiArrowRight
                  className="h-4 w-4 transition duration-200 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={290}>
            <dl className="mt-11 grid max-w-xl grid-cols-1 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-3">
              {heroStats.map((stat) => (
                <div key={stat.label} className="bg-slate-950/70 p-5 backdrop-blur">
                  <dt className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-slate-400">
                    {stat.label}
                  </dt>
                  <dd className="mt-2 text-lg font-extrabold text-white">{stat.value}</dd>
                  <p className="mt-1 text-xs text-slate-400">{stat.hint}</p>
                </div>
              ))}
            </dl>
          </FadeIn>
        </div>

        {/* Cockpit card */}
        <FadeIn delay={180} className="relative lg:justify-self-end">
          <div className="relative w-full max-w-xl">
            <div
              className="absolute -inset-4 rounded-[2.75rem] bg-gradient-to-br from-cyan-400/25 via-transparent to-violet-500/25 blur-2xl"
              aria-hidden="true"
            />

            <div className="glass relative overflow-hidden rounded-4xl shadow-[0_45px_120px_-40px_rgba(2,6,23,0.9)]">
              <div className="flex items-center justify-between gap-4 border-b border-white/10 bg-white/[0.06] px-6 py-5">
                <div>
                  <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-cyan-200">
                    Learning cockpit
                  </p>
                  <h2 className="mt-1.5 text-xl font-extrabold">Lộ trình hôm nay</h2>
                </div>
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-cyan-300 to-sky-400 text-slate-950 shadow-glow">
                  <FiActivity className="h-5 w-5" aria-hidden="true" />
                </span>
              </div>

              <div className="grid sm:grid-cols-[0.92fr_1.08fr]">
                <div className="border-b border-white/10 p-6 sm:border-b-0 sm:border-r">
                  <div className="flex items-center gap-2 text-cyan-200">
                    <FiCode className="h-4 w-4" aria-hidden="true" />
                    <span className="font-mono text-xs font-semibold uppercase tracking-[0.14em]">
                      Study path
                    </span>
                  </div>

                  <ol className="mt-5 space-y-4">
                    {learningQueue.map((item, index) => (
                      <li key={item.title} className="flex gap-3">
                        <span
                          className={[
                            "grid h-8 w-8 shrink-0 place-items-center rounded-xl font-mono text-[0.7rem] font-bold",
                            item.done
                              ? "bg-cyan-300 text-slate-950"
                              : "border border-white/15 bg-white/10 text-slate-300",
                          ].join(" ")}
                        >
                          {item.done ? (
                            <FiCheck className="h-4 w-4" aria-hidden="true" />
                          ) : (
                            String(index + 1).padStart(2, "0")
                          )}
                        </span>
                        <div className="min-w-0">
                          <p className="text-sm font-extrabold text-white">{item.title}</p>
                          <p className="mt-0.5 text-xs leading-5 text-slate-400">{item.detail}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="p-6">
                  <div className="relative overflow-hidden rounded-3xl bg-white p-5 text-slate-950 shadow-card">
                    <div
                      className="pointer-events-none absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-cyan-100/70 to-transparent"
                      aria-hidden="true"
                    />
                    <div className="relative flex items-start justify-between gap-4">
                      <div>
                        <p className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-slate-500">
                          Khóa nên bắt đầu
                        </p>
                        <h3 className="mt-1.5 text-lg font-extrabold">Java Core</h3>
                      </div>
                      <FiBookOpen className="h-7 w-7 shrink-0 text-brand-600" aria-hidden="true" />
                    </div>
                    <div className="relative mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
                      <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-brand-500 to-sky-400" />
                    </div>
                    <p className="relative mt-3 text-sm font-semibold text-slate-600">
                      65 bài học · <span className="text-brand-700">FREE</span>
                    </p>
                  </div>

                  <div className="mt-6 space-y-4">
                    {roadmapPreview.map((item) => (
                      <div key={item.label}>
                        <div className="flex items-center justify-between text-xs font-bold">
                          <span className="text-slate-300">{item.label}</span>
                          <span className="font-mono text-white">{item.progress}%</span>
                        </div>
                        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                          <div
                            className={`h-full rounded-full bg-gradient-to-r ${item.bar}`}
                            style={{ width: `${item.progress}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex items-start gap-2.5 rounded-2xl border border-emerald-300/20 bg-emerald-300/10 p-3.5 text-sm font-semibold leading-6 text-emerald-100">
                    <FiZap className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                    Học 45 phút mỗi ngày, cuối tuần làm project nhỏ.
                  </div>
                </div>
              </div>
            </div>

            {/* Floating accents */}
            <div
              className="absolute -right-6 -top-6 hidden animate-float-slow rounded-2xl border border-white/15 bg-slate-900/90 px-4 py-3 shadow-lift backdrop-blur xl:block"
              aria-hidden="true"
            >
              <p className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-slate-400">
                streak
              </p>
              <p className="mt-1 text-sm font-extrabold text-white">12 ngày liên tục</p>
            </div>

            <div
              className="absolute -bottom-7 -left-7 hidden animate-float-slower rounded-2xl border border-white/15 bg-slate-900/90 px-4 py-3 shadow-lift backdrop-blur xl:block"
              aria-hidden="true"
            >
              <p className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-slate-400">
                portfolio
              </p>
              <p className="mt-1 text-sm font-extrabold text-white">4 project hoàn thành</p>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Tech marquee */}
      <div className="relative border-t border-white/10 bg-slate-950/60 py-5 backdrop-blur">
        <div className="mask-fade-x overflow-hidden">
          <div className="flex w-max animate-marquee" aria-hidden="true">
            {[0, 1].map((copy) => (
              <ul key={copy} className="flex shrink-0 items-center gap-10 pr-10">
                {techStack.map((tech) => (
                  <li
                    key={tech}
                    className="whitespace-nowrap font-mono text-sm font-semibold uppercase tracking-[0.14em] text-slate-500"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <span className="sr-only">
          Công nghệ trong lộ trình: {techStack.join(", ")}.
        </span>
      </div>
    </section>
  );
}
