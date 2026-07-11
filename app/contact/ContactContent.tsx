import Link from "next/link";

export default function ContactContent() {
  return (
    <>
      <section className="bg-[#171717] px-6 py-16 text-white sm:px-8 lg:py-20">
        <div className="mx-auto max-w-[900px] text-center">
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-orange-500">
            Contact
          </p>

          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
            How can we help?
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-8 text-zinc-400">
            Contact us for AI Resume support, feedback, privacy requests, data
            deletion, or general questions.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-14 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-[900px]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 text-center shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-12">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-50 text-3xl font-black text-orange-500">
              @
            </div>

            <p className="mt-7 text-sm font-extrabold uppercase tracking-[0.16em] text-orange-500">
              Email Support
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">
              We are here to help
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm font-medium leading-7 text-slate-600 sm:text-base">
              For product support, feedback, privacy questions, or requests to
              delete your resume data, contact us using the email below.
            </p>

            <a
              href="mailto:support@edgelair.com"
              className="mt-8 inline-flex items-center justify-center rounded-xl bg-orange-500 px-7 py-4 text-sm font-extrabold text-white shadow-lg shadow-orange-200 transition hover:bg-orange-600"
            >
              Email support@edgelair.com
            </a>

            <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-slate-200 bg-slate-50 p-5 text-left">
              <p className="text-sm font-black text-slate-950">
                When contacting us
              </p>

              <p className="mt-2 text-xs font-medium leading-6 text-slate-600 sm:text-sm">
                Please include a short description of the issue. Do not send
                passwords, banking information, government identification
                numbers, or other highly sensitive information.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-extrabold text-slate-700 transition hover:text-orange-500"
            >
              <span>←</span>
              Back to AI Resume
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}