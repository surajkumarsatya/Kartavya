import Heading from "../../components/Heading/Heading";
import TeamMemberCards from "../../components/TeamMemberCards/TeamMemberCards";

const TeamMembers = () => {
  return (
    <section id="team" className="scroll-mt-20">
      <div className="px-4 pb-20 lg:px-20 lg:pb-0 max-w-screen-xl m-auto">
        <div className="mx-auto text-center lg:w-[50%]">
          <Heading
            normal={"Meet the creative minds behind"}
            italic={" our success"}
          />
        </div>
        <div className="lg:flex px-4 justify-between gap-5">
          {teamMembers.map((team) => {
            return (
              <TeamMemberCards
                imgUrl={team.imgUrl}
                name={team.name}
                profile={team.profile}
                twitter={team.twitter}
                linkedIn={team.linkedIn}
                key={team.id}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;

const teamMembers = [
  {
    id: 1,
    imgUrl: "https://www.kartavya.io/images/home/creative/creative_img_1.png",
    name: "Logan Dang",
    profile: "WordPress Developer",
    twitter: "https://www.x.com",
    linkedIn: "https://www.linkedin.com",
  },

  {
    id: 2,
    imgUrl: "https://www.kartavya.io/images/home/creative/creative_img_2.png",
    name: "Ana Belić",
    profile: "Social Media Specialist",
    twitter: "https://www.x.com",
    linkedIn: "https://www.linkedin.com",
  },

  {
    id: 3,
    imgUrl: "https://www.kartavya.io/images/home/creative/creative_img_3.png",
    name: "Brian Hanley",
    profile: "Product Designer",
    twitter: "https://www.x.com",
    linkedIn: "https://www.linkedin.com",
  },

  {
    id: 4,
    imgUrl: "https://www.kartavya.io/images/home/creative/creative_img_4.png",
    name: "Darko Stanković",
    profile: "UI Designer",
    twitter: "https://www.x.com",
    linkedIn: "https://www.linkedin.com",
  },
];
