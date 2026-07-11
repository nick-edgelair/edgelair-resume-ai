const steps = [
  {
    number: "1",
    icon: "⇧",
    title: "Upload or Create",
    text: "Upload your existing resume or answer a few simple questions to get started.",
  },
  {
    number: "2",
    icon: "✦",
    title: "AI Analyzes",
    text: "AI Resume understands your experience, skills, achievements, and career background.",
  },
  {
    number: "3",
    icon: "▤",
    title: "Resume Generated",
    text: "Your information is organized into a clean, ATS friendly, recruiter ready one page resume.",
  },
  {
    number: "4",
    icon: "◉",
    title: "Preview Instantly",
    text: "Review the result, check every section, and make changes before downloading.",
  },
  {
    number: "5",
    icon: "↓",
    title: "Download and Share",
    text: "Verify your email, download your resume, and receive a copy in your inbox.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-white px-6 py-16 text-slate-950 sm:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-[1380px]">
        <div className="text-center">
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-orange-500">
            Simple Process
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
            How <span className="text-orange-500">AI Resume</span> Works
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm font-medium leading-7 text-slate-600 sm:text-base">
            Create a new resume or transform your current one through five
            simple steps.
          </p>
        </div>

        <div className="relative mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          <div className="pointer-events-none absolute left-[10%] right-[10%] top-[52px] hidden border-t-2 border-dotted border-orange-300 lg:block" />

          {steps.map((step, index) => (
            <article
              key={step.number}
              className="relative rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-[0_18px_45px_rgba(15,23,42,0.07)] transition duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-[0_22px_55px_rgba(249,115,22,0.12)]"
            >
              <div className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-2xl border border-slate-200 bg-white text-3xl font-black text-slate-950 shadow-md">
                {step.icon}
              </div>

              <div className="relative z-10 mx-auto -mt-3 flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-sm font-black text-white shadow-lg shadow-orange-200">
                {step.number}
              </div>

              <h3 className="mt-5 text-lg font-black text-slate-950">
                {step.title}
              </h3>

              <p className="mt-3 text-sm font-medium leading-6 text-slate-600">
                {step.text}
              </p>

              {index < steps.length - 1 && (
                <span className="mt-5 inline-block text-xl font-black text-orange-500 lg:hidden">
                  ↓
                </span>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}