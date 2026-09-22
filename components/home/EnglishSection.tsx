import { FiBookOpen, FiCheck, FiCode, FiFileText, FiTarget, FiType, FiVolume2 } from "react-icons/fi";
import type { IconType } from "react-icons";
import { englishFreeTopics } from "@/data/roadmap";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons: IconType[] = [FiType, FiVolume2, FiBookOpen, FiFileText, FiCode];

const vocabularySample = [
  { term: "deprecated", meaning: "không còn được khuyến nghị dùng" },
  { term: "throws an exception", meaning: "ném ra một ngoại lệ" },
  { term: "immutable", meaning: "không thể thay đổi sau khi tạo" },
];

export function EnglishSection() {
  return (
    <section
      id="english-free"
      className="relative overflow-hidden bg-gradient-to-b from-emerald-50/70 via-white to-white py-20 sm:py-28"
      aria-labelledby="english-title"
    >
      <div
        className="aurora -left-32 top-10 h-[24rem] w-[24rem] bg-emerald-200/40"
        aria-hidden="true"
      />

      <div className="shell relative">
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start lg:gap-16">
          <div>
            <SectionHeading
              id="english-title"
              eyebrow="English Free"
              accentClassName="text-emerald-700"
              title={
                <>
                  Tiếng Anh học đúng ngữ cảnh developer, dễ{" "}
                  <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    đọc docs
                  </span>{" "}
                  hơn.
                </>
              }
              description="Không cần bắt đầu bằng tài liệu khó. Bạn học lại từ âm, từ, câu đơn rồi chuyển dần sang từ vựng developer và cách đọc documentation."
            />

            <Reveal delay={180}>
              <div className="mt-9 overflow-hidden rounded-3xl border border-emerald-200/80 bg-white shadow-soft">
                <div className="flex items-center gap-3 border-b border-emerald-100 bg-emerald-50/60 px-5 py-4">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
                    <FiTarget className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <p className="text-sm font-extrabold text-emerald-950">Mục tiêu sau lộ trình</p>
                </div>
                <p className="px-5 py-4 text-sm leading-7 text-slate-600">
                  Đọc hiểu lỗi cơ bản, tên biến/hàm, commit message, README và tài liệu học lập
                  trình tiếng Anh ở mức nhập môn.
                </p>
              </div>
            </Reveal>

            <Reveal delay={250}>
              <div className="mt-5 rounded-3xl border border-slate-200/80 bg-slate-950 p-5 shadow-card">
                <p className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-emerald-300">
                  Từ vựng thường gặp
                </p>
                <ul className="mt-4 space-y-3">
                  {vocabularySample.map((item) => (
                    <li key={item.term} className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <code className="rounded-lg bg-white/10 px-2 py-1 font-mono text-xs font-semibold text-emerald-200">
                        {item.term}
                      </code>
                      <span className="text-sm text-slate-300">{item.meaning}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {englishFreeTopics.map((topic, index) => {
              const Icon = icons[index] ?? FiBookOpen;

              return (
                <Reveal key={topic.title} delay={index * 80} className="h-full">
                  <article className="group flex h-full flex-col rounded-3xl border border-emerald-100 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1.5 hover:border-emerald-300 hover:shadow-[0_34px_70px_-30px_rgba(5,150,105,0.45)]">
                    <div className="flex items-center gap-3">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-card transition duration-300 group-hover:scale-105">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <h3 className="text-lg font-extrabold leading-snug text-slate-950">
                        {topic.title}
                      </h3>
                    </div>

                    <p className="mt-4 flex-1 text-sm leading-6 text-slate-600">
                      {topic.description}
                    </p>

                    <ul className="mt-5 space-y-2 border-t border-dashed border-emerald-100 pt-4">
                      {topic.lessons.map((lesson) => (
                        <li
                          key={lesson}
                          className="flex items-center gap-2 text-xs font-semibold text-slate-600"
                        >
                          <FiCheck className="h-3.5 w-3.5 shrink-0 text-emerald-500" aria-hidden="true" />
                          {lesson}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
