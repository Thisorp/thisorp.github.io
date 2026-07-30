import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Terminal as TerminalIcon, CornerDownLeft, Trash2, HelpCircle } from 'lucide-react';

export const TerminalSection: React.FC = () => {
  const { language, t } = useLanguage();
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<Array<{ cmd: string; output: string }>>([
    {
      cmd: 'whoami',
      output: `Trần Chí Công (CONGTC / THISORP)
System Engineer / DevOps / SRE`
    },
    {
      cmd: 'uptime',
      output: `reliability > uptime
automation > repetition
observability > guesswork`
    }
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  // }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCmd = inputVal.trim().toLowerCase();
    if (!cleanCmd) return;

    let output = '';

    switch (cleanCmd) {
      case 'help':
        output = `Available commands:
  experience     - View work history and outcomes
  projects       - List case studies and engineering projects
  skills         - Display technical domains and proficiencies
  architecture   - View system design and topology overviews
  monitoring     - Show monitoring philosophies & dashboards
  blog           - List technical articles
  contact        - Get contact information
  resume         - Download or view full CV
  clear          - Clear terminal history`;
        break;
      case 'whoami':
        output = `Trần Chí Công (CONGTC / THISORP)
System Engineer / DevOps / SRE`;
        break;
      case 'uptime':
        output = `reliability > uptime
automation > repetition
observability > guesswork`;
        break;
      case 'experience':
        output = `[EXPERIENCE LOG]
1. Viettel - SRE / Platform Engineer
   Impact: Migrated legacy to K8s, reduced MTTR by 40% via automated runbooks.
2. VNPost - System Engineer
   Impact: Designed enterprise monitoring platform handling 1M+ metrics/sec.`;
        break;
      case 'projects':
        output = `[CASE STUDIES]
01. Enterprise Monitoring Platform (Prometheus, VictoriaMetrics)
02. SRE Alert Engineering & Pipeline (Alertmanager, Alerta)
03. Grafana Alloy Modular Architecture
04. Universal Health-Check Framework
05. Docker Hardening & Automation
06. Oracle DB & Kong Gateway Observability`;
        break;
      case 'skills':
        output = `[TECHNICAL SKILLS]
Monitoring:   Prometheus, Grafana, VictoriaMetrics, Zabbix
Observability: ELK, Loki, Jaeger
Containers:   Docker, Kubernetes (K3s), Helm
Linux/Cloud:  Ubuntu, Rocky, Arch, AWS, Cloudflare
Automation:   Bash, Python, GitLab CI/CD, Ansible`;
        break;
      case 'architecture':
        output = `[ARCHITECTURE SNAPSHOT]
Exporters -> Prometheus -> Alertmanager -> Webhooks -> Alerta/Telegram
Logs -> Promtail/Filebeat -> Loki/Elasticsearch -> Grafana/Kibana
Users -> Cloudflare -> Kong API Gateway -> Microservices`;
        break;
      case 'monitoring':
        output = `[MONITORING PHILOSOPHY]
- Actionable Only: If an alert resolves itself, it is noise.
- Symptom-Based: Alert on user pain (latency), not CPU spikes.
- Runbook Attached: Every alert links to a specific mitigation runbook.
- Metrics + Logs + Traces = Complete Observability.`;
        break;
      case 'blog':
        output = `[LATEST ARTICLES]
- Production Monitoring: Surviving 1M Metrics/Sec
- Alert Engineering: Reducing False Positives by 80%
- Grafana Alloy: The Future of Telemetry Collection
- Docker Hardening: Security in Production`;
        break;
      case 'contact':
        output = `[CONTACT INFO]
Name:    Tran Chi Cong (CONGTC)
Email:   congtran21062003@gmail.com
GitHub:  https://github.com/Thisorp
Role:    System Engineer / SRE`;
        break;
      case 'resume':
        output = `Downloading Resume...
(To view the full resume, please use the 'RESUME' button in the navigation bar to open the printable PDF modal.)`;
        break;
      case 'clear':
        setHistory([]);
        setInputVal('');
        return;
      default:
        output = `command not found: ${cleanCmd}. Type 'help' for available commands.`;
    }

    setHistory((prev) => [...prev, { cmd: inputVal, output }]);
    setInputVal('');
  };

  return (
    <section className="py-16 bg-slate-50 dark:bg-[#050505] border-b border-slate-300 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-8">
          <div className="font-mono text-xs text-orange-500 font-semibold tracking-widest flex items-center gap-2 uppercase">
            <TerminalIcon className="w-4 h-4" />
            <span>./interactive_terminal.sh</span>
          </div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            {t({ en: "Interactive Terminal CLI", vi: "Terminal Tương Tác Trực Tiếp" })}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-xs sm:text-sm font-mono">
            {t({
              en: "Execute real commands to inspect system profile, case studies, and service status.",
              vi: "Gõ lệnh trực tiếp để tra cứu thông tin hệ thống, dự án và trạng thái dịch vụ."
            })}
          </p>
        </div>

        {/* Terminal Box */}
        <div className="bg-white dark:bg-[#080808] border border-slate-300 dark:border-white/10 shadow-2xl overflow-hidden">
          
          {/* Header Bar */}
          <div className="px-4 py-3 bg-slate-50 dark:bg-[#050505] border-b border-slate-300 dark:border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2 font-mono text-xs text-slate-600 dark:text-slate-400">
              <span className="w-2.5 h-2.5 bg-red-500"></span>
              <span className="w-2.5 h-2.5 bg-amber-500"></span>
              <span className="w-2.5 h-2.5 bg-orange-500"></span>
              <span className="ml-2 uppercase tracking-wider">congtc@production:~ (zsh)</span>
            </div>

            <button
              onClick={() => setHistory([])}
              className="px-2 py-0.5 text-xs font-mono text-slate-600 dark:text-slate-400 hover:text-red-400 flex items-center gap-1 uppercase tracking-wider border border-slate-300 dark:border-white/10"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear</span>
            </button>
          </div>

          {/* Terminal History */}
          <div className="p-5 font-mono text-xs sm:text-sm space-y-4 max-h-[400px] overflow-y-auto text-slate-800 dark:text-slate-200">
            <div className="text-slate-500 dark:text-slate-500 text-xs font-mono uppercase">
              Type <span className="text-orange-500 font-bold">'help'</span> for available SRE commands.
            </div>

            {history.map((item, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                  <span className="text-orange-500 font-bold">congtc@production:~$</span>
                  <span className="text-slate-900 dark:text-white font-semibold">{item.cmd}</span>
                </div>
                <pre className="p-3 bg-slate-50 dark:bg-[#050505] border border-slate-300 dark:border-white/10 text-orange-500 font-mono text-xs whitespace-pre-wrap">
                  {item.output}
                </pre>
              </div>
            ))}

            {/* Prompt Input Form */}
            <form onSubmit={handleCommand} className="flex items-center gap-2 pt-2">
              <span className="text-orange-500 font-bold shrink-0">congtc@production:~$</span>
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="type command (e.g., help, projects, skills)..."
                className="w-full bg-transparent text-slate-900 dark:text-white font-mono text-xs sm:text-sm focus:outline-none"
              />
              <button type="submit" className="text-orange-500 hover:text-orange-400 p-1">
                <CornerDownLeft className="w-4 h-4" />
              </button>
            </form>

            <div ref={bottomRef} />
          </div>

        </div>

      </div>
    </section>
  );
};
