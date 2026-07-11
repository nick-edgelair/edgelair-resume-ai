import Link from "next/link";

export default function TermsHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-[74px] max-w-[1380px] items-center justify-between px-6 sm:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="text-3xl font-black leading-none tracking-[-0.06em] text-black sm:text-4xl">
            Edge<span className="text-orange-500">lair</span>
          </span>

          <span className="text-sm font-bold text-slate-600">
            AI Resume
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-bold text-slate-700 lg:flex">
          <Link
            href="/#how-it-works"
            className="transition hover:text-orange-500"
          >
            How AI Resume Works
          </Link>

          <Link
            href="/#features"
            className="transition hover:text-orange-500"
          >
            Features
          </Link>

          <Link
            href="/#faq"
            className="transition hover:text-orange-500"
          >
            FAQ
          </Link>
        </nav>

        <Link
          href="/#get-started"
          className="rounded-xl bg-orange-500 px-5 py-3 text-sm font-extrabold text-white shadow-lg shadow-orange-200 transition hover:bg-orange-600"
        >
          Get Started Free
        </Link>
      </div>
    </header>
  );
}