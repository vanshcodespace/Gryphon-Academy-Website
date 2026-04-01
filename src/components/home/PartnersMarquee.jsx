import React from "react";

const collegeRowOne = [
  "IIT Bombay", "IIT Delhi", "IIT Madras", "IIT Kharagpur", "NIT Trichy", "BITS Pilani", "VIT", "SRM", "MIT Manipal"
];

const collegeRowTwo = [
  "IISc", "IIIT Hyderabad", "NIT Surathkal", "PEC", "Thapar", "COEP", "RVCE", "DTU", "NSUT"
];

const corporateRowOne = [
  "Zomato", "Coinbase", "Paytm", "Uber", "Salesforce", "Amazon", "Meta", "Google", "Microsoft"
];

const corporateRowTwo = [
  "Cisco", "Stripe", "Netflix", "Flipkart", "Razorpay", "Visa", "Atlassian", "PayPal", "CRED"
];

const StarIcon = () => (
  <svg 
    className="mr-2.5 h-3.5 w-3.5 text-[#cbd5e1] transition-all duration-300 group-hover/badge:rotate-90 group-hover/badge:scale-110 group-hover/badge:text-[#7B1B2A]" 
    viewBox="0 0 24 24" 
    fill="currentColor"
  >
    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
  </svg>
);

const MarqueeTrack = ({ partners, reverse = false }) => {
  const extendedItems = Array(4).fill(partners).flat();

  return (
    <div className="marquee-container group flex w-full overflow-hidden py-2">
      <div
        className={`flex w-max whitespace-nowrap ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {extendedItems.map((item, idx) => (
          <div
            key={`${item}-${idx}`}
            className="group/badge relative mx-3 flex items-center justify-center overflow-hidden rounded-2xl bg-white px-8 py-3.5 shadow-[0_4px_24px_rgba(0,0,0,0.03)] ring-1 ring-[#f1f5f9] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(27,58,107,0.12)] hover:ring-[#1B3A6B]/20 md:mx-4 md:px-10 md:py-4 lg:py-5"
          >
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-[#f8fafc] to-transparent opacity-0 transition-opacity duration-300 group-hover/badge:opacity-100" />
            <div className="relative z-10 flex items-center">
              <StarIcon />
              <span className="text-base font-extrabold tracking-wide text-[#334155] transition-colors duration-300 group-hover/badge:text-[#1B3A6B] md:text-lg">
                {item}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function PartnersMarquee() {
  return (
    <section className="relative overflow-hidden bg-[#fafafa] py-12 sm:py-16 lg:py-20">
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
          className="mx-auto mb-4 inline-block text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-[3.5rem]"
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
        <p className="mx-auto mt-4 max-w-2xl text-base text-[#475569] sm:text-lg">
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
            <MarqueeTrack partners={corporateRowOne} reverse />
            <MarqueeTrack partners={corporateRowTwo} />
          </div>
        </div>
      </div>
    </section>
  );
}
