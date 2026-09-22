import {
  FiCode,
  FiDatabase,
  FiFlag,
  FiLayers,
  FiMonitor,
  FiServer,
  FiTerminal,
} from "react-icons/fi";
import type { IconType } from "react-icons";
import { roadmapSteps, type RoadmapTheme } from "@/data/roadmap";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons: IconType[] = [FiMonitor, FiTerminal, FiLayers, FiServer, FiDatabase, FiCode];

const themeStyles: Record<
  RoadmapTheme,
  { node: string; chip: string; ring: string; accent: string }
> = {
  cyan: {
    node: "from-cyan-400 to-sky-500",
    chip: "bg-cyan-50 text-cyan-800 ring-cyan-200/80",
    ring: "group-hover:border-cyan-300",
    accent: "text-cyan-700",
  },
  blue: {
    node: "from-blue-500 to-indigo-500",
    chip: "bg-blue-50 text-blue-800 ring-blue-200/80",
    ring: "group-hover:border-blue-300",
    accent: "text-blue-700",
  },
  emerald: {
    node: "from-emerald-400 to-teal-500",
    chip: "bg-emerald-50 text-emerald-800 ring-emerald-200/80",
    ring: "group-hover:border-emerald-300",
    accent: "text-emerald-700",
  },
  amber: {
    node: "from-amber-400 to-orange-500",
    chip: "bg-amber-50 text-amber-900 ring-amber-200/80",
    ring: "group-hover:border-amber-300",
    accent: "text-amber-800",
  },
  violet: {
    node: "from-violet-500 to-fuchsia-500",
    chip: "bg-violet-50 text-violet-800 ring-violet-200/80",
    ring: "group-hover:border-violet-300",
    accent: "text-violet-700",
  },
  slate: {
    node: "from-slate-700 to-slate-900",
    chip: "bg-slate-100 text-slate-800 ring-slate-200",
    ring: "group-hover:border-slate-400",
    accent: "text-slate-700",
  },
};

const summary = [
  { value: "6", label: "chặng học" },
  { value: "4", label: "project nhỏ" },
  { value: "0đ", label: "chi phí" },
];

export function RoadmapSection() {
  return (
    <section
      id="roadmap"
      className="relative overflow-hidden bg-white py-20 sm:py-28"
      aria-labelledby="roadmap-title"
    >
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"
        aria-hidden="true"
      />

      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <SectionHeading
            id="roadmap-title"
            eyebrow="Roadmap Full-stack"
            title={
              <>
                Một lộ trình có thứ tự, có{" "}
                <span className="text-gradient-ink">mốc sản phẩm</span> sau mỗi chặng.
              </>
            }
            description="Mỗi bước chỉ tập trung một nhóm kỹ năng chính, đi kèm milestone để bạn biết mình đang tiến tới sản phẩm nào."
          />

          <Reveal delay={120}>
            <div className="grid grid-cols-3 gap-px overflow-hidden rounded-3xl border border-slate-200 bg-slate-200">
              {summary.map((item) => (
                <div key={item.label} className="bg-white p-5 text-center sm:p-6">
                  <p className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                    {item.value}
                  </p>
                  <p className="mt-1.5 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-slate-500">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Timeline */}
        <div className="relative mt-16">
          <div
            className="absolute bottom-6 left-[1.375rem] top-4 w-px bg-gradient-to-b from-cyan-300 via-violet-300 to-slate-200 lg:left-1/2"
            aria-hidden="true"
          />

          <ol className="space-y-6 lg:space-y-0">
            {roadmapSteps.map((item, index) => {
              const Icon = icons[index] ?? FiCode;
              const theme = themeStyles[item.theme];
              const onRight = index % 2 === 1;

              return (
                <li
                  key={item.step}
                  className="relative lg:grid lg:grid-cols-2 lg:gap-x-16 lg:pb-8"
                >
                  <span
                    className={`absolute left-0 top-6 z-10 grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br text-white shadow-card ring-4 ring-white lg:left-1/2 lg:-translate-x-1/2 ${theme.node}`}
                    aria-hidden="true"
                  >
                    <Icon className="h-5 w-5" />
                  </span>

                  <Reveal
                    delay={index * 60}
                    className={[
                      "ml-14 sm:ml-16 lg:ml-0",
                      onRight ? "lg:col-start-2 lg:pl-10" : "lg:col-start-1 lg:pr-10",
                    ].join(" ")}
                  >
                    <article
                      className={`group rounded-3xl border border-slate-200/80 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lift ${theme.ring}`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`inline-flex rounded-full px-3 py-1 font-mono text-[0.68rem] font-bold tracking-[0.12em] ring-1 ${theme.chip}`}
                        >
                          STEP {item.step}
                        </span>
                        <span className="hairline flex-1" aria-hidden="true" />
                      </div>

                      <h3 className="mt-4 text-xl font-extrabold text-slate-950 sm:text-2xl">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>

                      <div className="mt-5 flex items-start gap-3 rounded-2xl bg-slate-50 p-4 ring-1 ring-inset ring-slate-100">
                        <FiFlag
                          className={`mt-0.5 h-4 w-4 shrink-0 ${theme.accent}`}
                          aria-hidden="true"
                        />
                        <div>
                          <p className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.16em] text-slate-500">
                            Milestone
                          </p>
                          <p className="mt-1 text-sm font-bold text-slate-900">{item.milestone}</p>
                        </div>
                      </div>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.topics.map((topic) => (
                          <span key={topic} className="chip">
                            {topic}
                          </span>
                        ))}
                      </div>
                    </article>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
