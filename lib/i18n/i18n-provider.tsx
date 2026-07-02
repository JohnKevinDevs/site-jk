"use client";

import {
  createContext,
  useCallback,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import {
  DEFAULT_LOCALE,
  LANG_STORAGE_KEY,
  dictionaries,
  type Locale,
} from "./dictionaries";

type I18nContextValue = {
  locale: Locale;
  mounted: boolean;
  dictionary: (typeof dictionaries)[Locale];
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: (key: keyof typeof dictionaries.pt) => string;
};

export const I18nContext = createContext<I18nContextValue | undefined>(
  undefined,
);

const LANG_CHANGE_EVENT = "jk-lang-change";

function getStoredLocale(): Locale | null {
  try {
    const stored = window.localStorage.getItem(LANG_STORAGE_KEY);
    return stored === "pt" || stored === "en" ? stored : null;
  } catch {
    return null;
  }
}

function applyLocale(locale: Locale) {
  document.documentElement.lang = locale === "pt" ? "pt-BR" : "en";
  document.documentElement.dataset.lang = locale;
}

function getLocaleSnapshot(): Locale {
  if (typeof window === "undefined") {
    return DEFAULT_LOCALE;
  }

  const storedLocale = getStoredLocale();
  const documentLocale = document.documentElement.dataset.lang;

  if (storedLocale) {
    return storedLocale;
  }

  return documentLocale === "en" ? "en" : DEFAULT_LOCALE;
}

function getServerLocaleSnapshot(): Locale {
  return DEFAULT_LOCALE;
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(
    (onStoreChange) => {
      window.addEventListener("storage", onStoreChange);
      window.addEventListener(LANG_CHANGE_EVENT, onStoreChange);

      return () => {
        window.removeEventListener("storage", onStoreChange);
        window.removeEventListener(LANG_CHANGE_EVENT, onStoreChange);
      };
    },
    getLocaleSnapshot,
    getServerLocaleSnapshot,
  );

  const mounted = useSyncExternalStore(
    () => () => undefined,
    () => true,
    () => false,
  );

  const setLocale = useCallback((nextLocale: Locale) => {
    applyLocale(nextLocale);

    try {
      window.localStorage.setItem(LANG_STORAGE_KEY, nextLocale);
    } catch {
      // localStorage can be unavailable in private or restricted contexts.
    }

    window.dispatchEvent(new Event(LANG_CHANGE_EVENT));
  }, []);

  const toggleLocale = useCallback(() => {
    setLocale(locale === "pt" ? "en" : "pt");
  }, [locale, setLocale]);

  const value = useMemo(
    () => ({
      locale,
      mounted,
      dictionary: dictionaries[locale],
      setLocale,
      toggleLocale,
      t: (key: keyof typeof dictionaries.pt) => dictionaries[locale][key],
    }),
    [locale, mounted, setLocale, toggleLocale],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}
