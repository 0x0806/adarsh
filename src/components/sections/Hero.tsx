import Image from "next/image";
import { ArrowRight, Github, Linkedin, Twitter, Instagram, MapPin } from "lucide-react";
import DecryptedText from "@/components/fx/DecryptedText";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

const icons = { GitHub: Github, LinkedIn: Linkedin, X: Twitter, Instagram } as const;

const counts = Object.entries(
  projects.reduce<Record<string, number>>((a, p) => ((a[p.category] = (a[p.category] ?? 0) + 1), a), {})
);

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-svh items-center overflow-hidden pt-24 pb-16">
      <div aria-hidden="true" className="grid-bg pointer-events-none absolute inset-0" />
      <div className="wrap relative grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="enter inline-flex items-center gap-2 rounded-full border border-line bg-panel px-3.5 py-1.5 text-sm text-dim" style={{ "--i": 0 } as React.CSSProperties}>
            <span className="size-2 rounded-full bg-emerald-400" aria-hidden="true" />
            Open to security engagements
          </p>

          <h1
            className="enter mt-7 text-[clamp(2.75rem,7vw,5.5rem)] leading-[0.98] font-semibold"
            style={{ "--i": 1 } as React.CSSProperties}
          >
            I find the weak points before{" "}
            <span className="text-signal">
              <DecryptedText text="attackers do." />
            </span>
          </h1>

          <p className="enter mt-7 max-w-xl text-lg leading-relaxed text-dim" style={{ "--i": 2 } as React.CSSProperties}>
            {site.name} is a {site.role.toLowerCase()} doing penetration testing, vulnerability research and
            security consulting, and building open-source tools for the rest of the field.
          </p>

          <p className="enter mt-6 max-w-xl text-[15px] leading-relaxed" style={{ "--i": 2 } as React.CSSProperties}>
            <a href="#recognition" className="font-semibold underline decoration-signal decoration-2 underline-offset-4 transition-colors hover:text-signal">
              India Book of Records achiever
            </a>
            <span className="text-dim"> for finding 119 critical web vulnerabilities in 3 hours.</span>
          </p>

          <div className="enter mt-9 flex flex-wrap gap-3" style={{ "--i": 3 } as React.CSSProperties}>
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-signal px-6 py-3.5 font-semibold text-signal-ink transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              See the projects
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-line px-6 py-3.5 font-semibold transition-colors hover:border-dim hover:bg-panel"
            >
              Send a message
            </a>
          </div>

          <ul className="enter mt-10 flex gap-2" aria-label="Profiles" style={{ "--i": 4 } as React.CSSProperties}>
            {site.socials.map((s) => {
              const Icon = icons[s.label as keyof typeof icons];
              return (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="grid size-11 place-items-center rounded-full border border-line text-dim transition-colors hover:border-dim hover:text-bone"
                  >
                    <Icon className="size-5" aria-hidden="true" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="enter" style={{ "--i": 3 } as React.CSSProperties}>
          <div className="overflow-hidden rounded-2xl border border-line bg-panel shadow-[0_30px_60px_-30px_rgb(0_0_0/0.8)]">
            <div className="flex items-center gap-4 border-b border-line p-5">
              <Image
                src={site.avatar}
                alt="Portrait of Adarsh S"
                width={64}
                height={64}
                priority
                unoptimized
                className="size-16 rounded-full border border-line object-cover"
              />
              <div>
                <p className="font-display text-xl font-semibold">{site.name}</p>
                <p className="mt-0.5 flex items-center gap-1.5 text-sm text-dim">
                  <MapPin className="size-3.5" aria-hidden="true" /> {site.location}
                </p>
              </div>
            </div>
            <div className="p-5 font-mono text-[13px] leading-7">
              <p className="text-dim">
                <span className="text-signal">$</span> ls ~/projects --by-category
              </p>
              <ul className="mt-2">
                {counts.map(([cat, n]) => (
                  <li key={cat} className="flex items-baseline justify-between border-b border-dashed border-line py-1 last:border-0">
                    <span>{cat}</span>
                    <span className="text-dim tabular-nums">{n}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-dim">
                <span className="text-signal">$</span> <span className="caret inline-block h-4 w-2 translate-y-0.5 bg-bone" aria-hidden="true" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
