import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { SkillCard } from '../ui/SkillCard';
import { skills } from '../../data/skills';

export const SkillsSection = () => (
  <section className="py-20" id="skills">
    <div className="mx-auto max-w-7xl px-6 sm:px-8">
      <SectionHeading title="Skills" subtitle="Capabilities" />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {skills.map((block) => (
          <motion.div
            key={block.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-glass backdrop-blur-xl"
          >
            <h3 className="mb-5 text-xl font-semibold text-slate-100">{block.category}</h3>
            <div className="grid gap-3">
              {block.items.map((skill) => (
                <SkillCard key={skill} label={skill} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
