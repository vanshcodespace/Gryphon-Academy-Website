import { useEffect, useRef, useState } from "react";
import Navbar from "../components/home/Navbar";
import Hero from "../components/home/Hero";

import AudiencePathways from "../components/home/AudiencePathways";

import Testimonials from "../components/home/Testimonials";

import Gallery from "../components/home/Gallery";
import CTA from "../components/home/CTA";
import Footer from "../components/home/Footer";

import WhoAreWe from "../components/home/WhoAreWe";
import TopPlaced from "../components/home/TopPlaced";
import Brochure from "../components/home/Brochure";
import Training from "../components/home/Training";
import Numbers from "../components/home/numbers";
import InstitutionsMarquee from "../components/home/InstitutionsMarquee";
import CorporateMarquee from "../components/home/CorporateMarquee";

export default function Home() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [isNavbarFullWidth, setIsNavbarFullWidth] = useState(false);
  const lastScrollYRef = useRef(0);
  const downScrollAccumulatedRef = useRef(0);
  const logoSrc =
    "https://res.cloudinary.com/dcjmaapvi/image/upload/v1740489025/ga-hori_ylcnm3.png";

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollYRef.current;
      const hideThreshold = window.innerHeight * 0.3;

      const whoAreWeSection = document.getElementById("about");
      if (!whoAreWeSection) {
        setIsNavbarVisible(currentScrollY > 8);
        lastScrollYRef.current = currentScrollY;
        return;
      }

      const sectionTop = whoAreWeSection.getBoundingClientRect().top;
      setIsNavbarFullWidth(sectionTop <= 0);

      const isWhoAreWeStarted = sectionTop <= 0;

      if (!isWhoAreWeStarted) {
        setIsNavbarVisible(currentScrollY > 8);
        downScrollAccumulatedRef.current = 0;
        lastScrollYRef.current = currentScrollY;
        return;
      }

      if (scrollDelta > 0) {
        downScrollAccumulatedRef.current += scrollDelta;
        if (downScrollAccumulatedRef.current >= hideThreshold) {
          setIsNavbarVisible(false);
        }
      } else if (scrollDelta < 0) {
        setIsNavbarVisible(true);
        downScrollAccumulatedRef.current = 0;
      }

      lastScrollYRef.current = currentScrollY;
    };

    lastScrollYRef.current = window.scrollY;
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Navbar
        isVisible={isNavbarVisible}
        isFullWidth={isNavbarFullWidth}
        logoSrc={logoSrc}
      />
      <Hero showTopLeftLogo={!isNavbarVisible} logoSrc={logoSrc} />
      <WhoAreWe />
      <Brochure />
      <AudiencePathways />
      <Training />
      <Numbers />
      {/* ── Unified marquee + placements band ──────────────────────── */}
      <div className="relative w-full overflow-visible bg-linear-to-b from-[#e8f4fb] via-[#d0e8f8] to-[#b8dcf4]">
        {/* Top wavy divider */}
        <svg
          className="pointer-events-none absolute top-0 left-0 z-40 h-8 w-full -translate-y-1/2"
          viewBox="0 0 1200 80"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 40 Q25 12 50 40 T100 40 T150 40 T200 40 T250 40 T300 40 T350 40 T400 40 T450 40 T500 40 T550 40 T600 40 T650 40 T700 40 T750 40 T800 40 T850 40 T900 40 T950 40 T1000 40 T1050 40 T1100 40 T1150 40 T1200 40"
            fill="none"
            stroke="#5b9bc9"
            strokeWidth="4"
          />
        </svg>

        <CorporateMarquee />
        <InstitutionsMarquee />
        <TopPlaced/>

        {/* Bottom wavy divider */}
        <svg
          className="pointer-events-none absolute bottom-0 left-0 z-40 h-8 w-full translate-y-1/2"
          viewBox="0 0 1200 80"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 40 Q25 12 50 40 T100 40 T150 40 T200 40 T250 40 T300 40 T350 40 T400 40 T450 40 T500 40 T550 40 T600 40 T650 40 T700 40 T750 40 T800 40 T850 40 T900 40 T950 40 T1000 40 T1050 40 T1100 40 T1150 40 T1200 40"
            fill="none"
            stroke="#5b9bc9"
            strokeWidth="4"
          />
        </svg>
      </div>
      <Gallery/>
      
      <CTA />
      <Testimonials />

      <Footer />
    </div>
  );
}
