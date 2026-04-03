import { useState } from "react";
import teamImage from "../../assets/Ps.png";

export default function WhoAreWe() {
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50, active: false });

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    setSpotlight({ x, y, active: true });
  };

  const handleMouseLeave = () => {
    setSpotlight((prev) => ({ ...prev, active: false }));
  };

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#eff4fa] py-16 sm:py-20 lg:py-24"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="pointer-events-none absolute -top-40 -left-24 h-96 w-96 rounded-full bg-[#cce0fc]/60 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-24 h-112 w-md rounded-full bg-[#bddefa]/50 blur-3xl" />
      <div
        className="pointer-events-none absolute inset-0 opacity-90 transition-opacity duration-300"
        style={{
          opacity: spotlight.active ? 1.0 : 0.2,
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(63,142,252,0.28) 0 1px, transparent 1px 34px), repeating-linear-gradient(60deg, rgba(63,142,252,0.35) 0 1px, transparent 1px 34px), repeating-linear-gradient(-60deg, rgba(63,142,252,0.35) 0 1px, transparent 1px 34px)",
          WebkitMaskImage: spotlight.active
            ? `radial-gradient(circle 220px at ${spotlight.x}% ${spotlight.y}%, #000 0%, #000 35%, transparent 100%)`
            : "none",
          maskImage: spotlight.active
            ? `radial-gradient(circle 220px at ${spotlight.x}% ${spotlight.y}%, #000 0%, #000 35%, transparent 100%)`
            : "none",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2
              className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-[4rem]"
              style={{
                background: "linear-gradient(to right, #1B3A6B, #7B1B2A)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Who We Are?
            </h2>

            <p className="mt-8 text-base text-justify leading-relaxed text-[#2a3038] sm:text-lg lg:text-[1.05rem] lg:leading-[1.8]">
              Gryphon Academy Pvt. Ltd. is a Pan-India professional training,
              placement facilitation, and institutional development organisation
              founded in 2020. We partner with MBA, Engineering, MCA, and
              Diploma institutions to embed structured, industry-aligned
              training directly into their academic curriculum - delivered
              entirely offline, on-campus, by 350+ certified industry
              practitioners. We are not a coaching institute. We are not an
              edtech platform. We are the operating bridge between academia and
              industry - training students inside their colleges, connecting
              institutions to corporate networks, and placing graduates with
              India&apos;s top employers at zero cost to all parties.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-block rounded-md bg-[#00083D] px-8 py-3.5 text-[15px] sm:text-base font-bold text-white transition-all hover:bg-[#01224F] shadow-lg"
            >
              Learn More
            </a>
          </div>

          <div className="flex items-end justify-center lg:justify-end">
            <img
              src={teamImage}
              alt="Gryphon Academy team members"
              className="max-h-120 w-auto object-contain drop-shadow-[0_20px_40px_rgba(1,34,79,0.15)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
