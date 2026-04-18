export default function MySchedule() {
  const items = [
    { date: "Mon Oct 14", time: "6:00 AM", name: "Strength", coach: "Alex" },
    { date: "Wed Oct 16", time: "5:30 PM", name: "Conditioning", coach: "Jordan" },
    { date: "Fri Oct 18", time: "6:00 AM", name: "Conditioning", coach: "Jordan" },
    { date: "Sat Oct 19", time: "8:00 AM", name: "Conditioning", coach: "Jordan" },
  ];
  return (
    <div>
      <div className="eyebrow">My schedule</div>
      <h1 className="display text-6xl md:text-8xl mt-4">What's next.</h1>
      <ul className="mt-12 divide-y divide-white/10 border hairline">
        {items.map((i, idx) => (
          <li key={idx} className="p-5 flex items-center justify-between">
            <div>
              <div className="eyebrow">{i.date} · {i.time}</div>
              <div className="font-display text-2xl mt-1">{i.name}</div>
              <div className="text-xs text-white/40 uppercase tracking-widest mt-1">w/ {i.coach}</div>
            </div>
            <button className="btn btn-ghost !py-2 !px-4 text-xs">Cancel</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
