import Link from "next/link";

export const metadata = { title: "Join — Grand Rapids City Gym" };

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 pt-24 pb-16">
      <div className="w-full max-w-md">
        <div className="eyebrow">Join</div>
        <h1 className="display text-6xl mt-4">Create account.</h1>
        <form className="mt-10 space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <input placeholder="First name" className="bg-transparent border-b hairline py-3 focus:outline-none focus:border-white" />
            <input placeholder="Last name" className="bg-transparent border-b hairline py-3 focus:outline-none focus:border-white" />
          </div>
          <input type="email" placeholder="Email" className="w-full bg-transparent border-b hairline py-3 focus:outline-none focus:border-white" />
          <input type="password" placeholder="Password" className="w-full bg-transparent border-b hairline py-3 focus:outline-none focus:border-white" />
          <Link href="/portal" className="btn btn-primary w-full justify-center">
            Create account
          </Link>
        </form>
        <div className="mt-8 text-xs uppercase tracking-[0.25em] text-white/50 text-center">
          Already a member? <Link href="/portal/login" className="hover:text-white">Sign in</Link>
        </div>
      </div>
    </div>
  );
}
