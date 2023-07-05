import { readFile } from "fs/promises";
import Heading from "@/components/Heading";
import ReviewImage from "@/components/ReviewImage";
// Server components can be async but not client components
// Default next component are server components
export default async function StardewValleyPage() {
  const text = await readFile("./content/reviews/stardew-valley.md", "utf-8");
  return (
    <>
      <Heading>Stardew Valley</Heading>
      <ReviewImage>/images/stardew-valley.jpg</ReviewImage>
      <p>{text}</p>
    </>
  );
}
