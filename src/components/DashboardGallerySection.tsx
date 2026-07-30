import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Terminal, Maximize2, X, ChevronRight, ChevronLeft, Activity } from 'lucide-react';

const DUMMY_DASHBOARDS = [
  {
    id: 'grafana-main',
    title: { en: 'Global Infrastructure Overview', vi: 'Tổng Quan Hạ Tầng Toàn Cầu' },
    category: 'Grafana',
    metrics: ['Nodes', 'CPU', 'Mem', 'Network'],
    imagePlaceholder: 'GRAFANA_MAIN_DASHBOARD_PLACEHOLDER'
  },
  {
    id: 'prometheus-alerts',
    title: { en: 'Alertmanager Pipeline Status', vi: 'Trạng Thái Luồng Cảnh Báo' },
    category: 'Prometheus',
    metrics: ['Firing', 'Resolved', 'Silenced'],
    imagePlaceholder: 'ALERTMANAGER_PIPELINE_PLACEHOLDER'
  },
  {
    id: 'alloy-topology',
    title: { en: 'Grafana Alloy Cluster Topology', vi: 'Cấu Trúc Cluster Grafana Alloy' },
    category: 'Telemetry',
    metrics: ['Ingestion', 'Dropped', 'Active Targets'],
    imagePlaceholder: 'ALLOY_TOPOLOGY_PLACEHOLDER'
  },
  {
    id: 'oracle-db',
    title: { en: 'Oracle RAC Performance Metrics', vi: 'Hiệu Năng Oracle RAC' },
    category: 'Database',
    metrics: ['Sessions', 'Wait Events', 'Hit Ratio'],
    imagePlaceholder: 'ORACLE_RAC_PLACEHOLDER'
  },
  {
    id: 'kong-gateway',
    title: { en: 'Kong API Gateway Traffic', vi: 'Lưu Lượng Kong API Gateway' },
    category: 'Networking',
    metrics: ['RPS', 'Latency', '4xx/5xx Rates'],
    imagePlaceholder: 'KONG_TRAFFIC_PLACEHOLDER'
  },
  {
    id: 'docker-swarm',
    title: { en: 'Docker Swarm Workloads', vi: 'Tải Docker Swarm' },
    category: 'Containers',
    metrics: ['Replicas', 'Restart Loops', 'OOM Kills'],
    imagePlaceholder: 'DOCKER_WORKLOADS_PLACEHOLDER'
  }
];

export const DashboardGallerySection: React.FC = () => {
  const { t } = useLanguage();
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const activeDashboard = DUMMY_DASHBOARDS.find(d => d.id === activeImage);

  return (
    <section id="dashboards" className="py-16 bg-slate-50 dark:bg-[#050505] border-b border-slate-300 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="font-mono text-xs text-orange-500 font-semibold tracking-widest flex items-center gap-2 uppercase">
            <Terminal className="w-4 h-4" />
            <span>ls -la /var/www/dashboards/</span>
          </div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            {t({ en: "Production Dashboards", vi: "Dashboards Production" })}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-xs sm:text-sm font-mono leading-relaxed">
            {t({
              en: "A gallery of monitoring interfaces and telemetry visualizations designed for rapid incident response and capacity planning. (Placeholders for real production screenshots).",
              vi: "Thư viện các giao diện giám sát và trực quan hóa dữ liệu được thiết kế cho việc phản ứng sự cố nhanh và quy hoạch tài nguyên. (Placeholder cho ảnh chụp production thực tế)."
            })}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DUMMY_DASHBOARDS.map((dashboard) => (
            <div 
              key={dashboard.id}
              onClick={() => setActiveImage(dashboard.id)}
              className="group cursor-pointer bg-white dark:bg-[#080808] border border-slate-300 dark:border-white/10 hover:border-orange-500/50 transition-colors flex flex-col"
            >
              {/* Image Placeholder area */}
              <div className="aspect-video bg-slate-100 dark:bg-[#0a0a0a] relative overflow-hidden flex items-center justify-center border-b border-slate-200 dark:border-white/5">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05]"></div>
                
                <div className="text-center space-y-2 z-10">
                  <Activity className="w-8 h-8 text-slate-700 mx-auto group-hover:text-orange-500 transition-colors" />
                  <div className="text-[10px] font-mono text-slate-600 font-bold tracking-widest group-hover:text-slate-600 dark:text-slate-400 transition-colors">
                    {dashboard.imagePlaceholder}
                  </div>
                </div>

                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="p-1.5 bg-slate-200 dark:bg-black/50 backdrop-blur border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white rounded-md">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Meta info */}
              <div className="p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-orange-500 uppercase tracking-widest border border-orange-500/30 px-2 py-0.5 bg-orange-500/10 rounded-full">
                    {dashboard.category}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider font-mono">
                  {t(dashboard.title)}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {dashboard.metrics.map(m => (
                    <span key={m} className="text-[10px] font-mono text-slate-500 dark:text-slate-500 bg-slate-200 dark:bg-white/5 px-1.5 py-0.5 rounded-sm">
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeImage && activeDashboard && (
        <div className="fixed inset-0 z-[100] bg-slate-200 dark:bg-black/95 backdrop-blur-sm flex flex-col p-4 sm:p-8">
          
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white font-mono uppercase tracking-wider">
                {t(activeDashboard.title)}
              </h3>
              <p className="text-xs font-mono text-orange-500 uppercase tracking-widest mt-1">
                {activeDashboard.category} · System Telemetry
              </p>
            </div>
            <button 
              onClick={() => setActiveImage(null)}
              className="p-2 bg-slate-300 dark:bg-white/10 hover:bg-white/20 text-slate-900 dark:text-white border border-slate-300 dark:border-white/20 transition-colors rounded-md"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 border border-slate-300 dark:border-white/10 bg-slate-50 dark:bg-[#050505] relative flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05]"></div>
            <div className="text-center space-y-4 z-10 p-8">
              <Activity className="w-16 h-16 text-slate-700 mx-auto animate-pulse" />
              <div className="text-xs sm:text-sm font-mono text-slate-500 dark:text-slate-500 font-bold tracking-widest leading-relaxed">
                [{activeDashboard.imagePlaceholder}]
                <br /><br />
                <span className="text-slate-600 font-normal normal-case tracking-normal">
                  (Insert high-resolution production dashboard screenshot here. Ensure sensitive data is redacted.)
                </span>
              </div>
            </div>
          </div>
          
        </div>
      )}
    </section>
  );
};
