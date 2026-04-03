import React from "react";
import mapIcon from "../../assets/image 7.png";

export default function Numbers() {
  const stats = [
    { number: "65,000+", label: "Total Training\nHours Delivered" },
    { number: "70,000+", label: "Total Students\nTrained" },
    { number: "55+", label: "College Partners" },
    { number: "450+", label: "Hiring Partners" },
  ];

  return (
    <section className="relative overflow-hidden bg-[#fafafa] py-16 sm:py-20 lg:py-24">
      {/* Decorative Background Blob Effects */}
      <div className="pointer-events-none absolute -left-40 top-0 h-125 w-125 rounded-full bg-[#cce0fc]/50 blur-[100px]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-100 w-100 rounded-full bg-[#3a10b9ff]/10 blur-[100px]" />

      {/* Subtle Pattern Overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40 mix-blend-overlay"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(63,142,252,0.15) 0 1px, transparent 1px 34px), repeating-linear-gradient(60deg, rgba(63,142,252,0.15) 0 1px, transparent 1px 34px)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 xl:max-w-340">
        <h2
          className="mb-14 text-center text-4xl font-medium tracking-tight sm:text-5xl lg:text-[4rem]"
          style={{
            background: "linear-gradient(to right, #1B3A6B, #7B1B2A)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            // display: "block",
          }}
        >
          Our Impact, In Numbers
        </h2>

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          {/* Left Column: Center Map Container from previous code */}
          <div className="relative flex min-h-100 flex-col items-center justify-center rounded-[2.5rem] border border-white bg-linear-to-br from-[#ffffff] to-[#f4f7fc] p-10 shadow-[0_12px_40px_rgba(1,34,79,0.08)] backdrop-blur-xl lg:min-h-125">
            <img
              src={mapIcon}
              alt="Map of India showing our presence"
              className="relative z-10 h-auto w-full max-w-sm object-contain transition-transform duration-700 hover:scale-105 filter drop-shadow-[0_20px_40px_rgba(1,34,79,0.25)]"
            />
          </div>

          {/* Right Column: 2x2 Stats Grid based on screenshot */}
          <div className="grid grid-cols-2 text-center">
            {/* Top Left */}
            <div className="flex flex-col items-center justify-center border-b-[2.5px] border-r-[2.5px] border-dashed border-[#01224F] p-4 sm:p-8 md:p-10">
              <span className="text-[2.5rem] font-extrabold leading-tight text-[#01224F] md:text-5xl lg:text-[3.25rem]">
                {stats[0].number}
              </span>
              <span className="mt-3 whitespace-pre-line text-sm font-medium text-[#01224F] md:text-lg lg:text-xl">
                {stats[0].label}
              </span>
            </div>

            {/* Top Right */}
            <div className="flex flex-col items-center justify-center border-b-[2.5px] border-dashed border-[#01224F] p-4 sm:p-8 md:p-10">
              <span className="text-[2.5rem] font-extrabold leading-tight text-[#01224F] md:text-5xl lg:text-[3.25rem]">
                {stats[1].number}
              </span>
              <span className="mt-3 whitespace-pre-line text-sm font-medium text-[#01224F] md:text-lg lg:text-xl">
                {stats[1].label}
              </span>
            </div>

            {/* Bottom Left */}
            <div className="flex flex-col items-center justify-center border-r-[2.5px] border-dashed border-[#01224F] p-4 sm:p-8 md:p-10">
              <span className="text-[2.5rem] font-extrabold leading-tight text-[#01224F] md:text-5xl lg:text-[3.25rem]">
                {stats[2].number}
              </span>
              <span className="mt-3 whitespace-pre-line text-sm font-medium text-[#01224F] md:text-lg lg:text-xl">
                {stats[2].label}
              </span>
            </div>

            {/* Bottom Right */}
            <div className="flex flex-col items-center justify-center p-4 sm:p-8 md:p-10">
              <span className="text-[2.5rem] font-extrabold leading-tight text-[#01224F] md:text-5xl lg:text-[3.25rem]">
                {stats[3].number}
              </span>
              <span className="mt-3 whitespace-pre-line text-sm font-medium text-[#01224F] md:text-lg lg:text-xl">
                {stats[3].label}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
