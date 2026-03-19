import { motion } from 'framer-motion';
import { Award, Trophy, Medal, Star, ExternalLink } from 'lucide-react';

const achievements = [
  {
    icon: Star,
    title: '4 Star on GeeksforGeeks',
    description: 'University rank 130, Coding Score 990 on GFG Platform',
    link: 'https://www.geeksforgeeks.org/profile/anuradhaka4050',
    color: 'text-green-400',
  },
  {
    icon: Trophy,
    title: 'LeetCode 200+ Problems',
    description: '200+ questions solved with 100 Days Badge on LeetCode',
    link: 'https://leetcode.com/u/Anuradha_15/',
    color: 'text-yellow-400',
  },
  {
    icon: Medal,
    title: 'CodeClash Hackathon Runner-Up',
    description: 'Runner-up & Certificate of Excellence in CodeClash Hackathon',
    link: '#',
    color: 'text-violet',
  },
  {
    icon: Award,
    title: 'Freelance Developer',
    description: 'Worked as Freelance UI/UX and Frontend Developer for clients',
    link: '#',
    color: 'text-cyan',
  },
];

const certifications = [
  { name: 'Privacy and Security on Social Media', issuer: 'NPTEL (Oct 2024)', link: 'https://www.linkedin.com/posts/anuradha-kashaudhan-14a4a8283_nptel-iithyderabad-cybersecurity-activity-7334832828691435520-csvW/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETzQMoBBydd07EK3WzJaNxvTuTpBtZNwdw' },
  { name: 'AI & ML for Real World Problem Solving', issuer: 'LPU (Nov 2024)', link: 'https://drive.google.com/file/d/1RWXP7LGk8bmWM6CPWZNcAQ5HXm4rNkkR/view?usp=sharing' },
  { name: 'Machine Learning 5 Projects with Python', issuer: 'FreeCodeCamp (May 2025)', link: 'https://drive.google.com/file/d/1-GL4S3TO1XR0VKEmJiiytFbqsCm5YiKu/view' },
  { name: 'Java, C, Cpp, DSA', issuer: 'IamNeo (Jan 2025)', link: 'https://drive.google.com/file/d/1qySbyG9n1q8bp3exRNt-ONDnak1yNdXq/view' },
  { name: 'Networking Basics', issuer: 'Cisco Networking Academy (March 2026)', link: 'https://drive.google.com/file/d/1ERPXrFsl1eRd8r4AbWjVMeJvt_HBtIGw/view?usp=sharing' },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/5 to-background" />
      
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
            Awards & <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Recognition and milestones in my AI journey
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <motion.a
              key={achievement.title}
              href={achievement.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-card p-6 text-center group cursor-pointer"
            >
              <motion.div
                className={`inline-flex p-4 rounded-full bg-muted mb-4 ${achievement.color}`}
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <achievement.icon size={28} />
              </motion.div>
              <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                {achievement.title}
              </h3>
              <p className="text-sm text-muted-foreground">{achievement.description}</p>
              <ExternalLink size={14} className="mx-auto mt-3 opacity-0 group-hover:opacity-100 text-primary transition-opacity" />
            </motion.a>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-semibold text-center mb-8">Certifications</h3>
          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <motion.a
                key={cert.name}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between p-4 glass-card hover:border-primary/30 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <div>
                    <p className="font-medium group-hover:text-primary transition-colors">{cert.name}</p>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  </div>
                </div>
                <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;
