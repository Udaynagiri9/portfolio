import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Target, Instagram, Layers, Share2, Compass, CheckCircle } from 'lucide-react';
import { useCursor } from '../context/CursorContext';
import { MARKETING_CAMPAIGNS, PERSONAL_INFO } from '../data/portfolioData';

export const MarketingSection: React.FC = () => {
  const { setCursor, resetCursor } = useCursor();

  const marketingFocus = [
    'Instagram Marketing',
    'Social Media Management',
    'Content Strategy',
    'Reels Promotion',
    'Post Promotion',
    'Brand Awareness',
    'Creative Campaigns',
    'Social Media Design',
  ];

  return (
    <section
      id="marketing"
      className="relative w-full py-28 md:py-36 px-6 md:px-12 bg-[#070708] border-t border-zinc-900"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8 border-b border-zinc-800 pb-8">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono text-sky-400 uppercase tracking-widest mb-3">
              <TrendingUp size={14} />
              <span>// 07. STRATEGY & AMPLIFICATION</span>
            </div>
            <h2 className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tighter text-white">
              DIGITAL / MARKETING
            </h2>
          </div>

          <p className="text-zinc-400 font-mono text-xs sm:text-sm max-w-sm">
            Bridging aesthetic visuals with distribution strategy so your brand cuts through the social noise.
          </p>
        </div>

        {/* Marketing Pillars Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-16">
          {marketingFocus.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 hover:border-sky-400/50 transition-colors flex items-center space-x-3"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
              <span className="text-xs font-mono text-zinc-300 tracking-wide">{item}</span>
            </div>
          ))}
        </div>

        {/* Campaign Case Studies (Placeholders for Campaign, Brand, Goal, Strategy, Creative, Result) */}
        <div className="space-y-12">
          {MARKETING_CAMPAIGNS.map((camp) => (
            <div
              key={camp.id}
              className="rounded-3xl bg-[#0d0e13] border border-zinc-800 overflow-hidden shadow-2xl"
            >
              {/* Banner Image */}
              <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-zinc-900">
                <img
                  src={camp.bannerImage}
                  alt={camp.campaign}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale contrast-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e13] via-[#0d0e13]/60 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <span className="text-xs font-mono text-sky-400 uppercase tracking-widest block mb-1">
                      BRAND: {camp.brand}
                    </span>
                    <h3 className="font-display font-bold text-3xl sm:text-4xl text-white">
                      {camp.campaign}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {camp.channels.map((ch, i) => (
                      <span key={i} className="px-3 py-1 text-xs font-mono rounded-full bg-black/70 backdrop-blur-md text-zinc-300 border border-white/10">
                        {ch}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Campaign Structure Breakdown */}
              <div className="p-6 sm:p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
                {/* Goal */}
                <div className="p-4 rounded-2xl bg-zinc-950/70 border border-zinc-900 space-y-2">
                  <div className="flex items-center space-x-1.5 text-sky-400 font-mono">
                    <Target size={14} />
                    <span className="uppercase tracking-wider font-semibold">Goal</span>
                  </div>
                  <p className="text-zinc-300 font-light leading-relaxed">{camp.goal}</p>
                </div>

                {/* Strategy */}
                <div className="p-4 rounded-2xl bg-zinc-950/70 border border-zinc-900 space-y-2">
                  <div className="flex items-center space-x-1.5 text-indigo-400 font-mono">
                    <Compass size={14} />
                    <span className="uppercase tracking-wider font-semibold">Strategy</span>
                  </div>
                  <p className="text-zinc-300 font-light leading-relaxed">{camp.strategy}</p>
                </div>

                {/* Creative */}
                <div className="p-4 rounded-2xl bg-zinc-950/70 border border-zinc-900 space-y-2">
                  <div className="flex items-center space-x-1.5 text-pink-400 font-mono">
                    <Layers size={14} />
                    <span className="uppercase tracking-wider font-semibold">Creative</span>
                  </div>
                  <p className="text-zinc-300 font-light leading-relaxed">{camp.creative}</p>
                </div>

                {/* Result */}
                <div className="p-4 rounded-2xl bg-zinc-950/70 border border-zinc-900 space-y-2">
                  <div className="flex items-center space-x-1.5 text-emerald-400 font-mono">
                    <CheckCircle size={14} />
                    <span className="uppercase tracking-wider font-semibold">Result</span>
                  </div>
                  <p className="text-zinc-300 font-light leading-relaxed">{camp.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
