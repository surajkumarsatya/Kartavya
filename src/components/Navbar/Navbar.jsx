import { useState } from "react";
import AuthButtons from "../AuthButtons/AuthButtons";
import { Link } from "react-router-dom";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("");
  const [isMenu, setIsMenu] = useState(true);

  function handleNav(nav) {
    setActiveNav(nav);
  }

  function isActive(navItem) {
    return activeNav === navItem;
  }

  function toggelMenu() {
    {
      isMenu ? setIsMenu(false) : setIsMenu(true);
    }
  }

  function scrollToSection(id) {
    // setActiveNav(id);
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <nav>
      {/* 
        1. Nav Link -- scroll -- DONE
        2. Login and Signin pages -- pending
        3. Contact Form -- submit fix -- DONE
        4. Error Page -- create -- DONE
        5. Contact form is not highlighting when going through by clicking the button -- pending
        6. Structure the logic of Navbar and Button component into 'utils' folder for better code reading -- pending
    */}

      {/* web */}
      <div className="hidden xl:block">
        <div className="relative z-100 flex justify-center ">
          <div
            className="fixed flex items-center justify-between bg-white shadow-xl w-[90%] mt-3 rounded-full 
        lg:py-0 xl:py-2 xl:px-4 max-w-screen-xl m-auto"
          >
            <div className="flex justify-between items-center w-full">
              <div>
                <Link to="/">
                  <div
                    onClick={() => {
                      scrollToSection("hero");
                    }}
                  >
                    <img
                      src="https://www.kartavya.io/images/logo/logo.svg"
                      alt="logo"
                    />
                  </div>
                </Link>
              </div>

              <div>
                <ul
                  className="flex items-center justify-between gap-1 bg-zinc-200 rounded-full 
            text-zinc-600 text-sm font-semibold px-2 py-1 "
                >
                  <li
                    onClick={() => {
                      handleNav("aboutus");
                      scrollToSection("aboutus");
                    }}
                    className={`${
                      isActive("aboutus")
                        ? "bg-white px-3 py-1 rounded-full text-black"
                        : ""
                    } hover:bg-white px-4 py-2 rounded-full hover:text-black `}
                  >
                    <Link to="/#aboutus">About Us</Link>
                  </li>

                  <li
                    onClick={() => {
                      handleNav("services");
                      scrollToSection("service");
                    }}
                    className={`${
                      isActive("service")
                        ? "bg-white px-3 py-1 rounded-full text-black"
                        : ""
                    } hover:bg-white px-4 py-2 rounded-full hover:text-black `}
                  >
                    <Link to="/#service">Services</Link>
                  </li>
                  <li
                    onClick={() => {
                      handleNav("work");
                      scrollToSection("work");
                    }}
                    className={`${
                      isActive("work")
                        ? "bg-white px-3 py-1 rounded-full text-black"
                        : "bg-zinc-200"
                    } hover:bg-white px-4 py-2 rounded-full hover:text-black`}
                  >
                    <Link to="/#work">Work</Link>
                  </li>
                  <li
                    onClick={() => {
                      handleNav("team");
                      scrollToSection("team");
                    }}
                    className={`${
                      isActive("team")
                        ? "bg-white px-3 py-1 rounded-full text-black"
                        : ""
                    } hover:bg-white px-4 py-2 rounded-full hover:text-black`}
                  >
                    <Link to="/#team">Team</Link>
                  </li>
                  <li
                    onClick={() => {
                      handleNav("pricing");
                      scrollToSection("pricing");
                    }}
                    className={`${
                      isActive("pricing")
                        ? "bg-white px-3 py-1 rounded-full text-black"
                        : ""
                    } hover:bg-white px-4 py-2 rounded-full hover:text-black`}
                  >
                    <Link to="/#pricing">Pricing</Link>
                  </li>
                  <li
                    onClick={() => {
                      handleNav("awards");
                      scrollToSection("awards");
                    }}
                    className={`${
                      isActive("awards")
                        ? "bg-white px-3 py-1 rounded-full text-black"
                        : ""
                    } hover:bg-white px-4 py-2 rounded-full hover:text-black`}
                  >
                    <Link to="/#awards">Awards</Link>
                  </li>
                  <li
                    onClick={() => {
                      handleNav("contact");
                      // scrollToSection("contact");
                    }}
                    className={`${
                      isActive("contact")
                        ? "bg-white px-3 py-1 rounded-full text-black"
                        : ""
                    } hover:bg-white px-4 py-2 rounded-full hover:text-black`}
                  >
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>

              <div className="xl:flex gap-2">
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
        </div>
      </div>

      {/* mobile */}
      <div className="block xl:hidden">
        <div className="relative z-100 flex justify-center ">
          <div
            className="fixed flex xl:items-center justify-between bg-white shadow-xl w-[90%] mt-3 rounded-full 
        lg:py-0 xl:py-2 xl:px-4 max-w-screen-xl m-auto"
          >
            <div
              className={`flex items-center justify-between px-3 py-1 w-full`}
            >
              <div>
                <Link to="/">
                 <div
                    onClick={() => {
                      scrollToSection("hero");
                    }}
                  >
                  <img
                    className=""
                    src="https://www.kartavya.io/images/logo/logo.svg"
                    alt="logo"
                  />
                  </div>
                </Link>
                
              </div>
              <div className="text-xl">
                <RxHamburgerMenu onClick={toggelMenu} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="block xl:hidden">
        <div
          className={`${
            isMenu ? "translate-x-150" : "translate-x-0"
          } transition-all duration-300 fixed border h-[100%] w-[80%] right-0 bg-white z-101 px-4 py-5`}
        >
          <div className="flex justify-between text-2xl">
            <h2 className="font-bold text-lg">Menu</h2>
            <div className={`${isMenu ? "translate-x-80" : "translate-x-0"}`}>
              <RxCross2 onClick={toggelMenu} />
            </div>
          </div>

          <div className="flex flex-col gap-5 px-3 py-12">
            <ul className="flex flex-col gap-3 font-semibold">
              <li
                onClick={() => {
                  scrollToSection("aboutus");
                }}
              >
                <Link to="/#aboutus">About Us</Link>
              </li>
              <li
                onClick={() => {
                  scrollToSection("service");
                }}
              >
                <Link to="/#service">Service</Link>
              </li>
              <li
                onClick={() => {
                  scrollToSection("work");
                }}
              >
                <Link to="/#work">Work</Link>
              </li>
              <li
                onClick={() => {
                  scrollToSection("team");
                }}
              >
                <Link to="/#team">Team</Link>
              </li>
              <li
                onClick={() => {
                  scrollToSection("pricing");
                }}
              >
                <Link to="/#pricing">Pricing</Link>
              </li>
              <li
                onClick={() => {
                  scrollToSection("awards");
                }}
              >
                <Link to="/#awards">Awards</Link>
              </li>
              <li
                onClick={() => {
                  scrollToSection("contact");
                }}
              >
                <Link to="/contact">Contact</Link>
              </li>
            </ul>

            <div className="flex flex-col gap-5">
              <button className="bg-white text-black w-full rounded-md text-left border px-5 py-2">
                Sign In
              </button>

              <button className="bg-black text-white w-full rounded-md text-left border px-5 py-2">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
