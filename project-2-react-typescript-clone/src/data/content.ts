import type { CallToAction, InlineFragment, IslandStatus, NavItem, Project } from "@/types";
import {
  AboutIcon,
  BrainIcon,
  CityIcon,
  ExperienceIcon,
  HomeIcon,
  PaintBrushIcon,
  PlugsConnectedIcon,
  WorksIcon,
} from "@/components/icons";

import workVolium from "@/assets/work-volium.jpeg";
import workFestina from "@/assets/work-festina.jpeg";
import workAthema from "@/assets/work-athema.jpeg";
import workLoganHayes from "@/assets/work-loganhayes.png";

export const profile = {
  name: "James Doe",
  role: "Designer",
  avatarAlt: "Portrait of James Doe",
} as const;

/** Live status shown when the dynamic island is expanded. */
export const islandStatus: IslandStatus = {
  location: "Los Angeles, US",
  temperature: "24°C",
  condition: "Sunny",
  available: true,
};

export const navItems: NavItem[] = [
  { label: "Home", shortcut: "1", target: "home", icon: HomeIcon },
  { label: "Experience", shortcut: "2", target: "experience", icon: ExperienceIcon },
  { label: "About", shortcut: "3", target: "home", icon: AboutIcon },
  { label: "Works", shortcut: "4", target: "works", icon: WorksIcon },
];

export const hero = {
  greeting: "Hello 👋, I'm James Doe.",
  /** Sentence groups; each line break mirrors the Framer original. */
  introLines: [
    [
      { text: "A dedicated designer", icon: PaintBrushIcon },
      { text: "crafting experiences that inspire.", icon: BrainIcon },
    ],
    [
      { text: "I call Los Angeles my home", icon: CityIcon },
      { text: "where history meets creativity." },
    ],
    [
      {
        text: "In my free time I explore the world through travel and capture moments with my camera.",
      },
    ],
    [
      { text: "Fluent in English and Italian, I love connecting", icon: PlugsConnectedIcon },
      { text: "with people from all walks of life." },
    ],
  ] satisfies InlineFragment[][],
  ctas: [
    { label: "Schedule a call", href: "mailto:jamesdoe@mail.com", variant: "primary" },
    { label: "jamesdoe@mail.com", href: "mailto:jamesdoe@mail.com", variant: "secondary" },
  ] satisfies CallToAction[],
};

export const experience = {
  heading: "Now",
  /** The body is split so "PixelCraft Studio" can render as a highlight chip. */
  before: "Currently working as a Senior Web Designer at ",
  highlight: "PixelCraft Studio",
  after:
    " leading projects focused on creating intuitive, accessible, and visually engaging digital experiences. Collaborating closely with developers and product teams to deliver innovative solutions that enhance user satisfaction.",
  ctas: [
    { label: "Download CV", href: "#", variant: "primary" },
    { label: "See full experience", href: "#experience", variant: "secondary" },
  ] satisfies CallToAction[],
};

export const works = {
  heading: "Work's",
  caption: "Example content for demo purposes only.",
  projects: [
    { name: "Volium", image: workVolium, alt: "Volium — brand and product website" },
    { name: "Festina", image: workFestina, alt: "Festina — investment fund website" },
    { name: "Athema", image: workAthema, alt: "Athema — SaaS productivity platform" },
    { name: "Logan Hayes", image: workLoganHayes, alt: "Logan Hayes — photography portfolio" },
  ] satisfies Project[],
};

export const footer = {
  location: "Rome, Italy CET (UTC +1)",
  rights: "All rights reserved",
  builtWith: { label: "Framer", href: "https://framer.com" },
  author: { label: "Federico Esposito", href: "https://x.com/fedexesposito" },
};
