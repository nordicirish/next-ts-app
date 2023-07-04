import { orbitron } from "@/app/fonts";
//automatically incorporates font files in the built app
export default function Heading({ children }) {
  return (
    <h1 className={`font-bold pb-3 text-2xl ${orbitron.className}`}>
      {children}
    </h1>
  );
}
