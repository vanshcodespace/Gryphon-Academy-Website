export default function Brochure() {
  return (
    <section className="relative overflow-hidden bg-[#01224F] py-8 text-center text-white sm:py-10 lg:py-12">
      {/* Ambient glow orbs */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[#1b4f8f]/25 blur-[120px]" />
      <div className="pointer-events-none absolute -right-24 -bottom-24 h-112 w-96 rounded-full bg-[#3f8efc]/15 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Heading — centered */}
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-5xl leading-tight bg-linear-to-r from-white via-[#8ab4f0] to-[#5b91e3] bg-clip-text text-transparent">
          Everything You Need to Know.
        </h2>

        {/* Body text */}
        <p className="mt-4 mb-4 text-center text-base leading-relaxed text-gray-200 sm:text-lg lg:text-lg lg:leading-[1.6]">
          Download our programme brochure for a complete overview of our training modules, placement outcomes, institutional partnerships, and service offerings. Built for decision-makers who want the full picture before the conversation.
        </p>

        {/* CTAs */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {/* Primary button */}
          <a
            href="#"
            className="group relative overflow-hidden rounded-xl bg-white px-6 py-3 text-base font-semibold text-[#01224F] shadow-[0_0_30px_rgba(47,103,230,0.3)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(47,103,230,0.5)]"
          >
            <span className="relative z-10">Download Brochure</span>
            <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-[#2f67e6]/10 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
          </a>

          {/* Secondary text link */}
          <a
            href="#contact"
            className="rounded-xl border border-white/25 bg-white/5 px-6 py-3 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] hover:border-white/50 hover:bg-white/10"
          >
            Speak to Our Team Instead
          </a>
        </div>
      </div>
    </section>
  );
}
