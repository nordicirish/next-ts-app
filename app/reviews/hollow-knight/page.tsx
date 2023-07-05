import { getReview } from "@/lib/reviews";
import Heading from "@/components/Heading";
import ReviewImage from "@/components/ReviewImage";
export default async function StardewValleyPage() {
  const review = await getReview("hollow-knight");
  return (
    <>
      <Heading>{review.title}</Heading>
      <p className="italic pb-2">{review.date}</p>
      <ReviewImage>{review.image}</ReviewImage>
      {/* tailwind className prose formats html */}
      <article
        className="max-w-screen-sm prose prose-slate"
        dangerouslySetInnerHTML={{ __html: review.body }}
      />
      {/* need to pass html as prop as react escapes html tags as a security feature <p>{html}</p> */}
    </>
  );
}
