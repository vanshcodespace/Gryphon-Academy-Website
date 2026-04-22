export default function Brochure() {
  return (
    <section className="relative bg-white py-8 sm:py-10 lg:py-12">
      {/* Subtle top-right light blue glow */}
      <div className="pointer-events-none absolute -top-32 -right-32 h-80 w-80 rounded-full bg-[#cce0fc]/50 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-[#cce0fc]/30 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        {/* Heading — centered */}
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-5xl leading-tight" style={{
          background: "linear-gradient(to right, #1B3A6B, #7B1B2A)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}>
          Everything You Need to Know.
        </h2>

        {/* Body text */}
        <p className="mt-2 mb-2 text-center text-base leading-relaxed text-[#2a3038] sm:text-lg lg:text-lg lg:leading-[1.6]">
          Download our programme brochure for a complete overview of our training modules, placement outcomes, institutional partnerships, and service offerings. Built for decision-makers who want the full picture before the conversation.
        </p>

        {/* CTAs */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
          {/* Primary button */}
          <a
            href="#"
            className="inline-block rounded-md bg-[#00083D] px-8 py-3.5 text-[15px] font-bold text-white shadow-md transition-all hover:bg-[#01224F]"
          >
            Download Brochure
          </a>

          {/* Secondary text link */}
          <a
            href="#contact"
            className="text-[15px] font-bold text-[#00083D] underline-offset-4 transition hover:underline"
          >
            Speak to Our Team Instead
          </a>
        </div>
      </div>
    </section>
  );
}
