import Link from "next/link";

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-[#f6f9fc]">
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="text-4xl font-extrabold text-slate-900">Khoá học</h1>
        <p className="mt-3 text-slate-600">
          Chọn khóa học bạn muốn học.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Java Core card */}
          <Link
            href="/courses/java-core"
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <h2 className="text-xl font-bold text-slate-900">Java Core</h2>
            <p className="mt-2 text-slate-600">
              Nền tảng Java, OOP, Collections, Exception, I/O, JVM.
            </p>
            <div className="mt-4 inline-flex rounded-full bg-[#184b55] px-4 py-2 text-xs font-bold tracking-widest text-white">
              XEM KHOÁ HỌC
            </div>
          </Link>

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
