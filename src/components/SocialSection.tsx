import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Instagram, Linkedin, Share2 } from 'lucide-react';
import { useCursor } from '../context/CursorContext';
import { PERSONAL_INFO } from '../data/portfolioData';

export const SocialSection: React.FC = () => {
  const { setCursor, resetCursor } = useCursor();

  const socialLinks = [
    {
      platform: 'LINKEDIN',
      handle: 'uday-nagiri-5205a22a1',
      sub: 'Professional Network, Career & Engineering Updates',
      url: PERSONAL_INFO.socialLinks.linkedin,
      icon: <Linkedin size={18} />,
      color: 'hover:text-sky-400',
    },
    {
      platform: 'INSTAGRAM',
      handle: '@chroma__canvas',
      sub: 'Visual Art, Posters & Reels',
      url: PERSONAL_INFO.socialLinks.instagram,
      icon: <Instagram size={18} />,
      color: 'hover:text-pink-400',
    },
    {
      platform: 'PINTEREST',
      handle: 'Chroma Canvas Pins',
      sub: 'Moodboards, Typography & Inspiration',
      url: PERSONAL_INFO.socialLinks.pinterest,
      icon: <Share2 size={18} />,
      color: 'hover:text-red-400',
    },
    {
      platform: 'GITHUB',
      handle: '@Udaynagiri9',
      sub: 'Open Source, Repos & Architectures',
      url: PERSONAL_INFO.socialLinks.github,
      icon: <Github size={18} />,
      color: 'hover:text-sky-400',
    },
  ];

  return (
    <section
      id="connect"
      className="relative w-full py-24 sm:py-32 px-6 md:px-12 bg-[#070708] border-t border-zinc-900"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center space-x-2 text-xs font-mono text-sky-400 uppercase tracking-widest mb-6">
          <Share2 size={14} />
          <span>// 11. SOCIAL CHANNELS</span>
        </div>

        <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl tracking-tighter text-white mb-10 sm:mb-12">
          LET’S CONNECT
        </h2>

        {/* Refined Interactive Social Links */}
        <div className="space-y-3 sm:space-y-3.5">
          {socialLinks.map((item, idx) => (
            <a
              key={item.platform}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => setCursor('open', item.platform)}
              onMouseLeave={resetCursor}
              className="group block p-5 sm:p-6 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.06] hover:border-sky-500/40 transition-all duration-300 shadow-lg hover:shadow-sky-500/5 hover:-translate-y-0.5"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start sm:items-center space-x-4">
                  {/* Platform Icon Badge */}
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-400/20 flex items-center justify-center text-sky-400 group-hover:bg-sky-400/20 group-hover:border-sky-400/50 group-hover:text-white transition-all duration-300 shrink-0">
                    {item.icon}
                  </div>

                  <div>
                    <div className="flex items-center space-x-2.5 mb-1">
                      <span className="font-mono text-[11px] text-zinc-500 tracking-widest uppercase">
                        0{idx + 1} // {item.platform}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-base sm:text-lg md:text-xl text-white group-hover:text-sky-300 transition-colors tracking-tight">
                      {item.handle}
                    </h3>
                    <p className="font-mono text-xs text-zinc-400 mt-0.5 font-light">
                      {item.sub}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 self-end sm:self-center shrink-0">
                  <span className="text-[11px] font-mono tracking-widest uppercase text-zinc-500 group-hover:text-sky-400 transition-colors hidden md:inline-block">
                    CONNECT
                  </span>
                  <div className="w-9 h-9 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center text-zinc-400 group-hover:text-black group-hover:bg-sky-400 group-hover:border-sky-400 transition-all duration-300 shadow-md">
                    <ArrowUpRight size={16} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
