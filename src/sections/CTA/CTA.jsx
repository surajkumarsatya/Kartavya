import { BsArrowUpRightCircleFill } from "react-icons/bs";
import Button from "../../components/Button/Button";
import Heading from "../../components/Heading/Heading";

const CTA = () => {
  return (
    <section>
      <div className="max-w-screen-xl m-auto xl:px-20 pb-20 p-4">
        <div className="xl:w-full border border-zinc-200 p-5 xl:px-30 py-13 xl:py-20 text-center flex flex-col gap-5 items-center justify-center rounded-3xl
        bg-[linear-gradient(90deg,#CDEFFB_0%,#FFFFFF_33.23%,#FFFFFF_65.77%,#FDEECB_100%)] backdrop-blur-[200px]">
          <div className="">
            <Heading
            normal={"Innovative Solutions for"}
            italic={" Bold Brands"}
          />
          </div>
          <p>
            Looking to elevate your brand? We craft immersive experiences that
            captivate, engage, and make your business unforgettable in every
            interaction.
          </p>
          <Button
            url={'/contact'}
            color={"bg-black"}
            label={`Let's Collaborate`}
            icon={<BsArrowUpRightCircleFill />}
            fontColor={"text-white"}
            translateLabel={"translate-x-15"}
            translateIcon={"-translate-x-38"}
          />
        </div>
      </div>
    </section>
  );
};

export default CTA;
