import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Github, ExternalLink, Code2, Database, Smartphone, Layers, CheckCircle } from 'lucide-react';
import { useCursor } from '../context/CursorContext';
import { DEV_PROJECTS, PERSONAL_INFO } from '../data/portfolioData';

export const DevelopmentSection: React.FC = () => {
  const { setCursor, resetCursor } = useCursor();

  const devStack = [
    { name: 'Next.js & React', icon: '01' },
    { name: 'JavaScript (ES6+)', icon: '02' },
    { name: 'Python', icon: '03' },
    { name: 'Node.js & Express', icon: '04' },
    { name: 'MongoDB', icon: '05' },
    { name: 'MySQL', icon: '06' },
    { name: 'C & C++', icon: '07' },
    { name: 'Tailwind CSS', icon: '08' },
    { name: 'REST APIs', icon: '09' },
    { name: 'Git & GitHub', icon: '10' },
  ];

  return (
    <section
      id="development"
      className="relative w-full py-24 sm:py-32 md:py-36 px-4 sm:px-6 md:px-12 bg-[#0a0b0e] border-t border-zinc-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-12 sm:mb-16 border-b border-white/[0.08] pb-6 sm:pb-8">
          <div className="lg:col-span-8">
            <div className="flex items-center space-x-2 text-xs font-mono text-sky-400 uppercase tracking-widest mb-3">
              <Terminal size={14} />
              <span>// 04. ENGINEERING ARCHITECTURE</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tighter text-white">
              DIGITAL / DEVELOPMENT
            </h2>
          </div>

          <div className="lg:col-span-4 flex lg:justify-end">
            <a
              href={PERSONAL_INFO.socialLinks.github}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => setCursor('open', 'GITHUB')}
              onMouseLeave={resetCursor}
              className="glass-button inline-flex items-center space-x-2 px-5 py-3 rounded-full text-white font-mono text-xs uppercase tracking-wider transition-all"
            >
              <Github size={16} className="text-sky-400" />
              <span>VISIT GITHUB PROFILE</span>
            </a>
          </div>
        </div>

        {/* Developer Introduction & Tech Strip */}
        <div className="mb-14 sm:mb-20 space-y-6 sm:space-y-8">
          <p className="text-lg sm:text-xl md:text-2xl text-zinc-300 font-light max-w-4xl leading-relaxed">
            Specializing in resilient web applications (Next.js, React, Node.js, MERN), robust RESTful APIs, and secure database modeling with high performance standards and clean architecture.
          </p>

          {/* Interactive Glass Tech Badge Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5 sm:gap-3 pt-2">
            {devStack.map((tech) => (
              <div
                key={tech.name}
                onMouseEnter={() => setCursor('view', tech.name)}
                onMouseLeave={resetCursor}
                className="group p-3 rounded-xl glass-pill flex items-center justify-between"
              >
                <span className="font-mono text-xs text-zinc-300 group-hover:text-white transition-colors truncate">
                  {tech.name}
                </span>
                <span className="text-[10px] font-mono text-zinc-600 group-hover:text-sky-400 transition-colors ml-2">
                  {tech.icon}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Development Projects Detailed Cards */}
        <div className="space-y-8 sm:space-y-12">
          {DEV_PROJECTS.map((proj) => (
            <div
              key={proj.id}
              className="rounded-3xl glass-card p-5 sm:p-8 md:p-10"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
                {/* Project Image Preview */}
                <div className="lg:col-span-5 relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-zinc-950">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-mono uppercase tracking-widest text-sky-400 border border-white/10">
                    {proj.category}
                  </div>
                </div>

                {/* Project Breakdown Details */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/[0.08] pb-3">
                    <h3 className="font-display font-bold text-xl sm:text-2xl md:text-3xl text-white">
                      {proj.title}
                    </h3>
                    <span className="text-xs font-mono text-sky-400 uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-sky-950/40 border border-sky-800/40">
                      ROLE: {proj.role}
                    </span>
                  </div>

                  {/* Problem & Solution Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs font-light">
                    <div className="space-y-1.5 p-3.5 rounded-xl bg-black/40 border border-white/5">
                      <span className="font-mono text-zinc-400 uppercase tracking-widest block text-[10px]">
                        The Problem
                      </span>
                      <p className="text-zinc-300 leading-relaxed">{proj.problem}</p>
                    </div>

                    <div className="space-y-1.5 p-3.5 rounded-xl bg-black/40 border border-white/5">
                      <span className="font-mono text-emerald-400 uppercase tracking-widest block text-[10px]">
                        The Solution
                      </span>
                      <p className="text-zinc-300 leading-relaxed">{proj.solution}</p>
                    </div>
                  </div>

                  {/* Outcome Highlight */}
                  <div className="p-3.5 rounded-xl bg-sky-950/30 border border-sky-900/40 flex items-start space-x-3">
                    <CheckCircle size={16} className="text-sky-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-sky-400 block mb-0.5">Outcome</span>
                      <p className="text-xs text-zinc-200">{proj.outcome}</p>
                    </div>
                  </div>

                  {/* Tech Stack Pills & Actions */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
                    <div className="flex flex-wrap gap-1.5">
                      {proj.technology.map((t, tidx) => (
                        <span
                          key={tidx}
                          className="px-2.5 py-1 text-[11px] font-mono rounded-lg glass-pill text-zinc-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center space-x-3 pt-2 sm:pt-0">
                      <a
                        href={proj.live}
                        target="_blank"
                        rel="noreferrer"
                        onMouseEnter={() => setCursor('open')}
                        onMouseLeave={resetCursor}
                        className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-full bg-white text-black font-mono text-xs uppercase font-bold hover:bg-sky-400 transition-colors"
                      >
                        <span>VIEW PROJECT</span>
                        <ExternalLink size={12} />
                      </a>

                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noreferrer"
                        onMouseEnter={() => setCursor('open')}
                        onMouseLeave={resetCursor}
                        className="glass-button inline-flex items-center space-x-1.5 px-4 py-2 rounded-full text-zinc-300 hover:text-white font-mono text-xs uppercase transition-colors"
                      >
                        <Github size={12} />
                        <span>VIEW CODE</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
