import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle, Calendar, Tag, Layers } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-xl"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl glass-panel border border-white/15 text-white shadow-2xl z-10 p-5 sm:p-8 md:p-10"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2.5 sm:p-3 rounded-full glass-pill hover:bg-white hover:text-black transition-colors z-20"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            {/* Header Meta */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-400 uppercase tracking-widest mb-4">
              <span className="px-2.5 py-1 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20">
                {project.category}
              </span>
              <span>//</span>
              <span className="flex items-center space-x-1">
                <Calendar size={13} className="text-zinc-500" />
                <span>{project.year}</span>
              </span>
              <span>//</span>
              <span>PROJECT {project.number}</span>
            </div>

            {/* Title & Subtitle */}
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-white mb-3">
              {project.title}
            </h2>
            <p className="text-lg text-zinc-300 font-light max-w-2xl mb-8">
              {project.subtitle}
            </p>

            {/* Hero Visual */}
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-zinc-800 mb-8 bg-zinc-950">
              <img
                src={project.heroImage}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Project Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-6 border-y border-zinc-800/80 mb-8">
              {project.problem && (
                <div className="space-y-2">
                  <h4 className="text-xs font-mono text-sky-400 uppercase tracking-wider">The Challenge</h4>
                  <p className="text-sm text-zinc-300 font-light leading-relaxed">{project.problem}</p>
                </div>
              )}
              {project.solution && (
                <div className="space-y-2">
                  <h4 className="text-xs font-mono text-emerald-400 uppercase tracking-wider">The Solution</h4>
                  <p className="text-sm text-zinc-300 font-light leading-relaxed">{project.solution}</p>
                </div>
              )}
              {project.outcome && (
                <div className="space-y-2">
                  <h4 className="text-xs font-mono text-purple-400 uppercase tracking-wider">The Outcome</h4>
                  <p className="text-sm text-zinc-300 font-light leading-relaxed">{project.outcome}</p>
                </div>
              )}
            </div>

            {/* Tools & Links */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider block mb-2">Technologies Used</span>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-mono rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center space-x-4 pt-2 sm:pt-0">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-sky-400 text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-white transition-colors"
                  >
                    <span>VIEW LIVE / EXPLORE</span>
                    <ExternalLink size={14} />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center space-x-2 px-5 py-3 rounded-full bg-zinc-900 border border-zinc-700 text-white font-mono text-xs uppercase tracking-wider hover:border-sky-400 transition-colors"
                  >
                    <Github size={14} />
                    <span>CODE</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
