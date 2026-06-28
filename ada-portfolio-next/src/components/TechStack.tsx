"use client";

import { Reveal } from "./Motion";
import { techStack } from "jannah/lib/data";
import {
  FileSpreadsheet,
  Chrome,
  Palette,
  Calendar,
  HardDrive,
  Video,
  NotebookPen,
  Trello,
  MessagesSquare,
  Hash,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  "Microsoft Office": FileSpreadsheet,
  "Google Workspace": Chrome,
  Canva: Palette,
  "Google Calendar": Calendar,
  "Google Drive": HardDrive,
  Zoom: Video,
  Notion: NotebookPen,
  Trello: Trello,
  Slack: MessagesSquare,
  Discord: Hash,
};

export function TechStack() {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="text-center">
          <span className="eyebrow text-xs font-semibold uppercase text-[var(--ink-soft)]">
            Tools I work in every day
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {techStack.map((t) => {
              const Icon = iconMap[t] ?? FileSpreadsheet;
              return (
                <div
                  key={t}
                  className="group flex items-center gap-3 rounded-2xl border border-[var(--line)] bg-[var(--surface)] px-4 py-3.5 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-emerald-500/10 text-emerald-600 transition group-hover:bg-emerald-500 group-hover:text-white dark:text-emerald-400">
                    <Icon className="h-[18px] w-[18px]" />
                  </span>
                  <span className="text-sm font-medium text-[var(--ink)]">
                    {t}
                  </span>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
