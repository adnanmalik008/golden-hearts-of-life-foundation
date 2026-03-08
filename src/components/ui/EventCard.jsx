import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { formatEventDate, isUpcoming } from '../../data/events';

export default function EventCard({ event }) {
  const upcoming = isUpcoming(event.date);

  return (
    <motion.div
      className="bg-white rounded-2xl p-5 sm:p-6 border border-stone-200 hover:border-gold-400 transition-colors duration-300 h-full flex flex-col"
      whileHover={{
        y: -6,
        boxShadow: '0 20px 50px -12px rgba(201, 162, 39, 0.15)',
      }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* Badges */}
      <div className="flex items-center gap-2 mb-4">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gold-100 text-gold-700 capitalize">
          {event.category}
        </span>
        {!upcoming && (
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-stone-100 text-stone-500">
            Past
          </span>
        )}
        {event.featured && upcoming && (
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-sage-100 text-sage-700">
            Featured
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="text-lg font-display font-semibold text-stone-900 mb-2">
        {event.title}
      </h3>

      {/* Description */}
      <p className="text-stone-600 text-sm mb-5 flex-grow leading-relaxed">
        {event.description}
      </p>

      {/* Meta */}
      <div className="space-y-2.5 text-sm text-stone-500">
        <div className="flex items-center gap-2.5">
          <Calendar className="w-4 h-4 text-gold-500 flex-shrink-0" />
          <span>{formatEventDate(event.date)}</span>
        </div>
        <div className="flex items-center gap-2.5">
          <Clock className="w-4 h-4 text-gold-500 flex-shrink-0" />
          <span>{event.time}</span>
        </div>
        <div className="flex items-start gap-2.5">
          <MapPin className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
          <span>{event.location}</span>
        </div>
      </div>
    </motion.div>
  );
}
