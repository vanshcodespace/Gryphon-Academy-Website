import { useEffect, useRef } from "react";
import heroVideo from "../../assets/herooo.mp4"

export default function Hero({ showTopLeftLogo, logoSrc }) {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const sectionEl = sectionRef.current;
    const videoEl = videoRef.current;

    if (!sectionEl || !videoEl) {
      return;
    }

    const updateVideoPlayback = () => {
      if (document.hidden) {
        videoEl.pause();
        return;
      }

      const rect = sectionEl.getBoundingClientRect();
      const viewportHeight =
        window.innerHeight || document.documentElement.clientHeight;
      const visiblePixels = Math.max(
        0,
        Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0),
      );
      const visibleRatio = visiblePixels / Math.max(rect.height, 1);

      // Production behavior: pause only when hero is fully out of view.
      if (visiblePixels > 0) {
        const playPromise = videoEl.play();
        if (playPromise && typeof playPromise.catch === "function") {
          playPromise.catch(() => {});
        }
        return;
      }

      videoEl.pause();
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        videoEl.pause();
        return;
      }

      updateVideoPlayback();
    };

    updateVideoPlayback();
    window.addEventListener("scroll", updateVideoPlayback, { passive: true });
    window.addEventListener("resize", updateVideoPlayback);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("scroll", updateVideoPlayback);
      window.removeEventListener("resize", updateVideoPlayback);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative h-screen min-h-170 w-full overflow-hidden"
    >
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src={heroVideo}
        />
      </video>

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(1,16,42,0.25)_0%,rgba(1,16,42,0.25)_42%,rgba(1,16,42,0.25)_100%)]" />

      {showTopLeftLogo ? (
        <a
          href="#home"
          className="absolute left-4 top-4 z-20 sm:left-6 sm:top-6 md:left-8 md:top-8"
        >
          <img
            src={logoSrc}
            alt="Gryphon Academy"
            className="h-16 w-auto sm:h-20 md:h-24"
          />
        </a>
      ) : null}

      <div className="relative z-10 flex h-full w-full items-end justify-center px-4 pb-8">
        <div className="text-center">
          <h1
            className="whitespace-nowrap font-bold leading-tight text-white"
            style={{ fontSize: "clamp(0.9rem, 4.2vw, 3.8rem)" }}
          >
            Build Your Career With Industry Ready Skills
          </h1>

          <p
            className="mt-4 whitespace-nowrap text-white"
            style={{ fontSize: "clamp(0.82rem, 1.75vw, 1.5rem)" }}
          >
Let’s Bridge The Gap           </p>
        </div>
      </div>
    </section>
  );
}
