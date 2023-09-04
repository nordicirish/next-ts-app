import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { orbitron, exo2 } from "./fonts";
interface LayoutProps {
  children: ReactNode;
}
// sets default metadata template: %s | Indie Gamer allows individual pages to have their own title
export const metadata: Metadata = {
  title: { default: "Indie Gamer", template: "%s | Indie Gamer" },
  description: "Only the best indie games, reviewed for you.",
};
export default function RootLLayout({ children }: LayoutProps) {
  return (
    // import custom fonts
    <html lang="en" className={`${exo2.variable} ${orbitron.variable}`}>
      <body className="bg-orange-50 flex flex-col px-4 py-2 min-h-screen">
        <header>
          <NavBar />
        </header>
        <main className="grow py-4">{children}</main>
        {/* no need to use link for external links */}
        <footer className="border-t py-3 text-center text-xs text-slate-500">
          Game data and images courtesy of{" "}
          <a
            className="text-orange-800 hover:underline"
            href="https://rawg.io/"
            target="_blank"
          >
            RAWG
          </a>
        </footer>
      </body>
    </html>
  );
}
