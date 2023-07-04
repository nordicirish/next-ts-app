// paths configured in tsconfig.json
// @ replaces relative file paths
import Heading from "@/components/Heading";
export default function HomePage() {
  return (
    console.log("Homepage rendering"),
    (
      <>
        <Heading>Indie Gamer</Heading>
        <p>Only the best indie games, reviewed for you.</p>
      </>
    )
  );
}
