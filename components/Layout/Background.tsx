import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Star } from 'lucide-react';
import { BowIcon } from '../UI/BowIcon';

export const Background: React.FC = () => {
  // Create array of random items to float around
  const items = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100, // percentage
    y: Math.random() * 100,
    scale: 0.5 + Math.random() * 0.5,
    duration: 10 + Math.random() * 20,
    delay: Math.random() * 5,
    type: i % 3, // 0: Heart, 1: Bow, 2: Star
  }));

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-gradient-to-b from-pink-50 via-white to-pink-50">
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-30" 
           style={{ 
             backgroundImage: 'radial-gradient(#f9a8d4 1px, transparent 1px)', 
             backgroundSize: '30px 30px' 
           }}>
      </div>

      {/* Floating Items */}
      {items.map((item) => (
        <motion.div
          key={item.id}
          className="absolute text-pink-200/60"
          style={{ left: `${item.x}%`, top: `${item.y}%` }}
          animate={{
            y: [0, -100, 0],
            rotate: [0, 10, -10, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            delay: item.delay,
            ease: "linear"
          }}
        >
          {item.type === 0 && <Heart size={40 * item.scale} fill="currentColor" />}
          {item.type === 1 && <BowIcon className="w-16 h-12 opacity-50" color="#fbcfe8" />}
          {item.type === 2 && <Star size={30 * item.scale} fill="currentColor" />}
        </motion.div>
      ))}
    </div>
  );
};