import { Orbitron, Exo_2 } from "next/font/google";

export const orbitron = Orbitron({
  subsets: ["latin"],
  // for tailwind, we need to use the css variable name
  variable: "--font-orbitron",
});

export const exo2 = Exo_2({
  subsets: ["latin"],
  variable: "--font-exo2",
});
