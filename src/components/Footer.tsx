import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Linkedin, Instagram, Facebook, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-primary-dark text-white pt-20 pb-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yIDEtMy42NjcgMy01IDEuMzMzLTIuMzMzIDEtNC42NjctMS02LTItMS4zMzMtMy42NjctMS0yIDEgMS42NjcgMiAyLjMzMyA0LjMzMyAyIDcgMCAyLjY2Ny0uNjY3IDQtMiA0LTEuMzMzIDAtMi0xLTItMyAwLTIgMS00IDMtNiAyLTIgMS00LjY2Ny0zLTgtNC0zLjMzMy02LjY2Ny01LTgtNS0xLjMzMyAwLTIuMzMzLjY2Ny0zIDIiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-5"></div>

      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-2 mb-6 group">
              <div className="relative h-10 w-10">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-lg animate-pulse"></div>
                <div className="absolute inset-0.5 bg-dark rounded-lg flex items-center justify-center">
                  <Globe className="h-6 w-6 text-white group-hover:text-accent transition-colors" />
                </div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Nextorra
              </span>
            </Link>
            
            <p className="text-gray-300 mb-8 max-w-md">
              Empowering businesses with innovative digital solutions that drive growth and deliver measurable results in an ever-evolving digital landscape.
            </p>

            <div className="space-y-4 mb-8">
              <a href="mailto:contact@nextorra.com" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group">
                <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                <span>contact@nextorra.com</span>
              </a>
              
              <a href="tel:+919876543210" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group">
                <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                  <Phone className="h-5 w-5" />
                </div>
                <span>+91 8434237052</span>
              </a>
              
              <div className="flex items-center gap-3 text-gray-300 group">
                <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                  <MapPin className="h-5 w-5" />
                </div>
                <span>Jharkhand, India</span>
              </div>
            </div>

            <div className="flex gap-4">
              {[
                { icon: <Linkedin className="h-5 w-5" />, url: "https://linkedin.com" },
                { icon: <Instagram className="h-5 w-5" />, url: "https://instagram.com" },
                { icon: <Facebook className="h-5 w-5" />, url: "https://facebook.com" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/#about" },
                { name: "Services", path: "/#services" },
                { name: "Pricing", path: "/#pricing" },
                { name: "Portfolio", path: "/#portfolio" },
                { name: "Contact", path: "/#contact" }
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group"
                  >
                    <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Services
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Social Media Marketing", path: "/services/social-media-marketing" },
                { name: "Lead Generation", path: "/services/lead-generation" },
                { name: "Website Design", path: "/services/website-design" },
                { name: "App Development", path: "/services/app-development" },
                { name: "Email Marketing", path: "/services/email-marketing" },
                { name: "Graphic Design", path: "/services/graphic-design" }
              ].map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.path}
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group"
                  >
                    <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Newsletter
            </h3>
            <p className="text-gray-300 mb-6">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <form className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent transition-colors"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-accent rounded-md text-white hover:bg-accent/80 transition-colors"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Nextorra. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;