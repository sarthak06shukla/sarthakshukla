const siteBaseUrl = import.meta.env.BASE_URL;

export const projects = [
  {
    id: 'nse-internal-portal',
    title: 'NSE Self-Service Internal Portal',
    category: 'Internal Tools',
    year: '2025',
    status: 'Internship build',
    gradient: 'from-slate-800 via-slate-950 to-blue-500/25',
    summary:
      'Internal portal for 100+ employees to manage queries, access, and workflow tasks more efficiently.',
    description:
      'An internal portal designed to help employees create and manage data queries more efficiently while enforcing secure access and structured workflows.',
    outcome:
      'Turned 10+ business requirements into reusable UI and backend workflows, improving delivery speed by 30%.',
    highlights: [
      'Supported 100+ internal employees',
      'Implemented role-based access control',
      'Reduced manual intervention by about 40%',
    ],
    techStack: ['Angular', 'FastAPI', 'SQLite', 'SQL'],
    github: null,
    live: null,
    featured: true,
  },
  {
    id: 'construction-company-platform',
    title: 'Construction Company Portfolio & Project Management Website',
    category: 'Web Development',
    year: '2025',
    status: 'Featured project',
    gradient: 'from-slate-800 via-slate-950 to-blue-400/24',
    summary:
      'Responsive website for showcasing construction projects, services, and structured project updates.',
    description:
      'A responsive web platform built to showcase construction projects and services while handling project listings and updates in a structured way.',
    outcome:
      'Improved online visibility and user engagement while planning the system to support growth up to 1M+ users.',
    highlights: [
      'Responsive platform for projects and services',
      'Boosted visibility for 1,000+ user reach goals',
      'Designed with scalability in mind for long-term growth',
    ],
    techStack: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    github: null,
    live: 'https://p4-solution-frontend.onrender.com/',
    featured: true,
  },
  {
    id: 'human-activity-recognition',
    title: 'Human Activity Recognition Using Smartphone Sensor Data',
    category: 'AI / ML',
    year: '2024',
    status: '96% accuracy',
    gradient: 'from-slate-800 via-slate-950 to-sky-400/22',
    summary:
      'Machine learning model for classifying smartphone-based human activity with 96% accuracy.',
    description:
      'A machine learning system built to classify human activities using smartphone sensor data through preprocessing, feature extraction, and model training.',
    outcome:
      'Compared multiple classical ML approaches and reached 96% accuracy after hyperparameter tuning with SVM.',
    highlights: [
      'Evaluated Logistic Regression, Random Forest, SVM, and KNN',
      'Handled preprocessing and feature extraction end to end',
      'Improved final performance through systematic tuning',
    ],
    techStack: ['Python', 'Pandas', 'NumPy', 'scikit-learn', 'SVM'],
    github: null,
    live: null,
    featured: true,
  },
  {
    id: 'developer-portfolio',
    title: 'Developer Portfolio Website',
    category: 'Web Development',
    year: '2026',
    status: 'Current site',
    gradient: 'from-slate-800 via-slate-950 to-blue-500/24',
    summary:
      'Personal portfolio website built to present my background, projects, experience, and resume in a clean way.',
    description:
      'A responsive portfolio website built to showcase my profile, projects, experience, and contact details with a custom interactive UI.',
    outcome:
      'Created a more polished and personal online portfolio with resume download support, motion effects, and a cleaner multi-page structure.',
    highlights: [
      'Built with a reusable component structure',
      'Includes resume download and interactive UI effects',
      'Responsive across desktop and mobile',
    ],
    techStack: ['React', 'Tailwind CSS', 'Framer Motion', 'React Router'],
    github: null,
    live: siteBaseUrl,
    featured: false,
  },
];
