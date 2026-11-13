import { projects } from "@/data/projects";

const arsenal = projects.filter((p) => p.category === "Arsenal");

export default function Arsenal() {
  const row = (hidden: boolean) =>
    arsenal.map((p) => (
      <li key={p.name + hidden} aria-hidden={hidden || undefined}>
        <a
          href={p.href}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={hidden ? -1 : undefined}
          className="whitespace-nowrap font-display text-3xl font-semibold tracking-tight text-dim transition-colors hover:text-signal md:text-5xl"
        >
          {p.name}
        </a>
      </li>
    ));

  return (
    <section aria-label="The Arsenal series" className="border-t border-line py-16">
      <div className="marquee overflow-hidden">
        <ul className="marquee-track flex w-max items-center gap-12 pr-12 md:gap-16 md:pr-16">
          {row(false)}
          {row(true)}
        </ul>
      </div>
    </section>
  );
}
