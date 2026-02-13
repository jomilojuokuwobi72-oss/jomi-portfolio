// components/AboutSection.tsx
import Image from "next/image";
import { Brain, Eye } from "lucide-react";

const techLeft = ["Python", "React.js", "JavaScript (ES6+)", "Java / Spring Boot", "Git / GitHub"];
const techRight = ["TypeScript", "Node.js", "SQL", "Docker", "AWS"];

const vibeIcons = [
  { src: "/coffee.JPG", alt: "Coffee", rotate: "-rotate-6" },
  { src: "/guitar.JPEG", alt: "Music", rotate: "rotate-3" },
  { src: "/coffee2.JPG", alt: "Gym", rotate: "-rotate-3" },
  { src: "/image6.JPG", alt: "Lifestyle", rotate: "rotate-6" },
];

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_1.4fr] lg:items-start">
        {/* LEFT */}
        <div className="lg:pr-6">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            {/* Profile image */}
            <div className="relative h-40 w-40 sm:h-44 sm:w-44 lg:h-56 lg:w-56">
              <Image
                src="/Jomi-1.JPG"
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
              Indulging My Curiousity
            </p>

            {/* Interests (replaces tech stack chips) */}
            <div className="mt-5 flex flex-wrap justify-center gap-3 lg:justify-start lg:max-w-xl">
              <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 bg-[rgb(var(--chip))] ring-1 ring-[rgb(var(--border))] text-sm text-[rgb(var(--muted))] hover:-translate-y-0.5 transition-transform">
                <Brain className="h-4 w-4 text-[rgb(var(--fg))] opacity-80" />
                Machine Learning
              </span>

              <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 bg-[rgb(var(--chip))] ring-1 ring-[rgb(var(--border))] text-sm text-[rgb(var(--muted))] hover:-translate-y-0.5 transition-transform">
                <Eye className="h-4 w-4 text-[rgb(var(--fg))] opacity-80" />
                Computer Vision
              </span>

              <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 bg-[rgb(var(--chip))] ring-1 ring-[rgb(var(--border))] text-sm text-[rgb(var(--muted))] hover:-translate-y-0.5 transition-transform">
                <span className="font-mono text-[rgb(var(--fg))] opacity-80">⚙</span>
                CI/CD
              </span>

              <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 bg-[rgb(var(--chip))] ring-1 ring-[rgb(var(--border))] text-sm text-[rgb(var(--muted))] hover:-translate-y-0.5 transition-transform">
                <span className="font-mono text-[rgb(var(--fg))] opacity-80">✦</span>
                UX / UI
              </span>

              <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 bg-[rgb(var(--chip))] ring-1 ring-[rgb(var(--border))] text-sm text-[rgb(var(--muted))] hover:-translate-y-0.5 transition-transform">
                <span className="font-mono text-[rgb(var(--fg))] opacity-80">⌘</span>
                Programming
              </span>
            </div>

            {/* Lifestyle images */}
            <div className="mt-5 flex items-center justify-center gap-3 lg:justify-start">
              {vibeIcons.map((img) => (
                <div
                  key={img.alt}
                  title={img.alt}
                  className={[
                    "relative h-12 w-12 sm:h-14 sm:w-14 rounded-xl",
                    "bg-[rgb(var(--card))] ring-1 ring-[rgb(var(--border))] overflow-hidden",
                    "transition-transform duration-300 ease-out will-change-transform",
                    img.rotate,
                    "hover:rotate-0 hover:-translate-y-0.5",
                  ].join(" ")}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="lg:pl-4">
          {/* Header */}
          <div className="flex items-center gap-5">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
              <span className="font-mono text-[rgb(var(--muted))]">/</span> about me
            </h3>
            <div className="h-px flex-1 bg-[rgb(var(--border))]" />
          </div>

          {/* Content */}
          <div className="mt-6 space-y-6">
            <p className="text-[15px] sm:text-base lg:text-lg leading-8 text-[rgb(var(--muted))]">
              Hi, Jomi here! I’m a{" "}
              <span className="text-[rgb(var(--fg))] font-semibold">
                full-stack software engineer
              </span>{" "}
              based in <span className="text-[rgb(var(--fg))] font-semibold">
                Austin, TX
              </span>{" "}. I enjoy building products that feel simple on the surface and solid
              underneath. I like working across the entire lifecycle — from shaping UX
              and APIs to implementing reliable systems and shipping to production.
            </p>

            <p className="text-[15px] sm:text-base lg:text-lg leading-8 text-[rgb(var(--muted))]">
              I’m currently a{" "}
              <span className="text-[rgb(var(--fg))] font-semibold">
                Software Developer at Charles Schwab
              </span>{" "}
              and a recent graduate from the{" "}
              <span className="text-[rgb(var(--fg))] font-semibold">
                University of Texas at Arlington
              </span>{" "}
              (Fall 2025). Lately, I’ve been exploring{" "}
              <span className="text-[rgb(var(--fg))] font-semibold">
                machine learning
              </span>{" "}
              and{" "}
              <span className="text-[rgb(var(--fg))] font-semibold">
                computer vision
              </span>{" "}
              as areas of growing interest.
            </p>

          

            <p className="pt-2 text-[15px] sm:text-base lg:text-lg leading-8 text-[rgb(var(--muted))]">
              Here are some of the technologies I’ve been working with:
            </p>

            {/* Tech list */}
            <div className="mt-2 grid gap-6 sm:grid-cols-2">
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
