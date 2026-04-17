import { useCallback, useEffect, useRef, useState } from "react";
import photo1 from "../../assets/TopPlaced/1.webp";
import photo2 from "../../assets/TopPlaced/2.webp";
import photo3 from "../../assets/TopPlaced/3.webp";
import photo4 from "../../assets/TopPlaced/4.webp";
import photo5 from "../../assets/TopPlaced/5.webp";
import photo6 from "../../assets/TopPlaced/6.webp";
import photo7 from "../../assets/TopPlaced/7.webp";
import photo8 from "../../assets/TopPlaced/8.webp";
import photo9 from "../../assets/TopPlaced/9.webp";
import photo10 from "../../assets/TopPlaced/10.webp";
import photo11 from "../../assets/TopPlaced/11.webp";
import photo12 from "../../assets/TopPlaced/12.webp";
import photo13 from "../../assets/TopPlaced/13.webp";
import photo14 from "../../assets/TopPlaced/14.webp";
import photo15 from "../../assets/TopPlaced/15.webp";
import photo16 from "../../assets/TopPlaced/16.webp";
import photo17 from "../../assets/TopPlaced/17.webp";
import photo18 from "../../assets/TopPlaced/18.webp";
import logo1 from "../../assets/TopPlaced/Logos/1.webp";
import logo2 from "../../assets/TopPlaced/Logos/2.webp";
import logo3 from "../../assets/TopPlaced/Logos/3.webp";
import logo4 from "../../assets/TopPlaced/Logos/4.webp";
import logo5 from "../../assets/TopPlaced/Logos/5.webp";
import logo6 from "../../assets/TopPlaced/Logos/6.webp";
import logo7 from "../../assets/TopPlaced/Logos/7.webp";
import logo8 from "../../assets/TopPlaced/Logos/8.webp";
import logo9 from "../../assets/TopPlaced/Logos/9.webp";
import logo10 from "../../assets/TopPlaced/Logos/10.webp";
import logo11 from "../../assets/TopPlaced/Logos/11.webp";

const studentCards = [
  {
    id: 1,
    name: "Siddhant Kadam",
    ctc: "27 LPA",
    company: "JUSPAY",
    photo: photo1,
    companyLogo: logo1,
  },
  {
    id: 2,
    name: "Komal Verma",
    ctc: "26 LPA",
    company: "bp",
    photo: photo2,
    companyLogo: logo2,
  },
  {
    id: 3,
    name: "Suyog Parkhi",
    ctc: "21 LPA",
    company: "JUSPAY",
    photo: photo3,
    companyLogo: logo1,
  },
  {
    id: 4,
    name: "Omkar Biradar",
    ctc: "15 LPA",
    company: "CrowdStrike",
    photo: photo4,
    companyLogo: null,
  },
  {
    id: 5,
    name: "Ayesha Sheikh",
    ctc: "13 LPA",
    company: "COHESITY",
    photo: photo5,
    companyLogo: null,
  },
  {
    id: 6,
    name: "Aniket Kharote",
    ctc: "10.50 LPA",
    company: "PHILIPS",
    photo: photo6,
    companyLogo: logo3,
  },
  {
    id: 7,
    name: "Kritika Raina",
    ctc: "10 LPA",
    company: "Mastercard",
    photo: photo7,
    companyLogo: logo4,
  },
  {
    id: 8,
    name: "Jay Divate",
    ctc: "10 LPA",
    company: "epam",
    photo: photo8,
    companyLogo: logo5,
  },
  {
    id: 9,
    name: "Trisha Chowdhary",
    ctc: "000 LPA",
    company: "faurecia",
    photo: photo9,
    companyLogo: null,
  },
  {
    id: 10,
    name: "Omkar Hatte",
    ctc: "000 LPA",
    company: "Piaggio",
    photo: photo10,
    companyLogo: logo6,
  },
  {
    id: 11,
    name: "Suraj Pawar",
    ctc: "000 LPA",
    company: "MAN trucks and bus",
    photo: photo11,
    companyLogo: logo7,
  },
  {
    id: 12,
    name: "Baburao Konuri",
    ctc: "000 LPA",
    company: "YASH Technologies",
    photo: photo12,
    companyLogo: logo8,
  },
  {
    id: 13,
    name: "Juie Bankar",
    ctc: "000 LPA",
    company: "Force Motors",
    photo: photo13,
    companyLogo: logo9,
  },
  {
    id: 14,
    name: "Apeksha Kapadnis",
    ctc: "000 LPA",
    company: "Persistent",
    photo: photo14,
    companyLogo: null,
  },
  {
    id: 15,
    name: "Aryan Sasane",
    ctc: "000 LPA",
    company: "Godrej",
    photo: photo15,
    companyLogo: null,
  },
  {
    id: 16,
    name: "Ruchika Dhope",
    ctc: "000 LPA",
    company: "vanderlande",
    photo: photo16,
    companyLogo: null,
  },
  {
    id: 17,
    name: "Sakshi Sharma",
    ctc: "000 LPA",
    company: "Data axle",
    photo: photo17,
    companyLogo: logo10,
  },
  {
    id: 18,
    name: "Suraj More",
    ctc: "000 LPA",
    company: "Hettich",
    photo: photo18,
    companyLogo: logo11,
  },
];

const SCROLLER_CARD_WIDTH = "clamp(190px, 64vw, 225px)";
const SCROLLER_CARD_HEIGHT = "360px";
const IMAGE_SPLIT_VERTICAL = 0.55;
const CTC_TOP_MARGIN_VERTICAL = 9;
const SCROLLER_GAP = 16;

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
  15: "Sanjivani College of Engineering, Kopargaon",
  16: "Lexicon MILE - Management Institute of Leadership and Excellence, Pune",
  17: "Lexicon MILE - Management Institute of Leadership and Excellence, Pune",
  18: "Dnyanshree Institute of Engineering and Technology, Satara",
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
      <text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle" font-family="Myriad Pro, sans-serif" font-size="22" font-weight="700" fill="#1B3A6B">${initials}</text>
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

function StudentCard({ student }) {
  const college = collegesById[student.id] || "Gryphon Partner College";

  return (
    <article
      className="group relative overflow-hidden rounded-2xl border border-[#1b3a6b]/20 bg-linear-to-br from-[#ffffff] via-[#f0f7ff] to-[#e6f2ff] shadow-[0_12px_28px_rgba(27,58,107,0.18)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(27,58,107,0.28)]"
      style={{ width: SCROLLER_CARD_WIDTH, height: SCROLLER_CARD_HEIGHT }}
    >
      <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-linear-to-br from-[#7b1b2a]/20 to-[#1b3a6b]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-12 -left-12 h-32 w-32 rounded-full bg-linear-to-tr from-[#1b3a6b]/20 to-[#7b1b2a]/10 blur-3xl" />

      <div className="relative z-10 flex h-full flex-col">
        <div
          className="relative shrink-0 overflow-hidden bg-linear-to-br from-[#f0f7ff] to-[#dff1fb]"
          style={{ flexBasis: `${IMAGE_SPLIT_VERTICAL * 100}%` }}
        >
          <img
            src={student.photo}
            alt={student.name}
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-110 brightness-95 group-hover:brightness-100"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#1b3a6b]/40 via-transparent to-transparent" />
        </div>

        <div className="flex min-h-0 flex-1 flex-col items-center px-3 pb-3 pt-3.5 text-center">
          <div className="min-h-0 text-center">
            <h3 className="line-clamp-2 text-[13px] font-bold leading-snug tracking-tight text-[#081a36] md:text-sm">
              {student.name}
            </h3>

            <p className="mt-0.5 line-clamp-2 text-[8px] font-semibold leading-tight tracking-wide uppercase text-[#1b3a6b]/80 md:text-[9px]">
              {college}
            </p>
          </div>

          <div
            className="mt-2 rounded-lg border border-white/30 bg-linear-to-r from-[#1b3a6b] via-[#2d5a8c] to-[#7b1b2a] px-3 py-1.5 text-[10px] font-extrabold tracking-widest text-white shadow-[0_8px_20px_rgba(27,58,107,0.35)] backdrop-blur-sm md:text-[11px]"
            style={{ marginTop: `${CTC_TOP_MARGIN_VERTICAL}px` }}
          >
            {student.ctc}
          </div>

          <div className="mt-auto h-12 w-full overflow-hidden rounded-t-lg rounded-b-none border border-[#9ac9e4]/45 border-b-0 bg-white shadow-[0_6px_14px_rgba(27,58,107,0.18)] md:h-14">
            <img
              src={student.companyLogo || getInitialsLogo(student.company)}
              alt={`${student.company} logo`}
              className="h-full w-full object-contain"
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
  const trackRef = useRef(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const [activePage, setActivePage] = useState(0);
  const cardsPerPage = 2;
  const totalPages = Math.max(Math.ceil(studentCards.length / cardsPerPage), 1);

  const getScrollStep = useCallback(() => {
    const track = trackRef.current;
    if (!track) return 225 + SCROLLER_GAP;

    const card = track.querySelector("[data-top-placed-card='true']");
    if (!card) return 225 + SCROLLER_GAP;

    return card.getBoundingClientRect().width + SCROLLER_GAP;
  }, []);

  const updateScrollState = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const step = getScrollStep();
    const pageStep = step * cardsPerPage;
    const maxScrollLeft = Math.max(track.scrollWidth - track.clientWidth, 0);
    const nextCanScrollPrev = track.scrollLeft > 1;
    const nextCanScrollNext = track.scrollLeft < maxScrollLeft - 1;
    const nextActiveIndex = Math.max(
      0,
      Math.min(totalPages - 1, Math.round(track.scrollLeft / pageStep)),
    );

    setCanScrollPrev(nextCanScrollPrev);
    setCanScrollNext(nextCanScrollNext);
    setActivePage(nextActiveIndex);
  }, [cardsPerPage, getScrollStep, totalPages]);

  useEffect(() => {
    updateScrollState();

    const track = trackRef.current;
    if (!track) return undefined;

    const handleScroll = () => updateScrollState();
    track.addEventListener("scroll", handleScroll, { passive: true });

    const resizeObserver =
      typeof ResizeObserver === "undefined"
        ? null
        : new ResizeObserver(() => updateScrollState());

    if (resizeObserver) {
      resizeObserver.observe(track);
    }

    window.addEventListener("resize", updateScrollState);

    return () => {
      track.removeEventListener("scroll", handleScroll);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  const scrollTrack = useCallback(
    (direction) => {
      const track = trackRef.current;
      if (!track) return;

      const delta = getScrollStep() * cardsPerPage;

      track.scrollBy({
        left: direction === "next" ? delta : -delta,
        behavior: "smooth",
      });
    },
    [cardsPerPage, getScrollStep],
  );

  const goToCard = useCallback(
    (index) => {
      const track = trackRef.current;
      if (!track) return;

      const targetIndex = Math.max(0, Math.min(totalPages - 1, index));
      const delta = getScrollStep() * cardsPerPage;

      track.scrollTo({
        left: targetIndex * delta,
        behavior: "smooth",
      });
    },
    [cardsPerPage, getScrollStep, totalPages],
  );

  return (
    <section className="w-full overflow-hidden bg-linear-to-b from-[#ffffff] via-[#f8fbff] to-[#f0f7ff] px-4 py-8 md:py-10">
      <div className="mx-auto w-full max-w-[1370px]">
        <div className="mb-8 text-center md:mb-10">
          <h2
            className="mb-2 text-4xl font-bold tracking-tight sm:text-5xl lg:text-5xl"
            style={{
              background: "linear-gradient(to right, #1B3A6B, #7B1B2A)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Our Top Placed Students
          </h2>
          <p className="text-sm md:text-base text-[#1b3a6b]/70 font-medium tracking-wide">
            Success stories from Gryphon Academy alumni
          </p>
        </div>

        <div className="relative">
          <div
            className="overflow-x-auto pb-4 [scrollbar-width:thin] scroll-smooth"
            ref={trackRef}
          >
            <div className="flex w-max gap-4 pr-2">
              {studentCards.map((student) => (
                <div
                  key={student.id}
                  className="shrink-0 snap-start"
                  data-top-placed-card="true"
                >
                  <StudentCard student={student} />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 flex items-center justify-center gap-3 lg:gap-3.5">
            <button
              type="button"
              onClick={() => scrollTrack("prev")}
              className="relative flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#5a9fcc] bg-linear-to-br from-white/70 to-white/50 text-2xl text-[#1f709d] shadow-[0_4px_12px_rgba(35,105,150,0.18)] transition-all duration-300 hover:-translate-y-1 hover:from-white/85 hover:to-white/65 hover:shadow-[0_8px_16px_rgba(35,105,150,0.24)] hover:border-[#3d8dbe] disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:translate-y-0 disabled:shadow-[0_2px_6px_rgba(35,105,150,0.08)] font-semibold"
              aria-label="Scroll placed students left"
              disabled={!canScrollPrev}
            >
              <span className="-mt-0.5">←</span>
            </button>

            <div className="flex items-center justify-center gap-2 w-full lg:w-auto">
              {Array.from({ length: totalPages }).map((_, index) => {
                const isActive = index === activePage;
                return (
                  <button
                    type="button"
                    key={`dot-${index}`}
                    onClick={() => goToCard(index)}
                    aria-label={`Go to student page ${index + 1}`}
                    disabled={index === activePage}
                    className={`rounded-full transition-all duration-300 overflow-hidden relative border border-[#2f84b8]/70 shadow-[0_2px_6px_rgba(31,106,168,0.18)] ${
                      isActive
                        ? "h-10 w-3.5 bg-[#1f6fa8] shadow-[0_4px_10px_rgba(47,132,184,0.35)] lg:h-11 lg:w-4"
                        : "h-4 w-2.5 bg-[#5fa0c9]/85 hover:bg-[#1f6fa8] hover:shadow-[0_3px_8px_rgba(31,106,168,0.22)]"
                    }`}
                  >
                    <div className="absolute inset-0 rounded-full pointer-events-none bg-white/10" />
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => scrollTrack("next")}
              className="relative flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#5a9fcc] bg-linear-to-br from-white/70 to-white/50 text-2xl text-[#1f709d] shadow-[0_4px_12px_rgba(35,105,150,0.18)] transition-all duration-300 hover:-translate-y-1 hover:from-white/85 hover:to-white/65 hover:shadow-[0_8px_16px_rgba(35,105,150,0.24)] hover:border-[#3d8dbe] disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:translate-y-0 disabled:shadow-[0_2px_6px_rgba(35,105,150,0.08)] font-semibold"
              aria-label="Scroll placed students right"
              disabled={!canScrollNext}
            >
              <span className="-mt-0.5">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
