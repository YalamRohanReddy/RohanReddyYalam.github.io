import { motion } from 'framer-motion';

interface SkillCardProps {
  label: string;
}

export const SkillCard = ({ label }: SkillCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.45, ease: 'easeOut' }}
    className="rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-slate-100 shadow-glass backdrop-blur-xl"
  >
    <span>{label}</span>
  </motion.div>
);
