import { Link } from "react-router-dom";
import Navbar from "../components/home/Navbar";
import Footer from "../components/home/Footer";
import { useState, useEffect } from "react";

const solutions = [
  {
    icon: "🎯",
    title: "Zero-Cost Campus Hiring",
    desc: "Access pre-trained, JD-aligned graduates from 55+ institutions across 25+ cities — completely free. We manage the entire drive, from shortlisting to offer roll-out.",
  },
  {
    icon: "🧑‍🤝‍🧑",
    title: "Pre-Trained Talent Pipeline",
    desc: "Every candidate in our network has completed structured training in communication, aptitude, domain skills, and industry tools. No onboarding lag — they are ready from Day 1.",
  },
  {
    icon: "📋",
    title: "JD-Aligned Candidate Preparation",
    desc: "Share your job descriptions with us. We curate and prep matching candidates specifically for your roles — saving your HR team hundreds of screening hours.",
  },
  {
    icon: "🌍",
    title: "Pan-India Drive Coordination",
    desc: "From Pune to Patna, we coordinate simultaneous drives across 25+ cities, giving you access to a diverse talent pool in one seamless engagement.",
  },
  {
    icon: "📈",
    title: "Corporate L&D Solutions",
    desc: "Need to upskill your existing workforce? We deliver bespoke Learning & Development programmes drawing from our practitioner network of 350+ certified trainers.",
  },
  {
    icon: "🤝",
    title: "CSR & Sponsored Training",
    desc: "Co-design a training module, sponsor curriculum inside colleges, and gain first-right-of-hire on 70,000+ trained students — while fulfilling your CSR mandate.",
  },
];

const industries = [
  "Banking & Financial Services", "IT & Technology", "FMCG & Retail",
  "Logistics & Supply Chain", "Healthcare & Pharma", "Aviation & Hospitality",
  "Manufacturing", "Consulting & Analytics", "E-commerce", "Infrastructure",
];

const logoSrc = "https://res.cloudinary.com/dcjmaapvi/image/upload/v1740489025/ga-hori_ylcnm3.png";

export default function CorporatePage() {
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
        <div className="pointer-events-none absolute -top-40 -right-24 h-96 w-96 rounded-full bg-[#7B1A1A]/30 blur-[120px]" />
        <div className="pointer-events-none absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-[#3f8efc]/20 blur-[100px]" />
        <div className="relative mx-auto max-w-6xl px-6 text-center">
          <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-white/80 backdrop-blur-sm">
            For Corporate & Enterprises
          </span>
          <h1
            className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl"
            style={{
              background: "linear-gradient(to right, #ffffff, #f0c0a0)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Trained Talent. Zero Cost.<br />Pan-India.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/75">
            Skip the friction of unready candidates. We deliver pre-trained, role-aligned graduates from 55+ institutions
            and manage your entire campus drive — at no charge to your organisation.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="rounded-xl bg-white px-7 py-3.5 text-base font-bold text-[#01224F] shadow-lg transition-all hover:scale-105 hover:shadow-xl"
            >
              Register as Hiring Partner
            </Link>
            <a
              href="#solutions"
              className="rounded-xl border border-white/30 bg-white/10 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
            >
              Explore Solutions
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#fff8f5] py-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-4">
            {[
              { num: "450+", label: "Hiring Partners" },
              { num: "70,000+", label: "Trained Graduates" },
              { num: "25+", label: "Cities Covered" },
              { num: "0", label: "Cost to You" },
            ].map((s) => (
              <div key={s.label} className="rounded-2xl bg-white px-4 py-6 shadow-sm border border-[#f0d0c0]/40">
                <p className="text-3xl font-extrabold text-[#7B1A1A]">{s.num}</p>
                <p className="mt-1 text-sm font-medium text-[#4a5568]">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="bg-white py-20">
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
              Hiring Solutions Built for You
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-[#4a5568]">
              Whether you need one hire or five hundred — our solutions scale with your requirements.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((s) => (
              <div
                key={s.title}
                className="group rounded-2xl border border-[#eed0c0] bg-[#fff8f5] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#7B1A1A]/40 hover:shadow-[0_12px_36px_rgba(123,26,26,0.12)]"
              >
                <span className="text-4xl">{s.icon}</span>
                <h3 className="mt-4 text-lg font-extrabold text-[#0d1b3e]">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#4a5568]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-[#eff4fa] py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2
            className="text-3xl font-extrabold sm:text-4xl"
            style={{
              background: "linear-gradient(to right, #1B3A6B, #7B1B2A)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Industries We Serve
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-[#4a5568]">
            Our talent pipeline spans every major sector of the Indian economy.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {industries.map((ind) => (
              <span
                key={ind}
                className="rounded-full border border-[#1B3A6B]/25 bg-white px-4 py-2 text-sm font-semibold text-[#1B3A6B] shadow-sm"
              >
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Why Gryphon */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2
                className="text-3xl font-extrabold sm:text-4xl"
                style={{
                  background: "linear-gradient(to right, #1B3A6B, #7B1B2A)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Why 450+ Companies<br />Choose Gryphon
              </h2>
              <div className="mt-8 space-y-5">
                {[
                  { title: "Industry-Ready, Not Just Qualified", desc: "Candidates have completed structured training in your domain requirements before they ever walk into your interview room." },
                  { title: "We Manage Everything", desc: "Job postings, campus drives, candidate coordination, offer rollouts — our team handles it all. Your HR just shows up." },
                  { title: "Zero Placement Fee", desc: "No charges. Ever. Our model is funded through institutional partnerships, not employer fees." },
                  { title: "Diversity at Scale", desc: "Access diverse talent pools across MBA, Engineering, MCA, and Diploma streams from 25+ cities." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <span className="mt-1 h-5 w-5 shrink-0 rounded-full bg-gradient-to-br from-[#1B3A6B] to-[#7B1A1A]" />
                    <div>
                      <p className="font-bold text-[#0d1b3e]">{item.title}</p>
                      <p className="mt-1 text-sm text-[#4a5568]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-[#01224F] to-[#7B1A1A] p-10 text-white text-center shadow-2xl">
              <p className="text-5xl font-extrabold">₹0</p>
              <p className="mt-2 text-xl font-bold">Placement Cost</p>
              <p className="mt-6 text-white/75 text-sm leading-relaxed">
                Gryphon Academy's unique institutional funding model means you never pay a single rupee for hiring.
                From posting to placement — it's entirely free.
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-block rounded-xl bg-white px-6 py-3 text-sm font-bold text-[#01224F] transition-all hover:scale-105"
              >
                Start Hiring Today
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#01224F] py-20 text-center text-white">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Your Next Hire Is Already in Our Network.
          </h2>
          <p className="mt-4 text-white/70">
            Register as a Gryphon hiring partner and get access to 70,000+ trained graduates. Zero cost, zero hassle.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-block rounded-xl bg-white px-8 py-3.5 text-base font-bold text-[#01224F] shadow-lg transition-all hover:scale-105"
          >
            Register Now
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
