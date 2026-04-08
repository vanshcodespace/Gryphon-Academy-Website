import React from "react";

// Dynamically import all images from the Recruiters folder
const corporateModules = import.meta.glob(
  "../../assets/Recruiters/*.{png,jpg,jpeg,svg,webp}",
  { eager: true },
);
const allCorporate = Object.entries(corporateModules).map(([path, module]) => {
  const name = path
    .split("/")
    .pop()
    .replace(/\.[^/.]+$/, ""); // Extract filename without extension
  return { name, logo: module.default || module };
});

// Slice into three equal chunks
const corporateChunkSize = Math.ceil(allCorporate.length / 3);
const corporateRowOne = allCorporate.slice(0, corporateChunkSize);
const corporateRowTwo = allCorporate.slice(
  corporateChunkSize,
  corporateChunkSize * 2,
);
const corporateRowThree = allCorporate.slice(corporateChunkSize * 2);

const StarIcon = () => (
  <svg
    className="mr-2.5 h-3.5 w-3.5 text-[#cbd5e1] transition-all duration-300"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
  </svg>
);

const MarqueeTrack = ({ partners, reverse = false, speed = "40s" }) => {
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
            className="group/badge relative mx-1.5 flex items-center justify-center overflow-hidden rounded-2xl bg-white px-1.5 py-1 shadow-[0_4px_24px_rgba(0,0,0,0.03)] ring-1 ring-[#f1f5f9] transition-all duration-300 md:mx-2 md:px-2.5 md:py-1.5 lg:py-2"
          >
            <div className="absolute inset-0 z-0 bg-linear-to-r from-transparent via-[#f8fafc] to-transparent opacity-0 transition-opacity duration-300" />
            <div className="relative z-10 flex h-12 w-32 sm:h-16 sm:w-40 md:h-20 md:w-48 items-center justify-center">
              {item.logo ? (
                <img
                  src={item.logo}
                  alt={item.name}
                  className="max-h-full max-w-full object-contain filter transition-all duration-300"
                />
              ) : (
                <>
                  <StarIcon />
                  <span className="text-base font-extrabold tracking-wide text-[#334155] transition-colors duration-300 md:text-lg">
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

export default function CorporateMarquee() {
  return (
    <>
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
          animation: marquee 40s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 40s linear infinite;
        }
      `}</style>

      <div className="relative flex w-full flex-col items-center bg-linear-to-b from-[#d8eaf4] via-[#c9dfec] to-[#bdd8e8] pb-8 md:pb-10">
        <div className="pointer-events-none absolute left-0 z-20 h-full w-16 bg-linear-to-r from-[#c9dfec] to-transparent sm:w-32 md:w-48" />
        <div className="pointer-events-none absolute right-0 z-20 h-full w-16 bg-linear-to-l from-[#c9dfec] to-transparent sm:w-32 md:w-48" />

        <div className="mb-8 flex items-center justify-center">
          <h3
            className="pb-1 text-center text-4xl font-extrabold tracking-tight leading-normal sm:text-5xl lg:text-[4rem]"
            style={{
              background: "linear-gradient(to right, #1B3A6B, #7B1B2A)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Industry Leaders
          </h3>
        </div>

        <div className="flex w-full flex-col gap-1 sm:gap-2">
          <MarqueeTrack partners={corporateRowOne} reverse speed="40s" />
          <MarqueeTrack partners={corporateRowTwo} speed="38s" />
          <MarqueeTrack partners={corporateRowThree} reverse speed="42s" />
        </div>
      </div>
    </>
  );
}
