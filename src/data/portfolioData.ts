import {
  PersonalInfo,
  CaseStudy,
  SkillCategory,
  ExperienceItem,
  TimelineItem,
  EducationInfo,
  BlogArticle,
  ArchitectureNode
} from '../types';

export const personalInfo: PersonalInfo = {
  name: "Trần Chí Công",
  nickname: "CONGTC / THISORP",
  headline: {
    en: "System Engineer / DevOps · Monitoring Engineer · Linux · Docker · Prometheus · Grafana · AI Agent",
    vi: "Kỹ sư Hệ thống / DevOps · Kỹ sư Giám sát · Linux · Docker · Prometheus · Grafana · AI Agent"
  },
  positioning: {
    en: "SRE / Observability Engineer focused on Monitoring, Prometheus, Grafana, Zabbix, Linux, Docker, Kubernetes, CI/CD and Production Troubleshooting.",
    vi: "Kỹ sư SRE / Observability tập trung vào Giám sát hệ thống, Prometheus, Grafana, Zabbix, Linux, Docker, Kubernetes, CI/CD và Xử lý sự cố môi trường Sản xuất."
  },
  shortIntro: {
    en: "Hi, I'm CONGTC aka THISORP. Power up with System Admin, now I'm digging in Monitor tools with AI agent.",
    vi: "Xin chào, tôi là CONGTC (THISORP). Khởi đầu từ Quản trị Hệ thống Linux, hiện tôi đang chuyên sâu về giải pháp Monitoring & Observability kết hợp AI Agent."
  },
  philosophy: {
    en: "Production-first. Automation-first. Reliability-driven.",
    vi: "Ưu tiên Production. Ưu tiên Tự động hóa. Định hướng Độ tin cậy cao."
  },
  email: "congtran21062003@gmail.com",
  phone: "+84 398211750",
  github: "https://github.com/Thisorp",
  linkedin: "https://www.linkedin.com/in/thisorp/",
  facebook: "https://facebook.com/thisorpie",
  location: {
    en: "Hanoi, Vietnam",
    vi: "Hà Nội, Việt Nam"
  }
};

export const educationInfo: EducationInfo = {
  institution: "University of Economics – Technology for Industries (UNETI)",
  degree: {
    en: "Engineer in Information Systems",
    vi: "Kỹ sư Hệ thống Thông tin"
  },
  period: "2021 — 2025",
  gpa: "3.69 / 4.00",
  honors: {
    en: "Graduated with Distinction",
    vi: "Tốt nghiệp Xuất sắc"
  },
  scholarship: {
    en: "Excellent Academic Scholarship — 6 / 8 semesters",
    vi: "Học bổng Khuyến khích Học tập loại Xuất sắc — 6 / 8 học kỳ"
  },
  highlights: {
    en: [
      "Top percentile academic performance across Information Systems engineering curriculum",
      "Specialized in Operating Systems, Computer Networking, Database Systems, and System Architecture",
      "Graduation Capstone: High-performance production web service & infrastructure deployment"
    ],
    vi: [
      "Thành tích học tập thuộc nhóm xuất sắc toàn ngành Hệ thống Thông tin",
      "Chuyên sâu về Hệ điều hành Linux, Mạng máy tính, Hệ quản trị CSDL và Kiến trúc Hệ thống",
      "Đồ án tốt nghiệp: Triển khai hạ tầng và ứng dụng web hiệu năng cao hướng sản xuất"
    ]
  }
};

export const experienceData: ExperienceItem[] = [
  {
    id: "vnpost",
    company: "Vietnam Post (VNPost)",
    role: {
      en: "System Engineer / DevOps",
      vi: "Kỹ sư Hệ thống / DevOps"
    },
    period: "2024 — Present",
    type: "production",
    description: {
      en: "Operating nationwide production enterprise infrastructure and monitoring systems across physical servers, VMs, containers, databases, and API gateways.",
      vi: "Vận hành hạ tầng công nghệ thông tin doanh nghiệp quy mô toàn quốc, quản trị hệ thống giám sát trên hàng nghìn VM, server, container, CSDL và API gateway."
    },
    responsibilities: {
      en: [
        "Architect and operate multi-layer enterprise monitoring infrastructure utilizing Prometheus, Grafana, Alertmanager, Grafana Alloy, and Zabbix.",
        "Maintain observability for 1,000+ infrastructure VM targets, physical nodes, network devices, and containerized microservices.",
        "Implement end-to-end API & Service observability for Kong Gateway, Nginx reverse proxies, and Oracle Databases.",
        "Engineered actionable alerting pipelines with strict severity grouping, alert deduplication, and automated routing via Alertmanager to Telegram/Alerta.",
        "Perform deep Linux kernel, systemd, memory/disk I/O, and network bottleneck troubleshooting during production incidents.",
        "Enforce CI/CD linting and validation pipelines for monitoring configuration using GitLab CI and promtool before production rollout."
      ],
      vi: [
        "Xây dựng và vận hành hệ thống giám sát đa tầng doanh nghiệp sử dụng Prometheus, Grafana, Alertmanager, Grafana Alloy và Zabbix.",
        "Duy trì khả năng quan sát (observability) cho hơn 1.000+ VM, máy chủ vật lý, thiết bị mạng và dịch vụ container.",
        "Triển khai giám sát toàn diện cho Kong API Gateway, Nginx Reverse Proxy và hệ quản trị CSDL Oracle Database.",
        "Xây dựng alert pipeline chuẩn SRE với cơ chế nhóm alert, khử trùng lặp (deduplication) và điều hướng cảnh báo qua Telegram/Alerta.",
        "Phân tích chuyên sâu sự cố Linux Kernel, systemd, nghẽn I/O, RAM/Disk và sự cố mạng trong môi trường sản xuất 24/7.",
        "Áp dụng quy trình kiểm tra cấu hình tự động (CI/CD linting) bằng GitLab CI và promtool trước khi triển khai cấu hình giám sát."
      ]
    },
    technologies: [
      "Prometheus", "Grafana", "Alertmanager", "Grafana Alloy", "Zabbix",
      "Linux (Ubuntu/CentOS/Rocky)", "Docker", "Kong Gateway", "Oracle DB",
      "PostgreSQL", "GitLab CI", "Node Exporter", "Blackbox Exporter"
    ],
    impactMetrics: [
      { label: { en: "Monitored Targets", vi: "Số lượng Target" }, value: "1,000+", subtext: { en: "VMs & Infrastructure targets", vi: "VMs và thiết bị hạ tầng" } },
      { label: { en: "Uptime SLA", vi: "Cam kết Uptime" }, value: "99.9%", subtext: { en: "24/7 Production monitoring", vi: "Giám sát sản xuất 24/7" } },
      { label: { en: "False Positive Cut", vi: "Giảm Alert Ảo" }, value: "~65%", subtext: { en: "With alert grouping & inhibition", vi: "Nhờ gom alert & nén thông báo" } },
      { label: { en: "Workflow", vi: "Quy trình Vận hành" }, value: "Automation", subtext: { en: "CI/CD & GitOps monitoring rules", vi: "Tự động hóa kiểm tra cấu hình" } }
    ],
    challenges: {
      en: "Inherited a legacy monitoring environment characterized by extreme alert fatigue, disjointed dashboards, and a reactive operational culture. The primary challenge was migrating a live production system handling nationwide traffic to a modern Prometheus/Grafana stack without losing visibility during the transition.",
      vi: "Tiếp quản một môi trường giám sát cũ với tình trạng 'bão cảnh báo' (alert fatigue) nghiêm trọng, dashboard rời rạc và văn hóa vận hành bị động. Thách thức lớn nhất là chuyển đổi hệ thống đang phục vụ lưu lượng toàn quốc sang stack Prometheus/Grafana hiện đại mà không làm gián đoạn khả năng giám sát."
    },
    reliabilityImprovements: {
      en: "Restructured the entire Alertmanager routing tree to group related alerts by environment and service, utilizing `inhibit_rules` to suppress downstream noise when a core switch or hypervisor failed. Introduced GitOps for monitoring configurations, completely eliminating manual editing of scrape configs on production servers.",
      vi: "Cấu trúc lại toàn bộ cây định tuyến Alertmanager để gom cảnh báo theo môi trường và dịch vụ, dùng `inhibit_rules` để chặn các cảnh báo rác từ dịch vụ con khi thiết bị lõi hoặc hypervisor gặp sự cố. Áp dụng GitOps cho cấu hình giám sát, loại bỏ hoàn toàn việc sửa file cấu hình thủ công trên server production."
    }
  },
  {
    id: "personal-lab",
    company: "Personal Infrastructure Lab",
    role: {
      en: "Infrastructure & SRE R&D",
      vi: "Nghiên cứu & Thử nghiệm Hạ tầng SRE"
    },
    period: "2023 — 2024",
    type: "lab",
    description: {
      en: "Dedicated home lab and cloud sandbox environment for prototyping observability stacks, container hardening, automated deployment, and chaos engineering scenarios.",
      vi: "Môi trường Lab hạ tầng tự dựng và Sandbox đám mây để thử nghiệm các stack observability, hardening container, tự động hóa triển khai và diễn tập khắc phục sự cố."
    },
    responsibilities: {
      en: [
        "Built modular Docker Compose and Kubernetes/K3s deployment stacks for complete monitoring suites.",
        "Developed custom Bash and Python health-check scripts exporting JSON formatted metrics to Zabbix LLD and Prometheus Exporters.",
        "Configured Grafana Alloy modular pipelines separating discovery, relabeling, and remote_write endpoints.",
        "Hardened Docker runtime security using non-root privileges, OPA/Conftest policies, and Trivy vulnerability scans."
      ],
      vi: [
        "Xây dựng các bộ stack Docker Compose và K3s chuẩn hóa cho toàn bộ hệ thống monitoring.",
        "Phát triển script Bash/Python health-check tự động xuất dữ liệu JSON phục vụ Zabbix LLD và Prometheus Custom Exporter.",
        "Cấu hình Grafana Alloy theo mô hình modular tách biệt các khâu discovery, relabeling và remote_write.",
        "Tăng cường bảo mật Docker runtime với quy tắc non-root, chính sách OPA/Conftest và quét lỗ hổng bằng Trivy."
      ]
    },
    technologies: [
      "Docker Compose", "K3s", "Prometheus", "Grafana", "Grafana Alloy",
      "Loki", "Bash", "Python", "Trivy", "OPA", "Tailscale", "Ansible"
    ],
    impactMetrics: [
      { label: { en: "Lab Microservices", vi: "Dịch vụ thử nghiệm" }, value: "30+", subtext: { en: "Dockerized services & tools", vi: "Dịch vụ chạy container" } },
      { label: { en: "Security Pass", vi: "Chuẩn Bảo mật" }, value: "100%", subtext: { en: "Trivy scanned & hardened", vi: "Đã qua kiểm tra Trivy" } }
    ]
  }
];

export const caseStudiesData: CaseStudy[] = [
  {
    id: "enterprise-monitoring",
    title: {
      en: "Enterprise Observability & Monitoring Platform",
      vi: "Nền tảng Giám sát & Quan sát Hạ tầng Doanh nghiệp"
    },
    category: {
      en: "Observability / SRE",
      vi: "Observability / SRE"
    },
    tagline: {
      en: "Unified multi-layer metric collection, long-term storage, custom exporter fleet, and role-based operational dashboards.",
      vi: "Hệ thống giám sát đa tầng tập trung, lưu trữ metric dài hạn, dàn exporter tùy biến và dashboard vận hành chuyên sâu."
    },
    technologies: [
      "Prometheus", "Grafana", "Alertmanager", "Grafana Alloy",
      "Blackbox Exporter", "Node Exporter", "cAdvisor", "Docker", "PostgreSQL", "GitLab CI"
    ],
    overview: {
      en: "Designed and deployed a highly available observability stack processing over 1.2M metrics per second across 1,000+ distributed infrastructure nodes, providing single-pane-of-glass visibility for physical servers, VMs, containers, and databases.",
      vi: "Thiết kế và triển khai stack observability tính sẵn sàng cao, xử lý hơn 1.2M metric mỗi giây trên 1,000+ node hạ tầng phân tán, cung cấp cái nhìn toàn cảnh (single-pane-of-glass) cho máy chủ vật lý, VM, container và cơ sở dữ liệu."
    },
    background: {
      en: "The enterprise operated with deeply siloed infrastructure teams. Networking used standard SNMP traps, sysadmins used basic Zabbix triggers, and application teams lacked metrics entirely. We needed a unified telemetry strategy to bring these worlds together.",
      vi: "Doanh nghiệp hoạt động với các đội ngũ hạ tầng silo tách biệt. Team mạng dùng SNMP trap cơ bản, sysadmin dùng Zabbix trigger, còn team ứng dụng hoàn toàn không có metric. Chúng tôi cần một chiến lược telemetry hợp nhất để kết nối các mảng này."
    },
    problem: {
      en: "Incident resolution times were unacceptably high due to fragmented monitoring tools. When a user reported high latency, engineers spent hours correlating generic host CPU graphs with network utilization without any application context.",
      vi: "Thời gian xử lý sự cố cao không thể chấp nhận được do các công cụ giám sát bị phân mảnh. Khi người dùng báo cáo độ trễ cao, các kỹ sư phải mất hàng giờ đối chiếu biểu đồ CPU với network mà không hề có ngữ cảnh ứng dụng."
    },
    architecture: {
      en: "Adopted a Hub-and-Spoke telemetry model. Edge nodes run Grafana Alloy acting as unified collectors, aggregating logs, host metrics, and container stats. Data is pushed via optimized Remote Write streams to a central Prometheus TSDB cluster.",
      vi: "Áp dụng mô hình telemetry Hub-and-Spoke. Các node biên chạy Grafana Alloy đóng vai trò là bộ thu thập tập trung, gom log, metric máy chủ và thông số container. Dữ liệu được đẩy qua luồng Remote Write tối ưu về cụm Prometheus TSDB trung tâm."
    },
    implementation: {
      en: "Migrated Grafana backend to PostgreSQL to solve SQLite locking under concurrent load. Deployed Blackbox exporter fleets for SSL expiry checks and HTTP endpoint latencies. Tuned Prometheus TSDB block retention to aggressively compress older WALs, allowing 90-day metric retention on NVMe storage.",
      vi: "Chuyển đổi Grafana backend sang PostgreSQL để khắc phục lỗi khóa SQLite khi có tải đồng thời cao. Triển khai các cụm Blackbox exporter để kiểm tra hạn SSL và độ trễ HTTP endpoint. Tối ưu cấu hình Prometheus TSDB block retention để nén mạnh các WAL cũ, cho phép lưu trữ metric 90 ngày trên ổ NVMe."
    },
    deployment: {
      en: "Configuration changes are entirely GitOps-driven via GitLab CI. Any change to a Prometheus scrape rule or Alertmanager route triggers `promtool check config` and `promtool check rules`. A successful pipeline automatically invokes a systemd reload across the cluster.",
      vi: "Mọi thay đổi cấu hình được vận hành theo chuẩn GitOps qua GitLab CI. Bất kỳ thay đổi nào đối với scrape rule của Prometheus hay route của Alertmanager đều kích hoạt `promtool check config` và `promtool check rules`. Pipeline thành công sẽ tự động gọi systemd reload trên toàn cụm."
    },
    operationalConsiderations: {
      en: "To prevent TSDB explosion from high-cardinality label scraping, we implemented strict relabeling drops for ephemeral container IDs and dynamic HTTP path variables.",
      vi: "Để ngăn chặn TSDB quá tải do quét label có cardinality cao, chúng tôi đã áp dụng các quy tắc relabeling nghiêm ngặt để loại bỏ các ID container tạm thời và các biến đường dẫn HTTP động."
    },
    lessonsLearned: {
      en: "Scraping everything blindly creates noise and kills storage. We learned to treat metrics like a budget: each team is allocated a cardinality limit. If you want a new high-cardinality metric, you must drop an old one or justify the cost.",
      vi: "Thu thập dữ liệu một cách mù quáng sẽ tạo ra nhiễu và làm đầy ổ cứng. Chúng tôi nhận ra rằng metric cũng như ngân sách: mỗi team được cấp một hạn mức cardinality. Nếu muốn thêm một metric cardinality cao, team phải bỏ đi một metric cũ hoặc chứng minh được tính cần thiết."
    },
    futureImprovements: {
      en: "Currently planning a migration to Mimir for infinite object storage scaling (S3 backend) and global query acceleration, as well as auto-scaling the Alloy collector fleet via KEDA.",
      vi: "Hiện đang lên kế hoạch di chuyển sang Mimir để có khả năng scale lưu trữ vô hạn (backend S3) và tăng tốc truy vấn toàn cầu, đồng thời tự động scale cụm Alloy collector bằng KEDA."
    },
    architectureDiagramText: `
                     ┌────────────────────────────────┐
                     │       Grafana Dashboards       │
                     └───────────────▲────────────────┘
                                     │ (PromQL)
                     ┌───────────────┴────────────────┐
                     │      Prometheus TSDB Engine    │
                     └───────────────▲────────────────┘
                                     │ (Scrape / Remote Write)
          ┌──────────────────────────┼──────────────────────────┐
          │                          │                          │
┌───────────────────┐      ┌───────────────────┐      ┌───────────────────┐
│   Node Exporter   │      │ Blackbox Exporter │      │   Grafana Alloy   │
│ (CPU/RAM/Disk/Net)│      │  (HTTP/SSL/TCP)   │      │ (Logs & Metrics)  │
└─────────▲─────────┘      └─────────▲─────────┘      └─────────▲─────────┘
          │                          │                          │
   Linux Infrastructure       Production APIs / SSL      Application Logs
`
  },
  {
    id: "sre-alert-engineering",
    title: {
      en: "SRE Alert Engineering & Noise Reduction Pipeline",
      vi: "Quy trình Xử lý & Tối ưu Cảnh báo SRE (Alert Pipeline)"
    },
    category: {
      en: "Reliability / Alerting",
      vi: "Reliability / Alerting"
    },
    tagline: {
      en: "Transforming noisy, unactionable system alerts into grouped, context-rich, ownership-routed Telegram & Alerta notifications.",
      vi: "Chuyển đổi cảnh báo rác, nhiễu thành các thông báo có ngữ cảnh, đúng người phụ trách và đẩy tức thì qua Telegram/Alerta."
    },
    technologies: [
      "Prometheus", "Alertmanager", "Alerta", "Telegram", "Grafana", "Bash", "Nginx"
    ],
    problem: {
      en: "Default monitoring rule setups trigger hundreds of individual alerts during brief network blips or cascading failures, causing extreme 'Alert Fatigue' where engineers start ignoring notifications.",
      vi: "Cấu hình cảnh báo mặc định gây ra hàng trăm thông báo rời rạc khi mạng chập chờn hoặc sự cố dây chuyền, dẫn đến hiện tượng 'Alert Fatigue' làm kỹ sư lơ là cảnh báo quan trọng."
    },
    alertComparison: {
      bad: {
        alert: "CPU > 80% (UNFILTERED)",
        flow: [
          "Host CPU spikes for 5s → ALERT",
          "Host CPU spikes again → ALERT",
          "Disk I/O busy → ALERT",
          "50 redundant notifications in 10 minutes!"
        ],
        consequences: {
          en: "Alert Fatigue. Engineers mute or ignore Telegram groups. Critical downtime gets missed.",
          vi: "Bội thực cảnh báo. Kỹ sư tắt thông báo nhóm Telegram. Bỏ lỡ sự cố nghiêm trọng thực sự."
        }
      },
      good: {
        alert: "Sustained Anomaly + Service Context",
        flow: [
          "Metric condition sustained for > 5m",
          "Rule evaluation checking job availability",
          "Alertmanager groups by team & cluster",
          "Single enriched Telegram card sent with runbook link"
        ],
        benefits: {
          en: "Actionable, calm, context-rich notification with instant diagnostic guidance.",
          vi: "Thông báo rõ ràng, có hướng dẫn xử lý (runbook), không bị spam."
        }
      }
    },
    implementationDetails: {
      en: [
        "Configured Alertmanager route trees with `group_by: ['alertname', 'cluster', 'service']` and `group_wait: 30s`.",
        "Set `repeat_interval: 4h` for acknowledged warnings while keeping `repeat_interval: 15m` for critical outages.",
        "Built inhibition rules so node-down events automatically suppress downstream CPU/Memory/Disk alerts on the same host.",
        "Integrated custom Telegram bot templates displaying formatted HTML cards with direct Grafana panel jump links and quick SILENCE buttons."
      ],
      vi: [
        "Cấu hình cây điều hướng Alertmanager với `group_by: ['alertname', 'cluster', 'service']` và `group_wait: 30s`.",
        "Cấu hình `repeat_interval: 4h` cho cảnh báo Warning và `repeat_interval: 15m` cho sự cố Critical.",
        "Thiết lập Inhibition rules để khi host DOWN, hệ thống tự động dập các cảnh báo con (CPU, RAM, Disk) trên host đó.",
        "Tích hợp Telegram Bot gửi thẻ thông báo HTML đẹp mắt, chứa link trực tiếp tới panel Grafana và nút MUTE nhanh."
      ]
    },
    engineeringDecisions: {
      en: [
        "Used PromQL `for: 5m` duration buffers on non-critical metrics to eliminate transient spike noise.",
        "Enforced mandatory `summary`, `description`, `runbook_url`, and `severity` labels on all Prometheus alert rules."
      ],
      vi: [
        "Bổ sung khoảng thời gian `for: 5m` trong PromQL đối với các metric phụ để loại bỏ nhiễu tăng đột biến tức thời.",
        "Bắt buộc gắn đầy đủ nhãn `summary`, `description`, `runbook_url` và `severity` trên tất cả các alert rule."
      ]
    },
    challenges: {
      en: [
        "Handling HTTP 429 rate limit throttling from Telegram API during major upstream provider outages.",
        "Deduplicating alerts between Zabbix triggers and Prometheus Alertmanager."
      ],
      vi: [
        "Xử lý lỗi HTTP 429 do Telegram API giới hạn lượt gửi trong sự cố lớn của ISP.",
        "Khử trùng lặp cảnh báo giữa Zabbix Trigger và Prometheus Alertmanager."
      ]
    },
    outcome: {
      en: "Reduced alert noise by over 65%, while decreasing Mean Time to Detect (MTTD) and Mean Time to Respond (MTTR) significantly.",
      vi: "Giảm hơn 65% cảnh báo rác, đồng thời rút ngắn đáng kể thời gian phát hiện (MTTD) và thời gian phản hồi sự cố (MTTR)."
    }
  },
  {
    id: "grafana-alloy-modular",
    title: {
      en: "Grafana Alloy Modular Architecture Strategy",
      vi: "Kiến trúc Alloy Modular hóa cho Hạ tầng Mới"
    },
    category: {
      en: "Observability / Architecture",
      vi: "Observability / Architecture"
    },
    tagline: {
      en: "Refactoring monolithic telemetry collector configurations into maintainable, environment-portable modular components.",
      vi: "Tái cấu trúc file cấu hình telemetry cồng kềnh thành các module tái sử dụng, dễ bảo trì và linh hoạt theo môi trường."
    },
    technologies: [
      "Grafana Alloy", "Prometheus", "Loki", "Linux", "Systemd", "Docker"
    ],
    problem: {
      en: "Legacy telemetry agent configurations often mix metric scraping, log processing, label rewriting, and remote shipping into single 2,000-line monolithic files, making maintenance and deployment across dev/staging/prod error-prone.",
      vi: "Cấu hình agent thu thập telemetry truyền thống thường bị phình to tới hàng nghìn dòng, trộn lẫn giữa scrape metric, gom log và ghi đè label, gây khó khăn và dễ phát sinh lỗi khi triển khai đa môi trường."
    },
    folderStructure: `
alloy/
├── config.alloy               # Entrypoint loading imported modules
├── modules/
│   ├── discovery/
│   │   ├── systemd.alloy      # Linux systemd service discovery
│   │   └── docker.alloy       # Container discovery via socket
│   ├── metrics/
│   │   ├── node_exporter.alloy# Host level metrics pipeline
│   │   └── nginx.alloy        # Web server metric pipeline
│   ├── logs/
│   │   └── journald.alloy     # Systemd journal log parser
│   └── remote_write/
│       └── prometheus.alloy   # Authenticated remote write endpoint
`,
    implementationDetails: {
      en: [
        "Designed component-based Alloy structure using `declare` and `import` syntax.",
        "Separated telemetry pipeline into 5 crisp layers: Discovery -> Scrape -> Process/Relabel -> Export -> Remote Shipping.",
        "Built environment parameter overrides using environment variables and template flags.",
        "Automated deployment across Ubuntu and Rocky Linux via Systemd unit integration."
      ],
      vi: [
        "Thiết kế cấu trúc Alloy theo dạng component modular hóa sử dụng cú pháp `declare` và `import`.",
        "Phân tách pipeline telemetry thành 5 lớp rõ ràng: Discovery -> Scrape -> Process/Relabel -> Export -> Remote Shipping.",
        "Xây dựng biến tham số hóa theo môi trường qua environment variables.",
        "Tự động hóa triển khai trên hệ điều hành Ubuntu và Rocky Linux thông qua dịch vụ Systemd."
      ]
    },
    engineeringDecisions: {
      en: [
        "Adopted Grafana Alloy's native flow architecture to prepare infrastructure for seamless OpenTelemetry migration.",
        "Created standardized relabeling rules to sanitize high-cardinality IP addresses into anonymized subnet ranges."
      ],
      vi: [
        "Đón đầu kiến trúc Grafana Alloy Native Flow để chuẩn bị cho quá trình chuyển đổi sang OpenTelemetry trong tương lai.",
        "Chuẩn hóa quy tắc relabeling để lọc bớt thông tin IP tĩnh mang tính cardinality cao."
      ]
    },
    challenges: {
      en: [
        "Debugging subtle component syntax binding errors in early Alloy release builds."
      ],
      vi: [
        "Xử lý các lỗi cú pháp binding component phức tạp trong các phiên bản Grafana Alloy đời đầu."
      ]
    },
    outcome: {
      en: "Simplified deployment of monitoring agents to under 2 minutes per node with zero configuration drift.",
      vi: "Đơn giản hóa việc triển khai agent giám sát xuống dưới 2 phút cho mỗi node và loại bỏ hoàn toàn sai lệch cấu hình."
    }
  },
  {
    id: "universal-healthcheck",
    title: {
      en: "Universal Health-Check & Service Diagnostic Framework",
      vi: "Framework Kiểm tra Sức khỏe Dịch vụ Chuyên sâu"
    },
    category: {
      en: "Automation / Monitoring",
      vi: "Automation / Monitoring"
    },
    tagline: {
      en: "Moving beyond 'Process is Running' to verifying deep application execution health, socket responsiveness, and dependency state.",
      vi: "Bứt phá khỏi tư duy 'Process đang chạy' để đánh giá thực chất khả năng phản hồi dịch vụ, socket và trạng thái kết nối CSDL."
    },
    technologies: [
      "Bash", "Python", "Zabbix LLD", "Prometheus", "Kafka", "Redis", "Nginx", "PostgreSQL"
    ],
    problem: {
      en: "A system process like Nginx, Redis, or Kafka can remain listed as 'Active (running)' in systemd while completely frozen or deadlocked in handling requests. Traditional process checks fail to catch these silent downtime events.",
      vi: "Một tiến trình như Nginx, Redis hay Kafka vẫn có thể báo 'Active (running)' trong systemd nhưng lại bị treo socket hoặc deadlock không xử lý được request. Các công cụ check tiến trình thông thường sẽ hoàn toàn bỏ qua sự cố ngầm này."
    },
    implementationDetails: {
      en: [
        "Engineered zero-dependency Shell/Python diagnostic scripts probing real application response states.",
        "Probed Redis via `PING/PONG` and key allocation latency checks.",
        "Checked Kafka cluster partition health and consumer lag metrics.",
        "Validated HTTP endpoints using curl checking response payloads, header status codes, and TLS handshake speeds.",
        "Formatted diagnostic outputs into structured JSON array strings for Zabbix Low-Level Discovery (LLD) and Prometheus custom exporters."
      ],
      vi: [
        "Xây dựng script Shell/Python tối ưu không phụ thuộc thư viện ngoài để kiểm tra khả năng phản hồi ứng dụng.",
        "Kiểm tra Redis bằng lệnh `PING/PONG` và đo độ trễ đọc ghi key.",
        "Đánh giá độ trễ consumer lag và tình trạng phân vùng (partition) của Kafka cluster.",
        "Xác thực HTTP endpoint bằng curl kiểm tra status code, payload trả về và thời gian bắt tay TLS.",
        "Định dạng kết quả kiểm tra thành chuỗi JSON chuẩn hóa phục vụ Zabbix Low-Level Discovery (LLD) và Custom Exporter."
      ]
    },
    engineeringDecisions: {
      en: [
        "Established 'Process Alive ≠ Service Healthy' as a core team design principle.",
        "Enforced strict 3-second timeout limits on diagnostic sockets to prevent probe scripts from hanging system resources."
      ],
      vi: [
        "Khẳng định nguyên tắc thiết kế 'Process đang chạy ≠ Dịch vụ khỏe mạnh'.",
        "Áp dụng timeout 3 giây nghiêm ngặt trên tất cả các socket kiểm tra để tránh làm treo tài nguyên hệ thống."
      ]
    },
    challenges: {
      en: [
        "Executing diagnostic checks inside locked enterprise network proxies without leaking credentials."
      ],
      vi: [
        "Thực thi script kiểm tra trong môi trường proxy doanh nghiệp nghiêm ngặt mà không làm lộ credential."
      ]
    },
    outcome: {
      en: "Successfully caught silent application hangs before end-users noticed service degradation.",
      vi: "Phát hiện thành công các sự cố treo ứng dụng ngầm trước khi người dùng cuối gặp lỗi."
    }
  },
  {
    id: "docker-hardening",
    title: {
      en: "Docker Runtime Hardening & DevSecOps Security Pipeline",
      vi: "Bảo mật Runtime Docker & Pipeline DevSecOps"
    },
    category: {
      en: "DevSecOps / Automation",
      vi: "DevSecOps / Automation"
    },
    tagline: {
      en: "Enforcing container security checklists, vulnerability scanning, non-root execution, and resource control policies.",
      vi: "Áp dụng checklist bảo mật container, quét lỗ hổng ảnh, thực thi non-root và giới hạn tài nguyên nghiêm ngặt."
    },
    technologies: [
      "Docker", "Docker Compose", "Trivy", "OPA / Conftest", "Linux", "GitLab CI"
    ],
    problem: {
      en: "Default Docker setups often run containers as root without CPU/RAM limits, exposing hosts to container breakout exploits, resource starvation, and unpatched CVE vulnerabilities.",
      vi: "Cấu hình Docker mặc định thường chạy quyền root và không giới hạn CPU/RAM, tạo nguy cơ chiếm quyền điều khiển host (container breakout), tràn tài nguyên và tồn tại các lỗ hổng CVE chưa vá."
    },
    implementationDetails: {
      en: [
        "Integrated Trivy scanner into CI/CD pipelines to block builds containing CRITICAL or HIGH severity CVE vulnerabilities.",
        "Enforced non-root user execution (`USER 10001`) in Dockerfiles.",
        "Applied strict resource limits in Docker Compose (`cpus: '1.5'`, `memory: 1g`, `no-new-privileges: true`).",
        "Configured automated log rotation (`max-size: 50m`, `max-file: 3`) to prevent container logs from filling root filesystem disks."
      ],
      vi: [
        "Tích hợp công cụ quét Trivy vào CI/CD pipeline để ngăn chặn build image chứa lỗ hổng cấp độ HIGH hoặc CRITICAL.",
        "Bắt buộc thực thi ứng dụng dưới quyền người dùng non-root (`USER 10001`) trong Dockerfile.",
        "Cấu hình giới hạn tài nguyên trong Docker Compose (`cpus: '1.5'`, `memory: 1g`, `no-new-privileges: true`).",
        "Cấu hình tự động quay vòng log container (`max-size: 50m`, `max-file: 3`) tránh làm đầy ổ đĩa hệ thống."
      ]
    },
    engineeringDecisions: {
      en: [
        "Automated security scanning in CI stages so insecure container images never reach production registry."
      ],
      vi: [
        "Tự động hóa bước quét bảo mật trong CI để các container kém an toàn không bao giờ được push lên registry sản xuất."
      ]
    },
    challenges: {
      en: [
        "Refactoring legacy application images that assumed root write access to system directories."
      ],
      vi: [
        "Tái cấu trúc các ứng dụng cũ vốn đòi hỏi quyền root ghi file vào thư mục hệ thống."
      ]
    },
    outcome: {
      en: "Achieved 100% compliance with Docker Hardening guidelines across lab and production container deployments.",
      vi: "Đạt 100% tuân thủ tiêu chuẩn Docker Hardening trên toàn bộ container môi trường thử nghiệm và sản xuất."
    }
  }
];

export const skillCategoriesData: SkillCategory[] = [
  {
    id: "observability",
    name: {
      en: "Observability & Monitoring",
      vi: "Giám sát & Observability"
    },
    skills: [
      { name: "Prometheus", level: 5, badge: "Expert", description: { en: "PromQL, TSDB, Recording Rules, Scrape Rules, Target Discovery", vi: "PromQL, TSDB, Recording Rules, Scrape Rules, Target Discovery" } },
      { name: "Zabbix", level: 5, badge: "Expert", description: { en: "7.x, Low-Level Discovery (LLD), Master/Dependent Items, Templates", vi: "7.x, Low-Level Discovery (LLD), Master/Dependent Items, Templates" } },
      { name: "Grafana", level: 4, badge: "Advanced", description: { en: "Dashboard Provisioning, PromQL/SQL panels, Alert Visualization", vi: "Thiết kế Dashboard, Cấu hình DataSource, Trực quan hóa Cảnh báo" } },
      { name: "Grafana Alloy", level: 4, badge: "Advanced", description: { en: "Component Flow architecture, Remote Write, Telemetry Pipelines", vi: "Kiến trúc Component Flow, Remote Write, Pipeline Telemetry" } },
      { name: "Loki", level: 3, badge: "Proficient", description: { en: "LogQL, Journald log shipping, Label indexing", vi: "LogQL, Đẩy log Journald, Đánh chỉ mục Label" } },
      { name: "PromQL", level: 5, badge: "Expert", description: { en: "Subqueries, Aggregations, Rate/Irate calculations, Anomaly logic", vi: "Truy vấn phức tạp, Hàm tính Rate/Irate, Logic lọc bất thường" } }
    ]
  },
  {
    id: "alerting",
    name: {
      en: "Alert Engineering",
      vi: "Cảnh báo & Alert Pipeline"
    },
    skills: [
      { name: "Alertmanager", level: 5, badge: "Expert", description: { en: "Route trees, Inhibition rules, Grouping, Silencing, Custom Receivers", vi: "Cây điều hướng, Quy tắc Inhibition, Grouping, Silencing, Receiver" } },
      { name: "Alerta", level: 4, badge: "Advanced", description: { en: "Alert console integration, API authentication, Severity management", vi: "Tích hợp Console cảnh báo, Xác thực API, Quản lý Mức độ nghiêm trọng" } },
      { name: "Telegram Bot API", level: 5, badge: "Expert", description: { en: "HTML formatted alert cards, Inline callbacks, Automated notification bots", vi: "Định dạng thẻ HTML Telegram, Webhook, Bot thông báo tự động" } },
      { name: "Alert Strategy", level: 5, badge: "Expert", description: { en: "Noise reduction, Runbook mapping, Severity classification, MTTD/MTTR optimization", vi: "Giảm nhiễu cảnh báo, Gắn Runbook, Phân loại Severity, Tối ưu MTTD/MTTR" } }
    ]
  },
  {
    id: "exporters",
    name: {
      en: "Exporters & Agents",
      vi: "Exporters & Agent Giám sát"
    },
    skills: [
      { name: "Blackbox Exporter", level: 5, badge: "Expert", description: { en: "HTTP/HTTPS, SSL cert expiry, TCP connect, DNS probes", vi: "Probe HTTP/HTTPS, Hạn chứng chỉ SSL, Kết nối TCP, Probe DNS" } },
      { name: "Node Exporter", level: 5, badge: "Expert", description: { en: "Host CPU, Memory, Disk I/O, Network, Systemd collector filters", vi: "Giám sát CPU, RAM, Disk I/O, Mạng, Lọc collector Systemd" } },
      { name: "cAdvisor", level: 4, badge: "Advanced", description: { en: "Container memory/CPU throttling, Filesystem usage, Network stats", vi: "Giám sát RAM/CPU container, Ổ đĩa, Thống kê Mạng" } },
      { name: "Oracle Exporter", level: 4, badge: "Advanced", description: { en: "Oracle DB sessions, Tablespace usage, SGA/PGA, Deadlocks", vi: "Session Oracle DB, Dung lượng Tablespace, SGA/PGA, Deadlock" } },
      { name: "PostgreSQL Exporter", level: 4, badge: "Advanced", description: { en: "DB connection pool, Replication lag, Query performance metrics", vi: "Connection pool, Độ trễ Replication, Metric hiệu năng query" } }
    ]
  },
  {
    id: "infrastructure",
    name: {
      en: "Linux & Operating Systems",
      vi: "Linux & Hệ điều hành"
    },
    skills: [
      { name: "Linux Administration", level: 5, badge: "Expert", description: { en: "Ubuntu, Debian, CentOS, Rocky Linux, Arch Linux, WSL2", vi: "Ubuntu, Debian, CentOS, Rocky Linux, Arch Linux, WSL2" } },
      { name: "Systemd & Services", level: 5, badge: "Expert", description: { en: "Unit files, Journalctl analysis, Service dependencies, Boot optimization", vi: "Tạo Unit file, Phân tích Journalctl, Phụ thuộc dịch vụ, Khởi động" } },
      { name: "Troubleshooting", level: 5, badge: "Expert", description: { en: "Kernel logs (dmesg), Memory leaks, OOM killer, Disk I/O bottlenecks, CPU load", vi: "Kernel log, Rò rỉ RAM, OOM Killer, Nghẽn Disk I/O, CPU Load" } }
    ]
  },
  {
    id: "containers",
    name: {
      en: "Containers & Orchestration",
      vi: "Container & Kubernetes"
    },
    skills: [
      { name: "Docker", level: 5, badge: "Expert", description: { en: "Multi-stage builds, Container security, Docker socket, Hardening", vi: "Build multi-stage, Bảo mật container, Docker socket, Hardening" } },
      { name: "Docker Compose", level: 5, badge: "Expert", description: { en: "Complex multi-service stacks, Networks, Volume persistence, Environment overrides", vi: "Quản lý stack đa dịch vụ, Network, Volume, Biến môi trường" } },
      { name: "Kubernetes / K3s", level: 4, badge: "Advanced", description: { en: "Deployments, Services, Ingress, ConfigMaps, Helm charts, Cluster monitoring", vi: "Deployment, Service, Ingress, ConfigMap, Helm chart, Giám sát cluster" } },
      { name: "Helm", level: 4, badge: "Advanced", description: { en: "Chart values customization, Release deployment, Prometheus Operator stack", vi: "Tùy biến values chart, Deploy release, Prometheus Operator" } }
    ]
  },
  {
    id: "cicd",
    name: {
      en: "CI/CD & Automation",
      vi: "CI/CD & Tự động hóa"
    },
    skills: [
      { name: "GitLab CI", level: 4, badge: "Advanced", description: { en: "Pipelines, Shell Runners, Promtool linting, Automated deployments", vi: "Xây dựng Pipeline, Runner, Linting cấu hình, Triển khai tự động" } },
      { name: "Bash Scripting", level: 5, badge: "Expert", description: { en: "Automation scripts, JSON output generators, System maintenance tools", vi: "Tự động hóa hệ thống, Bóc tách JSON, Tool quản trị" } },
      { name: "Python", level: 4, badge: "Advanced", description: { en: "Automation tools, API integrations, Telemetry parsers", vi: "Viết tool tự động, Tích hợp API, Xử lý dữ liệu telemetry" } },
      { name: "Ansible", level: 3, badge: "Proficient", description: { en: "Playbooks, Host inventory management, Configuration automation", vi: "Playbook, Quản lý inventory host, Cấu hình tự động" } }
    ]
  },
  {
    id: "networking",
    name: {
      en: "Networking & Security",
      vi: "Mạng & Bảo mật"
    },
    skills: [
      { name: "Networking Protocols", level: 5, badge: "Expert", description: { en: "TCP/IP, HTTP/HTTPS, DNS, SSL/TLS, SSH, Routing", vi: "TCP/IP, HTTP/HTTPS, DNS, Chứng chỉ SSL/TLS, SSH, Routing" } },
      { name: "Reverse Proxy", level: 5, badge: "Expert", description: { en: "Nginx, Squid Proxy, CONNECT tunneling, SSL termination", vi: "Nginx, Squid Proxy, Đường truyền CONNECT, Giải mã SSL" } },
      { name: "Container Security", level: 4, badge: "Advanced", description: { en: "Trivy vulnerability scanning, OPA/Conftest policy checks, Non-root execution", vi: "Quét lỗ hổng Trivy, Chính sách OPA/Conftest, Quyền non-root" } },
      { name: "Kong Gateway", level: 4, badge: "Advanced", description: { en: "API gateway observability, Metrics plugin, Traffic monitoring", vi: "Quan sát API Gateway, Metric plugin, Giám sát lưu lượng" } }
    ]
  }
];

export const architectureNodesData: ArchitectureNode[] = [
  {
    id: "users",
    title: { en: "Clients & Users", vi: "Người dùng & Khách hàng" },
    type: "users",
    description: {
      en: "Web applications, mobile clients, and postal operations systems hitting entrypoint gateways.",
      vi: "Ứng dụng web, ứng dụng di động và hệ thống nghiệp vụ truy cập qua gateway."
    },
    metrics: ["HTTP Requests/sec", "Latency (p95, p99)", "Error Rate (5xx)"]
  },
  {
    id: "apps",
    title: { en: "Applications & Gateways", vi: "Ứng dụng & API Gateway" },
    type: "app",
    description: {
      en: "Nginx Reverse Proxies and Kong API Gateway handling authentication, rate-limiting, and routing.",
      vi: "Nginx Reverse Proxy và Kong API Gateway đảm nhận xác thực, giới hạn lưu lượng và điều hướng."
    },
    techs: ["Nginx", "Kong Gateway", "Docker", "K3s"],
    metrics: ["Active Connections", "Upstream Latency", "HTTP 4xx/5xx Count"],
    purpose: {
      en: "The primary ingress point serving as a protective shield and traffic router for all backend infrastructure.",
      vi: "Điểm ingress chính đóng vai trò là lá chắn bảo vệ và bộ định tuyến lưu lượng cho toàn bộ hạ tầng backend."
    },
    responsibilities: {
      en: [
        "Terminate SSL/TLS connections securely.",
        "Enforce global rate limits to prevent DDoS attacks.",
        "Route HTTP/gRPC traffic to appropriate internal services.",
        "Provide initial perimeter logging and access control."
      ],
      vi: [
        "Xử lý kết nối SSL/TLS an toàn.",
        "Thực thi giới hạn lưu lượng toàn cầu để chống DDoS.",
        "Định tuyến lưu lượng HTTP/gRPC đến các dịch vụ nội bộ phù hợp.",
        "Cung cấp logging và kiểm soát truy cập vòng ngoài."
      ]
    },
    failureModes: {
      en: [
        "Upstream Timeout: Backend services take too long to respond (504).",
        "Connection Exhaustion: File descriptor limit reached during traffic spikes.",
        "Certificate Expiration: SSL cert expires causing client-side rejection."
      ],
      vi: [
        "Upstream Timeout: Dịch vụ backend phản hồi quá lâu (504).",
        "Connection Exhaustion: Cạn kiệt file descriptor khi lưu lượng tăng đột biến.",
        "Certificate Expiration: Hết hạn chứng chỉ SSL khiến client từ chối kết nối."
      ]
    },
    alerting: {
      en: [
        "High Error Rate: 5xx errors > 1% over 5m.",
        "Latency Spike: p99 latency > 2s over 5m."
      ],
      vi: [
        "High Error Rate: Lỗi 5xx > 1% trong 5 phút.",
        "Latency Spike: Độ trễ p99 > 2s trong 5 phút."
      ]
    },
    productionConsiderations: {
      en: [
        "Always deploy gateways redundantly (e.g., Active-Active with Keepalived).",
        "Use aggressive timeouts (client_body_timeout, send_timeout) to prevent Slowloris attacks."
      ],
      vi: [
        "Luôn triển khai gateway dự phòng (ví dụ: Active-Active với Keepalived).",
        "Sử dụng timeout nghiêm ngặt (client_body_timeout, send_timeout) để chống Slowloris attack."
      ]
    }
  },
  {
    id: "services",
    title: { en: "Core Services & DBs", vi: "Dịch vụ Lõi & Cơ sở Dữ liệu" },
    type: "services",
    description: {
      en: "Oracle Databases, PostgreSQL, Kafka event brokers, Redis caches, and Linux host infrastructure.",
      vi: "Cơ sở dữ liệu Oracle, PostgreSQL, Kafka event broker, Redis cache và hạ tầng máy chủ Linux."
    },
    techs: ["Oracle DB", "PostgreSQL", "Kafka", "Redis", "Linux Host"],
    metrics: ["DB Session Count", "Tablespace %", "Buffer Cache Hit Ratio", "CPU / RAM / Disk I/O"]
  },
  {
    id: "observability",
    title: { en: "Observability Platform", vi: "Nền tảng Observability" },
    type: "observability",
    description: {
      en: "Prometheus TSDB, Zabbix, Grafana Alloy collectors, Blackbox probes, and Grafana visualization.",
      vi: "Prometheus TSDB, Zabbix, Grafana Alloy collector, Blackbox probe và Grafana visualization."
    },
    techs: ["Prometheus", "Grafana", "Zabbix", "Grafana Alloy", "Blackbox Exporter"],
    metrics: ["TSDB Head Chunks", "Scrape Duration", "WAL Size", "Target Up Ratio"],
    purpose: {
      en: "The mission-critical nervous system of the enterprise, designed to provide realtime insight into system health and actively page on-call engineers.",
      vi: "Hệ thần kinh lõi yếu của doanh nghiệp, thiết kế để cung cấp thông tin thời gian thực về sức khỏe hệ thống và gọi kỹ sư trực ca khi có sự cố."
    },
    responsibilities: {
      en: [
        "Scrape millions of telemetry data points per minute via pull-model.",
        "Execute synthetic probes (HTTP, TCP, ICMP) to simulate user experience.",
        "Evaluate PromQL recording rules for dashboard acceleration.",
        "Evaluate PromQL alerting rules and push violations to Alertmanager."
      ],
      vi: [
        "Thu thập hàng triệu điểm dữ liệu telemetry mỗi phút theo mô hình pull.",
        "Thực thi các probe tổng hợp (HTTP, TCP, ICMP) để giả lập trải nghiệm người dùng.",
        "Xử lý PromQL recording rules để tăng tốc dashboard.",
        "Đánh giá PromQL alerting rules và đẩy vi phạm tới Alertmanager."
      ]
    },
    dependencies: ["Persistent Block Storage (NVMe/SSD)", "High Bandwidth Network"],
    failureModes: {
      en: [
        "Storage Saturation: TSDB disk fills up, causing Prometheus crash loop.",
        "OOM Kill: Sudden spike in metric cardinality consumes all RAM.",
        "Network Partition: Scrapers cannot reach targets, falsely triggering DOWN alerts."
      ],
      vi: [
        "Storage Saturation: Ổ cứng TSDB đầy, khiến Prometheus crash liên tục.",
        "OOM Kill: Metric cardinality tăng đột biến vắt kiệt RAM.",
        "Network Partition: Scraper không thể kết nối tới target, kích hoạt cảnh báo DOWN sai."
      ]
    },
    productionConsiderations: {
      en: [
        "Separate TSDB write path (WAL) to dedicated high-IOPS disk volumes.",
        "Use external Thanos/Mimir for global querying and long-term HA storage.",
        "Self-monitor the monitoring platform (Meta-monitoring)."
      ],
      vi: [
        "Tách riêng luồng ghi TSDB (WAL) sang phân vùng ổ cứng IOPS cao độc lập.",
        "Sử dụng Thanos/Mimir bên ngoài để truy vấn toàn cục và lưu trữ HA dài hạn.",
        "Phải có cơ chế giám sát chính nền tảng giám sát (Meta-monitoring)."
      ]
    }
  },
  {
    id: "automation",
    title: { en: "Alerting & CI/CD Pipeline", vi: "Pipeline Alert & CI/CD" },
    type: "automation",
    description: {
      en: "Alertmanager routing engine, Alerta alert console, Telegram notification bots, and GitLab CI test pipelines.",
      vi: "Bộ xử lý Alertmanager, Alerta console, Telegram Bot thông báo và GitLab CI pipeline kiểm tra."
    },
    techs: ["Alertmanager", "Alerta", "Telegram API", "GitLab CI", "promtool"],
    metrics: ["Grouped Alert Count", "Routing Latency", "Inhibited Alerts"]
  },
  {
    id: "reliability",
    title: { en: "SRE Reliability Outcome", vi: "Mục tiêu Độ tin cậy SRE" },
    type: "reliability",
    description: {
      en: "99.9% System Uptime, reduced alert noise, rapid incident triage, and clear diagnostic runbooks.",
      vi: "Uptime 99.9%, tối giản alert rác, khoanh vùng sự cố siêu tốc và runbook rõ ràng."
    },
    metrics: ["MTTD < 1 min", "MTTR < 15 mins", "Zero Silent Outages"]
  }
];

export const timelineData: TimelineItem[] = [
  {
    year: "2021",
    title: { en: "Entered UNETI Information Systems Engineering", vi: "Bắt đầu học Kỹ sư Hệ thống Thông tin tại UNETI" },
    subtitle: { en: "System Foundations", vi: "Nền tảng Hệ thống" },
    description: {
      en: "Started formal engineering degree in Information Systems at UNETI. Deeply studied Linux operating systems, networking fundamentals, and database architectures.",
      vi: "Bắt đầu chương trình đào tạo Kỹ sư HTTT tại UNETI. Nghiên cứu sâu về Hệ điều hành Linux, Mạng máy tính và Kiến trúc CSDL."
    },
    tags: ["Linux", "Networking", "SQL", "C++"]
  },
  {
    year: "2023",
    title: { en: "Personal Infrastructure Lab & Monitoring R&D", vi: "Xây dựng Lab Hạ tầng & Nghiên cứu Monitoring" },
    subtitle: { en: "Hands-on Infrastructure", vi: "Thực hành Hạ tầng" },
    description: {
      en: "Built a home lab environment testing Docker Compose multi-service stacks, Prometheus, Grafana, Zabbix, custom Bash health checks, and Ansible automation.",
      vi: "Xây dựng môi trường Lab thử nghiệm Docker Compose, Prometheus, Grafana, Zabbix, script Bash health check và tự động hóa Ansible."
    },
    tags: ["Docker", "Prometheus", "Grafana", "Zabbix", "Bash", "Ansible"]
  },
  {
    year: "2024",
    title: { en: "Joined Vietnam Post (VNPost) as System Engineer / DevOps", vi: "Gia nhập Vietnam Post (VNPost) — Kỹ sư Hệ thống / DevOps" },
    subtitle: { en: "Enterprise Production Scale", vi: "Quy mô Sản xuất Doanh nghiệp" },
    description: {
      en: "Took responsibility for monitoring and infrastructure operations across 1,000+ VM targets, Kong API Gateways, Oracle Databases, and automated alerting pipelines.",
      vi: "Đảm nhận vận hành hệ thống giám sát và hạ tầng cho hơn 1.000+ VM, Kong API Gateway, Oracle DB và pipeline cảnh báo tự động."
    },
    tags: ["Enterprise Monitoring", "Alertmanager", "Kong Gateway", "Oracle DB", "GitLab CI"],
    isCurrent: true
  },
  {
    year: "2025",
    title: { en: "Graduated UNETI with Distinction & 3.69 GPA", vi: "Tốt nghiệp Xuất sắc UNETI — GPA 3.69 / 4.00" },
    subtitle: { en: "Academic Excellence", vi: "Thành tựu Học tập" },
    description: {
      en: "Graduated with Distinction in Information Systems Engineering, awarded Excellent Scholarship for 6 out of 8 semesters.",
      vi: "Tốt nghiệp bằng Xuất sắc ngành Kỹ sư Hệ thống Thông tin, nhận Học bổng Khuyến khích loại Xuất sắc 6/8 học kỳ."
    },
    tags: ["Engineer Degree", "Distinction", "Scholarship"]
  },
  {
    year: "2026",
    title: { en: "AI-Assisted Operations & Advanced Observability", vi: "AI Agent cho Operations & Advanced Observability" },
    subtitle: { en: "Next-Gen SRE", vi: "SRE Thế hệ Mới" },
    description: {
      en: "Pioneering the integration of AI Agents into SRE workflows for instant log diagnosis, root cause correlation, and automated incident triage.",
      vi: "Nghiên cứu ứng dụng AI Agent vào quy trình SRE để chẩn đoán log tức thì, phân tích nguyên nhân gốc và hỗ trợ xử lý sự cố."
    },
    tags: ["AI Agent", "Grafana Alloy", "Platform Engineering", "OpenTelemetry"],
    isCurrent: true
  }
];

export const blogArticlesData: BlogArticle[] = [
  {
    id: "production-prometheus-alert-rules",
    title: {
      en: "Designing Production-Ready Prometheus Alert Rules",
      vi: "Thiết kế Rule Cảnh báo Prometheus Chuẩn Môi trường Production"
    },
    category: "SRE / Alerting",
    date: "2026-05-15",
    readTime: "6 min read",
    summary: {
      en: "How to avoid alert fatigue by crafting robust PromQL rules with 'for' buffers, recording rules, and context-rich annotations.",
      vi: "Cách phòng tránh bội thực cảnh báo bằng cách viết PromQL chuẩn xác với khoảng đệm 'for', recording rules và annotation đầy đủ."
    },
    tags: ["Prometheus", "PromQL", "Alertmanager", "SRE"],
    content: {
      en: `
### Why Default Prometheus Rules Fail in Production

Most tutorials suggest simple alert rules like:

\`\`\`promql
# BAD: Triggers immediately on brief 1-second CPU spike
- alert: HighCPU
  expr: node_cpu_seconds_total{mode="idle"} < 20
  labels:
    severity: critical
\`\`\`

In production, this leads to hundreds of false alarms whenever a batch job or container startup briefly spikes CPU for 3 seconds.

### The Production-Ready Pattern

To make alerts actionable and calm:

1. **Add Duration Buffers (\`for: 5m\`):** Require the anomaly condition to persist continuously before firing.
2. **Context Labels:** Always attach \`severity\`, \`team\`, \`runbook_url\`, and \`summary\`.
3. **Recording Rules:** Pre-calculate heavy rate or aggregation queries.

\`\`\`promql
# GOOD: Production-ready CPU usage rule
- alert: HostHighCpuLoad
  expr: (1 - avg by(instance) (rate(node_cpu_seconds_total{mode="idle"}[5m]))) * 100 > 85
  for: 10m
  labels:
    severity: warning
    team: infra-sre
    runbook_url: "https://wiki.internal/runbooks/high-cpu"
  annotations:
    summary: "High CPU usage on {{ $labels.instance }}"
    description: "CPU load on {{ $labels.instance }} has been above 85% for more than 10 minutes (Current: {{ $value | printf \"%.1f\" }}%)."
\`\`\`

### Key Takeaway
Never trigger alerts on transient spikes. Always ensure the notification contains actionable steps for the responding engineer.
`,
      vi: `
### Tại sao Rule Prometheus Mặc định Thường Thất bại ở Production

Nhiều bài hướng dẫn cơ bản gợi ý viết rule đơn giản như:

\`\`\`promql
# KHÔNG NÊN: Bắn cảnh báo ngay lập tức khi CPU tăng trong 1 giây
- alert: HighCPU
  expr: node_cpu_seconds_total{mode="idle"} < 20
  labels:
    severity: critical
\`\`\`

Trên thực tế sản xuất, rule này sẽ tạo ra vô số cảnh báo rác mỗi khi ứng dụng khởi động hoặc có cronjob chạy trong vài giây.

### Mẫu Rule Chuẩn Production

Để cảnh báo thực sự hữu ích:

1. **Thêm Khoảng Đệm Thời Gian (\`for: 5m\`):** Yêu cầu trạng thái bất thường duy trì liên tục trước khi firing.
2. **Gắn Nhãn Ngữ Cảnh:** Bắt buộc có \`severity\`, \`team\`, \`runbook_url\` và \`summary\`.
3. **Dùng Recording Rules:** Tính toán sẵn các truy vấn phức tạp hoặc tốn tài nguyên.

\`\`\`promql
# CHUẨN: Rule kiểm tra CPU sản xuất
- alert: HostHighCpuLoad
  expr: (1 - avg by(instance) (rate(node_cpu_seconds_total{mode="idle"}[5m]))) * 100 > 85
  for: 10m
  labels:
    severity: warning
    team: infra-sre
    runbook_url: "https://wiki.internal/runbooks/high-cpu"
  annotations:
    summary: "CPU cao trên máy chủ {{ $labels.instance }}"
    description: "Tải CPU trên {{ $labels.instance }} vượt 85% liên tục trong hơn 10 phút (Hiện tại: {{ $value | printf \"%.1f\" }}%)."
\`\`\`

### Bài học Cốt lõi
Không bao giờ bắn cảnh báo với những biến động tức thời. Luôn đảm bảo nội dung cảnh báo có sẵn hướng dẫn khắc phục (runbook).
`
    }
  },
  {
    id: "process-alive-vs-service-healthy",
    title: {
      en: "From Process Monitoring to Real Service Health",
      vi: "Từ Kiểm tra Tiến trình Đến Đánh giá Sức khỏe Dịch vụ Thực sự"
    },
    category: "Observability",
    date: "2026-06-20",
    readTime: "5 min read",
    summary: {
      en: "Why systemd 'Active (running)' is not enough, and how custom health check probes prevent hidden downtime in Kafka, Redis, and APIs.",
      vi: "Tại sao trạng thái 'Active (running)' của systemd là chưa đủ, và cách probe healthcheck ngăn ngừa sự cố ngầm trên Kafka, Redis và API."
    },
    tags: ["Observability", "Zabbix", "Healthcheck", "Linux"],
    content: {
      en: `
### The Myth of "Active (running)"

A process status can say \`active (running)\` in Systemd while:
- The TCP socket backlog is completely full and rejecting connections.
- The thread pool is deadlocked waiting on a database lock.
- The service is returning HTTP 500 or 503 internal errors to all clients.

### Designing Functional Probes

Instead of checking process existence, probe the actual service capabilities:

- **Redis:** Send \`PING\` and expect \`PONG\`. Check \`used_memory_rss\` and connection clients.
- **Kafka:** Measure consumer group lag and topic partition availability.
- **HTTP APIs:** Send HTTP GET/POST with realistic headers and verify response payload content.

### Conclusion

Always monitor the **user-perceived service health**, not just OS process entries.
`,
      vi: `
### Ảo tưởng về Trạng thái "Active (running)"

Một dịch vụ hoàn toàn có thể báo \`active (running)\` trong Systemd trong khi:
- Socket TCP đã đầy tràn và từ chối mọi kết nối mới.
- Thread pool bị deadlock do chờ kết nối CSDL.
- Dịch vụ đang trả về lỗi HTTP 500 hoặc 503 cho toàn bộ người dùng.

### Thiết kế Probe Đánh giá Sức khỏe Dịch vụ

Thay vì chỉ kiểm tra tiến trình có tồn tại hay không, hãy thử nghiệm chính khả năng hoạt động của dịch vụ:

- **Redis:** Gửi lệnh \`PING\` và chờ phản hồi \`PONG\`. Kiểm tra \`used_memory_rss\` và số client kết nối.
- **Kafka:** Đo độ trễ consumer group lag và tính khả thi của topic partition.
- **HTTP API:** Gửi HTTP GET/POST với payload mẫu và kiểm tra nội dung trả về.

### Kết luận

Luôn giám sát **sức khỏe dịch vụ dưới góc nhìn người dùng**, không chỉ nhìn vào danh sách tiến trình của HĐH.
`
    }
  },
  {
    id: "ai-agents-infrastructure-troubleshooting",
    title: {
      en: "Using AI Agents for Infrastructure Troubleshooting",
      vi: "Ứng dụng AI Agent Trong Xử lý Sự cố Hạ tầng"
    },
    category: "AI & SRE",
    date: "2026-07-10",
    readTime: "7 min read",
    summary: {
      en: "Exploring how LLM agents digest telemetry, correlate logs with Prometheus metrics, and generate instant diagnostic summaries for SRE teams.",
      vi: "Khám phá cách AI Agent phân tích telemetry, liên kết log với metric Prometheus và đưa ra chẩn đoán sự cố siêu tốc cho đội ngũ SRE."
    },
    tags: ["AI Agent", "SRE", "Observability", "Automation"],
    content: {
      en: `
### The Problem in Modern Incident Triage

During a major production outage, engineers face a wall of context:
- 50 firing Alertmanager notifications
- Thousands of log lines in Loki
- Spiking CPU/Memory dashboards in Grafana

It often takes 10 to 15 minutes just to figure out *which* service broke first.

### The AI Agent Diagnostic Pattern

By feeding structured alert contexts into an AI Agent:
1. **Log Summarization:** The AI condenses 5,000 log lines down to the 3 exact stack traces causing HTTP 500 errors.
2. **Metric Correlation:** The agent correlates a Redis latency spike with a concurrent background backup cronjob.
3. **Runbook Suggestion:** Generates instant CLI diagnostic commands (\`journalctl\`, \`ss -tulpn\`, \`docker logs\`) for the operator.

### SRE Philosophy

AI Agents should act as an **augmented co-pilot for engineers**, speeding up investigation while keeping human engineers in control of production actions.
`,
      vi: `
### Thách thức Khi Phân tích Sự cố Sản xuất

Khi có sự cố hạ tầng xảy ra, kỹ sư phải đối mặt với lượng thông tin khổng lồ:
- Hàng chục thông báo cảnh báo nhảy liên tục từ Alertmanager
- Hàng nghìn dòng log chảy liên tục trong Loki
- Biểu đồ CPU/RAM tăng vọt trên Grafana

Thường mất 10 đến 15 phút chỉ để khoanh vùng xem *dịch vụ nào* bị lỗi đầu tiên.

### Mô hình AI Agent Hỗ trợ Chẩn đoán

Bằng cách đưa dữ liệu ngữ cảnh cảnh báo vào AI Agent:
1. **Tóm tắt Log:** AI nén 5.000 dòng log thành 3 vị trí stack trace chính gây ra lỗi HTTP 500.
2. **Liên kết Metric:** Agent tự động phát hiện độ trễ Redis tăng vọt trùng khớp với giờ chạy backup cronjob.
3. **Gợi ý Runbook:** Tạo ngay danh mục lệnh CLI chẩn đoán (\`journalctl\`, \`ss -tulpn\`, \`docker logs\`) cho kỹ sư.

### Triết lý SRE
AI Agent đóng vai trò là **người trợ lý đắc lực cho kỹ sư**, tăng tốc độ điều tra nhưng vẫn giữ kỹ sư làm người quyết định cuối cùng trong môi trường sản xuất.
`
    }
  }
];
