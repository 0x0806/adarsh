"use client";

import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { site } from "@/data/site";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

const field =
  "mt-2 w-full rounded-lg border bg-ink px-4 py-3 text-base text-bone outline-none transition-colors placeholder:text-[#6f716c] focus:border-signal";

export default function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const name = String(d.get("name") ?? "").trim();
    const email = String(d.get("email") ?? "").trim();
    const message = String(d.get("message") ?? "").trim();
    const next: Errors = {};
    if (!name) next.name = "Enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Enter a valid email address.";
    if (message.length < 10) next.message = "Describe your project in at least 10 characters.";
    setErrors(next);
    setSent(false);
    const firstBad = (["name", "email", "message"] as const).find((k) => next[k]);
    if (firstBad) {
      (e.currentTarget.elements.namedItem(firstBad) as HTMLElement | null)?.focus();
      return;
    }
    const subject = encodeURIComponent(`Security enquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n${name}\n${email}`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="border-t border-line py-28 md:py-36">
      <div className="wrap grid gap-16 lg:grid-cols-2 lg:gap-24">
        <div>
          <h2 className="text-4xl font-semibold md:text-6xl">Have something to test?</h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-dim">
            Tell me what you run and what worries you. I reply with scope, approach and timing.
          </p>
          <ul className="mt-10 space-y-6">
            <li className="flex items-center gap-4">
              <span className="grid size-11 place-items-center rounded-full border border-line"><Mail className="size-5" aria-hidden="true" /></span>
              <a href={`mailto:${site.email}`} className="text-lg font-medium underline decoration-line underline-offset-4 transition-colors hover:decoration-signal">
                {site.email}
              </a>
            </li>
            <li className="flex items-center gap-4">
              <span className="grid size-11 place-items-center rounded-full border border-line"><MapPin className="size-5" aria-hidden="true" /></span>
              <span className="text-lg font-medium">{site.location}</span>
            </li>
          </ul>
        </div>

        <form onSubmit={onSubmit} noValidate className="rounded-2xl border border-line bg-panel p-6 md:p-8" aria-label="Contact form">
          {(
            [
              ["name", "Your name", "text", "name"],
              ["email", "Email address", "email", "email"],
            ] as const
          ).map(([id, label, type, ac]) => (
            <div key={id} className="mb-6">
              <label htmlFor={id} className="text-sm font-medium">{label}</label>
              <input
                id={id} name={id} type={type} autoComplete={ac}
                aria-invalid={!!errors[id]} aria-describedby={errors[id] ? `${id}-err` : undefined}
                className={`${field} ${errors[id] ? "border-red-400" : "border-line"}`}
              />
              {errors[id] && <p id={`${id}-err`} className="mt-2 text-sm text-red-300">{errors[id]}</p>}
            </div>
          ))}
          <div className="mb-8">
            <label htmlFor="message" className="text-sm font-medium">What should I look at?</label>
            <textarea
              id="message" name="message" rows={5}
              aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-err" : undefined}
              className={`${field} resize-y ${errors.message ? "border-red-400" : "border-line"}`}
            />
            {errors.message && <p id="message-err" className="mt-2 text-sm text-red-300">{errors.message}</p>}
          </div>
          <button
            type="submit"
            className="group flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-signal font-semibold text-signal-ink transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0"
          >
            Open in my email app
            <Send className="size-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </button>
          <p role="status" className="mt-4 min-h-6 text-sm text-dim">
            {sent ? `Your email app should open with the message addressed to ${site.email}. If it did not, write to that address directly.` : ""}
          </p>
        </form>
      </div>
    </section>
  );
}
