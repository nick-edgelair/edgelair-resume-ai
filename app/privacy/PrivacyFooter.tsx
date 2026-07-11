import Link from "next/link";

export default function PrivacyFooter() {
  return (
    <footer className="border-t border-zinc-800 bg-[#090909] px-6 py-12 text-white sm:px-8">
      <div className="mx-auto max-w-[1180px]">
        <div className="grid gap-10 md:grid-cols-[1.4fr_0.8fr_0.8fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="text-3xl font-black tracking-[-0.06em] text-white">
                Edge<span className="text-orange-500">lair</span>
              </span>

              <span className="text-sm font-bold text-zinc-400">
                AI Resume
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm font-medium leading-6 text-zinc-400">
              One Page. All That Matters. Zero Unnecessary.
            </p>

            <p className="mt-3 max-w-sm text-sm font-medium leading-6 text-zinc-500">
              Create a new resume or transform your existing one into a clear,
              recruiter ready format.
            </p>
          </div>

          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-orange-500">
              Quick Links
            </p>

            <div className="mt-5 flex flex-col gap-3 text-sm font-semibold text-zinc-400">
              <Link
                href="/#how-it-works"
                className="transition hover:text-white"
              >
                How AI Resume Works
              </Link>

              <Link
                href="/#features"
                className="transition hover:text-white"
              >
                Features
              </Link>

              <Link
                href="/#faq"
                className="transition hover:text-white"
              >
                FAQ
              </Link>
            </div>
          </div>

          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-orange-500">
              Legal and Contact
            </p>

            <div className="mt-5 flex flex-col gap-3 text-sm font-semibold text-zinc-400">
              <Link
                href="/privacy"
                className="transition hover:text-white"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="transition hover:text-white"
              >
                Terms of Service
              </Link>

              <Link
                href="/contact"
                className="transition hover:text-white"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-zinc-800 pt-6">
          <p className="text-xs font-semibold text-zinc-500">
            © 2026 EdgeLair. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}