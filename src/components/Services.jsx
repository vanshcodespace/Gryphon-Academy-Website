import React from "react";

const services = [
  {
    id: "colleges",
    title: "For Colleges",
    blurb:
      "Digital Marketing & Branding, Induction Programmes, End-to-End Admission Solutions",
    detail:
      "End-to-end admission pipelines, campus branding, induction programs, and marketing campaigns crafted for institutes.",
    borderColor: "#f97316",
    planet: "#f97316",
    icon: "🏛️",
    duration: "Tailored"
  },
  {
    id: "corporate",
    title: "For Corporate",
    blurb:
      "Zero-Cost Hiring Assistance, Corporate Training Programs, Talent Development Solutions",
    detail:
      "Hire job-ready talent at zero cost, upskill teams with targeted training, and unlock scalable talent development.",
    borderColor: "#a855f7",
    planet: "#a855f7",
    icon: "💼",
    duration: "On Demand"
  },
  {
    id: "students",
    title: "For Students",
    blurb:
      "Job-Ready Professional Training, Career Development Programs, Placement with Top Recruiters",
    detail:
      "Industry-aligned courses, interview prep, and placement support to land roles with leading recruiters.",
    borderColor: "#0ea5e9",
    planet: "#0ea5e9",
    icon: "🎓",
    duration: "6 Months"
  }
];

const orbitStyles = `
@keyframes orbitSpin {
  0% {
    transform: translate(-50%, -50%) rotate(var(--angle)) translateX(var(--orbit-radius)) rotate(calc(-1 * var(--angle)));
  }
  100% {
    transform: translate(-50%, -50%) rotate(calc(360deg + var(--angle))) translateX(var(--orbit-radius)) rotate(calc(-360deg - var(--angle)));
  }
}

.orbit-item {
  position: absolute;
  left: 50%;
  top: 50%;
  transform-origin: center;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: orbitSpin var(--orbit-duration) linear infinite;
  will-change: transform;
}

.planet::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 9999px;
  background: radial-gradient(circle at 60% 40%, rgba(255,255,255,0.25), transparent 45%);
  mix-blend-mode: screen;
}

@media (max-width: 1024px) {
  .orbit-item { --orbit-radius: 220px; }
}

@media (max-width: 768px) {
  .orbit-item { --orbit-radius: 180px; }
}

@media (max-width: 640px) {
  .orbit-item { --orbit-duration: 18s; --orbit-radius: 150px; }
}
`;

export default function Services() {
  return (
    <section className="relative bg-[#050b24] text-white py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#0b153d,#050b24_60%,#030617_100%)]" />

      <div className="relative z-10 max-w-5xl mx-auto text-center px-6">
        <h2 className="text-4xl md:text-5xl font-semibold mb-10">
          Transform Your Journey
        </h2>

        <div className="relative w-[620px] h-[620px] mx-auto">
          {/* orbit line */}
          <div className="absolute inset-1/2 w-[520px] h-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/35" />

          {/* sun */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-36 h-36 rounded-full flex items-center justify-center bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600 shadow-[0_0_90px_rgba(249,115,22,0.8)]">
              <span className="text-5xl">🦅</span>
            </div>
          </div>

          {/* orbiting items */}
          {services.map((service, idx) => {
            const angle = idx * 120;
            const duration = 22 + idx * 2;
            return (
              <div
                key={service.id}
                className="orbit-item hover:animate-none"
                style={{
                  "--angle": `${angle}deg`,
                  "--orbit-duration": `${duration}s`,
                  "--orbit-radius": "260px"
                }}
              >
                <div className="flex flex-col items-center gap-3 w-64">
                  <div
                    className="planet w-16 h-16 rounded-full"
                    style={{
                      background: `radial-gradient(circle at 35% 35%, #ffffffaa, ${service.planet} 45%, #020617 70%)`,
                      boxShadow: `0 0 35px ${service.planet}55`
                    }}
                  />
                  <div className="w-full p-4 rounded-xl bg-white/10 border border-white/15 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
                    <div className="flex items-center gap-2 mb-2 justify-center">
                      <span className="text-lg" aria-hidden>{service.icon}</span>
                      <h3 className="text-lg font-semibold leading-tight">{service.title}</h3>
                    </div>
                    <p className="text-sm text-slate-100/85 leading-relaxed">{service.blurb}</p>
                    <p className="text-xs text-slate-100/60 mt-3">Duration: {service.duration}</p>
                    <p className="text-xs text-slate-100/70 mt-2 leading-relaxed">{service.detail}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{orbitStyles}</style>
    </section>
  );
}
