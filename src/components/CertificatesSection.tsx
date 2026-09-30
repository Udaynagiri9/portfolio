import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, X, ChevronLeft, ChevronRight, Shield, Code2, Network, BookOpen } from 'lucide-react';

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  category: string;
  categoryColor: string;
  icon: React.ReactNode;
  file: string;
  year: string;
  badge?: string;
}

const CERTIFICATES: Certificate[] = [
  {
    id: 1,
    title: 'AWS Cloud Developing',
    issuer: 'Amazon Web Services (AWS Academy)',
    category: 'Cloud',
    categoryColor: 'from-amber-400 to-orange-500',
    icon: <Shield size={20} />,
    file: '/certificates/AWS_Academy_Graduate___Cloud_Developing___Training_Badge_Badge20260921-21-dqlanl.pdf',
    year: '2026',
    badge: 'AWS Academy Graduate',
  },
  {
    id: 2,
    title: 'AWS Cloud Security Foundations',
    issuer: 'Amazon Web Services (AWS Academy)',
    category: 'Cloud',
    categoryColor: 'from-amber-400 to-orange-500',
    icon: <Shield size={20} />,
    file: '/certificates/AWS_Academy_Graduate___Cloud_Security_Foundations___Training_Badge_Badge20260921-21-f5v4ix.pdf',
    year: '2026',
    badge: 'AWS Academy Graduate',
  },
  {
    id: 3,
    title: 'EDX Professional Certificate',
    issuer: 'edX',
    category: 'Development',
    categoryColor: 'from-sky-400 to-blue-600',
    icon: <Code2 size={20} />,
    file: '/certificates/EDX UDAY.pdf',
    year: '2025',
  },
  {
    id: 4,
    title: 'Exploring Networking with Cisco Packet Tracer',
    issuer: 'Cisco Networking Academy',
    category: 'Networking',
    categoryColor: 'from-blue-400 to-indigo-600',
    icon: <Network size={20} />,
    file: '/certificates/Exploring_Networking_with_Cisco_Packet_Tracer_certificate_udaybgms45-gmail-com_949f45b1-cc50-4da0-a887-dedea5c46b2e.pdf',
    year: '2025',
  },
  {
    id: 5,
    title: 'Getting Started with Cisco Packet Tracer',
    issuer: 'Cisco Networking Academy',
    category: 'Networking',
    categoryColor: 'from-blue-400 to-indigo-600',
    icon: <Network size={20} />,
    file: '/certificates/Getting_Started_with_Cisco_Packet_Tracer_certificate_udaybgms45-gmail-com_de7d1879-586a-4778-bc74-daabd7a92d1e.pdf',
    year: '2025',
  },
  {
    id: 6,
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    category: 'Cybersecurity',
    categoryColor: 'from-emerald-400 to-teal-600',
    icon: <Shield size={20} />,
    file: '/certificates/Introduction_to_Cybersecurity_certificate_udaybgms45-gmail-com_5dc91ac1-1595-40c5-8d15-fb9f62eb03a1.pdf',
    year: '2025',
  },
  {
    id: 7,
    title: 'Junior Cybersecurity Analyst Career Path',
    issuer: 'Cisco Networking Academy',
    category: 'Cybersecurity',
    categoryColor: 'from-emerald-400 to-teal-600',
    icon: <Shield size={20} />,
    file: '/certificates/Junior_Cybersecurity_Analyst_Career_Path_certificate_udaybgms45-gmail-com_bfb5fde1-4d99-473c-8d75-575a859b67ff (1).pdf',
    year: '2025',
  },
  {
    id: 8,
    title: 'Python Essentials 2',
    issuer: 'Cisco Networking Academy',
    category: 'Development',
    categoryColor: 'from-sky-400 to-blue-600',
    icon: <Code2 size={20} />,
    file: '/certificates/Python_Essentials_2_certificate_udaybgms45-gmail-com_53221cd2-97db-40fe-9b77-d5a499ba1d00.pdf',
    year: '2025',
  },
];

const CATEGORIES = ['All', 'Cloud', 'Cybersecurity', 'Networking', 'Development'];

export const CertificatesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeCategory === 'All'
    ? CERTIFICATES
    : CERTIFICATES.filter((c) => c.category === activeCategory);

  const openLightbox = (idx: number) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);
  const prevCert = () => setLightboxIndex((i) => (i !== null && i > 0 ? i - 1 : filtered.length - 1));
  const nextCert = () => setLightboxIndex((i) => (i !== null && i < filtered.length - 1 ? i + 1 : 0));

  return (
    <section
      id="certificates"
      className="relative w-full py-24 sm:py-32 md:py-40 px-4 sm:px-6 md:px-12 bg-[#070708] text-white overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-sky-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex items-center space-x-2 text-xs font-mono text-sky-400/70 uppercase tracking-widest mb-6">
          <span className="w-6 h-px bg-sky-400/40" />
          <span>// CREDENTIALS & CERTIFICATIONS</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl tracking-tight leading-[0.95]">
              Certified.{' '}
              <span className="italic font-light text-zinc-500">Proven.</span>
            </h2>
            <p className="mt-4 text-zinc-400 text-base sm:text-lg max-w-xl leading-relaxed">
              Industry-recognized credentials from AWS, Cisco, and edX — validating expertise across cloud, cybersecurity, networking and development.
            </p>
          </div>

          {/* Stats */}
          <div className="flex gap-6 sm:gap-10 shrink-0">
            <div className="text-center">
              <div className="font-display font-black text-4xl sm:text-5xl text-white">8</div>
              <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mt-1">Certificates</div>
            </div>
            <div className="text-center">
              <div className="font-display font-black text-4xl sm:text-5xl text-white">4</div>
              <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mt-1">Domains</div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono tracking-widest uppercase border transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-white text-black border-white'
                  : 'bg-transparent text-zinc-400 border-zinc-700 hover:border-zinc-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Certificate Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((cert, idx) => (
              <motion.div
                key={cert.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                onClick={() => openLightbox(idx)}
                className="group relative p-6 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-white/20 hover:bg-white/[0.06] cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/50 overflow-hidden"
              >
                {/* Gradient top bar */}
                <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${cert.categoryColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Icon + category */}
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cert.categoryColor} flex items-center justify-center text-white shadow-lg`}>
                    {cert.icon}
                  </div>
                  <span className={`text-[10px] font-mono uppercase tracking-widest px-2 py-1 rounded-full bg-gradient-to-r ${cert.categoryColor} text-white/90`}>
                    {cert.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-sm sm:text-base text-white leading-snug mb-2 group-hover:text-white transition-colors">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <p className="text-xs text-zinc-500 font-light leading-relaxed mb-4">
                  {cert.issuer}
                </p>

                {cert.badge && (
                  <div className="flex items-center gap-1.5 mb-4">
                    <Award size={11} className="text-amber-400" />
                    <span className="text-[10px] text-amber-400/80 font-mono">{cert.badge}</span>
                  </div>
                )}

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
                  <span className="text-[10px] font-mono text-zinc-600">{cert.year}</span>
                  <div className="flex items-center gap-1 text-zinc-600 group-hover:text-sky-400 transition-colors">
                    <span className="text-[10px] font-mono">VIEW</span>
                    <ExternalLink size={11} />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox / PDF Viewer */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/90 backdrop-blur-xl p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-4xl h-[85vh] bg-zinc-900 rounded-3xl overflow-hidden border border-white/10 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Lightbox header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 shrink-0">
                <div>
                  <h3 className="font-display font-bold text-white text-base sm:text-lg leading-tight">
                    {filtered[lightboxIndex].title}
                  </h3>
                  <p className="text-xs text-zinc-500 mt-0.5">{filtered[lightboxIndex].issuer}</p>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={filtered[lightboxIndex].file}
                    download
                    className="px-4 py-2 bg-white text-black rounded-full text-xs font-mono font-bold tracking-wide hover:bg-zinc-200 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    DOWNLOAD
                  </a>
                  <button
                    onClick={closeLightbox}
                    className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  >
                    <X size={16} className="text-white" />
                  </button>
                </div>
              </div>

              {/* PDF embed */}
              <div className="flex-1 overflow-hidden">
                <iframe
                  src={filtered[lightboxIndex].file + '#toolbar=0&navpanes=0'}
                  className="w-full h-full"
                  title={filtered[lightboxIndex].title}
                />
              </div>

              {/* Navigation arrows */}
              {filtered.length > 1 && (
                <>
                  <button
                    onClick={prevCert}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 border border-white/10 flex items-center justify-center text-white transition-all hover:scale-110"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={nextCert}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 border border-white/10 flex items-center justify-center text-white transition-all hover:scale-110"
                  >
                    <ChevronRight size={18} />
                  </button>
                </>
              )}

              {/* Pagination dots */}
              <div className="flex items-center justify-center gap-1.5 py-3 border-t border-white/10 shrink-0">
                {filtered.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setLightboxIndex(i)}
                    className={`rounded-full transition-all duration-200 ${
                      i === lightboxIndex ? 'w-4 h-1.5 bg-white' : 'w-1.5 h-1.5 bg-white/30 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
