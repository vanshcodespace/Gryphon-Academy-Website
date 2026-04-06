import React from "react";
import mapIcon from "../../assets/MAP-PNG.png";

export default function Numbers() {
  const stats = [
    { number: "65,000+", label: "Total Training\nHours Delivered" },
    { number: "70,000+", label: "Total Students\nTrained" },
    { number: "55+", label: "College Partners" },
    { number: "450+", label: "Hiring Partners" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f0f7ff] via-[#ffffff] to-[#f8fbff] py-16 sm:py-20 lg:py-24">
      {/* Decorative Background Blob Effects */}
      <div className="pointer-events-none absolute -left-40 top-0 h-125 w-125 rounded-full bg-[#a2d5f4]/40 blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-100 w-100 rounded-full bg-[#ceecf7]/30 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 xl:max-w-340">
        <h2
          className="mb-16 text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-[4rem]"
          style={{
            background: "linear-gradient(to right, #1B3A6B, #7B1B2A)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Our Impact, In Numbers
        </h2>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24">
          {/* Left Column: Center Map Container */}
          <div className="relative flex min-h-120 flex-col items-center justify-center rounded-3xl border-3 border-[#1B3A6B]/40 bg-gradient-to-br from-[#1B3A6B] via-[#0d1b3e] to-[#00083D] p-12 shadow-[0_25px_70px_rgba(0,8,61,0.3)] backdrop-blur-2xl lg:min-h-140">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-[#ffffff]/5 via-transparent to-[#ffffff]/10" />
            <div className="relative z-10 flex h-full w-full items-center justify-center">
              <img
                src={mapIcon}
                alt="Map of India showing our presence"
                className="h-auto w-full max-w-lg object-contain transition-transform duration-700 hover:scale-125 filter drop-shadow-[0_20px_45px_rgba(255,255,255,0.2)]"
              />
            </div>
          </div>

          {/* Right Column: 2x2 Stats Grid */}
          <div className="grid grid-cols-2 text-center gap-6 lg:gap-7">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative flex flex-col items-center justify-center overflow-hidden rounded-3xl border-2 border-[#1B3A6B]/20 bg-gradient-to-br from-[#ffffff] to-[#f5f9ff] px-6 py-8 shadow-[0_8px_32px_rgba(27,58,107,0.12)] transition-all duration-500 hover:shadow-[0_20px_50px_rgba(27,58,107,0.25)] hover:scale-110 md:px-8 md:py-10"
              >
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1B3A6B]/5 to-[#7B1B2A]/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                
                <span className="relative z-10 text-4xl font-extrabold leading-tight text-[#1B3A6B] md:text-5xl lg:text-[2.8rem] transition-colors duration-300 group-hover:text-[#7B1B2A]">
                  {stat.number}
                </span>
                <span className="relative z-10 mt-4 whitespace-pre-line text-xs font-bold uppercase tracking-widest text-[#01224F] md:text-sm lg:text-base transition-colors duration-300 group-hover:text-[#7B1B2A]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
