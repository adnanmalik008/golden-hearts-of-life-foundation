import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

export default function NewsletterForm({ variant = 'default' }) {
  const [status, setStatus] = useState('idle');
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const isDark = variant === 'dark';

  const onSubmit = async (data) => {
    setStatus('submitting');
    try {
      const res = await fetch('https://formsubmit.co/ajax/info@goldenheartsoflifefoundation.org', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          email: data.email,
          _subject: 'New Newsletter Subscription — Golden Hearts',
          _template: 'box',
        }),
      });
      if (!res.ok) throw new Error('Submission failed');
      setStatus('success');
      reset();
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center justify-center gap-2 py-3"
          >
            <CheckCircle className={`w-5 h-5 ${isDark ? 'text-sage-400' : 'text-sage-500'}`} />
            <span className={`text-sm font-medium ${isDark ? 'text-stone-200' : 'text-stone-700'}`}>
              You're subscribed! Check your inbox.
            </span>
          </motion.div>
        ) : status === 'error' ? (
          <motion.div
            key="error"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center justify-center gap-2 py-3"
          >
            <AlertCircle className="w-5 h-5 text-red-500" />
            <span className={`text-sm font-medium ${isDark ? 'text-stone-200' : 'text-stone-700'}`}>
              Something went wrong. Please try again.
            </span>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col sm:flex-row gap-3"
          >
            <div className="flex-1">
              <input
                type="email"
                placeholder="Enter your email address"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                  },
                })}
                className={`
                  w-full px-4 py-3 rounded-full text-sm transition-all
                  focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2
                  ${isDark
                    ? 'bg-stone-800 text-stone-100 placeholder:text-stone-500 border border-stone-700 focus:ring-offset-stone-900'
                    : 'bg-white text-stone-800 placeholder:text-stone-400 border border-stone-200 focus:ring-offset-gold-50'
                  }
                `}
              />
              {errors.email && (
                <p className={`text-xs mt-1 ml-4 ${isDark ? 'text-red-400' : 'text-red-500'}`}>
                  {errors.email.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="inline-flex items-center justify-center gap-2 font-semibold rounded-full px-6 py-3 text-sm bg-gold-500 text-white hover:bg-gold-600 transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-70 disabled:hover:translate-y-0 flex-shrink-0"
            >
              {status === 'submitting' ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Send className="w-4 h-4" />
              )}
              Subscribe
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
