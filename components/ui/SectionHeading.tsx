import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";

type Tone = "light" | "dark";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  id?: string;
  tone?: Tone;
  /** Accent colour for the eyebrow dot + label, e.g. "text-brand-700". */
  accentClassName?: string;
  align?: "left" | "center";
  className?: string;
  children?: ReactNode;
};

const toneStyles: Record<Tone, { title: string; description: string }> = {
  light: { title: "text-slate-950", description: "text-slate-600" },
  dark: { title: "text-white", description: "text-slate-300" },
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  id,
  tone = "light",
  accentClassName = "text-brand-700",
  align = "left",
  className = "",
  children,
}: SectionHeadingProps) {
  const styles = toneStyles[tone];
  const alignment = align === "center" ? "mx-auto max-w-3xl text-center items-center" : "max-w-3xl";

  return (
    <div className={`flex flex-col ${alignment} ${className}`}>
      <Reveal>
        <span className={`eyebrow ${accentClassName}`}>
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />
          {eyebrow}
        </span>
      </Reveal>

      <Reveal delay={70}>
        <h2
          id={id}
          className={`mt-4 text-[2rem] font-extrabold leading-[1.12] sm:text-4xl lg:text-[2.75rem] ${styles.title}`}
        >
          {title}
        </h2>
      </Reveal>

      {description ? (
        <Reveal delay={140}>
          <p className={`mt-5 text-base leading-7 sm:text-[1.0625rem] sm:leading-8 ${styles.description}`}>
            {description}
          </p>
        </Reveal>
      ) : null}

      {children}
    </div>
  );
}
