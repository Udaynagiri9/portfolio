import React from 'react';
import { Terminal, Palette, Film, TrendingUp, Plus } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const BrandMindset: React.FC = () => {
  return (
    <section className="relative w-full py-24 sm:py-32 md:py-40 px-4 sm:px-6 md:px-12 bg-[#f4f3ef] text-[#0d0e12] overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none text-[22vw] font-display font-black text-black/[0.03] leading-none whitespace-nowrap">
        MINDSET
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Label */}
        <div className="flex items-center space-x-2 text-xs font-mono text-zinc-500 uppercase tracking-widest mb-6">
          <span>// 10. MULTIDISCIPLINARY PHILOSOPHY</span>
        </div>

        {/* Big Editorial Heading */}
        <div className="max-w-4xl mb-12 sm:mb-16">
          <h2 className="font-display font-black text-3xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] text-black">
            More than one skill.{' '}
            <span className="italic font-light text-zinc-500 block">One creative mindset.</span>
          </h2>
          <p className="mt-6 sm:mt-8 text-base sm:text-xl md:text-2xl text-zinc-600 font-light leading-relaxed max-w-3xl">
            {PERSONAL_INFO.personalBrandDescription}
          </p>
        </div>

        {/* 4 Pillar Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {PERSONAL_INFO.pillars.map((pillar, idx) => {
            const icons = [Terminal, Palette, Film, TrendingUp];
            const Icon = icons[idx];
            const accentColors = [
              'group-hover:bg-sky-500',
              'group-hover:bg-pink-500',
              'group-hover:bg-amber-500',
              'group-hover:bg-emerald-500',
            ];

            // Calculate relative font size: long words get smaller
            const wordLength = pillar.title.length;
            const titleSize =
              wordLength > 10
                ? 'text-sm lg:text-base'     // TECHNOLOGY, STORYTELLING (11–12 chars)
                : wordLength > 6
                ? 'text-base lg:text-lg'     // MARKETING (9 chars)
                : 'text-lg lg:text-xl';      // DESIGN (6 chars)

            return (
              <div
                key={pillar.title}
                className="group p-6 sm:p-7 rounded-3xl bg-white border border-zinc-200/80 shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between min-h-[200px] overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-xs text-zinc-400 tracking-widest">0{idx + 1}</span>
                    <div
                      className={`w-9 h-9 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-700 group-hover:text-white transition-all duration-300 ${accentColors[idx]}`}
                    >
                      <Icon size={17} />
                    </div>
                  </div>

                  {/* Title — adaptive size so it never overflows */}
                  <h3
                    className={`font-display font-extrabold ${titleSize} text-black tracking-tight mb-3 leading-snug break-words`}
                  >
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-zinc-500 font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-5 flex items-center justify-between border-t border-zinc-100 mt-5">
                  <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                    DISCIPLINE
                  </span>
                  <Plus
                    size={15}
                    className="text-zinc-400 group-hover:text-black group-hover:rotate-90 transition-transform duration-300"
                  />
                </div>
              </div>
            );
          })}
        </div>
        {/* Equation bar removed per user request */}
      </div>
    </section>
  );
};
