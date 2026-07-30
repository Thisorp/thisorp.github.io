import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Terminal, Activity, FileText, Network, Search, Wrench, CheckCircle } from 'lucide-react';

export const TroubleshootingSection: React.FC = () => {
  const { t } = useLanguage();

  const workflowSteps = [
    {
      icon: <Activity className="w-5 h-5 text-red-500" />,
      title: { en: "1. Incident Detection", vi: "1. Phát Hiện Sự Cố" },
      desc: { 
        en: "Alert triggered via Prometheus/Alertmanager. Acknowledge and assess severity (P1-P4).", 
        vi: "Cảnh báo được kích hoạt qua Prometheus/Alertmanager. Tiếp nhận và đánh giá mức độ (P1-P4)." 
      }
    },
    {
      icon: <FileText className="w-5 h-5 text-orange-500" />,
      title: { en: "2. Log Analysis", vi: "2. Phân Tích Logs" },
      desc: { 
        en: "Query centralized logs (ELK/Loki) for anomalies, exceptions, or error bursts matching the timeframe.", 
        vi: "Truy vấn logs tập trung (ELK/Loki) tìm điểm bất thường, lỗi hoặc sự gia tăng lỗi trong khoảng thời gian đó." 
      }
    },
    {
      icon: <Network className="w-5 h-5 text-blue-500" />,
      title: { en: "3. Metric & Network Correlation", vi: "3. Tương Quan Metrics & Mạng" },
      desc: { 
        en: "Cross-reference resource saturation (CPU, Mem, I/O) and network latency/dropped packets via Grafana.", 
        vi: "Đối chiếu tài nguyên (CPU, Mem, I/O) và độ trễ mạng/gói tin bị drop qua Grafana." 
      }
    },
    {
      icon: <Search className="w-5 h-5 text-amber-500" />,
      title: { en: "4. Root Cause Identification", vi: "4. Xác Định Nguyên Nhân Gốc (RCA)" },
      desc: { 
        en: "Isolate the failing component (e.g., DB lock, OOM killer, network partition) using systematic elimination.", 
        vi: "Cô lập thành phần lỗi (ví dụ: DB lock, OOM killer, nghẽn mạng) bằng phương pháp loại trừ hệ thống." 
      }
    },
    {
      icon: <Wrench className="w-5 h-5 text-purple-500" />,
      title: { en: "5. Mitigation & Recovery", vi: "5. Khắc Phục & Phục Hồi" },
      desc: { 
        en: "Execute runbooks, rollback deployments, or scale resources to restore service availability quickly.", 
        vi: "Thực thi runbook, rollback bản deploy, hoặc scale tài nguyên để khôi phục dịch vụ nhanh nhất." 
      }
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-green-500" />,
      title: { en: "6. Post-Mortem & Automation", vi: "6. Hậu Kiểm & Tự Động Hóa" },
      desc: { 
        en: "Document findings, update monitoring thresholds, and automate self-healing to prevent recurrence.", 
        vi: "Ghi chép lại kết quả, cập nhật ngưỡng cảnh báo và tự động hóa phục hồi để ngăn lỗi lặp lại." 
      }
    }
  ];

  return (
    <section id="troubleshooting" className="py-16 bg-white dark:bg-[#080808] border-b border-slate-300 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="font-mono text-xs text-orange-500 font-semibold tracking-widest flex items-center gap-2 uppercase">
            <Terminal className="w-4 h-4" />
            <span>cat runbook_incident_response.md</span>
          </div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            {t({ en: "Production Troubleshooting", vi: "Khắc Phục Sự Cố Production" })}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-xs sm:text-sm font-mono leading-relaxed">
            {t({
              en: "A systematic, observability-driven approach to investigating and resolving production incidents. Minimize MTTR (Mean Time To Recovery) through data-backed decisions.",
              vi: "Quy trình điều tra và xử lý sự cố có hệ thống, dựa trên dữ liệu observability. Giảm thiểu MTTR (Thời gian phục hồi trung bình) bằng các quyết định dựa trên dữ liệu."
            })}
          </p>
        </div>

        {/* Workflow Grid */}
        <div className="relative">
          {/* Connecting Line for Desktop */}
          <div className="hidden lg:block absolute top-[50%] left-0 w-full h-0.5 bg-slate-200 dark:bg-white/5 -z-10"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workflowSteps.map((step, idx) => (
              <div 
                key={idx} 
                className="bg-slate-50 dark:bg-[#050505] border border-slate-300 dark:border-white/10 p-6 flex flex-col hover:border-slate-300 dark:border-white/20 transition-colors group relative"
              >
                {/* Step Number Badge */}
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-slate-200 dark:bg-black border border-slate-300 dark:border-white/10 flex items-center justify-center font-mono text-xs text-slate-500 dark:text-slate-500 group-hover:text-orange-500 transition-colors">
                  0{idx + 1}
                </div>

                <div className="p-3 bg-slate-200 dark:bg-white/5 w-fit mb-5 border border-slate-200 dark:border-white/5 group-hover:border-slate-300 dark:border-white/10 transition-colors">
                  {step.icon}
                </div>
                
                <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3 font-mono">
                  {t(step.title)}
                </h3>
                
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-mono">
                  {t(step.desc)}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
