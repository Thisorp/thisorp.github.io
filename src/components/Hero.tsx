import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { personalInfo } from '../data/portfolioData';
import {
  ArrowRight,
  FileText,
  Activity,
  Server,
  ShieldCheck,
  Zap,
  Database,
  Globe,
  Cpu
} from 'lucide-react';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  const { language, t } = useLanguage();
  
  // Simulated dynamic metrics for the dashboard feel
  const [uptime, setUptime] = useState(99.99);
  
  useEffect(() => {
    const interval = setInterval(() => {
      // Small fluctuation for visual effect
      setUptime(prev => prev > 99.995 ? 99.99 : prev + 0.001);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
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
    <section id="home" className="relative min-h-[90vh] flex flex-col justify-center py-12 lg:py-16 overflow-hidden bg-slate-50 dark:bg-[#050505] border-b border-slate-300 dark:border-white/10">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-orange-600/10 rounded-[100%] blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headlines & Positioning */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Top Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-100 dark:bg-[#0a0a0a] border border-slate-300 dark:border-white/10 text-[10px] font-mono tracking-widest uppercase">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
              <span className="text-slate-700 dark:text-slate-300">{t({ en: "SYSTEM STATUS: OPERATIONAL", vi: "TRẠNG THÁI: HOẠT ĐỘNG TỐT" })}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
                Engineering <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
                  Reliability.
                </span>
              </h1>
              <p className="text-sm sm:text-base font-mono text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
                {t({
                  en: "I design, build, automate, and operate production monitoring platforms. Shifting from reactive firefighting to proactive observability.",
                  vi: "Thiết kế, xây dựng, tự động hóa và vận hành các nền tảng giám sát production. Chuyển từ việc chữa cháy thụ động sang observability chủ động."
                })}
              </p>
            </div>

            {/* Metrics Mini-Strip */}
            <div className="flex flex-wrap items-center gap-4 py-2 border-y border-slate-200 dark:border-white/5">
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4 text-orange-500" />
                <span className="text-xs font-mono text-slate-700 dark:text-slate-300 uppercase">Prometheus / Loki</span>
              </div>
              <div className="flex items-center gap-2">
                <Server className="w-4 h-4 text-blue-500" />
                <span className="text-xs font-mono text-slate-700 dark:text-slate-300 uppercase">Linux / Docker</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-emerald-500" />
                <span className="text-xs font-mono text-slate-700 dark:text-slate-300 uppercase">Automation</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollToSection('experience')}
                className="px-6 py-3 bg-orange-600 hover:bg-orange-500 text-black font-mono font-bold text-xs uppercase tracking-widest flex items-center gap-2 transition-colors"
              >
                <span>{t({ en: "View Impact", vi: "Xem Tác Động" })}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenResumeModal}
                className="px-6 py-3 bg-slate-100 dark:bg-[#0a0a0a] hover:bg-slate-200 dark:bg-white/5 text-slate-900 dark:text-white font-mono font-bold text-xs uppercase tracking-widest border border-slate-300 dark:border-white/10 flex items-center gap-2 transition-colors hover:border-orange-500/50"
              >
                <FileText className="w-4 h-4" />
                <span>{t({ en: "Resume", vi: "Hồ Sơ" })}</span>
              </button>
            </div>

          </div>

          {/* Right Column: Dashboard UI */}
          <div className="lg:col-span-6 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/5 to-transparent blur-2xl"></div>
            
            <div className="bg-white dark:bg-[#080808] border border-slate-300 dark:border-white/10 shadow-2xl relative grid grid-cols-2 gap-px bg-slate-300 dark:bg-white/10 p-px">
              
              {/* Header Bar */}
              <div className="col-span-2 bg-slate-50 dark:bg-[#050505] p-3 flex items-center justify-between border-b border-slate-200 dark:border-white/5">
                <div className="flex items-center gap-3">
                  <Activity className="w-4 h-4 text-orange-500" />
                  <span className="text-[10px] font-mono text-slate-600 dark:text-slate-400 uppercase tracking-widest">Global Telemetry Control</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-[9px] font-mono text-green-500 uppercase">Live</span>
                </div>
              </div>

              {/* Panel 1: Availability */}
              <div className="bg-slate-100 dark:bg-[#0a0a0a] p-5 space-y-4 hover:bg-slate-200 dark:hover:bg-[#0c0c0c] transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-500 dark:text-slate-500 uppercase">Target SLA</span>
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-slate-900 dark:text-white font-mono">{uptime.toFixed(3)}%</div>
                  <div className="text-[10px] font-mono text-slate-500 dark:text-slate-500 mt-1 uppercase">Infrastructure Availability</div>
                </div>
                {/* Mini Graph */}
                <div className="h-8 flex items-end gap-1 opacity-50">
                  {[40, 60, 50, 80, 70, 90, 85, 100, 95, 90].map((h, i) => (
                    <div key={i} className="flex-1 bg-emerald-500/20 hover:bg-emerald-500/40 transition-colors" style={{ height: `${h}%` }}></div>
                  ))}
                </div>
              </div>

              {/* Panel 2: Monitoring Coverage */}
              <div className="bg-slate-100 dark:bg-[#0a0a0a] p-5 space-y-4 hover:bg-slate-200 dark:hover:bg-[#0c0c0c] transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-500 dark:text-slate-500 uppercase">Active Targets</span>
                  <Globe className="w-4 h-4 text-blue-500" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-slate-900 dark:text-white font-mono">1,248</div>
                  <div className="text-[10px] font-mono text-slate-500 dark:text-slate-500 mt-1 uppercase">Nodes & Containers</div>
                </div>
                <div className="h-8 flex items-end gap-1 opacity-50">
                  {[20, 30, 25, 45, 40, 60, 55, 75, 80, 100].map((h, i) => (
                    <div key={i} className="flex-1 bg-blue-500/20 hover:bg-blue-500/40 transition-colors" style={{ height: `${h}%` }}></div>
                  ))}
                </div>
              </div>

              {/* Panel 3: Active Alerts */}
              <div className="bg-slate-100 dark:bg-[#0a0a0a] p-5 space-y-4 hover:bg-slate-200 dark:hover:bg-[#0c0c0c] transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-500 dark:text-slate-500 uppercase">Alert Pipeline</span>
                  <Activity className="w-4 h-4 text-orange-500" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-slate-900 dark:text-white font-mono">0</div>
                  <div className="text-[10px] font-mono text-slate-500 dark:text-slate-500 mt-1 uppercase">P1 / P2 Incidents</div>
                </div>
                <div className="flex items-center gap-2 mt-4 text-[10px] font-mono">
                  <span className="text-slate-600 dark:text-slate-400">Auto-Remediated:</span>
                  <span className="text-orange-500">85%</span>
                </div>
              </div>

              {/* Panel 4: System Load */}
              <div className="bg-slate-100 dark:bg-[#0a0a0a] p-5 space-y-4 hover:bg-slate-200 dark:hover:bg-[#0c0c0c] transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-500 dark:text-slate-500 uppercase">Ingestion Rate</span>
                  <Cpu className="w-4 h-4 text-purple-500" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-slate-900 dark:text-white font-mono">1.2M</div>
                  <div className="text-[10px] font-mono text-slate-500 dark:text-slate-500 mt-1 uppercase">Metrics / Second</div>
                </div>
                <div className="flex items-center gap-2 mt-4 text-[10px] font-mono">
                  <span className="text-slate-600 dark:text-slate-400">Storage Retained:</span>
                  <span className="text-purple-500">90 Days</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

