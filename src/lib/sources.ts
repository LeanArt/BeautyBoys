// Human label for a source URL: "warcrafttavern.com › camping".
export function sourceLabel(u: string): string {
  try {
    const url = new URL(u);
    const host = url.hostname.replace(/^www\./, '');
    const tail = url.pathname.split('/').filter(Boolean).pop() ?? '';
    return tail ? `${host} › ${decodeURIComponent(tail).slice(0, 48)}` : host;
  } catch {
    return u;
  }
}
