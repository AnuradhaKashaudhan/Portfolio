import { useEffect, useRef } from 'react';

const SkillsBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: {x: number, y: number, vx: number, vy: number}[] = [];

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        // High DPI support for sharp canvas rendering
        const dpr = window.devicePixelRatio || 1;
        canvas.width = parent.clientWidth * dpr;
        canvas.height = parent.clientHeight * dpr;
        ctx.scale(dpr, dpr);
        canvas.style.width = `${parent.clientWidth}px`;
        canvas.style.height = `${parent.clientHeight}px`;
        
        initParticles(parent.clientWidth, parent.clientHeight);
      }
    };

    const initParticles = (width: number, height: number) => {
      particles = [];
      const particleCount = Math.floor((width * height) / 20000); 
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
        });
      }
    };

    const drawParticles = () => {
      // Assuming parent scaling
      const width = canvas.parentElement?.clientWidth || canvas.width;
      const height = canvas.parentElement?.clientHeight || canvas.height;
      
      ctx.clearRect(0, 0, width, height);

      // We use CSS variable colors for dark/light mode compatibility
      const isDark = document.documentElement.classList.contains('dark');
      const RGBColor = isDark ? '255, 255, 255' : '100, 100, 255'; 

      particles.forEach((p, i) => {
        ctx.fillStyle = `rgba(${RGBColor}, 0.5)`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${RGBColor}, ${0.15 * (1 - dist / 120)})`;
            ctx.lineWidth = 1;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(drawParticles);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    drawParticles();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Subtle blend gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <canvas ref={canvasRef} className="absolute inset-0 opacity-40 mix-blend-screen" />
    </div>
  );
};

export default SkillsBackground;
