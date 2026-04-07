import { Link } from "react-router-dom";
import Navbar from "../components/home/Navbar";
import Footer from "../components/home/Footer";
import { useState, useEffect } from "react";

const upcomingEvents = [
  {
    date: "April 18, 2026",
    type: "Campus Drive",
    title: "Pan-India MBA Placement Drive",
    location: "Pune, Mumbai, Delhi, Bangalore",
    spots: "Open to all partner colleges",
    badge: "Upcoming",
    badgeColor: "bg-green-100 text-green-700",
  },
  {
    date: "April 25, 2026",
    type: "Workshop",
    title: "Power BI & Data Analytics Bootcamp",
    location: "Online + On-Campus",
    spots: "Limited seats — 50 students",
    badge: "Workshop",
    badgeColor: "bg-blue-100 text-blue-700",
  },
  {
    date: "May 2, 2026",
    type: "Faculty Development",
    title: "FDP: Industry 4.0 & Future of Work",
    location: "Gryphon HQ, Pune",
    spots: "For college faculty members",
    badge: "FDP",
    badgeColor: "bg-purple-100 text-purple-700",
  },
  {
    date: "May 10, 2026",
    type: "Campus Drive",
    title: "Engineering Talent Hiring Drive",
    location: "Hyderabad, Chennai, Kolkata",
    spots: "Open to BTech / BE students",
    badge: "Upcoming",
    badgeColor: "bg-green-100 text-green-700",
  },
  {
    date: "May 20, 2026",
    type: "Seminar",
    title: "Career Readiness Seminar for MCA Students",
    location: "Partner Colleges — Pan India",
    spots: "All enrolled students",
    badge: "Seminar",
    badgeColor: "bg-yellow-100 text-yellow-700",
  },
  {
    date: "June 5, 2026",
    type: "Campus Drive",
    title: "Summer Hiring Drive — FMCG & Retail",
    location: "Pune, Nashik, Aurangabad",
    spots: "MBA & Diploma graduates",
    badge: "Upcoming",
    badgeColor: "bg-green-100 text-green-700",
  },
];

const eventTypes = [
  { icon: "🏆", title: "Campus Placement Drives", desc: "Multi-city, multi-college simultaneous drives connecting your students with 450+ hiring partners." },
  { icon: "🧑‍💻", title: "Skill Workshops & Bootcamps", desc: "Hands-on sessions on Power BI, SQL, Gen AI, Excel, and Looker Studio — delivered by industry practitioners." },
  { icon: "👩‍🏫", title: "Faculty Development Programmes", desc: "Intensive workshops designed to upskill college faculty with modern pedagogy and industry insights." },
  { icon: "🎤", title: "Industry Seminars", desc: "Guest lectures, panels, and field exposure sessions bringing top executives to your campus." },
  { icon: "💼", title: "Mock Interview & GD Drives", desc: "Simulated group discussions and personal interview sessions with real hiring managers." },
  { icon: "🎓", title: "Convocation & Award Ceremonies", desc: "Celebrating academic excellence and student achievement across our partner network." },
];

const logoSrc = "https://res.cloudinary.com/dcjmaapvi/image/upload/v1740489025/ga-hori_ylcnm3.png";

export default function EventsPage() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filters = ["All", "Campus Drive", "Workshop", "FDP", "Seminar"];
  const filtered = filter === "All" ? upcomingEvents : upcomingEvents.filter((e) => e.type === filter);

  return (
    <div className="min-h-screen w-full bg-white font-sans">
      <Navbar isVisible={isNavbarVisible} isFullWidth={true} logoSrc={logoSrc} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#01224F] pt-32 pb-20 text-white">
        <div className="pointer-events-none absolute top-0 left-1/3 h-72 w-72 rounded-full bg-[#1b4f8f]/40 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-[#7B1A1A]/30 blur-[100px]" />
        <div className="relative mx-auto max-w-6xl px-6 text-center">
          <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-white/80">
            Events & Programmes
          </span>
          <h1
            className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl"
            style={{
              background: "linear-gradient(to right, #ffffff, #c8d8f0)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Where Classrooms Meet<br />Careers
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/75">
            From mega placement drives to skill bootcamps and faculty development programmes —
            every Gryphon event is a bridge between academia and industry.
          </p>
        </div>
      </section>

      {/* Event Types */}
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
              Types of Events We Host
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {eventTypes.map((e) => (
              <div
                key={e.title}
                className="rounded-2xl border border-[#d0ddef] bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <span className="text-3xl">{e.icon}</span>
                <h3 className="mt-3 text-base font-extrabold text-[#0d1b3e]">{e.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4a5568]">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="bg-white py-20">
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
              Upcoming Events
            </h2>
            <p className="mt-4 text-base text-[#4a5568]">Stay updated with our next drives, workshops, and programmes.</p>
          </div>

          {/* Filter tabs */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                  filter === f
                    ? "bg-[#01224F] text-white shadow-md"
                    : "border border-[#01224F]/30 text-[#01224F] hover:bg-[#eaf3fb]"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((ev) => (
              <div
                key={ev.title}
                className="flex flex-col justify-between rounded-2xl border border-[#d0ddef] bg-[#f8fbff] p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className={`rounded-full px-3 py-1 text-xs font-bold ${ev.badgeColor}`}>{ev.badge}</span>
                    <span className="text-xs text-[#4a5568]">{ev.date}</span>
                  </div>
                  <h3 className="mt-3 text-base font-extrabold text-[#0d1b3e]">{ev.title}</h3>
                  <div className="mt-3 space-y-1.5">
                    <p className="flex items-center gap-2 text-xs text-[#4a5568]">
                      <span>📍</span> {ev.location}
                    </p>
                    <p className="flex items-center gap-2 text-xs text-[#4a5568]">
                      <span>👥</span> {ev.spots}
                    </p>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="mt-5 inline-block rounded-lg bg-[#01224F] px-4 py-2 text-center text-xs font-bold text-white transition-all hover:bg-[#1B3A6B]"
                >
                  Register Interest →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#01224F] py-20 text-center text-white">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Want to Host an Event at Your Campus?
          </h2>
          <p className="mt-4 text-white/70">
            We bring drives, workshops, and industry seminars directly to your institution. Reach out to schedule.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-block rounded-xl bg-white px-8 py-3.5 text-base font-bold text-[#01224F] shadow-lg transition-all hover:scale-105"
          >
            Talk to Us
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
