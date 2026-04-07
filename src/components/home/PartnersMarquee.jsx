import React from "react";
import InstitutionsMarquee from "./InstitutionsMarquee";
import CorporateMarquee from "./CorporateMarquee";

export default function PartnersMarquee() {
  return (
    <section className="relative overflow-hidden py-6 sm:py-8 lg:py-10">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-25%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 35s linear infinite;
        }
      `}</style>

      {/* Decorative Blur Orbs */}
      {/* <div className="pointer-events-none absolute -left-20 top-0 h-100 w-100 rounded-full bg-[#cce0fc]/40 blur-[100px]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-125 w-125 rounded-full bg-[#f4dfe5]/50 blur-[120px]" /> */}

      <div className="relative z-10 mx-auto mb-2 max-w-7xl px-4 text-center sm:mb-3 sm:px-6 lg:px-8">
        <h2
          className="mx-auto mb-4 inline-block text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl lg:text-[2.5rem]"
          style={{
            background: "linear-gradient(to right, #1B3A6B, #7B1B2A)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            display: "block",
          }}
        >
          Backed by the Best
        </h2>
        <p className="mx-auto mt-1 max-w-2xl text-sm text-[#475569] sm:text-base">
          Bridging the gap between premier educational institutions and global
          industry giants to build the next generation of top-tier talent.
        </p>
      </div>

      <div className="relative z-10 flex flex-col gap-2 sm:gap-3">
        {/* Colleges Section */}
        <div className="relative flex w-full flex-col items-center">
          <div className="pointer-events-none absolute left-0 z-20 h-full w-16 bg-linear-to-r from-[#fafafa] to-transparent sm:w-32 md:w-48" />
          <div className="pointer-events-none absolute right-0 z-20 h-full w-16 bg-linear-to-l from-[#fafafa] to-transparent sm:w-32 md:w-48" />

          <div className="mb-1.5 flex items-center gap-4">
            <div className="h-0.5 w-8 bg-linear-to-r from-transparent to-[#94a3b8]" />
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#64748b] sm:text-base">
              Top Institutions
            </h3>
            <div className="h-0.5 w-8 bg-linear-to-l from-transparent to-[#94a3b8]" />
          </div>

          <div className="flex w-full flex-col gap-1 sm:gap-2">
            <MarqueeTrack partners={collegeRowOne} speed="35s" />
            <MarqueeTrack partners={collegeRowTwo} reverse speed="30s" />
          </div>
        </div>

        {/* Corporate Section */}
        <div className="relative flex w-full flex-col items-center">
          <div className="pointer-events-none absolute left-0 z-20 h-full w-16 bg-linear-to-r from-[#fafafa] to-transparent sm:w-32 md:w-48" />
          <div className="pointer-events-none absolute right-0 z-20 h-full w-16 bg-linear-to-l from-[#fafafa] to-transparent sm:w-32 md:w-48" />

          <div className="mb-1.5 flex items-center gap-4">
            <div className="h-0.5 w-8 bg-linear-to-r from-transparent to-[#94a3b8]" />
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#64748b] sm:text-base">
              Industry Leaders
            </h3>
            <div className="h-0.5 w-8 bg-linear-to-l from-transparent to-[#94a3b8]" />
          </div>

          <div className="flex w-full flex-col gap-1 sm:gap-2">
            <MarqueeTrack partners={corporateRowOne} reverse speed="40s" />
            <MarqueeTrack partners={corporateRowTwo} speed="40s" />
          </div>
        </div>
      </div>
    </section>
  );
}
