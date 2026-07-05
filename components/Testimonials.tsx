const testimonials = [
    {
      name: "Rohit Tanwar",
      role: "Technical Consulting Engineer",
      text: "The resume became much easier to scan. The strongest achievements were visible immediately.",
    },
    {
      name: "Priyanka Maurya",
      role: "Marketing Strategist",
      text: "It helped present my business growth and marketing experience in a much sharper way.",
    },
    {
      name: "Anonymous Candidate",
      role: "Product Manager",
      text: "My old resume was too long. The new version looked focused, modern and recruiter friendly.",
    },
  ];
  
  export default function Testimonials() {
    return (
      <section id="examples" className="bg-[#080808] px-8 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-extrabold uppercase tracking-widest text-orange-500">
              Real Impact
            </p>
            <h2 className="mt-4 text-4xl font-black lg:text-5xl">
              Built for people who want their experience understood quickly.
            </h2>
          </div>
  
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <div
                key={item.name}
                className="rounded-3xl border border-zinc-800 bg-white/5 p-8"
              >
                <p className="text-sm font-medium leading-7 text-zinc-300">
                  “{item.text}”
                </p>
                <div className="mt-8">
                  <p className="font-black text-white">{item.name}</p>
                  <p className="mt-1 text-sm font-semibold text-orange-500">
                    {item.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }