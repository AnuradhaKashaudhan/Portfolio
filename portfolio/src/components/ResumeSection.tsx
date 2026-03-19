import { motion } from 'framer-motion';
import { FileText, Download, Linkedin, Github, Mail, Phone, ExternalLink } from 'lucide-react';
import MagneticButton from './MagneticButton';

const RESUME_PDF_URL = 'https://drive.google.com/file/d/1UOm-L4GBjc9XKvbpVFotf-ArNOsgr3V4/view?usp=sharing';

const skills = [
  { category: 'Languages', items: 'Python, C++, JavaScript, Java, SQL, C' },
  { category: 'Frameworks', items: 'HTML and CSS, Bootstrap, ReactJS' },
  { category: 'Tools/Platforms', items: 'Git, Github, VsCode, Jupyter, Google Collab, Pycharm, Figma' },
  { category: 'Soft Skills', items: 'Problem-Solving, Continuous Learner, Team Player, Project Management' },
];

const experiences = [
  {
    role: 'Software Developer',
    company: 'Bluestock Fintech',
    duration: 'April – May 2025',
    description: 'Contributed to developing and maintaining web applications, APIs, and databases. Ensured responsive UI/UX design, integrated back-end services, optimized performance, and followed security best practices.',
    skills: 'Front-end Development, Version Control, Problem-Solving, Creativity, Team Collaboration',
  },
  {
    role: 'Machine Learning Intern',
    company: 'Ediglobe (IIT Kharagpur)',
    duration: 'June – July 2025',
    description: 'Underwent intensive training in AI and ML concepts, followed by developing ML projects. Gained hands-on experience in model building, data preprocessing, and meeting real-world project deadlines.',
    skills: 'ML algorithms, Data preprocessing, Feature engineering, Python (NumPy, Pandas, Scikit-learn), Data visualization',
  },
];

const projects = [
  {
    name: 'MeriCity',
    duration: 'October 2025',
    description: 'A crowdsourced civic issue reporting and resolution system built for SIH 2025. Integrated AI-based classification and routing, real-time dashboards for citizens, administrators, and departments.',
    tech: 'React.js, Node.js, Express.js, MongoDB, Google Maps API, OpenAI API',
  },
  {
    name: 'Time and Productivity Analysis',
    duration: 'Feb – March 2025',
    description: 'ML-based system to analyze and predict employee productivity. Built predictive models and enhanced clustering algorithms to segment employees based on performance metrics.',
    tech: 'Python, Pandas, NumPy, Scikit-learn, Matplotlib, Jupyter Notebook, Pycharm',
  },
];

const certificates = [
  'Privacy and Security on Social Media – NPTEL (Oct 2024)',
  'AI & ML for Real World Problem Solving – LPU (Nov 2024)',
  'Machine Learning 5 Project with Python – FreeCodeCamp (May 2025)',
  'Java, C, Cpp, DSA – IamNeo (Jan 2025)',
  'Networking Basics – Cisco Networking Academy (March 2026)',
];

const achievements = [
  'Worked as a Freelance UI/UX and Frontend Developer — collaborated with clients to deliver responsive web interfaces.',
  'Scored 4 Star on GFG Platform — securing an overall university rank of 139 in LPU.',
];

const education = [
  { institution: 'Lovely Professional University, Phagwara, Punjab', degree: 'B.Tech – CSE; CGPA: 7.78', duration: 'Since August 2023' },
  { institution: 'B. N. Public School, Gorakhpur, U.P.', degree: 'Intermediate; Percentage: 85%', duration: 'April 2022 – March 2023' },
  { institution: 'U. S. Central Academy, Gorakhpur, U.P.', degree: 'Matriculation; Percentage: 86%', duration: 'April 2021 – March 2022' },
];

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-lg font-bold text-primary border-b border-primary/30 pb-1 mb-4 uppercase tracking-wider">
    {children}
  </h3>
);

const ResumeSection = () => {
  return (
    <section id="resume" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            className="inline-flex p-6 rounded-2xl bg-gradient-to-br from-cyan/20 to-violet/20 mb-8"
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <FileText size={48} className="text-primary" />
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Resume</span>
          </h2>
          <div className="flex justify-center mt-4">
            <MagneticButton
              onClick={() => window.open(RESUME_PDF_URL, '_blank')}
              variant="primary"
              className="flex items-center gap-2"
            >
              <Download size={20} />
              Download / View PDF
            </MagneticButton>
          </div>
        </motion.div>

        {/* Resume Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto glass-card p-8 md:p-12 space-y-8"
        >
          {/* Header */}
          <div className="text-center border-b border-border pb-6">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Anuradha Kashaudhan</h3>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <a href="https://linkedin.com/in/anuradha-kashaudhan" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-primary transition-colors">
                <Linkedin size={14} /> LinkedIn
              </a>
              <a href="mailto:anuradhakasaudhan51@gmail.com" className="flex items-center gap-1 hover:text-primary transition-colors">
                <Mail size={14} /> anuradhakasaudhan51@gmail.com
              </a>
              <a href="https://github.com/AnuradhaKashaudhan" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-primary transition-colors">
                <Github size={14} /> GitHub
              </a>
              <span className="flex items-center gap-1">
                <Phone size={14} /> +91 7398131445
              </span>
            </div>
          </div>

          {/* Skills */}
          <div>
            <SectionTitle>Skills</SectionTitle>
            <div className="grid sm:grid-cols-2 gap-3">
              {skills.map((s) => (
                <div key={s.category}>
                  <span className="font-semibold text-foreground">{s.category}: </span>
                  <span className="text-muted-foreground text-sm">{s.items}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <SectionTitle>Experience</SectionTitle>
            <div className="space-y-5">
              {experiences.map((exp) => (
                <div key={exp.company}>
                  <div className="flex flex-wrap justify-between items-baseline gap-2">
                    <h4 className="font-semibold text-foreground">{exp.role} – <span className="text-primary">{exp.company}</span></h4>
                    <span className="text-xs text-muted-foreground">{exp.duration}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{exp.description}</p>
                  <p className="text-xs text-primary/80 mt-1">Skills: {exp.skills}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <SectionTitle>Projects</SectionTitle>
            <div className="space-y-5">
              {projects.map((p) => (
                <div key={p.name}>
                  <div className="flex flex-wrap justify-between items-baseline gap-2">
                    <h4 className="font-semibold text-foreground">{p.name}</h4>
                    <span className="text-xs text-muted-foreground">{p.duration}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{p.description}</p>
                  <p className="text-xs text-primary/80 mt-1">Tech: {p.tech}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certificates */}
          <div>
            <SectionTitle>Certificates</SectionTitle>
            <ul className="space-y-1">
              {certificates.map((c) => (
                <li key={c} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  {c}
                </li>
              ))}
            </ul>
          </div>

          {/* Achievements */}
          <div>
            <SectionTitle>Achievements</SectionTitle>
            <ul className="space-y-1">
              {achievements.map((a) => (
                <li key={a} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  {a}
                </li>
              ))}
            </ul>
          </div>

          {/* Education */}
          <div>
            <SectionTitle>Education</SectionTitle>
            <div className="space-y-3">
              {education.map((e) => (
                <div key={e.institution}>
                  <h4 className="font-semibold text-foreground text-sm">{e.institution}</h4>
                  <div className="flex flex-wrap justify-between text-xs text-muted-foreground">
                    <span>{e.degree}</span>
                    <span>{e.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
