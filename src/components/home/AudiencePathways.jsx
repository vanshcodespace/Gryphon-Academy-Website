import { useMemo, useState } from "react";

const pathways = [
  {
    id: "colleges",
    label: "FOR COLLEGES",
    icon: "🏛️",
    title: "Your Institution's Complete Growth Partner.",
    intro:
      "From student training and faculty development to digital branding, admissions, and corporate placement - we handle every dimension of institutional growth, so you focus on academics.",
    points: [
      "Professional training embedded in your curriculum (IRP & CLDP)",
      "Faculty Development Programmes (FDPs)",
      "Digital marketing, branding & website development",
      "End-to-end admissions support",
    ],
  },
  {
    id: "corporate",
    label: "FOR CORPORATE",
    icon: "🏢",
    title: "Trained Talent. Zero Cost. Pan-India.",
    intro:
      "Skip the friction of unready candidates. We deliver pre-trained, role-aligned graduates from 55+ institutions and manage your entire campus drive - at no charge.",
    points: [
      "Zero-cost end-to-end campus hiring",
      "Pre-trained talent across all major streams",
      "JD-aligned candidate preparation",
      "Pan-India drives across 25+ cities",
      "Corporate training & L&D solutions",
    ],
  },
  {
    id: "students",
    label: "FOR STUDENTS",
    icon: "🎓",
    title: "We Train You. We Prepare You. We Place You.",
    intro:
      "Two years of structured, practitioner-led training inside your college - building the skills, tools, and confidence that India's top employers hire for. Free of charge, always.",
    points: [
      "Communication, aptitude & domain training",
      "Power BI, SQL, Excel, Looker Studio & Gen AI",
      "CV prep, mock GDs & PI practice",
      "Personal branding & LinkedIn optimisation",
      "Access to 450+ hiring partners",
    ],
  },
];

function ConnectorArrow({ activeIndex, totalItems }) {
  const pathData = useMemo(() => {
    const minY = 114;
    const maxY = 306;
    const step = totalItems > 1 ? (maxY - minY) / (totalItems - 1) : 0;
    const startY = minY + activeIndex * step;
    
    const endY = 210; 
    const startX = 24;
    const elbowX = 64;
    const endX = 104;
    const radius = 18;

    const dy = endY - startY;
    const absDy = Math.abs(dy);
    const dirY = dy >= 0 ? 1 : -1;
    
    let d = "";
    if (absDy < radius) {
       d = `M ${startX} ${startY} L ${endX} ${endY}`;
    } else {
       d = `M ${startX} ${startY} H ${elbowX - radius} Q ${elbowX} ${startY} ${elbowX} ${startY + dirY * radius} V ${endY - dirY * radius} Q ${elbowX} ${endY} ${elbowX + radius} ${endY} H ${endX}`;
    }

    return {
      lineY: startY,
      d,
      arrowY: endY,
    };
  }, [activeIndex, totalItems]);

  return (
    <svg
      viewBox="0 0 120 420"
      className="h-full w-full"
      preserveAspectRatio="none"
      aria-hidden
    >
      <line x1="0" y1={pathData.lineY} x2="8" y2={pathData.lineY} stroke="#1B3A6B" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="16" y1={pathData.lineY} x2="24" y2={pathData.lineY} stroke="#1B3A6B" strokeWidth="2.5" strokeLinecap="round" />
      <path d={pathData.d} fill="none" stroke="#1B3A6B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d={`M 104 ${pathData.arrowY} L 94 ${pathData.arrowY - 6} M 104 ${pathData.arrowY} L 94 ${pathData.arrowY + 6}`}
        fill="none" stroke="#1B3A6B" strokeWidth="2.5" strokeLinecap="round"
      />
    </svg>
  );
}

export default function AudiencePathways() {
  const [activeId, setActiveId] = useState(pathways[0].id);
  const activeIndex = pathways.findIndex((item) => item.id === activeId);
  const activePath = pathways[activeIndex] || pathways[0];

  return (
    <section className="bg-[#eaf3fb] py-16 md:py-20">
      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .pathway-card-animate {
          animation: fadeSlideIn 0.35s ease both;
        }
        .icon-pulse {
          animation: iconPop 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) both;
        }
        @keyframes iconPop {
          from { transform: scale(0.7); opacity: 0.4; }
          to   { transform: scale(1);   opacity: 1; }
        }
        .tab-btn-active {
          background: linear-gradient(135deg, #1B3A6B 0%, #7B1A1A 100%);
          color: #fff;
          box-shadow: 0 4px 16px rgba(27,58,107,0.25);
          transform: translateX(4px);
          border: 1.5px solid transparent;
        }
        .tab-btn-inactive {
          background: transparent;
          border: 1.5px solid #1B3A6B;
          color: #1B3A6B;
          opacity: 0.55;
        }
        .tab-btn-inactive:hover {
          opacity: 0.9;
          transform: translateX(2px);
        }
        .tab-btn {
          transition: all 0.2s ease;
          border-radius: 8px;
          padding: 0 24px;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          cursor: pointer;
          outline: none;
          height: 48px;
          display: flex;
          align-items: center;
        }
      `}</style>

      <div className="mx-auto w-full max-w-300 px-6">

        {/* ── Header ── */}
        <div className="mb-12 text-center">
          <h2
            className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-[2.5rem]"
            style={{
              background: "linear-gradient(to right, #1B3A6B, #7B1B2A)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              display: "block",
            }}
          >
            The Gap Is Real. The Cost Is Higher Than You Think.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#2a3038] sm:text-lg">
            Whether you lead an institution, manage campus recruitment,
            <br className="hidden sm:block" />
            or are building your career — the industry-academia gap is affecting you right now.
            <br />
            Here is what the data says.
          </p>
        </div>

        {/* ── Desktop: Tabs | Arrow | Card ── */}
        <div className="hidden lg:grid lg:grid-cols-[220px_100px_1fr] xl:grid-cols-[240px_120px_1fr] lg:gap-4 xl:gap-6 lg:items-center">

          {/* Tab list */}
          <div className="flex h-105 flex-col items-stretch justify-center gap-12">
            {pathways.map((item) => {
              const isActive = item.id === activeId;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveId(item.id)}
                  className={`tab-btn justify-center w-full ${isActive ? "tab-btn-active" : "tab-btn-inactive"}`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Arrow connector */}
          <div className="h-105 w-full">
            <ConnectorArrow activeIndex={Math.max(activeIndex, 0)} totalItems={pathways.length} />
          </div>

          {/* Content card — TEXT LEFT, ICON RIGHT */}
          <div className="flex h-105 items-center">
            <div
              key={activePath.id}
              className="pathway-card-animate flex h-full w-full overflow-hidden rounded-2xl border border-[#d0ddef] bg-white shadow-[0_8px_36px_rgba(1,34,79,0.12)]"
            >
              {/* Text section — LEFT */}
              <div className="flex flex-col justify-center px-8 py-8 text-left flex-1">
                <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#1B3A6B]">
                  {activePath.label}
                </p>
                <h3 className="mt-3 text-xl font-extrabold leading-snug text-[#0d1b3e] md:text-2xl">
                  {activePath.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-[#4a5568]">
                  {activePath.intro}
                </p>
                <ul className="mt-6 space-y-3">
                  {activePath.points.map((point) => (
                    <li key={`${activePath.id}-${point}`} className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1B3A6B]" />
                      <span className="text-sm font-semibold leading-snug text-[#1e2d4d]">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
                {(activePath.id === "colleges" || activePath.id === "corporate") && (
                  <a
                    href="#contact" // Placeholder link
                    className="group mt-8 inline-flex w-max items-center gap-2 rounded bg-[#00083D] px-4 py-2 text-[12px] font-bold text-white shadow-sm transition-all hover:bg-[#01224F]"
                  >
                    Learn More <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                  </a>
                )}
              </div>

              {/* Icon / Visual column — RIGHT */}
              <div className="flex w-30 shrink-0 flex-col items-center justify-center bg-linear-to-b from-[#1B3A6B] to-[#7B1A1A] py-8 gap-3">
                <span
                  key={activePath.id + "-icon"}
                  className="icon-pulse text-6xl"
                  role="img"
                  aria-label={activePath.label}
                >
                  {activePath.icon}
                </span>
                <span
                  style={{
                    writingMode: "vertical-rl",
                    textOrientation: "mixed",
                    transform: "rotate(180deg)",
                    fontSize: "10px",
                    fontWeight: 800,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.7)",
                  }}
                >
                  {activePath.label}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Mobile ── */}
        <div className="flex flex-col gap-5 lg:hidden">
          <div className="flex flex-wrap justify-center gap-3">
            {pathways.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setActiveId(p.id)}
                className={`rounded-md px-5 py-2.5 text-[12px] font-extrabold uppercase tracking-widest transition-all ${
                  p.id === activeId
                    ? "bg-[#7B1A1A] text-white shadow"
                    : "border border-[#1B3A6B] text-[#1B3A6B] opacity-60"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>

          {/* Mobile card — TEXT TOP, ICON BOTTOM */}
          <div
            key={activePath.id + "-mobile"}
            className="pathway-card-animate overflow-hidden rounded-2xl border border-[#d0ddef] bg-white shadow-md"
          >
            {/* Text section */}
            <div className="p-5 text-left">
              <p className="text-xs font-extrabold uppercase tracking-widest text-[#1B3A6B]">{activePath.label}</p>
              <h3 className="mt-2 text-lg font-extrabold leading-snug text-[#0d1b3e]">{activePath.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#4a5568]">{activePath.intro}</p>
              <ul className="mt-3 space-y-1.5">
                {activePath.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2 text-sm font-medium text-[#1e2d4d]">
                    <span className="mt-1.5 h-1.25 w-1.25 shrink-0 rounded-full bg-[#1B3A6B]" />
                    {pt}
                  </li>
                ))}
              </ul>
              {(activePath.id === "colleges" || activePath.id === "corporate") && (
                <a
                  href="#contact" // Placeholder link
                  className="group mt-5 inline-flex w-max items-center gap-1.5 rounded bg-[#00083D] px-3.5 py-1.5 text-[11px] font-bold text-white shadow-sm transition-all hover:bg-[#01224F]"
                >
                  Learn More <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                </a>
              )}
            </div>

            {/* Icon strip — BOTTOM on mobile */}
            <div className="flex items-center justify-center bg-linear-to-r from-[#1B3A6B] to-[#7B1A1A] py-6 gap-4">
              <span
                key={activePath.id + "-mob-icon"}
                className="icon-pulse text-5xl"
                role="img"
                aria-label={activePath.label}
              >
                {activePath.icon}
              </span>
              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-white/70">
                {activePath.label}
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
