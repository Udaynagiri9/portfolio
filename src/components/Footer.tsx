import React from 'react';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { useCursor } from '../context/CursorContext';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const { setCursor, resetCursor } = useCursor();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full bg-[#050506] text-white pt-20 pb-12 px-6 md:px-12 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-zinc-800">
          {/* Left Column: Brand & Title */}
          <div className="md:col-span-6 space-y-4">
            <h3 className="font-display font-black text-3xl sm:text-4xl tracking-tight text-white">
              {PERSONAL_INFO.name}
            </h3>
            <p className="text-zinc-400 font-mono text-xs uppercase tracking-widest leading-relaxed">
              Full Stack Developer <br />
              Creative Designer <br />
              Video Editor
            </p>
            <p className="text-zinc-400 text-xs font-light max-w-sm pt-2">
              Based in Hyderabad, building globally. Specializing in high-cadence digital craft and full stack software.
            </p>
          </div>

          {/* Center Column: Social Links */}
          <div className="md:col-span-4 space-y-3">
            <span className="font-mono text-xs text-zinc-400 uppercase tracking-widest block mb-4">
              CONNECT
            </span>
            <ul className="space-y-2.5 font-mono text-xs">
              <li>
                <a
                  href={PERSONAL_INFO.socialLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={() => setCursor('open', 'IN')}
                  onMouseLeave={resetCursor}
                  className="inline-flex items-center space-x-1.5 text-zinc-300 hover:text-sky-400 transition-colors"
                >
                  <span>LinkedIn (uday-nagiri)</span>
                  <ArrowUpRight size={13} />
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL_INFO.socialLinks.instagram}
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={() => setCursor('open', 'IG')}
                  onMouseLeave={resetCursor}
                  className="inline-flex items-center space-x-1.5 text-zinc-300 hover:text-sky-400 transition-colors"
                >
                  <span>Instagram (@chroma__canvas)</span>
                  <ArrowUpRight size={13} />
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL_INFO.socialLinks.pinterest}
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={() => setCursor('open', 'PINS')}
                  onMouseLeave={resetCursor}
                  className="inline-flex items-center space-x-1.5 text-zinc-300 hover:text-sky-400 transition-colors"
                >
                  <span>Pinterest</span>
                  <ArrowUpRight size={13} />
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL_INFO.socialLinks.github}
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={() => setCursor('open', 'GIT')}
                  onMouseLeave={resetCursor}
                  className="inline-flex items-center space-x-1.5 text-zinc-300 hover:text-sky-400 transition-colors"
                >
                  <span>GitHub (@Udaynagiri9)</span>
                  <ArrowUpRight size={13} />
                </a>
              </li>
            </ul>
          </div>

          {/* Right Column: Back to Top */}
          <div className="md:col-span-2 flex md:justify-end items-start">
            <button
              onClick={scrollToTop}
              onMouseEnter={() => setCursor('open', 'TOP')}
              onMouseLeave={resetCursor}
              className="group inline-flex items-center space-x-2 text-xs font-mono tracking-widest uppercase text-zinc-400 hover:text-white transition-colors"
            >
              <span>BACK TO TOP</span>
              <span className="p-2 rounded-full border border-zinc-800 group-hover:border-sky-400 group-hover:text-sky-400 transition-colors">
                <ArrowUp size={14} className="transform group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </button>
          </div>
        </div>

        {/* Bottom Copyright Meta */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-zinc-400 gap-4">
          <p>© {PERSONAL_INFO.statsYear} {PERSONAL_INFO.name}. All rights reserved.</p>
          <p className="text-[11px] text-zinc-400">
            CRAFTED WITH PRECISION • REACT • TYPESCRIPT • TAILWIND
          </p>
        </div>
      </div>
    </footer>
  );
};
