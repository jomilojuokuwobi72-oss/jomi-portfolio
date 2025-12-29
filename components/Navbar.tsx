"use client";

import { useState } from "react";
import LiveClock from "@/components/LiveClock";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-[rgb(var(--border))] bg-[rgb(var(--bg))]/70 backdrop-blur">
      {/* Make navbar wide on big screens */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* 3-column grid forces true centering */}
        <div className="h-14 grid grid-cols-[auto_1fr_auto] items-center">
          {/* LEFT: JOMI / Austin, TX • time */}
          <div className="flex items-center gap-2 text-sm font-mono text-[rgb(var(--muted))] whitespace-nowrap">
            <span className="text-[rgb(var(--fg))] font-semibold">JOMI</span>
            <span className="opacity-40">/</span>
            <LiveClock />
          </div>

          {/* CENTER: nav links (desktop) */}
          <nav className="hidden md:flex justify-center items-center gap-8 lg:gap-10 text-sm">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[rgb(var(--muted))] hover:text-[rgb(var(--fg))] transition"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* RIGHT: toggle + mobile menu */}
          <div className="flex items-center gap-2 justify-end">
            <ThemeToggle />

            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden h-9 w-9 rounded-full ring-1 ring-[rgb(var(--border))] bg-[rgb(var(--card))] grid place-items-center hover:opacity-90 transition"
              aria-label="Open menu"
            >
              <span className="font-mono text-sm">{open ? "×" : "≡"}</span>
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <div className="md:hidden pb-4">
            <div className="rounded-2xl bg-[rgb(var(--card))] ring-1 ring-[rgb(var(--border))] p-2">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-2 text-sm text-[rgb(var(--muted))] hover:text-[rgb(var(--fg))] hover:bg-[rgb(var(--chip))] transition"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
