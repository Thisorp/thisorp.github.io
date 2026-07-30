import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { timelineData } from '../data/portfolioData';
import { Terminal, Calendar, Clock, ArrowRight } from 'lucide-react';

export const TimelineSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="timeline" className="py-16 bg-slate-50 dark:bg-[#050505] border-b border-slate-300 dark:border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-10">
          <div className="font-mono text-xs text-orange-500 font-semibold tracking-widest flex items-center gap-2 uppercase">
            <Terminal className="w-4 h-4" />
            <span>git log --oneline</span>
          </div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            {t({ en: "Engineering Roadmap & Timeline", vi: "Lộ Trình Phát Triển Kỹ Thuật" })}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-xs sm:text-sm font-mono">
            {t({
              en: "Continuous growth from system administration to observability, alerting, and AI-assisted SRE.",
              vi: "Sự trưởng thành liên tục từ quản trị hệ thống đến observability, alert engineering và AI Agent."
            })}
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-slate-300 dark:bg-white/10 border border-slate-300 dark:border-white/10">
          {timelineData.map((item, idx) => (
            <div
              key={idx}
              className={`p-5 bg-white dark:bg-[#080808] hover:bg-slate-200 dark:hover:bg-[#0c0c0c] transition-colors flex flex-col justify-between ${
                item.isCurrent
                  ? 'border-t-2 border-t-orange-500'
                  : ''
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-2xl font-black text-orange-500">
                    {item.year}
                  </span>
                  {item.isCurrent && (
                    <span className="px-1.5 py-0.5 text-[9px] font-mono font-bold bg-orange-600/10 text-orange-500 border border-orange-600/30 uppercase tracking-wider">
                      ACTIVE
                    </span>
                  )}
                </div>

                <div>
                  <div className="font-mono text-[10px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-widest mb-1">
                    {t(item.subtitle)}
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm font-mono">
                    {t(item.title)}
                  </h3>
                </div>

                <p className="text-xs text-slate-700 dark:text-slate-300 font-mono leading-relaxed">
                  {t(item.description)}
                </p>
              </div>

              {/* Tags */}
              <div className="pt-4 mt-2 border-t border-slate-300 dark:border-white/10 flex flex-wrap gap-1">
                {item.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 text-[9px] font-mono bg-slate-50 dark:bg-[#050505] border border-slate-300 dark:border-white/10 text-slate-600 dark:text-slate-400 uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
