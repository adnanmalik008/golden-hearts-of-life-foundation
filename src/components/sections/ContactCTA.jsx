import { motion } from 'framer-motion';
import { Phone, Mail, Briefcase, ArrowRight, MapPin } from 'lucide-react';
import { AnimatedContainer, AnimatedItem } from '../ui/AnimatedSection';
import { contactInfo } from '../../data/navigation';

const ctaCards = [
  {
    icon: Phone,
    title: 'Request Services',
    description: 'Connect with our team to access support for yourself or a loved one.',
    action: `tel:${contactInfo.phone}`,
    buttonText: 'Call Us',
  },
  {
    icon: Mail,
    title: 'Make a Referral',
    description: 'Healthcare providers and community partners can refer clients directly.',
    action: `mailto:${contactInfo.email}`,
    buttonText: 'Send Referral',
  },
  {
    icon: Briefcase,
    title: 'Partner With Us',
    description: 'Explore funding, contracting, and collaboration opportunities.',
    action: `mailto:${contactInfo.email}`,
    buttonText: 'Learn More',
  },
];

export default function ContactCTA() {
  return (
    <section id="contact" className="relative bg-stone-50 py-16 sm:py-20 lg:py-28 overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-gold-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 sm:w-80 h-48 sm:h-80 bg-sage-500/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-10 sm:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs font-bold tracking-[0.15em] uppercase mb-3 sm:mb-4 text-gold-600">
            Get In Touch
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] leading-tight text-stone-900 mb-3 sm:mb-4">
            How Can We Help?
          </h2>
          <p className="text-base sm:text-lg text-stone-600 max-w-2xl mx-auto">
            Whether you're seeking services, referring a client, or exploring partnerships—we're here to support you.
          </p>
        </motion.div>

        <AnimatedContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 mb-12 sm:mb-16">
          {ctaCards.map((card) => {
            const Icon = card.icon;
            return (
              <AnimatedItem key={card.title}>
                <motion.div
                  className="group bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 border border-stone-200 hover:border-gold-400 hover:shadow-lg transition-all h-full flex flex-col"
                  whileHover={{ y: -4 }}
                >
                  {/* Icon */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-4 sm:mb-5 bg-gradient-to-br from-gold-100 to-gold-50 text-gold-600">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>

                  <h3 className="text-lg sm:text-xl font-display font-semibold text-stone-900 mb-2 sm:mb-3">
                    {card.title}
                  </h3>
                  <p className="text-stone-600 text-sm sm:text-base mb-5 sm:mb-6 flex-grow">
                    {card.description}
                  </p>

                  <a
                    href={card.action}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-gold-600 hover:text-gold-700 transition-colors group/link"
                  >
                    {card.buttonText}
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </motion.div>
              </AnimatedItem>
            );
          })}
        </AnimatedContainer>

        {/* Contact info bar */}
        <motion.div
          className="bg-stone-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Phone */}
            <a
              href={`tel:${contactInfo.phone}`}
              className="flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gold-500/20 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-gold-400" />
              </div>
              <div>
                <p className="text-stone-400 text-xs sm:text-sm mb-1">Call Us</p>
                <p className="text-white font-semibold group-hover:text-gold-400 transition-colors">
                  {contactInfo.phone}
                </p>
              </div>
            </a>

            {/* Email */}
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gold-500/20 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-gold-400" />
              </div>
              <div>
                <p className="text-stone-400 text-xs sm:text-sm mb-1">Email Us</p>
                <p className="text-white font-semibold group-hover:text-gold-400 transition-colors text-sm sm:text-base break-all">
                  {contactInfo.email}
                </p>
              </div>
            </a>

            {/* Address */}
            <div className="flex items-center gap-4 sm:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 rounded-xl bg-gold-500/20 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-gold-400" />
              </div>
              <div>
                <p className="text-stone-400 text-xs sm:text-sm mb-1">Location</p>
                <p className="text-white font-semibold text-sm sm:text-base">
                  {contactInfo.address}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
