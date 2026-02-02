import { motion } from 'framer-motion';

export default function SectionHeader({
  label,
  title,
  description,
  light = false,
  align = 'center',
  className = '',
}) {
  const alignClasses = {
    center: 'text-center mx-auto',
    left: 'text-left',
  };

  return (
    <motion.div
      className={`max-w-2xl mb-8 sm:mb-12 lg:mb-16 ${alignClasses[align]} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
    >
      {label && (
        <span className={`
          inline-block text-xs font-bold tracking-[0.15em] uppercase mb-3 sm:mb-4
          ${light ? 'text-gold-300' : 'text-gold-600'}
        `}>
          {label}
        </span>
      )}
      <h2 className={`
        text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] leading-tight mb-3 sm:mb-4
        ${light ? 'text-white' : 'text-stone-900'}
      `}>
        {title}
      </h2>
      {description && (
        <p className={`
          text-base sm:text-lg leading-relaxed
          ${light ? 'text-white/80' : 'text-stone-600'}
        `}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
