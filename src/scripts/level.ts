import { load, save } from './storage';

export const LEVEL_EVENT = 'waypoint:level';

export function getLevel(): number | null {
  const v = load<number | null>('level', null);
  return typeof v === 'number' && v >= 1 && v <= 60 ? v : null;
}

// Marks every [data-lmin][data-lmax] element with data-now="current|past|future" for the player's level.
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
}
