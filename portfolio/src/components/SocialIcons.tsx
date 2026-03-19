import { motion } from 'framer-motion';
import { Linkedin, Github, Mail } from 'lucide-react';

const LeetCodeIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
  </svg>
);

const GFGIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M21.45 14.315c-.143.28-.334.532-.565.745a3.691 3.691 0 0 1-1.104.695 4.51 4.51 0 0 1-3.116-.016 3.79 3.79 0 0 1-2.135-2.078 3.571 3.571 0 0 1-.16-.677h3.679a.652.652 0 0 0 .498-.215.66.66 0 0 0 .168-.521.658.658 0 0 0-.168-.522.652.652 0 0 0-.498-.214h-3.679a3.571 3.571 0 0 1 .16-.677 3.79 3.79 0 0 1 2.135-2.078 4.51 4.51 0 0 1 3.116-.016c.412.163.79.39 1.104.695.231.213.422.465.565.745a.652.652 0 0 0 .91.24.66.66 0 0 0 .24-.912 4.606 4.606 0 0 0-.8-1.058 5.015 5.015 0 0 0-1.46-.92 5.799 5.799 0 0 0-4.01.02 5.095 5.095 0 0 0-2.82 2.745 4.844 4.844 0 0 0-.267.944H12.1a.652.652 0 0 0-.498.214.66.66 0 0 0-.168.522.66.66 0 0 0 .168.521.652.652 0 0 0 .498.215h.857c.048.32.136.633.267.944a5.095 5.095 0 0 0 2.82 2.745 5.799 5.799 0 0 0 4.01.02 5.015 5.015 0 0 0 1.46-.92 4.606 4.606 0 0 0 .8-1.058.66.66 0 0 0-.24-.912.652.652 0 0 0-.91.24zM2.552 14.315c.143.28.334.532.564.745.315.305.692.532 1.104.695a4.51 4.51 0 0 0 3.116-.016 3.79 3.79 0 0 0 2.135-2.078c.131-.311.22-.633.267-.944h.857a.652.652 0 0 0 .498-.215.66.66 0 0 0 .168-.521.66.66 0 0 0-.168-.522.652.652 0 0 0-.498-.214h-.857a4.844 4.844 0 0 0-.267-.944 5.095 5.095 0 0 0-2.82-2.745 5.799 5.799 0 0 0-4.01-.02 5.015 5.015 0 0 0-1.46.92 4.606 4.606 0 0 0-.8 1.058.66.66 0 0 0 .24.912.652.652 0 0 0 .91-.24c.143-.28.334-.532.564-.745a3.691 3.691 0 0 1 1.104-.695 4.51 4.51 0 0 1 3.116.016 3.79 3.79 0 0 1 2.135 2.078c.095.216.147.442.16.677H6.293a.652.652 0 0 0-.498.214.66.66 0 0 0-.168.522.66.66 0 0 0 .168.521.652.652 0 0 0 .498.215h3.679a3.571 3.571 0 0 1-.16.677 3.79 3.79 0 0 1-2.135 2.078 4.51 4.51 0 0 1-3.116.016 3.691 3.691 0 0 1-1.104-.695 2.426 2.426 0 0 1-.564-.745.652.652 0 0 0-.91-.24.66.66 0 0 0-.24.912c.18.39.448.747.8 1.058.424.358.912.64 1.46.92a5.799 5.799 0 0 0 4.01-.02 5.095 5.095 0 0 0 2.82-2.745c.131-.311.22-.633.267-.944" />
  </svg>
);

const scrollToContact = () => {
  const element = document.querySelector('#contact');
  if (element) {
    const lenis = (window as any).__lenis;
    if (lenis) {
      lenis.scrollTo(element, { offset: -80, duration: 1.2 });
    } else {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
};

const socials = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/anuradha-kashaudhan-14a4a8283/', label: 'LinkedIn', delay: 0 },
  { icon: Github, href: 'https://github.com/AnuradhaKashaudhan', label: 'GitHub', delay: 0.1 },
  
  { icon: LeetCodeIcon, href: 'https://leetcode.com/u/Anuradha_15/', label: 'LeetCode', delay: 0.2, custom: true },
  { icon: GFGIcon, href: 'https://www.geeksforgeeks.org/profile/anuradhaka4050', label: 'GeeksforGeeks', delay: 0.25, custom: true },
  { icon: Mail, href: '#contact', label: 'Message', delay: 0.3, isContact: true },
];

const SocialIcons = () => {
  return (
    <div className="flex items-center gap-6 flex-wrap">
      {socials.map((social) => (
        <motion.a
          key={social.label}
          href={social.isContact ? undefined : social.href}
          target={!social.isContact && social.href.startsWith('http') ? '_blank' : undefined}
          rel={!social.isContact && social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          onClick={social.isContact ? (e) => { e.preventDefault(); scrollToContact(); } : undefined}
          className="relative p-3 rounded-full glass-card group cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: social.delay, duration: 0.5 }}
          whileHover={{ y: -5 }}
        >
          {social.custom ? (
            <social.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
          ) : (
            <social.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
          )}
          
          {/* Pulse effect */}
          <motion.span
            className="absolute inset-0 rounded-full border-2 border-primary/50"
            initial={{ scale: 1, opacity: 0 }}
            whileHover={{
              scale: [1, 1.3, 1.5],
              opacity: [0.5, 0.3, 0],
            }}
            transition={{ duration: 0.8, repeat: Infinity }}
          />
          
          {/* Floating animation */}
          <motion.span
            className="absolute inset-0"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: social.delay }}
          />
        </motion.a>
      ))}
    </div>
  );
};

export default SocialIcons;
