import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { blogArticlesData } from '../data/portfolioData';
import { BlogArticle } from '../types';
import {
  Terminal,
  BookOpen,
  Calendar,
  Clock,
  ArrowRight,
  X,
  Tag
} from 'lucide-react';

export const BlogSection: React.FC = () => {
  const { language, t } = useLanguage();
  const [selectedArticle, setSelectedArticle] = useState<BlogArticle | null>(null);

  return (
    <section id="blog" className="py-16 bg-slate-50 dark:bg-[#050505] border-b border-slate-300 dark:border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-10">
          <div className="font-mono text-xs text-orange-500 font-semibold tracking-widest flex items-center gap-2 uppercase">
            <Terminal className="w-4 h-4" />
            <span>ls -la blog/</span>
          </div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            {t({ en: "Technical Writing & SRE Insights", vi: "Bài Viết & Chia Sẻ Kỹ Thuật SRE" })}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-xs sm:text-sm font-mono">
            {t({
              en: "Deep dives into alert engineering, service health check probes, and AI-assisted troubleshooting.",
              vi: "Bài viết phân tích thiết kế alert, kiểm tra sức khỏe dịch vụ và ứng dụng AI Agent trong SRE."
            })}
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-300 dark:bg-white/10 border border-slate-300 dark:border-white/10">
          {blogArticlesData.map((article) => (
            <div
              key={article.id}
              className="p-6 bg-white dark:bg-[#080808] hover:bg-slate-200 dark:hover:bg-[#0c0c0c] transition-colors flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-slate-600 dark:text-slate-400">
                  <span className="px-2 py-0.5 text-[9px] font-bold bg-orange-600/10 text-orange-500 border border-orange-600/30 uppercase tracking-wider">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1 text-[11px]">
                    <Clock className="w-3 h-3 text-orange-500" />
                    <span>{article.readTime}</span>
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">
                  {t(article.title)}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3 font-mono">
                  {t(article.summary)}
                </p>

                <div className="flex flex-wrap gap-1 pt-2">
                  {article.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 text-[9px] font-mono bg-slate-50 dark:bg-[#050505] text-slate-600 dark:text-slate-400 border border-slate-300 dark:border-white/10 uppercase"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-5 mt-4 border-t border-slate-300 dark:border-white/10">
                <button
                  onClick={() => setSelectedArticle(article)}
                  className="w-full py-2 px-3 bg-slate-200 dark:bg-white/5 hover:bg-orange-600 hover:text-black text-slate-900 dark:text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-between border border-slate-300 dark:border-white/10 hover:border-orange-500 transition-colors"
                >
                  <span>{t({ en: "Read Article", vi: "Đọc Bài Viết" })}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 bg-slate-200 dark:bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto no-print">
          <div className="bg-white dark:bg-[#080808] border border-slate-300 dark:border-white/20 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 space-y-6 relative">
            
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 right-4 p-2 bg-slate-50 dark:bg-[#050505] border border-slate-300 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-orange-500 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2 pr-10">
              <div className="flex items-center gap-3 text-xs font-mono text-slate-600 dark:text-slate-400 uppercase">
                <span className="px-2 py-0.5 text-[9px] font-bold bg-orange-600/10 text-orange-500 border border-orange-600/30">
                  {selectedArticle.category}
                </span>
                <span>{selectedArticle.date}</span>
                <span>• {selectedArticle.readTime}</span>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                {t(selectedArticle.title)}
              </h2>
            </div>

            {/* Article Content */}
            <div className="p-6 bg-slate-50 dark:bg-[#050505] border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-300 text-xs leading-relaxed font-mono whitespace-pre-wrap">
              {t(selectedArticle.content)}
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
