import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Terminal, Activity, FileText, Network, Database } from 'lucide-react';

export const ObservabilitySection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="observability" className="py-16 bg-slate-50 dark:bg-[#050505] border-b border-slate-300 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="font-mono text-xs text-orange-500 font-semibold tracking-widest flex items-center gap-2 uppercase">
            <Terminal className="w-4 h-4" />
            <span>cat observability_pillars.yml</span>
          </div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            {t({ en: "Observability Philosophy", vi: "Triết Lý Observability" })}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-xs sm:text-sm font-mono leading-relaxed">
            {t({
              en: "Deep visibility into distributed systems. Moving from reactive monitoring to proactive observability through the four pillars.",
              vi: "Tầm nhìn sâu rộng vào các hệ thống phân tán. Chuyển từ giám sát bị động sang observability chủ động thông qua 4 trụ cột."
            })}
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-300 dark:bg-white/10 border border-slate-300 dark:border-white/10">
          
          {/* Metrics */}
          <div className="bg-white dark:bg-[#080808] p-6 space-y-4 hover:bg-slate-100 dark:bg-[#0a0a0a] transition-colors">
            <div className="flex items-center gap-3 border-b border-slate-300 dark:border-white/10 pb-4">
              <Activity className="w-6 h-6 text-orange-500" />
              <h3 className="font-mono font-bold text-slate-900 dark:text-white uppercase tracking-wider">Metrics</h3>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 font-mono leading-relaxed">
              {t({
                en: "Aggregated, numerical data representing system state over time. Used for alerting and high-level dashboards (Prometheus, VictoriaMetrics).",
                vi: "Dữ liệu dạng số được tổng hợp, biểu diễn trạng thái hệ thống theo thời gian. Dùng cho cảnh báo và dashboard tổng quan (Prometheus, VictoriaMetrics)."
              })}
            </p>
          </div>

          {/* Logs */}
          <div className="bg-white dark:bg-[#080808] p-6 space-y-4 hover:bg-slate-100 dark:bg-[#0a0a0a] transition-colors">
            <div className="flex items-center gap-3 border-b border-slate-300 dark:border-white/10 pb-4">
              <FileText className="w-6 h-6 text-blue-500" />
              <h3 className="font-mono font-bold text-slate-900 dark:text-white uppercase tracking-wider">Logs</h3>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 font-mono leading-relaxed">
              {t({
                en: "Immutable, timestamped records of discrete events. Crucial for deep-dive investigations and understanding specific errors (ELK, Loki).",
                vi: "Các bản ghi sự kiện chi tiết có timestamp. Quan trọng để điều tra chuyên sâu và hiểu rõ các lỗi cụ thể (ELK, Loki)."
              })}
            </p>
          </div>

          {/* Traces */}
          <div className="bg-white dark:bg-[#080808] p-6 space-y-4 hover:bg-slate-100 dark:bg-[#0a0a0a] transition-colors">
            <div className="flex items-center gap-3 border-b border-slate-300 dark:border-white/10 pb-4">
              <Network className="w-6 h-6 text-emerald-500" />
              <h3 className="font-mono font-bold text-slate-900 dark:text-white uppercase tracking-wider">Traces</h3>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 font-mono leading-relaxed">
              {t({
                en: "End-to-end request flows across microservices. Essential for identifying latency bottlenecks and distributed failures (Jaeger, Tempo).",
                vi: "Luồng request end-to-end qua các microservices. Quan trọng để tìm ra các điểm nghẽn độ trễ và lỗi hệ thống phân tán (Jaeger, Tempo)."
              })}
            </p>
          </div>

          {/* Profiles */}
          <div className="bg-white dark:bg-[#080808] p-6 space-y-4 hover:bg-slate-100 dark:bg-[#0a0a0a] transition-colors">
            <div className="flex items-center gap-3 border-b border-slate-300 dark:border-white/10 pb-4">
              <Database className="w-6 h-6 text-purple-500" />
              <h3 className="font-mono font-bold text-slate-900 dark:text-white uppercase tracking-wider">Profiles</h3>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 font-mono leading-relaxed">
              {t({
                en: "Continuous profiling of CPU, memory, and code-level performance. Used for cost optimization and deep application tuning (Pyroscope, Parca).",
                vi: "Profiling liên tục CPU, memory và hiệu năng ở cấp độ code. Dùng để tối ưu chi phí và tinh chỉnh ứng dụng (Pyroscope, Parca)."
              })}
            </p>
          </div>

        </div>

        {/* Alerting Philosophy */}
        <div className="mt-12 bg-white dark:bg-[#080808] border border-slate-300 dark:border-white/10 p-6 sm:p-8 space-y-6">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white font-mono uppercase tracking-widest border-b border-slate-300 dark:border-white/10 pb-3">
            {t({ en: "Alerting Engineering Rules", vi: "Nguyên Tắc Thiết Kế Alert" })}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="text-orange-500 font-bold text-xs uppercase font-mono">Actionable Only</div>
              <div className="text-xs text-slate-600 dark:text-slate-400 font-mono leading-relaxed">
                {t({ en: "Every alert must require human intervention. If it resolves itself without action, it's noise, not an alert.", vi: "Mọi cảnh báo đều phải cần sự can thiệp. Nếu nó tự hết mà không cần xử lý, đó là nhiễu, không phải cảnh báo." })}
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-orange-500 font-bold text-xs uppercase font-mono">Symptom-Based</div>
              <div className="text-xs text-slate-600 dark:text-slate-400 font-mono leading-relaxed">
                {t({ en: "Alert on user-facing pain (latency, errors) rather than internal causes (CPU spikes), which might not affect users.", vi: "Cảnh báo dựa trên trải nghiệm người dùng (độ trễ, lỗi) thay vì nguyên nhân nội bộ (CPU cao) có thể chưa ảnh hưởng user." })}
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-orange-500 font-bold text-xs uppercase font-mono">Runbook Attached</div>
              <div className="text-xs text-slate-600 dark:text-slate-400 font-mono leading-relaxed">
                {t({ en: "Every alert must link to a specific runbook detailing what it means, potential impact, and steps to investigate.", vi: "Mỗi cảnh báo phải đi kèm một runbook mô tả ý nghĩa, ảnh hưởng và các bước kiểm tra xử lý." })}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
