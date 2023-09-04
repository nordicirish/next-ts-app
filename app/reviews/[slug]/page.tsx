import { Metadata } from "next";
import { getReview, getSlugs } from "@/lib/reviews";
import Heading from "@/components/Heading";
import ReviewImage from "@/components/ReviewImage";
import ShareButtons from "@/components/ShareButtons";
// dynamic routes
// loads a different file dependent on the url end slug
interface ReviewPageParams {
  slug: string;
}

interface ReviewPageProps {
  params: ReviewPageParams;
}

export async function generateMetadata({
  //destructure props
  params: { slug },
}: ReviewPageProps): Promise<Metadata> {
  //load review data
  const review = await getReview(slug);
  return {
    title: review.title,
  };
}

// static site route generation at build time
export async function generateStaticParams(): Promise<ReviewPageParams[]> {
  const slugs = await getSlugs();
  return slugs.map((slug) => ({ slug }));
}
export default async function ReviewPage({
  params: { slug },
}: ReviewPageProps) {
  const review = await getReview(slug);

  console.log("[ReviewPage] rendering", slug);
  return (
    <>
      <Heading>{review.title}</Heading>
      <div className="flex gap-3 items-baseline">
        <p className="italic pb-2">{review.date}</p>
        <ShareButtons />
      </div>

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
