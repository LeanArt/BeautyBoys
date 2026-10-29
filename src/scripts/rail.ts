// Disclosures that are always open from a breakpoint up (On this page, the checklist sheet).
// Below it the checklist sheet is a non-modal bottom sheet: it closes on its summary, the scrim, Esc or a link tap.
export function initRail() {
  document.querySelectorAll<HTMLDetailsElement>('details[data-open-from]').forEach((d) => {
    const mq = matchMedia(`(min-width: ${d.dataset.openFrom}px)`);
    const sync = () => {
      d.open = mq.matches;
    };
    sync();
    mq.addEventListener('change', sync);
    if (!d.hasAttribute('data-sheet')) {
      // Below the breakpoint: a link tap in "On this page" closes it again.
      d.addEventListener('click', (e) => {
        if (!mq.matches && (e.target as Element).closest('a')) d.open = false;
      });
    }
    if (d.hasAttribute('data-sheet')) {
      d.addEventListener('click', (e) => {
        if (!mq.matches && (e.target as Element).closest('.sheet-panel a')) d.open = false;
      });
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && d.open && !mq.matches) {
          d.open = false;
          d.querySelector('summary')?.focus();
        }
      });
    }
  });
}
