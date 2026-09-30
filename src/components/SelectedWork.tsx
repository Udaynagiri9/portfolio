import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, ExternalLink, Eye } from 'lucide-react';
import { useCursor } from '../context/CursorContext';
import { SELECTED_WORK } from '../data/portfolioData';
import { Project, ProjectCategory } from '../types';
import { ProjectModal } from './ProjectModal';

export const SelectedWork: React.FC = () => {
  const { setCursor, resetCursor } = useCursor();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const categories = ['ALL', ...Array.from(new Set(SELECTED_WORK.map((p) => p.category)))];

  const filteredProjects = activeCategory === 'ALL'
    ? SELECTED_WORK
    : SELECTED_WORK.filter((p) => p.category === activeCategory);

  return (
    <section
      id="selected-work"
      className="relative w-full py-24 sm:py-32 md:py-40 px-4 sm:px-6 md:px-12 bg-[#070708] border-t border-zinc-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-16 gap-6 sm:gap-8 border-b border-white/[0.08] pb-6 sm:pb-8">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono text-sky-400 uppercase tracking-widest mb-3">
              <Sparkles size={14} />
              <span>// 03. CURATED SHOWCASE</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tighter text-white">
              SELECTED WORK
            </h2>
          </div>

          {/* Filter Pills with Glassmorphism */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 sm:px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-white text-black font-bold shadow-lg shadow-white/10'
                    : 'glass-pill text-zinc-300 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Asymmetric Project List */}
        <div className="space-y-16 sm:space-y-24 md:space-y-36">
          {filteredProjects.map((project, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div
                key={project.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-16 items-center ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Large Visual Card */}
                <div
                  className={`lg:col-span-7 group cursor-pointer relative ${
                    isEven ? 'order-1' : 'order-1 lg:order-2'
                  }`}
                  onClick={() => setSelectedProject(project)}
                  onMouseEnter={() => setCursor('view', 'PROJECT')}
                  onMouseLeave={resetCursor}
                >
                  <div className="relative aspect-[16/10] w-full rounded-2xl sm:rounded-3xl overflow-hidden glass-panel border border-white/10 shadow-2xl transition-all duration-700 group-hover:border-sky-500/60 group-hover:shadow-sky-500/10">
                    <img
                      src={project.heroImage}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />

                    {/* Corner Tag */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 rounded-full glass-pill text-[10px] font-mono uppercase tracking-widest text-sky-400 font-semibold">
                        {project.category}
                      </span>
                    </div>

                    {/* Hover Click Indicator */}
                    <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-10 opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300 transform sm:translate-y-2 sm:group-hover:translate-y-0">
                      <div className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-sky-400 text-black text-xs font-mono font-bold uppercase tracking-wider flex items-center space-x-1.5 shadow-xl">
                        <Eye size={13} />
                        <span>Inspect Case</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Editorial Content */}
                <div
                  className={`lg:col-span-5 space-y-4 sm:space-y-6 ${
                    isEven ? 'order-2' : 'order-2 lg:order-1'
                  }`}
                >
                  <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                    <span className="font-mono text-xs text-sky-400 tracking-widest uppercase">
                      CASE NO. {project.number}
                    </span>
                    <span className="font-mono text-xs text-zinc-400">
                      // {project.year}
                    </span>
                  </div>

                  <h3
                    onClick={() => setSelectedProject(project)}
                    className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl text-white hover:text-sky-300 transition-colors cursor-pointer tracking-tight"
                  >
                    {project.title}
                  </h3>

                  <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-light">
                    {project.description}
                  </p>

                  {/* Tool Tags */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
                    {project.tools.map((tool, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 text-[11px] font-mono rounded-lg glass-pill text-zinc-300"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="pt-2 sm:pt-4 flex items-center space-x-4">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="group inline-flex items-center space-x-2 text-xs font-mono tracking-widest uppercase text-white hover:text-sky-400 transition-colors"
                    >
                      <span className="border-b border-white group-hover:border-sky-400 pb-0.5">
                        VIEW CASE STUDY
                      </span>
                      <ArrowUpRight size={15} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
