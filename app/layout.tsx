import type { ReactNode } from "react";
import "./globals.css";
import Link from "next/link";
import NavBar from "../components/NavBar";
interface LayoutProps {
  children: ReactNode;
}
export default function RootLLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className="bg-orange-50 flex flex-col px-4 py-2 min-h-screen">
        <header>
          <NavBar />
        </header>
        <main className="grow py-4">{children}</main>
        {/* no need to use link for external links */}
        <footer className="border-t py-3 text-center text-xs">
          Game data and images courtesy of{" "}
          <a href="https://rawg.io/" target="_blank">
            RAWG
          </a>
        </footer>
      </body>
    </html>
  );
}
