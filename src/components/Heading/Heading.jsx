const Heading = ({ normal, italic}) => {
  return (
    <h2 className={`text-5xl text-center `}>
      <span className="font-semibold">{normal}</span>
      <span className="italic">{italic}</span>
    </h2>
  );
};

export default Heading;
