import { useState } from "react";
import teamImage from "../../assets/Ps.png";

export default function WhoAreWe() {
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50, active: false });

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    setSpotlight({ x, y, active: true });
  };

  const handleMouseLeave = () => {
    setSpotlight((prev) => ({ ...prev, active: false }));
  };

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#01224F] py-16 sm:py-20 lg:py-24"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="pointer-events-none absolute -top-40 -left-24 h-96 w-96 rounded-full bg-[#1b4f8f]/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-24 h-112 w-md rounded-full bg-[#3f8efc]/15 blur-3xl" />
      <div
        className="pointer-events-none absolute inset-0 opacity-90 transition-opacity duration-300"
        style={{
          opacity: spotlight.active ? 2.0 : 0.5,
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(91,145,227,0.22) 0 1px, transparent 1px 34px), repeating-linear-gradient(60deg, rgba(91,145,227,0.24) 0 1px, transparent 1px 34px), repeating-linear-gradient(-60deg, rgba(91,145,227,0.24) 0 1px, transparent 1px 34px)",
          WebkitMaskImage: spotlight.active
            ? `radial-gradient(circle 220px at ${spotlight.x}% ${spotlight.y}%, #000 0%, #000 35%, transparent 100%)`
            : "none",
          maskImage: spotlight.active
            ? `radial-gradient(circle 220px at ${spotlight.x}% ${spotlight.y}%, #000 0%, #000 35%, transparent 100%)`
            : "none",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10 sm:mb-12">
       
          <h2 className="max-w-xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Who we are
          </h2>
          <p className="mt-4 max-w-4xl text-base leading-relaxed text-[#d6e4f7] sm:text-lg">
            We don&apos;t just train students. We transform institutions,
            empower graduates, and build the workforce India&apos;s industry
            demands.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <article className="h-full rounded-[28px] border border-[#d2dfef] bg-[linear-gradient(145deg,#f7fbff_0%,#ecf3fb_45%,#e4edf7_100%)] p-7 shadow-[0_32px_70px_-42px_rgba(0,8,22,0.9),inset_0_1px_0_rgba(255,255,255,0.85)] sm:p-10">
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.26em] text-[#2f5f9a] sm:text-sm">
              Info
            </p>

            <p className="text-base leading-relaxed text-[#1f2f45] sm:text-lg">
              Gryphon Academy Pvt. Ltd. is a Pan-India professional training,
              placement facilitation, and institutional development organisation
              founded in 2020. We partner with MBA, Engineering, MCA, and
              Diploma institutions to embed structured industry readiness
              training directly into their academic curriculum delivered
              offline, on-campus, by 350+ certified industry practitioners.
            </p>

            <p className="mt-6 text-base leading-relaxed text-[#1f2f45] sm:text-lg">
              We are not a coaching institute. We are not an edtech platform. We
              are the operating bridge between academia and industry training
              students inside their colleges, connecting institutions to
              corporate networks, and placing graduates with India&apos;s top
              employers at zero cost.
            </p>
          </article>

          <div className="mx-auto h-full w-full max-w-md lg:max-w-none">
            <div className="group relative h-full min-h-105 overflow-hidden rounded-[28px] border border-[#d2dfef] bg-[linear-gradient(145deg,#f7fbff_0%,#e6eff9_100%)] p-3 shadow-[0_32px_70px_-42px_rgba(0,8,22,0.9),inset_0_1px_0_rgba(255,255,255,0.85)]">
              <img
                src={teamImage}
                alt="Gryphon Academy team members"
                className="h-full w-full rounded-[22px] object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
