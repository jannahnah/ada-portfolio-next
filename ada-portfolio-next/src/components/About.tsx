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
          eyebrow="About Me"
          title="Building practical skills through real work."
        />

        <Reveal delay={0.1}>
          <div className="space-y-5 text-base leading-relaxed text-[var(--ink-soft)]">
            <p>
              I&apos;m a fourth-year Bachelor of Science in Information Technology
              student at Father Saturnino Urios University, expected to graduate
              in 2027. I&apos;m looking for an OJT opportunity where I can apply my
              classroom learning, contribute to a team, and strengthen my skills
              through real-world IT work.
            </p>
            <p>
              My capstone project, Purple Yam Automated Inventory Management
              System, has given me practical exposure to full-stack web
              development, database-backed workflows, inventory operations,
              reporting, and user acceptance testing. The system is built with
              Next.js, React, Node.js, PostgreSQL, and Prisma.
            </p>
            <p>
              Alongside my studies, I have four years of experience as a Student
              Assistant at the university Dean&apos;s Office. That role has
              strengthened my organization, documentation, communication,
              time-management, and attention-to-detail skills — qualities I bring
              to technical work and collaboration.
            </p>

            <div className="mt-6 flex gap-3 rounded-2xl border border-[var(--line)] bg-[var(--bg-alt)] p-5">
              <Quote className="h-5 w-5 shrink-0 text-emerald-500" />
              <p className="text-sm italic text-[var(--ink)]">
                Padayon — keep learning, keep improving, and keep showing up
                with purpose.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
