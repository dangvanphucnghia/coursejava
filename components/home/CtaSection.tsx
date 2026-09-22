import Link from "next/link";
import { FiArrowRight, FiCheck, FiMail } from "react-icons/fi";
import { Reveal } from "@/components/ui/Reveal";

const reassurances = [
  "Không phí, không giới hạn bài học",
  "Bắt đầu được ngay cả khi mất gốc",
  "Có project để đưa vào CV",
];

export function CtaSection() {
  return (
    <section className="bg-ink-50 pb-20 sm:pb-28" aria-labelledby="cta-title">
      <div className="shell">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-slate-950 px-6 py-14 text-white shadow-lift sm:px-12 sm:py-16 lg:px-16">
            <div
              className="absolute inset-0 bg-grid-dark bg-[size:44px_44px] opacity-60"
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 bg-[radial-gradient(70%_80%_at_0%_0%,rgba(8,145,178,0.55),transparent_62%),radial-gradient(60%_70%_at_100%_100%,rgba(124,58,237,0.45),transparent_60%)]"
              aria-hidden="true"
            />
            <div
              className="aurora -right-16 -top-16 h-72 w-72 animate-float-slow bg-cyan-400/25"
              aria-hidden="true"
            />

            <div className="relative grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <div>
                <span className="eyebrow text-cyan-300">
                  <span
                    className="inline-block h-1.5 w-1.5 rounded-full bg-current"
                    aria-hidden="true"
                  />
                  Sẵn sàng bắt đầu
                </span>

                <h2
                  id="cta-title"
                  className="mt-4 max-w-2xl text-[2rem] font-extrabold leading-[1.12] sm:text-4xl lg:text-[2.75rem]"
                >
                  Bắt đầu chặng đầu tiên hôm nay, phần còn lại đã có{" "}
                  <span className="text-gradient">lộ trình lo</span>.
                </h2>

                <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
                  {reassurances.map((item) => (
                    <li
                      key={item}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300"
                    >
                      <span
                        className="grid h-5 w-5 place-items-center rounded-full bg-emerald-400/15 text-emerald-300"
                        aria-hidden="true"
                      >
                        <FiCheck className="h-3 w-3" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-stretch">
                <Link href="/courses" className="btn-primary group">
                  Vào khu học miễn phí
                  <FiArrowRight
                    className="h-4 w-4 transition duration-200 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </Link>
                <a href="mailto:nghia812014@gmail.com" className="btn-ghost-dark">
                  <FiMail className="h-4 w-4" aria-hidden="true" />
                  Liên hệ hỗ trợ
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
