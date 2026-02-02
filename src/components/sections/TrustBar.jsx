import { motion } from 'framer-motion';
import { trustBadges } from '../../data/navigation';

export default function TrustBar() {
  return (
    <section className="bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6 lg:py-8">
        <motion.div
          className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {trustBadges.map((badge, index) => (
            <div key={badge.label} className="flex items-center">
              <div className="text-center px-2 sm:px-0">
                <p className="text-[10px] sm:text-xs font-bold text-stone-400 uppercase tracking-wider mb-0.5 sm:mb-1">
                  {badge.label}
                </p>
                <p className="text-xs sm:text-sm font-semibold text-stone-800">
                  {badge.value}
                </p>
              </div>
              {index < trustBadges.length - 1 && (
                <div className="hidden lg:block w-px h-10 bg-stone-200 ml-16" />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
