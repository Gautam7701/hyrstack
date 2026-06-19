import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 text-center">
      <div className="grid-background opacity-60" />
      <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.045] p-8 shadow-2xl shadow-black/25 backdrop-blur-xl">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-200/70">
          404
        </p>
        <h1 className="mt-3 text-5xl font-semibold text-white">
          Page not found
        </h1>
        <p className="mt-4 max-w-md text-white/60">
          The page you are looking for does not exist or has moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex h-12 items-center justify-center rounded-xl bg-white px-6 text-sm font-semibold text-black hover:bg-sky-100"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}
