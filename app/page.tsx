// paths configured in tsconfig.json
// @ replaces relative file paths
import Heading from "@/components/Heading";
import Link from "next/link";
export default function HomePage() {
  return (
    console.log("Homepage rendering"),
    (
      <>
        <Heading>Indie Gamer</Heading>
        <p className="pb-3">Only the best indie games, reviewed for you.</p>
        <div
        // take full width of remaining space at 640px and above
          className="bg-white border rounded shadow w-80 sm:w-full
                      hover:shadow-xl"
        >
          <Link
            href="/reviews/stardew-valley"
            className="flex flex-col sm:flex-row"
          >
            <img
              src="/images/stardew-valley.jpg"
              alt=""
              width="320"
              height="180"
              className="rounded-t sm:rounded-l sm:rounded-r-none"
            />
            <h2 className="font-orbitron font-semibold py-1 text-center sm:px-2">
              Stardew Valley
            </h2>
          </Link>
        </div>
      </>
    )
  );
}
