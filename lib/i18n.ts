import en from '@/messages/en.json';
import ru from '@/messages/ru.json';
import tr from '@/messages/tr.json';
import zh from '@/messages/zh.json';

export const locales = ['en', 'ru', 'tr', 'zh'] as const;
export type Locale = (typeof locales)[number];

const dictionaries = { en, ru, tr, zh } as const;

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}

export function t(dict: Record<string, any>, path: string): string {
  return path.split('.').reduce<any>((acc, key) => acc?.[key], dict) ?? path;
}
