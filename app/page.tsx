// app/page.tsx
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import TravelMap from "@/components/TravelMap";

const social = [
  { label: "GitHub", href: "https://github.com/" },
  { label: "LinkedIn", href: "https://linkedin.com/" },
  { label: "Email", href: "mailto:you@email.com" },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      {/* Wider container on desktop so proportions match your inspiration */}
      <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">

        {/* About */}
        <AboutSection />



        <div className="my-10 sm:my-12 h-px bg-[rgb(var(--border))]" />

        {/* Projects */}
        <section id="projects">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-xl font-semibold">Projects</h2>
            <a
              href="#projects"
              className="text-sm rounded-full px-3 py-1.5 ring-1 ring-[rgb(var(--border))] bg-[rgb(var(--card))] hover:opacity-90 transition"
            >
              View all →
            </a>
          </div>

          <div className="mt-6 space-y-5">
            <ProjectRow
              title="Sports Injury Insight & Prevention"
              meta="2025 — Present"
              desc="Motion analysis + personalized guidance. Full stack Next.js + Node + Postgres."
              tags={["Next.js", "Node", "Postgres", "OpenCV"]}
            />
            <ProjectRow
              title="BookNook"
              meta="2025"
              desc="Book club platform with Supabase auth, clubs, discussions, and notifications."
              tags={["Next.js", "Supabase", "Tailwind"]}
            />
          </div>
        </section>

        <div className="my-10 sm:my-12 h-px bg-[rgb(var(--border))]" />

        {/* Experience */}
        <section id="experience">
          <h2 className="text-xl font-semibold">Experience</h2>
          <div className="mt-6 space-y-6">
            <ExperienceRow
              role="Software Engineer"
              org="Charles Schwab"
              date="2024 — Present"
              bullets={[
                "Built internal systems improving reliability and developer workflow.",
                "Owned features end-to-end: design, implementation, testing, rollout.",
              ]}
            />
            <ExperienceRow
              role="Software Engineering Intern"
              org="Sony Interactive Entertainment"
              date="2023"
              bullets={["Shipped automation that reduced manual release work substantially."]}
            />
          </div>
        </section>

        <div className="my-10 sm:my-12 h-px bg-[rgb(var(--border))]" />

        {/* Travel */}
        <section id="travel">
          <TravelMap />
        </section>

        <div className="my-10 sm:my-12 h-px bg-[rgb(var(--border))]" />

        <div className="my-10 sm:my-12 h-px bg-[rgb(var(--border))]" />

        {/* Contact */}
        <section id="contact">
          <h2 className="text-xl font-semibold">Contact</h2>
          <p className="mt-4 text-[15px] leading-7 text-[rgb(var(--muted))]">
            Best way to reach me is email. You can also find me on GitHub and LinkedIn above.
          </p>
        </section>

        <footer className="mt-14 text-center text-sm text-[rgb(var(--muted))]">
          © {new Date().getFullYear()} Jomi Okuwobi
        </footer>
      </div>
    </main>
  );
}

function ProjectRow({
  title,
  meta,
  desc,
  tags,
}: {
  title: string;
  meta: string;
  desc: string;
  tags: string[];
}) {
  return (
    <div className="rounded-2xl bg-[rgb(var(--card))] ring-1 ring-[rgb(var(--border))] p-5">
      <div className="flex items-baseline justify-between gap-3">
        <div className="font-medium">{title}</div>
        <div className="text-sm text-[rgb(var(--muted))]">{meta}</div>
      </div>
      <p className="mt-2 text-[15px] leading-7 text-[rgb(var(--muted))]">{desc}</p>
      <div className="mt-3 flex flex-wrap gap-2">
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

function ExperienceRow({
  role,
  org,
  date,
  bullets,
}: {
  role: string;
  org: string;
  date: string;
  bullets: string[];
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3">
        <div className="font-medium">
          {role} <span className="text-[rgb(var(--muted))]">@ {org}</span>
        </div>
        <div className="text-sm text-[rgb(var(--muted))]">{date}</div>
      </div>
      <ul className="mt-2 list-disc pl-5 text-[15px] leading-7 text-[rgb(var(--muted))]">
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </div>
  );
}
