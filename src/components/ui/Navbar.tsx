"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { name: "About", id: "about" },
  { name: "Client work", id: "works" },
  { name: "Recognition", id: "recognition" },
  { name: "Open source", id: "projects" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const els = links.map((l) => document.getElementById(l.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open ? "border-line bg-ink/85 backdrop-blur-md" : "border-transparent"
      }`}
    >
      <nav aria-label="Primary" className="wrap flex h-16 items-center justify-between">
        <a href="#top" className="font-display text-lg font-semibold tracking-tight">
          Adarsh S<span className="text-signal">.</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                aria-current={active === l.id ? "true" : undefined}
                className={`rounded-md px-3 py-2 text-sm transition-colors hover:text-bone ${
                  active === l.id ? "text-bone" : "text-dim"
                }`}
              >
                {l.name}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden items-center gap-1.5 rounded-full bg-bone px-4 py-2 text-sm font-semibold text-ink transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0 md:inline-flex"
        >
          Get in touch <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="grid size-11 place-items-center rounded-md text-bone md:hidden"
        >
          {open ? <X className="size-6" aria-hidden="true" /> : <Menu className="size-6" aria-hidden="true" />}
        </button>
      </nav>

      <div id="mobile-menu" hidden={!open} className="fixed inset-x-0 top-16 bottom-0 bg-ink md:hidden">
        <ul className="wrap flex flex-col pt-6">
          {links.map((l) => (
            <li key={l.id} className="border-b border-line">
              <a
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className="block py-5 font-display text-3xl font-semibold tracking-tight"
              >
                {l.name}
              </a>
            </li>
          ))}
          <li className="pt-8">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-signal py-4 font-semibold text-signal-ink"
            >
              Get in touch <ArrowUpRight className="size-5" aria-hidden="true" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
