"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download, ArrowUpRight, CheckCircle2, MapPin } from "lucide-react";
import { profile, heroChips, stats } from "jannah/lib/data";
import { Counter } from "./Counter";

const ease = [0.22, 1, 0.36, 1] as const;

const floatCards = [
  { label: "Calendar Management", top: "6%", left: "-6%", delay: 0 },
  { label: "Email Management", top: "30%", right: "-10%", delay: 0.6 },
  { label: "Documentation", bottom: "20%", left: "-9%", delay: 1.1 },
  { label: "Data Entry", bottom: "-2%", right: "4%", delay: 0.3 },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-20 lg:pb-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute right-0 top-40 h-[28rem] w-[28rem] rounded-full bg-navy/10 blur-3xl dark:bg-navy/40" />
        <div className="absolute inset-0 grain opacity-60" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 sm:gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for remote &amp; on-site roles
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.08 }}
            className="mt-6 font-display text-[2.1rem] font-semibold leading-[1.08] tracking-tight text-[var(--ink)] sm:text-5xl lg:text-6xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.16 }}
            className="mt-4 text-lg font-medium text-emerald-600 dark:text-emerald-400"
          >
            {profile.headline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.24 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-[var(--ink-soft)]"
          >
            {profile.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.32 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
          >
           <a 
              href={profile.resume}
              download
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift dark:bg-emerald-500 dark:hover:bg-emerald-600"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface)] px-5 py-3 text-sm font-semibold text-[var(--ink)] shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift"
            >
              Contact Me
              <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-12 flex items-center gap-2 text-sm text-[var(--ink-soft)]"
          >
            <MapPin className="h-4 w-4 text-emerald-500" />
            {profile.location}
          </motion.div>

          <div className="mt-6 grid max-w-md grid-cols-3 gap-3 sm:gap-4">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-2xl font-semibold text-[var(--ink)] sm:text-3xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-1 text-[0.7rem] leading-snug text-[var(--ink-soft)] sm:text-xs">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease, delay: 0.2 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-[var(--line)] bg-gradient-to-br from-beige to-mist shadow-lift dark:from-navy-700 dark:to-navy-900">
            <Image
              src="/portrait.jpg"
              alt="Jannah Loraine L. Ada"
              fill
              priority
              className="object-cover object-top scale-90"
              sizes="(max-width: 768px) 90vw, 400px"
            />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 rounded-xl glass px-3 py-2 text-xs font-semibold text-[var(--ink)] shadow-soft">
              Executive Assistant
            </div>
          </div>

          {floatCards.map((c, i) => (
            <motion.div
              key={c.label}
              className="absolute z-10 hidden items-center gap-2 rounded-2xl glass px-3.5 py-2.5 text-xs font-semibold text-[var(--ink)] shadow-lift sm:flex"
              style={{
                top: c.top,
                bottom: c.bottom,
                left: c.left,
                right: c.right,
              }}
              initial={{ opacity: 0, y: 12 }}
              animate={{
                opacity: 1,
                y: [0, -10, 0],
              }}
              transition={{
                opacity: { duration: 0.5, delay: 0.6 + i * 0.12 },
                y: {
                  duration: 5 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: c.delay,
                },
              }}
            >
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              {c.label}
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl px-5 sm:mt-16">
        <div className="flex flex-wrap items-center gap-2.5">
          {heroChips.map((chip) => (
            <span
              key={chip}
              className="inline-flex items-center gap-1.5 rounded-full border border-[var(--line)] bg-[var(--surface)] px-3.5 py-2 text-xs font-medium text-[var(--ink-soft)] shadow-soft"
            >
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
              {chip}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function PortraitPlaceholder() {
  return (
    <div className="absolute inset-0 grid place-items-center">
      <svg
        viewBox="0 0 200 250"
        className="h-full w-full text-navy/15 dark:text-emerald-500/15"
        aria-hidden="true"
      >
        <rect width="200" height="250" fill="currentColor" opacity="0.18" />
        <circle cx="100" cy="92" r="42" fill="currentColor" />
        <path d="M28 250c0-44 32-74 72-74s72 30 72 74" fill="currentColor" />
      </svg>
      <span className="absolute bottom-16 text-center text-xs font-medium text-[var(--ink-soft)]">
        Add portrait.jpg to /public
      </span>
    </div>
  );
}