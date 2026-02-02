import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu } from 'lucide-react';
import { navLinks } from '../../data/navigation';
import Button from '../ui/Button';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
            {/* Logo - switches based on scroll state */}
            <a href="#home" className="group">
              <img
                src={isScrolled ? "/logo_lightbg.svg" : "/logo_darkbg.svg"}
                alt="Golden Hearts of Life Foundation"
                className="h-12 md:h-14 w-auto group-hover:scale-105 transition-transform"
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`
                    font-medium transition-colors relative group
                    ${isScrolled
                      ? 'text-stone-600 hover:text-gold-600'
                      : 'text-white/90 hover:text-gold-400'
                    }
                  `}
                >
                  {link.label}
                  <span className={`
                    absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300
                    ${isScrolled ? 'bg-gold-500' : 'bg-gold-400'}
                  `} />
                </a>
              ))}
              <Button href="#contact" size="sm">
                Request Services
              </Button>
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
