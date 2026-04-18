"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/lib/data";
import clsx from "clsx";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled ? "bg-black/80 backdrop-blur border-b hairline" : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/LOGO.png"
            alt={site.name}
            width={120}
            height={40}
            priority
            className="h-8 w-auto object-contain"
          />
          <span className="hidden sm:block text-[10px] uppercase tracking-[0.3em] text-white/50">
            Grand Rapids
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-xs uppercase tracking-[0.2em] text-white/70 hover:text-white transition"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href={site.loginUrl} target="_blank" rel="noreferrer" className="text-xs uppercase tracking-[0.2em] text-white/70 hover:text-white">
            Member
          </a>
          <Link href="/membership" className="btn btn-primary !py-2 !px-4">
            Join
          </Link>
        </div>

        <button className="md:hidden p-2" aria-label="menu" onClick={() => setOpen((v) => !v)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t hairline bg-black">
          <div className="px-6 py-6 flex flex-col gap-4">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="text-sm uppercase tracking-[0.2em] text-white/80"
                onClick={() => setOpen(false)}
              >
                {n.label}
              </Link>
            ))}
            <a href={site.loginUrl} target="_blank" rel="noreferrer" className="text-sm uppercase tracking-[0.2em] text-white/60">
              Member Login
            </a>
            <Link href="/membership" className="btn btn-primary w-fit" onClick={() => setOpen(false)}>
              Join
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
