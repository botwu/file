import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 text-center text-slate-500 text-sm bg-white/50 backdrop-blur-sm">
      <div className="flex justify-center gap-6 mb-4">
         <a href="#" className="hover:text-pink-500 transition-colors hover:-translate-y-1 transform block"><Github size={20} /></a>
         <a href="#" className="hover:text-pink-500 transition-colors hover:-translate-y-1 transform block"><Linkedin size={20} /></a>
         <a href="#" className="hover:text-pink-500 transition-colors hover:-translate-y-1 transform block"><Twitter size={20} /></a>
      </div>
      <p className="font-['Quicksand'] font-medium">
        © {new Date().getFullYear()} Wu Jian. All rights reserved.
      </p>
    </footer>
  );
};