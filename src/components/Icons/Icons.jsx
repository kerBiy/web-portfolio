// Inline stroke icons from the design; decorative, so hidden from assistive tech.
const Icon = ({ size = 18, strokeWidth = 1.8, children }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    {children}
  </svg>
);

export const SunIcon = () => (
  <Icon>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </Icon>
);

export const MoonIcon = () => (
  <Icon>
    <path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z" />
  </Icon>
);

export const MenuIcon = () => (
  <Icon strokeWidth={2}>
    <path d="M4 9h16M4 15h16" />
  </Icon>
);

export const CloseIcon = () => (
  <Icon strokeWidth={2}>
    <path d="M6 6l12 12M18 6L6 18" />
  </Icon>
);

export const DownloadIcon = () => (
  <Icon size={16} strokeWidth={2}>
    <path d="M12 4v11M7 10l5 5 5-5M5 20h14" />
  </Icon>
);

export const GitHubIcon = () => (
  <Icon size={16}>
    <path d="M9 19c-4 1.5-4-2-6-2.5M15 21v-3.5a3 3 0 0 0-.8-2.3c2.7-.3 5.5-1.3 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.3 4.3 0 0 0-.1-3.2s-1-.3-3.4 1.3a11.6 11.6 0 0 0-6 0C6.5 2.5 5.5 2.8 5.5 2.8a4.3 4.3 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.2c0 4.6 2.8 5.7 5.5 6a3 3 0 0 0-.8 2.3V21" />
  </Icon>
);

export const LinkedInIcon = () => (
  <Icon size={16}>
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" />
  </Icon>
);

export const ExternalIcon = () => (
  <Icon size={13} strokeWidth={2.2}>
    <path d="M7 17L17 7M8 7h9v9" />
  </Icon>
);

export const ArrowUpIcon = () => (
  <Icon>
    <path d="M12 19V5M6 11l6-6 6 6" />
  </Icon>
);

export const PauseIcon = () => (
  <Icon size={14} strokeWidth={2.4}>
    <path d="M8 5v14M16 5v14" />
  </Icon>
);

export const PlayIcon = () => (
  <Icon size={14} strokeWidth={2}>
    <path d="M7 4.5v15l12-7.5z" />
  </Icon>
);
