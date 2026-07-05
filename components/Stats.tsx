const stats = [
    { value: "1 Page", label: "Recruiter ready output" },
    { value: "60 Sec", label: "Fast AI transformation" },
    { value: "ATS", label: "Friendly structure" },
    { value: "20 Pages", label: "Can be compressed smartly" },
  ];
  
  export default function Stats() {
    return (
      <section className="bg-[#080808] px-8 py-10 text-white">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.value}
              className="rounded-3xl border border-zinc-800 bg-white/5 p-7"
            >
              <p className="text-3xl font-black text-orange-500">{item.value}</p>
              <p className="mt-2 text-sm font-semibold text-zinc-300">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  }