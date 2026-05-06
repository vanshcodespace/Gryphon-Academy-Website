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
      {/* content-visibility:auto defers layout/paint of off-screen sections */}
      <div className="cv-auto">
        <AudiencePathways />
      </div>
      <div className="cv-auto">
        <Training />
      </div>
      <div className="cv-auto">
        <Numbers />
      </div>
      {/* ── Unified marquee + placements band ──────────────────────── */}
      <div className="cv-auto" style={{ background: "linear-gradient(to bottom, #daeef8, #BCDEF4)" }}>
        <CorporateMarquee />
        <InstitutionsMarquee />
      </div>
      <div className="cv-auto">
        <TopPlaced />
      </div>
      <div className="cv-auto">
        <Gallery />
      </div>
      <CTA />
      <div className="cv-auto">
        <Testimonials />
      </div>
      <Footer />
    </div>
  );
}
