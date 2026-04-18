import Link from "next/link";

export default function PortalHome() {
  const upcoming = [
    { date: "Tomorrow", time: "6:00 AM", name: "Strength", coach: "Alex" },
    { date: "Thu", time: "5:30 PM", name: "Boxing", coach: "Devon" },
  ];
  return (
    <div>
      <div className="eyebrow">Dashboard</div>
      <h1 className="display text-6xl md:text-8xl mt-4">Hey, Member.</h1>

      <div className="mt-12 grid md:grid-cols-3 gap-6">
        <Stat k="7" v="Day streak" />
        <Stat k="14" v="Sessions this month" />
        <Stat k="Unlimited" v="Current plan" />
      </div>

      <div className="mt-16">
        <div className="flex items-end justify-between">
          <h2 className="font-display text-4xl">Upcoming</h2>
          <Link href="/portal/book" className="text-sm uppercase tracking-[0.25em] text-white/60 hover:text-white">
            Book more →
          </Link>
        </div>
        <div className="mt-6 divide-y divide-white/10 border hairline">
          {upcoming.map((u, i) => (
            <div key={i} className="flex items-center justify-between p-5">
              <div>
                <div className="eyebrow">{u.date} · {u.time}</div>
                <div className="font-display text-2xl">{u.name}</div>
                <div className="text-xs text-white/40 uppercase tracking-widest mt-1">w/ {u.coach}</div>
              </div>
              <button className="btn btn-ghost !py-2 !px-4 text-xs">Cancel</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div className="p-6 border hairline">
      <div className="font-display text-5xl tracking-tightest">{k}</div>
      <div className="eyebrow mt-2">{v}</div>
    </div>
  );
}
