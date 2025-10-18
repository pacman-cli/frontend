import type { ReactNode } from "react";
type Item = { href: string; label: string; icon: ReactNode };

const cyan = "#64FFDA";

function GitHub() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path fill="#cbd5e1" d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.57v-2.1c-3.34.73-4.04-1.61-4.04-1.61-.55-1.41-1.35-1.79-1.35-1.79-1.1-.76.08-.74.08-.74 1.22.09 1.86 1.26 1.86 1.26 1.08 1.85 2.83 1.31 3.52 1 .11-.8.42-1.32.76-1.63-2.67-.3-5.48-1.33-5.48-5.89 0-1.3.47-2.36 1.24-3.19-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.22a11.5 11.5 0 0 1 6 0c2.28-1.54 3.29-1.22 3.29-1.22.66 1.65.24 2.87.12 3.17.77.83 1.23 1.89 1.23 3.19 0 4.57-2.81 5.58-5.49 5.88.43.37.81 1.1.81 2.22v3.29c0 .32.21.69.83.57A12 12 0 0 0 12 .5Z"/>
    </svg>
  );
}

function LinkedIn() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path fill="#cbd5e1" d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zM8 8h3.8v2.2h.06c.53-1 1.83-2.2 3.77-2.2 4.03 0 4.77 2.65 4.77 6.1V24h-4v-7.1c0-1.69-.03-3.87-2.36-3.87-2.36 0-2.72 1.84-2.72 3.74V24H8V8z"/>
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path fill="#cbd5e1" d="M18.9 1H22l-7.7 8.8L24 23h-7.4l-5.8-7.6L3.9 23H1l8.3-9.6L0 1h7.6l5.2 6.9L18.9 1Zm-1.3 20h2L6.5 3h-2l13.1 18Z"/>
    </svg>
  );
}

function Instagram() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path fill="#cbd5e1" d="M12 2.2c3.2 0 3.6 0 4.9.07 1.3.06 2 .28 2.47.47.62.24 1.06.53 1.52.99.46.46.75.9.99 1.52.19.47.41 1.16.47 2.47.07 1.33.07 1.73.07 4.9s0 3.57-.07 4.9c-.06 1.3-.28 2-.47 2.46-.24.62-.53 1.06-.99 1.52a3.67 3.67 0 0 1-1.52.99c-.47.19-1.16.41-2.47.47-1.33.07-1.73.07-4.9.07s-3.57 0-4.9-.07c-1.3-.06-2-.28-2.46-.47a3.67 3.67 0 0 1-1.52-.99 3.67 3.67 0 0 1-.99-1.52c-.19-.47-.41-1.16-.47-2.46C2.2 15.57 2.2 15.2 2.2 12s0-3.57.07-4.9c.06-1.3.28-2 .47-2.47.24-.62.53-1.06.99-1.52.46-.46.9-.75 1.52-.99.47-.19 1.16-.41 2.46-.47C8.43 2.2 8.8 2.2 12 2.2Zm0 1.8c-3.16 0-3.53 0-4.77.07-1.15.05-1.77.24-2.18.41-.55.21-.94.46-1.35.88-.42.41-.67.8-.88 1.35-.17.41-.36 1.03-.41 2.18C2.34 9.14 2.3 9.5 2.3 12c0 2.5.04 2.86.11 4.1.05 1.15.24 1.77.41 2.18.21.55.46.94.88 1.35.41.42.8.67 1.35.88.41.17 1.03.36 2.18.41 1.24.07 1.61.11 4.77.11s3.53-.04 4.77-.11c1.15-.05 1.77-.24 2.18-.41.55-.21.94-.46 1.35-.88.42-.41.67-.8.88-1.35.17-.41.36-1.03.41-2.18.07-1.24.11-1.61.11-4.77s-.04-3.53-.11-4.77c-.05-1.15-.24-1.77-.41-2.18a3.03 3.03 0 0 0-.88-1.35 3.03 3.03 0 0 0-1.35-.88c-.41-.17-1.03-.36-2.18-.41-1.24-.07-1.61-.11-4.77-.11Zm0 3.1a5.9 5.9 0 1 1 0 11.8 5.9 5.9 0 0 1 0-11.8Zm0 1.8a4.1 4.1 0 1 0 0 8.2 4.1 4.1 0 0 0 0-8.2Zm5.96-2.54a1.38 1.38 0 1 1-2.77 0 1.38 1.38 0 0 1 2.77 0Z"/>
    </svg>
  );
}

export default function SocialBar() {
  const items: Item[] = [
    { href: "https://github.com/pacman-cli", label: "GitHub", icon: <GitHub /> },
    { href: "https://www.instagram.com/pacman.puspo/", label: "Instagram", icon: <Instagram /> },
    { href: "https://x.com/iam_puspo", label: "X", icon: <XIcon /> },
    { href: "https://www.linkedin.com/in/iampuspo/", label: "LinkedIn", icon: <LinkedIn /> },
  ];

  return (
    <div className="hidden md:flex fixed left-6 top-1/2 -translate-y-1/2 flex-col items-center gap-4">
      {items.map((it) => (
        <a
          key={it.label}
          href={it.href}
          aria-label={it.label}
          target="_blank"
          rel="noreferrer noopener"
          className="group"
        >
          <span className="inline-block transition-transform duration-200 group-hover:-translate-y-0.5">
            {it.icon}
          </span>
        </a>
      ))}
      <div className="mt-2 h-16 w-px bg-slate-700" />
      <style>{`.group:hover svg path{fill:${cyan}}`}</style>
    </div>
  );
}


