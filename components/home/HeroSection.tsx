import Link from "next/link";
import {
  FiActivity,
  FiArrowRight,
  FiBookOpen,
  FiCode,
  FiGlobe,
  FiPlayCircle,
  FiZap,
} from "react-icons/fi";

const heroStats = [
  { label: "Roadmap", value: "Full-stack" },
  { label: "Chi phí", value: "Miễn phí" },
  { label: "Bắt đầu", value: "Từ số 0" },
];

const learningQueue = [
  { title: "HTML/CSS", detail: "Layout, responsive, semantic" },
  { title: "JavaScript", detail: "DOM, data, async flow" },
  { title: "Java Core", detail: "OOP, Collections, I/O" },
  { title: "English Dev", detail: "Docs, errors, vocabulary" },
];

const roadmapPreview = [
  { label: "Frontend", progress: "78%", color: "bg-cyan-400" },
  { label: "Java Core", progress: "64%", color: "bg-emerald-400" },
  { label: "Project", progress: "46%", color: "bg-amber-300" },
];

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-slate-950 text-white"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:44px_44px]" />
      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(8,47,73,0.94),rgba(2,6,23,0.98)_42%,rgba(88,28,135,0.5)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-50 to-transparent" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:py-20 lg:grid-cols-[0.96fr_1.04fr] lg:px-8">
        <div className="flex flex-col justify-center">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-300/30 bg-white/10 px-4 py-2 text-sm font-semibold text-cyan-100 backdrop-blur">
            <FiGlobe className="h-4 w-4" aria-hidden="true" />
            Nền tảng học online miễn phí cho developer mới bắt đầu
          </div>

          <h1
            id="hero-title"
            className="mt-6 max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl"
          >
            Học Full-stack từ số 0 bằng lộ trình rõ, bài tập thật, project thật.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            CourseJava gom Java, Frontend, English for Developers và project thực chiến
            vào một hành trình dễ theo dõi để bạn học đều, làm đều và thấy tiến bộ rõ.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/courses"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-extrabold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-300"
            >
              Vào khu học miễn phí
              <FiPlayCircle className="h-5 w-5" aria-hidden="true" />
            </Link>
            <Link
              href="/#roadmap"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur transition hover:bg-white/15"
            >
              Xem roadmap
              <FiArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <dl className="mt-10 grid max-w-xl grid-cols-3 gap-3">
            {heroStats.map((stat) => (
              <div key={stat.label} className="rounded-lg border border-white/10 bg-white/[0.07] p-4 backdrop-blur">
                <dt className="text-xs font-semibold uppercase text-slate-400">
                  {stat.label}
                </dt>
                <dd className="mt-1 text-sm font-extrabold text-white sm:text-base">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative flex items-center lg:justify-end">
          <div className="w-full max-w-xl overflow-hidden rounded-lg border border-white/10 bg-white/[0.08] shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
            <div className="border-b border-white/10 bg-white/[0.06] px-5 py-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase text-cyan-200">Learning cockpit</p>
                  <h2 className="mt-1 text-xl font-extrabold">Lộ trình hôm nay</h2>
                </div>
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-cyan-400 text-slate-950">
                  <FiActivity className="h-5 w-5" aria-hidden="true" />
                </span>
              </div>
            </div>

            <div className="grid gap-0 sm:grid-cols-[0.95fr_1.05fr]">
              <div className="border-b border-white/10 p-5 sm:border-b-0 sm:border-r">
                <div className="flex items-center gap-2 text-cyan-200">
                  <FiCode className="h-4 w-4" aria-hidden="true" />
                  <span className="text-sm font-bold">Study path</span>
                </div>

                <ol className="mt-4 space-y-3">
                  {learningQueue.map((item, index) => (
                    <li key={item.title} className="flex gap-3">
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white text-xs font-extrabold text-slate-950">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <p className="text-sm font-extrabold text-white">{item.title}</p>
                        <p className="mt-0.5 text-xs leading-5 text-slate-400">{item.detail}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="p-5">
                <div className="rounded-lg bg-white p-4 text-slate-950">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-bold uppercase text-slate-500">Khóa nên bắt đầu</p>
                      <h3 className="mt-1 text-lg font-extrabold">Java Core Basic</h3>
                    </div>
                    <FiBookOpen className="h-7 w-7 text-cyan-600" aria-hidden="true" />
                  </div>
                  <div className="mt-4 h-2 rounded-full bg-slate-100">
                    <div className="h-2 w-2/3 rounded-full bg-cyan-500" />
                  </div>
                  <p className="mt-3 text-sm font-semibold text-slate-600">65 bài học · FREE</p>
                </div>

                <div className="mt-5 space-y-4">
                  {roadmapPreview.map((item) => (
                    <div key={item.label}>
                      <div className="flex items-center justify-between text-xs font-bold">
                        <span className="text-slate-300">{item.label}</span>
                        <span className="text-white">{item.progress}</span>
                      </div>
                      <div className="mt-2 h-2 rounded-full bg-white/10">
                        <div className={`h-2 rounded-full ${item.color}`} style={{ width: item.progress }} />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-2 rounded-lg border border-emerald-300/20 bg-emerald-300/10 p-3 text-sm font-semibold text-emerald-100">
                  <FiZap className="h-4 w-4 shrink-0" aria-hidden="true" />
                  Học 45 phút mỗi ngày, cuối tuần làm project nhỏ.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
