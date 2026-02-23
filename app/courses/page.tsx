import Link from "next/link";

const TRIAL_LINK =
  "https://drive.google.com/drive/folders/1NTSIdfA1-gPouEitkfUVNbbS91P7u_8z?hl=vi";

const ZALO_LINK = "https://zalo.me/0368285760";

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-[#f6f9fc]">
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="text-4xl font-extrabold text-slate-900">Khoá học</h1>
        <p className="mt-3 text-slate-600">Chọn khóa học bạn muốn học.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Java Core card */}
          <div className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <Link
              href="/courses/java-core"
              className="absolute inset-0 rounded-2xl"
              aria-label="Xem chi tiết khoá Java Core"
            />

            <h2 className="text-xl font-bold text-slate-900">Java Core</h2>
            <p className="mt-2 text-slate-600">
              Nền tảng Java, OOP, Collections, Exception, I/O, JVM.
            </p>

            <div className="mt-3 relative z-10">
              <div className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">
                Giá: FREE
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-3 relative z-10">
              <a
                href={ZALO_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full bg-[#184b55] px-4 py-2 text-xs font-bold tracking-widest text-white"
              >
                MUA KHOÁ HỌC
              </a>

              {/* CHỈ SỬA CHỖ NÀY: HỌC THỬ -> dẫn tới trang Java Core */}
              <Link
                href="/courses/java-core"
                className="inline-flex rounded-full border border-[#184b55] bg-white px-4 py-2 text-xs font-bold tracking-widest text-[#184b55] transition hover:bg-[#184b55] hover:text-white"
              >
                HỌC THỬ
              </Link>
            </div>
          </div>

          {/* TOEIC MS Thắm card */}
          <div className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <Link
              href="/courses/toeic-ms-tham"
              className="absolute inset-0 rounded-2xl"
              aria-label="Xem chi tiết khoá TOEIC MS Thắm"
            />

            <h2 className="text-xl font-bold text-slate-900">TOEIC MS Thắm</h2>
            <p className="mt-2 text-slate-600">
              Luyện TOEIC từ cơ bản đến nâng cao: Listening, Reading, mẹo làm bài.
            </p>

            <div className="mt-3 relative z-10">
              <div className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">
                Giá: 50.000đ
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-3 relative z-10">
              <a
                href={ZALO_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full bg-[#184b55] px-4 py-2 text-xs font-bold tracking-widest text-white"
              >
                MUA KHOÁ HỌC
              </a>

              <a
                href={TRIAL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full border border-[#184b55] bg-white px-4 py-2 text-xs font-bold tracking-widest text-[#184b55] transition hover:bg-[#184b55] hover:text-white"
              >
                HỌC THỬ
              </a>
            </div>
          </div>

          {/* Placeholder khoá khác */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 opacity-60">
            <h2 className="text-xl font-bold text-slate-900">Spring Boot</h2>
            <p className="mt-2 text-slate-600">Sắp ra mắt</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 opacity-60">
            <h2 className="text-xl font-bold text-slate-900">SQL</h2>
            <p className="mt-2 text-slate-600">Sắp ra mắt</p>
          </div>
        </div>

        <div className="mt-10">
          <Link href="/" className="text-sm font-semibold text-[#184b55]">
            ← Quay về trang chủ
          </Link>
        </div>
      </section>
    </main>
  );
}