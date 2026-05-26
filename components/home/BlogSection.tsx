import { FiArrowRight, FiBook, FiFileText, FiMap } from "react-icons/fi";

const resources = [
  {
    title: "Ghi chú học Java",
    description: "Tóm tắt cú pháp, OOP, Collections và lỗi thường gặp khi mới học Java.",
    icon: FiBook,
  },
  {
    title: "Tài liệu frontend",
    description: "Checklist HTML/CSS, JavaScript, React/Next.js và cách tự luyện project nhỏ.",
    icon: FiFileText,
  },
  {
    title: "Lộ trình học tuần",
    description: "Gợi ý chia lịch học cho người đi từ mất gốc đến làm project full-stack.",
    icon: FiMap,
  },
];

export function BlogSection() {
  return (
    <section id="blog" className="bg-[#f8fafc] py-16 sm:py-20" aria-labelledby="blog-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase text-cyan-700">
              Blog/Tài liệu học tập
            </p>
            <h2
              id="blog-title"
              className="mt-3 text-3xl font-extrabold text-slate-950 sm:text-4xl"
            >
              Tài liệu ngắn, dễ tra, bám sát từng bước học.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Khu vực này sẽ mở rộng thành thư viện bài viết, ghi chú và checklist học tập
              khi các khóa học được cập nhật.
            </p>
          </div>
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-slate-600 shadow-sm ring-1 ring-slate-200">
            Đang cập nhật
            <FiArrowRight className="h-4 w-4" aria-hidden="true" />
          </span>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {resources.map((resource) => {
            const Icon = resource.icon;

            return (
              <article
                key={resource.title}
                className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-cyan-200 hover:shadow-lg hover:shadow-slate-200/70"
              >
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-cyan-600 text-white shadow-sm">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-extrabold text-slate-950">{resource.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{resource.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
