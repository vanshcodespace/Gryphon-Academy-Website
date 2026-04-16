import React from "react";

// Dynamically import all images from the College Partners folder
const collegeModules = import.meta.glob(
  "../../assets/GA College Partners/*.{png,jpg,jpeg,svg,webp,avif}",
  { eager: true },
);
const allColleges = Object.entries(collegeModules).map(([path, module]) => {
  const name = path
    .split("/")
    .pop()
    .replace(/\.[^/.]+$/, ""); // Extract filename without extension
  return { name, logo: module.default || module };
});

const desktopColumns = 8;
const visibleColleges = allColleges.slice(0, 48);

export default function InstitutionsMarquee() {
  return (
    <div className="w-full bg-[#01224F] px-4 py-5 sm:px-6 sm:py-6 md:px-8 md:py-7 lg:px-10 xl:px-12">
      <div className="mx-auto w-full lg:w-[92%] max-w-400">
        <div className="mb-12 flex items-center justify-center md:mb-16">
          <div className="text-center">
            <h3
              className="pb-1 text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-5xl"
              style={{
                background: "linear-gradient(to right, #f7f7f7, #78a8f5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Our Top College Partners
            </h3>
            <p className="mt-6 text-lg text-center leading-relaxed text-[#e7ebf0] sm:text-xl lg:text-xl lg:leading-[1.8]">
              Partnering with Excellence Across Leading Institutions
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8">
          {visibleColleges.map((item) => (
            <div
              key={item.name}
              className="flex h-25 items-center justify-center rounded-xl bg-[#ffffff] px-0 py-0.5 ring-1 ring-[#ffffff] shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.03] hover:bg-[#ffffff] hover:ring-[#93c5fd] hover:shadow-[0_14px_30px_rgba(2,12,27,0.35)]"
            >
              <img
                src={item.logo}
                alt={item.name}
                className="max-h-full max-w-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
