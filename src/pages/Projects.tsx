import { motion } from 'framer-motion';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ProjectCard } from '../components/ui/ProjectCard';
import { projects } from '../data/projects';

export const Projects = () => (
  <motion.main
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -16 }}
    transition={{ duration: 0.5 }}
    className="min-h-screen"
  >
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <SectionHeading title="Projects" subtitle="Featured work" />
        <p className="max-w-3xl text-slate-300">
          Explore the premium automation projects that demonstrate expertise in Playwright, Selenium, API testing, and pipeline integration.
        </p>
        <div className="mt-10 grid gap-6 xl:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  </motion.main>
);
