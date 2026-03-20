export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#01224F] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Gryphon Academy</h3>
            <p className="mb-4">
              Empowering careers and transforming organizations through professional training and recruitment solutions.
            </p>
            <div className="flex gap-4">
              <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-[#01224F] hover:bg-white rounded-full px-3 py-2 transition">LinkedIn</a>
              <a href="https://twitter.com" aria-label="Twitter" className="hover:text-[#01224F] hover:bg-white rounded-full px-3 py-2 transition">Twitter</a>
              <a href="https://facebook.com" aria-label="Facebook" className="hover:text-[#01224F] hover:bg-white rounded-full px-3 py-2 transition">Facebook</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="hover:text-yellow-400 transition">Home</a></li>
              <li><a href="#about" className="hover:text-yellow-400 transition">About Us</a></li>
              <li><a href="#services" className="hover:text-yellow-400 transition">Services</a></li>
              <li><a href="#events" className="hover:text-yellow-400 transition">Events</a></li>
              <li><a href="#blogs" className="hover:text-yellow-400 transition">Blogs</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="hover:text-yellow-400 transition">College Programs</a></li>
              <li><a href="#services" className="hover:text-yellow-400 transition">Corporate Training</a></li>
              <li><a href="#services" className="hover:text-yellow-400 transition">Placement Services</a></li>
              <li><a href="#services" className="hover:text-yellow-400 transition">Faculty Development</a></li>
              <li><a href="#services" className="hover:text-yellow-400 transition">Induction Programs</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="mr-3">📍</span>
                <span>123 Business Park, Tech City, India</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">📞</span>
                <span>+91 (XXX) XXX-XXXX</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">✉️</span>
                <span>info@gryphonacademy.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            &copy; {currentYear} Gryphon Academy. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm mt-4 md:mt-0">
            <a href="#privacy" className="hover:text-yellow-400 transition">Privacy Policy</a>
            <a href="#terms" className="hover:text-yellow-400 transition">Terms & Conditions</a>
            <a href="#sitemap" className="hover:text-yellow-400 transition">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
