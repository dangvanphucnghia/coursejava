import { FiBook, FiClock, FiFileText, FiMap } from "react-icons/fi";
import type { IconType } from "react-icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Resource = {
  title: string;
  description: string;
  icon: IconType;
  tag: string;
  gradient: string;
};

const resources: Resource[] = [
  {
    title: "Ghi chú học Java",
    description: "Tóm tắt cú pháp, OOP, Collections và lỗi thường gặp khi mới học Java.",
    icon: FiBook,
    tag: "Java",
    gradient: "from-cyan-400 to-sky-500",
  },
  {
    title: "Tài liệu frontend",
    description: "Checklist HTML/CSS, JavaScript, React/Next.js và cách tự luyện project nhỏ.",
    icon: FiFileText,
    tag: "Frontend",
    gradient: "from-violet-500 to-fuchsia-500",
  },
  {
    title: "Lộ trình học tuần",
    description: "Gợi ý chia lịch học cho người đi từ mất gốc đến làm project full-stack.",
    icon: FiMap,
    tag: "Roadmap",
    gradient: "from-amber-400 to-orange-500",
  },
];

export function BlogSection() {
  return (
    <section id="blog" className="bg-ink-50 py-20 sm:py-28" aria-labelledby="blog-title">
      <div className="shell">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            id="blog-title"
            eyebrow="Blog / Tài liệu"
            title={
              <>
                Tài liệu ngắn, dễ tra, bám sát{" "}
                <span className="text-gradient-ink">từng bước học</span>.
              </>
            }
            description="Khu vực này sẽ mở rộng thành thư viện bài viết, ghi chú và checklist học tập khi các khóa học được cập nhật."
          />

          <Reveal delay={120}>
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-slate-600 shadow-soft ring-1 ring-slate-200">
              <FiClock className="h-4 w-4 text-brand-600" aria-hidden="true" />
              Đang cập nhật
            </span>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {resources.map((resource, index) => {
            const Icon = resource.icon;

            return (
              <Reveal key={resource.title} delay={index * 90} className="h-full">
                <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1.5 hover:border-slate-300 hover:shadow-lift">
                  <span
                    className={`absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r transition-transform duration-500 group-hover:scale-x-100 ${resource.gradient}`}
                    aria-hidden="true"
                  />

                  <div className="flex items-center justify-between gap-4">
                    <span
                      className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br text-white shadow-card transition duration-300 group-hover:scale-105 ${resource.gradient}`}
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="chip font-mono text-[0.68rem] uppercase tracking-[0.12em]">
                      {resource.tag}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-extrabold text-slate-950">{resource.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                    {resource.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
