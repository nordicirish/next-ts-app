import { readFile } from "fs/promises";
import { marked } from "marked";
import Heading from "@/components/Heading";
import ReviewImage from "@/components/ReviewImage";
// Server components can be async but not client components
// Default next component are server components
export default async function StardewValleyPage() {
  const text = await readFile("./content/reviews/stardew-valley.md", "utf-8");
  // disable terminal log depreceated warnings for now
  const html = marked(text, { headerIds: false, mangle: false });
  return (
    <>
      <Heading>Stardew Valley</Heading>
      <ReviewImage>/images/stardew-valley.jpg</ReviewImage>
      <article dangerouslySetInnerHTML={{ __html: html }} />
      {/* need to pass html as prop as react escapes html tags as a security feature <p>{html}</p> */}
    </>
  );
}
