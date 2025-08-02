import { useState } from "react";

const Button = ({ color, label, icon, fontColor, translateLabel, translateIcon }) => {

  const [isHovered, setIsHovered] = useState(false)

  function onMouseEnter() {
    {isHovered ? setIsHovered(false) : setIsHovered(true)} 
  }

  function onMouseLeave() {
    {isHovered ? setIsHovered(false) : setIsHovered(true)} 
  }

  return (
    <div>
      <button onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={`${color} ${fontColor} border-1 px-4 py-2 gap-8 
      rounded-full flex items-center justify-between`} >
       <span className={`${isHovered ? translateLabel : ''} transition-transform duration-300`}>{label}</span>
       <span className={`${isHovered ? translateIcon : ''} transition-transform duration-300 text-3xl`}>{icon}</span>
      </button>
    </div>
  );
};

export default Button;
