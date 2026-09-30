import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, Mail, Sparkles, MapPin, Globe, FileText, Download, Linkedin, ExternalLink } from 'lucide-react';
import { useCursor } from '../context/CursorContext';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const { setCursor, resetCursor } = useCursor();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Web Development',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [lastMailtoUrl, setLastMailtoUrl] = useState('');
  const [lastGmailUrl, setLastGmailUrl] = useState('');

  const targetEmail = 'bgmsuday@gmail.com';

  const projectTypes = [
    'Web Development',
    'Full Stack Application (MERN / Next.js)',
    'Video Editing / Film & Reels',
    'Graphic & Poster Design',
    'Canva Brand System',
    'Digital Marketing Campaign',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const subject = `Project Inquiry: [${formData.projectType}] from ${formData.name}`;
    const body = `Hello Uday,\n\nName: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\n\nProject Vision / Message:\n${formData.message}\n\nSent from Portfolio Contact Form`;

    const mailtoLink = `mailto:${targetEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${targetEmail}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setLastMailtoUrl(mailtoLink);
    setLastGmailUrl(gmailLink);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      // Automatically redirect message to email client
      window.location.href = mailtoLink;
    }, 600);
  };

  return (
    <section
      id="contact"
      className="relative w-full py-24 sm:py-32 md:py-40 px-4 sm:px-6 md:px-12 bg-[#090a0d] border-t border-zinc-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Bold Editorial Pitch & Verified Contact Data */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            <div className="flex items-center space-x-2 text-xs font-mono text-sky-400 uppercase tracking-widest">
              <Sparkles size={14} />
              <span>// 12. INITIATE COLLABORATION</span>
            </div>

            <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.92] text-white">
              HAVE AN IDEA? <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-zinc-100 to-indigo-300">
                LET'S CREATE IT.
              </span>
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-zinc-300 font-light leading-relaxed max-w-lg">
              “Whether it's a website, visual story, creative campaign or digital brand experience, let's build something meaningful.”
            </p>

            {/* Direct Contact Info Glass Card */}
            <div className="p-6 rounded-2xl glass-card space-y-4 font-mono text-xs text-zinc-300">
              <div className="flex items-center space-x-3 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-zinc-200 uppercase tracking-wider font-semibold">AVAILABLE FOR NEW PROJECTS</span>
              </div>

              <div className="flex items-center space-x-3 pt-2">
                <Mail size={15} className="text-sky-400 flex-shrink-0" />
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-white hover:text-sky-400 transition-colors underline underline-offset-4 truncate"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>


              <div className="flex items-center space-x-3">
                <MapPin size={15} className="text-sky-400 flex-shrink-0" />
                <span>{PERSONAL_INFO.location}</span>
              </div>

              <div className="flex items-center space-x-3">
                <Linkedin size={15} className="text-sky-400 flex-shrink-0" />
                <a
                  href={PERSONAL_INFO.socialLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-zinc-300 hover:text-sky-400 truncate"
                >
                  linkedin.com/in/uday-nagiri-5205a22a1
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Globe size={15} className="text-sky-400 flex-shrink-0" />
                <a
                  href={`https://${PERSONAL_INFO.portfolioSite}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-zinc-300 hover:text-sky-400"
                >
                  {PERSONAL_INFO.portfolioSite}
                </a>
              </div>

              <div className="pt-2 border-t border-white/[0.08]">
                <a
                  href={PERSONAL_INFO.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Nagiri_Uday_Resume.pdf"
                  className="inline-flex items-center space-x-2 text-sky-400 hover:text-white transition-colors"
                >
                  <FileText size={14} />
                  <span>Download Complete Resume (PDF)</span>
                  <Download size={12} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Minimal Glass Form */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl glass-panel p-6 sm:p-10 shadow-2xl relative">
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest block mb-6">
                START A PROJECT
              </span>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-10 sm:py-14 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-white">Opening Email Client</h3>
                  <p className="text-zinc-300 text-sm font-light max-w-sm mx-auto leading-relaxed">
                    Thank you, {formData.name}! Your message has been prepared and redirected to{' '}
                    <span className="text-sky-400 font-mono font-medium">{targetEmail}</span>.
                  </p>
                  <p className="text-xs text-zinc-500 font-mono max-w-xs mx-auto">
                    If your email client didn't launch automatically, click below:
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <a
                      href={lastMailtoUrl}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-sky-400 hover:bg-sky-300 text-black font-mono text-xs font-bold uppercase tracking-wider inline-flex items-center justify-center space-x-2 transition-colors shadow-lg"
                    >
                      <Mail size={14} />
                      <span>Launch Default Mail</span>
                    </a>
                    <a
                      href={lastGmailUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-mono text-xs uppercase tracking-wider inline-flex items-center justify-center space-x-2 transition-colors border border-zinc-700"
                    >
                      <ExternalLink size={14} />
                      <span>Send via Gmail</span>
                    </a>
                  </div>
                  <div className="pt-4 border-t border-zinc-800/80">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', projectType: 'Web Development', message: '' });
                      }}
                      className="px-6 py-2 rounded-full bg-zinc-900 hover:bg-zinc-800 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
                    >
                      Send Another Note
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Mercer"
                      className="w-full bg-zinc-950/70 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-sky-400 transition-colors font-sans"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@domain.com"
                      className="w-full bg-zinc-950/70 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-sky-400 transition-colors font-sans"
                    />
                  </div>

                  {/* Project Type */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
                      Project Type
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full bg-zinc-950/70 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-sky-400 transition-colors font-sans"
                    >
                      {projectTypes.map((type) => (
                        <option key={type} value={type} className="bg-zinc-900 text-white">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
                      Project Vision / Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project goals, timelines, or key vision..."
                      className="w-full bg-zinc-950/70 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-sky-400 transition-colors font-sans resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    onMouseEnter={() => setCursor('open', 'SEND')}
                    onMouseLeave={resetCursor}
                    className="w-full group inline-flex items-center justify-center space-x-2 py-3.5 sm:py-4 rounded-xl bg-white text-black font-mono text-xs uppercase font-bold tracking-widest hover:bg-sky-400 transition-all duration-300 shadow-xl disabled:opacity-50"
                  >
                    <span>{loading ? 'TRANSMITTING...' : 'SEND MESSAGE'}</span>
                    <Send size={14} className="transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
