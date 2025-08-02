const Footer = () => {
  return (
    <footer>
      <div className="max-w-screen-xl m-auto xl:px-20 xl:py-20 ">
        <div className="flex justify-between">
          <div className="w-[32%]">
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

          <div className="flex justify-between w-[64%]">
            <ul className="text-sm flex flex-col gap-2">
              <li className="font-semibold">Sitemap</li>
              <div className="text-zinc-600 flex flex-col gap-2">
                <li>Contact Us</li>
                <li>About Us</li>
                <li>Work</li>
                <li>Service</li>
                <li>Pricing</li>
              </div>
            </ul>

            <ul className="text-sm flex flex-col gap-2">
              <li className="font-semibold">Other Pages</li>
              <div className="text-zinc-600 flex flex-col gap-2">
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </div>
            </ul>

            <ul className="text-sm flex flex-col gap-2">
              <li className="font-semibold">Contact Details</li>
              <div className="text-zinc-600 flex flex-col gap-2">
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
