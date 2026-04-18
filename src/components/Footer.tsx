import Link from "next/link";
import { site, nav } from "@/lib/data";
import { Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t hairline bg-black">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <h3 className="font-display text-4xl tracking-tightest">{site.name}</h3>
          <p className="mt-4 max-w-sm text-white/60 text-sm leading-relaxed">
            {site.tagline} Built for the people who show up — every day, every season.
          </p>
          <div className="mt-6 flex gap-3">
            <a href={site.socials.instagram} className="p-2 border hairline hover:border-white transition" aria-label="Instagram">
              <Instagram size={16} />
            </a>
            <a href={site.socials.facebook} className="p-2 border hairline hover:border-white transition" aria-label="Facebook">
              <Facebook size={16} />
            </a>
          </div>
        </div>

        <div>
          <div className="eyebrow">Explore</div>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {nav.map((n) => (
              <li key={n.href}><Link href={n.href} className="hover:text-white">{n.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <div className="eyebrow">Visit</div>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>{site.address}</li>
            <li>{site.phone}</li>
            <li>{site.email}</li>
            <li className="pt-2 text-white/50">{site.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t hairline">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row justify-between text-[11px] uppercase tracking-[0.25em] text-white/40">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <span>Made in Grand Rapids</span>
        </div>
      </div>
    </footer>
  );
}
