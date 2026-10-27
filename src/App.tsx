import { useEffect, useMemo, useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import {
  caseStudies,
  certificates,
  creations,
  education,
  experiences,
  profile,
  projects,
  publications,
  skillGroups,
  stats,
} from "./data";
import type { CaseStudy as CaseStudyData } from "./data";
import { useCopy, useReveal, useTheme } from "./hooks";
import { CaseStudy, VideoDialog } from "./CaseStudy";
import { CommandPalette } from "./CommandPalette";
import type { Command } from "./CommandPalette";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Copy,
  GithubIcon,
  LinkedinIcon,
  Moon,
  Search,
  Sun,
} from "./icons";

const sections = [
  { id: "trabalhos", label: "Trabalhos" },
  { id: "projetos", label: "Projetos" },
  { id: "criacao", label: "Jogos & música" },
  { id: "stack", label: "Stack" },
  { id: "experiencia", label: "Experiência" },
  { id: "pesquisa", label: "Pesquisa" },
  { id: "contato", label: "Contato" },
];

const isMac = typeof navigator !== "undefined" && /Mac|iPhone|iPad/.test(navigator.platform);

function Section({ id, index, title, sub, children }: {
  id: string;
  index: string;
  title: string;
  sub?: string;
  children: ReactNode;
}) {
  const headRef = useReveal<HTMLDivElement>();
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <div className="container">
        <div className="section-head reveal" ref={headRef}>
          <span className="section-index">{index}</span>
          <h2 className="section-title" id={`${id}-title`}>{title}</h2>
          {sub && <p className="section-sub">{sub}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useReveal<HTMLDivElement>();
  return <div className={`reveal ${className}`} ref={ref}>{children}</div>;
}

function Nav({ theme, onToggleTheme, onOpenPalette }: {
  theme: string;
  onToggleTheme: () => void;
  onOpenPalette: () => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [current, setCurrent] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setCurrent(e.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`} aria-label="Principal">
      <div className="container nav-inner">
        <a href="#top" className="nav-logo" aria-label="Gabriel Cordeiro — início">
          <span className="logo-mark" aria-hidden="true">gc</span>
          <span className="logo-name">Gabriel Cordeiro</span>
        </a>
        <div className="nav-links">
          {sections.filter((s) => s.id !== "contato").map((s) => (
            <a key={s.id} href={`#${s.id}`} aria-current={current === s.id ? "true" : undefined}>
              {s.label}
            </a>
          ))}
        </div>
        <div className="nav-tools">
          <button type="button" className="kbd-btn" onClick={onOpenPalette} aria-label="Abrir paleta de comandos">
            <Search size={14} />
            <span className="kbd-btn-label">Buscar</span>
            <kbd>{isMac ? "⌘" : "Ctrl"} K</kbd>
          </button>
          <button
            type="button"
            className="icon-btn"
            onClick={onToggleTheme}
            aria-label={theme === "dark" ? "Ativar tema claro" : "Ativar tema escuro"}
          >
            {theme === "dark" ? <Sun /> : <Moon />}
          </button>
          <a href="#contato" className="btn btn-sm btn-solid nav-cta">Contato</a>
        </div>
      </div>
    </nav>
  );
}

function Hero({ onWatch }: { onWatch: (c: CaseStudyData) => void }) {
  const { copied, copy } = useCopy();
  return (
    <header className="hero" id="top">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="hero-status">
            <span className="status-dot" aria-hidden="true" />
            Disponível para novas oportunidades · {profile.location}
          </p>
          <h1 className="hero-title">
            {profile.title.replace("-", "\u2011")} que transforma ideias em{" "}
            <em>produtos reais</em>.
          </h1>
          <p className="hero-summary">{profile.summary}</p>
          <div className="hero-actions">
            <a href="#trabalhos" className="btn btn-solid">
              Ver trabalhos <ArrowRight />
            </a>
            <button type="button" className="btn btn-line" onClick={() => copy(profile.email)}>
              {copied ? <Check /> : <Copy />}
              <span aria-live="polite">{copied ? "E-mail copiado" : "Copiar e-mail"}</span>
            </button>
            <a href={profile.github} target="_blank" rel="noreferrer" className="icon-btn icon-btn-lg" aria-label="GitHub">
              <GithubIcon />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="icon-btn icon-btn-lg" aria-label="LinkedIn">
              <LinkedinIcon />
            </a>
          </div>
          <dl className="hero-stats">
            {stats.map((s) => (
              <div key={s.label}>
                <dt>{s.label}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero-reel" aria-label="Projetos em vídeo">
          {caseStudies.slice(0, 4).map((c, i) => (
            <button
              type="button"
              key={c.slug}
              className="reel-tile"
              style={{ "--i": i } as CSSProperties}
              onClick={() => onWatch(c)}
              aria-label={`Assistir demo de ${c.title}`}
            >
              <img src={c.video.poster} alt="" loading={i < 2 ? "eager" : "lazy"} decoding="async" />
              <span className="reel-label">
                <span>{c.title}</span>
                <span className="reel-time">{c.video.duration}</span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}

function Work({ onWatch }: { onWatch: (c: CaseStudyData) => void }) {
  return (
    <Section
      id="trabalhos"
      index="01"
      title="Trabalhos selecionados"
      sub="Produtos completos, do layout à integração com pagamentos e IA. Assista à demo ou abra a versão ao vivo."
    >
      <div className="cases">
        {caseStudies.map((c, i) => (
          <CaseStudy key={c.slug} data={c} index={i} onWatch={onWatch} />
        ))}
      </div>
    </Section>
  );
}

function Projects() {
  return (
    <Section id="projetos" index="02" title="Mais projetos no ar" sub="Todos publicados na Vercel — clique e use agora.">
      <Reveal>
        <ul className="project-list">
          {projects.map((p) => (
            <li key={p.title}>
              <a href={p.url} target="_blank" rel="noreferrer" className="project-row">
                <span className="project-name">{p.title}</span>
                <span className="project-desc">{p.description}</span>
                <span className="project-tags">{p.tags.join(" · ")}</span>
                <span className="project-arrow" aria-hidden="true"><ArrowUpRight /></span>
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}

function Creations() {
  return (
    <Section
      id="criacao"
      index="03"
      title="Além da web"
      sub="Jogos, simulações em tempo real e música — onde lógica e criatividade se encontram."
    >
      <Reveal className="make-grid">
        {creations.map((c) => (
          <article className="edu-card make-card" key={c.title}>
            <span className="edu-period">{c.kind}</span>
            <h3>{c.title}</h3>
            <p className="xp-desc">{c.description}</p>
            <ul className="tags">
              {c.tags.map((t) => <li className="tag" key={t}>{t}</li>)}
            </ul>
            {c.url && (
              <a href={c.url} target="_blank" rel="noreferrer" className="make-link">
                {c.linkLabel ?? "Abrir"} <ArrowUpRight />
              </a>
            )}
          </article>
        ))}
      </Reveal>
    </Section>
  );
}

function Stack() {
  return (
    <Section id="stack" index="04" title="Stack" sub="Do componente ao banco, da API ao deploy — e, quando o projeto pede, motores de jogo e 3D.">
      <Reveal className="stack-grid">
        {skillGroups.map((g) => (
          <div className="stack-col" key={g.title}>
            <h3>{g.title}</h3>
            <ul>
              {g.skills.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </div>
        ))}
      </Reveal>
    </Section>
  );
}

function Experience() {
  return (
    <Section id="experiencia" index="05" title="Experiência">
      <Reveal>
        <ol className="xp-list">
          {experiences.map((e) => (
            <li className="xp-row" key={e.role + e.company}>
              <span className="xp-period">{e.period}</span>
              <div>
                <h3>{e.role}</h3>
                <p className="xp-company">{e.company}</p>
                <p className="xp-desc">{e.description}</p>
                <ul className="tags">
                  {e.tags.map((t) => <li className="tag" key={t}>{t}</li>)}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </Reveal>
    </Section>
  );
}

function Research() {
  return (
    <Section
      id="pesquisa"
      index="06"
      title="Pesquisa & formação"
      sub="Digital Twins e Realidade Virtual para processos industriais, publicados em veículos internacionais."
    >
      <Reveal>
        <ul className="pub-list">
          {publications.map((pub) => (
            <li key={pub.url}>
              <a href={pub.url} target="_blank" rel="noreferrer" className="pub-row">
                <span className="pub-meta">{pub.publisher} · {pub.year}</span>
                <span className="pub-title">{pub.title}</span>
                <span className="pub-venue">{pub.venue}</span>
                <span className="project-arrow" aria-hidden="true"><ArrowUpRight /></span>
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
      <Reveal className="edu-grid">
        <div className="edu-card">
          <span className="edu-period">{education.period}</span>
          <h3>{education.degree}</h3>
          <p className="xp-company">{education.school}</p>
          <p className="xp-desc">{education.description}</p>
        </div>
        <div className="edu-card">
          <span className="edu-period">Certificados</span>
          <ul className="cert-list">
            {certificates.map((c) => (
              <li key={c.title}>
                <a href={c.url} target="_blank" rel="noreferrer">
                  <span>{c.title}</span>
                  <span className="cert-issuer">{c.issuer}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}

function Contact() {
  const { copied, copy } = useCopy();
  return (
    <section id="contato" className="section contact">
      <div className="container">
        <Reveal className="contact-inner">
          <span className="section-index">07</span>
          <h2 className="contact-title">
            Precisa de alguém que entregue <em>o produto inteiro</em>?
          </h2>
          <div className="contact-actions">
            <a href={`mailto:${profile.email}`} className="btn btn-solid btn-lg">
              {profile.email} <ArrowUpRight />
            </a>
            <button type="button" className="btn btn-line btn-lg" onClick={() => copy(profile.email)}>
              {copied ? <Check /> : <Copy />}
              <span aria-live="polite">{copied ? "Copiado" : "Copiar"}</span>
            </button>
          </div>
          <div className="contact-meta">
            <a href={profile.linkedin} target="_blank" rel="noreferrer"><LinkedinIcon size={15} /> LinkedIn</a>
            <a href={profile.github} target="_blank" rel="noreferrer"><GithubIcon size={15} /> GitHub</a>
            <span>{profile.phone}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer({ onOpenPalette }: { onOpenPalette: () => void }) {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} {profile.fullName}</span>
        <span>
          Feito à mão com React 19 + TypeScript, sem bibliotecas de UI ·{" "}
          <a href={profile.repo} target="_blank" rel="noreferrer">ver código</a> ·{" "}
          <button type="button" className="link-btn" onClick={onOpenPalette}>
            {isMac ? "⌘" : "Ctrl"} K
          </button>
        </span>
      </div>
    </footer>
  );
}

export default function App() {
  const { theme, toggle } = useTheme();
  const [watching, setWatching] = useState<CaseStudyData | null>(null);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const { copy } = useCopy();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const commands = useMemo<Command[]>(() => {
    const go = (id: string) => () =>
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    const open = (url: string) => () => window.open(url, "_blank", "noopener");
    return [
      ...sections.map((s) => ({ id: `go-${s.id}`, group: "Navegar", label: s.label, run: go(s.id) })),
      ...caseStudies.map((c) => ({
        id: `demo-${c.slug}`,
        group: "Demos em vídeo",
        label: c.title,
        hint: c.video.duration,
        run: () => setWatching(c),
      })),
      ...projects.map((p) => ({ id: `p-${p.title}`, group: "Projetos ao vivo", label: p.title, hint: "abrir", run: open(p.url) })),
      ...creations
        .filter((c) => c.url)
        .map((c) => ({ id: `c-${c.title}`, group: "Jogos & simulações", label: c.title, hint: c.kind, run: open(c.url!) })),
      { id: "copy-email", group: "Ações", label: "Copiar e-mail", hint: profile.email, run: () => copy(profile.email) },
      { id: "theme", group: "Ações", label: "Alternar tema claro / escuro", run: toggle },
      { id: "github", group: "Ações", label: "Abrir GitHub", run: open(profile.github) },
      { id: "linkedin", group: "Ações", label: "Abrir LinkedIn", run: open(profile.linkedin) },
    ];
  }, [copy, toggle]);

  return (
    <>
      <a href="#trabalhos" className="skip-link">Pular para o conteúdo</a>
      <Nav theme={theme} onToggleTheme={toggle} onOpenPalette={() => setPaletteOpen(true)} />
      <main>
        <Hero onWatch={setWatching} />
        <Work onWatch={setWatching} />
        <Projects />
        <Creations />
        <Stack />
        <Experience />
        <Research />
        <Contact />
      </main>
      <Footer onOpenPalette={() => setPaletteOpen(true)} />
      <VideoDialog item={watching} onClose={() => setWatching(null)} />
      <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} commands={commands} />
    </>
  );
}
