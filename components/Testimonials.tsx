import Image from "next/image";

const testimonials = [
  {
    name: "Mukta S.",
    role: "Product Manager",
    image: "/images/users/user1.png",
    text: "AI Resume turned my messy resume into a clean, professional one page resume. The important parts became much easier to notice.",
  },
  {
    name: "Prateek.",
    role: "Software Engineer",
    image: "/images/users/user3.png",
    text: "The resume became clearer, more focused, and easier to scan. It presented my technical experience in a much stronger way.",
  },
  {
    name: "Priyanka.",
    role: "Marketing Specialist",
    image: "/images/users/user2.png",
    text: "The process was simple and the final resume looked modern and professional. My achievements were presented much better.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-white px-6 py-16 text-slate-950 sm:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-[1380px]">
        <div className="text-center">
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-orange-500">
            Early User Feedback
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
            Loved by <span className="text-orange-500">early users</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm font-medium leading-7 text-slate-600 sm:text-base">
            Feedback from people who have tested the first version of AI Resume.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_18px_45px_rgba(15,23,42,0.07)] transition duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-[0_22px_55px_rgba(249,115,22,0.12)]"
            >
              <div className="text-4xl font-black leading-none text-orange-500">
                “
              </div>

              <p className="mt-4 min-h-[112px] text-sm font-medium leading-7 text-slate-700">
                {testimonial.text}
              </p>

              <div className="mt-7 flex items-center gap-4 border-t border-slate-100 pt-6">
                <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-orange-100 bg-slate-100">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>

                <div>
                  <p className="text-sm font-black text-slate-950">
                    {testimonial.name}
                  </p>

                  <p className="mt-1 text-xs font-semibold text-slate-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}