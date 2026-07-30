import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Activity, ShieldCheck, MapPin, Cpu, Radio } from 'lucide-react';

export const EngineeringStatusStrip: React.FC = () => {
  const { language, t } = useLanguage();

  const items = [
    {
      label: { en: "SYSTEM", vi: "HỆ THỐNG" },
      value: { en: "OPERATIONAL", vi: "HOẠT ĐỘNG THƯỜNG TRỰC" },
      icon: <Activity className="w-4 h-4 text-emerald-400" />,
      color: "text-emerald-400",
      dot: true
    },
    {
      label: { en: "FOCUS", vi: "TRỌNG TÂM" },
      value: { en: "OBSERVABILITY & SRE", vi: "OBSERVABILITY & SRE" },
      icon: <ShieldCheck className="w-4 h-4 text-cyan-400" />,
      color: "text-cyan-400"
    },
    {
      label: { en: "CURRENTLY LEARNING", vi: "ĐANG NGHIÊN CỨU" },
      value: { en: "AI AGENT / PLATFORM ENG", vi: "AI AGENT / PLATFORM ENG" },
      icon: <Radio className="w-4 h-4 text-amber-400" />,
      color: "text-amber-400"
    },
    {
      label: { en: "ENVIRONMENT", vi: "MÔI TRƯỜNG" },
      value: { en: "LINUX / K8S / DOCKER", vi: "LINUX / K8S / DOCKER" },
      icon: <Cpu className="w-4 h-4 text-teal-400" />,
      color: "text-teal-400"
    },
    {
      label: { en: "LOCATION", vi: "ĐỊA ĐIỂM" },
      value: { en: "HANOI, VIETNAM", vi: "HÀ NỘI, VIỆT NAM" },
      icon: <MapPin className="w-4 h-4 text-emerald-400" />,
      color: "text-slate-800 dark:text-slate-200"
    }
  ];

  return (
    <section className="w-full bg-slate-50 dark:bg-[#050505] border-b border-slate-300 dark:border-white/10 no-print">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-slate-300 dark:bg-white/10 border-x border-slate-300 dark:border-white/10">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-center p-4 bg-white dark:bg-[#080808]"
            >
              <div className="flex items-center gap-1.5 text-[10px] font-mono tracking-widest text-slate-500 dark:text-slate-500 uppercase">
                {item.icon}
                <span>{t(item.label)}</span>
              </div>

              <div className="flex items-center gap-2 mt-1 font-mono text-xs font-bold tracking-wider text-slate-900 dark:text-white uppercase">
                {item.dot && (
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                )}
                <span className={item.color.includes('emerald') ? 'text-emerald-400' : item.color.includes('amber') ? 'text-orange-500' : 'text-slate-800 dark:text-slate-200'}>
                  {t(item.value)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
