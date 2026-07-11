"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Is AI Resume free?",
    answer:
      "Yes. AI Resume is currently free during the beta period. No credit card is required.",
  },
  {
    question: "Can I upload my existing resume?",
    answer:
      "Yes. You can upload a PDF or DOCX resume and transform it into a clear, recruiter ready one page resume.",
  },
  {
    question: "Can I create a resume without an existing resume?",
    answer:
      "Yes. You can create a new resume from scratch by answering a few simple questions about your experience, skills, and education.",
  },
  {
    question: "Will AI Resume invent experience or qualifications?",
    answer:
      "No. AI Resume improves the wording, structure, and presentation of the information you provide. It does not create fake experience, skills, or qualifications.",
  },
  {
    question: "Is the final resume ATS friendly?",
    answer:
      "The resume uses a clean structure, readable sections, and clear formatting designed to work well with modern applicant tracking systems.",
  },
  {
    question: "How will I receive my resume?",
    answer:
      "After the resume is ready, you can preview it, verify your email address, download the file, and receive a copy by email.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  function toggleItem(index: number) {
    setOpenIndex((currentIndex) =>
      currentIndex === index ? null : index
    );
  }

  return (
    <section
      id="faq"
      className="bg-[#171717] px-6 py-16 text-white sm:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-[980px]">
        <div className="text-center">
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-orange-500">
            FAQ
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm font-medium leading-7 text-zinc-400 sm:text-base">
            Everything you need to know before creating or transforming your
            resume.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <article
                key={faq.question}
                className={`overflow-hidden rounded-2xl border transition duration-300 ${
                  isOpen
                    ? "border-orange-500/50 bg-white/[0.06]"
                    : "border-zinc-800 bg-white/[0.03] hover:border-zinc-700"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left sm:px-7"
                >
                  <span className="text-base font-black text-white sm:text-lg">
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-xl font-medium transition duration-300 ${
                      isOpen
                        ? "rotate-45 border-orange-500 bg-orange-500 text-white"
                        : "border-zinc-700 text-orange-500"
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="border-t border-zinc-800 px-6 py-5 text-sm font-medium leading-7 text-zinc-400 sm:px-7 sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}