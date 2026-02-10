// app/page.tsx
"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import OutsideWork from "@/components/OutsideWork";

type Project = {
  title: string;
  meta: string;
  desc: string;
  longDesc: string;
  tags: string[];
  href?: string;
};

const projects: Project[] = [
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
      "Built an NLP-powered financial search tool that interprets free-text user queries and maps them to relevant stocks and ETFs, improving discoverability beyond traditional ticker-based search, and evaluated search accuracy using real user feedback, achieving approximately 85–90% relevance accuracy based on participant rankings of returned results.",
    tags: ["Next.js", "Supabase", "Tailwind"],
  },
];

export default function Home() {
  const [showProjectsModal, setShowProjectsModal] = useState(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowProjectsModal(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const openProjectsModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowProjectsModal(true);
  };

  const closeProjectsModal = () => setShowProjectsModal(false);

  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
        {/* About */}
        <AboutSection />

        <div className="my-10 sm:my-12 h-px bg-[rgb(var(--border))]" />

    

        {/* Experience */}
        <section id="experience">
          <h2 className="text-xl font-semibold">Experience</h2>

          <div className="mt-6 space-y-5">
            <ExperienceCard
              role="Software Engineer"
              org="Charles Schwab"
              date="2025 — Present"
              bullets={[
                "Working as a Software Developer focused on observability and reliability for large-scale distributed systems across on-prem and cloud environments, building Python-based telemetry pipelines that transformed infrastructure and service metrics into production dashboards and alerts using Grafana, Splunk, OpenTelemetry, and Wavefront.",
              ]}
              tags={["Python", "Observability", "Grafana", "Splunk", "Wavefront"]}
            />

            <ExperienceCard
              role="AI Model Trainer"
              org="Outlier AI"
              date="2024"
              bullets={[
                "Contributed to the training, evaluation, and refinement of Large Language Models (LLMs) across 5+ high-impact projects, improving model accuracy and reliability while performing in-depth safety and bias assessments to ensure ethical, production-ready outputs.",
              ]}
              tags={["LLMs", "Model Evaluation", "AI Safety", "Bias Assessment"]}
            />
          </div>
        </section>

        <div className="my-10 sm:my-12 h-px bg-[rgb(var(--border))]" />

         {/* Projects */}
        <section id="projects">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-xl font-semibold">Projects</h2>

            {/* View all -> opens modal */}
            <button
              type="button"
              onClick={openProjectsModal}
              className="text-sm rounded-full px-3 py-1.5 ring-1 ring-[rgb(var(--border))] bg-[rgb(var(--card))] hover:opacity-90 transition"
            >
              View all →
            </button>
          </div>

          <div className="mt-6 space-y-5">
            {projects.map((p) => (
              <ProjectRow
                key={p.title}
                title={p.title}
                meta={p.meta}
                desc={p.desc}
                longDesc={p.longDesc}
                tags={p.tags}
                href={p.href}
              />
            ))}
          </div>
        </section>



        <div className="my-10 sm:my-12 h-px bg-[rgb(var(--border))]" />

        {/* Outside Work */}
        <section id="outside-work">
          <OutsideWork />
        </section>

        <div className="my-10 sm:my-12 h-px bg-[rgb(var(--border))]" />

        {/* Contact */}
        <section id="contact">
          <h2 className="text-xl font-semibold">Contact</h2>
          <p className="mt-4 text-[15px] leading-7 text-[rgb(var(--muted))]">
            Best way to reach me is email. You can also find me on GitHub and
            LinkedIn above.
          </p>
        </section>

        <footer className="mt-14 text-center text-sm text-[rgb(var(--muted))]">
          © {new Date().getFullYear()} Jomi Okuwobi
        </footer>
      </div>

      {/* Modal */}
      {showProjectsModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          aria-labelledby="projects-modal-title"
          role="dialog"
          aria-modal="true"
        >
          {/* Backdrop */}
          <button
            type="button"
            aria-label="Close modal"
            onClick={closeProjectsModal}
            className="absolute inset-0 bg-black/50"
          />

          {/* Panel */}
          <div className="relative w-full max-w-lg rounded-2xl bg-[rgb(var(--card))] ring-1 ring-[rgb(var(--border))] p-6 shadow-lg">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3
                  id="projects-modal-title"
                  className="text-lg font-semibold tracking-tight"
                >
                  More projects coming soon
                </h3>
                <p className="mt-2 text-[15px] leading-7 text-[rgb(var(--muted))]">
                  I’m actively adding more projects and live links. Check back soon
                  — or reach out if you’d like a demo in the meantime.
                </p>
              </div>

              <button
                type="button"
                onClick={closeProjectsModal}
                className="rounded-full px-2.5 py-1 text-sm ring-1 ring-[rgb(var(--border))] hover:opacity-90 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

function ProjectRow({
  title,
  meta,
  desc,
  longDesc,
  tags,
  href,
}: {
  title: string;
  meta: string;
  desc: string;
  longDesc: string;
  tags: string[];
  href?: string;
}) {
  const Title = <div className="font-medium">{title}</div>;

  return (
    <div className="rounded-2xl bg-[rgb(var(--card))] ring-1 ring-[rgb(var(--border))] p-5">
      <div className="flex items-baseline justify-between gap-3">
        {href ? (
          <a
            href={href}
            className="hover:opacity-90 transition"
            target="_blank"
            rel="noreferrer"
          >
            {Title}
          </a>
        ) : (
          Title
        )}
        <div className="text-sm text-[rgb(var(--muted))]">{meta}</div>
      </div>

      <p className="mt-2 text-[15px] leading-7 text-[rgb(var(--muted))]">
        {desc}
      </p>

      <p className="mt-3 text-[15px] leading-7 text-[rgb(var(--muted))]">
        {longDesc}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span
            key={t}
            className="text-xs rounded-full px-2.5 py-1 bg-[rgb(var(--chip))] ring-1 ring-[rgb(var(--border))]"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function ExperienceCard({
  role,
  org,
  date,
  bullets,
  tags,
}: {
  role: string;
  org: string;
  date: string;
  bullets: string[];
  tags?: string[];
}) {
  return (
    <div className="rounded-2xl bg-[rgb(var(--card))] ring-1 ring-[rgb(var(--border))] p-5">
      <div className="flex items-baseline justify-between gap-3">
        <div className="font-medium">
          {role} <span className="text-[rgb(var(--muted))]">@ {org}</span>
        </div>
        <div className="text-sm text-[rgb(var(--muted))]">{date}</div>
      </div>

      <ul className="mt-3 list-disc pl-5 text-[15px] leading-7 text-[rgb(var(--muted))]">
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>

      {tags && (
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="text-xs rounded-full px-2.5 py-1 bg-[rgb(var(--chip))] ring-1 ring-[rgb(var(--border))]"
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
