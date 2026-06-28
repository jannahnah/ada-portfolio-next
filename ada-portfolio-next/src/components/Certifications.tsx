"use client";

import { SectionHeading } from "./SectionHeading";
import { StaggerGroup, StaggerItem } from "./Motion";
import { certifications } from "jannah/lib/data";
import { Award } from "lucide-react";

export function Certifications() {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          index="05"
          eyebrow="Certifications & Training"
          title="Always building the craft."
        />

        <StaggerGroup className=" mt-10 grid sm:mt-14 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((c) => (
            <StaggerItem key={c.title}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 shadow-soft transition hover:shadow-lift">
                <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-emerald-500/8 transition group-hover:scale-150" />
                <div className="relative">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-beige text-navy dark:bg-navy-700 dark:text-emerald-400">
                    <Award className="h-5 w-5" />
                  </div>
                  <span className="mt-5 block text-xs font-semibold uppercase tracking-wide text-emerald-600 dark:text-emerald-400">
                    {c.date}
                  </span>
                  <h3 className="mt-1.5 font-display text-base font-semibold leading-snug text-[var(--ink)]">
                    {c.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-[var(--ink-soft)]">
                    {c.org}
                  </p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
