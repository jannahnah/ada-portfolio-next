"use client";

import { SectionHeading } from "./SectionHeading";
import { StaggerGroup, StaggerItem } from "./Motion";
import { whyHireMe } from "jannah/lib/data";
import { Check } from "lucide-react";

export function WhyHireMe() {
  return (
    <section className="relative overflow-hidden bg-navy py-16 sm:py-24 text-white dark:bg-navy-900">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3">
            <span className="eyebrow text-xs font-semibold text-emerald-400">
              07
            </span>
            <span className="h-px w-8 bg-emerald-400/50" />
            <span className="eyebrow text-xs font-semibold uppercase text-white/60">
              Why Hire Me
            </span>
          </div>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            The qualities behind reliable support.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70">
            These aren&apos;t buzzwords — they&apos;re how I show up to the work
            every day.
          </p>
        </div>

        <StaggerGroup className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {whyHireMe.map((item) => (
            <StaggerItem key={item}>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition hover:border-emerald-400/40 hover:bg-white/10">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-emerald-500 text-white">
                  <Check className="h-4 w-4" />
                </span>
                <span className="text-sm font-semibold">{item}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
