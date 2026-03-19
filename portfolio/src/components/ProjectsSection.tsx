import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Heart, Clock, MessageSquare, Building2, Smile, TrendingUp } from 'lucide-react';

import projectSevasetu from '@/assets/project-sevasetu.png';
import projectProductivity from '@/assets/project-productivity.png';
import projectNlp from '@/assets/project-nlp.png';
import projectMericity from '@/assets/project-mericity.png';
import projectEmotion from '@/assets/project-emotion.png';
import projectCovid from '@/assets/project-covid.png';

const projects = [
  {
    icon: Heart,
    title: 'Sevasetu',
    subtitle: 'Social Impact Platform',
    description: 'A React & Python-based donation platform for compassionate connecting, bridging donors with those in need.',
    tags: ['React', 'Python', 'Social Impact'],
    github: 'https://github.com/AnuradhaKashaudhan/seva-compassionate-connect',
    color: 'cyan',
    image: projectSevasetu,
  },
  {
    icon: Clock,
    title: 'Time & Productivity Analyser',
    subtitle: 'ML Analytics',
    description: 'Machine Learning project utilizing a massive dataset of 100,000+ records to analyze and optimize human efficiency patterns.',
    tags: ['Python', 'ML', 'Data Analysis', 'Pandas'],
    github: 'https://github.com/AnuradhaKashaudhan/Productivity-Analytics-Clustering-Model',
    color: 'violet',
    image: projectProductivity,
  },
  {
    icon: MessageSquare,
    title: 'Noisy Text Normalizer',
    subtitle: 'NLP Tool',
    description: 'An advanced NLP tool implementing 3 different models for text cleaning and normalization of noisy data.',
    tags: ['NLP', 'Python', 'Deep Learning'],
    github: 'https://github.com/AnuradhaKashaudhan/Noisy-text-normalizer',
    color: 'cyan',
    image: projectNlp,
  },
  {
    icon: Building2,
    title: 'Mericity',
    subtitle: 'SIH Project',
    description: 'Smart India Hackathon project focused on identifying and solving civic infrastructure issues in urban areas.',
    tags: ['React', 'Node.js', 'Civic Tech'],
    github: 'https://github.com/AnuradhaKashaudhan',
    color: 'violet',
    image: projectMericity,
  },
  {
    icon: Smile,
    title: 'Emotion Detector App',
    subtitle: 'ML Application',
    description: 'ML-powered application that detects user emotions in real-time and recommends projects/actions accordingly.',
    tags: ['ML', 'Computer Vision', 'Python'],
    github: 'https://github.com/AnuradhaKashaudhan/Emotion-detector-app',
    color: 'cyan',
    image: projectEmotion,
  },
  {
    icon: TrendingUp,
    title: 'COVID Forecasting',
    subtitle: 'Time Series Analysis',
    description: 'Comprehensive time-series analysis and prediction of COVID trends using the SARIMAX statistical model.',
    tags: ['SARIMAX', 'Python', 'Time Series'],
    github: 'https://github.com/AnuradhaKashaudhan/COVID-Forecasting-SARIMAX',
    color: 'violet',
    image: projectCovid,
  },
];

const ProjectsSection = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <AnimatePresence>
        {hoveredProject && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, x: mousePos.x + 15, y: mousePos.y + 15 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed top-0 left-0 pointer-events-none z-[100] px-4 py-2 bg-foreground text-background rounded-full text-sm font-bold shadow-xl whitespace-nowrap"
            transition={{ type: "tween", ease: "linear", duration: 0 }}
          >
            View Project
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute inset-0 bg-grid opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Selected <span className="text-gradient">Works</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A collection of projects showcasing my passion for AI, ML and impactful solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              onMouseEnter={() => setHoveredProject(project.title)}
              onMouseLeave={() => setHoveredProject(null)}
              className={`
                relative rounded-xl overflow-hidden
                bg-card/50 backdrop-blur-xl border border-border
                group cursor-none
                hover:border-transparent
                transition-all duration-300
                shadow-lg hover:shadow-xl
              `}
            >
              {/* Animated border */}
              <div className={`
                absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10
                shadow-[inset_0_0_0_1px_hsl(var(--foreground)/0.2)]
              `} />

              {/* Dashboard Image */}
              <div className="relative w-full h-40 overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} dashboard preview`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`
                  absolute inset-0
                  ${project.color === 'cyan'
                    ? 'bg-gradient-to-t from-card via-card/60 to-transparent'
                    : 'bg-gradient-to-t from-card via-card/60 to-transparent'
                  }
                `} />
                {/* Icon badge */}
                <div className={`
                  absolute top-3 left-3 inline-flex p-2.5 rounded-lg z-10
                  ${project.color === 'cyan' 
                    ? 'bg-gradient-to-br from-cyan to-cyan/50' 
                    : 'bg-gradient-to-br from-violet to-violet/50'
                  }
                  group-hover:scale-110 transition-transform duration-300
                `}>
                  <project.icon className="w-5 h-5 text-primary-foreground" />
                </div>
              </div>

              {/* Content */}
              <div className="relative p-5 pt-2">
                <p className={`
                  text-xs font-medium uppercase tracking-wider mb-1
                  ${project.color === 'cyan' ? 'text-cyan' : 'text-violet'}
                `}>
                  {project.subtitle}
                </p>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`
                        px-2.5 py-1 text-xs font-medium rounded-full
                        border transition-colors duration-300
                        ${project.color === 'cyan'
                          ? 'bg-cyan/10 border-cyan/30 text-cyan group-hover:bg-cyan/20'
                          : 'bg-violet/10 border-violet/30 text-violet group-hover:bg-violet/20'
                        }
                      `}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* GitHub Link */}
                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      inline-flex items-center gap-2 px-4 py-2 rounded-lg
                      text-sm font-medium transition-all duration-300
                      ${project.color === 'cyan'
                        ? 'bg-cyan/10 text-cyan hover:bg-cyan/20 hover:shadow-[0_0_15px_hsl(185,100%,50%,0.3)]'
                        : 'bg-violet/10 text-violet hover:bg-violet/20 hover:shadow-[0_0_15px_hsl(270,80%,60%,0.3)]'
                      }
                    `}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={16} />
                    View Code
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
