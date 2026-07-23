export const profile = {
  name: 'Kimaya Deshpande',
  location: 'Atlanta, GA',
  email: 'deshpank@purdue.edu',
  github: 'https://github.com/kimaya-k',
  linkedin: 'https://www.linkedin.com/in/kimaya-deshpande-026452253/',
  school: 'Purdue University',
  grad: 'May 2027',
};

export const stats = [
  { value: '2027', label: 'Grad Year — Purdue CS' },
  { value: '5', label: 'Internships & Research Roles' },
  { value: '2×', label: 'Hackathon Podium Finishes' },
];

export const heroPhrases = [
  'that impact.',
  'that innovate.',
  "for privacy.",
  'for production.',
  'for research.',
  'for healthcare',
  'for education',
  'that scale.',
  'that optimize.',
  'to learn.',
  'to explore.',
];

export const heroBio =
  "Hi! I'm Kimaya, a CS student and Jandos Scholar at Purdue, currently working at Humana and CATME.  I like to build software, web applications, and AI systems that have a real impact on the community through healthcare, education, and privacy. Off the clock I'm watching F1 or eating cake.";

  export const experience = [
  {
    role: 'Enterprise AI Software Intern',
    org: 'Humana',
    mark: { text: 'H', color: '#3f5138', domain: 'humana.com' },
    date: 'May 2026 — Aug 2026',
    tags: ['LangGraph', 'Azure DevOps', 'Multi-Hop'],
    points: [
      'Built a multi-hop architecture pipeline that raised the accuracy and precision of acute-change evaluation across clinical measures like vitals.',
      'Developed LangGraph agents that verify home-visit patient notes against LLM output, tightening diagnostic reliability further downstream.',
      'Ran the work through Azure DevOps sprints, keeping delivery on track across cross-functional milestones.',
    ],
  },
  {
    role: 'Software Developer',
    org: 'CATME',
    mark: { text: 'C', color: '#8a6b2f', domain: 'catme.org' },
    date: 'Jan 2026 — Present',
    tags: ['Perl', 'SQL', 'Zendesk'],
    points: [
      'Maintain backend functionality for a Purdue-built platform used for team formation and peer evaluation.',
      'Diagnose and resolve production issues reported through Zendesk with system-level debugging.',
      'Ship bug fixes, new features, and an audit-tracking system in Perl and SQL.',
    ],
  },
  {
    role: 'Research Assistant',
    org: 'Tech Justice Lab — LLM Privacy & Profiling',
    mark: { text: 'TJ', color: '#3d4f6b', domain: 'purdue.edu' },
    date: 'Nov 2025 — Present',
    tags: ['Privacy Research', 'LLM Agents'],
    points: [
      'Research automated profile-inference attacks on LLMs under Prof. Hanshen Xiao and PhD candidate Y. Du.',
      'Extend an LLM-agent framework that builds holistic user profiles from multimodal interaction histories.',
      'Design profiling pipelines that measure privacy leakage and de-anonymization risk across real and synthetic datasets.',
    ],
  },
  {
    role: 'Student Developer',
    org: 'Dow Chemical — Data Mine Corporate Partners',
    mark: { text: 'D', color: '#7a3b30', domain: 'dow.com' },
    date: 'Aug 2025 — May 2026',
    tags: ['DSPy', 'FastAPI', 'Docker'],
    points: [
      'Built an AI report agent with LangGraph and DSPy that generates project reports from vector embeddings, RAG, and Quarto visualizations.',
      'Stood up a DuckDB backend behind FastAPI endpoints, tested with Postman and shipped in Docker.',
      'Analyzed large-scale datasets in SQL, Python, and Bash to surface insights for the partner team.',
    ],
  },
  {
    role: 'Software Intern',
    org: 'DataGenie',
    mark: { text: 'DG', color: '#4a4536', domain: 'datagenie.ai' },
    date: 'May 2025 — Aug 2025',
    tags: ['n8n', 'Encryption'],
    points: [
      'Built agentic and multi-agent workflows in n8n that automated the internal client-qualification process.',
      'Researched and implemented custom encryption to secure packaged products and protect data integrity.',
    ],
  },
];

export const projects = [
  {
    name: 'A.C.T',
    tag: '2nd Place — Humana Hackathon',
    date: '2026',
    description:
      'A multi-agent system that automates insurance member support — handling inquiries, ROI authorization, and claim summarization to cut repeat calls and response delays.',
    stack: ['Google Cloud ADK', 'BigQuery', 'Tailwind CSS'],
    link: null,
  },
  {
    name: 'FlowFuel',
    tag: '2nd Place — InnovateHer Hackathon',
    date: '2025',
    description:
      'A full-stack health app pairing a nutrition guide with a cycle tracker, scraping Purdue Dining data and routing it through Groq AI for cycle-aware recommendations.',
    stack: ['React', 'Node.js', 'Groq AI', 'RapidAPI'],
    link: null,
  },
  {
    name: 'UNIX Shell Interpreter',
    tag: 'Systems Programming',
    date: '2026',
    description:
      'A custom shell built from scratch — pipes, I/O redirection, background processes, subshells, and wildcard globbing, with a hand-written line editor supporting history and tab completion.',
    stack: ['C++', 'Flex', 'Bison'],
    link: null,
  },
  {
    name: 'Dynamic Memory Allocator',
    tag: 'Systems Programming',
    date: '2026',
    description:
      'A malloc implementation using segregated free lists, boundary-tag coalescing, and block splitting, built on sbrk and pthread mutexes with runtime corruption detection.',
    stack: ['C', 'pthreads'],
    link: null,
  },
  {
    name: 'Car Image Classifier',
    tag: 'Harvard Extension School — CSCI-S14A',
    date: '2023 — 2024',
    description:
      'An image classifier built on Inception_v3, studying how epoch count and batch size trade off against accuracy and training time, deployed as a Dockerized Flask app on AWS EC2.',
    stack: ['Python', 'Flask', 'Docker', 'AWS EC2'],
    link: null,
  },
];

export const skills = [
  {
    label: 'Languages',
    items: ['C', 'C++', 'Python', 'Java', 'JavaScript', 'SQL', 'HTML/CSS', 'Bash', 'Perl', 'Assembly (LEGv8, x86-64)'],
  },
  {
    label: 'AI & Agents',
    items: ['LangGraph', 'n8n', 'Google ADK', 'RAG', 'Multi-Hop Pipelines', 'DSPy'],
  },
  {
    label: 'Backend & Data',
    items: ['FastAPI', 'Flask', 'Node.js', 'DuckDB', 'Databricks', 'Pandas', 'NumPy', 'Docker'],
  },
  {
    label: 'Tooling',
    items: ['Git', 'Azure DevOps', 'Postman', 'Zendesk'],
  },
];

export const involvement = [
  {
    role: 'Jandos Scholar & WISP Mentor',
    org: 'Women in Science Program, Purdue',
    date: 'Aug 2026 — Present',
    note: 'Awarded for academic achievement and community engagement; mentors STEM students on technical and professional development.',
  },
  {
    role: 'Project Mentor',
    org: 'Purdue LaunchPad',
    date: 'Aug 2025 — Dec 2025',
    note: 'Mentored a student building an AI-powered app for AIME math problems using LoRA and GSM8K, covering environment setup and full-stack review.',
  },
  {
    role: 'Representative',
    org: 'Purdue Science Student Council',
    date: 'Mar 2025 — Dec 2025',
    note: "Organized community outreach events including Science Sunday and card-making for retirement homes.",
  },
];

export const courses = [
  { name: 'Data Structures and Algorithms', note: 'Core CS coursework' },
  { name: 'Object Oriented Programming', note: 'Core CS coursework' },
  { name: 'Advanced C', note: 'Systems-level programming' },
  { name: 'Computer Architecture', note: 'Systems-level programming' },
  { name: 'Systems Programming', note: 'Operating systems, memory, concurrency' },
  { name: 'Artificial Intelligence', note: 'Core CS coursework' },
];

export const techStack = [
  'C', 'C++', 'Python', 'Java', 'JavaScript', 'SQL', 'Bash', 'Perl',
  'React', 'Node.js', 'FastAPI', 'Flask', 'LangGraph', 'n8n',
  'Docker', 'Git', 'Azure DevOps', 'DuckDB', 'Databricks', 'Pandas',
];
