import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="get-started"
      className="relative overflow-hidden bg-[#171717] text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_35%,rgba(249,115,22,0.18),transparent_36%)]" />

      <div className="relative mx-auto grid max-w-[1380px] gap-10 px-6 py-12 sm:px-8 lg:grid-cols-[40%_60%] lg:items-start lg:py-14">
        <div className="max-w-[555px]">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/40 bg-orange-500/10 px-4 py-2">
            <span className="text-sm font-black text-orange-500">✦</span>

            <span className="text-xs font-extrabold uppercase tracking-wide text-orange-400">
              Free Beta
            </span>

            <span className="text-xs font-semibold text-zinc-300">
              No credit card required
            </span>
          </div>

          <h1 className="mt-7 text-[3.1rem] font-black leading-[1.03] tracking-tight sm:text-[3.7rem] lg:text-[3.95rem]">
            One Page.
            <br />
            All That Matters.
            <br />
            <span className="text-orange-500">Zero Unnecessary.</span>
          </h1>

          <p className="mt-6 max-w-[520px] text-base font-medium leading-7 text-zinc-300 sm:text-lg sm:leading-8">
            Upload your existing resume or create a new one. AI Resume finds
            what matters, removes the clutter, and creates a recruiter ready one
            page resume in minutes.
          </p>

          <p className="mt-7 text-sm font-extrabold text-white">
            Choose how you would like to get started
          </p>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <ActionCard
              icon="▤"
              title="Transform Existing Resume"
              description="Upload your current resume and turn it into a focused, recruiter ready one pager."
              buttonText="Upload Resume"
              note="Supports PDF and DOCX"
              href="/optimize"
            />

            <ActionCard
              icon="✦"
              title="Create Resume From Scratch"
              description="Answer a few simple questions and let AI create your professional resume."
              buttonText="Create Resume"
              note="No existing resume needed"
              href="/create"
            />
          </div>
          <EarlyUsers />

          <p className="mt-5 text-sm font-semibold text-zinc-400">
            Designed to help recruiters understand your experience quickly.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <div className="relative">
            <div className="absolute inset-4 rounded-[3rem] bg-orange-500/10 blur-3xl" />

            <div className="relative w-full overflow-hidden rounded-[1.7rem] border border-white/10 bg-white p-1.5 shadow-[0_28px_80px_rgba(0,0,0,0.58)]">
              <Image
                src="/images/resume-preview.png"
                alt="AI Resume one page resume example"
                width={1600}
                height={1000}
                className="h-auto w-full rounded-[1.35rem] object-contain"
                priority
              />
            </div>
          </div>

          <ResumeAnalysis />
        </div>
      </div>
    </section>
  );
}

type ActionCardProps = {
  icon: string;
  title: string;
  description: string;
  buttonText: string;
  note: string;
  href: string;
};

function ActionCard({
  icon,
  title,
  description,
  buttonText,
  note,
  href,
}: ActionCardProps) {
  return (
    <article className="flex min-h-[260px] flex-col rounded-3xl border border-zinc-700 bg-white/[0.05] p-5 text-center shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-orange-500/70 hover:bg-white/[0.07]">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10 text-2xl font-black text-orange-500">
        {icon}
      </div>

      <h2 className="mt-4 text-base font-black leading-6 text-white">
        {title}
      </h2>

      <p className="mt-3 flex-1 text-sm font-medium leading-6 text-zinc-300">
        {description}
      </p>

      <Link
        href={href}
        className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-orange-500 px-4 py-3 text-sm font-extrabold text-white shadow-lg shadow-orange-950/30 transition hover:bg-orange-600"
      >
        {buttonText}
      </Link>

      <p className="mt-3 text-xs font-semibold text-zinc-500">{note}</p>
    </article>
  );
}

function EarlyUsers() {
  const users = [
    "/images/users/user1.png",
    "/images/users/user2.png",
    "/images/users/user3.png",
    "/images/users/user4.png",
  ];

  return (
    <div className="mt-7 flex flex-wrap items-center gap-4">
      <div className="flex items-center">
        {users.map((src, index) => (
          <div
            key={src}
            className={`relative h-12 w-12 overflow-hidden rounded-full border-2 border-[#171717] bg-zinc-700 ${
              index === 0 ? "" : "-ml-3"
            }`}
          >
            <Image
              src={src}
              alt={`Early user ${index + 1}`}
              fill
              sizes="48px"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <div>
        <div className="flex gap-1 text-lg text-orange-500">
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
        </div>

        <p className="mt-1 text-sm font-semibold text-zinc-300">
          Loved by early users
        </p>
      </div>
    </div>
  );
}

function ResumeAnalysis() {
  const improvements = [
    "One page optimized",
    "ATS friendly structure",
    "Important achievements highlighted",
    "Professional formatting applied",
    "Clear and easy to scan",
  ];

  return (
    <div className="rounded-3xl border border-zinc-700 bg-white/[0.05] p-6 shadow-xl shadow-black/20">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-500/10 text-xl text-orange-500">
              ✦
            </div>

            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-orange-500">
                AI Resume Analysis
              </p>

              <h2 className="mt-1 text-xl font-black text-white">
                Analysis complete
              </h2>
            </div>
          </div>
        </div>

        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />

          <span className="text-xs font-extrabold text-emerald-300">
            Recruiter ready
          </span>
        </div>
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-[60%_40%]">
        <div className="grid gap-3 sm:grid-cols-2">
          {improvements.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-2xl border border-zinc-700 bg-black/20 px-4 py-3"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-500/10 text-sm font-black text-orange-500">
                ✓
              </span>

              <p className="text-sm font-bold text-zinc-200">{item}</p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-orange-500/20 bg-orange-500/[0.06] p-5">
          <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-orange-500">
            Designed for fast review
          </p>

          <p className="mt-3 text-3xl font-black text-white">
            8 to 15 sec
          </p>

          <p className="mt-2 text-sm font-medium leading-6 text-zinc-400">
            Estimated time for an initial recruiter scan of the optimized
            layout.
          </p>

          <div className="mt-5 border-t border-zinc-700 pt-4">
            <p className="text-sm font-bold text-white">
              Your strongest experience appears first.
            </p>

            <p className="mt-2 text-xs font-medium leading-5 text-zinc-400">
              Clear sections help recruiters find relevant skills and
              achievements faster.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}