// About.jsx
import { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Navbar from "../components/home/Navbar";
import Footer from "../components/home/Footer";
import ImpactSection from "../components/about/ImpactSection";
import AboutGal from "../components/about/AboutGal";
import Testimonials from "../components/home/Testimonials";
import MissionVisionSection from "../components/about/MissionVisionSection";
import AboutIntro from "../components/about/AboutIntro";
import AboutHero from "../components/about/AboutHero";
import AboutOffer from "../components/about/AboutOffer";
import AboutLeaders from "../components/about/AboutLeaders";
import AboutNew from "../components/about/AboutNew";

const logoSrc = "https://res.cloudinary.com/dcjmaapvi/image/upload/v1740489025/ga-hori_ylcnm3.png";

const AboutPage = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen w-full bg-white font-sans roboto-regular">
      <Navbar isVisible={isNavbarVisible} isFullWidth={true} logoSrc={logoSrc} />

      <AboutHero />
      <AboutNew />
      <MissionVisionSection />
      <AboutLeaders />
      <AboutIntro />
    
      {/* Our Impact Section */}
      <ImpactSection />
      <AboutOffer />

      <AboutGal />
      <Testimonials />
    
      <Footer />
    </div>
  );
};

export default AboutPage;
