import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Code, Award } from 'lucide-react';
import { GlassCard } from '../UI/GlassCard';
import { TECH_STACK, AWARDS } from '../../constants';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 container mx-auto px-4 md:px-10">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-10">
           <h2 className="text-3xl md:text-4xl font-bold text-pink-600">关于我</h2>
           <div className="h-1 flex-1 bg-gradient-to-r from-pink-300 to-transparent rounded-full"></div>
        </div>

        <div className="grid gap-8">
            <GlassCard>
                <p className="text-lg text-slate-700 leading-relaxed font-medium">
                    我是一名专注于 <b className="text-pink-500">AI</b> 与 <b className="text-pink-500">大模型</b> 的开发者。
                    目前在 <b className="text-purple-500">华东师范大学</b> 攻读计算机技术硕士学位, 专业方向是计算机辅助药物设计小分子化合物 (CADD)。
                    本科毕业于 <b className="text-purple-500">河南农业大学</b> 计算机科学与技术专业，
                    <span className="bg-yellow-100 px-1 rounded mx-1">GPA 3.75/4.0 (专业前1%)</span>，并获得国家励志奖学金。
                    <br /><br />
                    我热爱编程与技术探索，曾担任编程技术协会副会长。性格积极活跃，具备良好的团队组织能力。
                    在学术之外，我也是一名户外运动爱好者，喜欢羽毛球、跑步，曾完成骑行 318 川藏线的挑战。
                </p>
            </GlassCard>

            <div className="grid md:grid-cols-2 gap-8">
                <GlassCard delay={0.2}>
                    <div className="flex items-center gap-2 mb-4">
                        <Code className="text-pink-500" />
                        <h3 className="text-xl font-bold text-slate-800">技术栈</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {TECH_STACK.map(tech => (
                            <span key={tech} className="px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-sm font-semibold border border-pink-200">
                                {tech}
                            </span>
                        ))}
                    </div>
                </GlassCard>

                <GlassCard delay={0.4}>
                    <div className="flex items-center gap-2 mb-4">
                        <Trophy className="text-yellow-500" />
                        <h3 className="text-xl font-bold text-slate-800">荣誉奖项</h3>
                    </div>
                    <ul className="space-y-3">
                        {AWARDS.map((award, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-slate-700">
                                <Award size={18} className="text-pink-400 mt-1 shrink-0" />
                                <span>{award}</span>
                            </li>
                        ))}
                    </ul>
                </GlassCard>
            </div>
        </div>
      </div>
    </section>
  );
};