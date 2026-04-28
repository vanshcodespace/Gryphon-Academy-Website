import Navbar from "../components/home/Navbar";
import Footer from "../components/home/Footer";
import { useState, useEffect } from "react";

const logoSrc = "https://res.cloudinary.com/dcjmaapvi/image/upload/v1740489025/ga-hori_ylcnm3.png";

const offices = [
  {
    city: "Pune (HQ)",
    address: "9th Floor, Olympia Business House, Mumbai-Bangalore Highway, Pune - 411045",
    phone: "+91 8956444509",
    email: "connect@gryphonacademy.co.in",
    mapLink: "https://maps.app.goo.gl/LbkaqWULoGY2k7bq8",
  },
];

export default function ContactPage() {
  const [isNavbarVisible] = useState(true);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    organisation: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen w-full bg-white font-sans roboto-regular overflow-x-hidden">
      <Navbar isVisible={isNavbarVisible} isFullWidth={true} logoSrc={logoSrc} />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20" style={{ background: "linear-gradient(to bottom, #daeef8, #ffffff)" }}>
        <div className="pointer-events-none absolute -top-40 -left-24 h-96 w-96 rounded-full bg-[#BCDEF4]/50 blur-[120px]" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-[#daeef8]/50 blur-[100px]" />
        <div className="relative mx-auto max-w-6xl px-6 text-center">
          <span className="inline-block rounded-full border border-[#1B3A6B]/20 bg-[#1B3A6B]/5 px-4 py-1.5 text-sm font-bold uppercase tracking-widest text-[#1B3A6B]">
            Get in Touch
          </span>
          <h1
            className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl"
            style={{
              background: "linear-gradient(to right, #1B3A6B, #7B1B2A)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Let's Build Something<br />Great Together
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#4a5568]">
            Whether you're a college looking to train your students, a company looking to hire,
            or a student ready to grow — we want to hear from you.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">

            {/* Contact Form */}
            <div className="rounded-2xl bg-white p-8 shadow-[0_8px_36px_rgba(1,34,79,0.10)] border border-[#d0ddef]">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <span className="text-6xl">✅</span>
                  <h2 className="mt-6 text-2xl font-extrabold text-[#01224F]">Message Received!</h2>
                  <p className="mt-3 text-base text-[#4a5568]">
                    Thank you for reaching out. Our team will get back to you within 1–2 business days.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", role: "", organisation: "", message: "" }); }}
                    className="mt-8 rounded-xl bg-[#01224F] px-6 py-3 text-sm font-bold text-white transition-all hover:bg-[#1B3A6B]"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-extrabold text-[#01224F]">Send Us a Message</h2>
                  <p className="mt-2 text-sm text-[#4a5568]">Fill in the form below and we'll get back to you shortly.</p>
                  <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-[#1B3A6B] mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          className="w-full rounded-xl border border-[#d0ddef] bg-[#f8fbff] px-4 py-3 text-sm text-[#0d1b3e] outline-none transition-all focus:border-[#1B3A6B] focus:ring-2 focus:ring-[#1B3A6B]/15"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-[#1B3A6B] mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          className="w-full rounded-xl border border-[#d0ddef] bg-[#f8fbff] px-4 py-3 text-sm text-[#0d1b3e] outline-none transition-all focus:border-[#1B3A6B] focus:ring-2 focus:ring-[#1B3A6B]/15"
                        />
                      </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-[#1B3A6B] mb-1.5">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+91 XXXXX XXXXX"
                          className="w-full rounded-xl border border-[#d0ddef] bg-[#f8fbff] px-4 py-3 text-sm text-[#0d1b3e] outline-none transition-all focus:border-[#1B3A6B] focus:ring-2 focus:ring-[#1B3A6B]/15"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-[#1B3A6B] mb-1.5">
                          I Am A *
                        </label>
                        <select
                          name="role"
                          required
                          value={form.role}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-[#d0ddef] bg-[#f8fbff] px-4 py-3 text-sm text-[#0d1b3e] outline-none transition-all focus:border-[#1B3A6B] focus:ring-2 focus:ring-[#1B3A6B]/15"
                        >
                          <option value="">Select your role</option>
                          <option value="college">College / Institution</option>
                          <option value="corporate">Corporate / Company</option>
                          <option value="student">Student</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-[#1B3A6B] mb-1.5">
                        Organisation / College Name
                      </label>
                      <input
                        type="text"
                        name="organisation"
                        value={form.organisation}
                        onChange={handleChange}
                        placeholder="Your company or institution name"
                        className="w-full rounded-xl border border-[#d0ddef] bg-[#f8fbff] px-4 py-3 text-sm text-[#0d1b3e] outline-none transition-all focus:border-[#1B3A6B] focus:ring-2 focus:ring-[#1B3A6B]/15"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-[#1B3A6B] mb-1.5">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us how we can help..."
                        className="w-full rounded-xl border border-[#d0ddef] bg-[#f8fbff] px-4 py-3 text-sm text-[#0d1b3e] outline-none transition-all focus:border-[#1B3A6B] focus:ring-2 focus:ring-[#1B3A6B]/15 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full rounded-xl bg-[#01224F] px-6 py-4 text-base font-bold text-white shadow-lg transition-all hover:bg-[#1B3A6B] hover:scale-[1.01] disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/>
                          </svg>
                          Sending...
                        </span>
                      ) : "Send Message →"}
                    </button>
                  </form>
                </>
              )}
            </div>

            {/* Info Panel */}
            <div className="space-y-6">
              {/* Office Info */}
              {offices.map((o) => (
                <div key={o.city} className="rounded-2xl bg-white border border-[#d0ddef] p-7 shadow-sm">
                  <h3 className="text-lg font-extrabold text-[#01224F]"><i className="fas fa-map-marker-alt mr-2 text-[#7B1B2A]"></i>{o.city}</h3>
                  <div className="mt-4 space-y-3">
                    <a
                      href={o.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 text-sm text-[#4a5568] hover:text-[#01224F] transition-colors"
                    >
                      <i className="fas fa-map mt-1 w-4 text-center text-[#1B3A6B]"></i>
                      <span>{o.address}</span>
                    </a>
                    <a href={`tel:${o.phone}`} className="flex items-center gap-3 text-sm text-[#4a5568] hover:text-[#01224F] transition-colors">
                      <i className="fas fa-phone-alt w-4 text-center text-[#1B3A6B]"></i>
                      <span>{o.phone}</span>
                    </a>
                    <a href={`mailto:${o.email}`} className="flex items-center gap-3 text-sm text-[#4a5568] hover:text-[#01224F] transition-colors">
                      <i className="fas fa-envelope w-4 text-center text-[#1B3A6B]"></i>
                      <span>{o.email}</span>
                    </a>
                  </div>
                </div>
              ))}

              {/* Quick Connect Cards */}
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  { icon: "fas fa-university", label: "For Colleges", sub: "Partner with us", href: "mailto:connect@gryphonacademy.co.in?subject=College Partnership" },
                  { icon: "fas fa-building", label: "For Corporate", sub: "Hire from us", href: "mailto:connect@gryphonacademy.co.in?subject=Hiring Partnership" },
                  { icon: "fas fa-graduation-cap", label: "For Students", sub: "Get trained", href: "mailto:connect@gryphonacademy.co.in?subject=Student Enquiry" },
                ].map((card) => (
                  <a
                    key={card.label}
                    href={card.href}
                    className="flex flex-col items-center rounded-2xl border border-[#d0ddef] bg-white p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
                  >
                    <i className={`${card.icon} text-3xl text-[#1B3A6B]`}></i>
                    <p className="mt-3 text-sm font-extrabold text-[#01224F]">{card.label}</p>
                    <p className="mt-0.5 text-xs text-[#4a5568]">{card.sub}</p>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="rounded-2xl bg-[#01224F] p-7 text-white">
                <h3 className="font-extrabold text-lg">Connect on Social Media</h3>
                <p className="mt-2 text-sm text-white/60">Follow us for updates on drives, events, and opportunities.</p>
                <div className="mt-5 flex gap-4">
                  {[
                    { label: "LinkedIn", href: "https://www.linkedin.com/company/gryphonacademy/", icon: "fab fa-linkedin-in" },
                    { label: "Instagram", href: "https://www.instagram.com/gryphon_academy/", icon: "fab fa-instagram" },
                    { label: "Facebook", href: "https://www.facebook.com/gryphonnacademy", icon: "fab fa-facebook-f" },
                    { label: "YouTube", href: "https://www.youtube.com/channel/UCVn2uVWEHg8cMFd8ht3CQBw", icon: "fab fa-youtube" },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={s.label}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-sm font-bold text-white transition-all hover:bg-white/30"
                    >
                      <i className={`${s.icon} text-lg`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map embed */}
      <section className="bg-white">
        <iframe
          title="Gryphon Academy Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.4536495747366!2d73.76831887436869!3d18.553575668166875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xab4cb7fb73c5c4ff%3A0x14e62cad775d447b!2sGryphon%20Academy%20Pvt.%20Ltd!5e0!3m2!1sen!2sin!4v1724220761014!5m2!1sen!2sin"
          width="100%"
          height="360"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

      <Footer />
    </div>
  );
}
