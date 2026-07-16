import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { achievements } from '../../data/achievements';

export const AchievementsSection = () => (
  <section className="py-20" id="achievements">
    <div className="mx-auto max-w-7xl px-6 sm:px-8">
      <SectionHeading title="Achievements" subtitle="Impact" />
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
        {achievements.map((item) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-6 text-center shadow-glass backdrop-blur-xl"
          >
            <p className="text-4xl font-semibold text-slate-100">{item.value}</p>
            <p className="mt-3 text-sm uppercase tracking-[0.24em] text-slate-400">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
