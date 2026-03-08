import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { navLinks } from '../../data/navigation';
import Button from '../ui/Button';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const isOnHomepage = location.pathname === '/';

  const renderNavLink = (link, className) => {
    const isHashLink = link.href.includes('#');

    // Hash links on homepage use native anchor for smooth scroll
    if (isHashLink && isOnHomepage) {
      const hash = link.href.replace('/', '');
      return (
        <a href={hash} className={className}>
          {link.label}
          <span className={`
            absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300
            ${isScrolled ? 'bg-gold-500' : 'bg-gold-400'}
          `} />
        </a>
      );
    }

    return (
      <Link to={link.href} className={className}>
        {link.label}
        <span className={`
          absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300
          ${isScrolled ? 'bg-gold-500' : 'bg-gold-400'}
        `} />
      </Link>
    );
  };

  return (
    <>
      <motion.nav
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-300
          ${isScrolled
            ? 'glass border-b border-gold-200/30 py-3'
            : 'bg-transparent py-5'
          }
        `}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="group">
              <img
                src={isScrolled ? "/logo_lightbg.svg" : "/logo_darkbg.svg"}
                alt="Golden Hearts of Life Foundation"
                className="h-12 md:h-14 w-auto group-hover:scale-105 transition-transform"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <span key={link.href}>
                  {renderNavLink(link, `
                    font-medium transition-colors relative group
                    ${isScrolled
                      ? 'text-stone-600 hover:text-gold-600'
                      : 'text-white/90 hover:text-gold-400'
                    }
                  `)}
                </span>
              ))}
              {isOnHomepage ? (
                <Button href="#contact" size="sm">
                  Request Services
                </Button>
              ) : (
                <Link
                  to="/#contact"
                  className="inline-flex items-center justify-center gap-2 font-semibold rounded-full px-4 py-2 text-sm bg-gold-500 text-white hover:bg-gold-600 transition-all duration-300 shadow-gold hover:-translate-y-0.5"
                >
                  Request Services
                </Link>
              )}
              <a
                href="https://www.paypal.com/donate?hosted_button_id=NCBRZBZP3EDZE"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 font-semibold rounded-full px-5 py-2.5 text-sm bg-sage-500 text-white hover:bg-sage-600 transition-all duration-300 hover:-translate-y-0.5"
              >
                Donate Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`
                lg:hidden p-3 -mr-2 min-w-[44px] min-h-[44px] flex items-center justify-center transition-colors
                ${isScrolled
                  ? 'text-stone-700 hover:text-gold-600'
                  : 'text-white hover:text-gold-400'
                }
              `}
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu onClose={() => setIsMobileMenuOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
}
