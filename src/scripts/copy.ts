// Any element with [data-copy="text"] copies that text on click.
// Buttons with a [data-copy-icon] swap that icon for a check (width never changes); others swap their text.
import { toast } from './toast';

export async function copyText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Fallback for browsers without async clipboard permission.
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    let ok = false;
    try {
      ok = document.execCommand('copy');
    } catch {
      ok = false;
    }
    ta.remove();
    return ok;
  }
}

export function initCopy() {
  document.addEventListener('click', async (e) => {
    const btn = (e.target as HTMLElement).closest<HTMLElement>('[data-copy]');
    if (!btn) return;
    e.preventDefault();
    const text = btn.dataset.copy ?? '';
    if (!text) return;
    const ok = await copyText(text);
    btn.classList.add('copied');
    if (btn.querySelector('[data-copy-icon]')) {
      btn.dataset.state = ok ? 'copied' : 'failed';
      setTimeout(() => {
        delete btn.dataset.state;
        btn.classList.remove('copied');
      }, 1400);
    } else {
      const old = btn.dataset.label ?? btn.textContent ?? '';
      btn.dataset.label = old;
      btn.textContent = ok ? 'Copied' : 'Copy failed';
      setTimeout(() => {
        btn.textContent = old;
        btn.classList.remove('copied');
      }, 1400);
    }
    const lines = text.split('\n').length;
    toast(ok ? (lines > 1 ? `Copied ${lines} waypoints` : `Copied ${text}`) : "Copy didn't work. Long-press the coordinates to copy them.");
  });
}
