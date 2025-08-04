import Heading from "../../components/Heading/Heading";
import AwardCards from "../../components/AwardCards/AwardCards";

const Awards = () => {
  return (
    <section id="awards" className="scroll-mt-20">
      <div className="max-w-screen-xl m-auto xl:px-20 pb-20">
        <div className="pb-20 xl:w-[70%] m-auto px-2">
          <Heading
            normal={"Accolades and achievements celebration our"}
            italic={" design excellence"}
          />
        </div>
        <div className="grid xl:grid xl:grid-cols-3 justify-between gap-5 px-4 xl:px-0">
          {awards.map((award) => {
            return (
              <AwardCards
                icon={award.imgUrl}
                awardName={award.awardName}
                desc={award.desc}
                year={award.year}
                key={award.id}
              />
            );
          })}
        </div>
      </div>
   
    </section>
  );
};

export default Awards;

const awards = [
  {
    id: 1,
    imgUrl: 'https://www.kartavya.io/images/home/achievement/framer_award.svg',
    awardName: "Framer Awards",
    desc: "Celebrated for cutting-edge interaction design and seamless user experiences.",
    year: 2024,
  },

  {
    id: 2,
    imgUrl: 'https://www.kartavya.io/images/home/achievement/dribble_award.svg',
    awardName: "Dribbble Awards",
    desc: "Recognized for creative excellence and innovative design solutions",
    year: 2023,
  },

  {
    id: 3,
    imgUrl: 'https://www.kartavya.io/images/home/achievement/awward_award.svg',
    awardName: "awwwards Awards",
    desc: "Honored with the Best Website Design for creativity, usability, and innovation.",
    year: 2022,
  },
];
