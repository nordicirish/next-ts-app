import Link from "next/link";
export default function NavBar() {
  return (
    <nav>
      <ul className="flex gap-2">
        <li>
          {/* The link tag is used for single page application navigation - client side navigation 
              replace with a tag for server side navigation
              */}
          <Link className="text-orange-800 hover:underline" href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="text-orange-800 hover:underline" href="/reviews">
            Reviews
          </Link>
        </li>
        <li>
          {/* default build behaviour is to prefetch links for faster
              user experience but if a page is large or seldom accessed
              the prefetch prop can be set to false */}
          <Link
            className="text-orange-800 hover:underline"
            href="/about"
            prefetch={false}
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
