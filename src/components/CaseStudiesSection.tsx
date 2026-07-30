import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { caseStudiesData } from '../data/portfolioData';
import { CaseStudy } from '../types';
import {
  Terminal,
  Layers,
  ArrowRight,
  X,
  AlertTriangle,
  CheckCircle,
  FolderTree,
  Cpu,
  ShieldAlert,
  Sliders,
  Maximize2
} from 'lucide-react';

export const CaseStudiesSection: React.FC = () => {
  const { language, t } = useLanguage();
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  return (
    <section id="projects" className="py-16 bg-slate-50 dark:bg-[#050505] border-b border-slate-300 dark:border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-10">
          <div className="font-mono text-xs text-orange-500 font-semibold tracking-widest flex items-center gap-2 uppercase">
            <Terminal className="w-4 h-4" />
            <span>ls -la case_studies/</span>
          </div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            {t({ en: "Deep Technical Case Studies", vi: "Case Study Kỹ Thuật Chuyên Sâu" })}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-xs sm:text-sm font-mono">
            {t({
              en: "Real-world engineering problems, architectural decisions, and production outcomes.",
              vi: "Phân tích bài toán thực tế, quyết định kiến trúc và kết quả vận hành sản xuất."
            })}
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-300 dark:bg-white/10 border border-slate-300 dark:border-white/10">
          {caseStudiesData.map((cs) => (
            <div
              key={cs.id}
              className="p-6 bg-white dark:bg-[#080808] hover:bg-slate-200 dark:hover:bg-[#0c0c0c] transition-colors flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Category & Title */}
                <div>
                  <div className="inline-block px-2 py-0.5 text-[9px] font-mono font-bold bg-orange-600/10 text-orange-500 border border-orange-600/30 uppercase tracking-wider mb-2">
                    {t(cs.category)}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">
                    {t(cs.title)}
                  </h3>
                </div>

                {/* Tagline */}
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3 font-mono">
                  {t(cs.tagline)}
                </p>

                {/* Problem Highlight */}
                <div className="p-3 bg-slate-50 dark:bg-[#050505] border border-slate-300 dark:border-white/10 text-xs text-slate-700 dark:text-slate-300">
                  <span className="font-mono text-[9px] uppercase text-red-400 font-bold block mb-1">
                    Problem
                  </span>
                  <p className="line-clamp-2 font-mono text-[11px]">{t(cs.problem)}</p>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1">
                  {cs.technologies.slice(0, 5).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 text-[9px] font-mono bg-slate-50 dark:bg-[#050505] text-slate-600 dark:text-slate-400 border border-slate-300 dark:border-white/10 uppercase"
                    >
                      {tech}
                    </span>
                  ))}
                  {cs.technologies.length > 5 && (
                    <span className="px-2 py-0.5 text-[9px] font-mono bg-slate-50 dark:bg-[#050505] text-slate-500 dark:text-slate-500 border border-slate-300 dark:border-white/10">
                      +{cs.technologies.length - 5}
                    </span>
                  )}
                </div>
              </div>

              {/* Read Case Study Button */}
              <div className="pt-5 mt-4 border-t border-slate-300 dark:border-white/10">
                <button
                  onClick={() => setSelectedCaseStudy(cs)}
                  className="w-full py-2 px-3 bg-slate-200 dark:bg-white/5 hover:bg-orange-600 hover:text-black text-slate-900 dark:text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-between border border-slate-300 dark:border-white/10 hover:border-orange-500 transition-colors"
                >
                  <span>{t({ en: "Read Case Study", vi: "Xem Chi Tiết Case Study" })}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Case Study Full Detail Modal */}
      {selectedCaseStudy && (
        <div className="fixed inset-0 z-50 bg-slate-200 dark:bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto no-print">
          <div className="bg-white dark:bg-[#080808] border border-slate-300 dark:border-white/20 max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 space-y-6 relative">
            
            {/* Modal Close Button */}
            <button
              onClick={() => setSelectedCaseStudy(null)}
              className="absolute top-4 right-4 p-2 bg-slate-50 dark:bg-[#050505] border border-slate-300 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-orange-500 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Title */}
            <div className="space-y-2 pr-10">
              <span className="px-2 py-0.5 text-[10px] font-mono font-bold bg-orange-600/10 text-orange-500 border border-orange-600/30 uppercase tracking-wider">
                {t(selectedCaseStudy.category)}
              </span>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                {t(selectedCaseStudy.title)}
              </h2>
              <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm font-mono">
                {t(selectedCaseStudy.tagline)}
              </p>
            </div>

            {/* Tech Stack Bar */}
            <div className="p-3 bg-slate-50 dark:bg-[#050505] border border-slate-300 dark:border-white/10 flex flex-wrap gap-1.5">
              <span className="text-xs font-mono text-slate-600 dark:text-slate-400 mr-2 flex items-center gap-1 uppercase">
                <Cpu className="w-3.5 h-3.5 text-orange-500" />
                <span>Technologies:</span>
              </span>
              {selectedCaseStudy.technologies.map((tItem, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 text-[10px] font-mono bg-white dark:bg-[#080808] text-orange-500 border border-orange-600/30 uppercase"
                >
                  {tItem}
                </span>
              ))}
            </div>

            {/* Narrative Blocks (Enriched Case Study) */}
            <div className="space-y-6 pt-4 border-t border-slate-300 dark:border-white/10">
              
              {selectedCaseStudy.overview && (
                <div className="space-y-2">
                  <h3 className="font-mono text-xs uppercase tracking-widest text-slate-600 dark:text-slate-400 font-bold">Overview</h3>
                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-mono">{t(selectedCaseStudy.overview)}</p>
                </div>
              )}

              {selectedCaseStudy.background && (
                <div className="space-y-2">
                  <h3 className="font-mono text-xs uppercase tracking-widest text-slate-600 dark:text-slate-400 font-bold">Background</h3>
                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-mono">{t(selectedCaseStudy.background)}</p>
                </div>
              )}

              <div className="space-y-2">
                <h3 className="font-mono text-xs uppercase tracking-widest text-red-400 font-bold flex items-center gap-1.5">
                  <ShieldAlert className="w-4 h-4" />
                  <span>Problem Statement</span>
                </h3>
                <p className="p-4 bg-slate-50 dark:bg-[#050505] border border-slate-300 dark:border-white/10 text-sm text-slate-700 dark:text-slate-300 font-mono leading-relaxed">
                  {t(selectedCaseStudy.problem)}
                </p>
              </div>

              {selectedCaseStudy.architecture && (
                <div className="space-y-2">
                  <h3 className="font-mono text-xs uppercase tracking-widest text-blue-400 font-bold">Architecture</h3>
                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-mono">{t(selectedCaseStudy.architecture)}</p>
                </div>
              )}

              {selectedCaseStudy.implementation && (
                <div className="space-y-2">
                  <h3 className="font-mono text-xs uppercase tracking-widest text-orange-500 font-bold">Implementation</h3>
                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-mono">{t(selectedCaseStudy.implementation)}</p>
                </div>
              )}

              {selectedCaseStudy.deployment && (
                <div className="space-y-2">
                  <h3 className="font-mono text-xs uppercase tracking-widest text-emerald-500 font-bold">Deployment & CI/CD</h3>
                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-mono">{t(selectedCaseStudy.deployment)}</p>
                </div>
              )}

              {selectedCaseStudy.monitoring && (
                <div className="space-y-2">
                  <h3 className="font-mono text-xs uppercase tracking-widest text-purple-400 font-bold">Monitoring & Observability</h3>
                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-mono">{t(selectedCaseStudy.monitoring)}</p>
                </div>
              )}

              {selectedCaseStudy.operationalConsiderations && (
                <div className="space-y-2">
                  <h3 className="font-mono text-xs uppercase tracking-widest text-yellow-500 font-bold">Operational Considerations</h3>
                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-mono">{t(selectedCaseStudy.operationalConsiderations)}</p>
                </div>
              )}

              {selectedCaseStudy.lessonsLearned && (
                <div className="space-y-2">
                  <h3 className="font-mono text-xs uppercase tracking-widest text-teal-400 font-bold">Lessons Learned</h3>
                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-mono">{t(selectedCaseStudy.lessonsLearned)}</p>
                </div>
              )}

              {selectedCaseStudy.futureImprovements && (
                <div className="space-y-2">
                  <h3 className="font-mono text-xs uppercase tracking-widest text-slate-600 dark:text-slate-400 font-bold">Future Improvements</h3>
                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-mono">{t(selectedCaseStudy.futureImprovements)}</p>
                </div>
              )}

            </div>

            {/* BAD vs GOOD Alert Comparison Flow (If available) */}
            {selectedCaseStudy.alertComparison && (
              <div className="space-y-3">
                <h3 className="font-mono text-xs uppercase tracking-widest text-orange-500 font-bold flex items-center gap-1.5">
                  <Sliders className="w-4 h-4" />
                  <span>SRE Alert Transformation Comparison</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  
                  {/* BAD Flow */}
                  <div className="p-4 bg-red-950/20 border border-red-500/30 space-y-2">
                    <div className="font-mono text-xs font-bold text-red-400 uppercase flex items-center gap-1.5">
                      <AlertTriangle className="w-4 h-4" />
                      <span>BEFORE: BAD (NOISY)</span>
                    </div>
                    <div className="font-mono text-xs text-red-300 font-semibold">
                      {selectedCaseStudy.alertComparison.bad.alert}
                    </div>
                    <ul className="space-y-1 text-xs text-slate-700 dark:text-slate-300 font-mono">
                      {selectedCaseStudy.alertComparison.bad.flow.map((f, idx) => (
                        <li key={idx} className="flex items-center gap-1.5">
                          <span className="text-red-400">×</span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-xs text-red-300/80 pt-2 border-t border-red-500/20 font-mono">
                      {t(selectedCaseStudy.alertComparison.bad.consequences)}
                    </p>
                  </div>

                  {/* GOOD Flow */}
                  <div className="p-4 bg-emerald-950/20 border border-emerald-500/30 space-y-2">
                    <div className="font-mono text-xs font-bold text-emerald-400 uppercase flex items-center gap-1.5">
                      <CheckCircle className="w-4 h-4" />
                      <span>AFTER: GOOD (SRE ENRICHED)</span>
                    </div>
                    <div className="font-mono text-xs text-emerald-300 font-semibold">
                      {selectedCaseStudy.alertComparison.good.alert}
                    </div>
                    <ul className="space-y-1 text-xs text-slate-700 dark:text-slate-300 font-mono">
                      {selectedCaseStudy.alertComparison.good.flow.map((f, idx) => (
                        <li key={idx} className="flex items-center gap-1.5">
                          <span className="text-emerald-400">✓</span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-xs text-emerald-300/80 pt-2 border-t border-emerald-500/20 font-mono">
                      {t(selectedCaseStudy.alertComparison.good.benefits)}
                    </p>
                  </div>

                </div>
              </div>
            )}

            {/* Architecture Visualization text diagram */}
            {selectedCaseStudy.architectureDiagramText && (
              <div className="space-y-2">
                <h3 className="font-mono text-xs uppercase tracking-widest text-blue-400 font-bold flex items-center gap-1.5">
                  <Layers className="w-4 h-4" />
                  <span>Architecture Topology</span>
                </h3>
                <pre className="p-4 bg-slate-200 dark:bg-black text-orange-500 text-[11px] font-mono overflow-x-auto border border-slate-300 dark:border-white/10">
                  {selectedCaseStudy.architectureDiagramText}
                </pre>
              </div>
            )}

            {/* Folder Structure (If available) */}
            {selectedCaseStudy.folderStructure && (
              <div className="space-y-2">
                <h3 className="font-mono text-xs uppercase tracking-widest text-emerald-400 font-bold flex items-center gap-1.5">
                  <FolderTree className="w-4 h-4" />
                  <span>Modular Folder Architecture</span>
                </h3>
                <pre className="p-4 bg-slate-200 dark:bg-black text-blue-400 text-[11px] font-mono overflow-x-auto border border-slate-300 dark:border-white/10">
                  {selectedCaseStudy.folderStructure}
                </pre>
              </div>
            )}

            {/* Implementation Details */}
            {selectedCaseStudy.implementationDetails && (
              <div className="space-y-2">
                <h3 className="font-mono text-xs uppercase tracking-widest text-orange-500 font-bold">
                  Implementation Highlights
                </h3>
                <ul className="space-y-1 pl-2 font-mono">
                  {selectedCaseStudy.implementationDetails[language].map((item, idx) => (
                    <li key={idx} className="text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2">
                      <span className="text-orange-500">›</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Engineering Decisions */}
            {selectedCaseStudy.engineeringDecisions && (
              <div className="space-y-2">
                <h3 className="font-mono text-xs uppercase tracking-widest text-blue-400 font-bold">
                  Key Engineering Decisions
                </h3>
                <ul className="space-y-1 pl-2 font-mono">
                  {selectedCaseStudy.engineeringDecisions[language].map((item, idx) => (
                    <li key={idx} className="text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2">
                      <span className="text-blue-400">›</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Outcome */}
            {selectedCaseStudy.outcome && (
              <div className="p-4 bg-orange-600/10 border border-orange-600/30 text-slate-900 dark:text-white font-mono">
                <div className="text-xs uppercase font-bold text-orange-500 mb-1">
                  Final Production Outcome
                </div>
                <p className="text-xs sm:text-sm font-semibold">{t(selectedCaseStudy.outcome)}</p>
              </div>
            )}

          </div>
        </div>
      )}

    </section>
  );
};
