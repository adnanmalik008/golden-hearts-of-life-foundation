export const events = [
  {
    id: 'mental-health-wellness-day-2026',
    title: 'Take Action for Mental Health & Wellness Day',
    titleEs: 'Actúa por la Salud Mental y Bienestar',
    description:
      'Join us for a day of wellness during the Soccer Tournament! Free food, meditation & mindfulness, mental health resources, blood pressure checks, community information, and fun for the whole family. This event is 100% free and open to the community.',
    descriptionEs:
      'Únete a nosotros para un día de bienestar durante el Torneo de Fútbol. Comida gratis, meditación y atención plena, recursos de salud mental, chequeo de presión arterial, información comunitaria y diversión para toda la familia. Este evento es 100% gratuito y abierto a la comunidad.',
    date: '2026-05-16',
    time: '9:00 AM - 1:00 PM',
    location: 'Boyle Heights Sports Center & Park',
    address: '933 S Mott St, Los Angeles, CA 90023',
    flyerEn: '/events/english_flyer_READY.png',
    flyerEs: '/events/spanish_flyer_READY.png',
    highlights: [
      'Free Food for Everyone',
      'Meditation & Mindfulness',
      'Mental Health Resources',
      'Blood Pressure Checks',
      'Community Information',
      'Fun for the Whole Family',
    ],
  },
];

export function formatEventDate(dateStr) {
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

export function isUpcoming(dateStr) {
  return new Date(dateStr + 'T23:59:59') >= new Date();
}
