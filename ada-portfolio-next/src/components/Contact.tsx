"use client";

import { motion } from "framer-motion";
import { Reveal } from "./Motion";
import { profile } from "jannah/lib/data";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  MapPin,
  Download,
  ArrowUpRight,
} from "lucide-react";

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect with me",
    href: profile.linkedin,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "View profile",
    href: profile.github,
  },
  {
    icon: MapPin,
    label: "Location",
    value: profile.location,
    href: undefined,
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative bg-[var(--bg-alt)] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-[var(--line)] bg-[var(--surface)] p-8 shadow-lift sm:p-12">
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-emerald-500/10 blur-2xl" />

            <div className="relative grid gap-10 lg:grid-cols-[1fr_1fr]">
              <div>
                <div className="flex items-center gap-3">
                  <span className="eyebrow text-xs font-semibold text-emerald-500">
                    09
                  </span>
                  <span className="h-px w-8 bg-emerald-500/40" />
                  <span className="eyebrow text-xs font-semibold uppercase text-[var(--ink-soft)]">
                    Contact
                  </span>
                </div>
                <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-[var(--ink)] sm:text-4xl">
                  Let&apos;s keep your work organized.
                </h2>
                <p className="mt-4 max-w-md text-base leading-relaxed text-[var(--ink-soft)]">
                  Looking for dependable administrative or virtual assistance?
                  I&apos;d love to hear what you need. The fastest way to reach
                  me is email.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={`mailto:${profile.email}`}
                    className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift dark:bg-emerald-500 dark:hover:bg-emerald-600"
                  >
                    <Mail className="h-4 w-4" />
                    Email Me
                  </a>
                  <a
                    href={profile.resume}
                    download
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface)] px-5 py-3 text-sm font-semibold text-[var(--ink)] shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift"
                  >
                    <Download className="h-4 w-4" />
                    Download Resume
                  </a>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {channels.map((c) => {
                  const inner = (
                    <motion.div
                      whileHover={{ x: c.href ? 4 : 0 }}
                      className="flex items-center gap-4 rounded-2xl border border-[var(--line)] bg-[var(--bg-alt)] px-4 py-3.5"
                    >
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                        <c.icon className="h-5 w-5" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="text-xs font-semibold uppercase tracking-wide text-[var(--ink-soft)]">
                          {c.label}
                        </div>
                        <div className="truncate text-sm font-medium text-[var(--ink)]">
                          {c.value}
                        </div>
                      </div>
                      {c.href && (
                        <ArrowUpRight className="h-4 w-4 shrink-0 text-[var(--ink-soft)]" />
                      )}
                    </motion.div>
                  );
                  return c.href ? (
                    <a
                      key={c.label}
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div key={c.label}>{inner}</div>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
