import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),
      setTimeout(() => setPhase(2), 1500),
      setTimeout(() => setPhase(3), 2500),
      setTimeout(() => onComplete(), 3500),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  const nodes = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 0.8,
  }));

  const connections = nodes.flatMap((n, i) =>
    nodes.slice(i + 1).filter((m) => {
      const dx = n.x - m.x;
      const dy = n.y - m.y;
      return Math.sqrt(dx * dx + dy * dy) < 35;
    }).map((m) => ({ x1: n.x, y1: n.y, x2: m.x, y2: m.y, delay: Math.max(n.delay, m.delay) }))
  );

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background overflow-hidden"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Neural network SVG */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
        {phase >= 1 && connections.map((c, i) => (
          <motion.line
            key={`c-${i}`}
            x1={c.x1} y1={c.y1} x2={c.x2} y2={c.y2}
            stroke="hsl(185 100% 50%)"
            strokeWidth="0.15"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.4 }}
            transition={{ duration: 0.6, delay: c.delay * 0.5 }}
          />
        ))}
        {phase >= 1 && nodes.map((n) => (
          <motion.circle
            key={n.id}
            cx={n.x} cy={n.y} r="0.6"
            fill="hsl(185 100% 50%)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.8 }}
            transition={{ duration: 0.4, delay: n.delay * 0.5 }}
          />
        ))}
        {/* Pulse traveling along connections */}
        {phase >= 2 && connections.slice(0, 8).map((c, i) => (
          <motion.circle
            key={`p-${i}`}
            r="0.4"
            fill="hsl(270 80% 60%)"
            initial={{ cx: c.x1, cy: c.y1, opacity: 0 }}
            animate={{
              cx: [c.x1, c.x2],
              cy: [c.y1, c.y2],
              opacity: [0, 1, 0],
            }}
            transition={{ duration: 1, delay: i * 0.1, repeat: 1 }}
          />
        ))}
      </svg>

      {/* Center text */}
      <div className="relative z-10 text-center">
        <AnimatePresence mode="wait">
          {phase < 3 && (
            <motion.div
              key="splash-text"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="text-5xl md:text-7xl font-bold text-gradient mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                AI / ML
              </motion.div>
              <motion.div
                className="text-lg md:text-xl text-muted-foreground font-mono tracking-widest"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                {phase >= 1 && '> initializing neural network...'}
              </motion.div>
              <motion.div
                className="text-lg md:text-xl text-primary font-mono tracking-widest mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {phase >= 2 && '> loading portfolio...'}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Scanning line */}
      {phase >= 1 && (
        <motion.div
          className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent"
          initial={{ top: '0%', opacity: 0 }}
          animate={{ top: '100%', opacity: [0, 1, 1, 0] }}
          transition={{ duration: 2, ease: 'linear' }}
        />
      )}
    </motion.div>
  );
};

export default SplashScreen;
