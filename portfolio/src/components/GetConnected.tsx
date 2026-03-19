import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '@/integrations/supabase/client';

interface GetConnectedProps {
  compact?: boolean;
}

const GetConnected = ({ compact = false }: GetConnectedProps) => {
  const [count, setCount] = useState(0);
  const [isConnected, setIsConnected] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const displayCount = useAnimatedCounter(count);

  useEffect(() => {
    const connected = localStorage.getItem('portfolio_connected');
    if (connected === 'true') setIsConnected(true);

    // Fetch initial count
    const fetchCount = async () => {
      const { data } = await supabase
        .from('connections')
        .select('count')
        .limit(1)
        .single();
      if (data) setCount(data.count);
    };
    fetchCount();

    // Realtime subscription
    const channel = supabase
      .channel('connections-realtime')
      .on(
        'postgres_changes',
        { event: 'UPDATE', schema: 'public', table: 'connections' },
        (payload) => {
          setCount((payload.new as { count: number }).count);
        }
      )
      .subscribe();

    return () => { supabase.removeChannel(channel); };
  }, []);

  const handleConnect = async () => {
    if (isConnected || isAnimating) return;
    setIsAnimating(true);
    setShowConfetti(true);

    const { data } = await supabase
      .from('connections')
      .select('id, count')
      .limit(1)
      .single();

    if (data) {
      await supabase
        .from('connections')
        .update({ count: data.count + 1, updated_at: new Date().toISOString() })
        .eq('id', data.id);
    }

    localStorage.setItem('portfolio_connected', 'true');
    setIsConnected(true);
    setTimeout(() => {
      setIsAnimating(false);
      setShowConfetti(false);
    }, 1500);
  };

  return (
    <div className={`flex flex-col items-center ${compact ? 'gap-3 py-4' : 'gap-6 py-12'}`}>
      {/* Counter */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <motion.span
          key={displayCount}
          className={`font-bold text-gradient ${compact ? 'text-3xl' : 'text-5xl md:text-6xl'}`}
          initial={{ scale: 1.3, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
        >
          {displayCount}
        </motion.span>
        <p className={`text-muted-foreground font-mono tracking-wider ${compact ? 'text-xs mt-1' : 'text-sm mt-2'}`}>
          CONNECTIONS WORLDWIDE
        </p>
      </motion.div>

      {/* Button */}
      <motion.button
        onClick={handleConnect}
        disabled={isConnected}
        className={`relative rounded-full font-semibold overflow-hidden transition-all duration-500 ${
          compact ? 'px-5 py-2.5 text-sm' : 'px-8 py-4 text-lg'
        } ${
          isConnected
            ? 'bg-emerald-500/20 text-emerald-400 border-2 border-emerald-500/40 cursor-default'
            : 'bg-primary text-primary-foreground hover:shadow-[0_0_30px_hsl(185,100%,50%,0.5)] cursor-pointer'
        }`}
        whileHover={!isConnected ? { scale: 1.05 } : {}}
        whileTap={!isConnected ? { scale: 0.95 } : {}}
      >
        <AnimatePresence mode="wait">
          {isConnected ? (
            <motion.span
              key="connected"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2"
            >
              ✅ Connected
            </motion.span>
          ) : (
            <motion.span
              key="connect"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="flex items-center gap-2"
            >
              🤝 Get Connected
            </motion.span>
          )}
        </AnimatePresence>

        {/* Ripple effect on click */}
        {isAnimating && (
          <motion.div
            className="absolute inset-0 rounded-full bg-primary/30"
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 3, opacity: 0 }}
            transition={{ duration: 0.8 }}
          />
        )}
      </motion.button>

      {/* Confetti particles */}
      <AnimatePresence>
        {showConfetti && (
          <div className="absolute pointer-events-none">
            {Array.from({ length: 12 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full"
                style={{
                  background: i % 2 === 0 ? 'hsl(var(--primary))' : 'hsl(var(--secondary))',
                }}
                initial={{ x: 0, y: 0, opacity: 1 }}
                animate={{
                  x: (Math.random() - 0.5) * 200,
                  y: (Math.random() - 0.5) * 200,
                  opacity: 0,
                  scale: Math.random() * 2 + 0.5,
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
              />
            ))}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Animated counter hook
function useAnimatedCounter(target: number) {
  const [display, setDisplay] = useState(target);
  const prev = useRef(target);

  useEffect(() => {
    const start = prev.current;
    const diff = target - start;
    if (diff === 0) { setDisplay(target); return; }

    const duration = 600;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setDisplay(Math.round(start + diff * eased));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
    prev.current = target;
  }, [target]);

  return display;
}

export default GetConnected;
