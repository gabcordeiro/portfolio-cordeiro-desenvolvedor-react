import type { ReactNode } from "react";
import { useReveal, useTypewriter } from "./hooks";
import { useEffect, useState } from "react";
import { LanguageProvider, useLanguage } from "./i18n";

const ArrowUpRight = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.17c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.69 1.25 3.34.95.1-.74.4-1.25.72-1.53-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.24 2.76.12 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.26 5.66.41.36.78 1.05.78 2.13v3.16c0 .3.2.67.8.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
  </svg>
);

const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m2 7 10 7L22 7" />
  </svg>
);

const CertIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="9" r="6" />
    <path d="M8.5 14 7 22l5-3 5 3-1.5-8" />
  </svg>
);

function Section({ id, kicker, title, sub, children }: {
  id: string;
  kicker: string;
  title: string;
  sub?: string;
  children: ReactNode;
}) {
  const headRef = useReveal<HTMLDivElement>();
  const bodyRef = useReveal<HTMLDivElement>();
  return (
    <section id={id}>
      <div className="container">
        <div className="section-head reveal" ref={headRef}>
          <span className="section-kicker">{kicker}</span>
          <h2 className="section-title">{title}</h2>
          {sub && <p className="section-sub">{sub}</p>}
        </div>
        <div className="reveal" ref={bodyRef}>
          {children}
        </div>
      </div>
    </section>
  );
}

function LanguageSwitch() {
  const { lang, setLang } = useLanguage();
  return (
    <div className="lang-switch" role="group" aria-label="Language / Idioma">
      <button
        type="button"
        className={lang === "en" ? "active" : ""}
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
      <button
        type="button"
        className={lang === "pt" ? "active" : ""}
        onClick={() => setLang("pt")}
        aria-pressed={lang === "pt"}
      >
        PT
      </button>
    </div>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-inner">
        <a href="#" className="nav-logo">
          <span className="accent">gabriel</span>.dev
        </a>
        <div className="nav-links">
          <a href="#projetos">{t.nav.projects}</a>
          <a href="#habilidades">{t.nav.skills}</a>
          <a href="#experiencia">{t.nav.experience}</a>
          <a href="#publicacoes">{t.nav.publications}</a>
          <a href="#formacao">{t.nav.education}</a>
        </div>
        <div className="nav-actions">
          <LanguageSwitch />
          <a href="#contato" className="nav-cta">
            {t.nav.cta}
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  const { c, t } = useLanguage();
  const role = useTypewriter(c.profile.roles);
  return (
    <header className="hero">
      <div className="container">
        <div className="hero-badge">
          <span className="dot" />
          {t.hero.badge} · {c.profile.location}
        </div>
        <h1>
          {t.hero.hello}<br />
          <span className="gradient-text">{c.profile.name}</span>
        </h1>
        <div className="hero-role" aria-label={c.profile.roles[0]}>
          <span className="prompt">~$</span>
          {role}
          <span className="caret" />
        </div>
        <p className="hero-summary">{c.profile.summary}</p>
        <div className="hero-actions">
          <a href="#projetos" className="btn btn-primary">
            {t.hero.viewProjects} <ArrowUpRight />
          </a>
          <a href={c.profile.github} target="_blank" rel="noreferrer" className="btn btn-ghost">
            <GithubIcon /> GitHub
          </a>
          <a href={c.profile.linkedin} target="_blank" rel="noreferrer" className="btn btn-ghost">
            <LinkedinIcon /> LinkedIn
          </a>
        </div>
        <div className="hero-stats">
          {c.stats.map((s) => (
            <div className="stat" key={s.label}>
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}

function Projects() {
  const { c, t } = useLanguage();
  return (
    <Section
      id="projetos"
      kicker={t.projects.kicker}
      title={t.projects.title}
      sub={t.projects.sub}
    >
      <div className="projects-grid">
        {c.projects.map((p) => (
          <a
            key={p.title}
            href={p.url}
            target="_blank"
            rel="noreferrer"
            className={`project-card ${p.featured ? "featured" : ""}`}
          >
            <div className="project-top">
              <span className="project-emoji" aria-hidden="true">{p.emoji}</span>
              <span className="project-live">
                <span className="dot" /> {t.projects.live}
              </span>
            </div>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <div className="project-tags">
              {p.tags.map((tag) => (
                <span className="tag" key={tag}>{tag}</span>
              ))}
            </div>
            <span className="project-link">
              {t.projects.openSystem} <ArrowUpRight />
            </span>
          </a>
        ))}
      </div>
    </Section>
  );
}

function Skills() {
  const { c, t } = useLanguage();
  return (
    <Section
      id="habilidades"
      kicker={t.skills.kicker}
      title={t.skills.title}
      sub={t.skills.sub}
    >
      <div className="skills-grid">
        {c.skillGroups.map((g) => (
          <div className="skill-card" key={g.title}>
            <div className="skill-card-head">
              <span className="icon" aria-hidden="true">{g.icon}</span>
              <h3>{g.title}</h3>
            </div>
            <div className="skill-list">
              {g.skills.map((s) => (
                <span className="skill-chip" key={s}>{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Experience() {
  const { c, t } = useLanguage();
  return (
    <Section
      id="experiencia"
      kicker={t.experience.kicker}
      title={t.experience.title}
    >
      <div className="timeline">
        {c.experiences.map((e) => (
          <div className="timeline-item" key={e.role + e.company}>
            <span className="timeline-period">{e.period}</span>
            <h3>{e.role}</h3>
            <div className="timeline-company">{e.company}</div>
            <p>{e.description}</p>
            <div className="project-tags">
              {e.tags.map((t) => (
                <span className="tag" key={t}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Publications() {
  const { c, t } = useLanguage();
  return (
    <Section
      id="publicacoes"
      kicker={t.publications.kicker}
      title={t.publications.title}
      sub={t.publications.sub}
    >
      <div className="pub-list">
        {c.publications.map((pub) => (
          <a key={pub.url} href={pub.url} target="_blank" rel="noreferrer" className="pub-card">
            <span className={`pub-badge ${pub.publisher.toLowerCase()}`}>
              {pub.publisher} · {pub.year}
            </span>
            <span className="pub-info">
              <h3>{pub.title}</h3>
              <span className="pub-venue">{pub.venue}</span>
            </span>
            <span className="pub-arrow">
              <ArrowUpRight />
            </span>
          </a>
        ))}
      </div>
    </Section>
  );
}

function Education() {
  const { c, t } = useLanguage();
  return (
    <Section
      id="formacao"
      kicker={t.education.kicker}
      title={t.education.title}
    >
      <div className="edu-grid">
        <div className="edu-card">
          <h3>{c.education.degree}</h3>
          <div className="edu-school">{c.education.school}</div>
          <span className="edu-period">{c.education.period}</span>
          <p>{c.education.description}</p>
          <div className="project-tags">
            {c.education.highlights.map((h) => (
              <span className="tag" key={h}>{h}</span>
            ))}
          </div>
        </div>
        <div className="cert-card-wrap">
          <h3>{t.education.certificates}</h3>
          <div className="cert-list">
            {c.certificates.map((cert) => (
              <a key={cert.title} href={cert.url} target="_blank" rel="noreferrer" className="cert-item">
                <span className="cert-icon"><CertIcon /></span>
                <span>
                  <span className="cert-name">{cert.title}</span>
                  <br />
                  <span className="cert-issuer">{cert.issuer}</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function Contact() {
  const ref = useReveal<HTMLDivElement>();
  const { c, t } = useLanguage();
  return (
    <section id="contato">
      <div className="container">
        <div className="contact-card reveal" ref={ref}>
          <h2>
            {t.contact.title} <span className="gradient-text">{t.contact.titleAccent}</span>?
          </h2>
          <p>{t.contact.body}</p>
          <div className="contact-actions">
            <a href={`mailto:${c.profile.email}`} className="btn btn-primary">
              <MailIcon /> {t.contact.sendEmail}
            </a>
            <a href={c.profile.linkedin} target="_blank" rel="noreferrer" className="btn btn-ghost">
              <LinkedinIcon /> LinkedIn
            </a>
            <a href={c.profile.github} target="_blank" rel="noreferrer" className="btn btn-ghost">
              <GithubIcon /> GitHub
            </a>
          </div>
          <div className="contact-meta">
            <span>{c.profile.email}</span>
            <span>{c.profile.phone}</span>
            <span>{c.profile.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const { c, t } = useLanguage();
  return (
    <footer>
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} {c.profile.fullName}</span>
        <div className="footer-links">
          <a href={c.profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={c.profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={`mailto:${c.profile.email}`}>{t.footer.email}</a>
        </div>
      </div>
    </footer>
  );
}

function PortfolioContent() {
  return (
    <>
      <div className="bg-decor" aria-hidden="true" />
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Publications />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <PortfolioContent />
    </LanguageProvider>
  );
}
