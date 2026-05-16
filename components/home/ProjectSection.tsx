import { FiArrowRight, FiBriefcase, FiCheckCircle } from "react-icons/fi";
import { practicalProjects } from "@/data/roadmap";

export function ProjectSection() {
  return (
    <section id="projects" className="bg-slate-950 py-16 text-white sm:py-20" aria-labelledby="projects-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-wide text-cyan-300">
            Project thực chiến
          </p>
          <h2
            id="projects-title"
            className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl"
          >
            Học xong có sản phẩm thật, không chỉ xem video.
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
              className="rounded-lg border border-white/10 bg-white/[0.06] p-5 shadow-sm"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-cyan-400 text-slate-950">
                  <FiBriefcase className="h-5 w-5" aria-hidden="true" />
                </span>
                <FiArrowRight className="h-5 w-5 text-slate-500" aria-hidden="true" />
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

              <div className="mt-5 flex gap-2 rounded-lg bg-white/10 p-3 text-sm font-semibold text-slate-100">
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
