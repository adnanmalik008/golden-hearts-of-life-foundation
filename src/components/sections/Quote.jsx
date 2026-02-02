import { motion } from 'framer-motion';

export default function Quote() {
  return (
    <section className="relative py-16 sm:py-24 lg:py-40 overflow-hidden">
      {/* Parallax Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('/our_mission_bg.webp')",
        }}
      />

      {/* Dark overlay matching the original stone-900 color */}
      <div className="absolute inset-0 bg-stone-900/85" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gold-500/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <img
            src="/favicon.svg"
            alt=""
            className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-6 sm:mb-8"
          />

          <blockquote className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-display text-white leading-relaxed mb-6 sm:mb-8">
            "Every individual—regardless of age or ability—deserves to live with{' '}
            <span className="text-gold-400">dignity</span>,{' '}
            <span className="text-gold-400">stability</span>, and{' '}
            <span className="text-gold-400">support</span>."
          </blockquote>

          <cite className="text-gold-400 font-semibold text-base sm:text-lg not-italic">
            — Our Mission
          </cite>
        </motion.div>
      </div>
    </section>
  );
}
