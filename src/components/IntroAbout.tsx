import React from 'react';
import { motion } from 'framer-motion';
import { Code, Sparkles, Video, ArrowUpRight, GraduationCap, Briefcase, Award, Download, FileText, CheckCircle2 } from 'lucide-react';
import { useCursor } from '../context/CursorContext';
import { PERSONAL_INFO } from '../data/portfolioData';

export const IntroAbout: React.FC = () => {
  const { setCursor, resetCursor } = useCursor();

  return (
    <section
      id="about"
      className="relative w-full py-24 sm:py-32 md:py-40 px-4 sm:px-6 md:px-12 bg-[#0c0d10] border-t border-zinc-900 overflow-hidden"
    >
      {/* Editorial Watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 pointer-events-none select-none text-[18vw] font-display font-black text-white/[0.015] leading-none whitespace-nowrap">
        UDAY
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header Meta */}
        <div className="flex items-center space-x-3 text-xs font-mono tracking-widest text-sky-400 uppercase mb-8 sm:mb-12">
          <span>// 01. IDENTITY & CREDENTIALS</span>
        </div>

        {/* Large Typography Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Heading & About */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] tracking-tight text-white">
              “Developer by logic.{' '}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-zinc-200 to-indigo-300">
                Creative by instinct.”
              </span>
            </h2>

            <div className="pt-2 max-w-2xl">
              <p className="text-base sm:text-lg md:text-xl text-zinc-300 leading-relaxed font-light">
                {PERSONAL_INFO.aboutIntroText}
              </p>
            </div>

            {/* Resume Callout & Experience Highlights Card (Glassmorphism) */}
            <div id="experience" className="p-6 sm:p-8 rounded-2xl glass-card border border-white/[0.08] space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
                    <Briefcase size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-sky-400">Current Role</span>
                    <h4 className="font-display font-bold text-white text-base sm:text-lg">{PERSONAL_INFO.experience.role}</h4>
                  </div>
                </div>

                <div className="text-right">
                  <span className="font-mono text-xs text-white block">{PERSONAL_INFO.experience.company}</span>
                  <span className="font-mono text-[11px] text-zinc-400">{PERSONAL_INFO.experience.period}</span>
                </div>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-zinc-300">
                {PERSONAL_INFO.experience.highlights.map((h, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <CheckCircle2 size={13} className="text-sky-400 flex-shrink-0 mt-0.5" />
                    <span className="font-light">{h}</span>
                  </li>
                ))}
              </ul>

              {/* Education & Degree Bar */}
              <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                    <GraduationCap size={18} />
                  </div>
                  <div>
                    <h5 className="font-display font-semibold text-xs sm:text-sm text-white">
                      {PERSONAL_INFO.education.degree} ({PERSONAL_INFO.education.period})
                    </h5>
                    <p className="text-[11px] font-mono text-zinc-400">{PERSONAL_INFO.education.specialization}</p>
                  </div>
                </div>

                <a
                  href={PERSONAL_INFO.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Nagiri_Uday_Resume.pdf"
                  onMouseEnter={() => setCursor('open', 'CV')}
                  onMouseLeave={resetCursor}
                  className="glass-button px-4 py-2 rounded-xl text-xs font-mono text-sky-400 hover:text-white flex items-center space-x-2"
                >
                  <FileText size={13} />
                  <span>DOWNLOAD FULL RESUME</span>
                  <Download size={12} />
                </a>
              </div>
            </div>

            {/* Certifications Glass Strip */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider flex items-center space-x-2">
                <Award size={13} className="text-amber-400" />
                <span>Verified Certifications & Specializations</span>
              </span>
              <div className="flex flex-wrap gap-2">
                {PERSONAL_INFO.certifications.map((cert, cIdx) => (
                  <span
                    key={cIdx}
                    className="px-3 py-1.5 rounded-lg glass-pill text-[11px] font-mono text-zinc-300 border border-white/5"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Creative Visual Card with Real Photo */}
          <div className="lg:col-span-5 relative w-full max-w-md mx-auto lg:max-w-none">
            <div
              className="group relative rounded-3xl overflow-hidden glass-card p-3 shadow-2xl transition-all duration-700 hover:border-sky-500/50"
              onMouseEnter={() => setCursor('view', 'UDAY')}
              onMouseLeave={resetCursor}
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-zinc-900">
                <img
                  src={PERSONAL_INFO.avatarImage}
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover contrast-105 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                {/* Floating Glass Badge */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 flex items-center justify-between">
                  <div>
                    <p className="text-[11px] font-mono text-sky-400 uppercase tracking-widest font-semibold">
                      {PERSONAL_INFO.name}
                    </p>
                    <p className="text-xs sm:text-sm font-display font-bold text-white">
                      Full Stack • Creative • Video
                    </p>
                    <p className="text-[10px] font-mono text-zinc-400 mt-0.5">
                      {PERSONAL_INFO.location}
                    </p>
                  </div>

                  <a
                    href={PERSONAL_INFO.socialLinks.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-full bg-white/10 hover:bg-sky-400 hover:text-black transition-colors"
                    aria-label="View GitHub"
                  >
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>

              <div className="p-4 flex items-center justify-between text-xs font-mono text-zinc-400">
                <span>NETMAXIN GROUP FEB 2024 - PRESENT</span>
                <span className="text-sky-400">2023 - 2027 CSE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
