"use client";

import { useEffect, useState } from "react";

export default function LiveClock() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  // Austin time (Central Time)
  const time = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Chicago",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(now);

  return (
    <span className="whitespace-nowrap">
      <span className="hidden sm:inline">Austin, TX</span>
      <span className="hidden sm:inline mx-2 opacity-40">•</span>
      <span>{time}</span>
    </span>
  );
}
