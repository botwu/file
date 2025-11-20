import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';
import { TYPING_PHRASES } from '../../constants';
import { BowIcon } from '../UI/BowIcon';
import avatarImage from '../../assets/avatar.jpg';

// Using local avatar image
const AVATAR_SRC = avatarImage; 

export const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = TYPING_PHRASES[phraseIndex];
    const typeSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting && text.length < currentPhrase.length) {
        setText(currentPhrase.slice(0, text.length + 1));
      } else if (isDeleting && text.length > 0) {
        setText(currentPhrase.slice(0, text.length - 1));
      } else if (!isDeleting && text.length === currentPhrase.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text.length === 0) {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % TYPING_PHRASES.length);
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, phraseIndex]);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center relative pt-20">
      
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, type: 'spring' }}
        className="relative mb-8 group"
      >
        <div className="absolute -inset-4 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
        
        <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full p-1 bg-white">
            <img 
              src={AVATAR_SRC} 
              alt="Wu Jian Avatar" 
              className="w-full h-full rounded-full object-cover border-4 border-pink-100"
            />
             {/* Hello Kitty Elements: Bow */}
            <motion.div 
              className="absolute -top-2 -right-4"
              animate={{ rotate: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
               <BowIcon className="w-20 h-16 drop-shadow-md" color="#ec4899" />
            </motion.div>
        </div>
      </motion.div>

      <motion.h1 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-4xl md:text-6xl font-bold text-slate-800 mb-4"
      >
        Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Wu Jian</span>
      </motion.h1>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="h-8 mb-8 flex items-center gap-2 text-xl md:text-2xl text-slate-600 font-medium font-['Noto_Sans_SC']"
      >
        <Sparkles className="text-yellow-400" size={20} />
        <span>我是 {text}</span>
        <span className="w-0.5 h-6 bg-pink-500 animate-blink"></span>
      </motion.div>

      <motion.a
        href="#about"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-8 py-3 bg-white border-2 border-pink-400 text-pink-500 rounded-full font-bold text-lg shadow-lg hover:bg-pink-50 transition-all flex items-center gap-2"
      >
        查看更多 <BowIcon className="w-5 h-4" color="#ec4899" />
      </motion.a>

      <motion.div 
        className="absolute bottom-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="text-pink-400 w-10 h-10" />
      </motion.div>
    </section>
  );
};