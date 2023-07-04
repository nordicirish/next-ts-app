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
              {/* default behaviour is to prefect links for faster
              user experience but if a page is large or seldom accessed
              the prefetch prop can be set to false */}
              <Link href="/about" prefetch={false}>
                About
              </Link>
            </li>
          </ul>
        </header>
        <main>{children}</main>
        <footer>[footer]</footer>
      </body>
    </html>
  );
}
