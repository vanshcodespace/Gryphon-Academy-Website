import Navbar from "../components/home/Navbar";
import Footer from "../components/home/Footer";
import { useState, useEffect } from "react";

const logoSrc = "https://res.cloudinary.com/dcjmaapvi/image/upload/v1740489025/ga-hori_ylcnm3.png";
const mapEmbedSrc =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.4536495747366!2d73.76831887436869!3d18.553575668166875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xab4cb7fb73c5c4ff%3A0x14e62cad775d447b!2sGryphon%20Academy%20Pvt.%20Ltd!5e0!3m2!1sen!2sin!4v1724220761014!5m2!1sen!2sin";
const contactEmail = "connect@gryphonacademy.co.in";
const emailJsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const emailJsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const emailJsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const offices = [
  {
    city: "Pune HQ",
    address: "9th Floor, Olympia Business House, Mumbai-Bangalore Highway, Pune - 411045",
    phone: "+91 8956444509",
    email: contactEmail,
    mapLink: "https://maps.app.goo.gl/LbkaqWULoGY2k7bq8",
  },
];

const quickConnectCards = [
  {
    icon: "fas fa-university",
    label: "Colleges",
    sub: "Build a campus partnership",
    href: `mailto:${contactEmail}?subject=College Partnership`,
  },
  {
    icon: "fas fa-building",
    label: "Corporate",
    sub: "Hire trained talent",
    href: `mailto:${contactEmail}?subject=Hiring Partnership`,
  },
  {
    icon: "fas fa-graduation-cap",
    label: "Students",
    sub: "Explore training support",
    href: `mailto:${contactEmail}?subject=Student Enquiry`,
  },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/gryphonacademy/", icon: "fab fa-linkedin-in" },
  { label: "Instagram", href: "https://www.instagram.com/gryphon_academy/", icon: "fab fa-instagram" },
  { label: "Facebook", href: "https://www.facebook.com/gryphonnacademy", icon: "fab fa-facebook-f" },
  { label: "YouTube", href: "https://www.youtube.com/channel/UCVn2uVWEHg8cMFd8ht3CQBw", icon: "fab fa-youtube" },
];

const emptyForm = {
  name: "",
  email: "",
  phone: "",
  role: "",
  organisation: "",
  message: "",
};

export default function ContactPage() {
  const [isNavbarVisible] = useState(true);
  const [form, setForm] = useState(emptyForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (!emailJsServiceId || !emailJsTemplateId || !emailJsPublicKey) {
        throw new Error("EmailJS is not configured.");
      }

      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: emailJsServiceId,
          template_id: emailJsTemplateId,
          user_id: emailJsPublicKey,
          template_params: {
            title: "New Website Enquiry",
            to_email: contactEmail,
            name: form.name,
            email: form.email,
            user_name: form.name,
            user_email: form.email,
            user_phone: form.phone || "Not provided",
            user_role: form.role,
            organization: form.organisation || "Not provided",
            from_name: form.name,
            from_email: form.email,
            phone: form.phone || "Not provided",
            role: form.role,
            organisation: form.organisation || "Not provided",
            message: form.message,
          },
        }),
      });

      if (!response.ok) {
        throw new Error("Unable to send message.");
      }

      setSubmitted(true);
      setForm(emptyForm);
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#f6f9fd] font-sans roboto-regular">
      <Navbar isVisible={isNavbarVisible} isFullWidth={true} logoSrc={logoSrc} />

      <section className="relative overflow-hidden bg-[#01224F] pt-32 pb-24 text-white">
        <div className="pointer-events-none absolute -left-28 top-0 h-96 w-96 rounded-full bg-[#3f8efc]/25 blur-[120px]" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#7B1B2A]/35 blur-[110px]" />
        <div className="relative mx-auto max-w-6xl px-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-bold uppercase tracking-widest text-white/85 backdrop-blur-sm">
            <i className="fas fa-paper-plane text-[#BCDEF4]"></i>
            Get in Touch
          </span>
          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Let's Build Something Great Together
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
            Colleges, companies, and students come to us with different goals. We help turn each one into a clear next step.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#contact-form"
              className="rounded-lg bg-white px-7 py-3.5 text-base font-bold text-[#01224F] shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              Send a Message
            </a>
            <a
              href={offices[0].mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/30 bg-white/10 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-12 pb-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="overflow-hidden rounded-lg border border-white/70 bg-white shadow-[0_22px_70px_rgba(1,34,79,0.18)]">
            <div className="grid lg:grid-cols-[1.35fr_0.65fr]">
              <div className="min-h-[340px] bg-[#dce9f5] lg:min-h-[460px]">
                <iframe
                  title="Gryphon Academy Office Location"
                  src={mapEmbedSrc}
                  width="100%"
                  height="100%"
                  className="h-[340px] w-full lg:h-full"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="bg-gradient-to-br from-[#01224F] via-[#123565] to-[#7B1B2A] p-7 text-white sm:p-9">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white/15 text-xl">
                  <i className="fas fa-map-marker-alt"></i>
                </span>
                <p className="mt-6 text-sm font-bold uppercase tracking-widest text-white/65">Visit our office</p>
                <h2 className="mt-2 text-3xl font-extrabold">{offices[0].city}</h2>
                <p className="mt-4 text-sm leading-7 text-white/78">{offices[0].address}</p>

                <div className="mt-8 space-y-3">
                  <a
                    href={`tel:${offices[0].phone}`}
                    className="flex items-center gap-3 rounded-lg bg-white/10 px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-white/18"
                  >
                    <i className="fas fa-phone-alt w-4 text-center text-[#BCDEF4]"></i>
                    <span>{offices[0].phone}</span>
                  </a>
                  <a
                    href={`mailto:${offices[0].email}`}
                    className="flex items-center gap-3 rounded-lg bg-white/10 px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-white/18"
                  >
                    <i className="fas fa-envelope w-4 text-center text-[#BCDEF4]"></i>
                    <span>{offices[0].email}</span>
                  </a>
                </div>

                <a
                  href={offices[0].mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-bold text-[#01224F] transition-all hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Open in Google Maps
                  <i className="fas fa-arrow-right text-xs"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact-form" className="bg-[#f6f9fd] pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-[#7B1B2A]">Start the conversation</span>
            <h2 className="mt-3 text-3xl font-extrabold text-[#01224F] sm:text-4xl">Tell us what you are building toward</h2>
            <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-[#4a5568]">
              Share a few details and the right Gryphon team member will connect with you shortly.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div className="rounded-lg border border-[#d0ddef] bg-white p-6 shadow-[0_14px_44px_rgba(1,34,79,0.08)] sm:p-8">
              {submitted ? (
                <div className="flex min-h-[460px] flex-col items-center justify-center text-center">
                  <span className="flex h-20 w-20 items-center justify-center rounded-full bg-[#e7f6ee] text-4xl text-[#128743]">
                    <i className="fas fa-check"></i>
                  </span>
                  <h3 className="mt-6 text-2xl font-extrabold text-[#01224F]">Message received</h3>
                  <p className="mt-3 max-w-md text-base leading-relaxed text-[#4a5568]">
                    Thank you for reaching out. Our team will get back to you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm(emptyForm);
                      setError("");
                    }}
                    className="mt-8 rounded-lg bg-[#01224F] px-6 py-3 text-sm font-bold text-white transition-all hover:bg-[#1B3A6B]"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-[#1B3A6B]">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full rounded-lg border border-[#d0ddef] bg-[#f8fbff] px-4 py-3 text-sm text-[#0d1b3e] outline-none transition-all focus:border-[#1B3A6B] focus:bg-white focus:ring-2 focus:ring-[#1B3A6B]/15"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-[#1B3A6B]">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full rounded-lg border border-[#d0ddef] bg-[#f8fbff] px-4 py-3 text-sm text-[#0d1b3e] outline-none transition-all focus:border-[#1B3A6B] focus:bg-white focus:ring-2 focus:ring-[#1B3A6B]/15"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-[#1B3A6B]">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full rounded-lg border border-[#d0ddef] bg-[#f8fbff] px-4 py-3 text-sm text-[#0d1b3e] outline-none transition-all focus:border-[#1B3A6B] focus:bg-white focus:ring-2 focus:ring-[#1B3A6B]/15"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-[#1B3A6B]">
                        I Am A *
                      </label>
                      <select
                        name="role"
                        required
                        value={form.role}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-[#d0ddef] bg-[#f8fbff] px-4 py-3 text-sm text-[#0d1b3e] outline-none transition-all focus:border-[#1B3A6B] focus:bg-white focus:ring-2 focus:ring-[#1B3A6B]/15"
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
                    <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-[#1B3A6B]">
                      Organisation / College Name
                    </label>
                    <input
                      type="text"
                      name="organisation"
                      value={form.organisation}
                      onChange={handleChange}
                      placeholder="Your company or institution name"
                      className="w-full rounded-lg border border-[#d0ddef] bg-[#f8fbff] px-4 py-3 text-sm text-[#0d1b3e] outline-none transition-all focus:border-[#1B3A6B] focus:bg-white focus:ring-2 focus:ring-[#1B3A6B]/15"
                    />
                  </div>

                  <div>
                    <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-[#1B3A6B]">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help..."
                      className="w-full resize-none rounded-lg border border-[#d0ddef] bg-[#f8fbff] px-4 py-3 text-sm text-[#0d1b3e] outline-none transition-all focus:border-[#1B3A6B] focus:bg-white focus:ring-2 focus:ring-[#1B3A6B]/15"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#01224F] to-[#7B1B2A] px-6 py-4 text-base font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {loading ? (
                      <>
                        <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <i className="fas fa-arrow-right text-sm"></i>
                      </>
                    )}
                  </button>
                  {error && (
                    <p className="rounded-lg border border-[#f1b4b4] bg-[#fff5f5] px-4 py-3 text-sm font-semibold text-[#9b1c1c]">
                      {error}
                    </p>
                  )}
                </form>
              )}
            </div>

            <div className="space-y-5">
              <div className="rounded-lg border border-[#d0ddef] bg-white p-6 shadow-sm">
                <h3 className="text-lg font-extrabold text-[#01224F]">Quick Connect</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4a5568]">
                  Choose the lane that fits you best and we will route your enquiry faster.
                </p>
                <div className="mt-5 grid gap-3">
                  {quickConnectCards.map((card) => (
                    <a
                      key={card.label}
                      href={card.href}
                      className="group flex items-center gap-4 rounded-lg border border-[#d0ddef] bg-[#f8fbff] p-4 transition-all hover:-translate-y-0.5 hover:border-[#1B3A6B]/35 hover:bg-white hover:shadow-md"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#e8f1fa] text-[#1B3A6B] transition-colors group-hover:bg-[#01224F] group-hover:text-white">
                        <i className={`${card.icon} text-lg`}></i>
                      </span>
                      <span>
                        <span className="block text-sm font-extrabold text-[#01224F]">{card.label}</span>
                        <span className="mt-0.5 block text-xs text-[#4a5568]">{card.sub}</span>
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="rounded-lg bg-[#01224F] p-6 text-white shadow-[0_14px_36px_rgba(1,34,79,0.16)]">
                <h3 className="text-lg font-extrabold">Connect on Social Media</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">
                  Follow us for drives, events, student wins, and academy updates.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  {socialLinks.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={s.label}
                      aria-label={s.label}
                      className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/12 text-white transition-all hover:-translate-y-0.5 hover:bg-white hover:text-[#01224F]"
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

      <Footer />
    </div>
  );
}
