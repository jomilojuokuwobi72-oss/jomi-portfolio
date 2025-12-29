export default function MoreThanCoding() {
  return (
    <div className="mt-4 rounded-2xl border-2 border-[rgb(var(--border))] bg-[rgb(var(--card))] p-5">
      <p className="text-[15px] leading-6 text-[rgb(var(--muted))]">
        A “life collage” area — photos, hobbies, and (later) Spotify stats.
      </p>

      {/* Collage placeholders */}
      <div className="mt-4 grid grid-cols-3 gap-3">
        <div className="aspect-square rounded-xl bg-black/10 dark:bg-white/10" />
        <div className="aspect-square rounded-xl bg-black/10 dark:bg-white/10" />
        <div className="aspect-square rounded-xl bg-black/10 dark:bg-white/10" />
      </div>

      {/* Spotify stub */}
      <div className="mt-5 rounded-xl border border-[rgb(var(--border))] p-4">
        <div className="text-sm font-semibold">Spotify (later)</div>
        <div className="mt-1 text-[14px] text-[rgb(var(--muted))]">
          Recent listens / top tracks will appear here once we connect the API.
        </div>

        <div className="mt-3 space-y-2">
          {["Track name — Artist", "Track name — Artist", "Track name — Artist"].map((x) => (
            <div key={x} className="flex items-center justify-between text-sm">
              <span className="truncate">{x}</span>
              <span className="text-[rgb(var(--muted))]">2:58</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
