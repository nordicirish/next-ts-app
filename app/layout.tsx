import type { ReactNode } from "react";
import "./globals.css";
import Link from "next/link";
interface LayoutProps {
  children: ReactNode;
}
export default function RootLLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className="flex flex-col px-4 py-2 min-h-screen">
        <header>
          <nav>
            <ul className="flex gap-2">
              <li>
                {/* The link tag is used for single page application navigation - client side navigation 
              replace with a tag for server side navigation
              */}
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/reviews">Reviews</Link>
              </li>
              <li>
                {/* default build behaviour is to prefetch links for faster
              user experience but if a page is large or seldom accessed
              the prefetch prop can be set to false */}
                <Link href="/about" prefetch={false}>
                  About
                </Link>
              </li>
            </ul>
          </nav>
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
