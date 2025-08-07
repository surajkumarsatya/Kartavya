import { useState } from "react";
import AuthButtons from "../AuthButtons/AuthButtons";
import { HashLink as Link } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { isActive, toggleMenu } from "../../utils/ActiveNavbar/ActiveNavbar";
import { navLinks } from "../../constants/NavbarLinks/NavbarLinks"

const Navbar = () => {
  const [isMenu, setIsMenu] = useState(true);
  const location = useLocation();

  return (
    <nav>

       {/* 
        1. Nav Link -- scroll -- DONE
        2. Login and Signin pages -- pending
        3. Contact Form -- submit fix -- DONE
        4. Error Page -- create -- DONE
        5. Contact form is not highlighting when going through by clicking the button -- DONE
        6. Structure the logic of Navbar and Button component into 'utils' folder for better code reading -- pending -- DONE
    */}


      {/* Desktop Navbar */}
      <div className="hidden xl:block">
        <div className="relative z-100 flex justify-center">
          <div className="fixed flex items-center justify-between bg-white shadow-xl w-[90%] mt-3 rounded-full lg:py-0 xl:py-2 xl:px-4 max-w-screen-xl m-auto">
            <div className="flex justify-between items-center w-full">
              {/* Logo */}
              <Link smooth to="/#hero">
                <img src="https://www.kartavya.io/images/logo/logo.svg" alt="logo" />
              </Link>

              {/* Nav Links */}
              <ul className="flex items-center justify-between gap-1 bg-zinc-200 rounded-full text-zinc-600 text-sm font-semibold px-2 py-1">
                {navLinks.map((link) => (
                  <li
                    key={link.name}
                    className={`${
                      isActive(link.path, location)
                        ? "bg-white px-3 py-1 rounded-full text-black"
                        : ""
                    } hover:bg-white px-4 py-2 rounded-full hover:text-black`}
                  >
                    <Link smooth to={link.path}>{link.name}</Link>
                  </li>
                ))}
              </ul>

              {/* Auth Buttons */}
              <div className="xl:flex gap-2">
                <AuthButtons label="Sign In" bgColor="bg-white" textColor="text-black" />
                <AuthButtons label="Sign Up" bgColor="bg-black" textColor="text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navbar Toggle */}
      <div className="block xl:hidden">
        <div className="relative z-100 flex justify-center">
          <div className="fixed flex justify-between bg-white shadow-xl w-[90%] mt-3 rounded-full lg:py-0 xl:py-2 xl:px-4 max-w-screen-xl m-auto">
            <div className="flex items-center justify-between px-3 py-1 w-full">
              <Link smooth to="/#hero">
                <img src="https://www.kartavya.io/images/logo/logo.svg" alt="logo" />
              </Link>
              <div className="text-xl">
                <RxHamburgerMenu onClick={() => toggleMenu(setIsMenu)} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div className="block xl:hidden">
        <div
          className={`${
            isMenu ? "translate-x-150" : "translate-x-0"
          } transition-all duration-300 fixed border h-[100%] w-[80%] right-0 bg-white z-101 px-4 py-5`}
        >
          <div className="flex justify-between text-2xl">
            <h2 className="font-bold text-lg">Menu</h2>
            <RxCross2 onClick={() => toggleMenu(setIsMenu)} />
          </div>

          <div className="flex flex-col gap-5 px-3 py-12">
            <ul className="flex flex-col gap-3 font-semibold">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link smooth to={link.path} onClick={() => toggleMenu(setIsMenu)}>
                    {link.name}
                  </Link>
                </li>
              ))}
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
