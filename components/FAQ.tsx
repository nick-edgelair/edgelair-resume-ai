const faqs = [
    {
      q: "Will my resume always be one page?",
      a: "Our goal is the shortest effective format. For most users, that means one strong page.",
    },
    {
      q: "Will AI invent fake experience?",
      a: "No. EdgeLair Resume AI only improves presentation, structure and wording using your real experience.",
    },
    {
      q: "Is it ATS friendly?",
      a: "Yes. We keep the structure clear, simple and keyword friendly.",
    },
    {
      q: "Can I use it for global jobs?",
      a: "Yes. The output is designed for modern professional applications across global markets.",
    },
  ];
  
  export default function FAQ() {
    return (
      <section id="faq" className="bg-[#080808] px-8 py-20 text-white">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-sm font-extrabold uppercase tracking-widest text-orange-500">
              FAQ
            </p>
            <h2 className="mt-4 text-4xl font-black">
              Questions before you transform your resume?
            </h2>
          </div>
  
          <div className="mt-12 space-y-5">
            {faqs.map((item) => (
              <div
                key={item.q}
                className="rounded-3xl border border-zinc-800 bg-white/5 p-7"
              >
                <h3 className="text-lg font-black">{item.q}</h3>
                <p className="mt-3 text-sm font-medium leading-7 text-zinc-400">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }