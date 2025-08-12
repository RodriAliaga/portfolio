export type ExperienceItem = {
  role: string;
  company: string;
  period: string; // e.g., "2022 — Presente"
  bullets: string[];
};

export type EducationItem = {
  degree: string;
  institution: string;
  year?: string;
};

export type LanguageItem = {
  name: string;
  level: string; // e.g., "Nativo", "C1"
};

export const cv = {
  summary: "",
  skills: {
    frontend: [] as string[],
    backend: [] as string[],
    devops: [] as string[],
    tools: [] as string[],
  },
  experience: [] as ExperienceItem[],
  education: [] as EducationItem[],
  languages: [] as LanguageItem[],
};

