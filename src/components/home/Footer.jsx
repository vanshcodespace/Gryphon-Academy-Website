import { Link } from "react-router-dom";
import {
  faMapMarkerAlt,
  faMobileAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import socialFb from "../../assets/social-fb.svg";
import socialIg from "../../assets/social-ig.svg";
import socialIn from "../../assets/social-in.svg";
import youtubeIcon from "../../assets/youtube.png";

function GradientFaIcon({ icon, gradientId, className = "" }) {
  const [width, height, , , svgPathData] = icon.icon;
  const paths = Array.isArray(svgPathData) ? svgPathData : [svgPathData];

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      aria-hidden="true"
      className={className}
      fill={`url(#${gradientId})`}
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#68a1fc" />
          <stop offset="100%" stopColor="#ff4d68" />
        </linearGradient>
      </defs>
      {paths.map((path, index) => (
        <path key={`${gradientId}-${index}`} d={path} />
      ))}
    </svg>
  );
}

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = [
    { name: "Contact Us", path: "/contact" },
    { name: "About Us", path: "/about" },
    { name: "For Colleges", path: "/colleges" },
    { name: "For Corporate", path: "/corporate" },
    { name: "Events", path: "/events" },
    { name: "Privacy Policy", path: "/privacy-policy" },
  ];

  return (
    <footer className="bg-[#01224F] px-4 py-8 text-white">
      <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-4">
        <div className="mb-8 flex flex-col items-center md:mb-0">
          <img
            src="https://res.cloudinary.com/dcjmaapvi/image/upload/v1732608342/NewLogo_glaelo.webp"
            alt="Gryphon Academy Logo"
            className="w-48 md:w-64"
          />
        </div>

        <div className="flex flex-col">
          <h2
            className="mb-4 text-center text-3xl font-bold md:text-left"
            style={{
              background: "linear-gradient(to right, #ffffff, #ffffff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Useful Links
          </h2>
          <ul className="space-y-2 text-center md:text-left">
            {footerLinks.map((link) => (
              <li key={link.path} className="relative">
                <Link
                  to={link.path}
                  onClick={scrollToTop}
                  className="border-b-2 border-transparent text-lg text-white transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-[linear-gradient(to_right,#68a1fc,#ff4d68)] hover:[border-image:linear-gradient(to_right,#68a1fc,#ff4d68)_1]"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col">
          <h2
            className="mb-4 text-center text-3xl font-bold md:text-left"
            style={{
              background: "linear-gradient(to right, #ffffff, #ffffff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Contact Us
          </h2>
          <ul className="space-y-4 text-center md:text-left">
            <li className="flex items-center justify-center md:justify-start">
              <GradientFaIcon
                icon={faMapMarkerAlt}
                gradientId="footer-map-icon"
                className="mr-2 ml-10 h-4 w-4 shrink-0 sm:ml-0"
              />
              <p className="text-sm">
                <a
                  href="https://maps.app.goo.gl/LbkaqWULoGY2k7bq8"
                  className="transition duration-300 hover:text-transparent hover:bg-clip-text hover:bg-[linear-gradient(to_right,#68a1fc,#ff4d68)]"
                >
                  9th Floor, Olympia Business House, Mumbai - Bangalore Highway,
                  Pune - 411045
                </a>
              </p>
            </li>
            <li className="flex items-center justify-center md:justify-start">
              <GradientFaIcon
                icon={faMobileAlt}
                gradientId="footer-mobile-icon"
                className="mr-2 h-4 w-4 shrink-0"
              />
              <p className="text-sm">
                <a
                  href="tel:+918956444509"
                  className="transition duration-300 hover:text-transparent hover:bg-clip-text hover:bg-[linear-gradient(to_right,#68a1fc,#ff4d68)]"
                >
                  +91 8956444509
                </a>
              </p>
            </li>
            <li className="flex items-center justify-center md:justify-start">
              <GradientFaIcon
                icon={faEnvelope}
                gradientId="footer-envelope-icon"
                className="mr-2 h-4 w-4 shrink-0"
              />
              <p className="text-sm">
                <a
                  href="mailto:connect@gryphonacademy.co.in"
                  className="transition duration-300 hover:text-transparent hover:bg-clip-text hover:bg-[linear-gradient(to_right,#68a1fc,#ff4d68)]"
                >
                  connect@gryphonacademy.co.in
                </a>
              </p>
            </li>
          </ul>
        </div>

        <div className="flex flex-col">
          <h2
            className="mb-4 text-center text-3xl font-bold md:text-left"
            style={{
              background: "linear-gradient(to right, #ffffff, #ffffff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Follow Us
          </h2>
          <div className="mb-4 flex justify-center space-x-4 md:justify-start">
            <a
              href="https://www.facebook.com/gryphonnacademy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={socialFb}
                alt="Facebook"
                className="h-8 w-8 transition duration-300 hover:opacity-80"
              />
            </a>
            <a
              href="https://www.instagram.com/gryphon_academy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={socialIg}
                alt="Instagram"
                className="h-8 w-8 transition duration-300 hover:opacity-80"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/gryphonacademy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={socialIn}
                alt="LinkedIn"
                className="h-8 w-8 transition duration-300 hover:opacity-80"
              />
            </a>
            <a
              href="https://www.youtube.com/channel/UCVn2uVWEHg8cMFd8ht3CQBw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={youtubeIcon}
                alt="YouTube"
                className="h-8 w-8 transition duration-300 hover:opacity-80"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-400">
        <p>
          Copyright &copy; {new Date().getFullYear()} Gryphon Academy Pvt. Ltd.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
