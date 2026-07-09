import { useEffect, useRef, useState } from "react";

/** Efeito de máquina de escrever que alterna entre frases. */
export function useTypewriter(phrases: string[], typeMs = 65, pauseMs = 2100) {
  const [text, setText] = useState("");
  const state = useRef({ phrase: 0, char: 0, deleting: false });

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const s = state.current;
      const current = phrases[s.phrase];

      if (!s.deleting) {
        s.char++;
        setText(current.slice(0, s.char));
        if (s.char === current.length) {
          s.deleting = true;
          timer = setTimeout(tick, pauseMs);
          return;
        }
        timer = setTimeout(tick, typeMs);
      } else {
        s.char--;
        setText(current.slice(0, s.char));
        if (s.char === 0) {
          s.deleting = false;
          s.phrase = (s.phrase + 1) % phrases.length;
        }
        timer = setTimeout(tick, typeMs / 2);
      }
    };

    timer = setTimeout(tick, typeMs);
    return () => clearTimeout(timer);
  }, [phrases, typeMs, pauseMs]);

  return text;
}

/** Aplica a classe "visible" quando o elemento entra na viewport. */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
