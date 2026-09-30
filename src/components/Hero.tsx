import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Sparkles, Terminal, Film, Palette, FileText, Download, MapPin } from 'lucide-react';
import { useCursor } from '../context/CursorContext';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const { setCursor, resetCursor } = useCursor();
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.8], [1, 0.96]);
  const heroY = useTransform(scrollYProgress, [0, 0.8], [0, 80]);

  // Subtle interactive particle/starfield canvas for cinematic atmosphere
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const nodeCount = Math.floor(Math.min(width, 1400) / 36);
    const nodes = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      size: Math.random() * 1.6 + 0.6,
      alpha: Math.random() * 0.35 + 0.1,
    }));

    let mouse = { x: -1000, y: -1000 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw faint connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(56, 189, 248, ${0.07 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw & update nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;

        if (n.x < 0) n.x = width;
        if (n.x > width) n.x = 0;
        if (n.y < 0) n.y = height;
        if (n.y > height) n.y = 0;

        const mdx = n.x - mouse.x;
        const mdy = n.y - mouse.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < 130) {
          n.x += (mdx / mdist) * 1.2;
          n.y += (mdy / mdist) * 1.2;
        }

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(226, 232, 240, ${n.alpha})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100svh] w-full flex flex-col justify-between pt-24 sm:pt-28 pb-8 sm:pb-12 px-4 sm:px-6 md:px-12 overflow-hidden bg-[#070708]"
    >
      {/* Background Interactive Kinetic Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-60"
      />

      {/* Cinematic subtle glow gradients */}
      <div className="absolute top-1/4 -left-32 w-80 h-80 sm:w-96 sm:h-96 bg-sky-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 -right-32 w-80 h-80 sm:w-[28rem] sm:h-[28rem] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Top Meta Bar */}
      <motion.div
        style={{ opacity: heroOpacity }}
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="relative z-10 flex flex-wrap items-center justify-between text-[11px] sm:text-xs font-mono text-zinc-400 border-b border-white/[0.08] pb-4 sm:pb-5 gap-3"
      >
        <div className="flex items-center space-x-2.5">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="tracking-widest uppercase text-zinc-300">
            Available For Commissions & Roles
          </span>
        </div>

        <div className="flex items-center space-x-4 sm:space-x-6 text-[10px] sm:text-[11px] tracking-widest text-zinc-400 uppercase">
          <span className="flex items-center space-x-1">
            <MapPin size={11} className="text-sky-400" />
            <span>VIZIANAGARAM, IN</span>
          </span>
          <span className="hidden sm:inline">CSE • B.TECH</span>
          <span className="text-zinc-200">PORTFOLIO // 2026</span>
        </div>
      </motion.div>

      {/* Main Hero Center Content */}
      <motion.div
        style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
        className="relative z-10 my-auto py-8 sm:py-12"
      >
        {/* Profile Avatar Teaser & Discipline Badges */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-6 sm:mb-8"
        >
          {/* Real Photo Thumbnail Avatar */}
          <div className="flex items-center space-x-2.5 px-3 py-1.5 rounded-full glass-pill border border-white/10">
            <img
              src={PERSONAL_INFO.avatarImage}
              alt="Uday Nagiri"
              className="w-6 h-6 rounded-full object-cover border border-sky-400/60"
            />
            <span className="text-[11px] font-mono text-zinc-200 tracking-wider">UDAY NAGIRI</span>
          </div>

          <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full glass-pill text-[11px] font-mono text-zinc-300">
            <Terminal size={12} className="text-sky-400" />
            <span className="tracking-wider">FULL STACK</span>
          </div>

          <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full glass-pill text-[11px] font-mono text-zinc-300">
            <Palette size={12} className="text-pink-400" />
            <span className="tracking-wider">CREATIVE</span>
          </div>

          <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full glass-pill text-[11px] font-mono text-zinc-300">
            <Film size={12} className="text-amber-400" />
            <span className="tracking-wider">VIDEO</span>
          </div>
        </motion.div>

        {/* Oversized Name Headline with Fluid Responsiveness */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 90, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="font-display font-black hero-title text-white select-none"
            onMouseEnter={() => setCursor('open', 'UDAY')}
            onMouseLeave={resetCursor}
          >
            NAGIRI UDAY
          </motion.h1>
        </div>

        {/* Main Tagline */}
        <div className="mt-4 sm:mt-8 max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg sm:text-2xl md:text-3xl font-light text-zinc-200 leading-snug tracking-tight"
          >
            {PERSONAL_INFO.mainTagline}
          </motion.p>
        </div>

        {/* Actions: Selected Work + Resume Download + Film */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3 sm:gap-4"
        >
          <a
            href="#selected-work"
            onMouseEnter={() => setCursor('view')}
            onMouseLeave={resetCursor}
            className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 text-xs font-mono tracking-widest uppercase bg-white text-black font-bold rounded-full transition-all duration-300 hover:bg-sky-400 shadow-xl"
          >
            <span className="flex items-center space-x-2">
              <span>EXPLORE WORK</span>
              <Sparkles size={14} className="transition-transform group-hover:rotate-45" />
            </span>
          </a>

          <a
            href={PERSONAL_INFO.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            download="Nagiri_Uday_Resume.pdf"
            onMouseEnter={() => setCursor('open', 'PDF')}
            onMouseLeave={resetCursor}
            className="glass-button inline-flex items-center space-x-2 px-5 sm:px-7 py-3.5 sm:py-4 text-xs font-mono tracking-widest uppercase text-white rounded-full transition-all duration-300"
          >
            <FileText size={14} className="text-sky-400" />
            <span>RESUME (PDF)</span>
            <Download size={12} className="opacity-70" />
          </a>

          <a
            href="#film"
            onMouseEnter={() => setCursor('play')}
            onMouseLeave={resetCursor}
            className="glass-pill inline-flex items-center space-x-2 px-5 sm:px-6 py-3.5 sm:py-4 text-xs font-mono tracking-widest uppercase text-zinc-300 hover:text-white rounded-full transition-all duration-300"
          >
            <Film size={14} className="text-amber-400" />
            <span>FILM REEL</span>
          </a>
        </motion.div>
      </motion.div>

      {/* Bottom Scroll Indicator & Experience Quick Tag */}
      <motion.div
        style={{ opacity: heroOpacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.85 }}
        className="relative z-10 flex items-center justify-between pt-4 sm:pt-6 border-t border-white/[0.08]"
      >
        <a
          href="#about"
          onMouseEnter={() => setCursor('open', 'DOWN ↓')}
          onMouseLeave={resetCursor}
          className="group flex items-center space-x-2.5 text-[11px] sm:text-xs font-mono tracking-widest uppercase text-zinc-400 hover:text-sky-400 transition-colors"
        >
          <span className="animate-bounce">
            <ArrowDown size={13} />
          </span>
          <span>SCROLL TO EXPLORE ↓</span>
        </a>

        <div className="hidden md:flex items-center space-x-6 text-[11px] font-mono text-zinc-500 uppercase tracking-widest">
          <span>NETMAXIN GROUP • FEB 2024 - PRESENT</span>
        </div>
      </motion.div>
    </section>
  );
};
