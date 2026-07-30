import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { personalInfo } from '../data/portfolioData';
import {
  Terminal,
  Eye,
  Brain,
  Zap,
  Activity,
  TrendingUp,
  Server,
  Shield,
  Cpu,
  RefreshCw,
  Quote
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  const mindsetSteps = [
    {
      step: "01",
      title: { en: "Observe", vi: "Quan sát" },
      desc: { en: "Collect precise metrics, logs, and traces across every host & container.", vi: "Thu thập metric, log và trace chính xác trên mọi máy chủ & container." },
      icon: <Eye className="w-4 h-4 text-orange-500" />
    },
    {
      step: "02",
      title: { en: "Understand", vi: "Thấu hiểu" },
      desc: { en: "Analyze system behavior, dependency bottlenecks, and failure modes.", vi: "Phân tích hành vi hệ thống, điểm nghẽn và các nguyên nhân gây lỗi ngầm." },
      icon: <Brain className="w-4 h-4 text-blue-400" />
    },
    {
      step: "03",
      title: { en: "Automate", vi: "Tự động hóa" },
      desc: { en: "Replace manual repetitive tasks with CI/CD, scripts, and self-healing rules.", vi: "Thay thế thao tác thủ công bằng CI/CD, script và quy tắc tự sửa lỗi." },
      icon: <Zap className="w-4 h-4 text-orange-500" />
    },
    {
      step: "04",
      title: { en: "Monitor", vi: "Giám sát" },
      desc: { en: "Enforce actionable alerts and dashboards to detect anomalies in real-time.", vi: "Thiết lập cảnh báo hữu ích và dashboard phát hiện bất thường tức thì." },
      icon: <Activity className="w-4 h-4 text-emerald-400" />
    },
    {
      step: "05",
      title: { en: "Improve", vi: "Cải tiến" },
      desc: { en: "Perform postmortems, refine SLOs, and continuously optimize SLAs.", vi: "Phân tích sự cố (postmortem), tối ưu SLO và nâng cao chỉ số SLA." },
      icon: <TrendingUp className="w-4 h-4 text-blue-400" />
    }
  ];

  const coreFocusAreas = [
    { label: { en: "Linux System Admin", vi: "Quản trị Linux" }, detail: { en: "Ubuntu, CentOS, Rocky, Arch, Kernel Tuning, Systemd", vi: "Ubuntu, CentOS, Rocky, Arch, Tối ưu Kernel, Systemd" } },
    { label: { en: "Monitoring & Observability", vi: "Monitoring & Quan sát" }, detail: { en: "Prometheus, Grafana, Zabbix 7.x, Grafana Alloy, Loki", vi: "Prometheus, Grafana, Zabbix 7.x, Grafana Alloy, Loki" } },
    { label: { en: "Production Troubleshooting", vi: "Xử lý Sự cố Sản xuất" }, detail: { en: "Network I/O, OOM Killer, CPU Load, Proxy & Socket Locks", vi: "Nghẽn Mạng, OOM Killer, CPU Load, Lock Proxy & Socket" } },
    { label: { en: "Alert Engineering", vi: "Cảnh báo Chuẩn SRE" }, detail: { en: "Alertmanager, Noise Reduction (-65%), Telegram, Alerta", vi: "Alertmanager, Giảm 65% Cảnh báo rác, Telegram, Alerta" } },
    { label: { en: "Containers & CI/CD", vi: "Container & CI/CD" }, detail: { en: "Docker Compose, K3s, Helm, Hardening, GitLab CI", vi: "Docker Compose, K3s, Helm, Hardening, GitLab CI" } },
    { label: { en: "AI-Assisted Operations", vi: "AI Agent cho SRE" }, detail: { en: "Log Diagnosis, Root Cause Correlation, Runbooks", vi: "Chẩn đoán Log, Phân tích Root Cause, Tạo Runbook" } }
  ];

  return (
    <section id="about" className="py-16 bg-slate-50 dark:bg-[#050505] border-b border-slate-300 dark:border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-10">
          <div className="font-mono text-xs text-orange-500 font-semibold tracking-widest flex items-center gap-2 uppercase">
            <Terminal className="w-4 h-4" />
            <span>cat about.md</span>
          </div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            {t({ en: "About Me", vi: "Giới Thiệu Bản Thân" })}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-xs sm:text-sm font-mono">
            {t({
              en: "An engineer's journey from core System Administration to enterprise Observability & SRE.",
              vi: "Hành trình từ Quản trị Hệ thống đến Giám sát Chuyên sâu & SRE trong môi trường doanh nghiệp."
            })}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Story & Positioning */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 bg-white dark:bg-[#080808] border border-slate-300 dark:border-white/10 shadow-2xl space-y-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2 uppercase font-mono">
                <Server className="w-4 h-4 text-orange-500" />
                <span>{t({ en: "SRE & Observability Mindset", vi: "Tư duy SRE & Observability" })}</span>
              </h3>
              
              <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                {t({
                  en: "I started from System Administration, mastering Linux kernels, networking protocols, and systemd service management, before expanding into enterprise monitoring, observability platforms, containerization, and automation.",
                  vi: "Tôi khởi đầu từ Quản trị Hệ thống Linux, nắm vững Kernel, giao thức mạng và quản lý dịch vụ systemd, trước khi mở rộng sang thiết kế hệ thống giám sát tập trung, container hóa và tự động hóa hạ tầng."
                })}
              </p>

              <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                {t({
                  en: "At Vietnam Post (VNPost), I operate multi-layer enterprise monitoring infrastructure overseeing 1,000+ VM targets, Kong API Gateways, Oracle Databases, and automated alerting pipelines. My core focus is ensuring production systems stay visible, predictable, and resilient under heavy real-world load.",
                  vi: "Tại Vietnam Post (VNPost), tôi trực tiếp vận hành hệ thống giám sát hạ tầng quy mô trên 1.000+ VM, Kong API Gateway, Oracle Database và pipeline cảnh báo tự động. Mục tiêu hàng đầu của tôi là đảm bảo hệ thống luôn thông suốt, dự đoán trước nguy cơ và phản ứng tức thì khi có sự cố."
                })}
              </p>

              {/* Signature Philosophy Card */}
              <div className="p-4 bg-slate-50 dark:bg-[#050505] border border-slate-300 dark:border-white/10 border-l-2 border-l-orange-500 text-slate-800 dark:text-slate-200 flex items-start gap-3 mt-4">
                <Quote className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-orange-500 font-bold mb-1">
                    {t({ en: "Engineering Philosophy", vi: "Triết lý Kỹ thuật" })}
                  </div>
                  <div className="font-mono text-xs font-semibold italic text-slate-900 dark:text-white">
                    "{t(personalInfo.philosophy)}"
                  </div>
                  <div className="text-[11px] text-slate-600 dark:text-slate-400 mt-2 font-mono">
                    "Don't just monitor the system. Understand why it fails."
                  </div>
                </div>
              </div>
            </div>

            {/* Core Capability Badges Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-slate-300 dark:bg-white/10 border border-slate-300 dark:border-white/10">
              {coreFocusAreas.map((area, idx) => (
                <div
                  key={idx}
                  className="p-3.5 bg-white dark:bg-[#080808] hover:bg-slate-200 dark:hover:bg-[#0c0c0c] transition-colors"
                >
                  <div className="font-mono text-xs font-bold text-orange-500 uppercase">
                    {t(area.label)}
                  </div>
                  <div className="text-[11px] text-slate-600 dark:text-slate-400 mt-1 font-mono">
                    {t(area.detail)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Engineering Mindset Loop */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 bg-white dark:bg-[#080808] border border-slate-300 dark:border-white/10 shadow-2xl">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-300 dark:border-white/10">
                <h3 className="text-xs font-bold text-slate-900 dark:text-white font-mono flex items-center gap-2 uppercase tracking-wider">
                  <RefreshCw className="w-3.5 h-3.5 text-orange-500 animate-spin-slow" />
                  <span>{t({ en: "The SRE Operational Loop", vi: "Vòng Lặp Vận Hành SRE" })}</span>
                </h3>
                <span className="text-[9px] font-mono px-2 py-0.5 bg-orange-600/10 text-orange-500 border border-orange-600/30 uppercase">
                  Continuous
                </span>
              </div>

              {/* Mindset Steps */}
              <div className="space-y-2">
                {mindsetSteps.map((s, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-slate-50 dark:bg-[#050505] border border-slate-300 dark:border-white/10 hover:border-orange-500/50 transition-colors flex items-start gap-3"
                  >
                    <div className="p-1.5 bg-slate-100 dark:bg-[#0a0a0a] border border-slate-300 dark:border-white/10 shrink-0">
                      {s.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] text-orange-500 font-bold">{s.step}</span>
                        <h4 className="font-mono text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                          {t(s.title)}
                        </h4>
                      </div>
                      <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-1 font-mono leading-normal">
                        {t(s.desc)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
