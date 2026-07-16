import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { siteData } from '../../constants/site';

export const ContactSection = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('Your message is ready to send. Please reach out via email or LinkedIn.');
  };

  return (
    <section className="py-20" id="contact">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <SectionHeading title="Contact" subtitle="Get in touch" />
        <div className="grid gap-10 lg:grid-cols-[0.9fr_0.7fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-glass backdrop-blur-xl"
          >
            <p className="text-lg leading-8 text-slate-300">
              I am available for senior QA automation leadership, framework delivery, and international testing programs. Reach out directly or share your requirements below.
            </p>
            <div className="mt-10 space-y-4 text-sm text-slate-300">
              <p>
                <span className="font-semibold text-slate-100">Email:</span> {siteData.email}
              </p>
              <p>
                <span className="font-semibold text-slate-100">LinkedIn:</span>{' '}
                <a href={siteData.linkedin} target="_blank" rel="noreferrer" className="text-secondary hover:text-accent">
                  linkedin.com/in/rohan-reddy-yalam
                </a>
              </p>
              <p>
                <span className="font-semibold text-slate-100">GitHub:</span>{' '}
                <a href={siteData.github} target="_blank" rel="noreferrer" className="text-secondary hover:text-accent">
                  github.com/rohanreddyyalam
                </a>
              </p>
              <p>
                <span className="font-semibold text-slate-100">Location:</span> {siteData.locations.join(' / ')}
              </p>
            </div>
          </motion.div>
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: 'easeOut', delay: 0.1 }}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-glass backdrop-blur-xl"
          >
            <div className="space-y-5">
              <label className="block text-sm font-medium text-slate-100">
                Name
                <input
                  type="text"
                  placeholder="Your name"
                  required
                  className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/20"
                />
              </label>
              <label className="block text-sm font-medium text-slate-100">
                Email
                <input
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/20"
                />
              </label>
              <label className="block text-sm font-medium text-slate-100">
                Message
                <textarea
                  placeholder="Brief message about your project"
                  required
                  rows={5}
                  className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/20"
                />
              </label>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-110"
              >
                Send Message
              </button>
              {status && <p className="text-sm text-slate-300">{status}</p>}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
