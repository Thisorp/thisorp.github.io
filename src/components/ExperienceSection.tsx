import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { experienceData } from '../data/portfolioData';
import {
  Terminal,
  Building2,
  Calendar,
  CheckCircle2,
  Server,
  Cpu,
  Layers,
  Zap,
  Activity,
  ShieldCheck
} from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-16 bg-slate-50 dark:bg-[#050505] border-b border-slate-300 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-10">
          <div className="font-mono text-xs text-orange-500 font-semibold tracking-widest flex items-center gap-2 uppercase">
            <Terminal className="w-4 h-4" />
            <span>cat experience.md</span>
          </div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            {t({ en: "Work Experience", vi: "Kinh Nghiệm Làm Việc" })}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-xs sm:text-sm font-mono">
            {t({
              en: "Hands-on experience operating real enterprise production infrastructure and monitoring stacks.",
              vi: "Kinh nghiệm thực chiến vận hành hệ thống hạ tầng và nền tảng giám sát sản xuất quy mô doanh nghiệp."
            })}
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="space-y-10 relative before:absolute before:inset-0 before:left-3 sm:before:left-6 before:w-px before:bg-slate-300 dark:bg-white/10">
          {experienceData.map((exp) => (
            <div key={exp.id} className="relative pl-8 sm:pl-14 group">
              
              {/* Timeline Indicator Node */}
              <div className="absolute left-1.5 sm:left-4.5 -translate-x-1/2 top-2 w-3 h-3 bg-orange-600 border border-black shadow-md shadow-orange-600/30"></div>

              {/* Experience Card */}
              <div className="p-6 bg-white dark:bg-[#080808] border border-slate-300 dark:border-white/10 shadow-2xl space-y-5">
                
                {/* Header info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-300 dark:border-white/10">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="p-1.5 bg-orange-600/10 text-orange-500 border border-orange-600/30">
                        <Building2 className="w-4 h-4" />
                      </span>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                        {exp.company}
                      </h3>
                      {exp.type === 'production' && (
                        <span className="px-2 py-0.5 text-[9px] font-mono font-bold bg-orange-600/10 text-orange-500 border border-orange-600/30 uppercase tracking-wider">
                          PRODUCTION
                        </span>
                      )}
                    </div>
                    <div className="font-mono text-xs text-orange-500 font-semibold mt-1 uppercase">
                      {t(exp.role)}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-[#050505] px-3 py-1 border border-slate-300 dark:border-white/10 w-fit">
                    <Calendar className="w-3.5 h-3.5 text-orange-500" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Role Description */}
                <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed font-mono">
                  {t(exp.description)}
                </p>

                {/* Key Responsibilities */}
                <div className="space-y-2">
                  <h4 className="font-mono text-[11px] uppercase tracking-widest text-slate-600 dark:text-slate-400 font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-orange-500" />
                    <span>{t({ en: "Key Responsibilities & Operations", vi: "Trách Nhiệm & Công Việc Vận Hành" })}</span>
                  </h4>
                  <ul className="grid grid-cols-1 gap-2 pl-1 font-mono">
                    {exp.responsibilities[t({ en: 'en', vi: 'vi' }) as 'en' | 'vi']?.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <span className="text-orange-500 font-bold">›</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Challenges */}
                {exp.challenges && (
                  <div className="p-4 bg-red-950/10 border border-red-500/20 space-y-2">
                    <h4 className="font-mono text-[10px] uppercase tracking-widest text-red-500 font-bold flex items-center gap-1.5">
                      <Activity className="w-3.5 h-3.5" />
                      <span>{t({ en: "Core Challenges", vi: "Thách Thức Cốt Lõi" })}</span>
                    </h4>
                    <p className="text-xs text-slate-700 dark:text-slate-300 font-mono leading-relaxed">
                      {t(exp.challenges)}
                    </p>
                  </div>
                )}

                {/* Reliability Improvements */}
                {exp.reliabilityImprovements && (
                  <div className="p-4 bg-emerald-950/10 border border-emerald-500/20 space-y-2">
                    <h4 className="font-mono text-[10px] uppercase tracking-widest text-emerald-500 font-bold flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>{t({ en: "Reliability Outcomes", vi: "Kết Quả Nâng Cao Độ Tin Cậy" })}</span>
                    </h4>
                    <p className="text-xs text-slate-700 dark:text-slate-300 font-mono leading-relaxed">
                      {t(exp.reliabilityImprovements)}
                    </p>
                  </div>
                )}

                {/* Production Impact Metric Cards */}
                {exp.impactMetrics.length > 0 && (
                  <div className="pt-2">
                    <div className="font-mono text-[10px] uppercase tracking-widest text-slate-500 dark:text-slate-500 mb-2 font-bold">
                      {t({ en: "PRODUCTION IMPACT", vi: "TÁC ĐỘNG VẬN HÀNH SẢN XUẤT" })}
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-slate-300 dark:bg-white/10 border border-slate-300 dark:border-white/10">
                      {exp.impactMetrics.map((m, idx) => (
                        <div
                          key={idx}
                          className="p-3 bg-slate-50 dark:bg-[#050505] text-center space-y-1"
                        >
                          <div className="font-mono text-base font-bold text-orange-500">
                            {m.value}
                          </div>
                          <div className="font-mono text-[10px] font-bold text-slate-900 dark:text-white uppercase">
                            {t(m.label)}
                          </div>
                          {m.subtext && (
                            <div className="text-[9px] text-slate-500 dark:text-slate-500 font-mono truncate">
                              {t(m.subtext)}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tech Badges */}
                <div className="pt-2 flex flex-wrap items-center gap-1.5">
                  {exp.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 text-[10px] font-mono bg-slate-50 dark:bg-[#050505] border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-300 uppercase tracking-wider"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
