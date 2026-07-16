import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';

export const AboutSection = () => (
  <section className="py-20" id="about">
    <div className="mx-auto max-w-7xl px-6 sm:px-8">
      <SectionHeading title="About Me" subtitle="Profile" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="grid gap-10 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-glass backdrop-blur-xl md:grid-cols-[0.95fr_0.6fr]"
      >
        <div className="space-y-6 text-slate-300">
          <p className="text-lg leading-8">
            I am a Senior Test Automation Engineer with over 5 years of experience delivering quality for healthcare and e-commerce platforms. I architect automation frameworks that empower cross-functional teams to ship faster while maintaining reliability across functional, regression, and API testing.
          </p>
          <p className="text-lg leading-8">
            My work spans Playwright, Selenium, TypeScript, Java, leadership in Agile teams, and CI/CD pipeline integration through Azure DevOps. I am passionate about mentoring colleagues, improving coverage, and introducing efficient automation solutions across international delivery centers.
          </p>
        </div>
        <div className="space-y-5 rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-6 text-slate-200">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Specialties</p>
            <ul className="grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
              <li>Automation Framework Development</li>
              <li>Manual Testing & QA Strategy</li>
              <li>API Testing and Validation</li>
              <li>Azure DevOps CI/CD Integration</li>
              <li>Cross-functional Leadership</li>
              <li>Healthcare & E-commerce Domains</li>
            </ul>
          </div>
          <div className="rounded-3xl bg-slate-900/80 p-4 text-sm text-slate-300">
            <p className="font-semibold text-slate-100">Global delivery experience</p>
            <p className="mt-2 text-sm leading-6">
              Worked with distributed teams in Germany, Poland, and Italy to deliver scalable automation and quality engineering programs.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);
