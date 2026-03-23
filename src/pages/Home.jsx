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

export default function Home() {
  return (
    <>
      <Navbar />

      <WhoAreWe />

      <AudiencePathways />

      <Gallery />

      <PartnersMarquee />

      <Testimonials />

      <Footer />
    </>
  );
}
