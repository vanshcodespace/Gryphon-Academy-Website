/* eslint-disable jsx-a11y/no-static-element-interactions */

export default function CTA() {

  return (
    <section
      className="relative overflow-hidden bg-[#01224F] py-8 text-center text-white sm:py-12 md:py-14"
    >
      {/* Ambient glow orbs */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[#1b4f8f]/25 blur-[120px]" />
      <div className="pointer-events-none absolute -right-24 -bottom-24 h-112 w-md rounded-full bg-[#3f8efc]/15 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-6">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-3xl">
          <span className="block text-white">Your Students Are Ready to Be Trained.</span>
          <span className="mt-2 block bg-linear-to-r from-white via-[#8ab4f0] to-[#5b91e3] bg-clip-text text-transparent">
            Your Next Hire Is Already in Our Network.
          </span>
        </h2>

        <p className="mt-4 text-center text-justify text-base sm:text-lg text-gray-200">
          Whether you are looking to partner as an institution, recruit as an organisation, or begin your professional journey as a student, the next step is one conversation away.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <a
            href="#contact"
            className="group relative overflow-hidden rounded-xl bg-white px-6 py-3 text-base font-semibold text-[#01224F] shadow-[0_0_30px_rgba(47,103,230,0.3)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(47,103,230,0.5)]"
          >
            <span className="relative z-10">Partner With Us</span>
            <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-[#2f67e6]/10 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
          </a>

          <span className="hidden text-xl text-[#3a6aa8] sm:inline">·</span>

          <a
            href="#contact"
            className="rounded-xl border border-white/25 bg-white/5 px-6 py-3 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] hover:border-white/50 hover:bg-white/10"
          >
            Register as a Hiring Partner
          </a>

          <span className="hidden text-xl text-[#3a6aa8] sm:inline">·</span>

          <a
            href="#contact"
            className="rounded-xl border border-white/25 bg-white/5 px-6 py-3 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] hover:border-white/50 hover:bg-white/10"
          >
            I Am a Student
          </a>
        </div>
      </div>
    </section>
  );
}