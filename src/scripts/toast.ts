// One polite live region (#toast in Base.astro). Never takes focus; hides after 3s.
let timer: number | undefined;

export function toast(msg: string) {
  const el = document.getElementById('toast');
  if (!el) return;
  el.textContent = msg;
  el.setAttribute('data-show', '');
  window.clearTimeout(timer);
  timer = window.setTimeout(() => {
    el.removeAttribute('data-show');
    window.setTimeout(() => {
      if (!el.hasAttribute('data-show')) el.textContent = '';
    }, 300);
  }, 3000);
}
