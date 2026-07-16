import { motion } from 'framer-motion';
import { ContactSection } from '../components/sections/ContactSection';

export const Contact = () => (
  <motion.main
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -16 }}
    transition={{ duration: 0.5 }}
    className="min-h-screen"
  >
    <ContactSection />
  </motion.main>
);
