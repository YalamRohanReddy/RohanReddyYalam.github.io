import { motion } from 'framer-motion';
import type { ExperienceItem } from '../../data/experience';

export const ExperienceCard = ({
  company,
  role,
  duration,
  points,
}: ExperienceItem) => (
  <motion.article
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.45, ease: 'easeOut' }}
    className="group rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-glass backdrop-blur-xl"
  >
    <div className="mb-4 flex items-center justify-between gap-4 text-slate-100 md:flex-row md:items-start">
      <div>
        <p className="text-xl font-semibold">{company}</p>
        <p className="mt-1 text-sm text-slate-400">{role}</p>
      </div>
      <span className="rounded-full bg-slate-900/80 px-4 py-2 text-xs uppercase tracking-[0.2em] text-cyan-300">
        {duration}
      </span>
    </div>
    <ul className="space-y-3 text-sm leading-7 text-slate-300">
      {points.map((point) => (
        <li key={point} className="flex gap-3">
          <span className="mt-1 h-2 w-2 rounded-full bg-secondary" />
          <span>{point}</span>
        </li>
      ))}
    </ul>
  </motion.article>
);
