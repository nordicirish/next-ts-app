"use client";
// any other imported child components like ShareLinkButton are automatically rendered on the client

import ShareLinkButton from "./ShareLinkButton";

export default function ShareButtons() {
  return (
    <div>
      <ShareLinkButton /> | [Twitter] | [Facebook]
    </div>
  );
}
