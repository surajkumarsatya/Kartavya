import AuthButtons from "../AuthButtons/AuthButtons";

const Navbar = () => {
  return (
    <nav className="">
      <div className="relative z-100 flex justify-center ">
        <div className="fixed flex items-center  justify-between bg-white shadow-xl w-[90%] mt-3 rounded-full 
        lg:py-0 xl:py-2 xl:px-4 max-w-screen-xl m-auto">
        <div>
          <img src="https://www.kartavya.io/images/logo/logo.svg" alt="logo" />
        </div>
        <div>
          <ul className="flex items-center justify-between gap-8 bg-zinc-200 rounded-3xl text-zinc-600 text-sm font-semibold px-4 py-2">
            <li className="bg-white px-2 py-1 rounded-3xl">About Us</li>
            <li>Services</li>
            <li>Work</li>
            <li>Team</li>
            <li>Pricing</li>
            <li>Awards</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="flex gap-2">
          <AuthButtons
            label={"Sign In"}
            bgColor={"bg-white"}
            textColor={"text-black"}
          />
          <AuthButtons
            label={"Sign Up"}
            bgColor={"bg-black"}
            textColor={"text-white"}
          />
        </div>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
