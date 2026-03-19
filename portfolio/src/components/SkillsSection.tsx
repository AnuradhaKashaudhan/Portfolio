import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ChevronDown, Code, Cpu, Wrench, Users } from 'lucide-react';
import MagneticButton from './MagneticButton';
import SkillsBackground from './SkillsBackground';

const skillCategories = [
  {
    icon: Code,
    title: 'Programming Languages',
    colorFrom: 'from-purple-500',
    colorTo: 'to-blue-500',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'JavaScript', level: 50 },
      { name: 'TypeScript', level: 70 },
      { name: 'C++', level: 95 },
      { name: 'SQL', level: 70 },
      { name: 'Java', level: 60 },
      { name: 'C', level: 95 },
    ],
  },
  {
    icon: Cpu,
    title: 'Frameworks & Technologies',
    colorFrom: 'from-blue-500',
    colorTo: 'to-cyan-500',
    skills: [
      { name: 'PyTorch', level: 85 },
      { name: 'TensorFlow', level: 90 },
      { name: 'Keras', level: 95 },
      { name: 'Scikit-learn', level: 98 },
      { name: 'OpenCV', level: 89 },
      { name: 'Hugging Face', level: 78 },
      { name: 'FastAPI', level: 86 },
    ],
  },
  {
    icon: Wrench,
    title: 'Tools & Platforms',
    colorFrom: 'from-purple-500',
    colorTo: 'to-pink-500',
    skills: [
      { name: 'GCP', level: 70 },
      { name: 'MLflow', level: 90 },
      { name: 'Weights & Biases', level: 60 },
      { name: 'Git', level: 80 },
      { name: 'VSCode', level: 98 },
      { name: 'Jupyter', level: 95 },
      { name: 'PyCharm', level: 90 },
      { name: 'Google Colab', level: 96 },
      { name: 'Figma', level: 86 },
      { name: 'Canva', level: 92 },
    ],
  },
  {
    icon: Users,
    title: 'Soft Skills',
    colorFrom: 'from-pink-500',
    colorTo: 'to-orange-500',
    skills: [
      { name: 'Problem Solving', level: 90 },
      { name: 'Team Leadership', level: 95 },
      { name: 'Good Communication', level: 95 },
      { name: 'Research', level: 92 },
    ],
  },
];

import { FaPython, FaDocker, FaReact, FaJava, FaFigma } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiTensorflow, SiPytorch, SiKeras, SiOpencv, SiScikitlearn, SiFastapi, SiCplusplus, SiC, SiMysql } from 'react-icons/si';

const quickSkills = [
  { name: 'Python', icon: FaPython },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'C++', icon: SiCplusplus },
  { name: 'C', icon: SiC },
  { name: 'Java', icon: FaJava },
  { name: 'SQL', icon: SiMysql },
  { name: 'TensorFlow', icon: SiTensorflow },
  { name: 'PyTorch', icon: SiPytorch },
  { name: 'Keras', icon: SiKeras },
  { name: 'OpenCV', icon: SiOpencv },
  { name: 'Scikit-learn', icon: SiScikitlearn },
  { name: 'FastAPI', icon: SiFastapi },
  { name: 'Docker', icon: FaDocker },
  { name: 'Figma', icon: FaFigma },
  { name: 'React', icon: FaReact },
];

const SkillRow = ({ skill, index, colorFrom, colorTo }: { skill: any; index: number; colorFrom: string; colorTo: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      // Animate percentage
      let startTimestamp: number | null = null;
      const duration = 1000; // 1s

      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);

        // easeOutQuart
        const ease = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(ease * skill.level));

        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };

      window.requestAnimationFrame(step);
    }
  }, [isInView, skill.level]);

  return (
    <div
      ref={ref}
      className="relative group/skill p-2 rounded-lg hover:bg-gradient-to-r hover:from-white/10 hover:to-transparent dark:hover:from-white/10 dark:hover:to-transparent transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-default"
    >
      <div className="flex justify-between mb-2 items-end px-1">
        <span className="text-sm font-medium text-foreground group-hover/skill:text-primary group-hover/skill:scale-105 origin-left transition-all duration-300">
          {skill.name}
        </span>
        <span className="text-xs font-bold text-muted-foreground group-hover/skill:text-foreground transition-colors group-hover/skill:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
          {count}%
        </span>
      </div>

      {/* Tooltip */}
      <div className="absolute -top-6 right-0 opacity-0 group-hover/skill:opacity-100 transition-opacity bg-popover text-popover-foreground text-xs px-2 py-1 rounded shadow-lg pointer-events-none z-10">
        Proficiency Level
      </div>

      {/* Progress Bar Track */}
      <div className="h-2 w-full bg-muted/50 rounded-full overflow-hidden border border-border/50">
        {/* Animated Fill with moving gradient */}
        <motion.div
          className="h-full rounded-full group-hover/skill:shadow-[0_0_20px_rgba(255,255,255,0.8)] transition-shadow duration-300 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 relative overflow-hidden"
          style={{
            background: `linear-gradient(270deg, var(--tw-gradient-stops))`,
            backgroundSize: '200% 200%',
          }}
          animate={{
            width: isInView ? `${skill.level}%` : "0%",
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            width: { duration: 1, delay: index * 0.1, ease: "easeOut" },
            backgroundPosition: { duration: 3, repeat: Infinity, ease: "linear" },
          }}
        >
          {/* Shimmer Light Effect */}
          <motion.div
            className="absolute top-0 bottom-0 left-0 w-[40%] bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12"
            animate={{ x: ["-200%", "400%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: index * 0.2 }}
          />
        </motion.div>
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const [showDetailed, setShowDetailed] = useState(true);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <SkillsBackground />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            The Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building intelligent systems
          </p>
        </motion.div>

        {/* Marquee Skills Track */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative w-full overflow-hidden bg-muted/20 py-8 mb-16 rounded-2xl border border-border group flex"
        >
          {/* Gradient overlays for smooth fading edges */}
          <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div className="flex animate-marquee group-hover:[animation-play-state:paused] w-max gap-8 px-4 h-max items-center">
            {/* Double array for seamless loop */}
            {[...quickSkills, ...quickSkills, ...quickSkills, ...quickSkills].map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-5 py-3 rounded-full bg-card border border-border shrink-0 hover:border-primary hover:text-primary transition-colors cursor-pointer shadow-sm"
              >
                <skill.icon className="w-5 h-5" />
                <span className="font-semibold text-sm">{skill.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Detailed Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: categoryIndex * 0.15, duration: 0.6 }}
              className="glass-card p-8 rounded-2xl border border-white/5 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(var(--primary),0.2)] transition-all duration-500 group relative overflow-hidden"
            >
              {/* Subtle neon glow behind the card content */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="flex items-center gap-4 mb-8 relative z-10">
                <motion.div 
                  className={`p-3 rounded-xl bg-gradient-to-br ${category.colorFrom} ${category.colorTo} bg-opacity-20 shadow-lg`}
                  animate={{ scale: [1, 1.05, 1], boxShadow: ['0 0 10px rgba(120,120,255,0.2)', '0 0 25px rgba(120,120,255,0.6)', '0 0 10px rgba(120,120,255,0.2)'] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <category.icon className="w-6 h-6 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                </motion.div>
                <h3 className="text-2xl font-semibold tracking-tight">{category.title}</h3>
              </div>

              <div className="flex flex-col gap-3 relative z-10">
                {category.skills.map((skill, skillIndex) => (
                  <SkillRow
                    key={skill.name}
                    skill={skill}
                    index={skillIndex}
                    colorFrom={category.colorFrom}
                    colorTo={category.colorTo}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
