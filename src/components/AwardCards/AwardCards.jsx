const AwardCards = ({ icon, awardName, desc, year }) => {
  return (
    <div className="border border-zinc-300 p-5 grid gap-15 rounded-3xl">
      <img src={icon}></img>
      <div>
        <p className="pb-5">{awardName}</p>
        <p className="text-2xl font-semibold">{desc}</p>
      </div>
      <p>{year}</p>

    </div>
    
  );
};

export default AwardCards;
