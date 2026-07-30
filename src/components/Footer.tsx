import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { personalInfo } from '../data/portfolioData';
import { Terminal, ArrowUp, Github, Linkedin, Facebook, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-slate-50 dark:bg-[#050505] border-t border-slate-300 dark:border-white/10 py-12 text-slate-600 dark:text-slate-400 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-300 dark:border-white/10">
          
          {/* Identity */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-mono text-base font-bold text-slate-900 dark:text-white tracking-widest uppercase">
              <Terminal className="w-4 h-4 text-orange-500" />
              <span>CONGTC / THISORP</span>
            </div>
            <p className="font-mono text-xs text-orange-500 font-bold uppercase tracking-wider">
              System Engineer · DevOps · SRE
            </p>
            <p className="text-xs font-mono text-slate-600 dark:text-slate-400">
              Linux · Monitoring · Automation · Reliability
            </p>
          </div>

          {/* Social Links & Back-To-Top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-white dark:bg-[#080808] hover:bg-orange-600 hover:text-black text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-white/10 transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-white dark:bg-[#080808] hover:bg-orange-600 hover:text-black text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-white/10 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-white dark:bg-[#080808] hover:bg-orange-600 hover:text-black text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-white/10 transition-colors"
              title="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 bg-orange-600 hover:bg-orange-500 text-black font-bold transition-colors"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 font-mono text-xs text-slate-600 dark:text-slate-400">
          <div>
            © 2026 Trần Chí Công (CONGTC). All rights reserved.
          </div>
          <div className="text-slate-500 dark:text-slate-500">
            Built with curiosity, automation and too many terminals.
          </div>
        </div>

      </div>
    </footer>
  );
};
