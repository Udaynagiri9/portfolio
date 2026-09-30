import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Film, Play, X, Clock, Layers, Sparkles, VolumeX, Eye } from 'lucide-react';
import { useCursor } from '../context/CursorContext';
import { VIDEO_PROJECTS } from '../data/portfolioData';
import { VideoProject } from '../types';

export const FilmSection: React.FC = () => {
  const { setCursor, resetCursor } = useCursor();
  const [activeVideo, setActiveVideo] = useState<VideoProject | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const categories = ['ALL', ...Array.from(new Set(VIDEO_PROJECTS.map((v) => v.category)))];

  const filteredVideos = selectedCategory === 'ALL'
    ? VIDEO_PROJECTS
    : VIDEO_PROJECTS.filter((v) => v.category === selectedCategory);

  return (
    <section
      id="film"
      className="relative w-full py-28 md:py-40 px-6 md:px-12 bg-[#070708] border-t border-zinc-900"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8 border-b border-zinc-800 pb-8">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono text-sky-400 uppercase tracking-widest mb-3">
              <Film size={14} />
              <span>// 05. MOTION PICTURES & EDITING</span>
            </div>
            <h2 className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tighter text-white">
              FILM / MOTION
            </h2>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-sky-400 text-black font-bold'
                    : 'bg-zinc-900/90 text-zinc-400 hover:text-white border border-zinc-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              onClick={() => setActiveVideo(video)}
              onMouseEnter={() => setCursor('play')}
              onMouseLeave={resetCursor}
              className="group cursor-pointer relative rounded-2xl overflow-hidden border border-zinc-800/90 bg-zinc-950 transition-all duration-500 hover:border-sky-500/60 shadow-2xl"
            >
              {/* Media Container */}
              <div className="relative aspect-video overflow-hidden bg-black">
                {video.videoUrl ? (
                  <video
                    src={`${video.videoUrl}#t=0.001`}
                    preload="metadata"
                    muted
                    playsInline
                    loop
                    className="w-full h-full object-cover grayscale contrast-110 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
                    onMouseEnter={(e) => {
                      const promise = e.currentTarget.play();
                      if (promise !== undefined) {
                        promise.catch(() => {});
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.pause();
                      e.currentTarget.currentTime = 0;
                    }}
                  />
                ) : (
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale contrast-110 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
                  />
                )}

                {/* Gradient & Dark Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20 group-hover:from-black/75 transition-colors pointer-events-none" />

                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
                  <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono uppercase tracking-widest text-sky-400">
                    {video.category}
                  </span>
                  <span className="flex items-center space-x-1 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-mono text-zinc-400">
                    <Clock size={11} />
                    <span>{video.duration}</span>
                  </span>
                </div>

                {/* Play Button Indicator */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-16 h-16 rounded-full bg-sky-400 text-black flex items-center justify-center shadow-2xl transform scale-90 group-hover:scale-110 transition-transform duration-300 group-hover:bg-white">
                    <Play size={22} className="fill-current ml-1" />
                  </div>
                </div>

                {/* Bottom Video Meta on Hover */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 pointer-events-none">
                  <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-1">
                    {video.clientOrBrand || 'EDITORIAL REEL'}
                  </p>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white group-hover:text-sky-300 transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-xs text-zinc-300 font-light mt-2 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {video.description}
                  </p>
                </div>
              </div>

              {/* Footer Software Badges */}
              <div className="p-4 bg-zinc-950 border-t border-zinc-900 flex items-center justify-between text-xs font-mono text-zinc-400">
                <div className="flex flex-wrap gap-2">
                  {video.software.map((sw, sIdx) => (
                    <span key={sIdx} className="text-[11px] text-zinc-400">
                      #{sw}
                    </span>
                  ))}
                </div>
                <span className="text-sky-400 group-hover:translate-x-1 transition-transform flex items-center space-x-1">
                  <span>WATCH</span>
                  <span>→</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cinematic Video Player Lightbox Modal */}
      <AnimatePresence>
        {activeVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveVideo(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-2xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-4xl rounded-3xl bg-[#0c0d11] border border-zinc-800 text-white shadow-2xl z-10 overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 hover:bg-white hover:text-black transition-colors"
                aria-label="Close video player"
              >
                <X size={20} />
              </button>

              {/* Video Player Display */}
              <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden">
                {activeVideo.videoUrl ? (
                  <video
                    key={activeVideo.videoUrl}
                    src={activeVideo.videoUrl}
                    controls
                    autoPlay
                    playsInline
                    className="w-full h-full object-contain bg-black"
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    src={activeVideo.thumbnail}
                    alt={activeVideo.title}
                    className="w-full h-full object-cover filter brightness-75"
                  />
                )}
              </div>

              {/* Video Meta Info */}
              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-800/80 pb-4">
                  <div>
                    <span className="text-[11px] font-mono text-sky-400 uppercase tracking-widest block">
                      {activeVideo.category} • {activeVideo.duration}
                    </span>
                    <h3 className="font-display font-bold text-2xl text-white mt-1">
                      {activeVideo.title}
                    </h3>
                  </div>

                  <a
                    href="https://www.instagram.com/chroma__canvas"
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 rounded-full bg-sky-400 text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-white transition-colors"
                  >
                    WATCH ON INSTAGRAM
                  </a>
                </div>

                <p className="text-sm text-zinc-300 font-light leading-relaxed">
                  {activeVideo.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {activeVideo.software.map((tech, i) => (
                    <span key={i} className="text-xs font-mono px-3 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-400">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
