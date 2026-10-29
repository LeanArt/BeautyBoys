// Site menu below 1200px (75em, so it follows the browser text size): a panel under the header. Closes on the button, Esc, an outside tap or a link tap.
export function initMenu() {
  const header = document.querySelector<HTMLElement>('.site-header');
  const btn = document.querySelector<HTMLButtonElement>('[data-action="menu"]');
  const panel = document.getElementById('site-menu');
  if (!header || !btn || !panel) return;
  const label = btn.querySelector('[data-menu-label]');
  const set = (open: boolean, returnFocus = false) => {
    header.toggleAttribute('data-menu-open', open);
    btn.setAttribute('aria-expanded', String(open));
    if (label) label.textContent = open ? 'Close' : 'Menu';
    if (open) panel.querySelector<HTMLElement>('a, button')?.focus();
    else if (returnFocus) btn.focus();
  };
  btn.addEventListener('click', () => set(btn.getAttribute('aria-expanded') !== 'true'));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && header.hasAttribute('data-menu-open')) set(false, true);
  });
  document.addEventListener('click', (e) => {
    if (!header.hasAttribute('data-menu-open')) return;
    const t = e.target as Element;
    if (t.closest('#site-menu a') || (!t.closest('#site-menu') && !t.closest('[data-action="menu"]'))) set(false);
  });
  matchMedia('(min-width: 75em)').addEventListener('change', () => set(false)); // the inline-nav breakpoint in global.css
}
