"use client";
import { useState } from "react";
import { schedule } from "@/lib/data";

export default function BookPage() {
  const [booked, setBooked] = useState<string[]>([]);
  const toggle = (id: string) =>
    setBooked((b) => (b.includes(id) ? b.filter((x) => x !== id) : [...b, id]));

  return (
    <div>
      <div className="eyebrow">Book a class</div>
      <h1 className="display text-6xl md:text-8xl mt-4">This week.</h1>

      <div className="mt-12 grid md:grid-cols-7 gap-px bg-white/10">
        {schedule.map((d) => (
          <div key={d.day} className="bg-black p-4 min-h-[260px]">
            <div className="eyebrow">{d.day}</div>
            <ul className="mt-4 space-y-3">
              {d.items.map((it, idx) => {
                const id = `${d.day}-${idx}`;
                const is = booked.includes(id);
                return (
                  <li key={idx}>
                    <button
                      onClick={() => toggle(id)}
                      className={`w-full text-left p-3 border transition ${
                        is ? "border-accent bg-accent/10" : "hairline hover:border-white/30"
                      }`}
                    >
                      <div className="text-[11px] uppercase tracking-[0.2em] text-white/50">{it.time}</div>
                      <div className="font-display text-lg">{it.name}</div>
                      <div className="text-[10px] uppercase tracking-widest text-white/40 mt-1">
                        w/ {it.coach}
                      </div>
                      <div className={`mt-2 text-[10px] uppercase tracking-[0.2em] ${is ? "text-accent" : "text-white/40"}`}>
                        {is ? "Booked ✓" : "Tap to book"}
                      </div>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
