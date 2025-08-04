const FeatureCards = ({ icon, title, bgColor, fontColor }) => {
  return (
    <div className={`${bgColor} ${fontColor} xl:w-55 h-45 pl-7 xl:pl-5 py-6 rounded-xl flex flex-col items-start justify-between`}>
      <img className="text-4xl" src={icon}></img>
      <span className={`w-5 ${bgColor} text-xl font-semibold`}>{title}</span>
    </div>
  );
};

export default FeatureCards;
