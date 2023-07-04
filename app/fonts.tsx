import { Orbitron } from "next/font/google";
export const orbitron = Orbitron({
  subsets: ["latin"],
  // for tailwind, we need to use the css variable name
  variable: "--font-orbitron",
});
