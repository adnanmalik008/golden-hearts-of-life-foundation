import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export default function Founder() {
  return (
    <section className="bg-stone-100 py-16 sm:py-20 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="inline-block text-xs font-bold text-gold-600 uppercase tracking-[0.15em] mb-4">
            Founder & Executive Director
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display text-stone-900 mb-2">
            Bashirah Dorn
          </h2>

          <p className="text-gold-600 font-semibold mb-8 sm:mb-10">
            Leading with compassion and accountability
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-soft border border-stone-200"
        >
          <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-gold-400 mb-4 sm:mb-6" strokeWidth={1.5} />

          <div className="space-y-4 sm:space-y-5 text-sm sm:text-base lg:text-lg text-stone-600 leading-relaxed">
            <p>
              I founded Golden Hearts of Life Foundation with a vision to create a safety net for Los Angeles County's most vulnerable populations. With a deep commitment to addressing social determinants of health, I've built Golden Hearts on principles of compassion, accountability, and evidence-informed practice.
            </p>
            <p>
              Under my leadership, Golden Hearts has established a comprehensive service model aligned with California's Mental Health Services Act (MHSA), federal emergency relief priorities, and county aging and disability initiatives.
            </p>
          </div>

          <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-stone-200">
            <p className="font-display font-semibold text-stone-900">Bashirah Dorn</p>
            <p className="text-sm text-stone-500">Founder & Executive Director</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
