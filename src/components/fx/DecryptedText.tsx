"use client";

import { useEffect, useRef, useState } from "react";

const GLYPHS = "!<>-_\\/[]{}=+*^?#01";

/**
 * Scrambles then resolves text left to right (ReactBits DecryptedText idea).
 * Real text is always in the DOM for screen readers and no-JS; the scramble
 * is aria-hidden and skipped under prefers-reduced-motion.
 */
export default function DecryptedText({ text, delay = 500 }: { text: string; delay?: number }) {
  const [out, setOut] = useState(text);
  const [running, setRunning] = useState(false);
  const raf = useRef(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let start = 0;
    const total = 900;
    const t = window.setTimeout(() => {
      setRunning(true);
      const tick = (now: number) => {
        if (!start) start = now;
        const p = Math.min((now - start) / total, 1);
        const done = Math.floor(p * text.length);
        setOut(
          text
            .split("")
            .map((c, i) => (c === " " || i < done ? c : GLYPHS[Math.floor(Math.random() * GLYPHS.length)]))
            .join("")
        );
        if (p < 1) raf.current = requestAnimationFrame(tick);
        else { setOut(text); setRunning(false); }
      };
      raf.current = requestAnimationFrame(tick);
    }, delay);
    return () => { window.clearTimeout(t); cancelAnimationFrame(raf.current); };
  }, [text, delay]);

  return (
    <>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className={running ? "font-mono" : undefined}>{out}</span>
    </>
  );
}
