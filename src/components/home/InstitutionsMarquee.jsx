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

const desktopColumns = 9;
const visibleColleges = allColleges.slice(
  0,
  Math.floor(allColleges.length / desktopColumns) * desktopColumns,
);

export default function InstitutionsMarquee() {
  return (
    <div className="w-full bg-[#01224F] px-4 py-5 sm:px-6 sm:py-6 md:px-8 md:py-7">
      <div className="mx-auto max-w-350">
        <div className="mb-12 flex items-center justify-center md:mb-16">
          <div className="text-center">
            <h3
              className="pb-1 text-center text-4xl font-extrabold tracking-tight leading-normal sm:text-5xl lg:text-[4rem]"
              style={{
                background: "linear-gradient(to right, #f7f7f7, #78a8f5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Our Top College Partners
            </h3>
            <p className="mt-2 text-lg font-medium tracking-wide text-[#f7f7f7] sm:text-xl">
              Partnering with Excellence Across Leading Institutions
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-9">
          {visibleColleges.map((item) => (
            <div
              key={item.name}
              className="flex h-29 items-center justify-center rounded-xl bg-[#f4f7f8] px-3 py-2 ring-1 ring-[#cfe0e4] transition-transform duration-300 hover:-translate-y-0.5"
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
