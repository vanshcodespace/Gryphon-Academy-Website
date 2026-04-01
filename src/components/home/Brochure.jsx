export default function Brochure() {
  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20">
      {/* Subtle top-right light blue glow */}
      <div className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full bg-[#cce0fc]/50 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-[#cce0fc]/30 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        {/* Heading — centered */}
        <h2
          className="whitespace-nowrap text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl lg:text-[2.2rem]"
          style={{
            background: "linear-gradient(to right, #1B3A6B, #7B1B2A)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            display: "block",
          }}
        >
          Everything You Need to Know - In One Document.
        </h2>

        {/* Body text */}
        <p className="mt-5 text-base leading-relaxed text-[#1a1a2e] sm:text-lg">
          Download our programme brochure for a complete overview of our training modules,
          <br className="hidden sm:block" />
          placement outcomes, institutional partnerships, and service offerings.
          <br />
          Built for decision-makers who want the full picture before the conversation.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
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
