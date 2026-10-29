// Checklist progress for any page with <input type="checkbox" data-step="id">.
// Stores the set of ticked ids in localStorage under `progress:<scope>`.
// Also owns: the "Next step" marker (data-next), counts and meters, Hide done, Full/Compact view,
// per-step Show details, resume / jump to my level, backup codes and reset.
import { load, save } from './storage';
import { getLevel, LEVEL_EVENT } from './level';
import { toast } from './toast';

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

const each = (action: string, fn: (el: HTMLElement) => void) =>
  document.querySelectorAll<HTMLElement>(`[data-action="${action}"]`).forEach(fn);
const reduceMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

export function initProgress(scope: string) {
  const key = `progress:${scope}`;
  const done = new Set<string>(load<string[]>(key, []));
  const boxes = [...document.querySelectorAll<HTMLInputElement>('input[data-step]')];
  const root = document.documentElement;
  const noun = document.querySelector<HTMLElement>('[data-noun]')?.dataset.noun ?? 'steps';

  const persist = () => save(key, [...done]);

  function render() {
    for (const b of boxes) {
      b.checked = done.has(b.dataset.step!);
      const step = b.closest('.step');
      step?.classList.toggle('done', b.checked);
    }
    document.querySelectorAll<HTMLElement>('[data-group]').forEach((group) => {
      const inGroup = [...group.querySelectorAll<HTMLInputElement>('input[data-step]')];
      const n = inGroup.filter((b) => b.checked).length;
      const m = inGroup.length;
      group.querySelectorAll<HTMLElement>('[data-group-count]').forEach(
        (el) => (el.textContent = el.dataset.groupCount === 'long' ? `${n} of ${m} done` : `${n}/${m}`),
      );
      group.querySelectorAll<HTMLElement>('[data-group-bar]').forEach((el) => (el.style.width = `${m ? (n / m) * 100 : 0}%`));
      const complete = m > 0 && n === m;
      group.classList.toggle('complete', complete);
      if (group.id) {
        document.querySelectorAll<HTMLElement>(`[data-count-for="${group.id}"]`).forEach((el) => {
          el.textContent = `${n}/${m}`;
          el.closest('li')?.toggleAttribute('data-complete', complete);
        });
      }
    });
    const total = boxes.length;
    const n = boxes.filter((b) => b.checked).length;
    document.querySelectorAll<HTMLElement>('[data-progress-text]').forEach((el) => (el.textContent = `${n} of ${total} ${noun} done`));
    document.querySelectorAll<HTMLElement>('[data-progress-bar]').forEach((el) => (el.style.width = `${total ? (n / total) * 100 : 0}%`));

    // Next step: the first unticked step in my level range, else the first unticked step.
    const level = getLevel();
    const inLevel = (el: HTMLElement) => level !== null && level >= Number(el.dataset.lmin) && level <= Number(el.dataset.lmax);
    const open = boxes
      .filter((b) => !b.checked)
      .map((b) => b.closest<HTMLElement>('.step'))
      .filter((s): s is HTMLElement => !!s);
    const next = open.find(inLevel) ?? open[0] ?? null;
    document.querySelectorAll<HTMLElement>('.step[data-next]').forEach((s) => {
      s.removeAttribute('data-next');
      s.removeAttribute('aria-current');
    });
    if (next) {
      next.setAttribute('data-next', '');
      next.setAttribute('aria-current', 'step');
    }
    const complete = noun === 'books' ? 'All books collected' : 'Route complete';
    document.querySelectorAll<HTMLElement>('[data-next-title]').forEach((el) => (el.textContent = next ? next.dataset.title ?? '' : complete));
    document.querySelectorAll<HTMLButtonElement>('[data-next-coord]').forEach((btn) => {
      const way = next?.dataset.way;
      btn.hidden = !way;
      if (!way) return;
      btn.dataset.copy = way;
      btn.setAttribute('aria-label', `Copy ${way}`);
      btn.title = `Copy ${way}`;
      const label = btn.querySelector('[data-way-label]');
      if (label) label.textContent = next!.dataset.wayLabel ?? '';
    });
  }

  for (const b of boxes) {
    b.addEventListener('change', () => {
      if (b.checked) done.add(b.dataset.step!);
      else done.delete(b.dataset.step!);
      // A ticked step folds again.
      const step = b.closest<HTMLElement>('.step');
      if (step && b.checked) setOpen(step, false);
      persist();
      render();
    });
  }
  document.addEventListener(LEVEL_EVENT, render);

  // Hide completed steps (remembered per scope).
  const setHide = (on: boolean) => {
    root.classList.toggle('hide-done', on);
    each('hide-done', (b) => b.setAttribute('aria-pressed', String(on)));
    save(`hide-done:${scope}`, on);
  };
  setHide(load<boolean>(`hide-done:${scope}`, false));
  each('hide-done', (b) => b.addEventListener('click', () => setHide(!root.classList.contains('hide-done'))));

  // Full | Compact view (remembered per scope).
  const setView = (v: 'full' | 'compact') => {
    root.classList.toggle('view-compact', v === 'compact');
    each('view', (b) => b.setAttribute('aria-pressed', String(b.dataset.view === v)));
    save(`view:${scope}`, v);
  };
  setView(load<'full' | 'compact'>(`view:${scope}`, 'full') === 'compact' ? 'compact' : 'full');
  each('view', (b) => b.addEventListener('click', () => setView(b.dataset.view === 'compact' ? 'compact' : 'full')));

  // Show / Hide details on a folded (done) or compact step.
  function setOpen(step: HTMLElement, open: boolean) {
    step.classList.toggle('open', open);
    const t = step.querySelector<HTMLElement>('[data-action="details"]');
    if (!t) return;
    t.setAttribute('aria-expanded', String(open));
    const label = t.querySelector('[data-details-label]');
    if (label) label.textContent = open ? 'Hide details' : 'Show details';
  }
  document.addEventListener('click', (e) => {
    const t = (e.target as Element).closest<HTMLElement>('[data-action="details"]');
    const step = t?.closest<HTMLElement>('.step');
    if (step) setOpen(step, !step.classList.contains('open'));
  });

  const closeSheet = () =>
    document.querySelectorAll<HTMLDetailsElement>('details[data-sheet][open]').forEach((d) => {
      if (!matchMedia('(min-width: 900px)').matches) d.open = false;
    });

  const scrollToEl = (el: Element | null | undefined) => {
    if (!el) return;
    el.scrollIntoView({ behavior: reduceMotion() ? 'auto' : 'smooth', block: 'start' });
    el.classList.add('flash');
    setTimeout(() => el.classList.remove('flash'), 1600);
  };

  each('resume', (b) =>
    b.addEventListener('click', () => {
      closeSheet();
      scrollToEl(document.querySelector('.step[data-next]') ?? boxes.find((x) => !x.checked)?.closest('.step'));
    }),
  );

  each('my-level', (b) =>
    b.addEventListener('click', () => {
      closeSheet();
      const level = getLevel();
      if (level === null) {
        document.getElementById('my-level')?.focus();
        return;
      }
      const groups = [...document.querySelectorAll<HTMLElement>('[data-group][data-lmin]')];
      scrollToEl(groups.find((g) => level >= Number(g.dataset.lmin) && level <= Number(g.dataset.lmax)) ?? groups.at(-1));
    }),
  );

  // Backup / restore so progress can move to another browser or device.
  const codeBox = document.querySelector<HTMLTextAreaElement>('[data-backup-code]');
  const status = document.querySelector<HTMLElement>('[data-backup-status]');
  each('backup', (b) =>
    b.addEventListener('click', () => {
      if (!codeBox) return;
      codeBox.value = toCode({ v: 1, s: scope, d: [...done] });
      codeBox.select();
      if (status) status.textContent = 'Copy this code and paste it on your other device.';
    }),
  );
  each('restore', (b) =>
    b.addEventListener('click', () => {
      const code = codeBox ? fromCode(codeBox.value) : null;
      if (!code) {
        if (status) status.textContent = "That code doesn't look right. Make a new code on your other device and paste all of it.";
        return;
      }
      if (code.s !== scope) {
        if (status) status.textContent = 'That code is for a different checklist. Make the code on this page.';
        return;
      }
      const known = new Set(boxes.map((x) => x.dataset.step));
      done.clear();
      code.d.filter((id) => known.has(id)).forEach((id) => done.add(id));
      persist();
      render();
      if (status) status.textContent = `Restored ${done.size} ticked ${noun}.`;
      toast(`Restored ${done.size} ticked ${noun}.`);
    }),
  );
  each('reset', (b) =>
    b.addEventListener('click', () => {
      if (!confirm(`Untick all ${boxes.length} ${noun} on this checklist? This can't be undone.`)) return;
      done.clear();
      persist();
      render();
    }),
  );

  render();
  // The ignite (travelled line drawing down) only animates after the first render.
  requestAnimationFrame(() => requestAnimationFrame(() => root.classList.add('ley-ready')));
}
