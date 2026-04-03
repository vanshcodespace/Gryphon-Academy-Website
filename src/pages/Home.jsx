import { useEffect, useState } from "react";
import Navbar from "../components/home/Navbar";
import Hero from "../components/home/Hero";
import AudiencePathways from "../components/home/AudiencePathways";
import Testimonials from "../components/home/Testimonials";
import PartnersMarquee from "../components/home/PartnersMarquee";
import Gallery from "../components/home/Gallery";
import CTA from "../components/home/CTA";
import Footer from "../components/home/Footer";
import WhoAreWe from "../components/home/WhoAreWe";
import Brochure from "../components/home/Brochure";
import Training from "../components/home/Training";
import Numbers from "../components/home/numbers";

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
       <Brochure />
      <Numbers />
 
      <AudiencePathways />
       <PartnersMarquee />
    
      <Training />
       <CTA />

      <Gallery />

      <Testimonials />

      <Footer />
    </>
  );
}
