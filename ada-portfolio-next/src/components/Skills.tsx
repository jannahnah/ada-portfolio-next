"use client";

import { SectionHeading } from "./SectionHeading";
import { StaggerGroup, StaggerItem, Reveal } from "./Motion";
import { skillGroups } from "jannah/lib/data";

export function Skills() {
  return (
    <section id="skills" className="relative bg-[var(--bg-alt)] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          index="04"
          eyebrow="Skills"
          title="A toolkit built for order."
          intro="Grouped by how I actually use them day to day."
        />

        <div className=" mt-10 grid sm:mt-14 gap-6 lg:grid-cols-3">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.label} delay={gi * 0.08}>
              <div className="h-full rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-7 shadow-soft">
                <div className="flex items-center gap-2.5">
                  <span className="grid h-7 w-7 place-items-center rounded-lg bg-navy text-xs font-bold text-white dark:bg-emerald-500">
                    {gi + 1}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-[var(--ink)]">
                    {group.label}
                  </h3>
                </div>
                <StaggerGroup className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <StaggerItem key={item}>
                      <span className="inline-flex rounded-full border border-[var(--line)] bg-[var(--bg-alt)] px-3 py-1.5 text-xs font-medium text-[var(--ink-soft)] transition hover:border-emerald-500/40 hover:text-[var(--ink)]">
                        {item}
                      </span>
                    </StaggerItem>
                  ))}
                </StaggerGroup>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
