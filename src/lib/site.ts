export const site = {
  name: 'Waypoint',
  tagline: 'A beginner-friendly leveling companion for WoW: Forever',
  // Launch: November 4, 2026, 3:00 p.m. PST (Blizzard announcement).
  launch: '2026-11-04T23:00:00Z',
  dataUpdated: '2026-10-29',
  // Private while testing: keep search engines out. Flip to false when going public.
  noindex: true,
  // Where "Report a problem" links go. Prefilled GitHub issue for now.
  reportUrl: 'https://github.com/LeanArt/BeautyBoys/issues/new',
};

export function reportHref(context: string): string {
  const title = `Guide issue: ${context}`;
  const body = `**Where:** ${context}\n**What's wrong / what you saw in game:**\n\n**Your level / date played:**\n`;
  return `${site.reportUrl}?title=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}`;
}

export const nav = [
  { href: '/start/', label: 'Start here' },
  { href: '/guides/gnome-warlock/', label: 'Gnome Warlock' },
  { href: '/guides/gnome-warlock/route/', label: 'Route' },
  { href: '/guides/gnome-warlock/talents/', label: 'Talents & demons' },
  { href: '/guides/gnome-warlock/professions/', label: 'Professions & alts' },
  { href: '/bags/', label: 'Bag advisor' },
  { href: '/systems/', label: 'Forever systems' },
  { href: '/library-books/', label: 'Library books' },
  { href: '/glossary/', label: 'Glossary' },
];
