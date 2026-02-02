import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import Button from '../ui/Button';

const services = [
  'Food & Nutrition Support',
  'Housing Stabilization',
  'Medical Expense Navigation',
  'Mental Health & Wellness',
  'Case Management',
  'Senior & Disability Outreach',
  'General Inquiry',
];

export default function ContactForm() {
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setStatus('submitting');

    // Simulate form submission (replace with actual endpoint)
    try {
      // For production, use Formspree or your backend:
      // await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      //   method: 'POST',
      //   body: JSON.stringify(data),
      //   headers: { 'Content-Type': 'application/json' },
      // });

      // Simulate delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setStatus('success');
      reset();

      // Reset status after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const inputClasses = `
    w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-stone-300
    bg-white text-stone-900 placeholder-stone-400 text-sm sm:text-base
    focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent
    transition-all duration-200
  `;

  const labelClasses = 'block text-xs sm:text-sm font-semibold text-stone-700 mb-1.5 sm:mb-2';
  const errorClasses = 'text-red-500 text-xs sm:text-sm mt-1';

  return (
    <motion.div
      className="bg-white rounded-2xl sm:rounded-3xl shadow-card p-5 sm:p-6 lg:p-10"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-xl sm:text-2xl font-display font-semibold text-stone-900 mb-2">
        Contact Us
      </h3>
      <p className="text-sm sm:text-base text-stone-600 mb-6 sm:mb-8">
        Fill out the form and we'll get back to you within 24-48 hours.
      </p>

      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="text-center py-12"
          >
            <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-sage-500 mx-auto mb-3 sm:mb-4" />
            <h4 className="text-lg sm:text-xl font-display font-semibold text-stone-900 mb-2">
              Message Sent!
            </h4>
            <p className="text-sm sm:text-base text-stone-600">
              Thank you for reaching out. We'll be in touch soon.
            </p>
          </motion.div>
        ) : status === 'error' ? (
          <motion.div
            key="error"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="text-center py-12"
          >
            <AlertCircle className="w-12 h-12 sm:w-16 sm:h-16 text-red-500 mx-auto mb-3 sm:mb-4" />
            <h4 className="text-lg sm:text-xl font-display font-semibold text-stone-900 mb-2">
              Something went wrong
            </h4>
            <p className="text-sm sm:text-base text-stone-600">
              Please try again or contact us directly by phone.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 sm:space-y-6"
          >
            {/* Name */}
            <div>
              <label htmlFor="name" className={labelClasses}>
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                placeholder="John Doe"
                className={inputClasses}
                {...register('name', { required: 'Name is required' })}
              />
              {errors.name && <p className={errorClasses}>{errors.name.message}</p>}
            </div>

            {/* Email & Phone Row */}
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label htmlFor="email" className={labelClasses}>
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="john@example.com"
                  className={inputClasses}
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                />
                {errors.email && <p className={errorClasses}>{errors.email.message}</p>}
              </div>

              <div>
                <label htmlFor="phone" className={labelClasses}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="(555) 123-4567"
                  className={inputClasses}
                  {...register('phone')}
                />
              </div>
            </div>

            {/* Service Interest */}
            <div>
              <label htmlFor="service" className={labelClasses}>
                Service Interest
              </label>
              <select
                id="service"
                className={inputClasses}
                {...register('service')}
              >
                <option value="">Select a service...</option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className={labelClasses}>
                Message *
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="How can we help you?"
                className={`${inputClasses} resize-none`}
                {...register('message', { required: 'Message is required' })}
              />
              {errors.message && <p className={errorClasses}>{errors.message.message}</p>}
            </div>

            {/* Submit */}
            <Button
              type="submit"
              className="w-full"
              disabled={status === 'submitting'}
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send className="w-5 h-5" />
                </>
              )}
            </Button>
          </motion.form>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
