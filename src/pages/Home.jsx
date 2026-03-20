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
import Blogs from "../components/home/Blogs";
import Gallery from "../components/home/Gallery";
// eslint-disable-next-line react/display-name
import CTA from "../components/home/CTA";
import Footer from "../components/home/Footer";
import Solutions from "../components/home/Solutions";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <Stats />
      <AudiencePathways />
      <Solutions />
      <Gallery />

      <Placements />
      <WhyChooseUs />
      <Events />
      <InductionPrograms />
      <Testimonials />
      <Blogs />
      {/* eslint-disable-next-line react/display-name */}
      <CTA />
      <Footer />
    </>
  );
}
