import { Link } from "react-router-dom";
import Heading from "../Heading/Heading";
import Button from "../Button/Button";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import Navbar from "../Navbar/Navbar";
import Footer from "../../sections/Footer/Footer";

const ErrorPage = () => {


  return (
    
    <>
    <Navbar />
        <div className="relative rounded-full h-full top-20 w-full bg-[linear-gradient(90deg,#CDEFFB_0%,#FFFFFF_33.23%,#FFFFFF_65.77%,#FDEECB_100%)] 
        before:top-0">
       
      <div className="absolute bg-transparent backdrop-blur-[70px] w-full h-full"></div>
      <div className="relative flex flex-col h-fit items-center justify-center px-4 py-20 lg:p-0">
        <div className="lg:w-[50%] flex flex-col items-center justify-center gap-8 py-10 px-2">
          <img src="https://www.kartavya.io/images/Notfound/notfound.png" alt="404" />
          <Heading
            normal={"Oops! The page you are looking for"}
            italic={` doesn't exist`}
          />
          <Link to="/">
            <Button
            color={"bg-black"}
            label={`Back to home`}
            fontColor={"text-white"}
            icon={<BsArrowUpRightCircleFill />}
            translateLabel={"translate-x-15"}
            translateIcon={"-translate-x-33"}
          />
          </Link>
        </div>
      </div>
    </div>
    <div className="relative mt-40">
        <Footer />
    </div>
    </>
  );
};

export default ErrorPage;
