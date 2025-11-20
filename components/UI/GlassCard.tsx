import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, type: 'spring', stiffness: 100 }}
      whileHover={{ scale: 1.02, translateY: -5 }}
      className={`
        relative overflow-hidden
        bg-white/60 backdrop-blur-xl 
        border border-white/80 
        shadow-[0_8px_30px_rgb(251,207,232,0.5)] 
        rounded-3xl p-6 
        hover:border-pink-300 hover:shadow-pink-200/50
        transition-colors duration-300
        ${className}
      `}
    >
      {/* Shine effect */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/40 to-transparent pointer-events-none" />
      {children}
    </motion.div>
  );
};