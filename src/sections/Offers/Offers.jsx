import { TbBrandDeliveroo } from "react-icons/tb";
import FeatureCards from "../../components/FeatureCards/FeatureCards";
import Heading from "../../components/Heading/Heading";
import Button from "../../components/Button/Button";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

const Offers = () => {
  return (
    <section id="service" className="scroll-mt-20">
     <div className="pb-20 px-4 lg:px-20 max-w-screen-xl lg:pb-20 m-auto">
         <div className="flex flex-col gap-20 items-center ">
        <div className="mx-auto text-center lg:w-[40%]">
          <Heading normal={"Where innovation meets"} italic={" aesthetics"} />
        </div>

        <div className="grid lg:flex lg:flex-row gap-5 lg:w-full w-full">
          {icons.map((item) => {
            return (
              <FeatureCards
                icon={item.iconUrl}
                title={item.title}
                bgColor={item.bgColor}
                fontColor={item.fontColor}
                key={item.id}
              ></FeatureCards>
            );
          })}
        </div>

        <div className="w-full lg:w-full rounded-3xl m-auto bg-black grid gap-5 justify-center 
        lg:flex lg:flex-row lg:items-center lg:justify-between lg:px-10 px-7 lg:py-5 py-7">
          <p className="text-white text-center lg:text-left text-2xl font-semibold lg:text-2xl">
            See Our Work in Action. <br /> Start Your Creative Journey with Us!
          </p>
          <div className="flex flex-col items-center gap-5 lg:flex lg:flex-row lg:gap-5">
            <Button
              url={'/contact'}
              color={"bg-white"}
              label={`Let's Collaborate`}
              fontColor={"text-black"}
              icon={<BsArrowUpRightCircleFill />}
              translateLabel={"translate-x-15"}
              translateIcon={"-translate-x-38"}
            />
            <Button
              url={'/#work'}
              color={"bg-black"}
              label={`View Portfolio`}
              fontColor={"text-white"}
              icon={<BsArrowUpRightCircleFill />}
              translateLabel={"translate-x-15"}
              translateIcon={"-translate-x-33"}
            />
          </div>
        </div>
      </div>
     </div>
    </section>
  );
};

export default Offers;

const icons = [
  {
    id: 1,
    iconUrl: "https://www.kartavya.io/images/home/innovation/brand.svg",
    title: "Brand Strategy",
    bgColor: "bg-purple-100",
    fontColor: "text-purple-400",
  },

  {
    id: 2,
    iconUrl:
      "https://www.kartavya.io/images/home/innovation/digitalmarketing.svg",
    title: "Digital Marketing",
    bgColor: "bg-blue-100",
    fontColor: "text-blue-400",
  },

  {
    id: 3,
    iconUrl: "https://www.kartavya.io/images/home/innovation/uiux.svg",
    title: "UI/UX Design",
    bgColor: "bg-orange-100",
    fontColor: "text-orange-400",
  },

  {
    id: 4,
    iconUrl: "https://www.kartavya.io/images/home/innovation/analitics.svg",
    title: "Lead Generation",
    bgColor: "bg-green-100",
    fontColor: "text-green-400",
  },

  {
    id: 5,
    iconUrl: "https://www.kartavya.io/images/home/innovation/webdevp.svg",
    title: "Web Development",
    bgColor: "bg-red-100",
    fontColor: "text-red-400",
  },
];
