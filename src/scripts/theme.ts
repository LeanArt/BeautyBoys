import { load, save } from './storage';

type Theme = 'system' | 'light' | 'dark';
const ORDER: Theme[] = ['system', 'light', 'dark'];
const LABEL: Record<Theme, string> = { system: 'Theme: follow system', light: 'Theme: light', dark: 'Theme: dark' };

function apply(t: Theme) {
  if (t === 'system') delete document.documentElement.dataset.theme;
  else document.documentElement.dataset.theme = t;
}

export function initTheme() {
  const btn = document.getElementById('theme-btn');
  let current = load<Theme>('theme', 'system');
  if (!ORDER.includes(current)) current = 'system';
  apply(current);
  btn?.setAttribute('title', LABEL[current]);
  btn?.addEventListener('click', () => {
    current = ORDER[(ORDER.indexOf(current) + 1) % ORDER.length];
    apply(current);
    save('theme', current);
    btn.setAttribute('title', LABEL[current]);
  });
}
