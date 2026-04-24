import { motion } from 'framer-motion';
import { MapPin, BarChart3, Users, Shield } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import { AnimatedContainer, AnimatedItem } from '../ui/AnimatedSection';

const stats = [
  { title: 'SPA 5', subtitle: 'Service Area', icon: MapPin },
  { title: '6 Core Programs', subtitle: 'Comprehensive Services', icon: BarChart3 },
  { title: 'Adults & Seniors', subtitle: 'Population Focus', icon: Users },
  { title: 'Wraparound Model', subtitle: 'Care Approach', icon: Shield },
];

export default function Impact() {
  return (
    <section id="about" className="bg-white py-16 sm:py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Our Commitment"
          title="Driving Measurable Impact"
        />

        <AnimatedContainer className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <AnimatedItem key={stat.title}>
                <motion.div
                  className="bg-stone-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 text-center border border-stone-200 hover:border-gold-400 transition-colors"
                  whileHover={{ y: -4, boxShadow: '0 20px 50px -12px rgba(201, 162, 39, 0.15)' }}
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto mb-3 sm:mb-4 lg:mb-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center text-white shadow-gold">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
                  </div>
                  <h3 className="text-sm sm:text-base lg:text-xl font-display font-semibold text-stone-900 mb-1 sm:mb-2">
                    {stat.title}
                  </h3>
                  <p className="text-stone-500 text-xs sm:text-sm">
                    {stat.subtitle}
                  </p>
                </motion.div>
              </AnimatedItem>
            );
          })}
        </AnimatedContainer>
      </div>
    </section>
  );
}
