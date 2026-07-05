const plans = [
    {
      name: "Free",
      price: "$0",
      text: "Try one resume transformation.",
      cta: "Start Free",
    },
    {
      name: "Professional",
      price: "$2",
      text: "Best for serious job seekers.",
      cta: "Get Started",
      highlighted: true,
    },
    {
      name: "Unlimited",
      price: "$7",
      text: "For multiple roles and versions.",
      cta: "Go Unlimited",
    },
  ];
  
  export default function Pricing() {
    return (
      <section id="pricing" className="bg-white px-8 py-20 text-slate-950">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-extrabold uppercase tracking-widest text-orange-500">
              Pricing
            </p>
            <h2 className="mt-4 text-4xl font-black lg:text-5xl">
              Start simple. Upgrade when you are ready.
            </h2>
          </div>
  
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-3xl border p-8 ${
                  plan.highlighted
                    ? "border-orange-500 bg-[#080808] text-white"
                    : "border-slate-200 bg-white"
                }`}
              >
                <h3 className="text-2xl font-black">{plan.name}</h3>
                <p className="mt-5 text-5xl font-black text-orange-500">
                  {plan.price}
                </p>
                <p
                  className={`mt-4 text-sm font-medium leading-7 ${
                    plan.highlighted ? "text-zinc-300" : "text-slate-600"
                  }`}
                >
                  {plan.text}
                </p>
                <button className="mt-8 w-full rounded-2xl bg-orange-500 px-6 py-4 text-sm font-extrabold text-white">
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }