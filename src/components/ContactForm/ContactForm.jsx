import { BsArrowUpRightCircleFill } from "react-icons/bs";
import Button from "../Button/Button";
import Heading from "../Heading/Heading";

const ContactForm = () => {
  return (
    <div
      className="relative rounded-full h-full top-20 w-full bg-[linear-gradient(90deg,#CDEFFB_0%,#FFFFFF_33.23%,#FFFFFF_65.77%,#FDEECB_100%)] 
        before:top-0"
    >
      <div className="absolute bg-transparent backdrop-blur-[70px] w-full h-full"></div>
      <div className="relative flex flex-col h-fit items-center justify-center px-4 py-20 xl:p-0">
        <div className="m-auto pb-10 xl:w-[40%] p-2">
          <Heading normal={"Love to hear from you, Get in"} italic={" touch"} />
        </div>

        <div class="flex items-center justify-center w-full max-w-screen-xl m-auto xl:px-20 xl:pb-20">
          <div class="w-full p-8 space-y-8 bg-white rounded-3xl shadow-xl">
            <form
              action="#"
              class="grid grid-cols-1 gap-y-6 gap-x-8 md:grid-cols-2"
            >
              <div>
                <label
                  for="name"
                  class="block mb-2 text-sm font-medium text-gray-700"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  class="block w-full px-4 py-3 text-gray-800 placeholder-gray-400 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></input>
              </div>

              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-700"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  class="block w-full px-4 py-3 text-gray-800 placeholder-gray-400 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></input>
              </div>

              <div>
                <label
                  for="interest"
                  class="block mb-2 text-sm font-medium text-gray-700"
                >
                  What are you interested in?
                </label>
                <div class="relative">
                  <select
                    id="interest"
                    name="interest"
                    class="block w-full px-4 py-3 text-gray-800 bg-white border border-gray-300 rounded-full appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option>Web Development</option>
                    <option>UI/UX Design</option>
                    <option>Mobile App Development</option>
                    <option>Branding</option>
                  </select>
                  <div class="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                    <svg
                      class="w-5 h-5 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <label
                  for="budget"
                  class="block mb-2 text-sm font-medium text-gray-700"
                >
                  Project budget
                </label>
                <div class="relative">
                  <select
                    id="budget"
                    name="budget"
                    class="block w-full px-4 py-3 text-gray-500 bg-white border border-gray-300 rounded-full appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option disabled selected>
                      Select your budget
                    </option>
                    <option class="text-gray-800" value="<5k">
                      &lt; $5,000
                    </option>
                    <option class="text-gray-800" value="5k-10k">
                      $5,000 - $10,000
                    </option>
                    <option class="text-gray-800" value="10k-20k">
                      $10,000 - $20,000
                    </option>
                    <option class="text-gray-800" value=">20k">
                      &gt; $20,000
                    </option>
                  </select>
                  <div class="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                    <svg
                      class="w-5 h-5 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div class="md:col-span-2">
                <label
                  for="message"
                  class="block mb-2 text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Let us know about your project."
                  class="block w-full px-4 py-3 text-gray-800 placeholder-gray-400 bg-white border border-gray-300 rounded-xl resize-y focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
              </div>

              <Button
                color={"bg-black"}
                label={`Let's Collaborate`}
                fontColor={"text-white"}
                icon={<BsArrowUpRightCircleFill />}
                translateLabel={"translate-x-15"}
                translateIcon={"-translate-x-38"}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
