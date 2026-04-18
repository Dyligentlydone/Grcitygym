import Image from "next/image";
import { Reveal } from "@/components/Reveal";

export const metadata = { title: "About — Grand Rapids City Gym" };

export default function AboutPage() {
  return (
    <>
      <section className="pt-40 pb-20 mx-auto max-w-7xl px-6">
        <div className="eyebrow">Our Story</div>
        <h1 className="display text-7xl md:text-[12rem] mt-4">About.</h1>
      </section>

      <section className="mx-auto max-w-7xl px-6 grid md:grid-cols-12 gap-10 pb-24">
        <div className="md:col-span-5 relative aspect-[4/5]">
          <Image
            src="/about.png"
            alt="Grand Rapids City Gym"
            fill
            className="object-cover"
          />
        </div>
        <div className="md:col-span-7 space-y-8 text-white/70 leading-relaxed text-lg">
          <p>
            Grand Rapids City Gym was born in a neighborhood that needed one.
            A hard-working, honest, 24/7 space where everyone — from first-time
            lifters to lifelong athletes — has a home.
          </p>
          <p>
            We built it around three beliefs: training should be coached, the
            room should be clean, and the door should be open when you need it.
            A decade later, that's still the whole plan.
          </p>
          <p>
            Today, our members include nurses who train at 4 AM, teachers who
            come in at lunch, and families who share memberships. That's the
            city. That's us.
          </p>
        </div>
      </section>

      <section className="border-t hairline">
        <div className="mx-auto max-w-7xl px-6 py-24 grid md:grid-cols-3 gap-10">
          {[
            { k: "Top 10", v: "Rated one of the top gyms in Michigan" },
            { k: "4.8 / 5", v: "Live reviews" },
            { k: "24/7", v: "Keyed member access. Always." },
          ].map((s, i) => (
            <Reveal key={s.k} delay={i * 0.1}>
              <div className="border-t hairline pt-8">
                <div className="font-display text-7xl tracking-tightest">{s.k}</div>
                <div className="eyebrow mt-3">{s.v}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
