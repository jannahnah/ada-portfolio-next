"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { StaggerGroup, StaggerItem } from "./Motion";
import { projects } from "jannah/lib/data";
import { ArrowUpRight, Github } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="relative bg-[var(--bg-alt)] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          index="06"
          eyebrow="Featured Projects"
          title="Learning by building and improving."
          intro="Selected academic and personal work that demonstrates practical problem-solving, development, and project collaboration."
        />

        <StaggerGroup className="mt-10 grid gap-5 sm:mt-14 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <StaggerItem key={p.title}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="group flex h-full flex-col rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-7 shadow-soft transition hover:shadow-lift"
              >
                <div className="flex items-center justify-between gap-3">
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
                <div className="mt-6 flex items-center justify-between gap-3 border-t border-[var(--line)] pt-4">
                  <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                    {p.metric}
                  </span>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${p.title} on GitHub`}
                    className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-[var(--ink-soft)] transition hover:text-emerald-500"
                  >
                    <Github className="h-4 w-4" />
                    Code
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
