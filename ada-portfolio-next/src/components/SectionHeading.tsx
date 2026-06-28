"use client";

import { Reveal } from "./Motion";

export function SectionHeading({
  index,
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  index: string;
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal
      className={
        align === "center"
          ? "mx-auto max-w-2xl text-center"
          : "max-w-2xl"
      }
    >
      <div
        className={`flex items-center gap-3 ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <span className="eyebrow text-xs font-semibold text-emerald-500">
          {index}
        </span>
        <span className="h-px w-8 bg-emerald-500/40" />
        <span className="eyebrow text-xs font-semibold uppercase text-[var(--ink-soft)]">
          {eyebrow}
        </span>
      </div>
      <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-[var(--ink)] sm:text-4xl">
        {title}
      </h2>
      {intro && (
        <p className="mt-4 text-base leading-relaxed text-[var(--ink-soft)]">
          {intro}
        </p>
      )}
    </Reveal>
  );
}
