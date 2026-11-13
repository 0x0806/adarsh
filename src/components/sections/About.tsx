import { site } from "@/data/site";

export default function About() {
  return (
    <section id="about" className="border-t border-line py-28 md:py-36">
      <div className="wrap grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="text-4xl font-semibold md:text-6xl">What I do for teams</h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-dim">
            I protect digital assets, run security research, and build the tools that help organisations stay
            secure.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex rounded-full border border-line px-6 py-3 font-semibold transition-colors hover:border-dim hover:bg-panel"
          >
            Discuss an assessment
          </a>
        </div>

        <ul className="border-t border-line">
          {site.services.map((s) => (
            <li key={s.title} className="group border-b border-line py-9 transition-colors hover:bg-panel/60 md:px-4 md:-mx-4">
              <h3 className="text-2xl font-semibold transition-transform duration-300 group-hover:translate-x-1.5 md:text-3xl">
                {s.title}
              </h3>
              <p className="mt-3 max-w-xl leading-relaxed text-dim">{s.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
