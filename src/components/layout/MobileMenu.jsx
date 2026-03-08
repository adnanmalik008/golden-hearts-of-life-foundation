import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { navLinks, contactInfo } from '../../data/navigation';
import Button from '../ui/Button';

const menuVariants = {
  closed: {
    x: '100%',
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
  open: {
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

const containerVariants = {
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  closed: {
    opacity: 0,
    x: 50,
  },
  open: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

export default function MobileMenu({ onClose }) {
  const location = useLocation();
  const isOnHomepage = location.pathname === '/';

  const handleLinkClick = () => {
    onClose();
  };

  const renderLink = (link, className) => {
    const isHashLink = link.href.includes('#');

    if (isHashLink && isOnHomepage) {
      const hash = link.href.replace('/', '');
      return (
        <a href={hash} onClick={handleLinkClick} className={className}>
          {link.label}
        </a>
      );
    }

    return (
      <Link to={link.href} onClick={handleLinkClick} className={className}>
        {link.label}
      </Link>
    );
  };

  return (
    <>
      {/* Backdrop */}
      <motion.div
        className="fixed inset-0 bg-stone-900/60 backdrop-blur-sm z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      {/* Menu Panel */}
      <motion.div
        className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white z-50 shadow-2xl"
        variants={menuVariants}
        initial="closed"
        animate="open"
        exit="closed"
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 sm:p-6 border-b border-stone-200">
            <img
              src="/logo_lightbg.svg"
              alt="Golden Hearts of Life Foundation"
              className="h-10 w-auto"
            />
            <button
              onClick={onClose}
              className="p-3 -mr-2 min-w-[44px] min-h-[44px] flex items-center justify-center text-stone-500 hover:text-stone-700 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <motion.nav
            className="flex-1 px-4 sm:px-6 py-6 sm:py-8"
            variants={containerVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <ul className="space-y-1 sm:space-y-2">
              {navLinks.map((link) => (
                <motion.li key={link.href} variants={itemVariants}>
                  {renderLink(
                    link,
                    "block py-3 sm:py-4 px-4 text-lg sm:text-xl font-display font-medium text-stone-800 hover:text-gold-600 hover:bg-gold-50 rounded-xl transition-colors min-h-[44px] flex items-center"
                  )}
                </motion.li>
              ))}
            </ul>

            <motion.div variants={itemVariants} className="mt-6 space-y-3">
              {isOnHomepage ? (
                <Button href="#contact" className="w-full" onClick={handleLinkClick}>
                  Request Services
                </Button>
              ) : (
                <Link
                  to="/#contact"
                  onClick={handleLinkClick}
                  className="w-full inline-flex items-center justify-center gap-2 font-semibold rounded-full px-6 py-3 text-base bg-gold-500 text-white hover:bg-gold-600 transition-all duration-300"
                >
                  Request Services
                </Link>
              )}
              <a
                href="https://www.paypal.com/donate?hosted_button_id=NCBRZBZP3EDZE"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 font-semibold rounded-full px-6 py-3 text-base bg-sage-500 text-white hover:bg-sage-600 transition-all duration-300"
              >
                Donate Now
              </a>
            </motion.div>
          </motion.nav>

          {/* Footer */}
          <motion.div
            className="p-4 sm:p-6 border-t border-stone-200 bg-stone-50"
            variants={itemVariants}
          >
            <p className="text-xs sm:text-sm text-stone-500 mb-2">Get in touch</p>
            <a
              href={`tel:${contactInfo.phone}`}
              className="text-base sm:text-lg font-semibold text-gold-600 hover:text-gold-700 min-h-[44px] inline-flex items-center"
            >
              {contactInfo.phone}
            </a>
            <p className="text-xs sm:text-sm text-stone-500 mt-3 sm:mt-4">
              {contactInfo.address}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
