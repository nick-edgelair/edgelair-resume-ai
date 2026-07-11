import Image from "next/image";

export default function BeforeAfter() {
  return (
    <section className="bg-[#171717] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <Image
          src="/images/before-after.png"
          alt="Resume transformation"
          width={1800}
          height={1000}
          className="w-full rounded-3xl"
        />

      </div>
    </section>
  );
}