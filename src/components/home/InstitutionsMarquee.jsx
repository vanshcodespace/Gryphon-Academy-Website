import { useCallback, useEffect, useRef, useState } from "react";
import collegePartners from "../../data/collegePartners.json";

// Dynamically import all images from the College Partners folder
const collegeModules = import.meta.glob(
  "../../assets/GA College Partners/*.{png,jpg,jpeg,svg,webp,avif}",
  { eager: true },
);

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

const toTitleCase = (value) =>
  value
    .replaceAll(/[_-]+/g, " ")
    .replaceAll(/\s+/g, " ")
    .trim()
    .replaceAll(/\b\w/g, (char) => char.toUpperCase());

const allColleges = collegePartners
  .map((college) => {
    const fileName = college.imagePath.split("/").pop() || "";
    const fileKey = fileName.replace(/\.[^/.]+$/, "") || String(college.id || "");
    const module = collegeModules[college.imagePath];

    return {
      id: String(college.id || fileKey),
      logo: module?.default || module || null,
      name: college.name || toTitleCase(fileKey),
      category: college.category || "Institution",
      location: college.location || "India",
      type: college.type || "University",
    };
  })
  .sort((a, b) => {
    const aNum = Number.parseInt(a.id, 10);
    const bNum = Number.parseInt(b.id, 10);

    if (!Number.isNaN(aNum) && !Number.isNaN(bNum)) return aNum - bNum;
    if (!Number.isNaN(aNum)) return -1;
    if (!Number.isNaN(bNum)) return 1;
    return a.id.localeCompare(b.id);
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

  const tooltipW = 300;
  const gap = 12;
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
    ? cardRect.top - containerRect.top - 204 - gap
    : cardRect.bottom - containerRect.top + gap;

  const arrowLeft = cardCenterX - left;
  const catStyle = getCategoryStyle(college.category);
  const gradientAura = `radial-gradient(circle at 18% 20%, ${catStyle.text}40 0%, transparent 52%), radial-gradient(circle at 84% 88%, ${catStyle.border}55 0%, transparent 50%)`;

  return (
    <div
      className="pointer-events-none absolute z-50"
      style={{
        left,
        top,
        width: tooltipW,
        animation: "tooltipIn 0.28s cubic-bezier(0.22, 1, 0.36, 1) both",
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
          [showAbove ? "borderTop" : "borderBottom"]: `${arrowSize}px solid rgba(7, 12, 25, 0.86)`,
        }}
      />

      {/* Card body */}
      <div
        className="relative overflow-hidden rounded-2xl p-5"
        style={{
          background: `linear-gradient(145deg, rgba(10, 14, 30, 0.92), rgba(8, 11, 24, 0.86)), ${gradientAura}`,
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: `1px solid ${catStyle.border}`,
          boxShadow: `0 18px 46px rgba(3, 7, 18, 0.65), 0 0 0 1px ${catStyle.text}30, 0 0 40px ${catStyle.text}25`,
        }}
      >
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background:
              "linear-gradient(115deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 40%), repeating-linear-gradient(0deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 8px)",
            mixBlendMode: "soft-light",
          }}
        />
        <div
          className="absolute -right-16 -top-16 h-44 w-44 rounded-full opacity-75"
          style={{
            background: `radial-gradient(circle, ${catStyle.text}70 0%, transparent 70%)`,
            filter: "blur(2px)",
            animation: "tooltipGlow 3.2s ease-in-out infinite",
          }}
        />

        <div className="relative z-10">
        {/* Name block */}
        <div className="flex flex-col gap-2">
          <p
            className="text-[1.15rem] font-black leading-tight text-white"
            style={{
              fontFamily: "'Avenir Next', 'Trebuchet MS', 'Segoe UI', sans-serif",
              letterSpacing: "0.01em",
              textShadow: "0 2px 12px rgba(7, 12, 25, 0.75)",
            }}
          >
            {college.name}
          </p>
          <div>
            <span
              className="inline-block rounded-full px-2.5 py-1 text-[11px] font-black uppercase tracking-[0.12em]"
              style={{
                background: `linear-gradient(90deg, ${catStyle.bg}, #121a33)`,
                color: catStyle.text,
                border: `1px solid ${catStyle.border}`,
                boxShadow: `0 0 14px ${catStyle.text}30`,
              }}
            >
              {college.category}
            </span>
          </div>
        </div>

        {/* Divider */}
        <div
          className="my-3 h-px w-full"
          style={{
            background: `linear-gradient(to right, transparent 0%, ${catStyle.text}80 48%, transparent 100%)`,
          }}
        />

        {/* Detail rows */}
        <div className="space-y-2.5 text-sm">
          <div className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-2 backdrop-blur-sm">
            <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-300/85">Location</p>
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4 shrink-0 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
              <span className="font-semibold text-slate-100">{college.location}</span>
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-2 backdrop-blur-sm">
            <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-300/85">Institution Type</p>
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4 shrink-0 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
              <span className="font-semibold text-slate-100">{college.type}</span>
            </div>
          </div>
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
        @keyframes tooltipGlow {
          0%, 100% { transform: scale(1); opacity: 0.58; }
          50% { transform: scale(1.08); opacity: 0.88; }
        }
      `}</style>

      <div
        className={`relative flex w-full flex-col items-center ${SECTION_PADDING_CLASS}`}
      >
        {/* Header */}
        <div className={`relative z-30 flex flex-col items-center ${HEADING_MARGIN_CLASS}`}>
          <h3
            className="pb-1 text-center text-5xl font-bold tracking-tighter sm:text-6xl lg:text-6xl"
            style={{
              fontFamily: "system-ui, -apple-system, sans-serif",
              background: "linear-gradient(to right, #1B3A6B, #7B1B2A)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              /* ↓ Edit these to fix letter clipping */
              lineHeight: 1.2,
              paddingLeft: "0.05em",
              paddingRight: "0.05em",
            }}
          >
            Our College Partners
          </h3>
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
