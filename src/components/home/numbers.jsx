import { useEffect, useMemo, useRef, useState } from "react";
import mapIcon from "../../assets/MAP.png";

const numberFormatter = new Intl.NumberFormat("en-US");

function parseStatNumber(value) {
  const match = String(value).match(/^([\d,]+)(.*)$/);
  if (!match) {
    return { target: 0, suffix: String(value) };
  }

  return {
    target: Number.parseInt(match[1].replaceAll(",", ""), 10),
    suffix: match[2] || "",
  };
}

function AnimatedCount({ value, start, delayMs = 0 }) {
  const { target, suffix } = useMemo(() => parseStatNumber(value), [value]);
  const [displayValue, setDisplayValue] = useState(start ? 0 : target);
  const frameRef = useRef(null);
  const delayRef = useRef(null);

  useEffect(() => {
    if (!start) {
      setDisplayValue(target);
      return undefined;
    }

    const durationMs = 1400;

    const startAnimation = () => {
      const startTime = performance.now();

      const tick = (now) => {
        const progress = Math.min((now - startTime) / durationMs, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplayValue(Math.round(target * eased));

        if (progress < 1) {
          frameRef.current = window.requestAnimationFrame(tick);
        }
      };

      frameRef.current = window.requestAnimationFrame(tick);
    };

    delayRef.current = window.setTimeout(startAnimation, delayMs);

    return () => {
      if (delayRef.current) {
        window.clearTimeout(delayRef.current);
      }
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, [delayMs, start, target]);

  return (
    <>
      {numberFormatter.format(displayValue)}
      {suffix}
    </>
  );
}

export default function Numbers() {
  const sectionRef = useRef(null);
  const [hasCountStarted, setHasCountStarted] = useState(false);

  useEffect(() => {
    if (!sectionRef.current || hasCountStarted) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasCountStarted(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.35,
      },
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasCountStarted]);

  const stats = [
    { number: "65,000+", label: "Total Training\nHours Delivered" },
    { number: "70,000+", label: "Total Students\nTrained" },
    { number: "55+", label: "College Partners" },
    { number: "450+", label: "Hiring Partners" },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-linear-to-b from-[#f0f7ff] via-[#ffffff] to-[#f8fbff] py-16 sm:py-20 lg:py-24"
    >
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 xl:max-w-340">
        <h2 className="mb-8 text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-5xl" style={{
          background: "linear-gradient(to right, #1B3A6B, #7B1B2A)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}>
          Our Impact, In Numbers
        </h2>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[6fr_4fr] lg:gap-16 xl:gap-24">
          {/* Left Column: Center Map Container */}
          <div className="relative flex min-h-120 flex-col items-center justify-center rounded-3xl p-12 lg:min-h-140">
            <div className="relative z-10 flex h-full w-full items-center justify-center">
              <img
                src={mapIcon}
                alt="Map of India showing our presence"
                className="h-auto w-full max-w-8xl object-contain transition-all duration-700 hover:drop-shadow-[0_30px_60px_rgba(255,255,255,0.3)] filter drop-shadow-[0_20px_45px_rgba(255,255,255,0.2)]"
              />
            </div>
          </div>

          {/* Right Column: 2x2 Stats Grid */}
          <div className="grid grid-cols-2 text-center gap-6 lg:gap-7">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative flex flex-col items-center justify-center rounded-3xl border-2 border-[#1B3A6B]/20 bg-linear-to-br from-[#ffffff] to-[#f5f9ff] px-6 py-8 shadow-[0_8px_32px_rgba(27,58,107,0.12)] transition-all duration-500 hover:shadow-[0_20px_50px_rgba(27,58,107,0.25)] hover:scale-105 md:px-8 md:py-10"
              >
                {/* Gradient background on hover */}
                <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-[#1B3A6B]/5 to-[#7B1B2A]/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <span className="relative z-10 text-4xl font-extrabold leading-tight text-[#1B3A6B] md:text-5xl lg:text-[2.8rem] transition-colors duration-300 group-hover:text-[#7B1B2A]">
                  <AnimatedCount
                    value={stat.number}
                    start={hasCountStarted}
                    delayMs={index * 160}
                  />
                </span>
                <span className="relative z-10 mt-4 whitespace-pre-line text-xs font-bold uppercase tracking-widest text-[#01224F] md:text-sm lg:text-base transition-colors duration-300 group-hover:text-[#7B1B2A]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
