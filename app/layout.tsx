import type { ReactNode } from "react";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { orbitron, exo2 } from "./fonts";
interface LayoutProps {
  children: ReactNode;
}
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
        <footer className="border-t py-3 text-center text-xs">
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
