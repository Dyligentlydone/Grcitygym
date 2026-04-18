import { trainers } from "@/lib/data";
import { Reveal } from "@/components/Reveal";
import { ImageIcon } from "lucide-react";

export const metadata = { title: "Trainers — Grand Rapids City Gym" };

export default function TrainersPage() {
  return (
    <>
      <section className="pt-40 pb-20 mx-auto max-w-7xl px-6">
        <div className="eyebrow">The Coaches</div>
        <h1 className="display text-7xl md:text-[12rem] mt-4">Trainers.</h1>
        <p className="mt-10 max-w-xl text-white/60 text-lg leading-relaxed">
          Our coaches are practitioners first. They compete, they teach, they keep learning —
          and they pass all of it on to you.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {trainers.map((t, i) => (
          <Reveal key={t.slug} delay={i * 0.05}>
            <article>
              <div className="relative aspect-[3/4] bg-ink-800 border hairline flex items-center justify-center">
                <ImageIcon size={32} className="text-white/20" strokeWidth={1} />
              </div>
              <h3 className="mt-6 font-display text-3xl tracking-tightest">{t.name}</h3>
              <p className="mt-3 text-sm text-white/60 leading-relaxed">{t.bio}</p>
            </article>
          </Reveal>
        ))}
      </section>
    </>
  );
}
