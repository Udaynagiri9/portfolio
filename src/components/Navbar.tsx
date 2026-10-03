import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileText, Download } from 'lucide-react';
import { useCursor } from '../context/CursorContext';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenContact?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { setCursor, resetCursor } = useCursor();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'WORK', href: '#selected-work' },
    { name: 'ABOUT', href: '#about' },
    { name: 'SERVICES', href: '#services' },
    { name: 'EXPERIENCE', href: '#experience' },
    { name: 'CONTACT', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 pointer-events-none transition-all duration-500 py-3 sm:py-5 px-3 sm:px-6 md:px-8 flex justify-center">
        <div
          className={`w-full max-w-7xl mx-auto px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl sm:rounded-full pointer-events-auto flex items-center justify-between transition-all duration-500 ${
            scrolled
              ? 'bg-[#08090d]/85 backdrop-blur-2xl border border-white/10 shadow-[0_16px_40px_-10px_rgba(0,0,0,0.8),0_0_20px_rgba(56,189,248,0.06)]'
              : 'bg-[#08090d]/40 backdrop-blur-xl border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.35)]'
          }`}
        >
          {/* Logo / Name */}
          <a
            href="#"
            onMouseEnter={() => setCursor('open', 'HOME')}
            onMouseLeave={resetCursor}
            className="group flex flex-col tracking-tight"
          >
            <div className="flex items-center space-x-2">
              <span className="font-display font-extrabold text-base sm:text-xl tracking-wider text-white group-hover:text-sky-400 transition-colors duration-300">
                {PERSONAL_INFO.name}
              </span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
            </div>
            <span className="text-[9px] sm:text-[10px] uppercase font-mono tracking-widest text-zinc-400 group-hover:text-zinc-200 transition-colors">
              FULL STACK • CREATIVE
            </span>
          </a>

          {/* Desktop Navigation with Glassmorphism */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="flex items-center space-x-6 px-6 py-2 rounded-full glass-pill">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onMouseEnter={() => setCursor('open')}
                  onMouseLeave={resetCursor}
                  className="relative text-xs uppercase tracking-widest font-mono text-zinc-300 hover:text-white transition-colors duration-300 py-1 group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-sky-400 group-hover:w-full transition-all duration-300 ease-out" />
                </a>
              ))}
            </div>

            {/* Resume Button */}
            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="Nagiri_Uday_Resume.pdf"
              onMouseEnter={() => setCursor('open', 'CV')}
              onMouseLeave={resetCursor}
              className="glass-button flex items-center space-x-2 px-4 py-2 rounded-full text-xs font-mono text-zinc-200 hover:text-sky-400 tracking-wider transition-all"
            >
              <FileText size={13} className="text-sky-400" />
              <span>RESUME</span>
              <Download size={11} className="opacity-70" />
            </a>

            {/* Contact CTA */}
            <a
              href="#contact"
              onMouseEnter={() => setCursor('open', 'HIRE')}
              onMouseLeave={resetCursor}
              className="px-5 py-2 rounded-full bg-white text-black hover:bg-sky-400 font-mono text-xs uppercase font-bold tracking-widest transition-all duration-300 shadow-lg shadow-sky-500/10"
            >
              Get In Touch
            </a>
          </nav>

          {/* Mobile Right Controls: Resume + Menu Toggle */}
          <div className="flex items-center space-x-2 lg:hidden">
            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="Nagiri_Uday_Resume.pdf"
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full glass-pill text-[11px] font-mono text-sky-400"
              aria-label="Download Resume"
            >
              <Download size={12} />
              <span>CV</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl glass-pill text-zinc-200 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Fullscreen Glass Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#070708]/95 backdrop-blur-2xl flex flex-col justify-between px-6 py-24 lg:hidden">
          <div className="flex flex-col space-y-6">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
              <span className="text-zinc-500 font-mono text-xs tracking-widest uppercase">
                // NAVIGATION
              </span>
              <span className="text-sky-400 font-mono text-xs">UDAY NAGIRI</span>
            </div>

            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                className="font-display font-bold text-3xl sm:text-4xl text-white hover:text-sky-400 transition-colors flex items-center justify-between py-2 border-b border-zinc-900"
              >
                <span>{link.name}</span>
                <span className="text-xs font-mono text-zinc-600">0{idx + 1}</span>
              </a>
            ))}

            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="Nagiri_Uday_Resume.pdf"
              className="flex items-center justify-between p-4 rounded-2xl glass-card text-sky-400 font-mono text-xs uppercase tracking-widest mt-2"
            >
              <span className="flex items-center space-x-2">
                <FileText size={16} />
                <span>DOWNLOAD RESUME (PDF)</span>
              </span>
              <Download size={16} />
            </a>
          </div>

          <div className="pt-6 border-t border-zinc-800/80 space-y-3">
            <p className="font-mono text-xs text-zinc-400 uppercase tracking-wider">
              {PERSONAL_INFO.location}
            </p>
            <div className="flex items-center justify-between text-xs font-mono">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-white hover:text-sky-400 truncate max-w-[240px]"
              >
                {PERSONAL_INFO.email}
              </a>
              <span className="text-emerald-400 flex items-center space-x-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>AVAILABLE</span>
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
