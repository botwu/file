import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { GlassCard } from '../UI/GlassCard';
import { INTERNSHIPS } from '../../constants';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 container mx-auto px-4 md:px-10">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-10">
           <div className="h-1 w-10 bg-pink-300 rounded-full"></div>
           <h2 className="text-3xl md:text-4xl font-bold text-pink-600">实习经历</h2>
           <div className="h-1 flex-1 bg-gradient-to-r from-pink-300 to-transparent rounded-full"></div>
        </div>

        <div className="relative border-l-4 border-pink-200 ml-4 md:ml-6 space-y-12">
            {INTERNSHIPS.map((job, index) => (
                <div key={job.id} className="relative pl-8 md:pl-12">
                    {/* Dot on timeline */}
                    <div className="absolute -left-[13px] top-0 w-6 h-6 bg-white border-4 border-pink-400 rounded-full shadow-md"></div>
                    
                    <GlassCard delay={index * 0.2} className="!p-0">
                        <div className="p-6 md:p-8">
                            <div className="flex flex-wrap justify-between items-start mb-4 gap-2">
                                <div>
                                    <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                                        <Briefcase size={20} className="text-pink-500" />
                                        {job.role}
                                    </h3>
                                    <p className="text-pink-600 font-semibold mt-1">{job.company}</p>
                                </div>
                                <div className="px-4 py-1 bg-indigo-50 text-indigo-500 rounded-full text-sm font-bold flex items-center gap-2 border border-indigo-100">
                                    <Calendar size={14} />
                                    {job.period}
                                </div>
                            </div>

                            <ul className="list-disc list-inside space-y-2 text-slate-600 mb-6 marker:text-pink-400">
                                {job.details.map((detail, idx) => (
                                    <li key={idx}>{detail}</li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap gap-2 pt-4 border-t border-pink-50">
                                {job.tags.map((tag) => (
                                    <span key={tag} className="px-2 py-1 bg-white text-slate-500 text-xs border border-slate-200 rounded-md shadow-sm">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </GlassCard>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};