import { BsArrowUpRightCircleFill } from "react-icons/bs";
import Button from "../../components/Button/Button";
import ParaAndText from "../../components/ParaAndText/ParaAndText";
import ProfileImages from "../../components/ProfileImages/ProfileImages";
import Stars from "../../components/Stars/Stars";

const Hero = () => {
  return (
    // bg-[linear-gradient(90deg,#CDEFFB_0%,#FFFFFF_33.23%,#FFFFFF_65.77%,#FDEECB_100%)] before:top-0
    //     <div className="before:absolute before:w-[] before:h-[50%] border before:bg-gradient-to-r
    // before:from-[#E3F7FD] before:via-white before:to-[#FEF6E2] before:rounded-full before:top-0 before:blur-3xl before:-z-10">

    <section className="max-w-screen-xl m-auto xl:px-0">
     
      <div id="hero" className="relative rounded-full h-[100%] bg-[linear-gradient(90deg,#CDEFFB_0%,#FFFFFF_33.23%,#FFFFFF_65.77%,#FDEECB_100%)] 
        before:top-0">
        <div className="absolute bg-transparent backdrop-blur-[70px] w-full h-full"></div>
        <div
          className="relative flex flex-col h-fit gap-10 items-center justify-center px-6 pt-40 pb-20 xl:py-40 md:px-8 lg:px-16 xl:px-10 
       max-w-screen-xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-semibold text-center">
            Build. Scale. <span className="italic">Dominate.</span>
          </h1>
          <div className="max-w-xl text-center text-md text-zinc-500">
            <ParaAndText
              text={
                "We help entrepreneurs, startups, and global businesses unlock exponential growth through strategic web development, AI-powered automation, brand positioning, and full-spectrum business solutions- guiding you from strategy to success in a competitive market."
              }
            />
          </div>

          <div className="flex flex-col xl:flex xl:flex-row items-center justify-center gap-5 ">
            <Button
              color={"bg-[#4928FD]"}
              label={"Get Started"}
              fontColor={"text-white"}
              icon={<BsArrowUpRightCircleFill />}
              translateLabel={"translate-x-15"}
              translateIcon={"-translate-x-28"}
            />

            <ProfileImages images={profileImages} />

            <Stars noOfStars={5} text={"Trusted by 100+ clients"} />
          </div>

          <div className="text-lg text-center xl:text-sm text-zinc-500">
            <ParaAndText
              text={"Loved by 100+ big and small brands around the worlds"}
            />
          </div>
        </div>
       
      </div>
    </section>
  );
};

export default Hero;

const profileImages = [
  {
    id: 1,
    imgUrl: "https://www.kartavya.io/images/home/avatar_1.jpg",
  },

  {
    id: 2,
    imgUrl: "https://www.kartavya.io/images/home/avatar_2.jpg",
  },

  {
    id: 3,
    imgUrl: "https://www.kartavya.io/images/home/avatar_3.jpg",
  },

  {
    id: 4,
    imgUrl: "https://www.kartavya.io/images/home/avatar_4.jpg",
  },
];
