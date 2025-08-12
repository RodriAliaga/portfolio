import { en } from './en';
import { es } from './es';

export type Lang = 'es' | 'en';
export const LANGS: Lang[] = ['es', 'en'];

export function getDict(lang: Lang) {
  return lang === 'en' ? en : es;
}

export function altLang(lang: Lang): Lang {
  return lang === 'en' ? 'es' : 'en';
}

export function swapLangInPath(pathname: string, to: Lang) {
  const parts = pathname.split('/').filter(Boolean);
  if (parts.length === 0) return `/${to}/`;
  if (parts[0] === 'en' || parts[0] === 'es') {
    parts[0] = to;
  } else {
    parts.unshift(to);
  }
  return '/' + parts.join('/') + (pathname.endsWith('/') ? '/' : '');
}

