import SectionHeader from '../ui/SectionHeader';
import ServiceCard from '../ui/ServiceCard';
import { services } from '../../data/services';

export default function Services() {
  return (
    <section id="services" className="bg-white py-16 sm:py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Core Services"
          title="Six Program Areas Addressing Critical Needs"
          description="Evidence-informed, culturally responsive services aligned with MHSA and federal health priorities."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
