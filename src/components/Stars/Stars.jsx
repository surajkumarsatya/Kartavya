import { FaStar } from "react-icons/fa6";

const Stars = ({ noOfStars, text }) => {
  return (
    <div>
      <div className="flex text-yellow-300 text-xl">
        {Array.from({ length: noOfStars }, (_, index) => (
          <FaStar key={index} />
        ))}
      </div>
      <div className="text-sm text-zinc-500">{text}</div>
    </div>
  );
};

export default Stars;
