import type { ReactNode } from "react";
import Link from "next/link";
interface LayoutProps {
  children: ReactNode;
}
export default function RootLLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        <header>
          <ul>
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
              <Link href="/about">About</Link>
            </li>
          </ul>
        </header>
        <main>{children}</main>
        <footer>[footer]</footer>
      </body>
    </html>
  );
}
