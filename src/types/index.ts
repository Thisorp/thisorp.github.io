export type Language = 'en' | 'vi';
export type Theme = 'dark' | 'light';

export interface PersonalInfo {
  name: string;
  nickname: string;
  headline: Record<Language, string>;
  positioning: Record<Language, string>;
  shortIntro: Record<Language, string>;
  philosophy: Record<Language, string>;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  facebook: string;
  location: Record<Language, string>;
}

export interface MetricCard {
  label: Record<Language, string>;
  value: string;
  subtext?: Record<Language, string>;
}

export interface ArchitectureNode {
  id: string;
  title: Record<Language, string>;
  type: 'users' | 'app' | 'services' | 'observability' | 'automation' | 'reliability';
  description: Record<Language, string>;
  metrics?: string[];
  techs?: string[];
  
  purpose?: Record<Language, string>;
  responsibilities?: Record<Language, string[]>;
  alerting?: Record<Language, string[]>;
  dependencies?: string[];
  failureModes?: Record<Language, string[]>;
  productionConsiderations?: Record<Language, string[]>;
}

export interface CaseStudy {
  id: string;
  title: Record<Language, string>;
  category: Record<Language, string>;
  tagline: Record<Language, string>;
  technologies: string[];
  
  // Enriched narrative fields
  overview?: Record<Language, string>;
  background?: Record<Language, string>;
  problem: Record<Language, string>;
  architecture?: Record<Language, string>;
  implementation?: Record<Language, string>;
  deployment?: Record<Language, string>;
  monitoring?: Record<Language, string>;
  operationalConsiderations?: Record<Language, string>;
  lessonsLearned?: Record<Language, string>;
  futureImprovements?: Record<Language, string>;
  relatedTechnologies?: string[];
  
  // Legacy / specific fields
  architectureDiagramText?: string;
  implementationDetails?: Record<Language, string[]>;
  engineeringDecisions?: Record<Language, string[]>;
  challenges?: Record<Language, string[]>;
  outcome?: Record<Language, string>;
  metrics?: MetricCard[];
  alertComparison?: {
    bad: {
      alert: string;
      flow: string[];
      consequences: Record<Language, string>;
    };
    good: {
      alert: string;
      flow: string[];
      benefits: Record<Language, string>;
    };
  };
  folderStructure?: string;
}

export interface SkillCategory {
  id: string;
  name: Record<Language, string>;
  skills: {
    name: string;
    level: 1 | 2 | 3 | 4 | 5;
    description?: Record<Language, string>;
    badge?: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: Record<Language, string>;
  period: string;
  type: 'production' | 'lab';
  description: Record<Language, string>;
  responsibilities: Record<Language, string[]>;
  technologies: string[];
  impactMetrics: MetricCard[];
  
  // New narrative fields
  challenges?: Record<Language, string>;
  reliabilityImprovements?: Record<Language, string>;
}

export interface TimelineItem {
  year: string;
  title: Record<Language, string>;
  subtitle: Record<Language, string>;
  description: Record<Language, string>;
  tags: string[];
  isCurrent?: boolean;
}

export interface EducationInfo {
  institution: string;
  degree: Record<Language, string>;
  period: string;
  gpa: string;
  honors: Record<Language, string>;
  scholarship: Record<Language, string>;
  highlights: Record<Language, string[]>;
}

export interface BlogArticle {
  id: string;
  title: Record<Language, string>;
  category: string;
  date: string;
  readTime: string;
  summary: Record<Language, string>;
  content: Record<Language, string>;
  tags: string[];
}

export interface TerminalCommand {
  command: string;
  description: Record<Language, string>;
  execute: (args?: string[]) => string;
}

export interface AiDiagnosticResult {
  severity: 'CRITICAL' | 'WARNING' | 'INFO';
  summary: Record<Language, string>;
  rootCauseCandidate: Record<Language, string>;
  correlatedMetrics: string[];
  suggestedRunbookAction: Record<Language, string[]>;
  promqlCheck?: string;
}
