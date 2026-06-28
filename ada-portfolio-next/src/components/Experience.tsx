"use client";

import { Reveal } from "./Motion";
import { SectionHeading } from "./SectionHeading";
import { experience } from "jannah/lib/data";
import { Briefcase, CheckCircle2 } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          index="03"
          eyebrow="Professional Experience"
          title="Where I've built the habit."
        />

        <div className="mt-14 space-y-10">
          {experience.map((job) => (
            <Reveal key={job.role}>
              <article className="relative grid gap-6 rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-7 shadow-soft sm:grid-cols-[auto_1fr] sm:p-9">
                <div className="flex sm:flex-col sm:items-start">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-navy text-white dark:bg-emerald-500">
                    <Briefcase className="h-5 w-5" />
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-2xl font-semibold text-[var(--ink)]">
                      {job.role}
                    </h3>
                    <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                      {job.period}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-[var(--ink-soft)]">
                    {job.org} · {job.location}
                  </p>

                  <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                    {job.points.map((p) => (
                      <li
                        key={p}
                        className="flex gap-2.5 text-sm leading-relaxed text-[var(--ink-soft)]"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
