import {
  FiCode,
  FiDatabase,
  FiLayers,
  FiMonitor,
  FiServer,
  FiTerminal,
} from "react-icons/fi";
import type { IconType } from "react-icons";
import { roadmapSteps, type RoadmapTheme } from "@/data/roadmap";

const icons: IconType[] = [FiMonitor, FiTerminal, FiLayers, FiServer, FiDatabase, FiCode];

const themeStyles: Record<
  RoadmapTheme,
  {
    step: string;
    icon: string;
    border: string;
  }
> = {
  cyan: {
    step: "text-cyan-700 bg-cyan-50 ring-cyan-200",
    icon: "bg-cyan-600 text-white",
    border: "border-cyan-200",
  },
  blue: {
    step: "text-blue-700 bg-blue-50 ring-blue-200",
    icon: "bg-blue-600 text-white",
    border: "border-blue-200",
  },
  emerald: {
    step: "text-emerald-700 bg-emerald-50 ring-emerald-200",
    icon: "bg-emerald-600 text-white",
    border: "border-emerald-200",
  },
  amber: {
    step: "text-amber-800 bg-amber-50 ring-amber-200",
    icon: "bg-amber-500 text-white",
    border: "border-amber-200",
  },
  violet: {
    step: "text-violet-700 bg-violet-50 ring-violet-200",
    icon: "bg-violet-600 text-white",
    border: "border-violet-200",
  },
  slate: {
    step: "text-slate-700 bg-slate-100 ring-slate-200",
    icon: "bg-slate-900 text-white",
    border: "border-slate-200",
  },
};

export function RoadmapSection() {
  return (
    <section id="roadmap" className="bg-white py-16 sm:py-20" aria-labelledby="roadmap-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase text-cyan-700">
            Roadmap Full-stack
            </p>
            <h2
              id="roadmap-title"
              className="mt-3 text-3xl font-extrabold text-slate-950 sm:text-4xl"
            >
              Một lộ trình có thứ tự, có mốc sản phẩm sau mỗi chặng.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Mỗi bước chỉ tập trung một nhóm kỹ năng chính, đi kèm milestone để bạn biết
              mình đang tiến tới sản phẩm nào.
            </p>
          </div>

          <div className="grid grid-cols-3 overflow-hidden rounded-lg border border-slate-200 bg-slate-50">
            {[
              ["6", "chặng học"],
              ["4", "project nhỏ"],
              ["0đ", "chi phí"],
            ].map(([value, label]) => (
              <div key={label} className="border-r border-slate-200 p-4 last:border-r-0">
                <p className="text-2xl font-extrabold text-slate-950">{value}</p>
                <p className="mt-1 text-xs font-semibold text-slate-500">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {roadmapSteps.map((item, index) => {
            const Icon = icons[index] ?? FiCode;
            const theme = themeStyles[item.theme];

            return (
              <article
                key={item.step}
                className={`rounded-lg border bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/70 ${theme.border}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-extrabold ring-1 ${theme.step}`}
                  >
                    {item.step}
                  </span>
                  <span className={`grid h-11 w-11 place-items-center rounded-lg ${theme.icon}`}>
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-extrabold text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>

                <div className="mt-5 rounded-lg bg-slate-50 p-4">
                  <p className="text-xs font-bold uppercase text-slate-500">
                    Milestone
                  </p>
                  <p className="mt-1 text-sm font-bold text-slate-900">{item.milestone}</p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {item.topics.map((topic) => (
                    <span
                      key={topic}
                      className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
