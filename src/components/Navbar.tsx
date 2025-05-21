import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
  { name: 'App Development', path: '/services/app-development' }
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleServices = () => {
    setServicesOpen(!servicesOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'glass-effect shadow-glass py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <div className="h-10 w-10 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-lg animate-pulse"></div>
              <div className="absolute inset-0.5 bg-white rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold gradient-text">N</span>
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/#about" className="nav-link">About</Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button 
                className="nav-link flex items-center gap-1 group"
                onClick={toggleServices}
              >
                Services 
                <ChevronDown className="h-4 w-4 transform transition-transform group-hover:rotate-180" />
              </button>
              
              <div className="absolute top-full left-0 mt-2 w-64 glass-effect rounded-lg shadow-glass overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-white/20">
                {services.map((service, index) => (
                  <Link
                    key={index}
                    to={service.path}
                    className="block px-4 py-2 text-white hover:bg-white/10 transition-colors"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
            
            <Link to="/#pricing" className="nav-link">Pricing</Link>
            <Link to="/#portfolio" className="nav-link">Portfolio</Link>
            <Link to="/#clients" className="nav-link">Clients</Link>
            <Link to="/#contact" className="nav-link">Contact</Link>
          </div>

          <Link 
            to="#contact" 
            className="hidden md:flex items-center px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-300 border border-white/20 shadow-glass"
          >
            Book Free Strategy Call
          </Link>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white hover:text-accent transition-colors"
            onClick={toggleMenu}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          isOpen 
            ? 'max-h-screen glass-effect border-t border-white/20' 
            : 'max-h-0'
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
          <Link to="/" className="text-white hover:text-accent py-2 border-b border-white/10" onClick={toggleMenu}>Home</Link>
          <Link to="/#about" className="text-white hover:text-accent py-2 border-b border-white/10" onClick={toggleMenu}>About</Link>
          
          {/* Mobile Services Menu */}
          <div>
            <button 
              className="text-white hover:text-accent py-2 border-b border-white/10 w-full text-left flex items-center justify-between"
              onClick={toggleServices}
            >
              Services 
              <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>
            
            <div className={`transition-all duration-300 overflow-hidden ${servicesOpen ? 'max-h-screen' : 'max-h-0'}`}>
              {services.map((service, index) => (
                <Link
                  key={index}
                  to={service.path}
                  className="block py-2 pl-4 text-white/80 hover:text-accent transition-colors"
                  onClick={toggleMenu}
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>
          
          <Link to="/#pricing" className="text-white hover:text-accent py-2 border-b border-white/10" onClick={toggleMenu}>Pricing</Link>
          <Link to="/#portfolio" className="text-white hover:text-accent py-2 border-b border-white/10" onClick={toggleMenu}>Portfolio</Link>
          <Link to="/#clients" className="text-white hover:text-accent py-2 border-b border-white/10" onClick={toggleMenu}>Clients</Link>
          <Link to="/#contact" className="text-white hover:text-accent py-2 border-b border-white/10" onClick={toggleMenu}>Contact</Link>
          
          <Link 
            to="#contact" 
            className="bg-white/10 hover:bg-white/20 text-white text-center py-3 rounded-full transition-all duration-300 border border-white/20"
            onClick={toggleMenu}
          >
            Book Free Strategy Call
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;