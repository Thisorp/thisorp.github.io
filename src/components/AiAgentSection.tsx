import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  Terminal,
  Bot,
  BrainCircuit,
  Zap,
  Play,
  CheckCircle2,
  AlertTriangle,
  Cpu,
  FileCode,
  Sparkles,
  RefreshCw
} from 'lucide-react';

export const AiAgentSection: React.FC = () => {
  const { language, t } = useLanguage();

  const presetAlerts = [
    {
      id: 'kong-500',
      label: { en: 'Kong Gateway HTTP 500 Spike', vi: 'Spike HTTP 500 Kong Gateway' },
      snippet: 'alert: KongHttp5xxSpike\nseverity: critical\ninstance: kong-gw-prod-01:8001\nrate(kong_http_requests_total{status=~"5.."}[1m]) > 25\nError log: "lua entry thread abort: connection refused while connecting to upstream oracle-db-primary:1521"',
      result: {
        severity: 'CRITICAL',
        summary: {
          en: 'Kong API Gateway is failing upstream connections to Oracle Database due to socket connection rejection.',
          vi: 'Kong API Gateway đang gặp lỗi kết nối upstream tới Oracle Database do bị từ chối kết nối socket.'
        },
        rootCauseCandidate: {
          en: 'Oracle Database listener process (port 1521) is unreachable or max session pool ceiling was exceeded on oracle-db-primary.',
          vi: 'Oracle Database Listener (cổng 1521) không phản hồi hoặc đã vượt ngưỡng session kết nối tối đa trên oracle-db-primary.'
        },
        correlatedMetrics: [
          'oracle_sessions_active > 450 (Max Limit: 500)',
          'node_netstat_Tcp_PasvResets +120/sec',
          'kong_upstream_latency_ms > 5,000ms'
        ],
        suggestedRunbookAction: {
          en: [
            'Inspect Oracle listener: lsnrctl status',
            'Check active sessions query: SELECT count(*) FROM v$session WHERE status = \'ACTIVE\';',
            'Verify network path: nc -zv oracle-db-primary 1521'
          ],
          vi: [
            'Kiểm tra Oracle Listener: lsnrctl status',
            'Kiểm tra session CSDL: SELECT count(*) FROM v$session WHERE status = \'ACTIVE\';',
            'Thử kết nối mạng: nc -zv oracle-db-primary 1521'
          ]
        },
        promqlCheck: 'sum(rate(kong_http_requests_total{status=~"5.."}[5m])) by (upstream)'
      }
    },
    {
      id: 'container-oom',
      label: { en: 'Docker Container OOMKilled Event', vi: 'Sự Cố Container Tràn RAM (OOMKilled)' },
      snippet: 'alert: ContainerKilled\nseverity: warning\ncontainer_name: redis-cache-cluster-02\nExitCode: 137 (OOMKilled)\ndmesg: "Memory cgroup out of memory: Killed process 41029 (redis-server)"',
      result: {
        severity: 'WARNING',
        summary: {
          en: 'Redis container reached cgroup memory limit (1GB) and was terminated by Linux kernel OOM killer.',
          vi: 'Container Redis vượt quá giới hạn cgroup RAM (1GB) và bị Linux Kernel OOM Killer hạ gục.'
        },
        rootCauseCandidate: {
          en: 'Unbounded key allocation without TTL or redis maxmemory configuration exceeding Docker cgroup limit.',
          vi: 'Dữ liệu key tăng tự do không có TTL hoặc cấu hình redis maxmemory vượt quá giới hạn cgroup Docker.'
        },
        correlatedMetrics: [
          'container_memory_usage_bytes{container="redis-cache-cluster-02"} == 1,073,741,824',
          'redis_memory_max_bytes == 0 (Unset)',
          'node_vmstat_oom_kill == 1'
        ],
        suggestedRunbookAction: {
          en: [
            'Set Redis maxmemory in redis.conf: maxmemory 800mb',
            'Configure eviction policy: maxmemory-policy volatile-lru',
            'Verify cgroup limit in Docker Compose: mem_limit: 1.2g'
          ],
          vi: [
            'Cấu hình giới hạn maxmemory trong redis.conf: maxmemory 800mb',
            'Cấu hình chính sách xoá key: maxmemory-policy volatile-lru',
            'Tăng nhẹ cgroup limit trong Docker Compose: mem_limit: 1.2g'
          ]
        },
        promqlCheck: 'container_memory_working_set_bytes{container!=""} / container_spec_memory_limit_bytes > 0.9'
      }
    }
  ];

  const [selectedPreset, setSelectedPreset] = useState(presetAlerts[0]);
  const [customSnippet, setCustomSnippet] = useState(presetAlerts[0].snippet);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [activeResult, setActiveResult] = useState<typeof presetAlerts[0]['result'] | null>(presetAlerts[0].result);

  const handleSelectPreset = (preset: typeof presetAlerts[0]) => {
    setSelectedPreset(preset);
    setCustomSnippet(preset.snippet);
    setActiveResult(preset.result);
  };

  const handleRunAnalysis = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setActiveResult(selectedPreset.result);
    }, 800);
  };

  return (
    <section id="ai-agent" className="py-16 bg-slate-50 dark:bg-[#050505] border-b border-slate-300 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-10">
          <div className="font-mono text-xs text-orange-500 font-semibold tracking-widest flex items-center gap-2 uppercase">
            <Terminal className="w-4 h-4" />
            <span>python3 -m ai_agent_sre --status</span>
          </div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            {t({ en: "Exploring AI Agents for Infrastructure", vi: "Nghiên Cứu AI Agent Cho Hạ Tầng & SRE" })}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-xs sm:text-sm font-mono">
            {t({
              en: "Augmenting SRE workflows with AI agents for instant log parsing, metric correlation, and root cause triage.",
              vi: "Tăng cường quy trình SRE bằng AI Agent giúp phân tích log siêu tốc, kết nối metric và gợi ý phương án khắc phục."
            })}
          </p>
        </div>

        {/* Pipeline Diagram Concept */}
        <div className="p-6 bg-white dark:bg-[#080808] border border-slate-300 dark:border-white/10 shadow-2xl mb-10 space-y-4">
          <div className="font-mono text-xs font-bold text-orange-500 uppercase tracking-widest flex items-center gap-2">
            <BrainCircuit className="w-4 h-4" />
            <span>AI Agent Infrastructure Copilot Pipeline</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 items-center text-center font-mono text-xs">
            <div className="p-3 bg-slate-50 dark:bg-[#050505] border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-300">
              <span className="text-orange-500 block font-bold">01. Telemetry</span>
              <span>Metrics / Logs / Alerts</span>
            </div>
            <div className="text-orange-500 font-bold hidden md:block">→</div>
            <div className="p-3 bg-orange-600/10 border border-orange-600/30 text-slate-900 dark:text-white font-bold uppercase">
              <span className="text-orange-500 block font-bold">02. AI Agent</span>
              <span>Correlate & Diagnose</span>
            </div>
            <div className="text-orange-500 font-bold hidden md:block">→</div>
            <div className="p-3 bg-slate-50 dark:bg-[#050505] border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-300">
              <span className="text-blue-400 block font-bold">03. Engineer</span>
              <span>Verified Execution</span>
            </div>
          </div>
        </div>

        {/* Interactive AI Agent Diagnostic Simulator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left: Input Snippet */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-5 bg-white dark:bg-[#080808] border border-slate-300 dark:border-white/10 shadow-2xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-300 dark:border-white/10">
                <span className="font-mono text-xs font-bold text-slate-900 dark:text-white uppercase flex items-center gap-1.5">
                  <FileCode className="w-4 h-4 text-orange-500" />
                  <span>Alert & Log Snippet Input</span>
                </span>
                <span className="text-[9px] font-mono px-1.5 py-0.5 bg-slate-50 dark:bg-[#050505] border border-slate-300 dark:border-white/10 text-slate-600 dark:text-slate-400 uppercase">
                  Simulator
                </span>
              </div>

              {/* Preset Selector */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono text-slate-600 dark:text-slate-400 uppercase tracking-wider">Select Incident Preset:</label>
                <div className="grid grid-cols-1 gap-2">
                  {presetAlerts.map((preset) => (
                    <button
                      key={preset.id}
                      onClick={() => handleSelectPreset(preset)}
                      className={`p-2.5 text-left font-mono text-xs transition-colors border ${
                        selectedPreset.id === preset.id
                          ? 'bg-orange-600/10 border-orange-500 text-slate-900 dark:text-white font-bold'
                          : 'bg-slate-50 dark:bg-[#050505] border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:border-white/20'
                      }`}
                    >
                      {t(preset.label)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Textarea */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono text-slate-600 dark:text-slate-400 uppercase tracking-wider">Raw Telemetry Context:</label>
                <textarea
                  value={customSnippet}
                  onChange={(e) => setCustomSnippet(e.target.value)}
                  rows={6}
                  className="w-full p-3 bg-slate-50 dark:bg-[#050505] border border-slate-300 dark:border-white/10 text-xs font-mono text-orange-500 focus:outline-none focus:border-orange-500"
                />
              </div>

              {/* Run button */}
              <button
                onClick={handleRunAnalysis}
                disabled={isAnalyzing}
                className="w-full py-3 px-4 bg-orange-600 hover:bg-orange-500 text-black font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors disabled:opacity-50"
              >
                {isAnalyzing ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>AI Agent Analyzing Telemetry...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>Run AI Agent Diagnosis</span>
                  </>
                )}
              </button>

            </div>
          </div>

          {/* Right: AI Output Analysis */}
          <div className="lg:col-span-7">
            {activeResult && (
              <div className="p-6 bg-white dark:bg-[#080808] border border-slate-300 dark:border-white/10 shadow-2xl space-y-5">
                
                <div className="flex items-center justify-between pb-3 border-b border-slate-300 dark:border-white/10">
                  <div className="flex items-center gap-2">
                    <Bot className="w-5 h-5 text-orange-500" />
                    <span className="font-mono text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                      AI Agent Diagnostic Output
                    </span>
                  </div>
                  <span className={`px-2 py-0.5 text-[9px] font-mono font-bold border ${
                    activeResult.severity === 'CRITICAL'
                      ? 'bg-red-950/20 text-red-400 border-red-500/30'
                      : 'bg-amber-950/20 text-amber-400 border-amber-500/30'
                  }`}>
                    {activeResult.severity}
                  </span>
                </div>

                {/* Summary */}
                <div className="space-y-1">
                  <div className="font-mono text-[10px] text-slate-600 dark:text-slate-400 font-bold uppercase tracking-wider">Incident Summary</div>
                  <p className="p-3 bg-slate-50 dark:bg-[#050505] border border-slate-300 dark:border-white/10 text-xs text-slate-800 dark:text-slate-200 leading-relaxed font-mono">
                    {t(activeResult.summary)}
                  </p>
                </div>

                {/* Root Cause Candidate */}
                <div className="space-y-1">
                  <div className="font-mono text-[10px] text-amber-400 font-bold uppercase tracking-wider">Root Cause Hypothesis</div>
                  <p className="p-3 bg-amber-950/20 border border-amber-500/30 text-xs text-amber-200 leading-relaxed font-mono">
                    {t(activeResult.rootCauseCandidate)}
                  </p>
                </div>

                {/* Correlated Metrics */}
                <div className="space-y-1.5">
                  <div className="font-mono text-[10px] text-blue-400 font-bold uppercase tracking-wider">Correlated Metrics</div>
                  <ul className="space-y-1">
                    {activeResult.correlatedMetrics.map((m, i) => (
                      <li key={i} className="p-2 bg-slate-50 dark:bg-[#050505] border border-slate-300 dark:border-white/10 text-xs font-mono text-blue-300">
                        • {m}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Suggested Runbook Action CLI */}
                <div className="space-y-1.5">
                  <div className="font-mono text-[10px] text-orange-500 font-bold uppercase tracking-wider">Recommended CLI Runbook Action</div>
                  <ul className="space-y-1">
                    {activeResult.suggestedRunbookAction[t({ en: 'en', vi: 'vi' }) as 'en' | 'vi']?.map((action, i) => (
                      <li key={i} className="p-2 bg-slate-200 dark:bg-black text-orange-500 border border-slate-300 dark:border-white/10 text-xs font-mono">
                        $ {action}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* PromQL Verification */}
                {activeResult.promqlCheck && (
                  <div className="p-3 bg-slate-200 dark:bg-black border border-slate-300 dark:border-white/10 text-xs font-mono space-y-1">
                    <div className="text-[9px] text-slate-500 dark:text-slate-500 uppercase">PromQL Verification Query:</div>
                    <code className="text-orange-500">{activeResult.promqlCheck}</code>
                  </div>
                )}

              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
