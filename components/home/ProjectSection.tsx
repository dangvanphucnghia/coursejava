import { FiArrowUpRight, FiCheckCircle, FiLayers } from "react-icons/fi";
import { practicalProjects } from "@/data/roadmap";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const accents = [
  "from-cyan-400 to-sky-500",
  "from-amber-300 to-orange-400",
  "from-violet-400 to-fuchsia-500",
  "from-emerald-400 to-teal-500",
];

export function ProjectSection() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-slate-950 py-20 text-white sm:py-28"
      aria-labelledby="projects-title"
    >
      <div
        className="absolute inset-0 bg-grid-dark bg-[size:52px_52px] opacity-60"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(80%_60%_at_10%_0%,rgba(14,116,144,0.45),transparent_65%),radial-gradient(70%_50%_at_95%_100%,rgba(217,119,6,0.28),transparent_60%)]"
        aria-hidden="true"
      />
      <div
        className="aurora right-[-6rem] top-10 h-[24rem] w-[24rem] animate-float-slower bg-amber-500/15"
        aria-hidden="true"
      />

      <div className="shell relative">
        <SectionHeading
          id="projects-title"
          eyebrow="Project thực chiến"
          tone="dark"
          accentClassName="text-amber-300"
          title={
            <>
              Mỗi chặng kết thúc bằng một{" "}
              <span className="text-gradient">sản phẩm có thể show</span>.
            </>
          }
          description="Mỗi project được thiết kế để luyện một nhóm kỹ năng cụ thể và có đầu ra rõ ràng cho portfolio hoặc CV."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {practicalProjects.map((project, index) => (
            <Reveal key={project.title} delay={index * 90} className="h-full">
              <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1.5 hover:border-white/25 hover:bg-white/[0.1]">
                <span
                  className={`absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r transition-transform duration-500 group-hover:scale-x-100 ${
                    accents[index % accents.length]
                  }`}
                  aria-hidden="true"
                />

                <div className="flex items-start justify-between gap-4">
                  <span
                    className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br text-slate-950 shadow-card transition duration-300 group-hover:scale-105 ${
                      accents[index % accents.length]
                    }`}
                  >
                    <FiLayers className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="font-mono text-xs font-bold text-white/25">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-extrabold">{project.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-slate-300">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="chip-dark">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex gap-2.5 rounded-2xl border border-emerald-300/20 bg-emerald-300/10 p-3.5 text-sm font-semibold leading-6 text-slate-100">
                  <FiCheckCircle
                    className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300"
                    aria-hidden="true"
                  />
                  <span>{project.result}</span>
                </div>

                <FiArrowUpRight
                  className="absolute bottom-6 right-6 h-5 w-5 text-white/0 transition duration-300 group-hover:text-white/40"
                  aria-hidden="true"
                />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
