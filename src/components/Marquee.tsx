export function Marquee({ words }: { words: string[] }) {
  const content = [...words, ...words];
  return (
    <div className="relative overflow-hidden border-y hairline py-6 bg-black">
      <div className="flex gap-12 whitespace-nowrap marquee-track">
        {content.map((w, i) => (
          <span key={i} className="font-display text-5xl md:text-7xl tracking-tightest text-white/80">
            {w} <span className="text-accent">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
