import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  disabled?: boolean;
}

const MagneticButton = ({ children, className = '', onClick, variant = 'primary', disabled = false }: MagneticButtonProps) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles = "relative px-8 py-3 rounded-full font-semibold text-base transition-all duration-300 overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed isolate";
  
  const variants = {
    primary: "bg-primary text-primary-foreground hover:shadow-[0_0_20px_hsl(185,100%,50%,0.4)]",
    secondary: "bg-secondary text-secondary-foreground hover:shadow-[0_0_20px_hsl(270,80%,60%,0.4)]",
    outline: "border-2 border-primary text-primary hover:bg-primary/10",
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={disabled ? undefined : handleMouse}
      onMouseLeave={reset}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-cyan to-violet opacity-0 group-hover:opacity-15 transition-opacity duration-300 rounded-full" />
    </motion.button>
  );
};

export default MagneticButton;
