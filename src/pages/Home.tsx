import { motion } from 'framer-motion';
import { HeroSection } from '../components/sections/HeroSection';
import { AboutSection } from '../components/sections/AboutSection';
import { SkillsSection } from '../components/sections/SkillsSection';
import { ExperienceSection } from '../components/sections/ExperienceSection';
import { ProjectsSection } from '../components/sections/ProjectsSection';
import { AchievementsSection } from '../components/sections/AchievementsSection';
import { EducationSection } from '../components/sections/EducationSection';
import { ContactSection } from '../components/sections/ContactSection';

export const Home = () => (
  <motion.main
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
    className="min-h-screen overflow-hidden"
  >
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ExperienceSection />
    <ProjectsSection />
    <AchievementsSection />
    <EducationSection />
    <ContactSection />
  </motion.main>
);
