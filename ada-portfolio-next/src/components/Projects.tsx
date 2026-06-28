"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { StaggerGroup, StaggerItem } from "./Motion";
import { projects } from "jannah/lib/data";
import { ArrowUpRight } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="relative bg-[var(--bg-alt)] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          index="06"
          eyebrow="Featured Work"
          title="Quiet wins that made offices run better."
          intro="Not code — outcomes. Each of these made daily work measurably smoother."
        />

        <StaggerGroup className=" mt-10 grid sm:mt-14 gap-5 md:grid-cols-3">
          {projects.map((p, i) => (
            <StaggerItem key={p.title}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="group flex h-full flex-col rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-7 shadow-soft transition hover:shadow-lift"
              >
                <div className="flex items-center justify-between">
                  <span className="eyebrow text-xs font-bold text-emerald-500">
                    0{i + 1}
                  </span>
                  <span className="rounded-full bg-navy/5 px-3 py-1 text-xs font-semibold text-[var(--ink-soft)] dark:bg-white/5">
                    {p.tag}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold leading-snug text-[var(--ink)]">
                  {p.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--ink-soft)]">
                  {p.desc}
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-[var(--line)] pt-4">
                  <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                    {p.metric}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-[var(--ink-soft)] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-emerald-500" />
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
