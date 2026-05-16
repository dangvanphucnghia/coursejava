import { FiAward, FiCheckCircle, FiTarget, FiUsers } from "react-icons/fi";
import { learningBenefits } from "@/data/roadmap";

const benefitIcons = [FiUsers, FiTarget, FiCheckCircle, FiAward];

export function BenefitsSection() {
  return (
    <section id="benefits" className="bg-white py-16 sm:py-20" aria-labelledby="benefits-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-cyan-700">Lợi ích</p>
            <h2
              id="benefits-title"
              className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl"
            >
              Một nơi học gọn, rõ đường đi và thực hành liên tục.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              CourseJava ưu tiên kiến thức cốt lõi, bài tập nhỏ và project đủ thực tế để
              người mới xây được thói quen học bền vững.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {learningBenefits.map((benefit, index) => {
              const Icon = benefitIcons[index] ?? FiCheckCircle;

              return (
                <article key={benefit} className="rounded-lg border border-slate-200 bg-slate-50 p-5">
                  <span className="grid h-11 w-11 place-items-center rounded-lg bg-slate-950 text-cyan-300">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-lg font-extrabold text-slate-950">{benefit}</h3>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
