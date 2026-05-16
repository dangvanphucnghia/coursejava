import Image from "next/image";
import Link from "next/link";
import {
  FiArrowRight,
  FiBookOpen,
  FiCheckCircle,
  FiCode,
  FiGlobe,
  FiPlayCircle,
} from "react-icons/fi";

const heroStats = [
  { label: "Roadmap", value: "Full-stack" },
  { label: "Chi phí", value: "Miễn phí" },
  { label: "Bắt đầu", value: "Từ số 0" },
];

const learningQueue = [
  "HTML/CSS căn bản",
  "JavaScript DOM",
  "Java Core OOP",
  "English for Developers",
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white" aria-labelledby="hero-title">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(8,47,73,0.72),rgba(15,23,42,0.98)_45%,rgba(22,78,99,0.55))]" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:py-24">
        <div className="flex flex-col justify-center">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100">
            <FiGlobe className="h-4 w-4" aria-hidden="true" />
            Nền tảng học online miễn phí cho developer mới bắt đầu
          </div>

          <h1
            id="hero-title"
            className="mt-6 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
          >
            Học lập trình Full-stack từ số 0, kèm tiếng Anh nền tảng cho developer.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            CourseJava giúp bạn đi từng bước từ HTML/CSS, JavaScript, React/Next.js đến
            Java/Spring Boot, database và project thực chiến để tự tin xây sản phẩm thật.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/courses"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-extrabold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-300"
            >
              Bắt đầu học miễn phí
              <FiPlayCircle className="h-5 w-5" aria-hidden="true" />
            </Link>
            <Link
              href="/#roadmap"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/15"
            >
              Xem roadmap
              <FiArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <dl className="mt-10 grid max-w-xl grid-cols-3 gap-3">
            {heroStats.map((stat) => (
              <div key={stat.label} className="rounded-lg border border-white/10 bg-white/5 p-4">
                <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  {stat.label}
                </dt>
                <dd className="mt-1 text-sm font-extrabold text-white sm:text-base">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative flex items-center lg:justify-end">
          <div className="w-full max-w-xl rounded-lg border border-white/10 bg-white/[0.06] p-4 shadow-2xl shadow-slate-950/40 backdrop-blur">
            <div className="rounded-lg border border-slate-700 bg-slate-950">
              <div className="flex items-center justify-between border-b border-slate-800 px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </div>
                <span className="text-xs font-semibold text-slate-400">coursejava/roadmap.ts</span>
              </div>

              <div className="grid gap-4 p-4 sm:grid-cols-[1fr_0.82fr]">
                <div className="space-y-3">
                  <div className="rounded-lg bg-slate-900 p-4">
                    <div className="flex items-center gap-2 text-cyan-300">
                      <FiCode className="h-4 w-4" aria-hidden="true" />
                      <span className="text-sm font-bold">Full-stack path</span>
                    </div>
                    <pre className="mt-4 overflow-hidden text-xs leading-6 text-slate-300">
                      <code>{`const path = [
  "HTML/CSS",
  "JavaScript",
  "Next.js",
  "Java/Spring Boot",
  "Database",
  "Project"
];`}</code>
                    </pre>
                  </div>

                  <div className="rounded-lg bg-white p-4 text-slate-950">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                          Khóa học nổi bật
                        </p>
                        <h2 className="mt-1 text-lg font-extrabold">Java Core Basic</h2>
                      </div>
                      <FiBookOpen className="h-8 w-8 text-cyan-600" aria-hidden="true" />
                    </div>
                    <div className="mt-4 h-2 rounded-full bg-slate-100">
                      <div className="h-2 w-2/3 rounded-full bg-cyan-500" />
                    </div>
                    <p className="mt-3 text-sm font-semibold text-slate-600">65 bài học · FREE</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="rounded-lg bg-cyan-400 p-4 text-slate-950">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wide">English Free</p>
                        <p className="mt-2 text-sm font-semibold">
                          Phát âm, từ vựng và docs reading cho developer.
                        </p>
                      </div>
                      <Image
                        src="/images/mascot.gif"
                        alt=""
                        width={68}
                        height={68}
                        unoptimized
                        className="hidden shrink-0 sm:block"
                      />
                    </div>
                  </div>

                  <div className="rounded-lg bg-slate-900 p-4">
                    <p className="text-sm font-bold text-white">Hôm nay học gì?</p>
                    <ul className="mt-4 space-y-3">
                      {learningQueue.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-slate-300">
                          <FiCheckCircle
                            className="h-4 w-4 shrink-0 text-emerald-400"
                            aria-hidden="true"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
