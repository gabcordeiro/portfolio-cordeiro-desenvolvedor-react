import type { Lang } from "./i18n";

export type Project = {
  title: string;
  description: string;
  url: string;
  tags: string[];
  featured?: boolean;
  emoji: string;
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
};

export type SkillGroup = {
  title: string;
  icon: string;
  skills: string[];
};

export type Publication = {
  title: string;
  venue: string;
  publisher: "ACM" | "IEEE";
  url: string;
  year: string;
};

export type Certificate = {
  title: string;
  issuer: string;
  url: string;
};

const publications: Publication[] = [
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

const certificates: Certificate[] = [
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

type ContentBundle = {
  profile: {
    name: string;
    fullName: string;
    roles: string[];
    location: string;
    phone: string;
    email: string;
    github: string;
    linkedin: string;
    summary: string;
  };
  stats: { value: string; label: string }[];
  projects: Project[];
  experiences: Experience[];
  skillGroups: SkillGroup[];
  publications: Publication[];
  certificates: Certificate[];
  education: {
    degree: string;
    school: string;
    period: string;
    description: string;
    highlights: string[];
  };
};

export const content: Record<Lang, ContentBundle> = {
  en: {
    profile: {
      name: "Gabriel Cordeiro",
      fullName: "Gabriel Cordeiro de Carvalho",
      roles: [
        "Full-Stack Developer",
        "React & TypeScript Specialist",
        ".NET & Python Engineer",
        "Digital Twins Researcher",
      ],
      location: "Vila Velha, ES · Brazil",
      phone: "+55 (27) 99312-2222",
      email: "gcordeirocarvalho97@gmail.com",
      github: "https://github.com/gabcordeiro",
      linkedin: "https://www.linkedin.com/in/gabriel-cordeiro-de-carvalho-a2a1351bb/",
      summary:
        "Computer Science graduate (UVV) with solid experience building scalable systems using .NET (C#) and Python (Flask). Specialist in modern front-end with React, TypeScript and Tailwind CSS, focused on REST API integration and automation of complex business rules. Proven track record on technically demanding projects, such as industrial Digital Twins and commercial management systems with dynamic calculation engines.",
    },
    stats: [
      { value: "10+", label: "Live projects" },
      { value: "3", label: "Published papers (ACM/IEEE)" },
      { value: "4+", label: "Years of experience" },
      { value: "10+", label: "Technologies mastered" },
    ],
    projects: [
      {
        title: "Faro Study",
        description:
          "AI-powered spaced-repetition study platform: paste an exam syllabus, plain text or JSON and Faro turns it into ready-to-review flashcards. Subject-based tracks, retention analytics (consistency heatmap and forgetting curve) and AI-generated multiple-choice quizzes.",
        url: "https://farostudy.vercel.app/",
        tags: ["React", "TypeScript", "Supabase", "Generative AI"],
        featured: true,
        emoji: "🧭",
      },
      {
        title: "Commercial Management System · JC Cortinas",
        description:
          "Full-stack platform for quote automation, with a complex calculation engine for dynamic pricing of materials and linear yardage. Data persistence and authentication via Supabase.",
        url: "https://jeiselcortinas.vercel.app/",
        tags: ["React", "TypeScript", "Supabase", "Authentication"],
        featured: true,
        emoji: "🏪",
      },
      {
        title: "Match CV",
        description:
          "Platform focused on resume analysis and optimization, matching a candidate's profile against job requirements.",
        url: "https://match-cv-nine.vercel.app/",
        tags: ["React", "Tailwind CSS", "REST API", "Supabase"],
        featured: true,
        emoji: "🎯",
      },
      {
        title: "Divide AI",
        description:
          "Tool built for smart processing and splitting of data and tasks across groups.",
        url: "https://divide-ai-two.vercel.app/",
        tags: ["React", "TypeScript", "Supabase"],
        emoji: "➗",
      },
      {
        title: "Trampa",
        description:
          "Marketplace and service/job discovery platform, connecting professionals with opportunities.",
        url: "https://trampa-omega.vercel.app/",
        tags: ["React", "TypeScript", "Supabase"],
        emoji: "💼",
      },
      {
        title: "Swipe Pass",
        description:
          "Web study and memorization app with flashcards, swipe gestures and a fully responsive design.",
        url: "https://swipe-pass.vercel.app/",
        tags: ["React", "TypeScript", "Supabase"],
        emoji: "🃏",
      },
      {
        title: "Travian Clone",
        description:
          "Recreation of real-time strategy game mechanics, with resource management, building and evolution systems.",
        url: "https://travian-clone.vercel.app/",
        tags: ["React", "TypeScript", "Supabase", "Game Logic"],
        emoji: "🏰",
      },
      {
        title: "3D Molecule Viewer",
        description:
          "Interactive application to explore molecules in 3D, visualize atomic structures and understand chemical properties.",
        url: "https://molecular-viewer-3d.vercel.app/",
        tags: ["React", "TypeScript", "3D"],
        emoji: "🧬",
      },
      {
        title: "Pratique Tabu",
        description:
          "Interactive site for learning multiplication tables, with login, sign-up and personalized learning goals.",
        url: "https://pratique-tabu-git-main-gabcordeiros-projects.vercel.app/",
        tags: ["React", "TypeScript", "Supabase"],
        emoji: "✖️",
      },
      {
        title: "Interactive Kanban Board",
        description:
          "Online tool for organizing tasks Kanban-style, with an intuitive interface and real-time interaction.",
        url: "https://kanban-board-html-git-main-gabcordeiros-projects.vercel.app/",
        tags: ["React", "TypeScript", "Drag & Drop"],
        emoji: "📋",
      },
    ],
    experiences: [
      {
        role: "Administrative Assistant & Technical Support",
        company: "Emescam",
        period: "02/2026 — Present",
        description:
          "Technical support and administrative routines, ensuring infrastructure stability and efficient ticket resolution. Optimization of internal processes and continuous maintenance of the department's operations.",
        tags: ["Infrastructure", "Support", "Processes"],
      },
      {
        role: "Support Technician",
        company: "Projeta Tecnologia",
        period: "08/2025 — 02/2026",
        description:
          "Direct work with the Betha ERP for municipal government management: cross-referencing complex data and translating business requirements into technical solutions. Process automation and report generation with Jasper Reports, ensuring the integrity and validation of official documents.",
        tags: ["Betha ERP", "Jasper Reports", "Automation", "SQL"],
      },
      {
        role: "Researcher & Developer · Virtual Reality & AI",
        company: "Bolsa Vale / UVV",
        period: "2021 — 2025",
        description:
          "Development of simulation systems with C# and advanced programming logic. Publication of scientific papers on Digital Twins and industrial process optimization, with flow and system behavior analysis.",
        tags: ["C#", "Digital Twins", "Virtual Reality", "Research"],
      },
      {
        role: "Internship · Flutter Developer",
        company: "Jade Autistic",
        period: "01/2024 — 08/2024",
        description:
          "Built mobile applications in Flutter with Firebase, focused on accessibility and user experience for autistic people.",
        tags: ["Flutter", "Firebase", "Accessibility", "Mobile"],
      },
    ],
    skillGroups: [
      {
        title: "Web & Front-end",
        icon: "⚛️",
        skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Axios", "HTML5/CSS3"],
      },
      {
        title: "Back-end & Languages",
        icon: "⚙️",
        skills: ["C# (.NET / ASP.NET)", "Python (Flask)", "C++", "Groovy", "REST APIs"],
      },
      {
        title: "Database & Cloud",
        icon: "🗄️",
        skills: ["PostgreSQL (Supabase)", "SQL", "Firebase", "SQLite", "Vercel Ecosystem"],
      },
      {
        title: "Tools & Architecture",
        icon: "🛠️",
        skills: ["Docker", "Git/GitHub", "Postman", "Linux", "Jasper Reports", "Scrum/Kanban"],
      },
      {
        title: "AI & Data",
        icon: "🤖",
        skills: ["LLMs (Generative AI)", "Prompt Engineering", "Data Scraping", "Pattern Extraction", "Claude Code", "Gemini"],
      },
    ],
    publications,
    certificates,
    education: {
      degree: "Bachelor's Degree in Computer Science",
      school: "Universidade Vila Velha (UVV)",
      period: "2019 — 2024 · Completed",
      description:
        "Program focused on software and distributed systems development, covering back-end (architecture, APIs, databases and systems integration) and front-end (interactive interfaces, usability and user experience).",
      highlights: [
        "Data Structures",
        "Object-Oriented Programming",
        "Databases",
        "Software Engineering",
        "Design Patterns",
        "Web Development",
      ],
    },
  },
  pt: {
    profile: {
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
    },
    stats: [
      { value: "10+", label: "Projetos em produção" },
      { value: "3", label: "Artigos publicados (ACM/IEEE)" },
      { value: "4+", label: "Anos de experiência" },
      { value: "10+", label: "Tecnologias dominadas" },
    ],
    projects: [
      {
        title: "Faro Study",
        description:
          "Plataforma de estudos com repetição espaçada: cole um edital, texto ou JSON e o Faro gera flashcards prontos para revisar. Trilhas organizadas por assunto, BI de retenção (heatmap de consistência e curva de esquecimento) e quizzes de múltipla escolha gerados por IA.",
        url: "https://farostudy.vercel.app/",
        tags: ["React", "TypeScript", "Supabase", "IA Generativa"],
        featured: true,
        emoji: "🧭",
      },
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
    ],
    experiences: [
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
    ],
    skillGroups: [
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
    ],
    publications,
    certificates,
    education: {
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
    },
  },
};

type UiTextBundle = {
  nav: { projects: string; skills: string; experience: string; publications: string; education: string; cta: string };
  hero: { badge: string; hello: string; viewProjects: string };
  projects: { kicker: string; title: string; sub: string; live: string; openSystem: string };
  skills: { kicker: string; title: string; sub: string };
  experience: { kicker: string; title: string };
  publications: { kicker: string; title: string; sub: string };
  education: { kicker: string; title: string; certificates: string };
  contact: { title: string; titleAccent: string; body: string; sendEmail: string };
  footer: { email: string };
};

export const uiText: Record<Lang, UiTextBundle> = {
  en: {
    nav: {
      projects: "Projects",
      skills: "Skills",
      experience: "Experience",
      publications: "Publications",
      education: "Education",
      cta: "Let's talk",
    },
    hero: {
      badge: "Available for new opportunities",
      hello: "Hi, I'm",
      viewProjects: "View live projects",
    },
    projects: {
      kicker: "// projects",
      title: "Real systems, in production",
      sub: "All hosted on Vercel — click and try them right now. From the commercial pricing engine to the 3D molecule viewer.",
      live: "LIVE",
      openSystem: "Open system",
    },
    skills: {
      kicker: "// stack",
      title: "Technical skills",
      sub: "From modern front-end to back-end business rule automation.",
    },
    experience: {
      kicker: "// journey",
      title: "Professional experience",
    },
    publications: {
      kicker: "// research",
      title: "Published papers",
      sub: "Research in Digital Twins, Virtual Reality and industrial process optimization, published in international venues.",
    },
    education: {
      kicker: "// education",
      title: "Education & certificates",
      certificates: "Certificates",
    },
    contact: {
      title: "Let's build something",
      titleAccent: "amazing",
      body: "I'm open to full-stack developer opportunities. Reach out to talk about how I can add value to your team.",
      sendEmail: "Send email",
    },
    footer: {
      email: "Email",
    },
  },
  pt: {
    nav: {
      projects: "Projetos",
      skills: "Habilidades",
      experience: "Experiência",
      publications: "Publicações",
      education: "Formação",
      cta: "Vamos conversar",
    },
    hero: {
      badge: "Disponível para novas oportunidades",
      hello: "Olá, eu sou o",
      viewProjects: "Ver projetos em produção",
    },
    projects: {
      kicker: "// projetos",
      title: "Sistemas reais, em produção",
      sub: "Todos hospedados na Vercel — clique e teste agora mesmo. Do motor de cálculo comercial ao visualizador molecular 3D.",
      live: "LIVE",
      openSystem: "Acessar sistema",
    },
    skills: {
      kicker: "// stack",
      title: "Habilidades técnicas",
      sub: "Do front-end moderno à automação de regras de negócio no back-end.",
    },
    experience: {
      kicker: "// trajetória",
      title: "Experiência profissional",
    },
    publications: {
      kicker: "// pesquisa",
      title: "Artigos publicados",
      sub: "Pesquisa em Digital Twins, Realidade Virtual e otimização de processos industriais, publicada em veículos internacionais.",
    },
    education: {
      kicker: "// formação",
      title: "Formação & certificados",
      certificates: "Certificados",
    },
    contact: {
      title: "Vamos construir algo",
      titleAccent: "incrível",
      body: "Estou aberto a oportunidades como desenvolvedor full-stack. Me chame para conversar sobre como posso agregar ao seu time.",
      sendEmail: "Enviar e-mail",
    },
    footer: {
      email: "E-mail",
    },
  },
};
