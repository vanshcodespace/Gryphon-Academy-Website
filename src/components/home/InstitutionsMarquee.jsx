import { useCallback, useEffect, useMemo, useRef, useState } from "react";

// Dynamically import all images from the College Partners folder
const collegeModules = import.meta.glob(
  "../../assets/GA College Partners/*.{png,jpg,jpeg,svg,webp,avif}",
  { eager: true },
);

// Mapping of logo numbers (1-48) to institution details
const collegeDataMap = {
  1:  { name: "IIT Delhi",                          category: "IIT",             location: "New Delhi",           type: "Institute of National Importance" },
  2:  { name: "IIT Bombay",                         category: "IIT",             location: "Mumbai, Maharashtra", type: "Institute of National Importance" },
  3:  { name: "IIT Madras",                          category: "IIT",             location: "Chennai, Tamil Nadu", type: "Institute of National Importance" },
  4:  { name: "IIT Kharagpur",                       category: "IIT",             location: "Kharagpur, West Bengal", type: "Institute of National Importance" },
  5:  { name: "IIT Kanpur",                          category: "IIT",             location: "Kanpur, UP",          type: "Institute of National Importance" },
  6:  { name: "IIT Roorkee",                         category: "IIT",             location: "Roorkee, Uttarakhand", type: "Institute of National Importance" },
  7:  { name: "IIT Guwahati",                        category: "IIT",             location: "Guwahati, Assam",     type: "Institute of National Importance" },
  8:  { name: "IIT BHU",                            category: "IIT",             location: "Varanasi, UP",        type: "Institute of National Importance" },
  9:  { name: "NIT Trichy",                          category: "NIT",             location: "Tiruchirappalli, TN", type: "Institute of National Importance" },
  10: { name: "NIT Surathkal",                       category: "NIT",             location: "Surathkal, Karnataka", type: "Institute of National Importance" },
  11: { name: "NIT Warangal",                        category: "NIT",             location: "Warangal, Telangana", type: "Institute of National Importance" },
  12: { name: "NIT Calicut",                         category: "NIT",             location: "Calicut, Kerala",     type: "Institute of National Importance" },
  13: { name: "NIT Rourkela",                        category: "NIT",             location: "Rourkela, Odisha",    type: "Institute of National Importance" },
  14: { name: "NIT Durgapur",                        category: "NIT",             location: "Durgapur, West Bengal", type: "Institute of National Importance" },
  15: { name: "NIT Hamirpur",                        category: "NIT",             location: "Hamirpur, HP",        type: "Institute of National Importance" },
  16: { name: "NIT Jalandhar",                       category: "NIT",             location: "Jalandhar, Punjab",   type: "Institute of National Importance" },
  17: { name: "NIT Jaipur",                          category: "NIT",             location: "Jaipur, Rajasthan",   type: "Institute of National Importance" },
  18: { name: "NIT Allahabad",                       category: "NIT",             location: "Prayagraj, UP",       type: "Institute of National Importance" },
  19: { name: "BITS Pilani",                         category: "BITS",            location: "Pilani, Rajasthan",   type: "Deemed University" },
  20: { name: "BITS Goa",                            category: "BITS",            location: "Goa",                 type: "Deemed University" },
  21: { name: "BITS Hyderabad",                      category: "BITS",            location: "Hyderabad, Telangana", type: "Deemed University" },
  22: { name: "VIT Vellore",                         category: "VIT",             location: "Vellore, Tamil Nadu", type: "Deemed University" },
  23: { name: "Manipal Institute",                   category: "Private",         location: "Manipal, Karnataka",  type: "Deemed University" },
  24: { name: "SRM University",                      category: "Private",         location: "Chennai, Tamil Nadu", type: "Deemed University" },
  25: { name: "Amrita Vishwa Vidyapeetham",          category: "Private",         location: "Coimbatore, TN",      type: "Deemed University" },
  26: { name: "Anna University",                     category: "State University", location: "Chennai, Tamil Nadu", type: "State University" },
  27: { name: "Mumbai University",                   category: "State University", location: "Mumbai, Maharashtra", type: "State University" },
  28: { name: "Delhi University",                    category: "Central University", location: "New Delhi",         type: "Central University" },
  29: { name: "Pune University",                     category: "State University", location: "Pune, Maharashtra",   type: "State University" },
  30: { name: "Bangalore University",                category: "State University", location: "Bangalore, Karnataka", type: "State University" },
  31: { name: "Chennai University",                  category: "State University", location: "Chennai, Tamil Nadu", type: "State University" },
  32: { name: "Hyderabad University",                category: "State University", location: "Hyderabad, Telangana", type: "State University" },
  33: { name: "Calcutta University",                 category: "State University", location: "Kolkata, West Bengal", type: "State University" },
  34: { name: "Banaras Hindu University",            category: "Central University", location: "Varanasi, UP",     type: "Central University" },
  35: { name: "Jawaharlal Nehru University",         category: "Central University", location: "New Delhi",       type: "Central University" },
  36: { name: "University of Rajasthan",             category: "State University", location: "Jaipur, Rajasthan",   type: "State University" },
  37: { name: "Gujarat University",                  category: "State University", location: "Ahmedabad, Gujarat",  type: "State University" },
  38: { name: "Tamil Nadu Open University",          category: "State University", location: "Chennai, Tamil Nadu", type: "State Open University" },
  39: { name: "Dr. B.R. Ambedkar University",       category: "State University", location: "Agra, UP",            type: "State University" },
  40: { name: "Aligarh Muslim University",           category: "Central University", location: "Aligarh, UP",    type: "Central University" },
  41: { name: "Jamia Millia Islamia",                category: "Central University", location: "New Delhi",       type: "Central University" },
  42: { name: "DU College of Engineering",           category: "State University", location: "New Delhi",           type: "State University" },
  43: { name: "Delhi Technological University",      category: "State University", location: "New Delhi",           type: "State University" },
  44: { name: "Netaji Subhas University",            category: "State University", location: "Kolkata, West Bengal", type: "State University" },
  45: { name: "Christ University",                   category: "Private",         location: "Bangalore, Karnataka", type: "Deemed University" },
  46: { name: "JSS Science and Technology University", category: "Private",       location: "Mysore, Karnataka",   type: "Deemed University" },
  47: { name: "Savitribai Phule Pune University",    category: "State University", location: "Pune, Maharashtra",   type: "State University" },
  48: { name: "Lovely Professional University",      category: "Private",         location: "Jalandhar, Punjab",   type: "Private University" },
};

// Category badge color mapping
const categoryColors = {
  IIT:               { bg: "#1e3a5f", text: "#7db4ff", border: "#2d5a8a" },
  NIT:               { bg: "#1e3a5f", text: "#7db4ff", border: "#2d5a8a" },
  BITS:              { bg: "#3b2e5e", text: "#c4a7ff", border: "#5a4580" },
  VIT:               { bg: "#3b2e5e", text: "#c4a7ff", border: "#5a4580" },
  "Central University": { bg: "#1a3c34", text: "#6ee7b7", border: "#2d6b55" },
  "State University":   { bg: "#3a2e1a", text: "#fbbf24", border: "#6b5520" },
  Private:           { bg: "#3a1a2e", text: "#f9a8d4", border: "#6b2050" },
};

const getCategoryStyle = (category) => categoryColors[category] || categoryColors.Private;

const allColleges = Object.entries(collegeModules).map(([path, module]) => {
  const fileKey = path
    .split("/")
    .pop()
    .replace(/\.[^/.]+$/, "");
  const data = collegeDataMap[fileKey] || {};
  return {
    id: fileKey,
    logo: module.default || module,
    name: data.name || fileKey,
    category: data.category || "Institution",
    location: data.location || "India",
    type: data.type || "University",
  };
});

// Slice into three equal parts for the marquee rows
const collegeThird = Math.ceil(allColleges.length / 3);
const collegeRowOne   = allColleges.slice(0, collegeThird);
const collegeRowTwo   = allColleges.slice(collegeThird, collegeThird * 2);
const collegeRowThree = allColleges.slice(collegeThird * 2);

// Manual size controls (mirrors CorporateMarquee)
const CARDS_MAX_WIDTH_CLASS   = "max-w-8xl";
const SECTION_PADDING_CLASS   = "pt-7 pb-9 md:pt-9 md:pb-11";
const HEADING_MARGIN_CLASS    = "mb-5 md:mb-7";
const TRACK_GAP_CLASS         = "gap-1.5 sm:gap-2";
const TRACK_PADDING_CLASS     = "py-1.5";
const LOGO_FRAME_SIZE_CLASS   = "h-14 w-28 sm:h-16 sm:w-40 md:h-20 md:w-40";
const TRACK_FADE_MASK =
  "linear-gradient(to right, transparent 0%, black 10%, black 93%, transparent 100%)";

/* ─── Windows-style Hover Tooltip ───────────────────────────────── */
function Tooltip({ college, cardRect, containerRect }) {
  if (!college || !cardRect || !containerRect) return null;

  const tooltipW = 260;
  const gap = 10;
  const arrowSize = 8;

  // Decide whether tooltip appears above or below the card
  const spaceAbove = cardRect.top - containerRect.top;
  const spaceBelow = containerRect.bottom - cardRect.bottom;
  const showAbove = spaceBelow < 200 && spaceAbove > 200;

  // Horizontal: center tooltip on card, clamp within container
  const cardCenterX = cardRect.left - containerRect.left + cardRect.width / 2;
  let left = cardCenterX - tooltipW / 2;
  left = Math.max(8, Math.min(left, containerRect.width - tooltipW - 8));

  const top = showAbove
    ? cardRect.top - containerRect.top - 170 - gap
    : cardRect.bottom - containerRect.top + gap;

  const arrowLeft = cardCenterX - left;
  const catStyle = getCategoryStyle(college.category);

  return (
    <div
      className="pointer-events-none absolute z-50"
      style={{
        left,
        top,
        width: tooltipW,
        animation: "tooltipIn 0.18s ease-out both",
      }}
    >
      {/* Arrow */}
      <div
        className="absolute"
        style={{
          [showAbove ? "bottom" : "top"]: -arrowSize,
          left: arrowLeft - arrowSize,
          width: 0,
          height: 0,
          borderLeft: `${arrowSize}px solid transparent`,
          borderRight: `${arrowSize}px solid transparent`,
          [showAbove ? "borderTop" : "borderBottom"]: `${arrowSize}px solid rgba(15,23,42,0.92)`,
        }}
      />

      {/* Card body */}
      <div
        className="rounded-xl p-4"
        style={{
          background: "rgba(15,23,42,0.92)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          border: "1px solid rgba(255,255,255,0.12)",
          boxShadow:
            "0 12px 40px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.06)",
        }}
      >
        {/* Logo + Name row */}
        <div className="flex items-center gap-3">
          <div
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg"
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <img
              src={college.logo}
              alt=""
              className="max-h-8 max-w-8 object-contain"
            />
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-bold text-white leading-snug">
              {college.name}
            </p>
            <span
              className="mt-0.5 inline-block rounded-full px-2 py-px text-[10px] font-semibold leading-tight"
              style={{
                background: catStyle.bg,
                color: catStyle.text,
                border: `1px solid ${catStyle.border}`,
              }}
            >
              {college.category}
            </span>
          </div>
        </div>

        {/* Divider */}
        <div
          className="my-3 h-px"
          style={{ background: "rgba(255,255,255,0.08)" }}
        />

        {/* Detail rows */}
        <div className="space-y-1.5 text-xs">
          <div className="flex items-center gap-2">
            <svg className="h-3.5 w-3.5 shrink-0 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-slate-300">{college.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-3.5 w-3.5 shrink-0 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <span className="text-slate-300">{college.type}</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-3.5 w-3.5 shrink-0 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-emerald-400">GA Partner</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Marquee Track (identical to CorporateMarquee) ─────────────── */
function MarqueeTrack({ partners, reverse = false, speed = "50s", onMouseEnter, onMouseLeave }) {
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
            key={`${item.id}-${idx}`}
            onMouseEnter={(e) => onMouseEnter(e, item)}
            onMouseLeave={onMouseLeave}
            className="group/badge relative mx-2 flex items-center justify-center overflow-hidden rounded-2xl bg-white px-2 py-1.5 shadow-[0_4px_24px_rgba(0,0,0,0.03)] ring-1 ring-[#ffffff] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:bg-[#ffffff] hover:ring-[#93c5fd] md:mx-2.5 md:px-3 md:py-2 lg:py-2.5"
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
                  loading="lazy"
                />
              ) : (
                <span className="text-base font-extrabold tracking-wide text-[#334155] transition-colors duration-300 md:text-lg">
                  {item.name}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Main Component ────────────────────────────────────────────── */
export default function InstitutionsMarquee() {
  const [hoveredCollege, setHoveredCollege] = useState(null);
  const [cardRect, setCardRect] = useState(null);
  const [containerRect, setContainerRect] = useState(null);
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const containerRef = useRef(null);
  const hoverTimerRef = useRef(null);

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
    };
  }, []);

  const handleMouseEnter = useCallback((e, college) => {
    if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
    const rect = e.currentTarget.getBoundingClientRect();
    const cRect = containerRef.current?.getBoundingClientRect();
    setCardRect(rect);
    setContainerRect(cRect);
    setHoveredCollege(college);
    // Small delay like Windows folder tooltip
    hoverTimerRef.current = setTimeout(() => setTooltipVisible(true), 350);
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
    setTooltipVisible(false);
    // Keep college info briefly so tooltip can fade out
    hoverTimerRef.current = setTimeout(() => setHoveredCollege(null), 180);
  }, []);

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
        @keyframes tooltipIn {
          from { opacity: 0; transform: translateY(4px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div
        className={`relative flex w-full flex-col items-center ${SECTION_PADDING_CLASS}`}
      >
        {/* Header */}
        <div className={`relative z-30 flex flex-col items-center ${HEADING_MARGIN_CLASS}`}>
          <h3
            className="pb-1 text-center text-5xl font-bold tracking-tighter sm:text-6xl lg:text-5xl"
            style={{
              fontFamily: "system-ui, -apple-system, sans-serif",
              background: "linear-gradient(to right, #1B3A6B, #7B1B2A)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Our Top College Partners
          </h3>
          <p
            className="mt-3 text-lg text-center leading-relaxed sm:text-xl lg:text-xl lg:leading-[1.8]"
            style={{
              fontFamily: "system-ui, -apple-system, sans-serif",
              background: "linear-gradient(to right, #1B3A6B, #7B1B2A)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Partnering with Excellence Across Leading Institutions
          </p>
        </div>

        {/* Marquee rows with tooltip container */}
        <div
          ref={containerRef}
          className={`relative z-30 w-full ${CARDS_MAX_WIDTH_CLASS} px-4 sm:px-6 lg:px-8`}
        >
          <div className={`flex w-full flex-col ${TRACK_GAP_CLASS}`}>
            <MarqueeTrack
              partners={collegeRowOne}
              speed="80s"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            <MarqueeTrack
              partners={collegeRowTwo}
              reverse
              speed="85s"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            <MarqueeTrack
              partners={collegeRowThree}
              speed="80s"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          </div>

          {/* Windows-style Tooltip */}
          {hoveredCollege && tooltipVisible && (
            <Tooltip
              college={hoveredCollege}
              cardRect={cardRect}
              containerRect={containerRect}
            />
          )}
        </div>
      </div>
    </>
  );
}
