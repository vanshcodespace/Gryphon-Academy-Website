import { Link } from "react-router-dom";
import Navbar from "../components/home/Navbar";
import Footer from "../components/home/Footer";
import { useState, useEffect } from "react";

const services = [
  {
    icon: "🎓",
    title: "Industry Readiness Programme (IRP)",
    desc: "A structured two-year curriculum embedded directly into your college schedule — delivered on-campus by 350+ certified practitioners across communication, aptitude, domain skills, and soft skills.",
  },
  {
    icon: "💼",
    title: "Campus Placement Support",
    desc: "End-to-end placement facilitation connecting your students to 450+ corporate hiring partners. We manage JD alignment, mock drives, GDs, PIs, and final placements — at zero cost to your institution.",
  },
  {
    icon: "👩‍🏫",
    title: "Faculty Development Programmes (FDPs)",
    desc: "Upskill your faculty with industry-aligned workshops covering modern pedagogy, data tools, and domain expertise. Delivered by our expert practitioner network.",
  },
  {
    icon: "📣",
    title: "Digital Branding & Admissions",
    desc: "From social media marketing and website development to full-cycle admissions support — we help colleges build their brand and fill seats with the right students.",
  },
  {
    icon: "📊",
    title: "CLDP — Corporate L&D Partnership",
    desc: "Facilitate industry-sponsored learning programmes inside your campus. Corporations co-design modules, sponsor training, and get first right of hire — a win-win ecosystem.",
  },
  {
    icon: "🌐",
    title: "Pan-India Network Access",
    desc: "Tap into our network of 55+ college partners and 25+ cities. Share best practices, access benchmarked data, and join a growing community of forward-thinking institutions.",
  },
];

const processSteps = [
  { step: "01", title: "Discovery Call", desc: "We understand your institution's challenges, student profile, and goals." },
  { step: "02", title: "Customised Proposal", desc: "We design a tailored programme aligned with your curriculum and hostel schedule." },
  { step: "03", title: "MoU & Onboarding", desc: "A simple MoU is signed, and our team is deployed on your campus within weeks." },
  { step: "04", title: "Training Delivery", desc: "Certified trainers deliver sessions in your classrooms — offline, structured, measurable." },
  { step: "05", title: "Placement Drives", desc: "Your students are presented to 450+ hiring partners through coordinated campus drives." },
  { step: "06", title: "Continuous Support", desc: "Quarterly reviews, data reporting, and ongoing faculty and branding support." },
];

const logoSrc = "https://res.cloudinary.com/dcjmaapvi/image/upload/v1740489025/ga-hori_ylcnm3.png";

export default function CollegesPage() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsNavbarVisible(true);
  }, []);

  return (
    <div className="min-h-screen w-full bg-white font-sans">
      <Navbar isVisible={isNavbarVisible} isFullWidth={true} logoSrc={logoSrc} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#01224F] pt-32 pb-20 text-white">
        <div className="pointer-events-none absolute -top-40 -left-24 h-96 w-96 rounded-full bg-[#1b4f8f]/40 blur-[120px]" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-[#3f8efc]/20 blur-[100px]" />
        <div className="relative mx-auto max-w-6xl px-6 text-center">
          <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-white/80 backdrop-blur-sm">
            For Colleges & Institutions
          </span>
          <h1
            className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl"
            style={{
              background: "linear-gradient(to right, #ffffff, #a8c8f0)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Your Institution's Complete<br />Growth Partner
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/75">
            From student training and faculty development to digital branding, admissions, and corporate placement —
            we handle every dimension of institutional growth, so you can focus on academics.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="rounded-xl bg-white px-7 py-3.5 text-base font-bold text-[#01224F] shadow-lg transition-all hover:scale-105 hover:shadow-xl"
            >
              Partner With Us
            </Link>
            <a
              href="#services"
              className="rounded-xl border border-white/30 bg-white/10 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
            >
              Explore Services
            </a>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#eaf3fb] py-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-4">
            {[
              { num: "55+", label: "College Partners" },
              { num: "70,000+", label: "Students Trained" },
              { num: "65,000+", label: "Training Hours" },
              { num: "350+", label: "Expert Trainers" },
            ].map((s) => (
              <div key={s.label} className="rounded-2xl bg-white px-4 py-6 shadow-sm">
                <p className="text-3xl font-extrabold text-[#01224F]">{s.num}</p>
                <p className="mt-1 text-sm font-medium text-[#4a5568]">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2
              className="text-3xl font-extrabold sm:text-4xl"
              style={{
                background: "linear-gradient(to right, #1B3A6B, #7B1B2A)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              What We Offer Your Institution
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-[#4a5568]">
              A comprehensive suite of services designed to strengthen every pillar of your institution — from student outcomes to brand visibility.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="group rounded-2xl border border-[#d0ddef] bg-[#f8fbff] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#1B3A6B]/40 hover:shadow-[0_12px_36px_rgba(27,58,107,0.12)]"
              >
                <span className="text-4xl">{s.icon}</span>
                <h3 className="mt-4 text-lg font-extrabold text-[#0d1b3e]">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#4a5568]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#eff4fa] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2
              className="text-3xl font-extrabold sm:text-4xl"
              style={{
                background: "linear-gradient(to right, #1B3A6B, #7B1B2A)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              How It Works
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-[#4a5568]">
              A seamless, end-to-end engagement model designed to be friction-free for colleges.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((p) => (
              <div key={p.step} className="relative overflow-hidden rounded-2xl bg-white px-7 py-8 shadow-sm">
                <span
                  className="absolute -right-3 -top-3 text-[6rem] font-extrabold leading-none select-none"
                  style={{ color: "rgba(27,58,107,0.06)" }}
                >
                  {p.step}
                </span>
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#1B3A6B]">Step {p.step}</span>
                <h3 className="mt-2 text-lg font-extrabold text-[#0d1b3e]">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4a5568]">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#01224F] py-20 text-center text-white">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to Transform Your Institution?
          </h2>
          <p className="mt-4 text-white/70">
            Join 55+ colleges across India already partnered with Gryphon Academy. Zero cost to your institution.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-block rounded-xl bg-white px-8 py-3.5 text-base font-bold text-[#01224F] shadow-lg transition-all hover:scale-105"
          >
            Get Started Today
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
