export default function ReviewImage({ children }) {
  return (
    <img
      className="mb-2 rounded"
      width="640"
      height="360"
      src={children}
      alt={children}
    />
  );
}
