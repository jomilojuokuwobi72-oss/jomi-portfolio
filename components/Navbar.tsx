// components/Navbar.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import LiveClock from "@/components/LiveClock";
import ThemeToggle from "@/components/ThemeToggle";

type LinkItem = { label: string; href: string };

function smoothScrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <span className="relative block h-4 w-5" aria-hidden="true">
      <span
        className={[
          "absolute left-0 top-0 h-[2px] w-full rounded bg-[rgb(var(--fg))] transition-transform duration-200",
          open ? "translate-y-[7px] rotate-45" : "",
        ].join(" ")}
      />
      <span
        className={[
          "absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 rounded bg-[rgb(var(--fg))] transition-opacity duration-200",
          open ? "opacity-0" : "opacity-100",
        ].join(" ")}
      />
      <span
        className={[
          "absolute left-0 bottom-0 h-[2px] w-full rounded bg-[rgb(var(--fg))] transition-transform duration-200",
          open ? "-translate-y-[7px] -rotate-45" : "",
        ].join(" ")}
      />
    </span>
  );
}

export default function Navbar() {
  const links: LinkItem[] = useMemo(
    () => [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Projects", href: "#projects" },
      { label: "Experience", href: "#experience" },
      { label: "Outside Work", href: "#outside-work" },
      { label: "Contact", href: "#contact" },
    ],
    []
  );

  const [open, setOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setContactOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const handleNavClick = (e: React.MouseEvent, href: string, label: string) => {
    e.preventDefault();
    setOpen(false);

    if (label.toLowerCase() === "contact") {
      setContactOpen(true);
      return;
    }

    if (href.startsWith("#")) {
      smoothScrollToId(href.slice(1));
    }
  };

  return (
    <>
      <header className="sticky top-0 z-20 border-b border-[rgb(var(--border))] bg-[rgb(var(--bg))]/70 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="h-14 grid grid-cols-[auto_1fr_auto] items-center">
            {/* LEFT */}
            <div className="flex items-center gap-2 text-sm font-mono text-[rgb(var(--muted))] whitespace-nowrap">
              <span className="text-[rgb(var(--fg))] font-semibold">JOMI</span>
              <span className="opacity-40">/</span>
              <span>Austin, TX</span>
              <span className="opacity-40">·</span>
              <LiveClock />
            </div>

            {/* CENTER (desktop links) */}
            <nav className="hidden md:flex justify-center items-center gap-8 lg:gap-10 text-sm">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => handleNavClick(e, l.href, l.label)}
                  className="text-[rgb(var(--muted))] hover:text-[rgb(var(--fg))] transition"
                >
                  {l.label}
                </a>
              ))}
            </nav>

            {/* RIGHT */}
            <div className="flex items-center justify-end gap-2">
              <ThemeToggle />

              {/* Hamburger (mobile) */}
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-full ring-1 ring-[rgb(var(--border))] bg-[rgb(var(--card))] hover:opacity-90 transition"
                aria-expanded={open}
                aria-label={open ? "Close navigation menu" : "Open navigation menu"}
              >
                <HamburgerIcon open={open} />
              </button>
            </div>
          </div>

          {/* Mobile links */}
          {open && (
            <div className="md:hidden pb-4">
              <div className="mt-2 rounded-2xl bg-[rgb(var(--card))] ring-1 ring-[rgb(var(--border))] p-3">
                <div className="flex flex-col">
                  {links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      onClick={(e) => handleNavClick(e, l.href, l.label)}
                      className="rounded-xl px-3 py-2 text-sm text-[rgb(var(--muted))] hover:text-[rgb(var(--fg))] hover:bg-black/5 dark:hover:bg-white/5 transition"
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Contact Modal */}
      {contactOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-modal-title"
        >
          {/* Backdrop */}
          <button
            type="button"
            aria-label="Close contact modal"
            onClick={() => setContactOpen(false)}
            className="absolute inset-0 bg-black/50"
          />

          {/* Panel */}
          <div className="relative w-full max-w-lg rounded-2xl bg-[rgb(var(--card))] ring-1 ring-[rgb(var(--border))] p-6 shadow-lg">
            {/* IMPORTANT: stack on mobile, row on sm+ */}
            <div className="flex flex-col sm:flex-row sm:items-start items-center sm:items-start gap-4">
              {/* Centered image on mobile */}
              <div className="relative h-16 w-16 sm:h-14 sm:w-14 rounded-2xl overflow-hidden ring-1 ring-[rgb(var(--border))] bg-[rgb(var(--bg))] mx-auto sm:mx-0">
                <Image
                  src="/Jomi3.JPG"
                  alt="Jomi Okuwobi"
                  fill
                  className="object-cover"
                  sizes="64px"
                  priority
                />
              </div>

              {/* Text/content: centered on mobile, left on sm+ */}
              <div className="flex-1 text-center sm:text-left">
                <h3
                  id="contact-modal-title"
                  className="text-lg font-semibold tracking-tight"
                >
                  Contact Jomi
                </h3>
                <p className="mt-1 text-[15px] leading-7 text-[rgb(var(--muted))]">
                  Best way to reach me is email — LinkedIn works too.
                </p>

                <div className="mt-4 flex flex-col gap-2">
                  <a
                    href="mailto:jomilojuokuwobi@gmail.com"
                    className="rounded-xl px-3 py-2 text-sm ring-1 ring-[rgb(var(--border))] bg-[rgb(var(--bg))] hover:opacity-90 transition"
                  >
                    Email:{" "}
                    <span className="font-medium">
                      jomilojuokuwobi@gmail.com
                    </span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/jomiloju-okuwobi/"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl px-3 py-2 text-sm ring-1 ring-[rgb(var(--border))] bg-[rgb(var(--bg))] hover:opacity-90 transition"
                  >
                    LinkedIn:{" "}
                    <span className="font-medium">jomiloju-okuwobi</span>
                  </a>
                </div>
              </div>

              {/* Close button: full-width on mobile, corner-ish on sm+ */}
              <div className="w-full sm:w-auto sm:ml-2">
                <button
                  type="button"
                  onClick={() => setContactOpen(false)}
                  className="w-full sm:w-auto rounded-full px-3 py-1.5 text-sm ring-1 ring-[rgb(var(--border))] hover:opacity-90 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
