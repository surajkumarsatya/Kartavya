import { BsArrowUpRightCircleFill } from "react-icons/bs";
import Button from "../Button/Button";
import Labels from "../Labels/Labels";
import ParaAndText from "../ParaAndText/ParaAndText";
import Heading from "../Heading/Heading";

const PricingCard = () => {
  return (
    <section>
      <div className="max-w-screen-xl m-auto xl:px-20">
        <div className="w-[40%] m-auto pb-20">
          <Heading
            normal={"Pick the plan that fits your"}
            italic={" start-up"}
          />
        </div>
        <div className="grid grid-cols-2 gap-5 h-[100%] items-start justify-between">
          <div className="flex gap-15 bg-[#F6E683] p-10 h-90 rounded-3xl items-start">
            <div className="flex flex-col h-[100%] justify-between">
              <div className="flex flex-col gap-2">
                <Labels
                  bgColor={"bg-black"}
                  icons={""}
                  label={"Starter"}
                  fontColor={"text-white"}
                  fontSize={"text-sm"}
                />
                <div className="w-55">
                  <ParaAndText
                    text={
                      "For companies who need design support. One request at a time"
                    }
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-5xl font-semibold">
                  {" "}
                  {'$2500'} <span className="text-lg">{"/month"}</span>
                </div>
                <Button
                  color={"bg-white"}
                  icon={<BsArrowUpRightCircleFill />}
                  label={`Let's Collborate`}
                  fontColor={"bg-black"}
                  translateLabel={"translate-x-15"}
                  translateIcon={"-translate-x-36"}
                />
              </div>
            </div>

            <div className="flex flex-col h-[100%] ">
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

          <div className="flex gap-15 bg-[#4928FD] p-10 h-90 rounded-3xl items-start">
            <div className="flex flex-col h-[100%] justify-between">
            <div className="flex flex-col gap-2">
              <Labels
                bgColor={"bg-black"}
                icons={""}
                label={"Pro"}
                fontColor={"text-white"}
                fontSize={"text-sm"}
              />
              <div className="w-55 text-white">
                <ParaAndText
                  text={
                    "2x the speed. Great for an MVP, Web App or complex problem"
                  }

                  fontColor={'text-white'}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-5xl font-semibold">
                {" "}
                {'$3800'} <span className="text-lg">{"/month"}</span>
              </div>
              <Button
                color={"bg-white"}
                icon={<BsArrowUpRightCircleFill />}
                label={`Let's Collborate`}
                fontColor={"bg-black"}
                translateLabel={"translate-x-15"}
                translateIcon={"-translate-x-36"}
              />
            </div>
          </div>
          <div className="flex flex-col h-[100%] text-white">
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
    </section>
  );
};

export default PricingCard;
