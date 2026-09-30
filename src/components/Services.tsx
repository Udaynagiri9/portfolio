import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { useCursor } from '../context/CursorContext';
import { SERVICES_DATA } from '../data/portfolioData';

export const Services: React.FC = () => {
  const { setCursor, resetCursor } = useCursor();
  const [activeServiceIndex, setActiveServiceIndex] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      id="services"
      className="relative w-full py-28 md:py-36 px-6 md:px-12 bg-[#070708] border-t border-zinc-900 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-zinc-800 pb-8">
          <div>
            <span className="text-xs font-mono text-sky-400 tracking-widest uppercase block mb-3">
              // 02. CAPABILITIES & VALUE
            </span>
            <h2 className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tighter text-white">
              WHAT I DO
            </h2>
          </div>
          <p className="text-zinc-400 font-mono text-xs sm:text-sm max-w-sm mt-4 md:mt-0 tracking-wide">
            Combining engineering precision with aesthetic vision to deliver holistic digital solutions.
          </p>
        </div>

        {/* Interactive Floating Hover Image Reveal (Desktop) */}
        <div className="hidden lg:block pointer-events-none fixed z-30 transition-transform duration-100 ease-out"
          style={{
            left: `${mousePos.x + 28}px`,
            top: `${mousePos.y - 120}px`,
            position: 'absolute',
          }}
        >
          <AnimatePresence>
            {activeServiceIndex !== null && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -4 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotate: 4 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="w-80 h-48 rounded-xl overflow-hidden shadow-2xl border border-white/20 bg-zinc-900"
              >
                <img
                  src={SERVICES_DATA[activeServiceIndex].previewImage}
                  alt={SERVICES_DATA[activeServiceIndex].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-sky-400 bg-black/60 px-2 py-1 rounded">
                    {SERVICES_DATA[activeServiceIndex].accentWord}
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Services Editorial List */}
        <div className="divide-y divide-zinc-800/80">
          {SERVICES_DATA.map((service, index) => {
            const isHovered = activeServiceIndex === index;

            return (
              <div
                key={service.number}
                onMouseEnter={() => {
                  setActiveServiceIndex(index);
                  setCursor('view', service.accentWord);
                }}
                onMouseLeave={() => {
                  setActiveServiceIndex(null);
                  resetCursor();
                }}
                className="group py-8 md:py-12 transition-all duration-300 cursor-pointer"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline">
                  {/* Service Number */}
                  <div className="lg:col-span-2 font-mono text-zinc-500 text-sm md:text-base group-hover:text-sky-400 transition-colors">
                    {service.number} —
                  </div>

                  {/* Title */}
                  <div className="lg:col-span-5">
                    <h3 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white group-hover:text-sky-300 group-hover:translate-x-3 transition-all duration-300">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description & Deliverables */}
                  <div className="lg:col-span-4 space-y-3">
                    <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light">
                      {service.description}
                    </p>

                    {/* Deliverables tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {service.deliverables.map((item, dIdx) => (
                        <span
                          key={dIdx}
                          className="inline-flex items-center space-x-1.5 text-[11px] font-mono px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-400 group-hover:border-zinc-700 transition-colors"
                        >
                          <CheckCircle2 size={11} className="text-sky-400" />
                          <span>{item}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow Icon */}
                  <div className="lg:col-span-1 flex justify-end">
                    <div className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-500 group-hover:text-black group-hover:bg-sky-400 group-hover:border-sky-400 transition-all duration-300">
                      <ArrowUpRight size={18} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>

                {/* Mobile Preview Image (visible on mobile only) */}
                <div className="mt-4 block lg:hidden rounded-lg overflow-hidden h-40 w-full relative">
                  <img
                    src={service.previewImage}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
