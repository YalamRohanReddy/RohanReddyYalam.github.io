import { SectionHeading } from '../ui/SectionHeading';
import { ProjectCard } from '../ui/ProjectCard';
import { projects } from '../../data/projects';

export const ProjectsSection = () => (
  <section className="py-20" id="projects">
    <div className="mx-auto max-w-7xl px-6 sm:px-8">
      <SectionHeading title="Projects" subtitle="Featured work" />
      <div className="grid gap-6 xl:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  </section>
);
