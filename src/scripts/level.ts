import { load, save } from './storage';

export const LEVEL_EVENT = 'waypoint:level';

export function getLevel(): number | null {
  const v = load<number | null>('level', null);
  return typeof v === 'number' && v >= 1 && v <= 60 ? v : null;
}

// Quest-difficulty ladder ("con" colours), as in game: yellow is +-2 levels around the content.
export type Ladder = 'too-hard' | 'hard' | 'on-level' | 'easy' | 'trivial';
const LADDER_WORD: Record<Ladder, string> = { 'too-hard': 'too hard', hard: 'hard', 'on-level': 'on level', easy: 'easy', trivial: 'trivial' };
export function ladder(level: number, min: number, max: number): Ladder {
  if (level >= min - 2 && level <= max + 2) return 'on-level';
  if (level < min) return min - level >= 5 ? 'too-hard' : 'hard';
  return level - max >= 8 ? 'trivial' : 'easy';
}

// Marks every [data-lmin][data-lmax] element with data-now="current|past|future" for the player's level,
// sets the ladder words, "You are here, at level N", html[data-level] and the stepper's disabled ends.
function markLevels(level: number | null) {
  document.querySelectorAll<HTMLElement>('[data-lmin][data-lmax]').forEach((el) => {
    if (level === null) {
      delete el.dataset.now;
      return;
    }
    const min = Number(el.dataset.lmin);
    const max = Number(el.dataset.lmax);
    el.dataset.now = level < min ? 'future' : level > max ? 'past' : 'current';
  });

  const root = document.documentElement;
  root.toggleAttribute('data-level', level !== null);
  if (level !== null) root.dataset.level = String(level);

  document.querySelectorAll<HTMLElement>('[data-ladder-tag]').forEach((el) => {
    const word = el.querySelector('.ladder');
    if (level === null) {
      el.removeAttribute('data-ladder');
      if (word) word.textContent = '';
      return;
    }
    const l = ladder(level, Number(el.dataset.lmin), Number(el.dataset.lmax));
    el.dataset.ladder = l;
    if (word) word.textContent = LADDER_WORD[l];
  });

  document.querySelectorAll('[data-level-value]').forEach((el) => (el.textContent = level === null ? '' : String(level)));

  document.querySelectorAll<HTMLButtonElement>('[data-action="level-down"]').forEach((b) => (b.disabled = level === 1));
  document.querySelectorAll<HTMLButtonElement>('[data-action="level-up"]').forEach((b) => (b.disabled = level === 60));
}

export function initLevel() {
  const input = document.getElementById('my-level') as HTMLInputElement | null;
  const level = getLevel();
  if (input && level !== null) input.value = String(level);
  markLevels(level);

  input?.addEventListener('change', () => {
    const n = Math.round(Number(input.value));
    const next = input.value === '' || !Number.isFinite(n) ? null : Math.min(60, Math.max(1, n));
    if (next !== null) input.value = String(next);
    save('level', next);
    markLevels(next);
    document.dispatchEvent(new CustomEvent(LEVEL_EVENT, { detail: next }));
  });

  // Stepper: changes the input value and lets the change handler above clamp, save, mark and dispatch.
  document.querySelectorAll<HTMLButtonElement>('[data-action="level-down"],[data-action="level-up"]').forEach((btn) =>
    btn.addEventListener('click', () => {
      if (!input) return;
      const cur = Number(input.value);
      const step = btn.dataset.action === 'level-up' ? 1 : -1;
      input.value = String(input.value !== '' && Number.isFinite(cur) && cur >= 1 ? Math.min(60, Math.max(1, cur + step)) : 1);
      input.dispatchEvent(new Event('change', { bubbles: true }));
    }),
  );
  document.querySelectorAll('[data-action="focus-level"]').forEach((b) => b.addEventListener('click', () => input?.focus()));
}
