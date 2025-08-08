import { BsArrowUpRightCircleFill } from "react-icons/bs";
import Button from "../Button/Button";
import Labels from "../Labels/Labels";
import ParaAndText from "../ParaAndText/ParaAndText";
import Heading from "../Heading/Heading";

const PricingCard = () => {
  return (
      <div className="p-4 lg:p-0 ">
        <div className="lg:w-[40%] m-auto pb-20">
          <Heading
            normal={"Pick the plan that fits your"}
            italic={" start-up"}
          />
        </div>
        <div className="lg:grid grid-cols-2 lg:gap-5 flex flex-col gap-5 h-[100%] items-start justify-between">
          <div className="lg:flex gap-15 bg-[#F6E683] p-10 lg:h-90 rounded-3xl items-start">
            <div className="flex flex-col h-[100%] justify-between">
              <div className="flex flex-col gap-2">
                <Labels
                  bgColor={"bg-black"}
                  icons={""}
                  label={"Starter"}
                  fontColor={"text-white"}
                  fontSize={"text-sm"}
                />
                <div className="lg:w-55">
                  <ParaAndText
                    text={
                      "For companies who need design support. One request at a time"
                    }
                  />
                </div>
              </div>

              <div className="flex flex-col lg:gap-2 pt-10 lg:pt-0 gap-5">
                <div className="text-3xl lg:text-5xl font-semibold">
                 
                  {'$2500'} <span className="text-lg">{"/month"}</span>
                </div>
                <Button
                  url={'/contact'}
                  color={"bg-white"}
                  icon={<BsArrowUpRightCircleFill />}
                  label={`Let's Collborate`}
                  fontColor={"bg-black"}
                  translateLabel={"translate-x-15"}
                  translateIcon={"-translate-x-36"}
                />
              </div>
            </div>

            <div className="flex flex-col lg:h-[100%] lg:pt-0 pt-5 h-70 gap-3 lg:gap-0 ">
              <ul className="text-lg flex flex-col h-[100%] justify-between">Features
                <li>Design Updates Every 2 Days</li>
                <li>Mid-level Designer</li>
                <li>SEO optimization</li>
                <li>Monthly analytics</li>
                <li>2x Calls Per Month</li>
                <li>License free assets</li>
              </ul>
            </div>
          </div>

          <div className="lg:flex gap-15 bg-[#4928FD] p-10 lg:h-90 rounded-3xl items-start">
            <div className="flex flex-col h-[100%] justify-between">
            <div className="flex flex-col gap-2">
              <Labels
                bgColor={"bg-black"}
                icons={""}
                label={"Pro"}
                fontColor={"text-white"}
                fontSize={"text-sm"}
              />
              <div className="lg:w-55 text-white">
                <ParaAndText
                  text={
                    "2x the speed. Great for an MVP, Web App or complex problem"
                  }

                  fontColor={'text-white'}
                />
              </div>
            </div>
            <div className="flex flex-col lg:gap-2 pt-10 lg:pt-0 gap-5">
              <div className="text-3xl lg:text-5xl font-semibold">
                
                {'$3800'} <span className="text-lg">{"/month"}</span>
              </div>
              <Button
                url={'/contact'}
                color={"bg-white"}
                icon={<BsArrowUpRightCircleFill />}
                label={`Let's Collborate`}
                fontColor={"bg-black"}
                translateLabel={"translate-x-15"}
                translateIcon={"-translate-x-36"}
              />
            </div>
          </div>
          <div className="flex flex-col lg:h-[100%]  lg:pt-0 pt-5 h-70 gap-3 lg:gap-0 text-white">
              <ul className="text-lg flex flex-col h-[100%] justify-between">Features
                <li>Design Updates Every 2 Days</li>
                <li>Mid-level Designer</li>
                <li>SEO optimization</li>
                <li>Monthly analytics</li>
                <li>2x Calls Per Month</li>
                <li>License free assets</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  );
};

export default PricingCard;
