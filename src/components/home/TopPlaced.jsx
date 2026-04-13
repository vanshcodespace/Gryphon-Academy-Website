import React from "react";

const studentCards = [
  {
    id: 1,
    name: "Aarav Patil",
    ctc: "18.5 LPA",
    company: "Deloitte",
    companyLogo: "https://logo.clearbit.com/deloitte.com",
    photo: "https://i.pravatar.cc/400?img=12",
  },
  {
    id: 2,
    name: "Mira Kulkarni",
    ctc: "22.0 LPA",
    company: "Mastercard",
    companyLogo: "https://logo.clearbit.com/mastercard.com",
    photo: "https://i.pravatar.cc/400?img=47",
  },
  {
    id: 3,
    name: "Rohan Deshmukh",
    ctc: "25.8 LPA",
    company: "NielsenIQ",
    companyLogo: "https://logo.clearbit.com/nielseniq.com",
    photo: "https://i.pravatar.cc/420?img=15",
  },
  {
    id: 4,
    name: "Nisha Jagtap",
    ctc: "19.2 LPA",
    company: "KPMG",
    companyLogo: "https://logo.clearbit.com/kpmg.com",
    photo: "https://i.pravatar.cc/400?img=32",
  },
  {
    id: 5,
    name: "Ishaan More",
    ctc: "17.6 LPA",
    company: "Nestle",
    companyLogo: "https://logo.clearbit.com/nestle.com",
    photo: "https://i.pravatar.cc/400?img=21",
  },
  {
    id: 6,
    name: "Priya Joshi",
    ctc: "20.4 LPA",
    company: "BlackRock",
    companyLogo: "https://logo.clearbit.com/blackrock.com",
    photo: "https://i.pravatar.cc/400?img=25",
  },
  {
    id: 7,
    name: "Dev Shah",
    ctc: "16.9 LPA",
    company: "Infosys",
    companyLogo: "https://logo.clearbit.com/infosys.com",
    photo: "https://i.pravatar.cc/400?img=14",
  },
  {
    id: 8,
    name: "Kavya Singh",
    ctc: "23.1 LPA",
    company: "UBS",
    companyLogo: "https://logo.clearbit.com/ubs.com",
    photo: "https://i.pravatar.cc/400?img=5",
  },
  {
    id: 9,
    name: "Aniket Naik",
    ctc: "21.3 LPA",
    company: "BNY Mellon",
    companyLogo: "https://logo.clearbit.com/bnymellon.com",
    photo: "https://i.pravatar.cc/400?img=17",
  },
  {
    id: 10,
    name: "Sara Mehta",
    ctc: "24.4 LPA",
    company: "Mercedes-Benz",
    companyLogo: "https://logo.clearbit.com/mercedes-benz.com",
    photo: "https://i.pravatar.cc/400?img=23",
  },
  {
    id: 11,
    name: "Yash Bhosale",
    ctc: "27.0 LPA",
    company: "PwC",
    companyLogo: "https://logo.clearbit.com/pwc.com",
    photo: "https://i.pravatar.cc/420?img=29",
  },
  {
    id: 12,
    name: "Aditi Rao",
    ctc: "18.1 LPA",
    company: "FIS",
    companyLogo: "https://logo.clearbit.com/fisglobal.com",
    photo: "https://i.pravatar.cc/400?img=45",
  },
  {
    id: 13,
    name: "Omkar Kale",
    ctc: "15.8 LPA",
    company: "Tata Technologies",
    companyLogo: "https://logo.clearbit.com/tatatechnologies.com",
    photo: "https://i.pravatar.cc/400?img=39",
  },
  {
    id: 14,
    name: "Ritika Verma",
    ctc: "26.2 LPA",
    company: "Whirlpool",
    companyLogo: "https://logo.clearbit.com/whirlpool.com",
    photo: "https://i.pravatar.cc/420?img=9",
  },
  {
    id: 15,
    name: "Harsh Kothari",
    ctc: "28.4 LPA",
    company: "Mondelez",
    companyLogo: "https://logo.clearbit.com/mondelezinternational.com",
    photo: "https://i.pravatar.cc/420?img=53",
  },
  {
    id: 16,
    name: "Neha Agarwal",
    ctc: "19.9 LPA",
    company: "KPIT",
    companyLogo: "https://logo.clearbit.com/kpit.com",
    photo: "https://i.pravatar.cc/400?img=42",
  },
  {
    id: 17,
    name: "Tanvi Kulshrestha",
    ctc: "21.7 LPA",
    company: "ANZ",
    companyLogo: "https://logo.clearbit.com/anz.com",
    photo: "https://i.pravatar.cc/420?img=36",
  },
];

const horizontalCards = new Set([3, 11, 14, 15, 17]);
const tallVerticalCards = new Set([2, 4, 6, 8, 9, 10, 12, 16]);
const collegesById = {
  1: "PCCOE, Pune",
  2: "VIT, Pune",
  3: "COEP Tech",
  4: "MIT-WPU",
  5: "DY Patil, Pimpri",
  6: "PICT, Pune",
  7: "AISSMS IOIT",
  8: "Bharati Vidyapeeth",
  9: "Sinhgad COE",
  10: "Vishwakarma Inst.",
  11: "Indira COE",
  12: "MESCOE",
  13: "JSPM RSCOE",
  14: "Modern COE",
  15: "ISBM College",
  16: "MMCOE",
  17: "Dr. D. Y. Patil COE",
};

function getInitialsLogo(company) {
  const initials = company
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
      <rect width="64" height="64" rx="14" fill="#EEF4FF" />
      <text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="22" font-weight="700" fill="#1B3A6B">${initials}</text>
    </svg>
  `;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function handleLogoError(event, company) {
  const image = event.currentTarget;
  if (image.dataset.fallbackApplied === "1") {
    return;
  }
  image.dataset.fallbackApplied = "1";
  image.src = getInitialsLogo(company);
}

function getPlacementClass(num) {
  return `
    ${num === 1 ? "row-span-2" : ""}
    ${num === 2 ? "row-span-3" : ""}
    ${num === 3 ? "col-span-2 row-span-2" : ""}
    ${num === 4 ? "col-start-5 row-span-3" : ""}
    ${num === 5 ? "col-start-3 row-start-3 row-span-2" : ""}
    ${num === 6 ? "col-start-4 row-start-3 row-span-3" : ""}
    ${num === 7 ? "col-start-5 row-start-4 row-span-2" : ""}
    ${num === 8 ? "col-start-1 row-start-3 row-span-3" : ""}
    ${num === 9 ? "col-start-2 row-start-4 row-span-3" : ""}
    ${num === 10 ? "col-start-3 row-start-5 row-span-3" : ""}
    ${num === 11 ? "col-start-4 col-span-2 row-start-6 row-span-2" : ""}
    ${num === 12 ? "col-start-1 row-start-6 row-span-3" : ""}
    ${num === 13 ? "col-start-2 row-start-7 row-span-2" : ""}
    ${num === 14 ? "col-start-1 col-span-2 row-start-9 row-span-2" : ""}
    ${num === 15 ? "col-start-3 col-span-2 row-start-8 row-span-2" : ""}
    ${num === 16 ? "col-start-5 row-start-8 row-span-3" : ""}
    ${num === 17 ? "col-start-3 col-span-2 row-start-10 row-span-2" : ""}
  `;
}

function StudentCard({ student }) {
  const isHorizontal = horizontalCards.has(student.id);
  const showBottomLogo = isHorizontal || tallVerticalCards.has(student.id);
  const college = collegesById[student.id] || "Gryphon Partner College";

  return (
    <article className="group relative h-full overflow-hidden rounded-xl border border-[#1d3557]/30 bg-linear-to-br from-[#f5f8ff] via-[#edf4ff] to-[#fefeff] shadow-[0_10px_24px_rgba(12,32,62,0.16)] transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_18px_32px_rgba(12,32,62,0.24)]">
      <div className="pointer-events-none absolute -right-10 -top-10 h-20 w-20 rounded-full bg-[#7b1b2a]/15 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-8 -left-8 h-20 w-20 rounded-full bg-[#1b3a6b]/20 blur-2xl" />

      <div
        className={`relative z-10 flex h-full ${isHorizontal ? "flex-row" : "flex-col"}`}
      >
        <div
          className={`relative overflow-hidden ${
            isHorizontal ? "w-1/2" : "h-1/2"
          }`}
        >
          <img
            src={student.photo}
            alt={student.name}
            className="h-full w-full object-cover transition-transform duration-400 group-hover:scale-[1.05]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#0b132b]/35 to-transparent" />
        </div>

        <div
          className={`flex ${
            isHorizontal ? "w-1/2 p-3 md:p-4" : "h-1/2 p-2.5 md:p-3"
          } flex-col justify-between`}
        >
          <div>
            <h3 className="line-clamp-2 text-sm font-bold leading-tight text-[#081a36] md:text-base">
              {student.name}
            </h3>

            <p className="mt-1 truncate text-[11px] font-medium text-[#1b3a6b] md:text-xs">
              {college}
            </p>

            <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#7b1b2a]/80 md:text-[11px]">
              CTC
            </p>
            {showBottomLogo ? (
              <p className="mt-1 inline-block rounded-md bg-linear-to-r from-[#1b3a6b] to-[#7b1b2a] px-2 py-1 text-[11px] font-extrabold tracking-wide text-white md:text-xs">
                {student.ctc}
              </p>
            ) : (
              <div className="mt-1 flex w-full items-center gap-2">
                <p className="inline-block shrink-0 rounded-md bg-linear-to-r from-[#1b3a6b] to-[#7b1b2a] px-2 py-1 text-[11px] font-extrabold tracking-wide text-white md:text-xs">
                  {student.ctc}
                </p>
                <div className="ml-auto min-w-0 flex max-w-44 items-center gap-1.5 rounded-md border border-[#1b3a6b]/15 bg-white/80 px-2 py-1">
                  <img
                    src={student.companyLogo}
                    alt={`${student.company} logo`}
                    className="h-3.5 w-3.5 shrink-0 rounded object-contain"
                    onError={(event) => handleLogoError(event, student.company)}
                    loading="lazy"
                  />
                  <span className="truncate text-[10px] font-semibold text-[#1b3a6b]">
                    {student.company}
                  </span>
                </div>
              </div>
            )}
          </div>

          {showBottomLogo && (
            <div className="mt-2 flex items-center gap-2 rounded-lg border border-[#1b3a6b]/15 bg-white/80 px-2 py-1.5">
              <img
                src={student.companyLogo}
                alt={`${student.company} logo`}
                className="h-4 w-4 shrink-0 rounded object-contain md:h-5 md:w-5"
                onError={(event) => handleLogoError(event, student.company)}
                loading="lazy"
              />
              <span className="truncate text-[10px] font-semibold text-[#1b3a6b] md:text-xs">
                {student.company}
              </span>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export default function TopPlaced() {
  return (
    <section className="w-full bg-linear-to-b from-[#f6f2ec] to-[#ece7df] px-4 py-6 md:py-8">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-4 md:mb-6 text-center">
          <h2
              className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-5xl"
              style={{
                background: "linear-gradient(to right, #1B3A6B, #7B1B2A)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
            Top Placed Students
          </h2>
        </div>

        <div className="grid h-[200vh] w-full grid-cols-5 grid-rows-11 gap-2">
          {studentCards.map((student) => (
            <div key={student.id} className={getPlacementClass(student.id)}>
              <StudentCard student={student} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
