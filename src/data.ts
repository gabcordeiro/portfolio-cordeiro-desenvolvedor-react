export const profile = {
  name: "Gabriel Cordeiro",
  fullName: "Gabriel Cordeiro de Carvalho",
  title: "Engenheiro Front-end",
  location: "Vila Velha, ES · Brasil",
  phone: "+55 (27) 99312-2222",
  email: "gcordeirocarvalho97@gmail.com",
  github: "https://github.com/gabcordeiro",
  linkedin: "https://www.linkedin.com/in/gabriel-cordeiro-de-carvalho-a2a1351bb/",
  repo: "https://github.com/gabcordeiro/portfolio-cordeiro-desenvolvedor-react",
  summary:
    "Desenvolvo produtos web de ponta a ponta com React e TypeScript — da arquitetura de componentes e estado à integração com APIs, autenticação e pagamentos. Bacharel em Ciência da Computação (UVV), com pesquisa publicada na ACM e no IEEE e uma dezena de sistemas rodando em produção.",
};

export const stats = [
  { value: "9+", label: "Produtos em produção" },
  { value: "4+", label: "Anos de experiência" },
  { value: "3", label: "Artigos ACM / IEEE" },
];

export type CaseStudy = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  stack: string[];
  domain: string;
  url?: string;
  repo?: string;
  video: { full: string; preview: string; previewWebm: string; poster: string; duration: string };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "matchcv",
    title: "MatchCV",
    tagline: "SaaS de análise de currículo com IA",
    description:
      "Produto completo com landing editorial, login Google, análise do currículo contra a vaga, nota de compatibilidade, “teste dos 7 segundos” e geração de carta de apresentação — monetizado com assinatura e Pix.",
    highlights: [
      "Fluxo de análise com score, lacunas e sugestões acionáveis",
      "Assinatura recorrente e créditos avulsos via Mercado Pago (Pix e cartão)",
      "OAuth Google, dados isolados por usuário e exportação em PDF",
    ],
    stack: ["React", "TypeScript", "Tailwind CSS", "Supabase", "IA generativa", "Mercado Pago"],
    domain: "match-cv-nine.vercel.app",
    url: "https://match-cv-nine.vercel.app/",
    video: {
      full: "/videos/matchcv.mp4",
      preview: "/videos/matchcv-preview.mp4",
      previewWebm: "/videos/matchcv-preview.webm",
      poster: "/videos/matchcv-poster.webp",
      duration: "1:58",
    },
  },
  {
    slug: "trampa",
    title: "Trampa",
    tagline: "Marketplace de serviços com busca geográfica",
    description:
      "Marketplace que conecta clientes a prestadores: busca por raio no mapa, filtros combinados, anúncios em etapas, pedidos de orçamento, gestão de contratos e painel administrativo de moderação.",
    highlights: [
      "Mapa interativo sincronizado com a listagem e filtro por distância",
      "Wizard de criação de anúncio com validação por etapa",
      "Painel admin com moderação, status e relatórios",
    ],
    stack: ["React", "TypeScript", "Supabase", "Leaflet", "Geolocalização"],
    domain: "trampa-omega.vercel.app",
    url: "https://trampa-omega.vercel.app/",
    video: {
      full: "/videos/trampa.mp4",
      preview: "/videos/trampa-preview.mp4",
      previewWebm: "/videos/trampa-preview.webm",
      poster: "/videos/trampa-poster.webp",
      duration: "1:46",
    },
  },
  {
    slug: "faro",
    title: "Faro Study",
    tagline: "Repetição espaçada para concursos e idiomas",
    description:
      "Plataforma estilo Anki com algoritmo SM-2, geração de flashcards por IA, importação de coleções .apkg, quiz, trilhas por edital e painéis de evolução, consistência e retenção.",
    highlights: [
      "Algoritmo SM-2 e curva de esquecimento implementados no cliente",
      "Geração de cards com Gemini e validação de entrada com Zod",
      "Postgres com RLS, CSP/HSTS e CI com typecheck, lint e build",
    ],
    stack: ["React", "TypeScript", "Tailwind CSS", "Supabase", "Gemini", "Zod"],
    domain: "faro study",
    repo: "https://github.com/gabcordeiro/farostudy",
    video: {
      full: "/videos/faro.mp4",
      preview: "/videos/faro-preview.mp4",
      previewWebm: "/videos/faro-preview.webm",
      poster: "/videos/faro-poster.webp",
      duration: "1:14",
    },
  },
  {
    slug: "molecula",
    title: "Visualizador de Moléculas 3D",
    tagline: "Renderização 3D interativa no navegador",
    description:
      "Ferramenta para explorar estruturas atômicas em tempo real: múltiplas representações, controles de câmera, análise de geometria e importação de moléculas próprias — com tema claro e escuro.",
    highlights: [
      "Quatro modos de representação: bola e bastão, espaço preenchido, bastões e arame",
      "Controles finos de escala, ligações, rótulos e profundidade",
      "Atalhos de teclado e gestos de toque para orbitar e ampliar",
    ],
    stack: ["React", "TypeScript", "WebGL / 3D"],
    domain: "molecular-viewer-3d.vercel.app",
    url: "https://molecular-viewer-3d.vercel.app/",
    video: {
      full: "/videos/molecula.mp4",
      preview: "/videos/molecula-preview.mp4",
      previewWebm: "/videos/molecula-preview.webm",
      poster: "/videos/molecula-poster.webp",
      duration: "1:31",
    },
  },
  {
    slug: "divide",
    title: "Divide Aí",
    tagline: "Racha de contas para eventos em grupo",
    description:
      "App para organizar a vaquinha do churrasco ao aniversário: lista de compras com valor estimado, escolha do tesoureiro, chave Pix, acompanhamento de quem já pagou e chat do evento.",
    highlights: [
      "Itens com atalhos rápidos e total recalculado em tempo real",
      "Tesoureiro definido por votação do grupo ou pelo organizador",
      "Progresso de pagamentos e chat por evento",
    ],
    stack: ["React", "TypeScript", "Supabase"],
    domain: "divide-ai-two.vercel.app",
    url: "https://divide-ai-two.vercel.app/",
    video: {
      full: "/videos/divide.mp4",
      preview: "/videos/divide-preview.mp4",
      previewWebm: "/videos/divide-preview.webm",
      poster: "/videos/divide-poster.webp",
      duration: "0:55",
    },
  },
];

export type Project = {
  title: string;
  description: string;
  url: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    title: "Gestão Comercial · JC Cortinas",
    description:
      "Automação de orçamentos com motor de cálculo para precificação dinâmica de materiais e metragem linear.",
    url: "https://jeiselcortinas.vercel.app/",
    tags: ["React", "TypeScript", "Supabase"],
  },
  {
    title: "Swipe Pass",
    description: "Flashcards com gestos de swipe e layout totalmente responsivo.",
    url: "https://swipe-pass.vercel.app/",
    tags: ["React", "TypeScript", "Gestos"],
  },
  {
    title: "Travian Clone",
    description: "Estratégia em tempo real com recursos, construções e evolução.",
    url: "https://travian-clone.vercel.app/",
    tags: ["React", "TypeScript", "Game loop"],
  },
  {
    title: "Pratique Tabu",
    description: "Aprendizado de tabuada com contas, metas e progresso.",
    url: "https://pratique-tabu-git-main-gabcordeiros-projects.vercel.app/",
    tags: ["React", "TypeScript", "Supabase"],
  },
  {
    title: "Quadro Kanban",
    description: "Organização de tarefas com drag & drop.",
    url: "https://kanban-board-html-git-main-gabcordeiros-projects.vercel.app/",
    tags: ["TypeScript", "Drag & Drop"],
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
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Front-end",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vite", "HTML semântico", "CSS moderno", "Zod"],
  },
  {
    title: "Back-end & dados",
    skills: ["Supabase / PostgreSQL", "APIs REST", "C# / .NET", "Python (Flask)", "Firebase", "SQL"],
  },
  {
    title: "Entrega & ferramentas",
    skills: ["Git / GitHub", "Vercel", "Docker", "Linux", "Postman", "Scrum / Kanban"],
  },
  {
    title: "IA aplicada",
    skills: ["LLMs em produto", "Prompt engineering", "Gemini", "Claude Code", "Extração de dados"],
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
