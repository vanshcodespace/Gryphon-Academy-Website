import { useEffect, useRef } from "react";
import heroVideo from "../../assets/herooo.mp4";

export default function Hero({ showTopLeftLogo, logoSrc }) {
  const sectionRef = useRef(null);
  const videoRef   = useRef(null);

  useEffect(() => {
    const sectionEl = sectionRef.current;
    const videoEl   = videoRef.current;
    if (!sectionEl || !videoEl) return;

    const updateVideoPlayback = () => {
      if (document.hidden) { videoEl.pause(); return; }

      const rect           = sectionEl.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      const visiblePixels  = Math.max(0, Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0));

      if (visiblePixels > 0) {
        const p = videoEl.play();
        if (p?.catch) p.catch(() => {});
        return;
      }
      videoEl.pause();
    };

    const handleVisibility = () => {
      if (document.hidden) { videoEl.pause(); return; }
      updateVideoPlayback();
    };

    updateVideoPlayback();
    window.addEventListener("scroll",           updateVideoPlayback, { passive: true });
    window.addEventListener("resize",           updateVideoPlayback,  { passive: true });
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      window.removeEventListener("scroll",           updateVideoPlayback);
      window.removeEventListener("resize",           updateVideoPlayback);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative h-screen min-h-170 w-full overflow-hidden"
    >
      {/* Background video */}
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        aria-hidden="true"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(1,16,42,0.72)_0%,rgba(1,16,42,0.30)_50%,rgba(1,16,42,0.18)_100%)]" />

      {/* Top-left logo (shown when navbar is hidden) */}
      {showTopLeftLogo && (
        <a
          href="/"
          aria-label="Gryphon Academy home"
          className="absolute left-4 top-4 z-20 sm:left-6 sm:top-6 md:left-8 md:top-8"
        >
          <img
            src={logoSrc}
            alt="Gryphon Academy"
            className="h-16 w-auto sm:h-20 md:h-24"
          />
        </a>
      )}

      {/* Hero content — bottom-aligned for cinematic feel */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-end px-4 pb-14 sm:pb-16 md:pb-20">
        <div className="text-center">
          <h1
            className="font-bold leading-tight text-white"
            style={{ fontSize: "clamp(1.1rem, 4.2vw, 3.8rem)" }}
          >
            Build Your Career With Industry Ready Skills
          </h1>

          <p
            className="mt-3 text-white/85"
            style={{ fontSize: "clamp(0.9rem, 1.75vw, 1.5rem)" }}
          >
            Let&apos;s Bridge The Gap
          </p>
        </div>
      </div>
    </section>
  );
}
