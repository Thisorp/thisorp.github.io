import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { personalInfo, educationInfo, experienceData, skillCategoriesData } from '../data/portfolioData';
import { X, Printer, Download, Mail, Phone, Github, Linkedin, Globe, Award } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const { language, t } = useLanguage();

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-200 dark:bg-black/80 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 overflow-y-auto no-print">
      <div className="bg-white dark:bg-[#080808] border border-slate-300 dark:border-white/20 max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl p-6 sm:p-10 space-y-8 relative">
        
        {/* Controls Header (Hidden during print) */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-300 dark:border-white/10 no-print">
          <div className="font-mono text-xs text-orange-500 font-bold uppercase tracking-widest flex items-center gap-2">
            <span>CURRICULUM VITAE · TRẦN CHÍ CÔNG</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-4 py-2 bg-orange-600 hover:bg-orange-500 text-black font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-colors"
            >
              <Printer className="w-4 h-4" />
              <span>{language === 'en' ? 'Print / Export PDF' : 'In / Xuất PDF'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 bg-slate-50 dark:bg-[#050505] border border-slate-300 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-red-400 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CV Printable Document Content */}
        <div className="space-y-6 text-slate-900 dark:text-white font-mono print:text-black">
          
          {/* Header */}
          <div className="border-b border-slate-300 dark:border-white/10 pb-6 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white uppercase">
                  {personalInfo.name}
                </h1>
                <p className="font-mono text-xs text-orange-500 font-bold mt-1 uppercase tracking-wider">
                  {t(personalInfo.headline)}
                </p>
              </div>

              <div className="text-right text-xs font-mono text-slate-600 dark:text-slate-400 space-y-1">
                <div>{personalInfo.email}</div>
                <div>{personalInfo.phone}</div>
                <div>Hanoi, Vietnam</div>
              </div>
            </div>

            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed pt-2 font-mono">
              {t(personalInfo.positioning)}
            </p>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-orange-500 border-b border-slate-300 dark:border-white/10 pb-1">
              {t({ en: "EDUCATION", vi: "HỌC VẤN" })}
            </h2>

            <div className="space-y-1">
              <div className="flex items-center justify-between font-bold text-sm">
                <span>{educationInfo.institution}</span>
                <span className="font-mono text-xs text-slate-600 dark:text-slate-400">{educationInfo.period}</span>
              </div>
              <div className="text-xs font-mono text-orange-500 font-semibold">
                {t(educationInfo.degree)} · GPA: {educationInfo.gpa} ({t(educationInfo.honors)})
              </div>
              <div className="text-xs text-slate-600 dark:text-slate-400 italic font-mono">
                {t(educationInfo.scholarship)}
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-orange-500 border-b border-slate-300 dark:border-white/10 pb-1">
              {t({ en: "WORK EXPERIENCE", vi: "KINH NGHIỆM LÀM VIỆC" })}
            </h2>

            {experienceData.map((exp) => (
              <div key={exp.id} className="space-y-2">
                <div className="flex items-center justify-between font-bold text-sm">
                  <span>{exp.company} — <span className="text-orange-500 font-mono text-xs uppercase">{t(exp.role)}</span></span>
                  <span className="font-mono text-xs text-slate-600 dark:text-slate-400">{exp.period}</span>
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-300 font-mono">{t(exp.description)}</p>
                <ul className="space-y-1 pl-3 text-xs text-slate-700 dark:text-slate-300 font-mono">
                  {exp.responsibilities[t({ en: 'en', vi: 'vi' }) as 'en' | 'vi']?.map((r, i) => (
                    <li key={i} className="list-disc">{r}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Skill Matrix Summary */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-orange-500 border-b border-slate-300 dark:border-white/10 pb-1">
              {t({ en: "TECHNICAL SKILLS", vi: "KỸ NĂNG KỸ THUẬT" })}
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-slate-300 dark:bg-white/10 border border-slate-300 dark:border-white/10 text-xs font-mono">
              {skillCategoriesData.map((cat) => (
                <div key={cat.id} className="p-3 bg-slate-50 dark:bg-[#050505]">
                  <div className="font-bold text-orange-500 uppercase">{t(cat.name)}</div>
                  <div className="text-slate-600 dark:text-slate-400 text-[10px] mt-1">
                    {cat.skills.map(s => s.name).join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
