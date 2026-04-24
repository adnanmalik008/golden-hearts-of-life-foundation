import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { footerLinks, contactInfo } from '../../data/navigation';

function FooterLink({ link }) {
  const isExternal = link.external;
  const isRoute = link.href.startsWith('/') && !link.href.includes('#');

  if (isExternal) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-stone-400 text-sm hover:text-gold-400 transition-colors inline-flex items-center gap-1"
      >
        {link.label}
        <ExternalLink className="w-3 h-3" />
      </a>
    );
  }

  if (isRoute) {
    return (
      <Link
        to={link.href}
        className="text-stone-400 text-sm hover:text-gold-400 transition-colors"
      >
        {link.label}
      </Link>
    );
  }

  return (
    <a
      href={link.href}
      className="text-stone-400 text-sm hover:text-gold-400 transition-colors"
    >
      {link.label}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img
                src="/logo_darkbg.svg"
                alt="Golden Hearts of Life Foundation"
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-stone-400 text-sm leading-relaxed mb-6">
              Serving LA County with wraparound support for adults with disabilities and older adults. We believe in dignity, stability, and connection for all.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3 text-stone-400">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-gold-500" />
                <span>{contactInfo.address}</span>
              </div>
              <div className="flex items-center gap-3 text-stone-400">
                <Phone className="w-4 h-4 flex-shrink-0 text-gold-500" />
                <a href={`tel:${contactInfo.phone}`} className="hover:text-gold-400 transition-colors">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-3 text-stone-400">
                <Mail className="w-4 h-4 flex-shrink-0 text-gold-500" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-gold-400 transition-colors break-all">
                  {contactInfo.email}
                </a>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-display font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <FooterLink link={link} />
                </li>
              ))}
            </ul>
          </div>

          {/* Organization Links */}
          <div>
            <h4 className="font-display font-semibold text-white mb-6">Organization</h4>
            <ul className="space-y-3">
              {footerLinks.organization.map((link) => (
                <li key={link.label}>
                  <FooterLink link={link} />
                </li>
              ))}
            </ul>
          </div>

          {/* Crisis Resources */}
          <div>
            <h4 className="font-display font-semibold text-white mb-6">Crisis Resources</h4>
            <ul className="space-y-3">
              {footerLinks.crisis.map((link) => (
                <li key={link.label}>
                  <FooterLink link={link} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-stone-500 text-xs sm:text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} Golden Hearts of Life Foundation. Nonprofit Organization
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="inline-block bg-stone-800 text-stone-400 px-3 py-1.5 rounded-lg text-xs">
                UEI: SU9ZEL1AL3Z6
              </span>
              <span className="inline-block bg-stone-800 text-stone-400 px-3 py-1.5 rounded-lg text-xs">
                SPA 5 | Los Angeles County
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
