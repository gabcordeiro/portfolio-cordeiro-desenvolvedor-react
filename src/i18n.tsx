import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { content, uiText } from "./data";

export type Lang = "en" | "pt";

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  c: (typeof content)[Lang];
  t: (typeof uiText)[Lang];
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function detectInitialLang(): Lang {
  if (typeof navigator === "undefined") return "en";
  const locales = navigator.languages?.length ? navigator.languages : [navigator.language];
  return locales.some((locale) => locale?.toLowerCase().startsWith("pt")) ? "pt" : "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(detectInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  }, [lang]);

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, setLang, c: content[lang], t: uiText[lang] }),
    [lang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
