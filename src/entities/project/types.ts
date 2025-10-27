export interface Project {
  id: string;
  title: string;
  description: string;
  type: "team" | "personal";
  technologies: string[];
  github: {
    frontend?: string;
    backend?: string;
    other?: string;
  };
  features: string[];
  challenges: string[];
  solutions: string[];
  image?: string;
}

export interface ProjectCategory {
  name: string;
  projects: Project[];
}
