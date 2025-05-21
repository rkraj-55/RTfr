import React from "react";
import { Link } from "react-router-dom";
import {
  GlobeAltIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative bg-gradient-to-b from-gray-900 to-primary-dark text-white pt-20 pb-8 overflow-hidden"
      aria-label="Site Footer"
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yIDEtMy42NjcgMy01IDEuMzMzLTIuMzMzIDEtNC42NjctMS02LTItMS4zMzMtMy42NjctMS0yIDEgMS42NjcgMiAyLjMzMyA0LjMzMyAyIDcgMCAyLjY2Ny0uNjY3IDQtMiA0LTEuMzMzIDAtMi0xLTItMyAwLTIgMS00IDMtNiAyLTIgMS00LjY2Ny0zLTgtNC0zLjMzMy02LjY2Ny01LTgtNS0xLjMzMyAwLTIuMzMzLjY2Ny0zIDIiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-5"
        aria-hidden="true"
      ></div>

      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-4">
            <Link
              to="/"
              className="flex items-center gap-2 mb-6 group"
              aria-label="Navigate to homepage"
            >
              <div className="relative h-10 w-10">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-lg animate-pulse"></div>
                <div className="absolute inset-0.5 bg-dark rounded-lg flex items-center justify-center">
                  <GlobeAltIcon className="h-6 w-6 text-white group-hover:text-accent transition-colors" />
                </div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent select-none">
                Nextorra
              </span>
            </Link>

            <p className="text-gray-300 mb-8 max-w-md">
              Empowering businesses with innovative digital solutions that
              drive growth and deliver measurable results in an ever-evolving
              digital landscape.
            </p>

            <div className="space-y-4 mb-8">
              <a
                href="mailto:contact@nextorra.com"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
                aria-label="Send email to contact@nextorra.com"
              >
                <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                  <EnvelopeIcon className="h-5 w-5" />
                </div>
                <span>contact@nextorra.com</span>
              </a>

              <a
                href="tel:+918434237052"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
                aria-label="Call phone number +91 8434237052"
              >
                <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                  <PhoneIcon className="h-5 w-5" />
                </div>
                <span>+91 8434237052</span>
              </a>

              <div
                className="flex items-center gap-3 text-gray-300 group"
                aria-label="Location"
              >
                <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                  <MapPinIcon className="h-5 w-5" />
                </div>
                <span>Jharkhand, India</span>
              </div>
            </div>

            <div
              className="flex gap-4"
              role="list"
              aria-label="Social media links"
            >
              {/* Social media icons placeholders */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="Visit our linkedin page"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  stroke="none"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.28 8h4.4v12h-4.4v-12zm7.5 0h4.2v1.75h.06c.58-1.1 2-2.25 4.12-2.25 4.4 0 5.2 2.9 5.2 6.7V20h-4.4v-5.5c0-1.3 0-3-1.75-3s-2 1.36-2 2.9V20h-4.4v-12z" />
                </svg>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="Visit our instagram page"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  stroke="none"
                >
                  <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a1 1 0 110 2 1 1 0 010-2zm-5 3a5 5 0 110 10 5 5 0 010-10zM7 7a5 5 0 015-5 5 5 0 00-5 5z" />
                </svg>
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="Visit our facebook page"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  stroke="none"
                >
                  <path d="M9 8H6v4h3v12h5v-12h3.642L18 8h-4V6c0-1 .58-3 3-3h2v-4h-3a8 8 0 00-8 8v2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <nav className="lg:col-span-2" aria-label="Quick navigation links">
            <h3 className="text-lg font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent select-none">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/#about" },
                { name: "Services", path: "/#services" },
                { name: "Pricing", path: "/#pricing" },
                { name: "Portfolio", path: "/#portfolio" },
                { name: "Contact", path: "/#contact" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group"
                  >
                    <ArrowRightIcon className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav className="lg:col-span-3" aria-label="Services navigation links">
            <h3 className="text-lg font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent select-none">
              Services
            </h3>
            <ul className="space-y-3">
              {[
                {
                  name: "Social Media Marketing",
                  path: "/services/social-media-marketing",
                },
                { name: "Lead Generation", path: "/services/lead-generation" },
                { name: "Website Design", path: "/services/website-design" },
                { name: "App Development", path: "/services/app-development" },
                { name: "Email Marketing", path: "/services/email-marketing" },
                { name: "Graphic Design", path: "/services/graphic-design" },
              ].map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.path}
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group"
                  >
                    <ArrowRightIcon className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Newsletter */}
          <section
            className="lg:col-span-3"
            aria-labelledby="newsletter-heading"
          >
            <h3
              id="newsletter-heading"
              className="text-lg font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent select-none"
            >
              Newsletter
            </h3>
            <p className="text-gray-300 mb-6">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
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
                <button
                  type="submit"
                  className="absolute top-1/2 right-1 -translate-y-1/2 bg-accent hover:bg-accent-dark text-white px-4 py-2 rounded-md transition-colors"
                >
                  Subscribe
                </button>
              </div>
              <p
                id="newsletter-help"
                className="text-xs text-gray-400"
              >
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          </section>
        </div>

        {/* Copyright */}
        <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-gray-400">
          &copy; {currentYear} Nextorra. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
