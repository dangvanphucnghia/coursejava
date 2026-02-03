import Image from "next/image";
import Link from "next/link";

export default function JavaCorePage() {
  return (
    <main className="min-h-screen bg-[#f6f9fc]">
      {/* HERO giống Canva */}
      <section className="relative h-[100svh] overflow-hidden">
        <Image
          src="/images/anh-bien-dao.png"
          alt="Java Core Background"
          fill
          priority
          className="object-cover"
        />

        {/* overlay trắng */}
        <div className="absolute inset-0 bg-white/70" />

        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-center px-4">
          <p className="mb-4 font-script text-3xl text-orange-500">
            Learn with me now
          </p>

          <h1 className="text-[clamp(3rem,8vw,6rem)] font-extrabold tracking-tight text-[#184b55]">
            JAVA CORE
          </h1>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#course"
              className="rounded-full bg-[#184b55] px-8 py-4 text-sm font-bold uppercase tracking-widest text-white"
            >
              Start Course
            </a>

            <span className="font-semibold tracking-widest text-slate-700">
              COURSEJAVA.COM
            </span>
          </div>
        </div>
      </section>

      {/* Nội dung dưới */}
      <section id="course" className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-3xl font-bold text-slate-900">Lộ trình Java Core</h2>

          <Link href="/courses" className="text-sm font-semibold text-[#184b55]">
            ← Quay lại Courses
          </Link>
        </div>

        <p className="mt-4 max-w-2xl text-slate-600">
          Học Java nền tảng từ cơ bản đến vững chắc để bước vào Backend / Spring.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Java Basics",
            "OOP trong Java",
            "Collections Framework",
            "Exception Handling",
            "Java I/O",
            "JVM & Memory",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="font-semibold text-slate-800">{item}</h3>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
