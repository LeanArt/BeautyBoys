import { load, save } from './storage';

type Theme = 'system' | 'light' | 'dark';
const ORDER: Theme[] = ['system', 'light', 'dark'];
const NAME: Record<Theme, string> = { system: 'Auto', light: 'Light', dark: 'Dark' };

function apply(t: Theme) {
  if (t === 'system') delete document.documentElement.dataset.theme;
  else document.documentElement.dataset.theme = t;
}

// Visible label, accessible name and the one visible icon follow the current choice.
function paint(btn: HTMLElement | null, t: Theme) {
  if (!btn) return;
  btn.setAttribute('aria-label', `Theme: ${NAME[t]}. Change theme`);
  btn.querySelectorAll('[data-theme-label]').forEach((el) => (el.textContent = NAME[t]));
  btn.querySelectorAll<SVGElement>('[data-theme-icon]').forEach((el) => el.classList.toggle('on', el.dataset.themeIcon === t));
}

export function initTheme() {
  const btn = document.getElementById('theme-btn');
  let current = load<Theme>('theme', 'system');
  if (!ORDER.includes(current)) current = 'system';
  apply(current);
  paint(btn, current);
  btn?.addEventListener('click', () => {
    current = ORDER[(ORDER.indexOf(current) + 1) % ORDER.length];
    apply(current);
    save('theme', current);
    paint(btn, current);
  });
}
