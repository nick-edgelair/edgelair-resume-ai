import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-white px-6 pb-10 pt-10 sm:px-8 sm:pt-12 lg:pb-12 lg:pt-14">
      <div className="mx-auto max-w-[1180px]">
        <div className="relative overflow-hidden rounded-2xl bg-orange-500 px-6 py-5 text-white shadow-[0_16px_40px_rgba(249,115,22,0.22)] sm:px-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_50%,rgba(255,255,255,0.16),transparent_28%)]" />

          <div className="relative flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white/15 text-2xl font-black">
                ✦
              </div>

              <div>
                <h2 className="text-xl font-black leading-tight sm:text-2xl">
                  Your experience deserves better presentation.
                </h2>

                <p className="mt-1 max-w-xl text-xs font-semibold leading-5 text-orange-50 sm:text-sm">
                  Upload your resume or create a new one and let AI Resume turn
                  your experience into a clear, recruiter ready one page resume.
                </p>
              </div>
            </div>

            <Link
              href="#get-started"
              className="inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-[#171717] px-6 py-3 text-sm font-extrabold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-black"
            >
              Transform My Resume Now
              <span className="text-lg">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}