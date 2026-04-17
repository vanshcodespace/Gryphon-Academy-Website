import { useEffect, useMemo, useState } from "react";

// Dynamically import all images from the College Partners folder
const collegeModules = import.meta.glob(
  "../../assets/GA College Partners/*.{png,jpg,jpeg,svg,webp,avif}",
  { eager: true },
);

// Mapping of logo numbers (1-48) to customized text
const logoCustomTextMap = {
  1: "IIT Delhi",
  2: "IIT Bombay",
  3: "IIT Madras",
  4: "IIT Kharagpur",
  5: "IIT Kanpur",
  6: "IIT Roorkee",
  7: "IIT Guwahati",
  8: "IIT BHU",
  9: "NIT Trichy",
  10: "NIT Surathkal",
  11: "NIT Warangal",
  12: "NIT Calicut",
  13: "NIT Rourkela",
  14: "NIT Durgapur",
  15: "NIT Hamirpur",
  16: "NIT Jalandhar",
  17: "NIT Jaipur",
  18: "NIT Allahabad",
  19: "BITS Pilani",
  20: "BITS Goa",
  21: "BITS Hyderabad",
  22: "VIT Vellore",
  23: "Manipal Institute",
  24: "SRM University",
  25: "Amrita Vishwa Vidyapeetham",
  26: "Anna University",
  27: "Mumbai University",
  28: "Delhi University",
  29: "Pune University",
  30: "Bangalore University",
  31: "Chennai University",
  32: "Hyderabad University",
  33: "Calcutta University",
  34: "Banaras Hindu University",
  35: "Jawaharlal Nehru University",
  36: "University of Rajasthan",
  37: "Gujarat University",
  38: "Tamil Nadu Open University",
  39: "Dr. B.R. Ambedkar University",
  40: "Aligarh Muslim University",
  41: "Jamia Millia Islamia",
  42: "DU College of Engineering",
  43: "Delhi Technological University",
  44: "Netaji Subhas University",
  45: "Christ University",
  46: "JSS Science and Technology University",
  47: "Savitribai Phule Pune University",
  48: "Lovely Professional University",
};

const allColleges = Object.entries(collegeModules).map(([path, module]) => {
  const name = path
    .split("/")
    .pop()
    .replace(/\.[^/.]+$/, ""); // Extract filename without extension
  return {
    name,
    logo: module.default || module,
    customText: logoCustomTextMap[name] || name, // Use custom text from map or fallback to logo name
  };
});

const collegesPerPage = 24;
const visibleColleges = allColleges.slice(0, 48);

export default function InstitutionsMarquee() {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedCollege, setSelectedCollege] = useState(null);

  const totalPages = useMemo(
    () => Math.max(Math.ceil(visibleColleges.length / collegesPerPage), 1),
    [],
  );

  const pageColleges = useMemo(() => {
    const start = currentPage * collegesPerPage;
    return visibleColleges.slice(start, start + collegesPerPage);
  }, [currentPage]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedCollege(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (currentPage > totalPages - 1) {
      setCurrentPage(0);
    }
  }, [currentPage, totalPages]);

  const openCollege = (item) => {
    setSelectedCollege(item);
  };

  const closeCollege = () => {
    setSelectedCollege(null);
  };

  const goToPage = (nextPage) => {
    const pageIndex = Math.max(0, Math.min(totalPages - 1, nextPage));
    setCurrentPage(pageIndex);
  };

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

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 md:grid-cols-4 lg:grid-cols-6 lg:grid-rows-4 lg:gap-3">
          {pageColleges.map((item) => (
            <div
              key={item.name}
              role="button"
              tabIndex={0}
              onClick={() => openCollege(item)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  openCollege(item);
                }
              }}
              className="flex h-25 cursor-pointer items-center justify-center rounded-xl bg-[#ffffff] px-0 py-0.5 ring-1 ring-[#ffffff] shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.03] hover:bg-[#ffffff] hover:ring-[#93c5fd] hover:shadow-[0_14px_30px_rgba(2,12,27,0.35)] focus:outline-none focus:ring-2 focus:ring-[#93c5fd]"
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

        {totalPages > 1 && (
          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 0}
              className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Prev
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, pageIndex) => {
                const isActive = pageIndex === currentPage;
                return (
                  <button
                    key={`page-${pageIndex}`}
                    type="button"
                    onClick={() => goToPage(pageIndex)}
                    className={`h-3 rounded-full transition-all duration-300 ${
                      isActive
                        ? "w-8 bg-[#78a8f5]"
                        : "w-3 bg-white/40 hover:bg-white/60"
                    }`}
                    aria-label={`Go to page ${pageIndex + 1}`}
                  />
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage >= totalPages - 1}
              className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Next
            </button>
          </div>
        )}
      </div>

      {selectedCollege && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-6"
          onClick={closeCollege}
          role="presentation"
        >
          <div
            className="w-full max-w-md rounded-3xl bg-white p-6 shadow-[0_24px_80px_rgba(0,0,0,0.35)]"
            onClick={(event) => event.stopPropagation()}
            aria-modal="true"
          >
            <div className="flex flex-col items-center text-center">
              <div className="flex h-48 w-full items-center justify-center rounded-2xl bg-[#f6f9ff] p-4">
                <img
                  src={selectedCollege.logo}
                  alt={selectedCollege.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              <h4 className="mt-5 text-2xl font-bold text-[#01224F]">
                {selectedCollege.customText || selectedCollege.name}
              </h4>

              <button
                type="button"
                onClick={closeCollege}
                className="mt-6 rounded-full bg-[#01224F] px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-[#1B3A6B]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
