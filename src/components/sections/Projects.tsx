"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import Spotlight from "@/components/fx/Spotlight";
import { projects } from "@/data/projects";

const PAGE = 12;
const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

export default function Projects() {
  const [cat, setCat] = useState("All");
  const [all, setAll] = useState(false);

  const filtered = useMemo(() => projects.filter((p) => cat === "All" || p.category === cat), [cat]);
  const shown = all || cat !== "All" ? filtered : filtered.slice(0, PAGE);

  return (
    <section id="projects" className="border-t border-line py-28 md:py-36">
      <div className="wrap">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <h2 className="text-4xl font-semibold md:text-6xl">Open-source security work</h2>
            <p className="mt-5 max-w-xl text-lg text-dim">
              {projects.length} repositories of tools, arsenals and training labs, all on GitHub.
            </p>
          </div>
          <a
            href="https://github.com/0x0806"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-line px-5 py-3 font-semibold transition-colors hover:border-dim hover:bg-panel"
          >
            <Github className="size-5" aria-hidden="true" /> All on GitHub
          </a>
        </div>

        <div role="group" aria-label="Filter projects by category" className="mt-10 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={cat === c}
              onClick={() => setCat(c)}
              className={`min-h-11 rounded-full border px-4 text-sm font-medium transition-colors ${
                cat === c
                  ? "border-bone bg-bone text-ink"
                  : "border-line text-dim hover:border-dim hover:text-bone"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" data-testid="project-grid">
          {shown.map((p) => (
            <li key={p.name} className="contents">
              <Spotlight
                as="a"
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${p.name}${p.fork ? " (fork)" : ""}, open on GitHub`}
                className="group flex min-h-56 flex-col rounded-2xl border border-line bg-panel p-6 transition-[transform,border-color] duration-200 hover:-translate-y-0.5 hover:border-[#3a3f47]"
              >
                <span className="flex items-start justify-between gap-4">
                  <span className="text-xs text-dim">
                    {p.category}
                    {p.fork ? " · Fork" : ""}
                  </span>
                  <ArrowUpRight
                    className="size-5 shrink-0 text-dim transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-signal"
                    aria-hidden="true"
                  />
                </span>
                <span className="mt-6 font-display text-2xl font-semibold tracking-tight break-words">{p.name}</span>
                <span className="mt-2 line-clamp-3 text-[15px] leading-relaxed text-dim">{p.description}</span>
                <span className="mt-auto flex flex-wrap gap-1.5 pt-5">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-md bg-panel-2 px-2 py-1 font-mono text-[11px] text-dim">
                      {t}
                    </span>
                  ))}
                </span>
              </Spotlight>
            </li>
          ))}
        </ul>

        {cat === "All" && filtered.length > PAGE && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              aria-expanded={all}
              onClick={() => setAll((v) => !v)}
              className="min-h-11 rounded-full bg-bone px-7 font-semibold text-ink transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              {all ? "Show fewer" : `Show all ${filtered.length} projects`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
