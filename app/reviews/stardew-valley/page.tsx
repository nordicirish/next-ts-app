import { readFile } from "fs/promises";
import matter from "gray-matter";
import { marked } from "marked";
import Heading from "@/components/Heading";
import ReviewImage from "@/components/ReviewImage";
// Server components can be async but not client components
// Default next component are server components
export default async function StardewValleyPage() {
  const text = await readFile("./content/reviews/stardew-valley.md", "utf-8");
  // disable terminal log depreceated warnings for now
  // extract content and data first
  const {
    content,
    data: { title, date, image },
  } = matter(text);
  const html = marked(content, { headerIds: false, mangle: false });
  return (
    <>
      <Heading>{title}</Heading>
      <p className="italic pb-2">{date}</p>
      <ReviewImage>{image}</ReviewImage>
      {/* tailwind className prose formats html */}
      <article
        className="max-w-screen-sm prose prose-slate"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      {/* need to pass html as prop as react escapes html tags as a security feature <p>{html}</p> */}
    </>
  );
}
