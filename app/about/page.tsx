import Heading from "@/components/Heading";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "About",
};
export default function AboutPage() {
  return (
    <>
      <Heading>About</Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure neque
        repudiandae veniam voluptatibus nemo aut possimus mollitia harum
        repellendus fugit cum adipisci autem dolores accusamus qui officiis
        eius, unde asperiores quod nam dolorem minima ullam! Deserunt similique
        blanditiis numquam, consequatur dolores ut soluta distinctio dolorum
        laborum, atque quod, sequi molestiae.
      </p>
    </>
  );
}
