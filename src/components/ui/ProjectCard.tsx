import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { motion } from 'framer-motion';
import type { ProjectItem } from '../../data/projects';

export const ProjectCard = ({ title, description, tech, githubLink, liveLink }: ProjectItem) => (
  <motion.article
    className="group rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-glass backdrop-blur-xl transition hover:-translate-y-1 hover:border-secondary/30"
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.45, ease: 'easeOut' }}
  >
    <div className="mb-6 flex items-center justify-between gap-4">
      <div>
        <p className="text-lg font-semibold text-slate-100">{title}</p>
        <p className="mt-2 text-sm text-slate-400">{description}</p>
      </div>
      <div className="flex gap-3 text-slate-100">
        <a href={githubLink} target="_blank" rel="noreferrer" aria-label="View project on GitHub" className="text-slate-300 transition hover:text-secondary">
          <FiGithub className="h-5 w-5" />
        </a>
        <a href={liveLink} target="_blank" rel="noreferrer" aria-label="View live demo" className="text-slate-300 transition hover:text-secondary">
          <FiExternalLink className="h-5 w-5" />
        </a>
      </div>
    </div>
    <div className="mb-5 flex flex-wrap gap-2">
      {tech.map((item) => (
        <span key={item} className="rounded-full bg-slate-900/80 px-3 py-1 text-xs uppercase tracking-[0.24em] text-slate-300">
          {item}
        </span>
      ))}
    </div>
    <div className="rounded-3xl bg-slate-900/70 p-4 text-sm text-slate-300">Achievement-driven automation delivery with premium engineering UX.</div>
  </motion.article>
);
