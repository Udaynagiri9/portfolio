import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Palette, Film, ShieldCheck, Sparkles } from 'lucide-react';
import { useCursor } from '../context/CursorContext';
import { SKILL_GROUPS } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const { setCursor, resetCursor } = useCursor();
  const [activeGroupIndex, setActiveGroupIndex] = useState<number>(0);

  const icons = [Terminal, Palette, Film, ShieldCheck];

  return (
    <section
      id="skills"
      className="relative w-full py-24 sm:py-32 md:py-36 px-4 sm:px-6 md:px-12 bg-[#0a0b0e] border-t border-zinc-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6 border-b border-white/[0.08] pb-6 sm:pb-8">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono text-sky-400 uppercase tracking-widest mb-3">
              <Sparkles size={14} />
              <span>// 08. TECHNICAL & CREATIVE TOOLKIT</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tighter text-white">
              CORE SKILLS
            </h2>
          </div>

          <p className="text-zinc-400 font-mono text-xs sm:text-sm max-w-xs">
            Refined toolsets across full-stack engineering, aesthetics, motion, and blockchain/AI fundamentals.
          </p>
        </div>

        {/* Tab Selector for Fast Navigation */}
        <div className="flex flex-wrap gap-2.5 sm:gap-3 mb-8 sm:mb-12">
          {SKILL_GROUPS.map((group, idx) => {
            const Icon = icons[idx % icons.length];
            const isActive = activeGroupIndex === idx;

            return (
              <button
                key={group.category}
                onClick={() => setActiveGroupIndex(idx)}
                className={`flex items-center space-x-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl text-xs font-mono tracking-wider transition-all duration-300 ${
                  isActive
                    ? 'bg-white text-black font-bold shadow-xl scale-[1.02]'
                    : 'glass-pill text-zinc-300 hover:text-white'
                }`}
              >
                <Icon size={14} className={isActive ? 'text-black' : 'text-sky-400'} />
                <span className="truncate">{group.category}</span>
              </button>
            );
          })}
        </div>

        {/* Active Skill Group Detail */}
        <div className="rounded-3xl glass-card p-6 sm:p-10 md:p-12 shadow-2xl">
          <div className="mb-8">
            <span className="text-xs font-mono text-sky-400 uppercase tracking-widest">
              DISCIPLINE // 0{activeGroupIndex + 1}
            </span>
            <h3 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-white mt-1">
              {SKILL_GROUPS[activeGroupIndex].category}
            </h3>
            <p className="text-sm sm:text-base text-zinc-300 font-light mt-2 max-w-2xl">
              {SKILL_GROUPS[activeGroupIndex].description}
            </p>
          </div>

          {/* Interactive Skill Tags Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
            {SKILL_GROUPS[activeGroupIndex].skills.map((skill, sIdx) => (
              <div
                key={sIdx}
                onMouseEnter={() => setCursor('view', skill.name)}
                onMouseLeave={resetCursor}
                className="group p-4 rounded-xl bg-black/40 border border-white/5 hover:border-sky-400/60 transition-all duration-300 flex flex-col justify-between h-24 sm:h-28"
              >
                <div className="flex items-center justify-between">
                  <span className="w-2 h-2 rounded-full bg-sky-400 group-hover:scale-125 transition-transform" />
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                    {skill.level || 'PROFICIENT'}
                  </span>
                </div>

                <div>
                  <h4 className="font-display font-semibold text-sm sm:text-base text-white group-hover:text-sky-300 transition-colors">
                    {skill.name}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
