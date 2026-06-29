export type Locale = "ru" | "en";

export type NavItem = {
  label: string;
  href: `#${string}` | `/${string}`;
};

export type SocialIcon = "github" | "linkedin" | "telegram" | "mail";

export type SocialLink = {
  label: string;
  href: string;
  icon: SocialIcon;
  isExternal?: boolean;
};

export type Profile = {
  name: string;
  role: string;
  location: string;
  email: string;
  telegram: string;
  availability: string;
  bio: string;
  positioningNote: string;
  resumeHref: string;
  navItems: NavItem[];
  socialLinks: SocialLink[];
};

export type ProjectStatus = "case-study" | "in-progress" | "launched";

export type ProjectLink = {
  label: string;
  href: string;
  isExternal?: boolean;
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  year: string;
  status: ProjectStatus;
  stack: string[];
  highlights: string[];
  links: ProjectLink[];
};

export type CaseStudyMetric = {
  label: string;
  value: string;
  description: string;
};

export type CaseStudyFigure = {
  title: string;
  description: string;
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type CaseStudySection = {
  title: string;
  body: string[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  year: string;
  context: string;
  myRole: string[];
  stack: string[];
  metrics: CaseStudyMetric[];
  sections: CaseStudySection[];
  figures: CaseStudyFigure[];
  links: ProjectLink[];
  note: string;
  backHref: "/" | "/en";
  backLabel: string;
  externalLinkLabel: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type ExperienceItem = {
  company: string;
  location: string;
  role: string;
  period: string;
  summary: string;
  stack: string[];
  highlights: string[];
};

export type EducationItem = {
  institution: string;
  degree: string;
  program: string;
  location: string;
  period: string;
  details: string[];
};

export type Certificate = {
  title: string;
  issuer: string;
  date: string;
};

export type LanguageItem = {
  name: string;
  level: string;
};

export type PortfolioCopy = {
  mainNavigationLabel: string;
  languageSwitchLabel: string;
  projectCta: string;
  contactCta: string;
  locationLabel: string;
  emailLabel: string;
  telegramLabel: string;
  resumeLabel: string;
  openResumeLabel: string;
  downloadResumeLabel: string;
  projectLinksFallback: string;
  sections: {
    projectsEyebrow: string;
    projectsTitle: string;
    experienceEyebrow: string;
    experienceTitle: string;
    skillsEyebrow: string;
    skillsTitle: string;
    educationEyebrow: string;
    educationTitle: string;
    certificatesTitle: string;
    languagesTitle: string;
    contactEyebrow: string;
    contactTitle: string;
    contactDescription: string;
  };
};

export type PortfolioContent = {
  locale: Locale;
  alternateLocale: Locale;
  alternateHref: "/" | "/en";
  profile: Profile;
  projects: Project[];
  skillGroups: SkillGroup[];
  experience: ExperienceItem[];
  education: EducationItem[];
  certificates: Certificate[];
  languages: LanguageItem[];
  copy: PortfolioCopy;
};
