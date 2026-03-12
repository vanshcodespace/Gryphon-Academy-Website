import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Stats from "../components/Stats";
import Services from "../components/Services";
import Placements from "../components/Placements";
import WhyChooseUs from "../components/WhyChooseUs";
import Events from "../components/Events";
import InductionPrograms from "../components/InductionPrograms";
import Testimonials from "../components/Testimonials";
import Blogs from "../components/Blogs";
// eslint-disable-next-line react/display-name
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <Stats />
      <Services />
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