import { motion } from 'framer-motion';
import { Building2, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    company: 'Bluestock Fintech',
    role: 'Software Developer',
    duration: 'April – May 2025',
    location: 'Remote',
    description: 'Contributed to developing and maintaining web applications, APIs, and databases. Ensured responsive UI/UX design, integrated back-end services, optimized performance, and followed security best practices.',
    achievements: [
      'Developed and maintained responsive web applications',
      'Integrated back-end services and optimized performance',
      'Followed security best practices across the stack',
    ],
  },
  {
    company: 'Ediglobe (IIT Kharagpur)',
    role: 'Machine Learning Intern',
    duration: 'June – July 2025',
    location: 'Remote',
    description: 'Underwent intensive training in AI and ML concepts, followed by developing ML projects. Gained hands-on experience in model building, data preprocessing, and meeting real-world project deadlines.',
    achievements: [
      'Trained in AI/ML concepts and built real-world ML projects',
      'Gained hands-on experience in data preprocessing and feature engineering',
      'Worked with Python, NumPy, Pandas, and Scikit-learn',
    ],
  },
];

const InternshipSection = () => {
  return (
    <section id="internship" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Building real-world AI solutions in industry settings
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan via-violet to-cyan/0" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className={`relative mb-12 md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:ml-auto'
              }`}
            >
              {/* Timeline dot */}
              <div className={`absolute top-6 ${
                index % 2 === 0 ? 'left-0 md:right-0 md:left-auto md:translate-x-[calc(50%+1px)]' : 'left-0 md:-translate-x-[calc(50%+1px)]'
              } w-4 h-4 rounded-full bg-primary glow-cyan`} />

              <div className="glass-card p-6 ml-8 md:ml-0 hover:border-primary/30 transition-all duration-300">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-primary">
                      <Building2 size={16} />
                      {exp.company}
                    </div>
                  </div>
                </div>

                {/* Meta info */}
                <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {exp.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={14} />
                    {exp.location}
                  </span>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-4">{exp.description}</p>

                {/* Achievements */}
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan mt-2 flex-shrink-0" />
                      <span className="text-foreground/80">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternshipSection;
