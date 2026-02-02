import { Utensils, Home, Activity, Heart, ClipboardList, Users } from 'lucide-react';

export const services = [
  {
    id: 'food-nutrition',
    title: 'Food & Nutrition Support',
    description: 'Meal packages, weekly food boxes, emergency nutrition relief, and community distribution events.',
    price: '$25/person/day',
    icon: Utensils,
    image: '/services/food-nutrition.webp',
  },
  {
    id: 'housing',
    title: 'Housing Stabilization',
    description: 'Utility & rent assistance navigation, housing referrals, and crisis resource coordination.',
    price: '$150/case',
    icon: Home,
    image: '/services/housing.webp',
  },
  {
    id: 'medical',
    title: 'Medical Expense Navigation',
    description: 'Prescription assistance, healthcare access guidance, and medical cost relief navigation.',
    price: '$85/session',
    icon: Activity,
    image: '/services/medical.webp',
  },
  {
    id: 'wellness',
    title: 'Mental Health & Wellness',
    description: 'Non-clinical wellness programming, stigma reduction, peer support, and caregiver programming.',
    price: '$30/session',
    icon: Heart,
    image: '/services/wellness.webp',
  },
  {
    id: 'case-management',
    title: 'Case Management',
    description: 'Comprehensive intake, individualized planning, referral coordination, and ongoing support.',
    price: '$95/hour',
    icon: ClipboardList,
    image: '/services/case-management.webp',
  },
  {
    id: 'outreach',
    title: 'Senior & Disability Outreach',
    description: 'Home safety checks, transportation coordination, and isolation-reduction activities.',
    price: '$55/visit',
    icon: Users,
    image: '/services/outreach.webp',
  },
];

export const populations = [
  {
    title: 'Adults with Disabilities',
    description: 'Physical, intellectual, and developmental disabilities',
    icon: Users,
  },
  {
    title: 'Older Adults & Seniors',
    description: 'Supporting aging with dignity and independence',
    icon: Heart,
  },
  {
    title: 'Housing-Insecure Individuals',
    description: 'Low-income and unstably housed community members',
    icon: Home,
  },
  {
    title: 'Caregivers & Families',
    description: 'Supporting those who support others',
    icon: Users,
  },
  {
    title: 'Multicultural Communities',
    description: 'Culturally responsive services for all backgrounds',
    icon: 'Globe',
  },
  {
    title: 'Isolated Individuals',
    description: 'Reducing social isolation and building connection',
    icon: 'HandHelping',
  },
];

export const impactStats = [
  { title: 'Los Angeles County', subtitle: 'Service Area', icon: 'MapPin' },
  { title: '6 Core Programs', subtitle: 'Comprehensive Services', icon: 'BarChart3' },
  { title: 'Adults & Seniors', subtitle: 'Population Focus', icon: 'Users' },
  { title: 'Wraparound Model', subtitle: 'Care Approach', icon: 'Shield' },
];
