export interface Internship {
  id: number;
  period: string;
  role: string;
  company: string;
  details: string[];
  tags: string[];
}

export interface Project {
  id: number;
  icon: React.ElementType;
  title: string;
  description: string;
  tags: string[];
  links: {
    github?: string;
    demo?: string;
  };
}

export interface NavItem {
  label: string;
  href: string;
}