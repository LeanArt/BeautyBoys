// Checklist progress for any page with <input type="checkbox" data-step="id">.
// Stores the set of ticked ids in localStorage under `progress:<scope>`.
import { load, save } from './storage';
import { getLevel } from './level';

type Backup = { v: 1; s: string; d: string[] };

function toCode(b: Backup): string {
  return btoa(unescape(encodeURIComponent(JSON.stringify(b))))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

function fromCode(code: string): Backup | null {
  try {
    const b64 = code.trim().replace(/-/g, '+').replace(/_/g, '/');
    const json = JSON.parse(decodeURIComponent(escape(atob(b64))));
    if (json?.v === 1 && typeof json.s === 'string' && Array.isArray(json.d)) return json as Backup;
  } catch {
    /* fall through */
  }
  return null;
}

export function initProgress(scope: string) {
  const key = `progress:${scope}`;
  const done = new Set<string>(load<string[]>(key, []));
  const boxes = [...document.querySelectorAll<HTMLInputElement>('input[data-step]')];
  const root = document.documentElement;

  const persist = () => save(key, [...done]);

  function render() {
    for (const b of boxes) {
      b.checked = done.has(b.dataset.step!);
      b.closest('.step')?.classList.toggle('done', b.checked);
    }
    document.querySelectorAll<HTMLElement>('[data-group]').forEach((group) => {
      const inGroup = [...group.querySelectorAll<HTMLInputElement>('input[data-step]')];
      const n = inGroup.filter((b) => b.checked).length;
      group.querySelectorAll('[data-group-count]').forEach((el) => (el.textContent = `${n}/${inGroup.length}`));
      group.classList.toggle('complete', inGroup.length > 0 && n === inGroup.length);
    });
    const total = boxes.length;
    const n = boxes.filter((b) => b.checked).length;
    document.querySelectorAll<HTMLElement>('[data-progress-text]').forEach((el) => (el.textContent = `${n} of ${total} steps done`));
    document.querySelectorAll<HTMLElement>('[data-progress-bar]').forEach((el) => (el.style.width = `${total ? (n / total) * 100 : 0}%`));
  }

  for (const b of boxes) {
    b.addEventListener('change', () => {
      if (b.checked) done.add(b.dataset.step!);
      else done.delete(b.dataset.step!);
      persist();
      render();
    });
  }

  // Hide completed steps (remembered per scope).
  const hideBtn = document.querySelector<HTMLButtonElement>('[data-action="hide-done"]');
  const setHide = (on: boolean) => {
    root.classList.toggle('hide-done', on);
    hideBtn?.setAttribute('aria-pressed', String(on));
    save(`hide-done:${scope}`, on);
  };
  setHide(load<boolean>(`hide-done:${scope}`, false));
  hideBtn?.addEventListener('click', () => setHide(!root.classList.contains('hide-done')));

  const scrollToEl = (el: Element | null | undefined) => {
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    el.classList.add('flash');
    setTimeout(() => el.classList.remove('flash'), 1600);
  };

  document.querySelector('[data-action="resume"]')?.addEventListener('click', () => {
    const next = boxes.find((b) => !b.checked);
    scrollToEl(next?.closest('.step'));
  });

  document.querySelector('[data-action="my-level"]')?.addEventListener('click', () => {
    const level = getLevel();
    if (level === null) {
      document.getElementById('my-level')?.focus();
      return;
    }
    const groups = [...document.querySelectorAll<HTMLElement>('[data-group][data-lmin]')];
    scrollToEl(groups.find((g) => level >= Number(g.dataset.lmin) && level <= Number(g.dataset.lmax)) ?? groups.at(-1));
  });

  // Backup / restore so progress can move to another browser or device.
  const codeBox = document.querySelector<HTMLTextAreaElement>('[data-backup-code]');
  const status = document.querySelector<HTMLElement>('[data-backup-status]');
  document.querySelector('[data-action="backup"]')?.addEventListener('click', () => {
    if (!codeBox) return;
    codeBox.value = toCode({ v: 1, s: scope, d: [...done] });
    codeBox.select();
    if (status) status.textContent = 'Copy this code and paste it on your other device.';
  });
  document.querySelector('[data-action="restore"]')?.addEventListener('click', () => {
    const b = codeBox ? fromCode(codeBox.value) : null;
    if (!b || b.s !== scope) {
      if (status) status.textContent = "That code doesn't look right for this checklist.";
      return;
    }
    const known = new Set(boxes.map((x) => x.dataset.step));
    done.clear();
    b.d.filter((id) => known.has(id)).forEach((id) => done.add(id));
    persist();
    render();
    if (status) status.textContent = `Restored ${done.size} ticked steps.`;
  });
  document.querySelector('[data-action="reset"]')?.addEventListener('click', () => {
    if (!confirm('Untick every step on this checklist?')) return;
    done.clear();
    persist();
    render();
  });

  render();
}
