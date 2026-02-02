import { motion } from 'framer-motion';

export default function ServiceCard({ service, index }) {
  return (
    <motion.div
      className="group bg-white rounded-2xl overflow-hidden border border-stone-200 hover:border-gold-400 transition-colors duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{
        y: -8,
        boxShadow: '0 25px 50px -12px rgba(28, 25, 23, 0.15)'
      }}
    >
      {/* Service Image */}
      <div className="h-40 sm:h-48 relative overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Subtle overlay on hover */}
        <div className="absolute inset-0 bg-gold-500/0 group-hover:bg-gold-500/10 transition-colors duration-300" />
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-semibold text-stone-900 mb-2 sm:mb-3 group-hover:text-gold-600 transition-colors">
          {service.title}
        </h3>
        <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
          {service.description}
        </p>
        <span className="inline-block bg-gold-100 text-gold-700 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-semibold">
          {service.price}
        </span>
      </div>
    </motion.div>
  );
}
