import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const sections = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Internships', href: '#internship' },
    { label: 'Contact', href: '#contact' },
  ];

  const socials = [
    { label: 'Email', href: 'mailto:anuradha@example.com', icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg> },
    { label: 'GitHub', href: 'https://github.com/AnuradhaKashaudhan', icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.15-.38 6.5-1.4 6.5-7a5.2 5.2 0 0 0-1.5-3.8 4.6 4.6 0 0 0-.13-3.2s-1.3-.4-4.2 1.6a13.1 13.1 0 0 0-5.8 0C4.8 3.5 3.5 3.9 3.5 3.9a4.6 4.6 0 0 0-.13 3.2A5.2 5.2 0 0 0 2 11c0 5.6 3.3 6.6 6.5 7a4.8 4.8 0 0 0-1 3.03V22"/><path d="M9 20c-5 1.5-5-2.5-7-3"/></svg> },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/anuradhakashaudhan', icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg> },
  ];

  return (
    <footer className="relative pt-20 pb-10 overflow-hidden border-t border-border bg-background/50 glass">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-primary/10 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Brand & Intro */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
              Anuradha Kashaudhan
            </h3>
            <p className="text-muted-foreground leading-relaxed max-w-sm">
              Crafting intelligent systems and turning complex data into actionable solutions through Machine Learning and AI.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            <h4 className="text-lg font-semibold text-foreground">Explore</h4>
            <div className="flex flex-col gap-3">
              {sections.map(section => (
                <a 
                  key={section.label} 
                  href={section.href}
                  className="w-fit text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
                >
                  {section.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Details */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            <h4 className="text-lg font-semibold text-foreground">Connect</h4>
            <div className="flex flex-wrap gap-4 mt-2">
              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-full glass-card hover:border-primary/50 hover:bg-primary/10 hover:shadow-[0_0_15px_hsl(var(--primary)/0.3)] transition-all duration-300 text-muted-foreground hover:text-primary"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  title={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Available for exciting opportunities. Drop a message!
            </p>
          </motion.div>

        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border/50 gap-4 text-sm text-muted-foreground"
        >
          <p>© {currentYear} Anuradha Kashaudhan. All rights reserved.</p>
          <p className="flex items-center gap-2">
            Designed with <Heart size={14} className="text-primary" /> and built for the future.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
