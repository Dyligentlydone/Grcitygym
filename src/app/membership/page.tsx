import { planGroups, site, type Plan } from "@/lib/data";
import { Check, ArrowUpRight } from "lucide-react";

export const metadata = { title: "Membership — Grand Rapids City Gym" };

const faqs = [
  {
    q: "Are there contracts?",
    a: "No long-term contracts. The Monthly membership is month-to-month; paid-in-full plans simply expire at the end of their term. Cancel any time.",
  },
  {
    q: "When can I get in?",
    a: "Members have 24/7 keyed access. Staffed hours are 10am–7pm Monday–Friday and 10am–5pm weekends.",
  },
  {
    q: "What's the difference between monthly and paid-in-full?",
    a: "Monthly bills $48 each month with a one-time $30 signup fee. Paid-in-full plans charge once, have no signup fee, and unlock better per-month value the longer you commit.",
  },
  {
    q: "Can I try the gym first?",
    a: "Yes — our 3-Day Trial is free. You get three gym visits to use any time over two weeks.",
  },
];

export default function MembershipPage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-40 pb-20 mx-auto max-w-7xl px-6">
        <div className="eyebrow">Affordable Membership</div>
        <h1 className="display text-7xl md:text-[12rem] mt-4">Choose a<br/>Membership.</h1>
        <p className="mt-10 max-w-xl text-white/60 text-lg leading-relaxed">
          Every option includes 24/7 keyed access to the gym. Pick the plan that
          fits your life — from a free 3-day trial to a full year paid-in-full.
        </p>
      </section>

      {/* PLAN GROUPS */}
      <section className="mx-auto max-w-7xl px-6 space-y-24 pb-24">
        {planGroups.map((g) => (
          <div key={g.group}>
            <div className="grid md:grid-cols-12 gap-10 items-end mb-10 pb-6 border-b hairline">
              <div className="md:col-span-6">
                <div className="eyebrow">{g.group}</div>
                <h2 className="display text-5xl md:text-7xl mt-3">{g.group}</h2>
              </div>
              <p className="md:col-span-6 text-white/60 leading-relaxed max-w-lg md:justify-self-end">
                {g.blurb}
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {g.plans.map((p) => (
                <PlanCard key={p.signupUrl} plan={p} />
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* FAQ */}
      <section className="border-t hairline">
        <div className="mx-auto max-w-7xl px-6 py-24 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="eyebrow">FAQ</div>
            <h2 className="display mt-4 text-6xl">Questions.</h2>
          </div>
          <div className="md:col-span-8 divide-y divide-white/10">
            {faqs.map((f) => (
              <div key={f.q} className="py-6">
                <h3 className="font-display text-2xl">{f.q}</h3>
                <p className="mt-2 text-white/60 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t hairline">
        <div className="mx-auto max-w-7xl px-6 py-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="eyebrow">Still deciding?</div>
            <h2 className="display text-4xl md:text-6xl mt-3">Start with the free trial.</h2>
          </div>
          <a
            href={site.signupUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            Open signup portal <ArrowUpRight size={16} />
          </a>
        </div>
      </section>
    </>
  );
}

function PlanCard({ plan }: { plan: Plan }) {
  const featured = !!plan.featured;
  return (
    <div
      className={`relative p-8 border flex flex-col ${
        featured ? "bg-accent border-accent" : "bg-ink-800 hairline"
      }`}
    >
      {featured && (
        <span className="absolute top-4 right-4 text-[10px] uppercase tracking-[0.25em] bg-black text-white px-2 py-1">
          Popular
        </span>
      )}

      <div className={`eyebrow ${featured ? "text-white/80" : ""}`}>{plan.cadence}</div>

      <h3 className="mt-3 font-display text-3xl md:text-4xl tracking-tightest leading-tight">
        {plan.name}
      </h3>

      <div className="mt-6 flex items-baseline gap-2">
        <span className="font-display text-5xl tracking-tightest">{plan.price}</span>
        {plan.length && (
          <span className={featured ? "text-white/80" : "text-white/50"}>
            / {plan.length}
          </span>
        )}
      </div>

      {plan.signupFee && plan.signupFee !== "$0.00" && (
        <div className={`mt-2 text-xs ${featured ? "text-white/80" : "text-white/50"}`}>
          + {plan.signupFee} one-time signup fee
        </div>
      )}
      {plan.signupFee === "$0.00" || !plan.signupFee ? (
        <div className={`mt-2 text-xs ${featured ? "text-white/80" : "text-white/50"}`}>
          No signup fee
        </div>
      ) : null}

      {plan.description && (
        <p className={`mt-6 text-sm leading-relaxed ${featured ? "text-white/90" : "text-white/60"}`}>
          {plan.description}
        </p>
      )}

      <ul className={`mt-6 space-y-3 text-sm ${featured ? "text-white/90" : "text-white/70"}`}>
        <li className="flex items-start gap-2">
          <Check size={14} className={`mt-1 ${featured ? "text-white" : "text-accent"}`} />
          24/7 keyed access
        </li>
        <li className="flex items-start gap-2">
          <Check size={14} className={`mt-1 ${featured ? "text-white" : "text-accent"}`} />
          Full floor &amp; equipment
        </li>
      </ul>

      <a
        href={plan.signupUrl}
        target="_blank"
        rel="noreferrer"
        className={`mt-8 btn ${featured ? "bg-black text-white hover:bg-white hover:text-black" : "btn-ghost"}`}
      >
        Sign Up <ArrowUpRight size={14} />
      </a>
    </div>
  );
}
