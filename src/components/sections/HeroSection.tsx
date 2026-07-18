import { motion } from 'framer-motion';
import HeroIllustration from '../../assets/coding-illustration.svg';

export const HeroSection = () => (
  <section className="relative overflow-hidden py-20" id="home">
    <div className="absolute inset-0 bg-hero-glow opacity-80" />
    <div className="relative mx-auto grid max-w-7xl gap-12 px-6 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
      <motion.div
        initial={{ opacity: 0, x: -26 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="space-y-8"
      >
        <p className="inline-flex rounded-full border border-secondary/30 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.3em] text-secondary shadow-glass backdrop-blur-xl">
          Senior Test Automation Engineer
        </p>
        <div className="space-y-4">
          <h1 className="text-5xl font-semibold tracking-[-0.04em] text-slate-100 sm:text-6xl">
            Rohan Reddy Yalam
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
            Building reliable automation frameworks that accelerate software delivery with confidence, quality, and speed.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-semibold text-slate-950 shadow-glass shadow-cyan-500/20 transition hover:brightness-105"
          >
            Contact Me
          </a>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm text-slate-100 transition hover:border-secondary hover:text-secondary"
          >
            Download Resume
          </a>
        </div>
        <div className="grid gap-3 rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-glass backdrop-blur-xl sm:grid-cols-3">
          <div className="space-y-1 text-sm text-slate-300">
            <p className="text-slate-100">5+ Years</p>
            <p>Automation specialization</p>
          </div>
          <div className="space-y-1 text-sm text-slate-300">
            <p className="text-slate-100">3 Countries</p>
            <p>Germany, Poland, Italy</p>
          </div>
          <div className="space-y-1 text-sm text-slate-300">
            <p className="text-slate-100">2 Major Teams</p>
            <p>Healthcare & E-commerce</p>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 26 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        className="mx-auto max-w-xl rounded-[2rem] border border-white/10 bg-slate-950/30 p-6 shadow-glass backdrop-blur-3xl"
      >
        {/* Replace the hero illustration with the author's profile picture.
            Place your profile image at `public/profile.jpg`. The image is
            referenced with a relative path so Vite will serve it as-is.
            `object-cover` and rounded corners keep the smooth curves. */}
        <div className="w-full overflow-hidden rounded-[1.75rem]">
          <img
            src="/profile.jpg"
            alt="Rohan Reddy Yalam"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </div>
  </section>
);
