import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useMotionValue } from 'framer-motion';
import { useCursor } from '../context/CursorContext';

export const CustomCursor: React.FC = () => {
  const { cursorType, cursorText } = useCursor();
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: 0, y: 0 });

  // Use direct RAF loop for zero-lag cursor tracking
  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window) {
      setIsTouchDevice(true);
      return;
    }

    let rafId: number;

    const handleMouseMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    // RAF loop: directly update transform without any spring/inertia
    const update = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${posRef.current.x}px, ${posRef.current.y}px) translate(-50%, -50%)`;
      }
      rafId = requestAnimationFrame(update);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    rafId = requestAnimationFrame(update);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(rafId);
    };
  }, [isVisible]);

  if (isTouchDevice) return null;

  const isInteractive = cursorType !== 'default';
  const isLargeLabel = cursorText.length > 5;

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed top-0 left-0 z-[9999] will-change-transform"
      style={{
        transform: `translate(${posRef.current.x}px, ${posRef.current.y}px) translate(-50%, -50%)`,
      }}
    >
      {/* Outer expanding ring for interactive states */}
      <AnimatePresence>
        {isInteractive && (
          <motion.div
            key="expanded"
            initial={{ scale: 0.4, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.4, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="flex items-center justify-center rounded-full bg-sky-400 text-black shadow-xl shadow-sky-400/30"
            style={{
              width: isLargeLabel ? 88 : 72,
              height: isLargeLabel ? 88 : 72,
            }}
          >
            <span className="text-[10px] font-bold tracking-widest uppercase text-center font-sans leading-tight px-1">
              {cursorText}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Core dot — always present, always exact */}
      <AnimatePresence>
        {!isInteractive && isVisible && (
          <motion.div
            key="dot"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.15 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div
              className="rounded-full bg-white mix-blend-difference"
              style={{ width: 14, height: 14 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
