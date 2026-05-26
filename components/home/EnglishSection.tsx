import { FiBookOpen, FiCode, FiFileText, FiType, FiVolume2 } from "react-icons/fi";
import type { IconType } from "react-icons";
import { englishFreeTopics } from "@/data/roadmap";

const icons: IconType[] = [FiType, FiVolume2, FiBookOpen, FiFileText, FiCode];

export function EnglishSection() {
  return (
    <section id="english-free" className="bg-[#f7fff9] py-16 sm:py-20" aria-labelledby="english-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase text-emerald-700">
              English Free
            </p>
            <h2
              id="english-title"
              className="mt-3 text-3xl font-extrabold text-slate-950 sm:text-4xl"
            >
              Tiếng Anh học đúng ngữ cảnh developer, dễ đọc docs hơn.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Không cần bắt đầu bằng tài liệu khó. Bạn học lại từ âm, từ, câu đơn rồi
              chuyển dần sang từ vựng developer và cách đọc documentation.
            </p>

            <div className="mt-8 rounded-lg border border-emerald-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-extrabold text-emerald-900">Mục tiêu sau lộ trình</p>
              <p className="mt-2 text-sm leading-6 text-emerald-800">
                Đọc hiểu lỗi cơ bản, tên biến/hàm, commit message, README và tài liệu học
                lập trình tiếng Anh ở mức nhập môn.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {englishFreeTopics.map((topic, index) => {
              const Icon = icons[index] ?? FiBookOpen;

              return (
                <article
                  key={topic.title}
                  className="rounded-lg border border-emerald-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-100/80"
                >
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-lg bg-emerald-600 text-white shadow-sm">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="text-lg font-extrabold text-slate-950">{topic.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{topic.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {topic.lessons.map((lesson) => (
                      <span
                        key={lesson}
                        className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600"
                      >
                        {lesson}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
