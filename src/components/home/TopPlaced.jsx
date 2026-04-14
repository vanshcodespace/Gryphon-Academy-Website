import React from "react";
import photo1 from "../../assets/TopPlaced/1.png";
import photo2 from "../../assets/TopPlaced/2.png";
import photo3 from "../../assets/TopPlaced/3.png";
import photo4 from "../../assets/TopPlaced/4.png";
import photo5 from "../../assets/TopPlaced/5.png";
import photo6 from "../../assets/TopPlaced/6.png";
import photo7 from "../../assets/TopPlaced/7.png";
import photo8 from "../../assets/TopPlaced/8.png";
import photo9 from "../../assets/TopPlaced/9.png";
import photo10 from "../../assets/TopPlaced/10.png";
// import photo11 from "../../assets/TopPlaced/11.png";
// import photo12 from "../../assets/TopPlaced/12.png";
// import photo13 from "../../assets/TopPlaced/13.png";
// import photo14 from "../../assets/TopPlaced/14.png";
// import photo15 from "../../assets/TopPlaced/15.png";
// import photo16 from "../../assets/TopPlaced/16.png";
// import photo17 from "../../assets/TopPlaced/17.png";

const studentCards = [
  {
    id: 1,
    name: "Siddhant Kadam",
    ctc: "27 LPA",
    company: "JUSPAY",
    photo: photo1,
    companyLogo:
      "https://1000logos.net/wp-content/uploads/2019/08/Deloitte-Logo-500x281.png",
  },
  {
    id: 2,
    name: "Komal Verma",
    ctc: "26 LPA",
    company: "bp",
    photo: photo2,
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg",
  },
  {
    id: 3,
    name: "Suyog Parkhi",
    ctc: "21 LPA",
    company: "JUSPAY",
    photo: photo3,
    companyLogo:
      "https://nielseniq.com/wp-content/uploads/sites/3/2020/10/NielsenIQ-large-2.jpg?resize=1024,317",
  },
  {
    id: 4,
    name: "Omkar Biradar",
    ctc: "15 LPA",
    company: "CrowdStrike",
    photo: photo4,
    companyLogo: "https://logo.clearbit.com/kpmg.com",
  },
  {
    id: 5,
    name: "Ayesha Sheikh",
    ctc: "13 LPA",
    company: "COHESITY",
    photo: photo5,
    companyLogo: "https://logo.clearbit.com/nestle.com",
  },
  {
    id: 6,
    name: "Aniket Kharote",
    ctc: "10.50 LPA",
    company: "PHILIPS",
    photo: photo6,
    companyLogo: "https://logo.clearbit.com/blackrock.com",
  },
  {
    id: 7,
    name: "Kritika Raina",
    ctc: "10 LPA",
    company: "Mastercard",
    photo: photo7,
    companyLogo: "https://logo.clearbit.com/infosys.com",
  },
  {
    id: 8,
    name: "Jay Divate",
    ctc: "10 LPA",
    company: "epam",
    photo: photo8,
    companyLogo: "https://logo.clearbit.com/ubs.com",
  },
  {
    id: 9,
    name: "Trisha Chowdhary",
    ctc: "0000 LPA",
    company: "faurecia",
    photo: photo9,
    companyLogo: "https://logo.clearbit.com/bnymellon.com",
  },
  {
    id: 10,
    name: "Omkar Hatte",
    ctc: "0000 LPA",
    company: "Piaggio",
    photo: photo10,
    companyLogo: "https://logo.clearbit.com/mercedes-benz.com",
  },
  {
    id: 11,
    name: "Suraj Pawar",
    ctc: "0000 LPA",
    company: "MAN trucks and bus",
    // photo: photo11,
    companyLogo: "https://logo.clearbit.com/pwc.com",
  },
  {
    id: 12,
    name: "Baburao Konuri",
    ctc: "0000 LPA",
    company: "YASH Technologies",
    // photo: photo12,
    companyLogo: "https://logo.clearbit.com/fisglobal.com",
  },
  {
    id: 13,
    name: "Juie Bankar",
    ctc: "0000 LPA",
    company: "Force Motors",
    // photo: photo13,
    companyLogo: "https://logo.clearbit.com/tatatechnologies.com",
  },
  {
    id: 14,
    name: "Apeksha Kapadnis",
    ctc: "0000 LPA",
    company: "Persistent",
    // photo: photo14,
    companyLogo: "https://logo.clearbit.com/whirlpool.com",
  },
  {
    id: 15,
    name: "Sakshi Sharma",
    ctc: "0000 LPA",
    company: "Data axle",
    // photo: photo15,
    companyLogo: "https://logo.clearbit.com/mondelezinternational.com",
  },
  {
    id: 16,
    name: "Ruchika Dhope",
    ctc: "0000 LPA",
    company: "vanderlande",
    // photo: photo16,
    companyLogo: "https://logo.clearbit.com/kpit.com",
  },
  {
    id: 17,
    name: "Aishwarya Sutar",
    ctc: "0000 LPA",
    company: "SAS",
    // photo: photo17,
    companyLogo: "https://logo.clearbit.com/anz.com",
  },
  {
    id: 18,
    name: "Vinday Solanki",
    ctc: "0000 LPA",
    company: "Hexaware",
    // photo: photo18,
    companyLogo: "https://logo.clearbit.com/anz.com",
  },
];

// Read order: left-to-right within each row, then top-to-bottom.
const gridSlotOrder = [
  1, 11, 12, 20, 5, 13, 16, 4, 3, 22, 23, 24, 18, 7, 21, 19, 6, 17,
];

const slotConfig = {
  1: {
    type: "horizontal",
    className: "lg:col-span-2 lg:row-span-1 lg:col-start-1 lg:row-start-1",
  },
  3: {
    type: "horizontal",
    className: "lg:col-span-2 lg:row-span-1 lg:col-start-2 lg:row-start-3",
  },
  4: {
    type: "vertical",
    className: "lg:col-span-1 lg:row-span-2 lg:col-start-1 lg:row-start-3",
  },
  5: {
    type: "horizontal",
    className: "lg:col-span-2 lg:row-span-1 lg:col-start-1 lg:row-start-2",
  },
  6: {
    type: "horizontal",
    className: "lg:col-span-2 lg:row-span-1 lg:col-start-2 lg:row-start-6",
  },
  7: {
    type: "vertical",
    className: "lg:col-span-1 lg:row-span-2 lg:col-start-1 lg:row-start-5",
  },
  11: {
    type: "vertical",
    className: "lg:col-span-1 lg:row-span-2 lg:col-start-3 lg:row-start-1",
  },
  12: {
    type: "horizontal",
    className: "lg:col-span-2 lg:row-span-1 lg:col-start-4 lg:row-start-1",
  },
  13: {
    type: "vertical",
    className: "lg:col-span-1 lg:row-span-2 lg:col-start-4 lg:row-start-2",
  },
  16: {
    type: "vertical",
    className: "lg:col-span-1 lg:row-span-2 lg:col-start-5 lg:row-start-2",
  },
  17: {
    type: "horizontal",
    className: "lg:col-span-2 lg:row-span-1 lg:col-start-5 lg:row-start-6",
  },
  18: {
    type: "horizontal",
    className: "lg:col-span-2 lg:row-span-1 lg:col-start-4 lg:row-start-4",
  },
  19: {
    type: "horizontal",
    className: "lg:col-span-2 lg:row-span-1 lg:col-start-5 lg:row-start-5",
  },
  20: {
    type: "vertical",
    className: "lg:col-span-1 lg:row-span-2 lg:col-start-6 lg:row-start-1",
  },
  21: {
    type: "vertical",
    className: "lg:col-span-1 lg:row-span-2 lg:col-start-4 lg:row-start-5",
  },
  22: {
    type: "vertical",
    className: "lg:col-span-1 lg:row-span-2 lg:col-start-6 lg:row-start-3",
  },
  23: {
    type: "vertical",
    className: "lg:col-span-1 lg:row-span-2 lg:col-start-2 lg:row-start-4",
  },
  24: {
    type: "vertical",
    className: "lg:col-span-1 lg:row-span-2 lg:col-start-3 lg:row-start-4",
  },
};

function getCtcValue(ctc) {
  const matched = String(ctc).match(/[\d.]+/);
  if (!matched) return 0;
  const numeric = Number(matched[0]);
  return Number.isFinite(numeric) ? numeric : 0;
}

const duplicateStudent = studentCards.reduce((best, candidate) => {
  return getCtcValue(candidate.ctc) > getCtcValue(best.ctc) ? candidate : best;
}, studentCards[0]);

const positionedCards = gridSlotOrder.map((slot, index) => {
  const student = studentCards[index] || duplicateStudent;
  return {
    slot,
    student,
    orientation: slotConfig[slot].type,
  };
});
const collegesById = {
  1: "Indira college of Engineering and Management, Pune",
  2: "Indira college of Engineering and Management, Pune",
  3: "Ramdeobaba University",
  4: "Indira college of Engineering and Management, Pune",
  5: "Indira college of Engineering and Management, Pune",
  6: "Indira Institute of Management, Pune",
  7: "Indira college of Engineering and Management, Pune",
  8: "ISBR Business School, Bangalore",
  9: "iFEEL - Institute for Future Education, Entrepreneurship and Leadership, Pune",
  10: "Indira college of Engineering and Management, Pune",
  11: "MET Bhujbal Knowledge City, Nashik",
  12: "Indira college of Engineering and Management, Pune",
  13: "Sanjivani College of Engineering, Kopargaon",
  14: "SNJB KBJ College of Engineering, Chandwad",
  15: "Lexicon MILE - Management Institute of Leadership and Excellence, Pune",
  16: "Lexicon MILE - Management Institute of Leadership and Excellence, Pune",
  17: "Indira School of Business Studies, Pune",
  18: "Indira college of Engineering and Management, Pune",
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

function StudentCard({ student, orientation }) {
  const isHorizontal = orientation === "horizontal";
  const college = collegesById[student.id] || "Gryphon Partner College";

  return (
    <article className="group relative h-full overflow-hidden rounded-xl border border-[#1d3557]/30 bg-linear-to-br from-[#f5f8ff] via-[#edf4ff] to-[#fefeff] shadow-[0_10px_24px_rgba(12,32,62,0.16)] transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_18px_32px_rgba(12,32,62,0.24)]">
      <div className="pointer-events-none absolute -right-10 -top-10 h-20 w-20 rounded-full bg-[#7b1b2a]/15 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-8 -left-8 h-20 w-20 rounded-full bg-[#1b3a6b]/20 blur-2xl" />

      <div
        className={`relative z-10 flex h-full ${isHorizontal ? "flex-row" : "flex-col"}`}
      >
        <div
          className={`relative shrink-0 basis-1/2 overflow-hidden ${
            isHorizontal ? "w-1/2" : "h-1/2"
          }`}
        >
          <div className="absolute right-2 top-2 z-20 rounded-md bg-linear-to-r from-[#1b3a6b] to-[#7b1b2a] px-2 py-1 text-[10px] font-extrabold tracking-wide text-white shadow-[0_6px_14px_rgba(8,26,54,0.35)] md:text-[11px]">
            {student.ctc}
          </div>
          <img
            src={student.photo}
            alt={student.name}
            className="h-full w-full object-contain transition-transform duration-400 group-hover:scale-[1.05]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#0b132b]/35 to-transparent" />
        </div>

        <div
          className={`flex min-h-0 shrink-0 basis-1/2 ${
            isHorizontal ? "w-1/2 p-2.5 md:p-3" : "h-1/2 p-2 md:p-2.5"
          } flex-col justify-between`}
        >
          <div className="min-h-0">
            <h3 className="line-clamp-2 text-sm font-bold leading-tight text-[#081a36] md:text-[15px]">
              {student.name}
            </h3>

            <p className="mt-1 line-clamp-2 text-[10px] font-medium leading-snug text-[#1b3a6b] md:text-[11px]">
              {college}
            </p>
          </div>

          <div className="mt-1 flex justify-center pb-1">
            <img
              src={student.companyLogo}
              alt={`${student.company} logo`}
              className="h-10 w-24 shrink-0 rounded object-contain md:h-11 md:w-28"
              onError={(event) => handleLogoError(event, student.company)}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </article>
  );
}

export default function TopPlaced() {
  return (
    <section className="w-full bg-linear-to-b from-[#f6f2ec] to-[#ece7df] px-4 py-6 md:py-8">
      <div className="mx-auto w-full max-w-375">
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

        <div className="grid w-full grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-6 lg:auto-rows-[180px]">
          {positionedCards.map(({ slot, student, orientation }) => (
            <div key={`slot-${slot}`} className={slotConfig[slot].className}>
              <StudentCard student={student} orientation={orientation} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
