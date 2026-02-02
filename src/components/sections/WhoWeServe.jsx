import { motion } from 'framer-motion';
import { Users, Heart, Home, Globe, HandHelping } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import { IconCard } from '../ui/Card';
import { AnimatedContainer, AnimatedItem } from '../ui/AnimatedSection';

const populations = [
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
    icon: Globe,
  },
  {
    title: 'Isolated Individuals',
    description: 'Reducing social isolation and building connection',
    icon: HandHelping,
  },
];

export default function WhoWeServe() {
  return (
    <section className="bg-stone-100 py-16 sm:py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Who We Serve"
          title="Comprehensive Support for Vulnerable Populations"
          description="Serving adults with disabilities, seniors, and caregivers throughout Los Angeles County with culturally responsive care."
        />

        <AnimatedContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {populations.map((population, index) => (
            <AnimatedItem key={population.title}>
              <IconCard
                icon={population.icon}
                title={population.title}
                description={population.description}
              />
            </AnimatedItem>
          ))}
        </AnimatedContainer>
      </div>
    </section>
  );
}
