import { motion } from 'framer-motion';
import TypeWriter from './TypeWriter';
import SocialIcons from './SocialIcons';
import MagneticButton from './MagneticButton';
import profilePhoto from '@/assets/Anuradhaa.jpeg';

const Hero = () => {
  const typingTexts = [
    'Building the future with Neural Networks...',
    'Transforming data into intelligence...',
    'Creating AI solutions that matter...',
    'Engineering tomorrow\'s algorithms today...',
  ];

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const lenis = (window as any).__lenis;
      if (lenis) {
        lenis.scrollTo(element, { offset: -80, duration: 1.2 });
      } else {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background z-10" />

      <div className="container mx-auto px-6 z-20">
        <div className="flex flex-col items-center gap-6">
          {/* Profile Image - Centered */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-3 rounded-full opacity-75"
                style={{
                  background: 'linear-gradient(135deg, hsl(185, 100%, 50%), hsl(270, 80%, 60%), hsl(185, 100%, 50%))',
                  backgroundSize: '200% 200%',
                }}
                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              />
              <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-background">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan/10 to-violet/10 z-10" />
                <img
                  src={profilePhoto}
                  alt="Anuradha Kashaudhan"
                  className="w-full h-full object-cover object-[center_15%]"
                />
              </div>
              <motion.div
                className="absolute -top-1 -right-1 w-10 h-10 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className="text-lg">🧠</span>
              </motion.div>
              <motion.div
                className="absolute -bottom-1 -left-1 w-9 h-9 rounded-full bg-secondary/20 backdrop-blur-sm flex items-center justify-center"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className="text-base">⚡</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Text Content - Centered */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-primary font-mono text-sm mb-2 tracking-wider"
            >
              {'<hello world />'}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-3"
            >
              I'm <span className="text-gradient">Anuradha Kashaudhan</span>
              <br />
              <span className="text-2xl md:text-4xl lg:text-5xl text-muted-foreground font-semibold">AI/ML Engineer</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg md:text-xl text-muted-foreground mb-6 h-[40px]"
            >
              <TypeWriter texts={typingTexts} speed={80} deleteSpeed={40} pauseTime={2500} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mb-6 flex justify-center"
            >
              <SocialIcons />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <MagneticButton onClick={() => scrollToSection('#projects')} variant="primary">
                View My Projects
              </MagneticButton>
              <MagneticButton onClick={() => scrollToSection('#contact')} variant="outline">
                Contact Me
              </MagneticButton>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-primary"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
