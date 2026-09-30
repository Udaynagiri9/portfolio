import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, X, Maximize2, Tag, Calendar, Sparkles } from 'lucide-react';
import { useCursor } from '../context/CursorContext';
import { DESIGN_PROJECTS } from '../data/portfolioData';
import { DesignProject } from '../types';

export const DesignSection: React.FC = () => {
  const { setCursor, resetCursor } = useCursor();
  const [selectedDesign, setSelectedDesign] = useState<DesignProject | null>(null);
  const [filter, setFilter] = useState<string>('ALL');

  const categories = [
    'ALL',
    ...Array.from(new Set(DESIGN_PROJECTS.map((d) => d.category))),
  ];

  const filteredDesigns = filter === 'ALL'
    ? DESIGN_PROJECTS
    : DESIGN_PROJECTS.filter((d) => d.category === filter);

  return (
    <section
      id="design"
      className="relative w-full py-28 md:py-40 px-6 md:px-12 bg-[#0c0d11] border-t border-zinc-900"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8 border-b border-zinc-800 pb-8">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono text-sky-400 uppercase tracking-widest mb-3">
              <Palette size={14} />
              <span>// 06. ART DIRECTION & GRAPHICS</span>
            </div>
            <h2 className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tighter text-white">
              DESIGN / VISUALS
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-300 ${
                  filter === cat
                    ? 'bg-pink-400 text-black font-bold'
                    : 'bg-zinc-900/90 text-zinc-400 hover:text-white border border-zinc-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Artistic Masonry Gallery */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredDesigns.map((design) => {
            const aspectClasses = {
              portrait: 'aspect-[3/4]',
              square: 'aspect-square',
              landscape: 'aspect-[4/3]',
              wide: 'aspect-[16/9]',
            }[design.aspectRatio];

            return (
              <div
                key={design.id}
                onClick={() => setSelectedDesign(design)}
                onMouseEnter={() => setCursor('view', 'EXPAND')}
                onMouseLeave={resetCursor}
                className="group relative cursor-pointer rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800/80 break-inside-avoid shadow-xl transition-all duration-500 hover:border-pink-500/50"
              >
                {/* Image */}
                <div className={`relative w-full ${aspectClasses} overflow-hidden`}>
                  <img
                    src={design.image}
                    alt={design.title}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale contrast-110 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Category Pill */}
                  <div className="absolute top-4 left-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-[10px] font-mono uppercase tracking-widest text-pink-400 border border-pink-500/30">
                      {design.category}
                    </span>
                  </div>

                  {/* Expand Icon */}
                  <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center">
                      <Maximize2 size={13} />
                    </div>
                  </div>

                  {/* Bottom Reveal Details */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10 opacity-0 group-hover:opacity-100 transform translate-y-3 group-hover:translate-y-0 transition-all duration-300">
                    <h3 className="font-display font-bold text-xl text-white">
                      {design.title}
                    </h3>
                    <p className="text-xs text-zinc-300 font-light mt-1 line-clamp-2">
                      {design.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {design.tools.map((t, idx) => (
                        <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/60 text-zinc-400 border border-zinc-700">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedDesign && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedDesign(null)}
              className="fixed inset-0 bg-black/92 backdrop-blur-2xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-4xl max-h-[90vh] rounded-3xl bg-[#0e0f14] border border-zinc-800 text-white shadow-2xl z-10 overflow-hidden flex flex-col md:flex-row"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedDesign(null)}
                className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-black/70 hover:bg-white hover:text-black transition-colors"
                aria-label="Close lightbox"
              >
                <X size={18} />
              </button>

              {/* Lightbox Image View */}
              <div className="md:w-3/5 bg-black flex items-center justify-center p-4 overflow-hidden">
                <img
                  src={selectedDesign.image}
                  alt={selectedDesign.title}
                  className="max-h-[75vh] w-auto object-contain rounded-xl"
                />
              </div>

              {/* Lightbox Information Sidebar */}
              <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between border-t md:border-t-0 md:border-l border-zinc-800">
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                    <span className="text-pink-400 uppercase tracking-widest">{selectedDesign.category}</span>
                    <span>{selectedDesign.year}</span>
                  </div>

                  <h3 className="font-display font-bold text-2xl text-white">
                    {selectedDesign.title}
                  </h3>

                  <p className="text-sm text-zinc-300 font-light leading-relaxed">
                    {selectedDesign.description}
                  </p>

                  <div className="pt-2">
                    <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider block mb-2">Tools & Technique</span>
                    <div className="flex flex-wrap gap-2">
                      {selectedDesign.tools.map((tool, i) => (
                        <span key={i} className="text-xs font-mono px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-zinc-800/80">
                  <a
                    href="https://www.instagram.com/chroma__canvas"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full inline-flex items-center justify-center py-3 rounded-full bg-pink-400 text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-white transition-colors"
                  >
                    EXPLORE ON CHROMA CANVAS
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
