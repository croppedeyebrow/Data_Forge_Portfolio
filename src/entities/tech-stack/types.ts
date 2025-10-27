export interface TechStack {
  category: string;
  technologies: string[];
  description?: string;
}

export interface TechStackCategory {
  name: string;
  stacks: TechStack[];
}
