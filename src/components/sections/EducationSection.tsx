import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';

export const EducationSection = () => (
  <section className="py-20" id="education">
    <div className="mx-auto max-w-7xl px-6 sm:px-8">
      <SectionHeading title="Education & Certification" subtitle="Credentials" />
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className="grid gap-6 md:grid-cols-2"
      >
        <article className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-glass backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Education</p>
          <h3 className="mt-4 text-2xl font-semibold text-slate-100">Bachelor of Technology</h3>
          <p className="mt-3 text-sm text-slate-300">Electrical & Electronics Engineering • Kamala Institute of Technology and Science</p>
        </article>
        <article className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-glass backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Certification</p>
          <h3 className="mt-4 text-2xl font-semibold text-slate-100">ISTQB Foundation Level</h3>
          <p className="mt-3 text-sm text-slate-300">Issued by Indian Testing Board for strong foundation in software testing processes and principles.</p>
        </article>
      </motion.div>
    </div>
  </section>
);
