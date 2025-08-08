import Heading from "../../components/Heading/Heading";
import StatsCards from "../../components/StatsCards/StatsCards";
import Labels from "../../components/Labels/Labels";
import { BiCapsule } from "react-icons/bi";
import { HiOutlineLightBulb } from "react-icons/hi";
import { LiaVectorSquareSolid } from "react-icons/lia";
import { FaPlus } from "react-icons/fa";

const Stats = () => {
  return (
    <section>
      <div id="aboutus" >
        <div className="px-4 flex flex-col h-full bg-white items-center justify-center gap-10 pb-20 lg:py-20 md:px-8 lg:px-16 
         max-w-screen-xl m-auto">
        <div className="text-sm lg:text-3xl mx-auto text-center font-semibold lg:px-[0vw]">
            <Heading
          normal={
            "Crafting exceptional, well experienced & technology driven strategies to drive impactful results with"
          }
          italic={""}
        />
        </div>

        <div className="flex flex-col items-center lg:flex lg:flex-row gap-4">
          <Labels
            bgColor={"bg-purple-200"}
            fontColor={"text-purple-400"}
            icons={<BiCapsule />}
            label={"Creativity"}
            fontSize={'text-5xl'}
          />
          <Labels
            bgColor={"bg-blue-200"}
            fontColor={"text-blue-400"}
            icons={<HiOutlineLightBulb />}
            label={"Innovation"}
            fontSize={'text-5xl'}
          />
          <Labels
            bgColor={"bg-orange-200"}
            fontColor={"text-orange-400"}
            icons={<LiaVectorSquareSolid />}
            label={"Strategy"}
            fontSize={'text-5xl'}
          />
        </div>

        <div className="flex flex-col gap-10 lg:gap-0 text-2xl lg:flex lg:flex-row lg:items-center justify-between mt-10 lg:mt-20">
         <div className="lg:border-r lg:p-5 lg:pr-10">
            <StatsCards
            plusIcon={<FaPlus />}
            number={50}
            desc={"Total Projects Completed"}
          />
         </div>
         <div className="lg:border-r p-5 pr-10">
            <StatsCards
            plusIcon={<FaPlus />}
            number={15}
            desc={"Years of experience"}
          />
         </div>
          
          <div className="p-5">
            <StatsCards
            plusIcon={<FaPlus />}
            number={25}
            desc={"Design Awards"}
          />
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Stats;
