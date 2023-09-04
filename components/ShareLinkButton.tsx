"use client";
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
      className="border px-2 py-1 rounded text-slate-500 text-sm
      hover:bg-orange-100 hover:text-slate-700"
    >
      {clicked ? "Link Copied" : "Share Link"}
    </button>
  );
}
