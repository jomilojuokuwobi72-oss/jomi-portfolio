export default function ExperienceItem({
  role,
  org,
  dates,
  bullets,
}: {
  role: string;
  org: string;
  dates: string;
  bullets: string[];
}) {
  return (
    <div className="border-l-4 border-[rgb(var(--border))] pl-4">
      <div className="flex items-baseline justify-between gap-3">
        <div className="font-semibold">
          {role} <span className="text-[rgb(var(--muted))]">@ {org}</span>
        </div>
        <div className="text-sm text-[rgb(var(--muted))]">{dates}</div>
      </div>

      <ul className="mt-2 list-disc pl-5 text-[15px] leading-6 text-[rgb(var(--muted))]">
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </div>
  );
}
