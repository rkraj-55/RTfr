import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const services = [
  { name: 'Social Media Marketing', path: '/services/social-media-marketing' },
  { name: 'Lead Generation', path: '/services/lead-generation' },
  { name: 'SMS Marketing & SMPP', path: '/services/sms-marketing' },
  { name: 'Website Design', path: '/services/website-design' },
  { name: 'Full Stack Web App', path: '/services/full-stack-web-app' },
  { name: 'Email Marketing', path: '/services/email-marketing' },
  { name: 'Missed Call Service & IVR', path: '/services/missed-call-service' },
  { name: 'Graphic Design', path: '/services/graphic-design' },
  { name: 'Voice Call Services', path: '/services/voice-call-services' },
  { name: 'App Development', path: '/services/app-development' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // Refs for detecting outside clicks on services dropdown
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const servicesButtonRef = useRef<HTMLButtonElement>(null);

  // Toggle main menu (mobile)
  const toggleMenu = () => setIsOpen(prev => !prev);

  // Toggle services submenu
  const toggleServices = () => setServicesOpen(prev => !prev);

  // Scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close services dropdown on outside click (desktop)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        servicesOpen &&
        !servicesDropdownRef.current?.contains(target) &&
        !servicesButtonRef.current?.contains(target)
      ) {
        setServicesOpen(false);
      }
    };

    if (servicesOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [servicesOpen]);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }, [isOpen]);

  // Helper: smooth scroll for sections (works with React Router)
  const smoothScrollTo = (id: string) => {
    // If already on homepage, just scroll
    if (location.pathname === '/') {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Navigate to home then scroll after short delay
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  // Scroll smoothly to Contact section and close menu
  const scrollToContact = () => {
    smoothScrollTo('contact');
    setIsOpen(false);
    setServicesOpen(false);
  };

  // Scroll to About
  const scrollToAbout = () => {
    smoothScrollTo('about');
    setIsOpen(false);
    setServicesOpen(false);
  };

  // Scroll to Pricing
  const scrollToPricing = () => {
    smoothScrollTo('pricing');
    setIsOpen(false);
    setServicesOpen(false);
  };

  // Scroll to Portfolio
  const scrollToPortfolio = () => {
    smoothScrollTo('portfolio');
    setIsOpen(false);
    setServicesOpen(false);
  };

  // Scroll to Clients
  const scrollToClients = () => {
    smoothScrollTo('clients');
    setIsOpen(false);
    setServicesOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? 'glass-effect shadow-glass py-2' : 'bg-transparent py-4'
      }`}
      role="navigation"
      aria-label="Primary Navigation"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center" aria-label="Homepage" onClick={() => setIsOpen(false)}>
            <div className="h-10 w-10 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-lg animate-pulse"></div>
              <div className="absolute inset-0.5 bg-white rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold gradient-text">N</span>
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={scrollToAbout} className="nav-link" tabIndex={0} type="button">
              About
            </button>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                ref={servicesButtonRef}
                className="nav-link flex items-center gap-1 services-button"
                onClick={toggleServices}
                aria-haspopup="true"
                aria-expanded={servicesOpen}
                type="button"
                aria-controls="services-menu"
              >
                Services
                <ChevronDown
                  className={`h-4 w-4 transform transition-transform ${
                    servicesOpen ? 'rotate-180' : 'group-hover:rotate-180'
                  }`}
                />
              </button>

              <div
                ref={servicesDropdownRef}
                id="services-menu"
                className={`absolute top-full left-0 mt-2 w-64 glass-effect rounded-lg shadow-glass overflow-hidden border border-white/20 services-dropdown transition-all duration-300 ${
                  servicesOpen
                    ? 'opacity-100 visible max-h-screen'
                    : 'opacity-0 invisible max-h-0'
                }`}
                role="menu"
                aria-label="Services submenu"
              >
                {services.map((service, index) => (
                  <Link
                    key={index}
                    to={service.path}
                    className="block px-4 py-2 text-white hover:bg-white/10 transition-colors"
                    onClick={() => setServicesOpen(false)}
                    role="menuitem"
                    tabIndex={servicesOpen ? 0 : -1}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            <button onClick={scrollToPricing} className="nav-link" tabIndex={0} type="button">
              Pricing
            </button>
            <button onClick={scrollToPortfolio} className="nav-link" tabIndex={0} type="button">
              Portfolio
            </button>
            <button onClick={scrollToClients} className="nav-link" tabIndex={0} type="button">
              Clients
            </button>

            {/* Contact link replaced with button for smooth scroll */}
            <button
              onClick={scrollToContact}
              className="nav-link bg-transparent border-none cursor-pointer"
              type="button"
              tabIndex={0}
            >
              Contact
            </button>
          </div>

          {/* Desktop Book Free Strategy Call button */}
          <button
            onClick={scrollToContact}
            className="hidden md:flex items-center px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-300 border border-white/20 shadow-glass"
            type="button"
            tabIndex={0}
          >
            Book Free Strategy Call
          </button>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white hover:text-accent transition-colors"
            onClick={toggleMenu}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          isOpen ? 'max-h-screen glass-effect border-t border-white/20' : 'max-h-0'
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
          <button
            onClick={() => {
              scrollToAbout();
              setIsOpen(false);
            }}
            className="text-white hover:text-accent py-2 border-b border-white/10 text-left"
            tabIndex={isOpen ? 0 : -1}
            type="button"
          >
            About
          </button>

          {/* Mobile Services Menu */}
          <div>
            <button
              className="text-white hover:text-accent py-2 border-b border-white/10 w-full text-left flex items-center justify-between"
              onClick={toggleServices}
              aria-haspopup="true"
              aria-expanded={servicesOpen}
              type="button"
              aria-controls="mobile-services-menu"
              tabIndex={isOpen ? 0 : -1}
            >
              Services
              <ChevronDown
                className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
              />
            </button>

            <div
              id="mobile-services-menu"
              className={`transition-all duration-300 overflow-hidden ${
                servicesOpen ? 'max-h-screen' : 'max-h-0'
              }`}
              role="menu"
              aria-label="Mobile Services submenu"
            >
              {services.map((service, index) => (
                <Link
                  key={index}
                  to={service.path}
                  className="block py-2 pl-4 text-white/80 hover:text-accent transition-colors"
                  onClick={() => {
                    setIsOpen(false);
                    setServicesOpen(false);
                  }}
                  role="menuitem"
                  tabIndex={servicesOpen && isOpen ? 0 : -1}
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          <button
            onClick={() => {
              scrollToPricing();
              setIsOpen(false);
            }}
            className="text-white hover:text-accent py-2 border-b border-white/10 text-left"
            tabIndex={isOpen ? 0 : -1}
            type="button"
          >
            Pricing
          </button>
          <button
            onClick={() => {
              scrollToPortfolio();
              setIsOpen(false);
            }}
            className="text-white hover:text-accent py-2 border-b border-white/10 text-left"
            tabIndex={isOpen ? 0 : -1}
            type="button"
          >
            Portfolio
          </button>
          <button
            onClick={() => {
              scrollToClients();
              setIsOpen(false);
            }}
            className="text-white hover:text-accent py-2 border-b border-white/10 text-left"
            tabIndex={isOpen ? 0 : -1}
            type="button"
          >
            Clients
          </button>

          {/* Contact replaced with button */}
          <button
            onClick={() => {
              scrollToContact();
              setIsOpen(false);
            }}
            className="text-white hover:text-accent py-2 border-b border-white/10 w-full text-left"
            type="button"
            tabIndex={isOpen ? 0 : -1}
          >
            Contact
          </button>

          {/* Mobile Book Free Strategy Call button */}
          <button
            onClick={() => {
              scrollToContact();
              setIsOpen(false);
            }}
            className="bg-white/10 hover:bg-white/20 text-white text-center py-3 rounded-full transition-all duration-300 border border-white/20"
            type="button"
            tabIndex={isOpen ? 0 : -1}
          >
            Book Free Strategy Call
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
