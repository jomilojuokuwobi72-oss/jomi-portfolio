export default function ProjectCard({
  title,
  description,
  tags,
}: {
  title: string;
  description: string;
  tags: string[];
}) {
  return (
    <div className="rounded-2xl border-2 border-[rgb(var(--border))] bg-[rgb(var(--card))] p-5">
      <div className="h-44 w-full rounded-xl bg-black/10 dark:bg-white/10" />

      <div className="mt-4">
        <div className="text-lg font-semibold">{title}</div>
        <p className="mt-1 text-[15px] leading-6 text-[rgb(var(--muted))]">
          {description}
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-[rgb(var(--border))] px-3 py-1 text-xs"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-4 flex gap-3 text-sm font-medium">
          <a className="underline underline-offset-4" href="#">
            Live
          </a>
          <a className="underline underline-offset-4" href="#">
            Code
          </a>
          <a className="underline underline-offset-4" href="#">
            Case study
          </a>
        </div>
      </div>
    </div>
  );
}
