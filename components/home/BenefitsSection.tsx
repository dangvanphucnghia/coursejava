import Link from "next/link";
import { FiArrowRight, FiAward, FiCheckCircle, FiTarget, FiUsers } from "react-icons/fi";
import type { IconType } from "react-icons";
import { learningBenefits } from "@/data/roadmap";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const benefitIcons: IconType[] = [FiUsers, FiTarget, FiCheckCircle, FiAward];

export function BenefitsSection() {
  return (
    <section id="benefits" className="bg-white py-20 sm:py-28" aria-labelledby="benefits-title">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-16">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              id="benefits-title"
              eyebrow="Lợi ích"
              title={
                <>
                  Ít nhiễu hơn, nhiều{" "}
                  <span className="text-gradient-ink">thực hành</span> hơn, dễ duy trì hơn.
                </>
              }
              description="CourseJava ưu tiên kiến thức cốt lõi, bài tập nhỏ và project đủ thực tế để người mới xây được thói quen học bền vững."
            />

            <Reveal delay={200}>
              <Link href="/courses" className="btn-ink group mt-8">
                Bắt đầu chặng đầu tiên
                <FiArrowRight
                  className="h-4 w-4 transition duration-200 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            </Reveal>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {learningBenefits.map((benefit, index) => {
              const Icon = benefitIcons[index] ?? FiCheckCircle;

              return (
                <Reveal key={benefit.title} delay={index * 80} className="h-full">
                  <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-50/60 p-6 transition duration-300 hover:-translate-y-1.5 hover:border-slate-300 hover:bg-white hover:shadow-lift">
                    <span
                      className="pointer-events-none absolute -right-14 -top-14 h-36 w-36 rounded-full bg-brand-300/0 blur-2xl transition duration-500 group-hover:bg-brand-300/25"
                      aria-hidden="true"
                    />

                    <div className="relative flex items-center justify-between">
                      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-950 text-cyan-300 shadow-card transition duration-300 group-hover:scale-105">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span className="font-mono text-2xl font-bold text-slate-200 transition duration-300 group-hover:text-brand-200">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="relative mt-5 text-lg font-extrabold leading-snug text-slate-950">
                      {benefit.title}
                    </h3>
                    <p className="relative mt-3 text-sm leading-6 text-slate-600">
                      {benefit.description}
                    </p>
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
