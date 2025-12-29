// components/AboutSection.tsx
import Image from "next/image";

const techLeft = ["Python", "React.js", "JavaScript (ES6+)"];
const techRight = ["TypeScript", "Node.js", "SQL"];

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_1.4fr] lg:items-start">
        {/* LEFT */}
        <div className="lg:pr-6">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="relative h-36 w-36 sm:h-40 sm:w-40 lg:h-48 lg:w-48">
              <Image
                src="/Jomi2.JPG"
                alt="Jomi Okuwobi"
                fill
                className="rounded-full object-cover ring-1 ring-[rgb(var(--border))]"
                priority
              />
            </div>

            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
              Jomi Okuwobi
            </h2>

            <p className="mt-3 max-w-xl text-[15px] sm:text-base lg:text-lg leading-7 text-[rgb(var(--muted))]">
              Full-stack engineer focused on clean UX and shipping end-to-end products.
            </p>

            <div className="mt-5 flex flex-wrap gap-2 lg:max-w-xl">
              {["Next.js", "React", "Node", "Postgres", "Tailwind", "AWS"].map((t) => (
                <span
                  key={t}
                  className="text-xs sm:text-sm rounded-full px-3 py-1.5 bg-[rgb(var(--chip))] ring-1 ring-[rgb(var(--border))]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="lg:pl-4">
          {/* Header */}
          <div className="flex items-center gap-5">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
              <span className="font-mono text-[rgb(var(--muted))]">/</span>{" "}
              about me
            </h3>
            <div className="h-px flex-1 bg-[rgb(var(--border))]" />
          </div>

          {/* Content */}
          <div className="mt-6 space-y-6">
            <p className="text-[15px] sm:text-base lg:text-lg leading-8 text-[rgb(var(--muted))]">
              I’m a{" "}
              <span className="text-[rgb(var(--fg))] font-semibold">
                full-stack software engineer
              </span>{" "}
              who builds products that feel simple on the surface and solid underneath.
              I enjoy working across the entire lifecycle — from shaping UX and APIs to
              implementing reliable systems and shipping to production.
            </p>

            <p className="text-[15px] sm:text-base lg:text-lg leading-8 text-[rgb(var(--muted))]">
              I’m especially comfortable in modern web stacks like{" "}
              <span className="text-[rgb(var(--fg))] font-semibold">Next.js</span> and{" "}
              <span className="text-[rgb(var(--fg))] font-semibold">Tailwind</span>,
              integrating APIs, and working with databases and cloud services. I care
              deeply about clarity — in naming, layout, error states, and interaction
              details.
            </p>

            {/* Tech list */}
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <TechList items={techLeft} />
              <TechList items={techRight} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TechList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-3 text-[rgb(var(--muted))]">
          <span className="font-mono text-[rgb(var(--fg))] opacity-70">▸</span>
          <span className="text-[15px] sm:text-base lg:text-lg">{item}</span>
        </li>
      ))}
    </ul>
  );
}
