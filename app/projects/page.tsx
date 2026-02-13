// app/projects/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

type Project = {
  title: string;
  meta: string;
  desc: string;
  longDesc: string;
  tags: string[];
  image?: string;
  href?: string;
  codeHref?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "worldMap",
    meta: "2026",
    desc: "Personalized travel share links with interactive map visualization",
    longDesc:
      "A full-stack application that lets you create personalized share links showcasing all the places you've visited. Interactive map visualization powered by Mapbox displays your travel locations, while PostgreSQL stores your travel data securely. Upload and manage travel memories with AWS S3 bucket integration for seamless image hosting. Share your adventures with a unique, custom URL.",
    tags: ["Next.js", "TypeScript", "Mapbox", "PostgreSQL", "AWS S3"],
    image: "/worldmap-preview.png",
    href: "https://world-map-peach.vercel.app",
    codeHref: "https://github.com/jomilojuokuwobi72-oss/WorldMap",
    featured: true,
  },
  {
    title: "Sports Injury Insight & Prevention",
    meta: "2025",
    desc: "A full-stack injury-prevention platform",
    longDesc:
      "Built a full-stack web platform that analyzes soccer injury patterns to support ACL/MCL tear prevention, using Next.js, Node.js, Express, and PostgreSQL. The platform applies predictive analytics with TensorFlow.js and OpenCV to evaluate over 500 annotated movement samples, identify high-risk motions, and recommend targeted warm-ups and training drills to help reduce injury risk.",
    tags: ["Next.js", "Node", "Postgres", "OpenCV"],
  },
  {
    title: "TickerTalk",
    meta: "2025",
    desc: "NLP-Powered Financial Search Tool",
    longDesc:
      "Built an NLP-powered financial search tool that interprets free-text user queries and maps them to relevant stocks and ETFs, improving discoverability beyond traditional ticker-based search, achieving ~85–90% relevance accuracy based on user feedback.",
    tags: ["Next.js", "Supabase", "Tailwind"],
  },
];

export default function ProjectsPage() {
  const featuredProject = projects.find((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/"
            className="text-sm text-[rgb(var(--muted))] hover:text-[rgb(var(--fg))] transition"
          >
            ← Back
          </Link>

          <h1 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight">
            Projects
          </h1>

          <p className="mt-2 text-[15px] leading-7 text-[rgb(var(--muted))]">
            A selection of projects I've built, from full-stack applications to
            data-driven platforms.
          </p>
        </div>

        <div className="h-px bg-[rgb(var(--border))]" />

        {/* Featured Project */}
        {featuredProject && (
          <section className="my-12 space-y-6">
            {/* Hero Image */}
            {featuredProject.image && (
              <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl bg-black/10 dark:bg-white/10">
                <Image
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}

            {/* Content */}
            <div className="rounded-2xl bg-[rgb(var(--card))] ring-1 ring-[rgb(var(--border))] p-6 lg:p-8">
              <div className="inline-block mb-3 px-3 py-1 rounded-full text-xs font-medium bg-[rgb(var(--chip))] ring-1 ring-[rgb(var(--border))] text-[rgb(var(--muted))]">
                Featured
              </div>

              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
                {featuredProject.title}
              </h2>

              <p className="mt-3 text-[15px] leading-7 text-[rgb(var(--muted))]">
                {featuredProject.longDesc}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {featuredProject.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs rounded-full px-3 py-1.5 bg-[rgb(var(--chip))] ring-1 ring-[rgb(var(--border))]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex gap-4 text-sm font-medium">
                {featuredProject.href && (
                  <a
                    href={featuredProject.href}
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-4 hover:opacity-75 transition"
                  >
                    Live
                  </a>
                )}
                {featuredProject.codeHref && (
                  <a
                    href={featuredProject.codeHref}
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-4 hover:opacity-75 transition"
                  >
                    Code
                  </a>
                )}
              </div>
            </div>
          </section>
        )}

        <div className="my-12 h-px bg-[rgb(var(--border))]" />

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <section>
            <h2 className="text-2xl font-semibold tracking-tight mb-6">
              Other Projects
            </h2>

            <div className="space-y-5">
              {otherProjects.map((project) => (
                <div
                  key={project.title}
                  className="rounded-2xl bg-[rgb(var(--card))] ring-1 ring-[rgb(var(--border))] p-5"
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-medium text-lg">{project.title}</h3>
                    <span className="text-sm text-[rgb(var(--muted))]">
                      {project.meta}
                    </span>
                  </div>

                  <p className="mt-2 text-[15px] leading-7 text-[rgb(var(--muted))]">
                    {project.desc}
                  </p>

                  <p className="mt-3 text-[15px] leading-7 text-[rgb(var(--muted))]">
                    {project.longDesc}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs rounded-full px-2.5 py-1 bg-[rgb(var(--chip))] ring-1 ring-[rgb(var(--border))]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex gap-4 text-sm font-medium">
                    {project.href && (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                        className="underline underline-offset-4 hover:opacity-75 transition"
                      >
                        Live
                      </a>
                    )}
                    <a className="underline underline-offset-4 hover:opacity-75 transition" href="#">
                      Code
                    </a>
                    <a className="underline underline-offset-4 hover:opacity-75 transition" href="#">
                      Case study
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        <footer className="mt-14 text-center text-sm text-[rgb(var(--muted))]">
          © {new Date().getFullYear()} Jomi Okuwobi
        </footer>
      </div>
    </main>
  );
}
