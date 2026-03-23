import { useMemo, useState } from "react";

const pathways = [
  {
    id: "colleges",
    label: "For Colleges",
    title: "Scalable growth stack for modern campuses.",
    cards: [
      {
        tag: "Admissions",
        heading: "Admission Engine",
        detail: "Lead funnel, counseling, and conversion workflows.",
      },
      {
        tag: "Branding",
        heading: "Campus Positioning",
        detail: "Digital-first branding for better visibility.",
      },
      {
        tag: "Academic",
        heading: "Induction Programs",
        detail: "Structured onboarding and readiness modules.",
      },
      {
        tag: "Placement",
        heading: "Placement Ops",
        detail: "Drive planning, recruiter outreach, and reporting.",
      },
    ],
  },
  {
    id: "corporate",
    label: "For Corporate",
    title: "Reliable hiring and capability building for teams.",
    cards: [
      {
        tag: "Talent",
        heading: "Zero-Cost Hiring",
        detail: "Pre-vetted candidates aligned to role needs.",
      },
      {
        tag: "L&D",
        heading: "Corporate Upskilling",
        detail: "Focused training tracks for business goals.",
      },
      {
        tag: "Assessment",
        heading: "Skill Validation",
        detail: "Benchmarked evaluation for hiring confidence.",
      },
      {
        tag: "Productivity",
        heading: "Role Enablement",
        detail: "Fast ramp-up frameworks for new hires.",
      },
    ],
  },
  {
    id: "students",
    label: "For Students",
    title: "Career-focused preparation with placement support.",
    cards: [
      {
        tag: "Learning",
        heading: "Job-Ready Tracks",
        detail: "Industry-aligned curriculum with live practice.",
      },
      {
        tag: "Mentorship",
        heading: "Expert Guidance",
        detail: "Weekly support and personalized roadmaps.",
      },
      {
        tag: "Interview",
        heading: "Mock Rounds",
        detail: "Practical interview prep and performance feedback.",
      },
      {
        tag: "Career",
        heading: "Placement Support",
        detail: "Resume, profile optimization, and recruiter connects.",
      },
    ],
  },
];

function ConnectorArrow({ activeIndex, totalItems }) {
  const pathData = useMemo(() => {
    const minY = 60;
    const maxY = 360;
    const step = totalItems > 1 ? (maxY - minY) / (totalItems - 1) : 0;
    const startY = minY + activeIndex * step;
    const isLast = activeIndex === totalItems - 1;
    const startX = 74;
    const elbowX = 166;
    const endX = 224;
    const radius = 18;
    const verticalTravel = 70;
    const arrowTravel = 92;

    if (isLast) {
      return {
        lineY: startY,
        d: `M ${startX} ${startY} H ${elbowX - radius} Q ${elbowX} ${startY} ${elbowX} ${startY - radius} V ${startY - verticalTravel} Q ${elbowX} ${startY - arrowTravel} ${elbowX + radius} ${startY - arrowTravel} H ${endX}`,
        arrowY: startY - arrowTravel,
      };
    }

    return {
      lineY: startY,
      d: `M ${startX} ${startY} H ${elbowX - radius} Q ${elbowX} ${startY} ${elbowX} ${startY + radius} V ${startY + verticalTravel} Q ${elbowX} ${startY + arrowTravel} ${elbowX + radius} ${startY + arrowTravel} H ${endX}`,
      arrowY: startY + arrowTravel,
    };
  }, [activeIndex, totalItems]);

  return (
    <svg
      viewBox="0 0 240 420"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden
    >
      <line
        x1="0"
        y1={pathData.lineY}
        x2="28"
        y2={pathData.lineY}
        stroke="#8A63FF"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <line
        x1="40"
        y1={pathData.lineY}
        x2="68"
        y2={pathData.lineY}
        stroke="#8A63FF"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d={pathData.d}
        fill="none"
        stroke="#8A63FF"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d={`M 232 ${pathData.arrowY} L 220 ${pathData.arrowY - 10} M 232 ${pathData.arrowY} L 220 ${pathData.arrowY + 10}`}
        fill="none"
        stroke="#8A63FF"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function AudiencePathways() {
  const [activeId, setActiveId] = useState(pathways[0].id);
  const activeIndex = pathways.findIndex((item) => item.id === activeId);
  const activePath = pathways[activeIndex] || pathways[0];

  return (
    <section className="bg-[#f4f5f9] py-20 md:py-24">
      <div className="mx-auto max-w-auto px-6">
        <h2 className="mx-auto max-w-3xl text-center text-4xl font-bold tracking-tight text-[#101322] md:text-6xl">
          One solution built for colleges, corporates, and students.
        </h2>

        <div className="mt-14 grid items-stretch gap-8 lg:grid-cols-[minmax(0,1fr)_clamp(170px,20vw,290px)_minmax(0,1.2fr)]">
          <div className="flex h-[clamp(320px,36vw,500px)] flex-col">
            {pathways.map((item) => {
              const isActive = item.id === activeId;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveId(item.id)}
                  className={`flex h-full min-h-[98px] w-full items-center gap-0 rounded-xl px-2 py-2 text-left text-4xl font-semibold transition md:text-6xl ${
                    isActive
                      ? "text-[#211953]"
                      : "text-[#b4b5c5] hover:text-[#9d9fb2]"
                  }`}
                >
                  <span
                    className="mr-[24px] inline-flex w-auto items-center gap-[10px]"
                    aria-hidden
                  >
                    <span
                      className={`h-[3px] w-10 rounded-full ${
                        isActive ? "bg-[#8A63FF]" : "bg-transparent"
                      }`}
                    />
                    <span
                      className={`h-[3px] w-10 rounded-full ${
                        isActive ? "bg-[#8A63FF]" : "bg-transparent"
                      }`}
                    />
                  </span>
                  <span
                    className={
                      item.id === "corporate" ? "whitespace-nowrap" : ""
                    }
                  >
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="hidden h-[clamp(320px,36vw,500px)] lg:block lg:pl-4 xl:pl-6">
            <ConnectorArrow
              activeIndex={Math.max(activeIndex, 0)}
              totalItems={pathways.length}
            />
          </div>

          <div>
            <div className="rounded-3xl border border-[#e5e7ef] bg-[#ebeef4] p-5 md:p-7">
              <p className="mb-5 text-lg font-medium text-slate-600">
                {activePath.title}
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {activePath.cards.map((card) => (
                  <article
                    key={`${activePath.id}-${card.heading}`}
                    className="rounded-2xl border border-[#ececf4] bg-white p-5"
                  >
                    <span className="inline-block rounded-md bg-[#8A63FF] px-2.5 py-1 text-xs font-semibold text-white">
                      {card.tag}
                    </span>
                    <h3 className="mt-3 text-2xl font-semibold text-[#171a28]">
                      {card.heading}
                    </h3>
                    <p className="mt-2 text-base text-slate-500">
                      {card.detail}
                    </p>
                    <div className="mt-4 h-1.5 w-full rounded-full bg-slate-100">
                      <div className="h-full w-2/3 rounded-full bg-[#8A63FF]/30" />
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
