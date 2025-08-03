import { useState } from "react";
import AuthButtons from "../AuthButtons/AuthButtons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('');

  function handleNav(nav) {
    setActiveNav(nav);
  }

  function isActive(navItem){
    return (activeNav === navItem)
  }

  return (
    <nav className="">
      <div className="relative z-100 flex justify-center ">
        <div
          className="fixed flex items-center justify-between bg-white shadow-xl w-[90%] mt-3 rounded-full 
        lg:py-0 xl:py-2 xl:px-4 max-w-screen-xl m-auto"
        >
          <div>
            <a href="/">
              <img
              src="https://www.kartavya.io/images/logo/logo.svg"
              alt="logo"
            />
            </a>
          </div>
          <div>
          
            <ul className="flex items-center justify-between gap-1 bg-zinc-200 rounded-full 
            text-zinc-600 text-sm font-semibold px-2 py-1 ">
              <li
               onClick = {() => {handleNav('aboutus')}}
                className={`${isActive('aboutus')
                  ? "bg-white px-3 py-1 rounded-full text-black" : ""
                } hover:bg-white px-4 py-2 rounded-full hover:text-black `}
              >
                <a href="/#aboutus">About Us</a>
              </li>

              <li
                 onClick = {() => {handleNav('services')}}
                className={`${isActive('services')
                  ? "bg-white px-3 py-1 rounded-full text-black" : ""
                } hover:bg-white px-4 py-2 rounded-full hover:text-black `}
              >
                <a href="/#service">
                  Services
                </a>
              </li>
              <li
                onClick = {() => {handleNav('work')}}
                className={`${isActive('work')
                 ? "bg-white px-3 py-1 rounded-full text-black" : "bg-zinc-200"
                } hover:bg-white px-4 py-2 rounded-full hover:text-black`}
              >
                <a href="/#work">Work</a>
              </li>
              <li
                 onClick = {() => {handleNav('team')}}
                className={`${isActive('team')
                   ? "bg-white px-3 py-1 rounded-full text-black" : ""
                } hover:bg-white px-4 py-2 rounded-full hover:text-black`}
              >
                <a href="/#team">Team</a>
              </li>
              <li
                 onClick = {() => {handleNav('pricing')}}
                className={`${isActive('pricing')
                  ? "bg-white px-3 py-1 rounded-full text-black" : ""
                } hover:bg-white px-4 py-2 rounded-full hover:text-black`}
              >
                <a href="/#pricing">Pricing</a>
              </li>
              <li
                onClick = {() => {handleNav('awards')}}
                className={`${isActive('awards')
                   ? "bg-white px-3 py-1 rounded-full text-black" : ""
                } hover:bg-white px-4 py-2 rounded-full hover:text-black`}
              >
                <a href="/#awards">Awards</a>
              </li>
              <li
                onClick = {() => {handleNav('contact')}}
                className={`${isActive('contact')
                   ? "bg-white px-3 py-1 rounded-full text-black" : ""
                } hover:bg-white px-4 py-2 rounded-full hover:text-black`}
              >
                <Link to="/contact">Contact</Link>
              </li>
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
