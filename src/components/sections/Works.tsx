import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { works } from "@/data/works";

export default function Works() {
  return (
    <section id="works" className="border-t border-line py-28 md:py-36">
      <div className="wrap">
        <h2 className="max-w-3xl text-4xl font-semibold md:text-6xl">Sites I have built for businesses</h2>
        <p className="mt-5 max-w-xl text-lg text-dim">
          Live client websites, designed and shipped end to end. Each one is open to visit.
        </p>

        <ul className="mt-14 grid gap-6 lg:grid-cols-3" data-testid="works-grid">
          {works.map((w) => (
            <li key={w.name} className="flex flex-col overflow-hidden rounded-2xl border border-line bg-panel">
              <a
                href={w.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${w.name}, visit ${w.host}`}
                className="group block overflow-hidden"
              >
                <Image
                  src={w.image}
                  alt={w.imageAlt}
                  width={1200}
                  height={630}
                  sizes="(min-width: 1024px) 400px, 100vw"
                  className="aspect-[1200/630] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
              </a>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs text-dim">
                  {w.kind} · {w.place}
                </p>
                <h3 className="mt-3 text-2xl font-semibold">{w.name}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-dim">{w.summary}</p>
                <div className="mt-auto pt-6">
                  <a
                    href={w.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center gap-1.5 font-semibold underline decoration-signal decoration-2 underline-offset-4 transition-colors hover:text-signal"
                  >
                    {w.host} <ArrowUpRight className="size-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
