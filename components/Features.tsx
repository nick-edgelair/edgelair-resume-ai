const features = [
    {
      title: "One Page. Zero Compromise.",
      text: "We compress long resumes into the shortest effective format while keeping what matters.",
    },
    {
      title: "Highlights What Matters.",
      text: "EdgeLair AI identifies achievements, strengths, leadership, skills and measurable impact.",
    },
    {
      title: "Built For Recruiters.",
      text: "The resume is designed for fast scanning, clear structure and quick decision making.",
    },
    {
      title: "ATS Friendly.",
      text: "Clean sections, strong keywords and simple structure help modern screening systems understand your profile.",
    },
    {
      title: "Your Story. Better Told.",
      text: "We do not invent experience. We present your real experience in a stronger way.",
    },
    {
      title: "Global Ready.",
      text: "Suitable for professionals applying across India, Singapore, UK, Europe, Australia and more.",
    },
  ];
  
  export default function Features() {
    return (
      <section id="features" className="bg-[#080808] px-8 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-extrabold uppercase tracking-widest text-orange-500">
              Why EdgeLair Resume AI
            </p>
            <h2 className="mt-4 text-4xl font-black lg:text-5xl">
              Your resume should explain your value before the recruiter moves on.
            </h2>
          </div>
  
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-3xl border border-zinc-800 bg-white/5 p-8"
              >
                <h3 className="text-xl font-black text-white">{feature.title}</h3>
                <p className="mt-4 text-sm font-medium leading-7 text-zinc-400">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }