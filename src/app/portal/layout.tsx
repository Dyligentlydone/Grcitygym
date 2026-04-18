import Link from "next/link";
import { CalendarDays, User, Dumbbell, LogOut } from "lucide-react";

export const metadata = { title: "Member Portal — Grand Rapids City Gym" };

export default function PortalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="pt-24 md:pt-28 min-h-screen">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-[240px_1fr] gap-10 pb-24">
        <aside className="border hairline p-6 h-fit sticky top-24">
          <div className="eyebrow">Member</div>
          <div className="mt-2 font-display text-2xl">Welcome back</div>

          <nav className="mt-8 space-y-1 text-sm">
            <PortalLink href="/portal" icon={User} label="Dashboard" />
            <PortalLink href="/portal/book" icon={CalendarDays} label="Book a class" />
            <PortalLink href="/portal/schedule" icon={Dumbbell} label="My schedule" />
            <PortalLink href="/portal/login" icon={LogOut} label="Sign out" />
          </nav>
        </aside>

        <section>{children}</section>
      </div>
    </div>
  );
}

function PortalLink({ href, icon: Icon, label }: { href: string; icon: React.ElementType; label: string }) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 px-3 py-2 text-white/70 hover:text-white hover:bg-white/5 rounded"
    >
      <Icon size={16} />
      {label}
    </Link>
  );
}
