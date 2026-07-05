const steps = [
    {
      step: "01",
      title: "Upload Resume",
      text: "Upload your current PDF or DOCX resume.",
    },
    {
      step: "02",
      title: "AI Understands Your Profile",
      text: "We read your experience, skills, achievements and career direction.",
    },
    {
      step: "03",
      title: "We Remove The Noise",
      text: "Repeated content, weak bullets and unnecessary details are removed.",
    },
    {
      step: "04",
      title: "One Page Resume Is Created",
      text: "You get a clear, recruiter ready, ATS friendly resume.",
    },
  ];
  
  export default function HowItWorks() {
    return (
      <section id="how" className="bg-white px-8 py-20 text-slate-950">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-extrabold uppercase tracking-widest text-orange-500">
              How It Works
            </p>
            <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-black lg:text-5xl">
              From long resume to sharp one page profile in minutes.
            </h2>
          </div>
  
          <div className="mt-14 grid gap-6 md:grid-cols-4">
            {steps.map((item) => (
              <div
                key={item.step}
                className="rounded-3xl border border-slate-200 p-8 shadow-sm"
              >
                <p className="text-4xl font-black text-orange-500">
                  {item.step}
                </p>
                <h3 className="mt-6 text-xl font-black">{item.title}</h3>
                <p className="mt-4 text-sm font-medium leading-7 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }