import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { architectureNodesData } from '../data/portfolioData';
import { ArchitectureNode } from '../types';
import {
  Terminal,
  Server,
  Users,
  Activity,
  Zap,
  ShieldCheck,
  ArrowDown,
  Cpu,
  Database,
  Radio
} from 'lucide-react';

export const ArchitectureSection: React.FC = () => {
  const { language, t } = useLanguage();
  const [selectedNode, setSelectedNode] = useState<ArchitectureNode>(architectureNodesData[0]);

  const getNodeIcon = (type: string) => {
    switch (type) {
      case 'users': return <Users className="w-5 h-5 text-orange-500" />;
      case 'app': return <Server className="w-5 h-5 text-orange-500" />;
      case 'services': return <Database className="w-5 h-5 text-orange-500" />;
      case 'observability': return <Activity className="w-5 h-5 text-orange-500" />;
      case 'automation': return <Zap className="w-5 h-5 text-orange-500" />;
      case 'reliability': return <ShieldCheck className="w-5 h-5 text-orange-500" />;
      default: return <Cpu className="w-5 h-5 text-orange-500" />;
    }
  };

  return (
    <section id="architecture" className="py-16 bg-slate-50 dark:bg-[#050505] border-b border-slate-300 dark:border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-10">
          <div className="font-mono text-xs text-orange-500 font-semibold tracking-widest flex items-center gap-2 uppercase">
            <Terminal className="w-4 h-4" />
            <span>systemctl status architecture</span>
          </div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            {t({ en: "How I Think About Infrastructure", vi: "Tư Duy Kiến Trúc Hạ Tầng" })}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-xs sm:text-sm font-mono">
            {t({
              en: "A holistic topology from client ingress down to telemetry, automated alerting, and reliability SLAs.",
              vi: "Sơ đồ luồng toàn diện từ cổng vào của client đến thu thập telemetry, cảnh báo và cam kết SLA."
            })}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Interactive Topology Stream */}
          <div className="lg:col-span-7 space-y-4">
            <div className="p-6 bg-white dark:bg-[#080808] border border-slate-300 dark:border-white/10 shadow-2xl space-y-3">
              <div className="font-mono text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-widest pb-2 border-b border-slate-300 dark:border-white/10 flex items-center justify-between">
                <span>Infrastructure Data Flow</span>
                <span className="text-orange-500">● Live Flow Visualizer</span>
              </div>

              {architectureNodesData.map((node, index) => {
                const isSelected = selectedNode.id === node.id;
                return (
                  <React.Fragment key={node.id}>
                    <button
                      onClick={() => setSelectedNode(node)}
                      className={`w-full p-4 text-left transition-colors border flex items-center justify-between group ${
                        isSelected
                          ? 'bg-orange-600/10 border-orange-500 text-slate-900 dark:text-white'
                          : 'bg-slate-50 dark:bg-[#050505] border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:border-white/20'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-2 border ${
                          isSelected ? 'bg-orange-600/20 border-orange-500' : 'bg-white dark:bg-[#080808] border-slate-300 dark:border-white/10'
                        }`}>
                          {getNodeIcon(node.type)}
                        </div>
                        <div>
                          <div className="font-mono text-[10px] text-orange-500 font-bold uppercase">
                            LAYER 0{index + 1}
                          </div>
                          <div className="font-mono text-sm font-bold text-slate-900 dark:text-white">
                            {t(node.title)}
                          </div>
                        </div>
                      </div>

                      <div className="font-mono text-xs text-orange-500 font-bold tracking-wider">
                        {isSelected ? "[ ACTIVE ]" : "[ INSPECT → ]"}
                      </div>
                    </button>

                    {index < architectureNodesData.length - 1 && (
                      <div className="flex justify-center py-0.5">
                        <ArrowDown className="w-4 h-4 text-orange-500/50" />
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          {/* Node Inspector Panel */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="p-6 bg-white dark:bg-[#080808] border border-slate-300 dark:border-white/10 shadow-2xl space-y-6">
              
              <div className="flex items-center gap-3 pb-4 border-b border-slate-300 dark:border-white/10">
                <div className="p-3 bg-orange-600/10 border border-orange-600/30">
                  {getNodeIcon(selectedNode.type)}
                </div>
                <div>
                  <span className="font-mono text-[10px] uppercase text-orange-500 font-bold tracking-widest">
                    Node Inspector
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white font-mono">
                    {t(selectedNode.title)}
                  </h3>
                </div>
              </div>

              {/* Description (Fallback if Purpose isn't specified) */}
              {!selectedNode.purpose && (
                <div className="space-y-1">
                  <div className="font-mono text-xs text-slate-600 dark:text-slate-400 font-bold uppercase tracking-wider">Overview</div>
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-mono">
                    {t(selectedNode.description)}
                  </p>
                </div>
              )}

              {/* Purpose */}
              {selectedNode.purpose && (
                <div className="space-y-1">
                  <div className="font-mono text-[10px] text-slate-600 dark:text-slate-400 font-bold uppercase tracking-widest">Purpose</div>
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-mono">
                    {t(selectedNode.purpose)}
                  </p>
                </div>
              )}

              {/* Responsibilities */}
              {selectedNode.responsibilities && (
                <div className="space-y-1">
                  <div className="font-mono text-[10px] text-blue-400 font-bold uppercase tracking-widest">Core Responsibilities</div>
                  <ul className="space-y-1 pl-2">
                    {selectedNode.responsibilities[language].map((resp, i) => (
                      <li key={i} className="text-xs text-slate-700 dark:text-slate-300 font-mono flex items-start gap-1.5">
                        <span className="text-blue-500">›</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Dependencies */}
              {selectedNode.dependencies && (
                <div className="space-y-1">
                  <div className="font-mono text-[10px] text-slate-600 dark:text-slate-400 font-bold uppercase tracking-widest">Dependencies</div>
                  <div className="flex flex-wrap gap-1">
                    {selectedNode.dependencies.map((dep, i) => (
                      <span
                        key={i}
                        className="px-1.5 py-0.5 text-[9px] font-mono bg-slate-50 dark:bg-[#050505] border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-300 uppercase"
                      >
                        {dep}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Failure Modes */}
              {selectedNode.failureModes && (
                <div className="space-y-1">
                  <div className="font-mono text-[10px] text-red-400 font-bold uppercase tracking-widest">Failure Modes</div>
                  <ul className="space-y-1 pl-2">
                    {selectedNode.failureModes[language].map((fail, i) => (
                      <li key={i} className="text-xs text-red-300/80 font-mono flex items-start gap-1.5">
                        <span className="text-red-500">×</span>
                        <span>{fail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Monitored Metrics */}
              {selectedNode.metrics && (
                <div className="space-y-2">
                  <div className="font-mono text-[10px] text-orange-400 font-bold uppercase tracking-widest">Key Telemetry Metrics</div>
                  <ul className="space-y-1 font-mono text-xs text-slate-700 dark:text-slate-300">
                    {selectedNode.metrics.map((m, i) => (
                      <li key={i} className="flex items-center gap-2 p-1.5 bg-slate-50 dark:bg-[#050505] border border-slate-300 dark:border-white/10">
                        <span className="w-1.5 h-1.5 bg-orange-500"></span>
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Alerting Rules */}
              {selectedNode.alerting && (
                <div className="space-y-1">
                  <div className="font-mono text-[10px] text-yellow-500 font-bold uppercase tracking-widest">SRE Alerting Rules</div>
                  <ul className="space-y-1 pl-2">
                    {selectedNode.alerting[language].map((alert, i) => (
                      <li key={i} className="text-[11px] text-yellow-300/80 font-mono flex items-start gap-1.5">
                        <span className="text-yellow-500">!</span>
                        <span>{alert}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Production Considerations */}
              {selectedNode.productionConsiderations && (
                <div className="space-y-1 p-3 bg-emerald-950/20 border border-emerald-500/20">
                  <div className="font-mono text-[10px] text-emerald-400 font-bold uppercase tracking-widest mb-1">Production Operations</div>
                  <ul className="space-y-1 pl-1">
                    {selectedNode.productionConsiderations[language].map((prod, i) => (
                      <li key={i} className="text-[11px] text-emerald-200/80 font-mono flex items-start gap-1.5">
                        <span className="text-emerald-500">✓</span>
                        <span>{prod}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies */}
              {selectedNode.techs && (
                <div className="space-y-2">
                  <div className="font-mono text-[10px] text-slate-600 dark:text-slate-400 font-bold uppercase tracking-widest">Technologies Stacked</div>
                  <div className="flex flex-wrap gap-1">
                    {selectedNode.techs.map((tItem, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 text-[10px] font-mono bg-slate-50 dark:bg-[#050505] border border-slate-300 dark:border-white/10 text-orange-500 uppercase"
                      >
                        {tItem}
                      </span>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
