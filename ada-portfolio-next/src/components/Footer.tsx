"use client";

import { profile } from "jannah/lib/data";
import { Mail, Linkedin, Github, ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--bg)] py-12">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row sm:items-end">
          <div className="text-center sm:text-left">
            <div className="flex items-center justify-center gap-2.5 sm:justify-start">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-navy text-sm font-semibold text-beige dark:bg-emerald-500">
                JA
              </span>
              <span className="font-display text-base font-semibold text-[var(--ink)]">
                Jannah Loraine L. Ada
              </span>
            </div>
            <p className="mt-3 max-w-sm font-display text-lg italic text-[var(--ink-soft)]">
              &ldquo;Helping businesses stay organized, one task at a time.&rdquo;
            </p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="grid h-10 w-10 place-items-center rounded-full border border-[var(--line)] bg-[var(--surface)] text-[var(--ink-soft)] transition hover:text-emerald-500 hover:shadow-soft"
            >
              <Mail className="h-[18px] w-[18px]" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="grid h-10 w-10 place-items-center rounded-full border border-[var(--line)] bg-[var(--surface)] text-[var(--ink-soft)] transition hover:text-emerald-500 hover:shadow-soft"
            >
              <Linkedin className="h-[18px] w-[18px]" />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="grid h-10 w-10 place-items-center rounded-full border border-[var(--line)] bg-[var(--surface)] text-[var(--ink-soft)] transition hover:text-emerald-500 hover:shadow-soft"
            >
              <Github className="h-[18px] w-[18px]" />
            </a>
            <a
              href="#top"
              aria-label="Back to top"
              className="grid h-10 w-10 place-items-center rounded-full bg-navy text-white transition hover:-translate-y-0.5 dark:bg-emerald-500"
            >
              <ArrowUp className="h-[18px] w-[18px]" />
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-[var(--line)] pt-6 text-xs text-[var(--ink-soft)] sm:flex-row">
          <p>
            © {new Date().getFullYear()} Jannah Loraine L. Ada. All rights
            reserved.
          </p>
          <p>Executive Assistant · Virtual Assistant · Butuan City, PH</p>
        </div>
      </div>
    </footer>
  );
}
