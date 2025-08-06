import { Link } from "react-router-dom";

const Footer = () => {

function scrollToSection(id) {

    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <footer>
      <div className="max-w-screen-xl m-auto xl:px-20 pb-20 px-4">
        <div className="xl:flex justify-between grid gap-8">
          <div className="xl:w-[32%]">
            <ul className="text-sm flex flex-col gap-5">
              <li>
                <img
                  src="https://www.kartavya.io/images/logo/logo.svg"
                  alt="logo"
                />
              </li>
              <li>
                <p className="text-zinc-600 text-sm">
                  Empowering businesses with innovative solutions. Let's create
                  something amazing together.
                </p>
              </li>
              <li className="flex gap-3">
                <img
                  className="w-4"
                  src="https://www.kartavya.io/images/home/footerSocialIcon/twitter.svg"
                  alt=""
                />
                <img
                  className="w-4"
                  src="https://www.kartavya.io/images/home/footerSocialIcon/linkedin.svg"
                  alt=""
                />
                <img
                  className="w-4"
                  src="https://www.kartavya.io/images/home/footerSocialIcon/dribble.svg"
                  alt=""
                />
                <img
                  className="w-4"
                  src="https://www.kartavya.io/images/home/footerSocialIcon/instagram.svg"
                  alt=""
                />
              </li>
            </ul>
          </div>

          <div className="xl:flex justify-between w-[64%] grid gap-7">
            <ul className="text-sm flex flex-col gap-4 ">
              <li className="font-semibold">Sitemap</li>
              <div className="text-zinc-600 flex flex-col gap-4 ">
                <li><Link to='/contact'>Contact Us</Link></li>
                <li onClick={() => {
                    scrollToSection('aboutus')
                }}><Link to='/#aboutus'>About Us</Link></li>
                <li onClick={() => {
                    scrollToSection('work')
                }}><Link to='/#work'>Work</Link></li>
                <li onClick={() => {
                    scrollToSection('service')
                }}><Link to='/#service'>Service</Link></li>
                <li onClick={() => {
                    scrollToSection('pricing')
                }}><Link to='/#pricing'>Pricing</Link></li>
              </div>
            </ul>

            <ul className="text-sm flex flex-col gap-4">
              <li className="font-semibold">Other Pages</li>
              <div className="text-zinc-600 flex flex-col gap-4">
                <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              </div>
            </ul>

            <ul className="text-sm flex flex-col gap-4">
              <li className="font-semibold">Contact Details</li>
              <div className="text-zinc-600 flex flex-col gap-4">
                <li>
                  71-75 Shelton Street, Covent Garden, <br /> London, United Kingdom.
                </li>
                <li>mail@kartavya.io</li>
                <li>+91 7999994656</li>
              </div>
            </ul>
            {/* </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
