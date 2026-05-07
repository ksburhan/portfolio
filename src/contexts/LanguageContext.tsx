import React, { createContext, FC, PropsWithChildren, useCallback, useContext, useEffect, useState } from "react";
import { Language, Translation, translations } from "../data/translations";

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Translation;
}

const STORAGE_KEY = "portfolio.language";
const DEFAULT_LANGUAGE: Language = "en";

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const isLanguage = (value: unknown): value is Language =>
  value === "en" || value === "de" || value === "tr" || value === "ja";

export const LanguageProvider: FC<PropsWithChildren> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(DEFAULT_LANGUAGE);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isLanguage(stored)) {
      setLanguageState(stored);
    }
  }, []);

  const setLanguage = useCallback((next: Language) => {
    setLanguageState(next);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, next);
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextValue => {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
};
