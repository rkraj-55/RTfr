import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  GlobeAltIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import logo from "./assets/logo.svg";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  const smoothScrollTo = (id: string) => {
    if (location.pathname === '/') {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-primary-dark text-white pt-20 pb-8 overflow-hidden" aria-label="Site Footer">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,...')] opacity-5" aria-hidden="true"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-4">
            <button onClick={() => smoothScrollTo('hero')} className="flex items-center gap-4 mb-6 group">
              <div className="relative h-[100px] w-[100px] rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-lg animate-pulse" />
                <div className="absolute inset-1 bg-white rounded-lg flex items-center justify-center overflow-hidden">
                  <img
                    src={logo}
                    alt="Nextorra Logo"
                    className="h-[92px] w-[92px] object-contain select-none"
                    draggable={false}
                    loading="lazy"
                  />
                </div>
              </div>
              <span className="text-4xl font-bold bg-gradient-to-r from-white via-indigo-500 to-cyan-400 bg-clip-text text-transparent select-none">
                Nextorra
              </span>
            </button>

            <p className="text-gray-300 mb-8 max-w-md">
              Empowering businesses with innovative digital solutions that drive growth and deliver measurable results in an ever-evolving digital landscape.
            </p>

            <div className="space-y-4 mb-8">
              <a href="mailto:contact@nextorra.com" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group">
                <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10">
                  <EnvelopeIcon className="h-5 w-5" />
                </div>
                <span>contact@nextorra.com</span>
              </a>

              <a href="tel:+918434237052" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group">
                <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10">
                  <PhoneIcon className="h-5 w-5" />
                </div>
                <span>+91 8434237052</span>
              </a>

              <div className="flex items-center gap-3 text-gray-300 group">
                <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10">
                  <MapPinIcon className="h-5 w-5" />
                </div>
                <span>Jharkhand, India</span>
              </div>
            </div>

            <div className="flex gap-4">
              {[
                {
                  href: "https://linkedin.com",
                  label: "linkedin",
                  iconPath: "M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.28 8h4.4v12h-4.4v-12zm7.5 0h4.2v1.75h.06c.58-1.1 2-2.25 4.12-2.25 4.4 0 5.2 2.9 5.2 6.7V20h-4.4v-5.5c0-1.3 0-3-1.75-3s-2 1.36-2 2.9V20h-4.4v-12z",
                },
                {
                  href: "https://instagram.com",
                  label: "instagram",
                  iconPath: "M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a1 1 0 110 2 1 1 0 010-2zm-5 3a5 5 0 110 10 5 5 0 010-10zM7 7a5 5 0 015-5 5 5 0 00-5 5z",
                },
                {
                  href: "https://facebook.com",
                  label: "facebook",
                  iconPath: "M9 8H6v4h3v12h5v-12h3.642L18 8h-4V6c0-1 .58-3 3-3h2v-4h-3a8 8 0 00-8 8v2z",
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label={`Visit our ${item.label} page`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" stroke="none">
                    <path d={item.iconPath} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <nav className="lg:col-span-2" aria-label="Quick Links">
            <h3 className="text-lg font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent select-none">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", id: "hero" },
                { name: "About", id: "about" },
                { name: "Pricing", id: "pricing" },
                { name: "Portfolio", id: "portfolio" },
                { name: "Contact", id: "contact" },
                { name: "Terms & Conditions", path: "/terms-and-conditions" },
              ].map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => link.path ? navigate(link.path) : smoothScrollTo(link.id)}
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group w-full text-left"
                  >
                    <ArrowRightIcon className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav className="lg:col-span-3" aria-label="Services">
            <h3 className="text-lg font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent select-none">Services</h3>
            <ul className="space-y-3">
              {[
                { name: "Social Media Marketing", path: "/services/social-media-marketing" },
                { name: "Lead Generation", path: "/services/lead-generation" },
                { name: "Website Design", path: "/services/website-design" },
                { name: "App Development", path: "/services/app-development" },
                { name: "Email Marketing", path: "/services/email-marketing" },
                { name: "Graphic Design", path: "/services/graphic-design" },
              ].map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => navigate(service.path)}
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group w-full text-left"
                  >
                    <ArrowRightIcon className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Newsletter */}
          <section className="lg:col-span-3" aria-labelledby="newsletter-heading">
            <h3 id="newsletter-heading" className="text-lg font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent select-none">Newsletter</h3>
            <p className="text-gray-300 mb-6">Subscribe to our newsletter for the latest updates and insights.</p>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <div className="relative">
                <input
                  type="email"
                  id="newsletter-email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
                  aria-describedby="newsletter-help"
                />
                <button type="submit" className="absolute top-1/2 right-1 -translate-y-1/2 bg-accent hover:bg-accent-dark text-white px-4 py-2 rounded-md transition-colors">
                  Subscribe
                </button>
              </div>
              <p id="newsletter-help" className="text-xs text-gray-400">We respect your privacy. Unsubscribe at any time.</p>
            </form>
          </section>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-gray-400">
          &copy; {currentYear} Nextorra. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;