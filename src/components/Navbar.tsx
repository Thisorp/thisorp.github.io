import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { personalInfo } from '../data/portfolioData';
import {
  Sun,
  Moon,
  Globe,
  Github,
  Linkedin,
  FileText,
  Menu,
  X,
  Terminal,
  Activity
} from 'lucide-react';

interface NavbarProps {
  onOpenResumeModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResumeModal }) => {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const navItems = [
    { id: 'home', label: { en: 'HOME', vi: 'TRANG CHỦ' } },
    { id: 'about', label: { en: 'ABOUT', vi: 'GIỚI THIỆU' } },
    { id: 'experience', label: { en: 'EXPERIENCE', vi: 'KINH NGHIỆM' } },
    { id: 'projects', label: { en: 'PROJECTS', vi: 'CASE STUDY' } },
    { id: 'stack', label: { en: 'STACK', vi: 'KỸ NĂNG' } },
    { id: 'architecture', label: { en: 'ARCHITECTURE', vi: 'KIẾN TRÚC' } },
    { id: 'timeline', label: { en: 'TIMELINE', vi: 'LỘ TRÌNH' } },
    { id: 'ai-agent', label: { en: 'AI AGENT', vi: 'AI AGENT' } },
    { id: 'blog', label: { en: 'BLOG', vi: 'BÀI VIẾT' } },
    { id: 'contact', label: { en: 'CONTACT', vi: 'LIÊN HỆ' } }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Scroll Progress
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(currentProgress);
      }

      setIsScrolled(window.scrollY > 20);

      // Section ScrollSpy
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 transition-all duration-300 no-print">
      {/* Scroll Progress Indicator Bar */}
      <div className="h-0.5 bg-slate-900 w-full overflow-hidden">
        <div
          className="h-full bg-orange-500 transition-all duration-150 ease-out shadow-[0_0_10px_rgba(249,115,22,0.8)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <nav
        className={`w-full px-4 sm:px-6 lg:px-8 py-3.5 transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-100 dark:bg-[#0a0a0a]/90 backdrop-blur-md border-b border-slate-300 dark:border-white/10 shadow-2xl'
            : 'bg-slate-50 dark:bg-[#050505]/80 border-b border-slate-300 dark:border-white/10 '
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Terminal Signature Brand */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-3 group text-left focus:outline-none"
            aria-label="Go to home"
          >
            <div className="w-8 h-8 bg-orange-600 rounded flex items-center justify-center font-mono font-bold text-black text-xs shadow-md shadow-orange-600/20 group-hover:bg-orange-500 transition-colors">
              TC
            </div>
            <div>
              <div className="font-mono text-xs sm:text-sm font-bold tracking-widest text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors uppercase flex items-center gap-1">
                <span>CONGTC</span>
                <span className="text-orange-500 font-bold">/</span>
                <span className="text-slate-600 dark:text-slate-400 group-hover:text-slate-800 dark:text-slate-200">THISORP</span>
              </div>
              <div className="text-[10px] text-slate-600 dark:text-slate-400 dark:text-slate-500 font-mono flex items-center gap-1.5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-subtle"></span>
                <span className="uppercase tracking-wider">SRE / Observability</span>
              </div>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-2.5 py-1.5 rounded-sm text-[11px] font-mono tracking-widest uppercase transition-all duration-200 relative ${
                    isActive
                      ? 'text-orange-500 font-bold bg-orange-600/10 border border-orange-600/30'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:text-white hover:bg-slate-200 dark:bg-white/5 :bg-slate-200/50'
                  }`}
                >
                  {t(item.label)}
                </button>
              );
            })}
          </div>

          {/* Actions: Social, Language, Theme, Resume */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded text-slate-600 dark:text-slate-400 hover:text-orange-500 hover:bg-slate-200 dark:bg-white/5 transition-all"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded text-slate-600 dark:text-slate-400 hover:text-orange-500 hover:bg-slate-200 dark:bg-white/5 transition-all"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <div className="h-4 w-px bg-slate-300 dark:bg-white/10 mx-1"></div>

            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold border border-slate-300 dark:border-white/20 hover:border-orange-500 bg-slate-200 dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:text-orange-500 transition-all uppercase tracking-wider"
              title="Switch Language (EN / VI)"
            >
              <span>{language.toUpperCase()}</span>
            </button>

            {/* Theme Switcher */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-sm border border-slate-300 dark:border-white/10 hover:border-orange-500 bg-slate-200 dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:text-orange-500 transition-all"
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            {/* Resume Download CTA Modal Trigger */}
            <button
              onClick={onOpenResumeModal}
              className="ml-1 px-4 py-1.5 bg-white text-black text-[11px] font-bold rounded-sm uppercase tracking-tighter hover:bg-orange-500 transition-colors flex items-center gap-1.5 shadow-sm"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{language === 'en' ? 'RESUME' : 'HỒ SƠ'}</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="p-1.5 rounded text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 border border-slate-700"
            >
              {language.toUpperCase()}
            </button>
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded border border-slate-700 text-slate-700 dark:text-slate-300"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-800 dark:text-slate-200 hover:text-emerald-400"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-slate-300 dark:border-white/10 bg-white dark:bg-[#080808] p-4 shadow-2xl space-y-2">
            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 text-xs font-mono text-left transition-colors uppercase tracking-wider ${
                    activeSection === item.id
                      ? 'bg-orange-600/10 border border-orange-600/30 text-orange-500 font-bold'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:bg-white/5 border border-transparent'
                  }`}
                >
                  {t(item.label)}
                </button>
              ))}
            </div>

            <div className="pt-3 mt-2 border-t border-slate-300 dark:border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-50 dark:bg-[#050505] border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-orange-500"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-50 dark:bg-[#050505] border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-orange-500"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResumeModal();
                }}
                className="px-4 py-2 text-xs font-mono font-bold bg-white text-black flex items-center gap-2 uppercase hover:bg-orange-500 transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span>{language === 'en' ? 'RESUME' : 'HỒ SƠ'}</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
