export const profile = {
  name: "Gabriel Cordeiro",
  fullName: "Gabriel Cordeiro de Carvalho",
  roles: [
    "Desenvolvedor Full-Stack",
    "Especialista em React & TypeScript",
    "Engenheiro .NET & Python",
    "Pesquisador em Digital Twins",
  ],
  location: "Vila Velha, ES · Brasil",
  phone: "+55 (27) 99312-2222",
  email: "gcordeirocarvalho97@gmail.com",
  github: "https://github.com/gabcordeiro",
  linkedin: "https://www.linkedin.com/in/gabriel-cordeiro-de-carvalho-a2a1351bb/",
  summary:
    "Bacharel em Ciência da Computação (UVV) com sólida experiência no desenvolvimento de sistemas escaláveis utilizando .NET (C#) e Python (Flask). Especialista em front-end moderno com React, TypeScript e Tailwind CSS, focado na integração de APIs REST e automação de regras de negócio complexas. Experiência comprovada em projetos de alta complexidade técnica, como Gêmeos Digitais industriais e sistemas de gestão comercial com motores de cálculo dinâmicos.",
};

export const stats = [
  { value: "9+", label: "Projetos em produção" },
  { value: "3", label: "Artigos publicados (ACM/IEEE)" },
  { value: "4+", label: "Anos de experiência" },
  { value: "10+", label: "Tecnologias dominadas" },
];

export type Project = {
  title: string;
  description: string;
  url: string;
  tags: string[];
  featured?: boolean;
  emoji: string;
};

export const projects: Project[] = [
  {
    title: "Sistema de Gestão Comercial · JC Cortinas",
    description:
      "Plataforma full-stack para automação de orçamentos, com motor de cálculo complexo para precificação dinâmica de materiais e metragem linear. Persistência de dados e autenticação via Supabase.",
    url: "https://jeiselcortinas.vercel.app/",
    tags: ["React", "TypeScript", "Supabase", "Autenticação"],
    featured: true,
    emoji: "🏪",
  },
  {
    title: "Match CV",
    description:
      "Plataforma focada em análise e otimização de currículos, cruzando o perfil do candidato com os requisitos da vaga.",
    url: "https://match-cv-nine.vercel.app/",
    tags: ["React", "Tailwind CSS", "API REST", "Supabase"],
    featured: true,
    emoji: "🎯",
  },
  {
    title: "Divide AI",
    description:
      "Ferramenta desenvolvida para processamento e divisão inteligente de dados e tarefas entre grupos.",
    url: "https://divide-ai-two.vercel.app/",
    tags: ["React", "TypeScript", "Supabase"],
    emoji: "➗",
  },
  {
    title: "Trampa",
    description:
      "Marketplace e plataforma de exploração de serviços e vagas, conectando profissionais e oportunidades.",
    url: "https://trampa-omega.vercel.app/",
    tags: ["React", "TypeScript", "Supabase"],
    emoji: "💼",
  },
  {
    title: "Swipe Pass",
    description:
      "Aplicativo web de estudos e memorização com flashcards, gestos de swipe e design totalmente responsivo.",
    url: "https://swipe-pass.vercel.app/",
    tags: ["React", "TypeScript", "Supabase"],
    emoji: "🃏",
  },
  {
    title: "Travian Clone",
    description:
      "Recriação de mecânicas de jogo de estratégia em tempo real, com gerenciamento de recursos, construções e evolução.",
    url: "https://travian-clone.vercel.app/",
    tags: ["React", "TypeScript", "Supabase", "Game Logic"],
    emoji: "🏰",
  },
  {
    title: "Visualizador de Moléculas 3D",
    description:
      "Aplicação interativa para explorar moléculas em 3D, visualizar estruturas atômicas e compreender propriedades químicas.",
    url: "https://molecular-viewer-3d.vercel.app/",
    tags: ["React", "TypeScript", "3D"],
    emoji: "🧬",
  },
  {
    title: "Pratique Tabu",
    description:
      "Site interativo para aprendizado de tabuada, com login, registro e metas personalizadas de aprendizado.",
    url: "https://pratique-tabu-git-main-gabcordeiros-projects.vercel.app/",
    tags: ["React", "TypeScript", "Supabase"],
    emoji: "✖️",
  },
  {
    title: "Quadro Kanban Interativo",
    description:
      "Ferramenta online para organização de tarefas no estilo Kanban, com interface intuitiva e interação em tempo real.",
    url: "https://kanban-board-html-git-main-gabcordeiros-projects.vercel.app/",
    tags: ["React", "TypeScript", "Drag & Drop"],
    emoji: "📋",
  },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
};

export const experiences: Experience[] = [
  {
    role: "Assistente Administrativo e Suporte Técnico",
    company: "Emescam",
    period: "02/2026 — Atual",
    description:
      "Suporte técnico e rotinas administrativas, garantindo a estabilidade da infraestrutura e a resolução eficiente de chamados. Otimização de processos internos e manutenção contínua das operações do setor.",
    tags: ["Infraestrutura", "Suporte", "Processos"],
  },
  {
    role: "Técnico de Suporte",
    company: "Projeta Tecnologia",
    period: "08/2025 — 02/2026",
    description:
      "Atuação direta com ERP Betha na gestão de prefeituras: cruzamento de dados complexos e tradução de requisitos de negócio para soluções técnicas. Automação de processos e criação de relatórios com Jasper Reports, garantindo a integridade e validação de documentos oficiais.",
    tags: ["ERP Betha", "Jasper Reports", "Automação", "SQL"],
  },
  {
    role: "Pesquisador e Desenvolvedor · Realidade Virtual & IA",
    company: "Bolsa Vale / UVV",
    period: "2021 — 2025",
    description:
      "Desenvolvimento de sistemas de simulação com C# e lógica de programação avançada. Publicação de artigos científicos sobre Digital Twins e otimização de processos industriais, com análise de fluxos e comportamento de sistemas.",
    tags: ["C#", "Digital Twins", "Realidade Virtual", "Pesquisa"],
  },
  {
    role: "Estágio · Desenvolvedor Flutter",
    company: "Jade Autistic",
    period: "01/2024 — 08/2024",
    description:
      "Criação de aplicações mobile em Flutter com Firebase, com foco em acessibilidade e experiência do usuário para pessoas autistas.",
    tags: ["Flutter", "Firebase", "Acessibilidade", "Mobile"],
  },
];

export type SkillGroup = {
  title: string;
  icon: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Web & Front-end",
    icon: "⚛️",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Axios", "HTML5/CSS3"],
  },
  {
    title: "Back-end & Linguagens",
    icon: "⚙️",
    skills: ["C# (.NET / ASP.NET)", "Python (Flask)", "C++", "Groovy", "APIs REST"],
  },
  {
    title: "Banco de Dados & Nuvem",
    icon: "🗄️",
    skills: ["PostgreSQL (Supabase)", "SQL", "Firebase", "SQLite", "Ecossistema Vercel"],
  },
  {
    title: "Ferramentas & Arquitetura",
    icon: "🛠️",
    skills: ["Docker", "Git/GitHub", "Postman", "Linux", "Jasper Reports", "Scrum/Kanban"],
  },
  {
    title: "IA & Dados",
    icon: "🤖",
    skills: ["LLMs (IA Generativa)", "Prompt Engineering", "Scraping de dados", "Extração de padrões", "Claude Code", "Gemini"],
  },
];

export type Publication = {
  title: string;
  venue: string;
  publisher: "ACM" | "IEEE";
  url: string;
  year: string;
};

export const publications: Publication[] = [
  {
    title:
      "Optimizing Industrial Processes through Digital Twin Simulation in a Didactic Manufacturing Plant",
    venue: "SVR '23 · 25th Symposium on Virtual and Augmented Reality",
    publisher: "ACM",
    url: "https://dl.acm.org/doi/10.1145/3625008.3625015",
    year: "2023",
  },
  {
    title:
      "VREnergy: A simulator for critical operating procedures in electrical substations with evaluation processes",
    venue: "SVR '24 · 26th Symposium on Virtual and Augmented Reality",
    publisher: "ACM",
    url: "https://dl.acm.org/doi/10.1145/3691573.3691601",
    year: "2024",
  },
  {
    title:
      "Implementação de uma Plataforma de Gêmeo Digital de uma Planta Didática de Manufatura",
    venue: "15th IEEE International Conference on Industry Applications (INDUSCON)",
    publisher: "IEEE",
    url: "https://ieeexplore.ieee.org/document/10374947",
    year: "2023",
  },
];

export type Certificate = {
  title: string;
  issuer: string;
  url: string;
};

export const certificates: Certificate[] = [
  {
    title: "Scrum Fundamentals Certified",
    issuer: "SCRUMstudy",
    url: "https://drive.google.com/file/d/1ho6l-u3Ni_XJbmfLLref_fAZ_XEWcvFk/view?usp=sharing",
  },
  {
    title: "Consultor Trainee de Integrações SAP · Turma #1",
    issuer: "Megawork Academy",
    url: "https://drive.google.com/file/d/1BzY4H57uYL_TKiomzfGuLxmZB6BIWajb/view?usp=drive_link",
  },
  {
    title: "Consultor Trainee de Integrações SAP · 2023",
    issuer: "Megawork Academy",
    url: "https://drive.google.com/file/d/1NcjaHe8LAEsMIi96EUFSPE3VyOXEYt7J/view?usp=drive_link",
  },
  {
    title: "Frontend com React",
    issuer: "Sexta TECH",
    url: "https://drive.google.com/file/d/19dfGxNMojenoe9_F7a-htm8cR1LeOw8u/view?usp=drive_link",
  },
];

export const education = {
  degree: "Bacharelado em Ciência da Computação",
  school: "Universidade Vila Velha (UVV)",
  period: "2019 — 2024 · Concluído",
  description:
    "Formação com foco em desenvolvimento de software e sistemas distribuídos, abrangendo back-end (arquitetura, APIs, banco de dados e integração de sistemas) e front-end (interfaces interativas, usabilidade e experiência do usuário).",
  highlights: [
    "Estruturas de Dados",
    "Programação Orientada a Objetos",
    "Banco de Dados",
    "Engenharia de Software",
    "Padrões de Projeto",
    "Desenvolvimento Web",
  ],
};
