import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { skillCategoriesData } from '../data/portfolioData';
import {
  Terminal,
  Search,
  CheckCircle2,
  Cpu,
  Star,
  Activity,
  Layers
} from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCategories = skillCategoriesData.map((cat) => {
    if (activeCategory !== 'all' && cat.id !== activeCategory) return null;
    
    const matchingSkills = cat.skills.filter((s) => {
      if (!searchQuery) return true;
      return s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (s.description && t(s.description).toLowerCase().includes(searchQuery.toLowerCase()));
    });

    if (matchingSkills.length === 0) return null;

    return {
      ...cat,
      skills: matchingSkills
    };
  }).filter(Boolean);

  return (
    <section id="stack" className="py-16 bg-slate-50 dark:bg-[#050505] border-b border-slate-300 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-10">
          <div className="font-mono text-xs text-orange-500 font-semibold tracking-widest flex items-center gap-2 uppercase">
            <Terminal className="w-4 h-4" />
            <span>cat skills.json</span>
          </div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            {t({ en: "Technical Stack & Skill Cloud", vi: "Kỹ Năng & Công Nghệ Hạ Tầng" })}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-xs sm:text-sm font-mono">
            {t({
              en: "Production-proven tools, monitoring engines, container platforms, and automation frameworks.",
              vi: "Bộ công cụ đã qua thực chiến sản xuất, hệ thống giám sát, container và tự động hóa."
            })}
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8 bg-white dark:bg-[#080808] p-3 border border-slate-300 dark:border-white/10">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1 text-xs font-mono font-bold uppercase tracking-wider transition-colors ${
                activeCategory === 'all'
                  ? 'bg-orange-600 text-black'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:text-white hover:bg-slate-200 dark:bg-white/5'
              }`}
            >
              {t({ en: "All Categories", vi: "Tất Cả" })}
            </button>
            {skillCategoriesData.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1 text-xs font-mono font-bold uppercase tracking-wider transition-colors ${
                  activeCategory === cat.id
                    ? 'bg-orange-600 text-black'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:text-white hover:bg-slate-200 dark:bg-white/5'
                }`}
              >
                {t(cat.name)}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[220px]">
            <Search className="w-4 h-4 text-slate-500 dark:text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={t({ en: "Filter technology...", vi: "Lọc công nghệ..." })}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 bg-slate-50 dark:bg-[#050505] border border-slate-300 dark:border-white/10 text-xs font-mono text-slate-900 dark:text-white focus:outline-none focus:border-orange-500 uppercase tracking-wider"
            />
          </div>

        </div>

        {/* Skill Cards Display */}
        <div className="space-y-8">
          {filteredCategories.map((cat) => cat && (
            <div key={cat.id} className="space-y-4">
              <h3 className="font-mono text-xs font-bold text-orange-500 uppercase tracking-widest flex items-center gap-2 border-b border-slate-300 dark:border-white/10 pb-2">
                <Layers className="w-4 h-4" />
                <span>{t(cat.name)}</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-300 dark:bg-white/10 border border-slate-300 dark:border-white/10">
                {cat.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-white dark:bg-[#080808] hover:bg-slate-200 dark:hover:bg-[#0c0c0c] transition-colors space-y-2 group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors uppercase tracking-wider">
                          {skill.name}
                        </span>
                        {skill.badge && (
                          <span className="px-1.5 py-0.5 text-[9px] font-mono font-bold bg-orange-600/10 text-orange-500 border border-orange-600/30 uppercase">
                            {skill.badge}
                          </span>
                        )}
                      </div>

                      {/* Rating Stars */}
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <span
                            key={star}
                            className={`w-1.5 h-1.5 ${
                              star <= skill.level
                                ? 'bg-orange-500'
                                : 'bg-slate-300 dark:bg-white/10'
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    {skill.description && (
                      <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed font-mono">
                        {t(skill.description)}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
