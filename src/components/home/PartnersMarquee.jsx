import React from "react";

// Dynamically import all images from the College Partners folder
const collegeModules = import.meta.glob("../../assets/GA College Partners/*.{png,jpg,jpeg,svg,webp,avif}", { eager: true });
const allColleges = Object.entries(collegeModules).map(([path, module]) => {
  const name = path.split('/').pop().replace(/\.[^/.]+$/, ""); // Extract filename without extension
  return { name, logo: module.default || module };
});

// Slice the array into two equal halves
const collegeMid = Math.ceil(allColleges.length / 2);
const collegeRowOne = allColleges.slice(0, collegeMid);
const collegeRowTwo = allColleges.slice(collegeMid);

// Dynamically import all images from the Recruiters folder
const corporateModules = import.meta.glob("../../assets/Recruiters/*.{png,jpg,jpeg,svg,webp}", { eager: true });
const allCorporate = Object.entries(corporateModules).map(([path, module]) => {
  const name = path.split('/').pop().replace(/\.[^/.]+$/, ""); // Extract filename without extension
  return { name, logo: module.default || module };
});

// Slice into two equal halves
const corporateMid = Math.ceil(allCorporate.length / 2);
const corporateRowOne = allCorporate.slice(0, corporateMid);
const corporateRowTwo = allCorporate.slice(corporateMid);

const StarIcon = () => (
  <svg 
    className="mr-2.5 h-3.5 w-3.5 text-[#cbd5e1] transition-all duration-300 group-hover/badge:rotate-90 group-hover/badge:scale-110 group-hover/badge:text-[#7B1B2A]" 
    viewBox="0 0 24 24" 
    fill="currentColor"
  >
    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
  </svg>
);

const MarqueeTrack = ({ partners, reverse = false, speed = "35s" }) => {
  const extendedItems = Array(4).fill(partners).flat();

  return (
    <div className="marquee-container group flex w-full overflow-hidden py-2">
      <div
        className={`flex w-max whitespace-nowrap ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
        style={{ animationDuration: speed }}
      >
        {extendedItems.map((item, idx) => (
          <div
            key={`${item.name}-${idx}`}
            className="group/badge relative mx-3 flex items-center justify-center overflow-hidden rounded-2xl bg-white px-1.5 py-1 shadow-[0_4px_24px_rgba(0,0,0,0.03)] ring-1 ring-[#f1f5f9] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(27,58,107,0.12)] hover:ring-[#1B3A6B]/20 md:mx-4 md:px-2.5 md:py-1.5 lg:py-2"
          >
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-[#f8fafc] to-transparent opacity-0 transition-opacity duration-300 group-hover/badge:opacity-100" />
            <div className="relative z-10 flex h-12 w-32 sm:h-16 sm:w-40 md:h-20 md:w-48 items-center justify-center">
              {item.logo ? (
                <img 
                  src={item.logo} 
                  alt={item.name} 
                  className="max-h-full max-w-full object-contain filter transition-all duration-300 group-hover/badge:scale-110" 
                />
              ) : (
                <>
                  <StarIcon />
                  <span className="text-base font-extrabold tracking-wide text-[#334155] transition-colors duration-300 group-hover/badge:text-[#1B3A6B] md:text-lg">
                    {item.name}
                  </span>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function PartnersMarquee() {
  return (
    <section 
      className="relative overflow-hidden py-12 sm:py-16 lg:py-20"
      style={{
        background: "linear-gradient(135deg, #ceecf7 0%, #a2d5f4 25%, #f7fcff 50%, #d3eef9 75%, #ffffff 100%)"
      }}
    >
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
        .marquee-container:hover .animate-marquee,
        .marquee-container:hover .animate-marquee-reverse {
          animation-play-state: paused;
        }
      `}</style>

      {/* Decorative Blur Orbs */}
      <div className="pointer-events-none absolute -left-20 top-0 h-[400px] w-[400px] rounded-full bg-[#cce0fc]/40 blur-[100px]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-[500px] w-[500px] rounded-full bg-[#f4dfe5]/50 blur-[120px]" />

      <div className="relative z-10 mx-auto mb-8 max-w-7xl px-4 text-center sm:mb-12 sm:px-6 lg:px-8">
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
        <p className="mx-auto mt-4 max-w-2xl text-sm text-[#475569] sm:text-base">
          Bridging the gap between premier educational institutions and global
          industry giants to build the next generation of top-tier talent.
        </p>
      </div>

      <div className="relative z-10 flex flex-col gap-4 sm:gap-6">
        {/* Colleges Section */}
        <div className="relative flex w-full flex-col items-center">
          <div className="pointer-events-none absolute left-0 z-20 h-full w-16 bg-gradient-to-r from-[#fafafa] to-transparent sm:w-32 md:w-48" />
          <div className="pointer-events-none absolute right-0 z-20 h-full w-16 bg-gradient-to-l from-[#fafafa] to-transparent sm:w-32 md:w-48" />

          <div className="mb-6 flex items-center gap-4">
            <div className="h-[2px] w-8 bg-gradient-to-r from-transparent to-[#94a3b8]" />
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#64748b] sm:text-base">
              Top Institutions
            </h3>
            <div className="h-[2px] w-8 bg-gradient-to-l from-transparent to-[#94a3b8]" />
          </div>

          <div className="flex w-full flex-col gap-2 sm:gap-4">
            <MarqueeTrack partners={collegeRowOne} />
            <MarqueeTrack partners={collegeRowTwo} reverse />
          </div>
        </div>

        {/* Divider */}
        <div className="mx-auto h-px w-full max-w-4xl bg-gradient-to-r from-transparent via-[#cbd5e1] to-transparent opacity-60" />

        {/* Corporate Section */}
        <div className="relative flex w-full flex-col items-center">
          <div className="pointer-events-none absolute left-0 z-20 h-full w-16 bg-gradient-to-r from-[#fafafa] to-transparent sm:w-32 md:w-48" />
          <div className="pointer-events-none absolute right-0 z-20 h-full w-16 bg-gradient-to-l from-[#fafafa] to-transparent sm:w-32 md:w-48" />

          <div className="mb-6 flex items-center gap-4">
            <div className="h-[2px] w-8 bg-gradient-to-r from-transparent to-[#94a3b8]" />
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#64748b] sm:text-base">
              Industry Leaders
            </h3>
            <div className="h-[2px] w-8 bg-gradient-to-l from-transparent to-[#94a3b8]" />
          </div>

          <div className="flex w-full flex-col gap-2 sm:gap-4">
            <MarqueeTrack partners={corporateRowOne} reverse speed="100s" />
            <MarqueeTrack partners={corporateRowTwo} speed="100s" />
          </div>
        </div>
      </div>
    </section>
  );
}
