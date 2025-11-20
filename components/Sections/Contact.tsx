import React from 'react';
import { Mail, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { BowIcon } from '../UI/BowIcon';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 container mx-auto px-4 text-center">
       <motion.div 
         initial={{ scale: 0.9, opacity: 0 }}
         whileInView={{ scale: 1, opacity: 1 }}
         transition={{ duration: 0.5 }}
         className="max-w-2xl mx-auto bg-white/80 backdrop-blur-xl border border-white rounded-[3rem] p-10 md:p-16 shadow-[0_20px_60px_-15px_rgba(244,114,182,0.3)] relative overflow-hidden"
       >
          {/* Decorations */}
          <BowIcon className="absolute top-6 left-6 w-12 h-10 -rotate-12" color="#f9a8d4" />
          <BowIcon className="absolute bottom-6 right-6 w-12 h-10 rotate-12" color="#f9a8d4" />

          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Get In Touch!</h2>
          
          <p className="text-slate-600 text-lg mb-10 leading-relaxed">
            目前我正在寻找 <b className="text-pink-500">2025 Summer Intern / Full-time</b> 机会。
            如果您有任何问题或想打个招呼，请随时发邮件给我！
          </p>

          <motion.a 
            href="mailto:1467247953@qq.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full text-xl font-bold shadow-xl shadow-pink-300/50 hover:shadow-pink-400/50 transition-all"
          >
            <Mail />
            Say Hello
          </motion.a>

          <div className="mt-12 text-slate-400 flex items-center justify-center gap-2 text-sm">
             Built with <Heart size={14} className="text-red-400 fill-red-400 animate-pulse" /> and React
          </div>
       </motion.div>
    </section>
  );
};