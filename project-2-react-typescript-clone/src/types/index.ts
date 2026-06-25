import type { Icon } from "@phosphor-icons/react";

/** Light / dark theme. "system" defers to the OS preference at load time. */
export type Theme = "light" | "dark";
export type ThemePreference = Theme | "system";

/** Phosphor icon component (accepts weight / size / color props). */
export type IconComponent = Icon;

/** A single inline-icon + text fragment used in the hero's running paragraph. */
export interface InlineFragment {
  text: string;
  /** Optional icon rendered immediately after the text. */
  icon?: IconComponent;
}

/** A primary/secondary call-to-action button. */
export interface CallToAction {
  label: string;
  href: string;
  variant: "primary" | "secondary";
  /** Open in a new tab (external links). */
  external?: boolean;
}

/** A navigation entry in the side rail / mobile bar. */
export interface NavItem {
  /** Visible label when expanded. */
  label: string;
  /** Short-cut key shown in the badge and bound to the keyboard. */
  shortcut: string;
  /** In-page anchor id to scroll to. */
  target: string;
  icon: IconComponent;
}

/** A project shown in the Works showcase. */
export interface Project {
  name: string;
  image: string;
  alt: string;
}

/** Current weather/status shown in the expanded dynamic island. */
export interface IslandStatus {
  location: string;
  temperature: string;
  condition: string;
  available: boolean;
}
