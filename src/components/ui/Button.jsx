import { motion } from 'framer-motion';

const variants = {
  primary: 'bg-gold-500 text-white hover:bg-gold-600 shadow-gold',
  secondary: 'bg-white text-stone-800 border-2 border-stone-200 hover:border-gold-500 hover:text-gold-600',
  white: 'bg-white text-gold-600 hover:bg-stone-50 shadow-soft',
  ghost: 'text-stone-700 hover:text-gold-600 hover:bg-gold-50',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  icon: Icon,
  iconPosition = 'right',
  ...props
}) {
  const baseClasses = `
    inline-flex items-center justify-center gap-2
    font-semibold rounded-full
    transition-all duration-300 ease-smooth
    focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2
    ${variants[variant]}
    ${sizes[size]}
    ${className}
  `;

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-5 h-5" />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className="w-5 h-5" />}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={baseClasses}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={baseClasses}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {content}
    </motion.button>
  );
}
