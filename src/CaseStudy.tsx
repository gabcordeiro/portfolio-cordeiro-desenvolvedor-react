import { useEffect, useRef } from "react";
import type { CaseStudy as CaseStudyData } from "./data";
import { useAutoplayInView, useReveal } from "./hooks";
import { ArrowUpRight, Close, GithubIcon, Play } from "./icons";

export function CaseStudy({ data, index, onWatch }: {
  data: CaseStudyData;
  index: number;
  onWatch: (c: CaseStudyData) => void;
}) {
  const rowRef = useReveal<HTMLElement>();
  const { ref: videoRef, playing } = useAutoplayInView();

  return (
    <article className={`case reveal ${index % 2 ? "case--flip" : ""}`} ref={rowRef}>
      <button
        type="button"
        className="case-media"
        onClick={() => onWatch(data)}
        aria-label={`Assistir demonstração completa de ${data.title} (${data.video.duration})`}
      >
        <span className="browser-bar" aria-hidden="true">
          <span className="browser-dots"><i /><i /><i /></span>
          <span className="browser-url">{data.domain}</span>
        </span>
        <span className="case-screen">
          <video
            ref={videoRef}
            poster={data.video.poster}
            muted
            loop
            playsInline
            preload="none"
            aria-hidden="true"
            tabIndex={-1}
          >
            <source src={data.video.previewWebm} type="video/webm" />
            <source src={data.video.preview} type="video/mp4" />
          </video>
          <span className={`case-play ${playing ? "" : "is-idle"}`}>
            <Play size={14} /> Demo completa · {data.video.duration}
          </span>
        </span>
      </button>

      <div className="case-body">
        <span className="case-index">0{index + 1}</span>
        <h3 className="case-title">{data.title}</h3>
        <p className="case-tagline">{data.tagline}</p>
        <p className="case-desc">{data.description}</p>
        <ul className="case-highlights">
          {data.highlights.map((h) => <li key={h}>{h}</li>)}
        </ul>
        <ul className="tags" aria-label="Tecnologias">
          {data.stack.map((t) => <li className="tag" key={t}>{t}</li>)}
        </ul>
        <div className="case-actions">
          <button type="button" className="btn btn-sm btn-solid" onClick={() => onWatch(data)}>
            <Play size={13} /> Ver demo
          </button>
          {data.url && (
            <a className="btn btn-sm btn-line" href={data.url} target="_blank" rel="noreferrer">
              Abrir ao vivo <ArrowUpRight size={13} />
            </a>
          )}
          {data.repo && (
            <a className="btn btn-sm btn-line" href={data.repo} target="_blank" rel="noreferrer">
              <GithubIcon size={14} /> Código
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

/** Player em <dialog> nativo: foco preso, Esc fecha e o vídeo pausa ao sair. */
export function VideoDialog({ item, onClose }: {
  item: CaseStudyData | null;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (item && !dialog.open) dialog.showModal();
    if (!item && dialog.open) dialog.close();
  }, [item]);

  return (
    <dialog
      ref={dialogRef}
      className="video-dialog"
      aria-label={item ? `Demonstração: ${item.title}` : undefined}
      onClose={onClose}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {item && (
        <div className="video-dialog-inner">
          <header className="video-dialog-head">
            <div>
              <strong>{item.title}</strong>
              <span>{item.tagline}</span>
            </div>
            <div className="video-dialog-actions">
              {item.url && (
                <a className="btn btn-sm btn-line" href={item.url} target="_blank" rel="noreferrer">
                  Abrir ao vivo <ArrowUpRight size={13} />
                </a>
              )}
              <button type="button" className="icon-btn" onClick={onClose} aria-label="Fechar vídeo" autoFocus>
                <Close />
              </button>
            </div>
          </header>
          <video
            key={item.slug}
            src={item.video.full}
            poster={item.video.poster}
            controls
            autoPlay
            muted
            playsInline
          />
        </div>
      )}
    </dialog>
  );
}
