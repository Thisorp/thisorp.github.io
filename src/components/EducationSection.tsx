import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { educationInfo } from '../data/portfolioData';
import {
  Terminal,
  GraduationCap,
  Award,
  BookOpen,
  CheckCircle2,
  Calendar,
  Sparkles
} from 'lucide-react';

export const EducationSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="education" className="py-16 bg-slate-50 dark:bg-[#050505] border-b border-slate-300 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-10">
          <div className="font-mono text-xs text-orange-500 font-semibold tracking-widest flex items-center gap-2 uppercase">
            <Terminal className="w-4 h-4" />
            <span>cat education.json</span>
          </div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            {t({ en: "Education & Academic Honors", vi: "Học Vấn & Thành Tích Học Tập" })}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-xs sm:text-sm font-mono">
            {t({
              en: "Formal engineering background in Information Systems and academic achievements.",
              vi: "Nền tảng đào tạo chính quy Kỹ sư Hệ thống Thông tin cùng các thành tích xuất sắc."
            })}
          </p>
        </div>

        {/* Main Education Card */}
        <div className="p-6 sm:p-8 bg-white dark:bg-[#080808] border border-slate-300 dark:border-white/10 shadow-2xl space-y-6">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-300 dark:border-white/10">
            <div className="flex items-start gap-3">
              <div className="p-3 bg-slate-50 dark:bg-[#050505] border border-slate-300 dark:border-white/10 text-orange-500 shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  {educationInfo.institution}
                </h3>
                <div className="font-mono text-xs sm:text-sm font-bold text-orange-500 mt-1 uppercase tracking-wider">
                  {t(educationInfo.degree)}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 font-mono text-xs text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-[#050505] px-3 py-1.5 border border-slate-300 dark:border-white/10 uppercase tracking-wider w-fit">
              <Calendar className="w-4 h-4 text-orange-500" />
              <span>{educationInfo.period}</span>
            </div>
          </div>

          {/* Academic Metric Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-slate-300 dark:bg-white/10 border border-slate-300 dark:border-white/10">
            
            <div className="p-4 bg-slate-50 dark:bg-[#050505] text-center space-y-1">
              <div className="font-mono text-2xl font-black text-orange-500">
                {educationInfo.gpa}
              </div>
              <div className="font-mono text-[10px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-widest">
                Cumulative GPA
              </div>
            </div>

            <div className="p-4 bg-slate-50 dark:bg-[#050505] text-center space-y-1">
              <div className="font-mono text-base font-extrabold text-amber-400 flex items-center justify-center gap-1 uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-orange-500" />
                <span>{t(educationInfo.honors)}</span>
              </div>
              <div className="font-mono text-[10px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-widest">
                Graduation Rank
              </div>
            </div>

            <div className="p-4 bg-slate-50 dark:bg-[#050505] text-center space-y-1">
              <div className="font-mono text-xs font-bold text-blue-400 uppercase tracking-wider">
                {t(educationInfo.scholarship)}
              </div>
              <div className="font-mono text-[10px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-widest mt-1">
                Scholarship Recognition
              </div>
            </div>

          </div>

          {/* Key Academic Highlights */}
          <div className="space-y-3 pt-2">
            <h4 className="font-mono text-xs uppercase tracking-widest text-slate-600 dark:text-slate-400 font-bold flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-orange-500" />
              <span>{t({ en: "Academic Focus & Curriculum", vi: "Trọng Tâm Chương Trình Đào Tạo" })}</span>
            </h4>
            <ul className="space-y-2 pl-2">
              {educationInfo.highlights[t({ en: 'en', vi: 'vi' }) as 'en' | 'vi']?.map((h, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-mono">
                  <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};
