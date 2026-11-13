import { ArrowUpRight } from "lucide-react";
import { recognition } from "@/data/recognition";

const groups = ["Record", "Vendor Hall of Fame", "Bounty platform"] as const;

export default function Recognition() {
  return (
    <section id="recognition" className="border-t border-line py-28 md:py-36">
      <div className="wrap grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="text-4xl font-semibold md:text-6xl">Recognised for security research</h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-dim">
            Vulnerabilities I have reported through responsible disclosure, and the programs where I hunt.
          </p>
        </div>

        <div className="space-y-14">
          {groups.map((g) => (
            <div key={g}>
              <h3 className="text-sm font-medium text-dim">{g}</h3>
              <ul className="mt-4 border-t border-line">
                {recognition
                  .filter((r) => r.group === g)
                  .map((r) => {
                    const inner = (
                      <>
                        <span className="min-w-0 md:max-w-md">
                          <span className="block font-display text-2xl font-semibold tracking-tight transition-transform duration-300 group-hover:translate-x-1.5 md:text-3xl">
                            {r.name}
                          </span>
                          {r.note && <span className="mt-2 block text-[15px] leading-relaxed text-dim">{r.note}</span>}
                        </span>
                        <span className="flex items-center gap-2 text-sm text-dim">
                          {r.handle && <span className="font-mono">@{r.handle}</span>}
                          {r.detail}
                          {r.href && (
                            <ArrowUpRight
                              className="size-5 transition-colors group-hover:text-signal"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </>
                    );
                    const row =
                      "group flex min-h-16 flex-wrap items-center justify-between gap-x-6 gap-y-1 border-b border-line py-6 transition-colors hover:bg-panel/60";
                    return (
                      <li key={r.name}>
                        {r.href ? (
                          <a href={r.href} target="_blank" rel="noopener noreferrer" className={row}>
                            {inner}
                          </a>
                        ) : (
                          <div className={row}>{inner}</div>
                        )}
                      </li>
                    );
                  })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
