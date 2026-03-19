import { useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SplashScreen from '@/components/SplashScreen';
import NeuralBackground from '@/components/NeuralBackground';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import InternshipSection from '@/components/InternshipSection';
import AchievementsSection from '@/components/AchievementsSection';
import ResumeSection from '@/components/ResumeSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);
  const handleSplashComplete = useCallback(() => setShowSplash(false), []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnimatePresence mode="wait">
        {showSplash && <SplashScreen key="splash" onComplete={handleSplashComplete} />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showSplash ? 0 : 1 }}
        transition={{ duration: 0.8 }}
      >
        <NeuralBackground />
        <Navbar />
        <main>
          <Hero />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <InternshipSection />
          <AchievementsSection />
          <ResumeSection />
          <ContactSection />
        </main>
        <Footer />
      </motion.div>
    </div>
  );
};

export default Index;
