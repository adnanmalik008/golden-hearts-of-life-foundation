import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import NewsletterForm from '../forms/NewsletterForm';

export default function NewsletterBanner() {
  return (
    <section className="bg-gold-50 py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center mx-auto mb-4">
            <Mail className="w-6 h-6 text-gold-600" />
          </div>
          <h3 className="text-xl sm:text-2xl font-display font-semibold text-stone-900 mb-2">
            Stay Connected
          </h3>
          <p className="text-stone-600 text-sm sm:text-base mb-6 max-w-lg mx-auto">
            Get updates on events, programs, and ways to support our community.
          </p>
          <NewsletterForm variant="default" />
        </motion.div>
      </div>
    </section>
  );
}
