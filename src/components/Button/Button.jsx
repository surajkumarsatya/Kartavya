import { useState } from "react";
import { Link } from "react-router-dom";

const Button = ({
  color,
  label,
  icon,
  fontColor,
  translateLabel,
  translateIcon,
  url,
}) => {
  
  const [isHovered, setIsHovered] = useState(false);

  function onMouseEnter() {
    {
      isHovered ? setIsHovered(false) : setIsHovered(true);
    }
  }

  function onMouseLeave() {
    {
      isHovered ? setIsHovered(false) : setIsHovered(true);
    }
  }

  return (
    <div>
      <Link to={url}>
        <button
          type="submit"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className={`${color} ${fontColor} border-1 px-4 py-2 gap-8 
      rounded-full flex items-center justify-between hover:cursor-pointer`}
        >
          <span
            className={`${
              isHovered ? translateLabel : ""
            } transition-transform duration-300`}
          >
            {label}
          </span>
          <span
            className={`${
              isHovered ? translateIcon : ""
            } transition-transform duration-300 text-3xl`}
          >
            {icon}
          </span>
        </button>
      </Link>
    </div>
  );
};

export default Button;
