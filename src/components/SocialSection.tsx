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
      color: 'hover:text-sky-400',
    },
    {
      platform: 'INSTAGRAM',
      handle: '@chroma__canvas',
      sub: 'Visual Art, Posters & Reels',
      url: PERSONAL_INFO.socialLinks.instagram,
      color: 'hover:text-pink-400',
    },
    {
      platform: 'PINTEREST',
      handle: 'Chroma Canvas Pins',
      sub: 'Moodboards, Typography & Inspiration',
      url: PERSONAL_INFO.socialLinks.pinterest,
      color: 'hover:text-red-400',
    },
    {
      platform: 'GITHUB',
      handle: '@Udaynagiri9',
      sub: 'Open Source, Repos & Architectures',
      url: PERSONAL_INFO.socialLinks.github,
      color: 'hover:text-sky-400',
    },
  ];

  return (
    <section
      id="connect"
      className="relative w-full py-28 md:py-36 px-6 md:px-12 bg-[#070708] border-t border-zinc-900"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center space-x-2 text-xs font-mono text-sky-400 uppercase tracking-widest mb-6">
          <Share2 size={14} />
          <span>// 11. SOCIAL CHANNELS</span>
        </div>

        <h2 className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tighter text-white mb-16">
          LET’S CONNECT
        </h2>

        {/* Big Interactive Social Links */}
        <div className="divide-y divide-zinc-800">
          {socialLinks.map((item, idx) => (
            <a
              key={item.platform}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => setCursor('open', item.platform)}
              onMouseLeave={resetCursor}
              className={`group block py-10 sm:py-14 transition-colors duration-300 ${item.color}`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <span className="font-mono text-xs text-zinc-500 block mb-2">0{idx + 1} — {item.platform}</span>
                  <span className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white group-hover:text-current transition-colors">
                    {item.handle}
                  </span>
                  <span className="font-mono text-xs text-zinc-400 block mt-2">
                    {item.sub}
                  </span>
                </div>

                <div className="flex items-center space-x-4">
                  <span className="text-xs font-mono tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity text-zinc-400">
                    VISIT PLATFORM
                  </span>
                  <div className="w-16 h-16 rounded-full border border-zinc-800 flex items-center justify-center text-white group-hover:border-current group-hover:bg-white/10 transition-all duration-300">
                    <ArrowUpRight size={24} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
