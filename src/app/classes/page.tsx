import Image from "next/image";
import { classes, schedule } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

export const metadata = { title: "Classes — Grand Rapids City Gym" };

export default function ClassesPage() {
  return (
    <>
      <section className="pt-40 pb-20 mx-auto max-w-7xl px-6">
        <div className="eyebrow">The Work</div>
        <h1 className="display text-7xl md:text-[12rem] mt-4">Classes.</h1>
        <p className="mt-10 max-w-xl text-white/60 text-lg leading-relaxed">
          Six disciplines. One floor. Walk in as a beginner, walk out as a regular.
          Every session is led by a coach who can meet you where you are.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 space-y-32 pb-24">
        {classes.map((c, i) => (
          <Reveal key={c.slug}>
            <div id={c.slug} className="grid md:grid-cols-12 gap-10 items-center">
              <div className={`md:col-span-7 relative aspect-[16/10] overflow-hidden ${i % 2 ? "md:order-2" : ""}`}>
                <Image src={c.image} alt={c.name} fill className="object-cover" />
              </div>
              <div className="md:col-span-5">
                <div className="eyebrow">{c.duration} · Intensity {c.intensity}</div>
                <h2 className="display text-6xl md:text-7xl mt-4">{c.name}</h2>
                <p className="mt-3 text-accent italic font-display text-2xl">{c.tagline}</p>
                <p className="mt-6 text-white/70 leading-relaxed">{c.description}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </section>

      {/* SCHEDULE */}
      <section className="border-t hairline">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="eyebrow">This week</div>
          <h2 className="display text-6xl md:text-8xl mt-4">Schedule.</h2>

          <div className="mt-12 grid md:grid-cols-7 gap-px bg-white/10">
            {schedule.map((d) => (
              <div key={d.day} className="bg-black p-5 min-h-[240px]">
                <div className="eyebrow">{d.day}</div>
                <ul className="mt-5 space-y-4">
                  {d.items.map((it, idx) => (
                    <li key={idx}>
                      <div className="text-sm text-white/90">{it.time}</div>
                      <div className="font-display text-xl">{it.name}</div>
                      <div className="text-[11px] uppercase tracking-[0.2em] text-white/40">w/ {it.coach}</div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
