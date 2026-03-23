import { useEffect, useState } from "react";
import Navbar from "../components/home/Navbar";
import Hero from "../components/home/Hero";
import AboutUs from "../components/home/AboutUs";
import Stats from "../components/home/Stats";
import Services from "../components/home/Services";
import AudiencePathways from "../components/home/AudiencePathways";
import Placements from "../components/home/Placements";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Events from "../components/home/Events";
import InductionPrograms from "../components/home/InductionPrograms";
import Testimonials from "../components/home/Testimonials";
import PartnersMarquee from "../components/home/PartnersMarquee";
import Blogs from "../components/home/Blogs";
import Gallery from "../components/home/Gallery";
import CTA from "../components/home/CTA";
import Footer from "../components/home/Footer";
import Solutions from "../components/home/Solutions";
import WhoAreWe from "../components/home/WhoAreWe";
import Brochure from "../components/home/Brochure";

export default function Home() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [isNavbarFullWidth, setIsNavbarFullWidth] = useState(false);
  const logoSrc =
    "https://res.cloudinary.com/dcjmaapvi/image/upload/v1740489025/ga-hori_ylcnm3.png";

  useEffect(() => {
    const onScroll = () => {
      setIsNavbarVisible(window.scrollY > 8);

      const whoAreWeSection = document.getElementById("about");
      if (!whoAreWeSection) {
        return;
      }

      const sectionTop = whoAreWeSection.getBoundingClientRect().top;
      setIsNavbarFullWidth(sectionTop <= 0);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Navbar
        isVisible={isNavbarVisible}
        isFullWidth={isNavbarFullWidth}
        logoSrc={logoSrc}
      />

      <Hero showTopLeftLogo={!isNavbarVisible} logoSrc={logoSrc} />

      <WhoAreWe />

      <AudiencePathways />
      <Brochure />

      <Gallery />

      <PartnersMarquee />

      <Testimonials />

      <Footer />
    </>
  );
}
