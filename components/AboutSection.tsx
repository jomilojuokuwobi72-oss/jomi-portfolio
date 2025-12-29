// components/AboutSection.tsx
export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24">
      <div className="grid gap-8 md:gap-10 lg:grid-cols-[340px_1fr] lg:items-start">
        {/* LEFT: avatar + name */}
        <div className="flex flex-col items-start">
          <div className="h-28 w-28 sm:h-32 sm:w-32 rounded-full bg-[rgb(var(--chip))] ring-1 ring-[rgb(var(--border))] overflow-hidden">
            {/* Put your photo at /public/me.jpg */}
            <img
              src="/Jomi1.jpg"
              alt="Jomi Okuwobi"
              className="h-full w-full object-cover"
            />
          </div>

          <h2 className="mt-5 text-4xl sm:text-5xl font-semibold tracking-tight text-[rgb(var(--fg))]">
            Jomi Okuwobi
          </h2>

          <p className="mt-3 text-base sm:text-lg leading-7 text-[rgb(var(--muted))] max-w-[34ch]">
            Full-stack engineer focused on clean UX and shipping end-to-end products.
          </p>
        </div>

        {/* RIGHT: longer about copy */}
        <div className="text-[rgb(var(--muted))] lg:max-w-[70ch]">
          <p className="text-base sm:text-lg leading-8">
            I’m a full-stack software engineer who cares about building products that feel
            simple on the surface and solid underneath. I like working across the entire
            lifecycle—from exploring the problem and shaping the UX, to implementing the
            backend, polishing details, and deploying something people can actually use.
          </p>

          <p className="mt-6 text-base sm:text-lg leading-8">
            My sweet spot is combining thoughtful front-end UI with reliable systems work.
            I’m comfortable designing clean component structures in Next.js and Tailwind,
            integrating APIs, and working with databases and cloud services. I’m also
            obsessive about clarity: naming, layout, error states, and the small interaction
            details that make an app feel intentional.
          </p>

          <p className="mt-6 text-base sm:text-lg leading-8">
            Recently, I’ve been building projects that blend engineering with real-world
            impact—like platforms that analyze movement patterns for injury prevention, and
            tools that help communities organize, share information, and collaborate. I
            enjoy projects where I can take ownership, move fast, and still keep the
            quality bar high.
          </p>

          <p className="mt-6 text-base sm:text-lg leading-8">
            Outside of coding, I’m usually at the gym, playing soccer, or working on ideas
            that connect technology with people’s everyday lives. I’m currently based in
            Austin, TX, and I’m looking for opportunities where I can contribute as a
            product-minded engineer—someone who can ship, communicate clearly, and raise
            the quality of both the user experience and the codebase.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {["Next.js", "React", "Node", "Postgres", "Tailwind", "AWS"].map((t) => (
              <span
                key={t}
                className="text-xs rounded-full px-3 py-1 bg-[rgb(var(--chip))] ring-1 ring-[rgb(var(--border))] text-[rgb(var(--fg))]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
