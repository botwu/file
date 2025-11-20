import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { GlassCard } from '../UI/GlassCard';
import { PROJECTS } from '../../constants';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 container mx-auto px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-pink-600 inline-block relative">
                Selected Projects
                <span className="absolute -bottom-2 left-0 w-full h-2 bg-pink-200/50 -skew-x-12 rounded-full"></span>
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, index) => (
                <GlassCard key={project.id} delay={index * 0.1} className="flex flex-col h-full">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-400 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-pink-200 text-white">
                        <project.icon size={24} />
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-800 mb-3">
                        {project.title}
                    </h3>
                    
                    <p className="text-slate-600 text-sm mb-6 flex-grow leading-relaxed">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                            <span key={tag} className="px-2 py-1 bg-pink-50 text-pink-600 text-xs font-semibold rounded-md">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="flex gap-4 pt-4 border-t border-pink-100">
                        {project.links.github && (
                            <a href={project.links.github} className="text-slate-400 hover:text-pink-500 transition-colors" title="GitHub">
                                <Github size={20} />
                            </a>
                        )}
                        {project.links.demo && (
                            <a href={project.links.demo} className="text-slate-400 hover:text-pink-500 transition-colors" title="Live Demo">
                                <ExternalLink size={20} />
                            </a>
                        )}
                    </div>
                </GlassCard>
            ))}
        </div>
      </div>
    </section>
  );
};