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
import logo12 from "../../assets/TopPlaced/Logos/12.webp";
import logo13 from "../../assets/TopPlaced/Logos/13.webp";
import logo14 from "../../assets/TopPlaced/Logos/14.webp";
import logo15 from "../../assets/TopPlaced/Logos/15.webp";
import logo16 from "../../assets/TopPlaced/Logos/16.webp";
// import logo17 from "../../assets/TopPlaced/Logos/17.webp";
// import logo18 from "../../assets/TopPlaced/Logos/18.webp";
 
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
    companyLogo: logo16,
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
    companyLogo: logo14,
  },
  {
    id: 15,
    name: "Aryan Sasane",
    ctc: "000 LPA",
    company: "Godrej",
    photo: photo15,
    companyLogo: logo15,
  },
  {
    id: 16,
    name: "Ruchika Dhope",
    ctc: "000 LPA",
    company: "vanderlande",
    photo: photo16,
    companyLogo: logo13,
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
const SCROLLER_CARD_HEIGHT = "280px";
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
      className="group relative overflow-hidden rounded-3xl border-2 border-[#1B3A6B]/20 bg-linear-to-br from-white via-[#f5f9ff] to-[#f0f7ff] shadow-lg hover:shadow-2xl transition-all duration-300"
      style={{ width: SCROLLER_CARD_WIDTH, height: SCROLLER_CARD_HEIGHT }}
    >
      {/* Background glow effect */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#1B3A6B]/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-[#7B1B2A]/10 blur-3xl" />
 
      <div className="relative z-10 flex h-full flex-col">
        {/* Photo section - Circular and compact */}
        <div className="relative shrink-0 flex items-center justify-center py-2 bg-linear-to-b from-[#f0f7ff] to-white">
          <div className="relative h-20 w-20 rounded-full overflow-hidden bg-gradient-to-br from-[#e6f2ff] to-[#d0ddef] border-3 border-[#1B3A6B]/30 shadow-md">
            <img
              src={student.photo}
              alt={student.name}
              className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110 brightness-100 group-hover:brightness-110"
              loading="lazy"
            />
          </div>
        </div>
 
        {/* Content section */}
        <div className="flex min-h-0 flex-1 flex-col items-center justify-between px-2 py-1 pb-2 text-center space-y-0">
          {/* Student Name and College - PROMINENT */}
          <div className="w-full min-h-[35px] flex flex-col justify-center">
            <h3 className="line-clamp-1 text-base font-black leading-tight text-[#081a36] md:text-lg tracking-tight" style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>
              {student.name}
            </h3>
            <p className="line-clamp-3 text-[8px] font-extrabold text-[#1B3A6B] uppercase tracking-wider leading-tight" style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>
              {college}
            </p>
          </div>
 
          {/* CTC Badge - LARGE AND PROMINENT */}
          <div className="w-full px-1">
            <div className="inline-block px-3 py-0.5 text-center">
              <span
                className="text-lg font-black drop-shadow-sm"
                style={{
                  fontFamily: "system-ui, -apple-system, sans-serif",
                  background: "linear-gradient(to right, #1B3A6B, #7B1B2A)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {student.ctc}
              </span>
            </div>
          </div>
 
          {/* Company Logo - HIGHLIGHTED AND CENTERED */}
          <div className="-mt-3 w-full flex flex-col items-center">
            <div className=" rounded-sm border-1 border-gray-600 bg-white shadow-lg overflow-hidden flex items-center justify-center md:h-20 md:w-32 hover:border-gray-800 transition-all">
              <img
                src={student.companyLogo || getInitialsLogo(student.company)}
                alt={`${student.company} logo`}
                onError={(event) => handleLogoError(event, student.company)}
                loading="lazy"
              />
            </div>
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
  const [autoScrollProgress, setAutoScrollProgress] = useState(100);
  const isHoveringRef = useRef(false);
  const cardsPerPage = 2;
  const totalPages = Math.max(Math.ceil(studentCards.length / cardsPerPage), 1);
  const lastPageIndex = Math.max(totalPages - 1, 0);
 
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
 
  const AUTO_SCROLL_DELAY = 5000;
  const PROGRESS_UPDATE_INTERVAL = 100;
 
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
 
  useEffect(() => {
    let timeElapsed = 0;
    const displayedPages = Math.max(totalPages - 2, 1);
    const displayedLastPageIndex = displayedPages - 1;
 
    // Single interval that manages both progress and auto-scroll
    const interval = setInterval(() => {
      if (!isHoveringRef.current) {
        timeElapsed += PROGRESS_UPDATE_INTERVAL;
        const progress = Math.max(
          0,
          100 - (timeElapsed / AUTO_SCROLL_DELAY) * 100,
        );
        setAutoScrollProgress(progress);
 
        if (timeElapsed >= AUTO_SCROLL_DELAY) {
          // After the last visible dot, loop back to the first page.
          const effectiveActivePage = Math.min(activePage, displayedLastPageIndex);
          const nextPage = effectiveActivePage >= displayedLastPageIndex ? 0 : effectiveActivePage + 1;
          goToCard(nextPage);
          timeElapsed = 0;
          setAutoScrollProgress(100);
        }
      }
    }, PROGRESS_UPDATE_INTERVAL);
 
    return () => {
      clearInterval(interval);
    };
  }, [activePage, goToCard, totalPages]);
 
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
 
  return (
    <section className="w-full overflow-x-hidden px-4 py-8 md:py-12" style={{ background: "#BCDEF4" }}>
      <div className="mx-auto w-full max-w-[1370px]">
        <div className="mb-10 text-center md:mb-12">
          <h2
            className="mb-4 text-5xl font-bold tracking-tighter sm:text-6xl lg:text-6xl"
            style={{
              fontFamily: "system-ui, -apple-system, sans-serif",
              background: "linear-gradient(to right, #1B3A6B, #7B1B2A)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              /* ↓ Use lineHeight (not paddingBottom) to prevent letter clipping
                    paddingBottom causes the gradient to show as a coloured strip  */
              lineHeight: 1.2,
              paddingLeft: "0.05em",
              paddingRight: "0.05em",
            }}
          >
            Top Placements
          </h2>
          <p className="text-base md:text-lg font-semibold text-[#4a5568] tracking-wide" style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>
            Meet our highest achievers
          </p>
        </div>
 
        <div className="relative">
          <div
            className="overflow-x-auto pb-4 [scrollbar-width:none] scroll-smooth"
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
 
          <div className="mt-3 flex items-center justify-center gap-2.5 lg:gap-3">
            <button
              type="button"
              onClick={() => scrollTrack("prev")}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1B3A6B] text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 hover:bg-[#2d5a8c] disabled:bg-gray-300 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:scale-100 disabled:shadow-none font-bold"
              aria-label="Scroll placed students left"
              disabled={!canScrollPrev}
            >
              <span className="text-lg">‹</span>
            </button>
 
            <div
              className="flex w-full items-center justify-center gap-2 lg:w-auto"
              onMouseEnter={() => {
                isHoveringRef.current = true;
              }}
              onMouseLeave={() => {
                isHoveringRef.current = false;
              }}
            >
              {(() => {
                const displayedPages = Math.max(totalPages - 2, 1);
                const displayedLastPageIndex = displayedPages - 1;
                const effectiveActivePage = Math.min(activePage, displayedLastPageIndex);
                
                return Array.from({ length: displayedPages }).map((_, index) => {
                  const isActive = index === effectiveActivePage;
                  return (
                    <button
                      type="button"
                      key={`dot-${index}`}
                      onClick={() => {
                        goToCard(index);
                        setAutoScrollProgress(100);
                        isHoveringRef.current = false;
                      }}
                      aria-label={`Go to student page ${index + 1}`}
                      className={`relative rounded-full transition-all duration-300 overflow-hidden flex items-center justify-center ${
                        isActive
                          ? "h-2 w-6 bg-[#1B3A6B]/20 shadow-md shadow-[#1B3A6B]/30"
                          : "h-2 w-2 bg-[#b8d0e8] hover:bg-[#1B3A6B] hover:shadow-md"
                      }`}
                    >
                      {isActive && (
                        <>
                          <div className="absolute inset-0 rounded-full bg-[#1B3A6B]" />
                          <div
                            className="absolute left-0 top-0 bottom-0 bg-[#1f6fa8] rounded-full"
                            style={{
                              width: `${autoScrollProgress}%`,
                              height: "100%",
                              transition: "width 0.1s linear",
                              willChange: "width",
                            }}
                          />
                          <div className="absolute inset-0 rounded-full border border-[#1B3A6B]/50" />
                        </>
                      )}
                    </button>
                  );
                });
              })()}
            </div>
 
            <button
              type="button"
              onClick={() => scrollTrack("next")}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1B3A6B] text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 hover:bg-[#2d5a8c] disabled:bg-gray-300 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:scale-100 disabled:shadow-none font-bold"
              aria-label="Scroll placed students right"
              disabled={!canScrollNext}
            >
              <span className="text-lg">›</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
 
 