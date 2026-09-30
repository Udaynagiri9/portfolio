import React from 'react';
import { motion } from 'framer-motion';
import { Layers, ArrowRight, CheckCircle2 } from 'lucide-react';
import { PROCESS_STEPS } from '../data/portfolioData';

export const CreativeProcess: React.FC = () => {
  return (
    <section
      id="process"
      className="relative w-full py-28 md:py-36 px-6 md:px-12 bg-[#070708] border-t border-zinc-900"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-6 border-b border-zinc-800 pb-8">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono text-sky-400 uppercase tracking-widest mb-3">
              <Layers size={14} />
              <span>// 09. METHODOLOGY</span>
            </div>
            <h2 className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tighter text-white">
              HOW I WORK
            </h2>
          </div>

          <p className="text-zinc-400 font-mono text-xs sm:text-sm max-w-sm">
            A structured five-phase pipeline engineered to deliver clarity, artistic distinction, and reliable execution.
          </p>
        </div>

        {/* Process Step Timeline */}
        <div className="relative border-l border-zinc-800 ml-4 md:ml-8 pl-8 md:pl-12 space-y-16">
          {PROCESS_STEPS.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-6 h-6 rounded-full bg-[#070708] border-2 border-zinc-700 flex items-center justify-center group-hover:border-sky-400 transition-colors">
                <div className="w-2 h-2 rounded-full bg-zinc-600 group-hover:bg-sky-400 transition-colors" />
              </div>

              {/* Step Content */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline">
                {/* Number & Phase */}
                <div className="lg:col-span-4">
                  <span className="font-mono text-xs text-sky-400 uppercase tracking-widest block mb-1">
                    PHASE {step.number}
                  </span>
                  <h3 className="font-display font-bold text-3xl sm:text-4xl text-white group-hover:text-sky-300 transition-colors">
                    {step.phase}
                  </h3>
                  <p className="text-xs font-mono text-zinc-500 mt-1">{step.title}</p>
                </div>

                {/* Description & Deliverables */}
                <div className="lg:col-span-8 space-y-3">
                  <p className="text-zinc-300 text-base sm:text-lg font-light leading-relaxed">
                    {step.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {step.deliverables.map((del, dIdx) => (
                      <span
                        key={dIdx}
                        className="inline-flex items-center space-x-1.5 text-xs font-mono px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400"
                      >
                        <CheckCircle2 size={12} className="text-sky-400" />
                        <span>{del}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
