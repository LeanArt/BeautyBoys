// Any element with [data-copy="text"] copies that text on click and briefly shows "Copied".
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
    const ok = document.execCommand('copy');
    ta.remove();
    return ok;
  }
}

export function initCopy() {
  document.addEventListener('click', async (e) => {
    const btn = (e.target as HTMLElement).closest<HTMLElement>('[data-copy]');
    if (!btn) return;
    e.preventDefault();
    const ok = await copyText(btn.dataset.copy ?? '');
    const old = btn.dataset.label ?? btn.textContent ?? '';
    btn.dataset.label = old;
    btn.textContent = ok ? 'Copied' : 'Copy failed';
    btn.classList.add('copied');
    setTimeout(() => {
      btn.textContent = old;
      btn.classList.remove('copied');
    }, 1400);
  });
}
