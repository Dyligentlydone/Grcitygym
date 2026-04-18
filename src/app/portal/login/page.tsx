import Link from "next/link";

export const metadata = { title: "Member Login — Grand Rapids City Gym" };

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 pt-24">
      <div className="w-full max-w-md">
        <div className="eyebrow">Member</div>
        <h1 className="display text-6xl mt-4">Sign in.</h1>
        <form className="mt-10 space-y-5">
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-transparent border-b hairline py-3 focus:outline-none focus:border-white"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full bg-transparent border-b hairline py-3 focus:outline-none focus:border-white"
          />
          <Link href="/portal" className="btn btn-primary w-full justify-center">
            Continue
          </Link>
        </form>
        <div className="mt-8 flex justify-between text-xs uppercase tracking-[0.25em] text-white/50">
          <Link href="/portal/signup" className="hover:text-white">Create account</Link>
          <Link href="#" className="hover:text-white">Forgot password</Link>
        </div>
      </div>
    </div>
  );
}
