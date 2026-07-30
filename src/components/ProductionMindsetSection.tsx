import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Terminal, Shield, Repeat, Clock, Zap, AlertTriangle } from 'lucide-react';

export const ProductionMindsetSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="production-mindset" className="py-16 bg-white dark:bg-[#080808] border-b border-slate-300 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="font-mono text-xs text-orange-500 font-semibold tracking-widest flex items-center gap-2 uppercase">
            <Terminal className="w-4 h-4" />
            <span>cat sre_mindset.txt</span>
          </div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            {t({ en: "The Production Mindset", vi: "Tư Duy Vận Hành Production" })}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-xs sm:text-sm font-mono leading-relaxed">
            {t({
              en: "Operating at scale requires shifting from 'making it work' to 'making it reliable'. A breakdown of SRE core principles.",
              vi: "Vận hành hệ thống lớn đòi hỏi việc chuyển đổi từ 'làm cho nó chạy' sang 'làm cho nó ổn định'. Các nguyên tắc cốt lõi của SRE."
            })}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Lab vs Production */}
          <div className="bg-slate-50 dark:bg-[#050505] border border-slate-300 dark:border-white/10 p-6 hover:border-orange-500/50 transition-colors group">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-5 h-5 text-orange-500 group-hover:animate-pulse" />
              <h3 className="font-mono font-bold text-slate-900 dark:text-white uppercase tracking-wider text-sm">Lab vs. Production</h3>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 font-mono leading-relaxed space-y-2">
              <span className="block">{t({ en: "In the lab, a successful ping means the job is done.", vi: "Trong Lab, ping thành công nghĩa là xong việc." })}</span>
              <span className="block text-slate-700 dark:text-slate-300 border-l-2 border-orange-500 pl-2">
                {t({ en: "In production, success means handling network partitions, hardware failures, config drifts, and traffic spikes without downtime.", vi: "Ở Production, thành công là xử lý được rớt mạng, hỏng phần cứng, lệch cấu hình và bão traffic mà không bị downtime." })}
              </span>
            </p>
          </div>

          {/* High Availability */}
          <div className="bg-slate-50 dark:bg-[#050505] border border-slate-300 dark:border-white/10 p-6 hover:border-orange-500/50 transition-colors group">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-5 h-5 text-orange-500" />
              <h3 className="font-mono font-bold text-slate-900 dark:text-white uppercase tracking-wider text-sm">High Availability</h3>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 font-mono leading-relaxed space-y-2">
              <span className="block">{t({ en: "Assume everything will fail eventually.", vi: "Luôn mặc định rằng mọi thứ đều có thể hỏng." })}</span>
              <span className="block text-slate-700 dark:text-slate-300 border-l-2 border-orange-500 pl-2">
                {t({ en: "Design architectures with redundancy, automatic failovers, and graceful degradation. No single point of failure (SPOF).", vi: "Thiết kế kiến trúc dự phòng, tự động chuyển đổi lỗi và suy giảm duyên dáng. Không có điểm đen (SPOF)." })}
              </span>
            </p>
          </div>

          {/* Rollbacks & Deployments */}
          <div className="bg-slate-50 dark:bg-[#050505] border border-slate-300 dark:border-white/10 p-6 hover:border-orange-500/50 transition-colors group">
            <div className="flex items-center gap-3 mb-4">
              <Repeat className="w-5 h-5 text-orange-500 group-hover:-rotate-90 transition-transform" />
              <h3 className="font-mono font-bold text-slate-900 dark:text-white uppercase tracking-wider text-sm">Safe Rollbacks</h3>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 font-mono leading-relaxed space-y-2">
              <span className="block">{t({ en: "Deployments are risky. Fixing forward takes time.", vi: "Deploy luôn tiềm ẩn rủi ro. Fix lỗi ngay lúc đó mất thời gian." })}</span>
              <span className="block text-slate-700 dark:text-slate-300 border-l-2 border-orange-500 pl-2">
                {t({ en: "Prioritize automated, instantaneous rollbacks. CI/CD pipelines must support pushing previous stable states immediately if health checks fail.", vi: "Ưu tiên rollback tự động, tức thì. CI/CD phải hỗ trợ quay về bản ổn định ngay lập tức nếu health check thất bại." })}
              </span>
            </p>
          </div>

          {/* Toil Reduction */}
          <div className="bg-slate-50 dark:bg-[#050505] border border-slate-300 dark:border-white/10 p-6 hover:border-orange-500/50 transition-colors group">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-5 h-5 text-orange-500" />
              <h3 className="font-mono font-bold text-slate-900 dark:text-white uppercase tracking-wider text-sm">Eliminate Toil</h3>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 font-mono leading-relaxed space-y-2">
              <span className="block">{t({ en: "Manual, repetitive tasks drain engineering morale.", vi: "Các công việc thủ công, lặp lại làm giảm hiệu suất kỹ sư." })}</span>
              <span className="block text-slate-700 dark:text-slate-300 border-l-2 border-orange-500 pl-2">
                {t({ en: "Automate operational tasks (Infrastructure as Code, config management, auto-remediation) so engineers can focus on scaling.", vi: "Tự động hóa tác vụ vận hành (IaC, quản lý cấu hình, auto-remediation) để kỹ sư tập trung vào mở rộng." })}
              </span>
            </p>
          </div>

          {/* Incident Post-Mortems */}
          <div className="bg-slate-50 dark:bg-[#050505] border border-slate-300 dark:border-white/10 p-6 hover:border-orange-500/50 transition-colors group">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-5 h-5 text-orange-500" />
              <h3 className="font-mono font-bold text-slate-900 dark:text-white uppercase tracking-wider text-sm">Blameless Post-Mortems</h3>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 font-mono leading-relaxed space-y-2">
              <span className="block">{t({ en: "Incidents are system failures, not human failures.", vi: "Sự cố là lỗi của hệ thống, không phải của con người." })}</span>
              <span className="block text-slate-700 dark:text-slate-300 border-l-2 border-orange-500 pl-2">
                {t({ en: "Investigate incidents blamelessly to find root causes in processes or tooling. Create action items to prevent recurrence.", vi: "Điều tra sự cố không đổ lỗi để tìm nguyên nhân gốc trong quy trình/công cụ. Tạo action item ngăn chặn lặp lại." })}
              </span>
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
};
