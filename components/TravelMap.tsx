"use client";

import Image from "next/image";
import { useMemo, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Dot = {
  label: string;
  leftPct: number;
  topPct: number;
};

type CountryCard = {
  key: string;
  name: string;
  src: string; // from /public
  aspect: `${number}/${number}`;
  dots: Dot[];
  description: string;
  imageScale?: number; // optional
  // If your map image comes in white (like your US), we can invert it to black.
  makeBlack?: boolean;
};

function DotMarker({ label, leftPct, topPct }: Dot) {
  return (
    <span
      title={label}
      className="absolute z-10 h-2.5 w-2.5 rounded-full bg-green-500
                 shadow-[0_0_12px_rgba(34,197,94,0.85)]
                 ring-2 ring-green-500/20"
      style={{
        left: `${leftPct}%`,
        top: `${topPct}%`,
        transform: "translate(-50%, -50%)",
      }}
    />
  );
}

export default function TravelMap() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const countries: CountryCard[] = useMemo(
    () => [
      {
        key: "ng",
        name: "Nigeria",
        src: "/Nigeria.svg",
        aspect: "16/9", // force same aspect for consistent card proportions
        imageScale: 1.05,
        dots: [{ label: "Lagos", leftPct: 24, topPct: 78 }],
        description:
          "This is my home country. I lived here for 16 years before I relocated to the United States. Lagos is my city",
      },
      {
        key: "us",
        name: "United States",
        src: "/US.svg", // your state-outline map
        aspect: "16/9", // same aspect as Nigeria card
        imageScale: 1.06,
        makeBlack: true, // force it to render black
        // NOTE: Adjusted to keep dots away from edges so they stay inside the map area.
        // You can fine-tune if needed.
        dots: [
          { label: "California", leftPct: 20, topPct: 58 },
          { label: "Chicago", leftPct: 56, topPct: 42 },
          { label: "North Carolina", leftPct: 75, topPct: 66 },
          { label: "Maryland", leftPct: 80, topPct: 58 },
          { label: "New Jersey", leftPct: 83, topPct: 54 },
          { label: "New York", leftPct: 84, topPct: 49 },
        ],
        description:
          "I moved around a lot when I first got here and eventually settled down in Texas. I currently live in Austin.",
      },
    ],
    []
  );

  function scrollByCard(direction: "left" | "right") {
    const el = scrollerRef.current;
    if (!el) return;

    const amount = Math.min(el.clientWidth * 0.9, 720);
    el.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  }

  return (
    <section id="travel" className="scroll-mt-24">
      <div>
        <h2 className="text-xl font-semibold">Travel</h2>
        <p className="mt-2 text-[15px] leading-7 text-[rgb(var(--muted))]">
          A few places that have shaped me over time. It’s still a small collection, but 
          the goal is to keep traveling and add many more chapters along the way.
        </p>
      </div>

      <div className="mt-6">
        {/* Horizontal strip: on larger screens, show at least 2 cards side by side */}
        <div
          ref={scrollerRef}
          className="
            flex gap-10 overflow-x-auto pb-3
            [-ms-overflow-style:none] [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
            scroll-smooth
          "
        >
          {countries.map((c) => (
            <div
              key={c.key}
              className="
                shrink-0
                w-[88vw]
                sm:w-[520px]
                lg:w-[calc((100%-2.5rem)/2)]
              "
            >
              {/* White card container so maps are visible in both themes */}
              <div className="h-full rounded-2xl bg-white ring-1 ring-[rgb(var(--border))] p-5">
                {/* Map area: fixed aspect so BOTH cards match */}
                <div className="relative w-full overflow-hidden rounded-xl">
                  <div className={`relative w-full aspect-[${c.aspect}]`}>
                    <Image
                      src={c.src}
                      alt={`${c.name} map`}
                      fill
                      priority={false}
                      className={[
                        "object-contain",
                        // Make US black if its source appears white; works for line-art PNG/SVG.
                        c.makeBlack ? "invert" : "",
                      ].join(" ")}
                      style={
                        c.imageScale && c.imageScale !== 1
                          ? { transform: `scale(${c.imageScale})` }
                          : undefined
                      }
                    />

                    {/* Dots clipped to the map area so they cannot escape the card */}
                    <div className="absolute inset-0 overflow-hidden">
                      {c.dots.map((d) => (
                        <DotMarker key={`${c.key}-${d.label}`} {...d} />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Text */}
                <div className="mt-4">
                  <div className="font-medium text-neutral-900">{c.name}</div>
                  <p className="mt-2 text-[15px] leading-7 text-neutral-700">
                    {c.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Arrow controls BELOW (left/right) */}
        <div className="mt-3 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => scrollByCard("left")}
            className="
              inline-flex items-center justify-center rounded-full
              h-9 w-9 ring-1 ring-[rgb(var(--border))]
              bg-[rgb(var(--card))] hover:opacity-90 transition
            "
            aria-label="Scroll left"
            title="Scroll left"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <button
            type="button"
            onClick={() => scrollByCard("right")}
            className="
              inline-flex items-center justify-center rounded-full
              h-9 w-9 ring-1 ring-[rgb(var(--border))]
              bg-[rgb(var(--card))] hover:opacity-90 transition
            "
            aria-label="Scroll right"
            title="Scroll right"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
