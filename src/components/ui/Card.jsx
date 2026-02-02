import { motion } from 'framer-motion';

export default function Card({ children, className = '', hover = true, ...props }) {
  return (
    <motion.div
      className={`
        bg-white rounded-xl p-6
        border border-stone-200
        ${hover ? 'hover:border-gold-400' : ''}
        transition-colors duration-300
        ${className}
      `}
      whileHover={hover ? {
        y: -6,
        boxShadow: '0 20px 50px -12px rgba(201, 162, 39, 0.2)'
      } : {}}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function IconCard({ icon: Icon, title, description, className = '' }) {
  return (
    <Card className={`flex gap-3 sm:gap-4 items-start p-4 sm:p-6 h-full ${className}`}>
      <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-gold-100 to-gold-50 flex items-center justify-center text-gold-500">
        <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
      </div>
      <div>
        <h3 className="text-base sm:text-lg font-semibold text-stone-900 mb-1">{title}</h3>
        <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">{description}</p>
      </div>
    </Card>
  );
}
