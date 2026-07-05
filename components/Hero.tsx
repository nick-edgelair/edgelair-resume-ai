import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[#080808] px-8 py-20 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[38%_62%]">
        <div>
          <p className="mb-8 inline-flex rounded-full border border-orange-500 px-5 py-2 text-xs font-extrabold uppercase tracking-widest text-orange-400">
            AI Powered • Recruiter Focused
          </p>

          <h1 className="text-5xl font-black leading-tight lg:text-7xl">
            One Page.
            <br />
            All That Matters.
            <br />
            <span className="text-orange-500">Zero Unnecessary.</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg font-medium leading-8 text-zinc-300">
            Upload your existing resume. EdgeLair AI finds what matters, removes
            the clutter, and creates a recruiter ready one page resume in
            seconds.
          </p>

          <div className="mt-10 flex gap-5">
            <button className="rounded-2xl bg-orange-500 px-8 py-4 text-sm font-extrabold text-white shadow-xl shadow-orange-900/40">
              Transform My Resume Now
            </button>

            <button className="rounded-2xl border border-zinc-600 px-8 py-4 text-sm font-extrabold text-white">
              View Sample Resume
            </button>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-5">
            <Card title="One Page" text="Smartly compressed" />
            <Card title="ATS Friendly" text="Higher match score" />
            <Card title="More Interviews" text="Stand out to recruiters" />
          </div>
        </div>

        <div className="rounded-3xl bg-white p-4 shadow-2xl shadow-orange-950/50">
          <Image
            src="/images/resume-preview.png"
            alt="EdgeLair AI generated one page resume preview"
            width={1600}
            height={1000}
            className="w-full rounded-2xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}

function Card({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-white/5 p-5">
      <p className="text-sm font-black">{title}</p>
      <p className="mt-2 text-xs font-semibold text-zinc-400">{text}</p>
    </div>
  );
}