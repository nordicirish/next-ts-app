// "use client";
// use client directive not necessary as imported as a child component of ShareButtons that is rendered on the client
import { LinkIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
// use client directive ensure that the component executes on the client side
// hydration component is rendered on client and server but functions are executed on the client
export default function ShareLinkButton() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    // console.log("clicked!");
    // copy page url to clipboard
    navigator.clipboard.writeText(window.location.href);
    setClicked(true);
    // reset button after 1.5 seconds
    setTimeout(() => setClicked(false), 1500);
  };
  console.log("[ShareLinkButton] clicked:", clicked);
  return (
    <button
      onClick={handleClick}
      className="border flex gap-1 items-center px-2 py-1 rounded
                 text-slate-500 text-sm
                 hover:bg-orange-100 hover:text-slate-700"
    >
      <LinkIcon className="h-4 w-4" />
      {clicked ? "Link Copied" : "Share Link"}
    </button>
  );
}
