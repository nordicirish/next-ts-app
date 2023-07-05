import { readdir, readFile } from "node:fs/promises";
import matter from "gray-matter";
import { marked } from "marked";

export interface Review {
  slug: string;
  title: string;
  date: string;
  image: string;
  body: string;
}

export async function getReview(slug: string): Promise<Review> {
  const text = await readFile(`./content/reviews/${slug}.md`, "utf8");
  const {
    content,
    data: { title, date, image },
  } = matter(text);
  const body = marked(content, { headerIds: false, mangle: false });
  return { slug, title, date, image, body };
}
export async function getReviews() {
  const files = await readdir("./content/reviews");
  // exclude files that don't end in .md
  const slugs = files
    .filter((file) => file.endsWith(".md"))
    // slice from start of file name to beginning of .md
    .map((file) => file.slice(0, -".md".length));
  console.log(slugs);
  const reviews: Review[] = [];
  for (const slug of slugs) {
    const review = await getReview(slug);
    reviews.push(review);
  }
  return reviews;
}
