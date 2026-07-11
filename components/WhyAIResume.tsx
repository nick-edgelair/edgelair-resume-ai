import Image from "next/image";

const reasons = [
  {
    number: "01",
    title: "One Page. Zero Compromise.",
    text: "AI Resume keeps your strongest experience and removes unnecessary repetition, so your resume stays focused and easy to understand.",
  },
  {
    number: "02",
    title: "Highlights What Matters.",
    text: "Your achievements, skills, leadership, responsibilities, and measurable results are given the attention they deserve.",
  },
  {
    number: "03",
    title: "ATS Friendly Structure.",
    text: "Clear sections, readable formatting, and relevant keywords help modern screening systems understand your profile.",
  },
  {
    number: "04",
    title: "Built for Recruiters.",
    text: "The layout is designed for quick scanning, so recruiters can find your most important experience without searching through several pages.",
  },
  {
    number: "05",
    title: "Create or Transform.",
    text: "Build a new resume from scratch or transform your existing PDF or DOCX resume into a stronger professional version.",
  },
  {
    number: "06",
    title: "Your Story. Better Told.",
    text: "AI Resume improves the structure and presentation of your real experience. It does not invent qualifications or achievements.",
  },
];

export default function WhyAIResume() {
  return (
    <section
      id="features"
      className="bg-[#171717] px-6 py-16 text-white sm:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-[1380px]">
        <div className="grid gap-10 lg:grid-cols-[38%_62%] lg:items-center">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-orange-500">
              Why AI Resume
            </p>

            <h2 className="mt-4 max-w-xl text-4xl font-black leading-[1.06] tracking-tight sm:text-5xl lg:text-[3.5rem]">
              Everything your resume needs.
              <span className="text-orange-500">
                {" "}
                Nothing it does not.
              </span>
            </h2>

            <p className="mt-6 max-w-lg text-base font-medium leading-8 text-zinc-400">
              AI Resume presents your experience clearly, improves readability,
              and helps recruiters notice your strongest value faster.
            </p>

            <div className="mt-7 rounded-3xl border border-zinc-800 bg-white/[0.04] p-6">
              <p className="text-sm font-bold leading-7 text-zinc-300 sm:text-base">
                A long resume does not always communicate more value. A focused
                resume helps recruiters understand your experience, skills, and
                impact without losing the information that matters.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-black shadow-[0_24px_70px_rgba(0,0,0,0.45)]">
            <Image
              src="/images/Before-after.png"
              alt="Comparison between an original multi page resume and an AI Resume one page result"
              width={1800}
              height={1000}
              className="h-auto w-full object-contain"
            />
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <article
              key={reason.title}
              className="group rounded-3xl border border-zinc-800 bg-white/[0.04] p-7 transition duration-300 hover:-translate-y-1 hover:border-orange-500/50 hover:bg-white/[0.06]"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-500/10 text-sm font-black text-orange-500">
                  {reason.number}
                </span>

                <span className="h-2.5 w-2.5 rounded-full bg-zinc-700 transition group-hover:bg-orange-500" />
              </div>

              <h3 className="mt-6 text-xl font-black leading-7 text-white">
                {reason.title}
              </h3>

              <p className="mt-4 text-sm font-medium leading-7 text-zinc-400">
                {reason.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}