import { BsLinkedin, BsTwitterX } from "react-icons/bs";


const TeamMemberCards = ({name, profile, imgUrl, twitter, linkedIn}) => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center pt-20 text-center text-xl lg:text-xl">
      <img className="lg:w-60" src={imgUrl}></img>
      <div>
        <div className="text-black font-semibold">{name}</div>
        <div className="text-zinc-500">{profile}</div>
      </div>
      <div className="flex gap-5 text-zinc-500">
        <a href={twitter}><BsTwitterX/></a>
        <a  href={linkedIn}><BsLinkedin /></a>
      </div>
    </div>
  );
};

export default TeamMemberCards;
