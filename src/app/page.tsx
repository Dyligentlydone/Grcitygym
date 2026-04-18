import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, MapPin, Zap } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Marquee } from "@/components/Marquee";
import { classes, planGroups, site } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[100svh] min-h-[680px] w-full overflow-hidden grain">
        <Image
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2000&q=80"
          alt=""
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 h-full flex flex-col justify-end pb-20">
          <div className="eyebrow mb-6">Grand Rapids · Est. 2014</div>
          <h1 className="display text-[15vw] md:text-[9rem] leading-[0.88] max-w-5xl">
            No Ego.<br/>
            Just <span className="text-accent italic">Results.</span>
          </h1>
          <p className="mt-8 max-w-xl text-white/70 text-lg leading-relaxed">
            We offer an unpretentious and results-oriented community that's
            invested in your goals and success. Check your ego at the door and
            get ready to sweat!
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href={site.signupUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
              Sign Up Now <ArrowRight size={16} />
            </a>
            <Link href="/membership" className="btn btn-ghost">
              See Memberships
            </Link>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <Marquee words={["Strength", "Conditioning", "Boxing", "Mobility", "HIIT", "Community"]} />

      {/* VALUE TRIPTYCH */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32 grid gap-16 md:grid-cols-3">
        {[
          { icon: Clock, title: "24/7 Access", body: "Your schedule, your gym. Keyed access any hour of any day." },
          { icon: Zap, title: "Coached for Real", body: "Programming written by coaches who still lift, fight, and move themselves." },
          { icon: MapPin, title: "Of This City", body: "Built in Grand Rapids, for Grand Rapids. Your neighbors are here." },
        ].map(({ icon: Icon, title, body }, i) => (
          <Reveal key={title} delay={i * 0.08}>
            <div className="border-t hairline pt-8">
              <Icon size={22} className="text-accent" />
              <h3 className="mt-6 font-display text-4xl tracking-tightest">{title}</h3>
              <p className="mt-4 text-white/60 leading-relaxed">{body}</p>
            </div>
          </Reveal>
        ))}
      </section>

      {/* ABOUT STRIP */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-40 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-5 relative aspect-[4/5] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1400&q=80"
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <div className="md:col-span-7">
            <div className="eyebrow">The Philosophy</div>
            <h2 className="display mt-4 text-6xl md:text-8xl">
              Pressure<br/>makes <span className="italic text-accent">diamonds.</span>
            </h2>
            <p className="mt-8 max-w-lg text-white/70 leading-relaxed">
              We believe the gym should be the most honest hour of your day. No mirrors-first
              marketing. No gimmicks. Just a thoughtful environment, a well-run floor, and
              coaches who notice when you show up — and when you don't.
            </p>
            <Link href="/about" className="inline-flex items-center gap-2 mt-10 text-sm uppercase tracking-[0.25em] text-white hover:text-accent transition">
              Read the story <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* CLASSES GRID */}
      <section className="border-t hairline">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="flex items-end justify-between flex-wrap gap-6">
            <div>
              <div className="eyebrow">The Work</div>
              <h2 className="display text-6xl md:text-8xl mt-4">Classes.</h2>
            </div>
            <Link href="/classes" className="text-sm uppercase tracking-[0.25em] hover:text-accent">
              View all →
            </Link>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {classes.slice(0, 6).map((c, i) => (
              <Reveal key={c.slug} delay={i * 0.05}>
                <Link href={`/classes#${c.slug}`} className="group block relative aspect-[4/5] overflow-hidden">
                  <Image src={c.image} alt={c.name} fill className="object-cover transition duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <div className="eyebrow">{c.duration} · {c.intensity}</div>
                    <h3 className="font-display text-5xl tracking-tightest mt-2">{c.name}</h3>
                    <p className="text-white/70 mt-2 text-sm">{c.tagline}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MEMBERSHIP TEASER */}
      <section className="border-t hairline bg-black">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-end">
            <div>
              <div className="eyebrow">Membership</div>
              <h2 className="display text-6xl md:text-8xl mt-4">
                Many ways in.
              </h2>
            </div>
            <p className="text-white/60 leading-relaxed max-w-md">
              Monthly, paid-in-full, visit packs, and a free 3-day trial. Every
              plan includes 24/7 keyed access — no contracts.
            </p>
          </div>

          {(() => {
            const featured = [
              planGroups[3].plans[0], // 3-Day Trial
              planGroups[0].plans[0], // Standard Monthly
              planGroups[1].plans[4], // 6 Month
            ];
            return (
              <div className="mt-16 grid gap-6 md:grid-cols-3">
                {featured.map((p, i) => (
                  <div
                    key={p.signupUrl}
                    className={`p-8 border flex flex-col ${
                      i === 1 ? "bg-accent text-white border-accent" : "bg-ink-800 hairline"
                    }`}
                  >
                    <div className={`eyebrow ${i === 1 ? "text-white/80" : ""}`}>{p.cadence}</div>
                    <h3 className="mt-3 font-display text-3xl tracking-tightest">{p.name}</h3>
                    <div className="mt-6 flex items-baseline gap-2">
                      <span className="font-display text-5xl tracking-tightest">{p.price}</span>
                      {p.length && (
                        <span className={i === 1 ? "text-white/80" : "text-white/50"}>
                          / {p.length}
                        </span>
                      )}
                    </div>
                    {p.description && (
                      <p className={`mt-4 text-sm leading-relaxed ${i === 1 ? "text-white/90" : "text-white/60"}`}>
                        {p.description}
                      </p>
                    )}
                    <a
                      href={p.signupUrl}
                      target="_blank"
                      rel="noreferrer"
                      className={`mt-8 btn ${i === 1 ? "bg-black text-white hover:bg-white hover:text-black" : "btn-ghost"}`}
                    >
                      Sign Up
                    </a>
                  </div>
                ))}
              </div>
            );
          })()}

          <div className="mt-12 flex justify-center">
            <Link href="/membership" className="text-sm uppercase tracking-[0.25em] text-white/70 hover:text-white">
              See all 11 plans →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative h-[70vh] min-h-[520px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=2000&q=80"
          alt=""
          fill
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative mx-auto max-w-7xl px-6 h-full flex flex-col justify-center items-start">
          <div className="eyebrow">Affordable Membership — Starting at $20/mo</div>
          <h2 className="display mt-4 text-6xl md:text-9xl max-w-4xl">
            Stop thinking<br/>about it.
          </h2>
          <a href={site.signupUrl} target="_blank" rel="noreferrer" className="mt-10 btn btn-primary">
            Sign Up Now <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </>
  );
}
