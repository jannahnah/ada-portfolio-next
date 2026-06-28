"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { StaggerGroup, StaggerItem } from "./Motion";
import { services } from "jannah/lib/data";

export function Services() {
  return (
    <section id="services" className="relative bg-[var(--bg-alt)] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          index="02"
          eyebrow="Core Services"
          title="What I take off your plate."
          intro="A focused set of services built around keeping people, documents, and schedules in order."
          align="center"
        />

        <StaggerGroup className=" mt-10 grid sm:mt-14 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <StaggerItem key={s.title}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="group h-full rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-7 shadow-soft transition hover:shadow-lift"
              >
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-500/10 text-emerald-600 transition group-hover:bg-emerald-500 group-hover:text-white dark:text-emerald-400">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-[var(--ink)]">
                  {s.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[var(--ink-soft)]">
                  {s.desc}
                </p>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
