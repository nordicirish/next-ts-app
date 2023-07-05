import { getReview } from "@/lib/reviews";
import Heading from "@/components/Heading";
import ReviewImage from "@/components/ReviewImage";
// dynamic routes
// loads a different file dependent on the url end slug
interface ReviewPageProps {
  params: { slug: string };
}

export default async function ReviewPage({
  params: { slug },
}: ReviewPageProps) {
  const review = await getReview(slug);
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
