import {
  AppWindow,
  Atom,
  Code2,
  Component,
  Database,
  GitBranch,
  LayoutTemplate,
  Palette,
  Server,
  Sparkles,
  TerminalSquare,
  Workflow,
} from 'lucide-react';

export const skillCategories = [
  {
    title: 'Languages',
    description: 'Core languages I use across web development, backend work, and machine learning projects.',
    skills: [
      { name: 'Python', icon: Code2 },
      { name: 'C++', icon: Component },
      { name: 'C', icon: Code2 },
      { name: 'JavaScript', icon: Sparkles },
      { name: 'SQL', icon: Database },
    ],
  },
  {
    title: 'Frontend',
    description: 'Tools I use for responsive UI, interactive components, and practical web application development.',
    skills: [
      { name: 'HTML', icon: LayoutTemplate },
      { name: 'CSS', icon: Palette },
      { name: 'Angular', icon: AppWindow },
      { name: 'React', icon: Atom },
    ],
  },
  {
    title: 'Backend',
    description: 'Backend tools and API layers I use when building full-stack products and workflow systems.',
    skills: [
      { name: 'FastAPI', icon: Workflow },
      { name: 'Node.js', icon: Server },
      { name: 'SQLite', icon: Database },
      { name: 'API Design', icon: Workflow },
    ],
  },
  {
    title: 'Data & ML',
    description: 'Libraries and approaches I use for applied machine learning, NLP workflows, and data experimentation.',
    skills: [
      { name: 'Pandas', icon: Database },
      { name: 'NumPy', icon: Component },
      { name: 'scikit-learn', icon: Sparkles },
      { name: 'NLP', icon: Code2 },
    ],
  },
  {
    title: 'Tools',
    description: 'Everyday tools that support my collaboration, documentation, and development workflow.',
    skills: [
      { name: 'Git', icon: GitBranch },
      { name: 'Notion', icon: TerminalSquare },
      { name: 'SQLite', icon: Database },
    ],
  },
];
