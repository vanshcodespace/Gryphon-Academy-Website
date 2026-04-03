import { Link } from "react-router-dom";
import Navbar from "../components/home/Navbar";
import Footer from "../components/home/Footer";
import { useState, useEffect } from "react";

const leaders = [
  {
    name: "Founder",
    title: "Mr. Shashi Bhat",
    quote: "At Gryphon Academy, our mission is to bridge the gap between Industry and academia by creating an industry-ready workforce within the walls of educational institutions. Through customized learning programmes tailored for professional courses, we ensure students are equipped with the practical skills to contribute from day one. With over 15 years of expertise in academia and corporate relations, we've built strong partnerships with top recruiters, opening exceptional career opportunities for students.",
    emoji: "👨‍💼",
  },
  {
    name: "Co-Founder",
    title: "Ms. Ummeaiman Ansari",
    quote: "At Gryphon Academy, we envision a transformative approach towards education that bridges the gap between academia and industry. Drawing from my 15 years of enriching experience in industry, I have witnessed the challenges firsthand that industries face in finding talent equipped for real-world complexities. This approach drives our mission to create an industry-ready workforce within campuses.",
    emoji: "👩‍💼",
  },
];

const offerings = [
  {
    category: "For Colleges",
    items: [
      "Training Need Analysis and Competence Mapping",
      "Customized Industry Ready Programmes",
      "Industry Guest Lectures",
      "Empanelment with Industry: 450+ recruiters",
      "Job opportunities for Final Year Students",
      "Last mile programmes",
    ],
  },
  {
    category: "For Corporates",
    items: [
      "Provide Trained Pool of students",
      "Curated HR Summits",
      "HR Excellence Awards",
      "Talent from PAN India",
      "Corporate Trainings",
    ],
  },
];

const impacts = [
  { number: "60,000+", label: "Students Trained" },
  { number: "65,000+", label: "Training Hours" },
  { number: "450+", label: "Corporate Partners" },
  { number: "55+", label: "Educational Partners" },
];

const logoSrc = "https://res.cloudinary.com/dcjmaapvi/image/upload/v1740489025/ga-hori_ylcnm3.png";

export default function AboutPage() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen w-full bg-white font-sans">
      <Navbar isVisible={isNavbarVisible} isFullWidth={true} logoSrc={logoSrc} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#01224F] pt-32 pb-20 text-white">
        <div className="pointer-events-none absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-[#1b4f8f]/35 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#7B1A1A]/25 blur-[100px]" />
        <div className="relative mx-auto max-w-6xl px-6 text-center">
          <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-white/80">
            About Gryphon Academy
          </span>
          <h1
            className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl"
            style={{
              background: "linear-gradient(to right, #ffffff, #b0cce8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Bridging the Gap Between<br />Industry and Academia
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/75">
            India's premier non-ed-tech training and placement organization, committed to bridging the gap between industry and academia, through customized training programmes tailored as per industry-centric needs.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-[#eff4fa] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-8 shadow-sm border border-[#d0ddef]">
              <span className="text-3xl">🎯</span>
              <h2 className="mt-4 text-2xl font-extrabold text-[#01224F]">Our Mission</h2>
              <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
                To embed structured, industry-aligned training into academic institutions across India — delivered offline, on-campus, by certified practitioners — and connect every trained student to meaningful employment, at zero cost to all parties.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-sm border border-[#d0ddef]">
              <span className="text-3xl">🔭</span>
              <h2 className="mt-4 text-2xl font-extrabold text-[#01224F]">Our Vision</h2>
              <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
                To become India's most trusted institutional growth partner — a name synonymous with quality training, successful placement outcomes, and the responsible development of India's next generation of professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Leaders */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2
              className="text-3xl font-extrabold sm:text-4xl"
              style={{
                background: "linear-gradient(to right, #1B3A6B, #7B1B2A)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Meet the Leaders
            </h2>
          </div>
          <div className="grid gap-12 md:grid-cols-2">
            {leaders.map((leader) => (
              <div key={leader.name} className="flex flex-col items-center text-center">
                <div className="h-24 w-24 rounded-full bg-gradient-to-br from-[#1B3A6B] to-[#7B1A1A] flex items-center justify-center text-5xl mb-6">
                  {leader.emoji}
                </div>
                <h3 className="text-sm font-extrabold uppercase tracking-widest text-[#1B3A6B] mb-1">{leader.name}</h3>
                <p className="text-xl font-bold text-[#0d1b3e] mb-4">{leader.title}</p>
                <div className="mb-4">
                  <span className="text-2xl">❝</span>
                </div>
                <p className="text-base leading-relaxed text-[#4a5568] text-justify">
                  {leader.quote}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Impact */}
      <section className="bg-[#eff4fa] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2
              className="text-3xl font-extrabold sm:text-4xl"
              style={{
                background: "linear-gradient(to right, #1B3A6B, #7B1B2A)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Our Impact
            </h2>
            <p className="mt-4 text-base text-[#4a5568]">
              For years, we have been pioneering customized training skills that help students thrive in the ever-evolving landscape of the industry.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {impacts.map((item) => (
              <div key={item.label} className="rounded-2xl bg-white p-8 text-center shadow-sm border border-[#d0ddef]">
                <p className="text-4xl font-extrabold text-[#01224F]">{item.number}</p>
                <p className="mt-3 text-sm font-semibold uppercase tracking-widest text-[#4a5568]">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2
              className="text-3xl font-extrabold sm:text-4xl"
              style={{
                background: "linear-gradient(to right, #1B3A6B, #7B1B2A)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              What We Offer
            </h2>
          </div>
          <div className="grid gap-12 md:grid-cols-2">
            {offerings.map((section) => (
              <div key={section.category} className="rounded-2xl bg-[#f8fbff] p-10 border border-[#d0ddef]">
                <h3 className="text-xl font-extrabold text-[#01224F] mb-8">{section.category}</h3>
                <ul className="space-y-4">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="h-2 w-2 rounded-full bg-[#01224F] mt-2.5 flex-shrink-0" />
                      <span className="text-base font-semibold text-[#4a5568]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#eff4fa] py-20 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h2
            className="text-3xl font-bold sm:text-4xl"
            style={{
              background: "linear-gradient(to right, #1B3A6B, #7B1B2A)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Interested in Partnering With Us?
          </h2>
          <p className="mt-4 text-[#4a5568]">
            Whether you're a college, a company, or a student — we'd love to connect and explore how we can work together.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-block rounded-xl bg-[#01224F] px-8 py-3.5 text-base font-bold text-white shadow-lg transition-all hover:scale-105"
          >
            Contact Us
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
