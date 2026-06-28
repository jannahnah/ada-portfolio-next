"use client";

import { Reveal } from "./Motion";
import { SectionHeading } from "./SectionHeading";
import { Quote } from "lucide-react";

export function About() {
  return (
    <section id="about" className="relative py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading
          index="01"
          eyebrow="About"
          title="Calm support that keeps everything moving."
        />

        <Reveal delay={0.1}>
          <div className="space-y-5 text-base leading-relaxed text-[var(--ink-soft)]">
            <p>
              I&apos;m an administrative professional and Information Technology
              student who has spent the last several years keeping a busy
              university office organized, responsive, and audit-ready. As a
              Student Assistant at Father Saturnino Urios University, I handle
              documents, records, scheduling, and communication across
              departments — often during high-pressure enrollment periods where
              accuracy and discretion matter most.
            </p>
            <p>
              I&apos;m the person who notices the detail before it becomes a
              problem: the email that needs a reply, the file that&apos;s in the
              wrong folder, the meeting that should have been confirmed. I work
              fluently across Microsoft Office and Google Workspace, learn new
              tools quickly, and treat confidentiality as non-negotiable.
            </p>
            <p>
              My goal is to support executives and teams as an{" "}
              <span className="font-semibold text-[var(--ink)]">
                Executive Assistant or Virtual Assistant
              </span>{" "}
              — bringing structure, reliable follow-through, and a steady hand to
              the work that keeps an organization running.
            </p>

            <div className="mt-6 flex gap-3 rounded-2xl border border-[var(--line)] bg-[var(--bg-alt)] p-5">
              <Quote className="h-5 w-5 shrink-0 text-emerald-500" />
              <p className="text-sm italic text-[var(--ink)]">
                I believe great administrative work is invisible — you only
                notice it when it&apos;s missing. My job is to make sure
                it&apos;s never missing.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
