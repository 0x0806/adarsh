import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-line py-12">
      <div className="wrap flex flex-col justify-between gap-8 md:flex-row md:items-center">
        <div>
          <p className="font-display text-xl font-semibold">
            {site.name}<span className="text-signal">.</span>
          </p>
          <p className="mt-1 text-sm text-dim">{site.role}. {site.location}.</p>
        </div>
        <ul className="flex flex-wrap gap-x-6 gap-y-1" aria-label="Profiles">
          {site.socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center text-dim underline decoration-transparent underline-offset-4 transition-colors hover:text-bone hover:decoration-signal"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="text-sm text-dim">&copy; {new Date().getFullYear()} {site.name}</p>
      </div>
    </footer>
  );
}
