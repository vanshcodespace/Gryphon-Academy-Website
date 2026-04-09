/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from "react";

export default function CTA() {
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50, active: false });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setSpotlight({ x, y, active: true });
  };

  const handleMouseLeave = () => {
    setSpotlight((prev) => ({ ...prev, active: false }));
  };

  return (
    <section
      className="relative overflow-hidden bg-[#01224F] py-16 text-center text-white sm:py-24 md:py-28"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Ambient glow orbs */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[#1b4f8f]/25 blur-[120px]" />
      <div className="pointer-events-none absolute -right-24 -bottom-24 h-112 w-md rounded-full bg-[#3f8efc]/15 blur-[100px]" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2f67e6]/10 blur-[80px]" />

      {/* Spotlight grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: spotlight.active ? 1 : 0.4,
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(91,145,227,0.22) 0 1px, transparent 1px 34px), repeating-linear-gradient(60deg, rgba(91,145,227,0.24) 0 1px, transparent 1px 34px), repeating-linear-gradient(-60deg, rgba(91,145,227,0.24) 0 1px, transparent 1px 34px)",
          WebkitMaskImage: spotlight.active
            ? `radial-gradient(circle 220px at ${spotlight.x}% ${spotlight.y}%, #000 0%, #000 35%, transparent 100%)`
            : "none",
          maskImage: spotlight.active
            ? `radial-gradient(circle 220px at ${spotlight.x}% ${spotlight.y}%, #000 0%, #000 35%, transparent 100%)`
            : "none",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-5xl">
          <span className="block text-white">Your Students Are Ready to Be Trained.</span>
          <span className="mt-2 block bg-linear-to-r from-white via-[#8ab4f0] to-[#5b91e3] bg-clip-text text-transparent">
            Your Next Hire Is Already in Our Network.
          </span>
        </h2>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
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