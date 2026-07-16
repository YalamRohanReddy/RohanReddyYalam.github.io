import { SectionHeading } from '../ui/SectionHeading';
import { ExperienceCard } from '../ui/ExperienceCard';
import { experience } from '../../data/experience';

export const ExperienceSection = () => (
  <section className="py-20" id="experience">
    <div className="mx-auto max-w-7xl px-6 sm:px-8">
      <SectionHeading title="Professional Experience" subtitle="Timeline" />
      <div className="grid gap-6 lg:grid-cols-2">
        {experience.map((item) => (
          <ExperienceCard key={item.company} {...item} />
        ))}
      </div>
    </div>
  </section>
);
