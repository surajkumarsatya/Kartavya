const StatsCards = ({ plusIcon, number, desc }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-start justify-center px-18">
        <span className="text-3xl">{plusIcon}</span>
        <span className="text-8xl font-semibold">{number}</span>
      </div>
      <div className="text-lg text-zinc-500 w-fit m-auto">{desc}</div>
    </div>
  );
};

export default StatsCards;
