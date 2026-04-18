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

// Slice into three equal parts
const corporateThird = Math.ceil(allCorporate.length / 3);
const corporateRowOne = allCorporate.slice(0, corporateThird);
const corporateRowTwo = allCorporate.slice(corporateThird, corporateThird * 2);
const corporateRowThree = allCorporate.slice(corporateThird * 2);

// Manual size controls
const CARDS_MAX_WIDTH_CLASS = "max-w-8xl";
const SECTION_PADDING_CLASS = "pt-7 pb-9 md:pt-9 md:pb-11";
const HEADING_MARGIN_CLASS = "mb-5 md:mb-7";
const TRACK_GAP_CLASS = "gap-1.5 sm:gap-2";
const TRACK_PADDING_CLASS = "py-1.5";
const LOGO_FRAME_SIZE_CLASS = "h-14 w-28 sm:h-16 sm:w-40 md:h-20 md:w-40";
const TRACK_FADE_MASK =
  "linear-gradient(to right, transparent 0%, black 10%, black 93%, transparent 100%)";

const StarIcon = () => (
  <svg
    className="mr-2.5 h-3.5 w-3.5 text-[#cbd5e1] transition-all duration-300"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
  </svg>
);

const MarqueeTrack = ({ partners, reverse = false, speed = "50s" }) => {
  const extendedItems = Array(4).fill(partners).flat();

  return (
    <div
      className={`marquee-container group flex w-full overflow-hidden ${TRACK_PADDING_CLASS}`}
      style={{
        WebkitMaskImage: TRACK_FADE_MASK,
        maskImage: TRACK_FADE_MASK,
      }}
    >
      <div
        className={`flex w-max whitespace-nowrap ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        } marquee-track`}
        style={{ animationDuration: speed }}
      >
        {extendedItems.map((item, idx) => (
          <div
            key={`${item.name}-${idx}`}
            className="group/badge relative mx-2 flex items-center justify-center overflow-hidden rounded-2xl bg-white px-2 py-1.5 shadow-[0_4px_24px_rgba(0,0,0,0.03)] ring-1 ring-[#ffffff] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:bg-[#ffffff] hover:ring-[#ffffff] md:mx-2.5 md:px-3 md:py-2 lg:py-2.5"
          >
            <div className="absolute inset-0 z-0 bg-linear-to-r from-transparent via-[#ffffff] to-transparent opacity-0 transition-opacity duration-300 group-hover/badge:opacity-100" />
            <div
              className={`relative z-10 flex ${LOGO_FRAME_SIZE_CLASS} items-center justify-center`}
            >
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
        .marquee-container:hover .marquee-track {
          animation-play-state: paused;
        }
      `}</style>

      <div
        className={`relative flex w-full flex-col items-center ${SECTION_PADDING_CLASS}`}
      >
        <div
          className={`relative z-30 flex items-center gap-4 ${HEADING_MARGIN_CLASS}`}
        >
          <h3
            className="text-2xl font-bold tracking-tighter sm:text-6xl lg:text-6xl"
            style={{
              fontFamily: "system-ui, -apple-system, sans-serif",
              background: "linear-gradient(to right, #1B3A6B, #7B1B2A)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              /* ↓ Edit these to fix letter clipping */
              lineHeight: 1.5,
              paddingLeft: "0.05em",
              paddingRight: "0.05em",
            }}
          >
            Our Industry Partners
          </h3>
        </div>

        <div
          className={`relative z-30 w-full ${CARDS_MAX_WIDTH_CLASS} px-4 sm:px-6 lg:px-8`}
        >
          <div className={`flex w-full flex-col ${TRACK_GAP_CLASS}`}>
            <MarqueeTrack partners={corporateRowOne} speed="80s" />
            <MarqueeTrack partners={corporateRowTwo} reverse speed="85s" />
            <MarqueeTrack partners={corporateRowThree} speed="80s" />
          </div>
        </div>
      </div>
    </>
  );
}
