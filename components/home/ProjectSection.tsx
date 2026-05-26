import { FiArrowRight, FiBriefcase, FiCheckCircle } from "react-icons/fi";
import { practicalProjects } from "@/data/roadmap";

export function ProjectSection() {
  return (
    <section id="projects" className="bg-[#111827] py-16 text-white sm:py-20" aria-labelledby="projects-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase text-amber-300">
            Project thực chiến
          </p>
          <h2
            id="projects-title"
            className="mt-3 text-3xl font-extrabold sm:text-4xl"
          >
            Mỗi chặng kết thúc bằng một sản phẩm có thể show.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-300">
            Mỗi project được thiết kế để luyện một nhóm kỹ năng cụ thể và có đầu ra rõ ràng
            cho portfolio hoặc CV.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {practicalProjects.map((project) => (
            <article
              key={project.title}
              className="group rounded-lg border border-white/10 bg-white/[0.07] p-5 shadow-sm transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.1]"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-amber-300 text-slate-950">
                  <FiBriefcase className="h-5 w-5" aria-hidden="true" />
                </span>
                <FiArrowRight className="h-5 w-5 text-slate-500 transition group-hover:text-white" aria-hidden="true" />
              </div>

              <h3 className="mt-5 text-xl font-extrabold">{project.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{project.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex gap-2 rounded-lg border border-emerald-300/20 bg-emerald-300/10 p-3 text-sm font-semibold text-slate-100">
                <FiCheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" aria-hidden="true" />
                <span>{project.result}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
