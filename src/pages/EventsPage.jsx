import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Clock, Heart, CheckCircle, X, ZoomIn } from 'lucide-react';
import { events, formatEventDate } from '../data/events';

export default function EventsPage() {
  const event = events[0];
  const [lang, setLang] = useState('en');
  const [previewOpen, setPreviewOpen] = useState(false);

  const currentFlyer = lang === 'en' ? event.flyerEn : event.flyerEs;
  const currentAlt =
    lang === 'en'
      ? 'Take Action for Mental Health & Wellness Day - English Flyer'
      : 'Actúa por la Salud Mental y Bienestar - Folleto en Español';

  const openPreview = useCallback(() => setPreviewOpen(true), []);
  const closePreview = useCallback(() => setPreviewOpen(false), []);

  return (
    <>
      {/* Page Hero */}
      <section className="relative bg-stone-900 pt-32 pb-16 sm:pt-36 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-sage-500/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs font-bold tracking-[0.15em] uppercase mb-3 text-gold-400">
              Upcoming Event
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl leading-tight font-display text-stone-50 mb-4">
              Community <span className="text-gold-400">Events</span>
            </h1>
            <p className="text-base sm:text-lg text-stone-300 max-w-2xl leading-relaxed">
              Join us at our upcoming community events and be a part of the change. Together we can make a difference.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Event */}
      <section className="py-16 sm:py-20 lg:py-28 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Event Title & Details */}
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-sage-100 text-sage-700 mb-6">
              <Heart className="w-4 h-4" />
              Featured Event
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-stone-900 mb-4">
              {event.title}
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mb-8">
              {event.description}
            </p>

            {/* Event Meta */}
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm sm:text-base text-stone-600">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-gold-500" />
                <span className="font-medium">{formatEventDate(event.date)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-gold-500" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-gold-500" />
                <span>{event.location}</span>
              </div>
            </div>
            <p className="text-stone-500 text-sm mt-2">{event.address}</p>
          </motion.div>

          {/* Flyer with Language Toggle */}
          <div className="max-w-lg mx-auto">
            {/* Language Toggle */}
            <motion.div
              className="flex justify-center mb-6"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex rounded-full bg-white border border-stone-200 p-1 shadow-sm">
                <button
                  onClick={() => setLang('en')}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                    lang === 'en'
                      ? 'bg-gold-500 text-white shadow-gold'
                      : 'text-stone-600 hover:text-gold-700'
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => setLang('es')}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                    lang === 'es'
                      ? 'bg-gold-500 text-white shadow-gold'
                      : 'text-stone-600 hover:text-gold-700'
                  }`}
                >
                  Español
                </button>
              </div>
            </motion.div>

            {/* Flyer Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div
                className="relative group cursor-pointer"
                onClick={openPreview}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && openPreview()}
              >
                <div className="absolute -inset-1 bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-300 blur-sm" />
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg border border-stone-200">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={lang}
                      src={currentFlyer}
                      alt={currentAlt}
                      className="w-full h-auto"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </AnimatePresence>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-3 shadow-lg">
                      <ZoomIn className="w-6 h-6 text-stone-700" />
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-center text-stone-400 text-sm mt-3">Click flyer to view full size</p>
            </motion.div>
          </div>

          {/* Event Highlights */}
          <motion.div
            className="mt-14 sm:mt-16 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl sm:text-2xl font-display font-semibold text-stone-900 text-center mb-8">
              What to Expect
            </h3>
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              {event.highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 bg-white rounded-xl px-5 py-4 border border-stone-200"
                >
                  <CheckCircle className="w-5 h-5 text-sage-500 flex-shrink-0" />
                  <span className="text-stone-700 font-medium text-sm sm:text-base">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold-50 border border-gold-200 text-gold-700 font-semibold text-sm sm:text-base">
                <Heart className="w-5 h-5 text-gold-500" />
                100% Free &amp; Open to the Community
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Fullscreen Preview Modal */}
      <AnimatePresence>
        {previewOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closePreview}
          >
            {/* Close button */}
            <button
              onClick={closePreview}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 bg-white/10 hover:bg-white/20 text-white rounded-full p-2.5 transition-colors duration-200"
              aria-label="Close preview"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Language toggle in modal */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
              <div className="inline-flex rounded-full bg-white/10 backdrop-blur-md border border-white/20 p-1">
                <button
                  onClick={(e) => { e.stopPropagation(); setLang('en'); }}
                  className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                    lang === 'en'
                      ? 'bg-gold-500 text-white'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  English
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); setLang('es'); }}
                  className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                    lang === 'es'
                      ? 'bg-gold-500 text-white'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  Español
                </button>
              </div>
            </div>

            {/* Preview image */}
            <motion.div
              className="max-w-3xl w-full max-h-[85vh] flex items-center justify-center"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={lang}
                  src={currentFlyer}
                  alt={currentAlt}
                  className="max-w-full max-h-[85vh] w-auto h-auto rounded-lg shadow-2xl object-contain"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                />
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
