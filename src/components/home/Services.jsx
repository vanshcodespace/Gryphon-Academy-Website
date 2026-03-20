import { useState } from "react";

const serviceTabs = [
  {
    id: "colleges",
    label: "For Colleges",
    headline: "Built to improve admissions, branding, and placements.",
    cards: [
      { tag: "Admissions", title: "Application Pipeline", meta: "Screening + counseling" },
      { tag: "Branding", title: "Campus Marketing", meta: "Digital + outreach" },
      { tag: "Induction", title: "Student Onboarding", meta: "Orientation programs" },
      { tag: "Placements", title: "Placement Support", meta: "Drives + recruiter connects" }
    ]
  },
  {
    id: "corporate",
    label: "For Corporate",
    headline: "Hire and train job-ready talent at scale.",
    cards: [
      { tag: "Hiring", title: "Zero-Cost Hiring", meta: "Pre-assessed candidates" },
      { tag: "Training", title: "Team Upskilling", meta: "Role-based modules" },
      { tag: "Assessment", title: "Skill Evaluation", meta: "Benchmarked outcomes" },
      { tag: "L&D", title: "Custom Learning Paths", meta: "Function-specific tracks" }
    ]
  },
  {
    id: "students",
    label: "For Students",
    headline: "Structured training to become interview-ready and placeable.",
    cards: [
      { tag: "Courses", title: "Job-Ready Programs", meta: "Industry-aligned curriculum" },
      { tag: "Mentorship", title: "1:1 Guidance", meta: "Weekly expert sessions" },
      { tag: "Practice", title: "Interview Prep", meta: "Mocks + feedback loops" },
      { tag: "Career", title: "Placement Assistance", meta: "Resume + referrals" }
    ]
  }
];

export default function Services() {
  const [activeTabId, setActiveTabId] = useState(serviceTabs[0].id);
  const activeTab = serviceTabs.find((tab) => tab.id === activeTabId) || serviceTabs[0];

  return (
    <section className="bg-[#f5f7fb] py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[#151826]">
            One Platform. Three Growth Paths.
          </h2>
          <p className="mt-4 text-lg text-slate-500">Choose your lane. We take you from strategy to outcomes.</p>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1.25fr] lg:items-center">
          <div>
            <div className="space-y-5">
              {serviceTabs.map((tab) => {
                const isActive = tab.id === activeTabId;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTabId(tab.id)}
                    className={`group flex w-full items-center justify-between rounded-2xl px-4 py-4 text-left transition ${
                      isActive ? "bg-white shadow-sm" : "hover:bg-white/80"
                    }`}
                  >
                    <span
                      className={`text-3xl md:text-5xl font-semibold transition ${
                        isActive ? "text-[#1f2450]" : "text-slate-300 group-hover:text-slate-400"
                      }`}
                    >
                      {tab.label}
                    </span>
                    <span
                      className={`text-4xl transition ${
                        isActive ? "text-[#7c68ff]" : "text-slate-300"
                      }`}
                      aria-hidden
                    >
                      {isActive ? "→" : "·"}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="rounded-3xl border border-[#e6e8f0] bg-[#eceef4] p-5 md:p-7 shadow-[0_22px_55px_rgba(15,23,42,0.08)]">
            <p className="mb-5 text-lg font-medium text-slate-600">{activeTab.headline}</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {activeTab.cards.map((card) => (
                <article key={card.title} className="rounded-2xl border border-white bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                  <span className="inline-flex rounded-full bg-[#7c68ff]/10 px-3 py-1 text-xs font-semibold text-[#6e58ff]">
                    {card.tag}
                  </span>
                  <h3 className="mt-3 text-2xl font-semibold text-[#171a28]">{card.title}</h3>
                  <p className="mt-2 text-base text-slate-500">{card.meta}</p>
                  <div className="mt-4 h-1.5 w-full rounded-full bg-slate-100">
                    <div className="h-full w-2/3 rounded-full bg-[#7c68ff]/35" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
