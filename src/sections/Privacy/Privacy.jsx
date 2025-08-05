import Heading from "../../components/Heading/Heading";

const Privacy = () => {
  return (
       <div
      className="relative rounded-full top-20 w-full 
      bg-[linear-gradient(90deg,#CDEFFB_0%,#FFFFFF_33.23%,#FFFFFF_65.77%,#FDEECB_100%)] before:top-0"
    >
      <div className="absolute bg-transparent backdrop-blur-[70px] w-full h-full"></div>
      <div className="relative flex flex-col h-fit items-center justify-center 
       xl:mb-20 max-w-screen-xl m-auto xl:px-20 xl:py-20 px-4 py-20">
        <div className="pb-5 xl:pb-5">
          <Heading normal={"Privacy Policy"} italic={""} />
        </div>

        <div className="bg-white px-8 py-8">
          <p className="pb-7">
            This Privacy Policy explains how Kartavya ("we", "us", or "our") collects, uses, discloses, and safeguards your information when you visit our website kartavya.io or use our services.
          </p>

          <h2 className="text-md font-semibold pb-4">1. Information We Collect</h2>
          <p className="pb-7">
           We may collect information about you in a variety of ways. The information we may collect includes:
          </p>

          <h2 className="text-md font-semibold pb-4">2. How We Use Your Information</h2>
          <p className="pb-4">
            We may use information collected about you via our website to:
          </p>
          <ul className="list-disc pl-6 pb-7">
            <li>mCreate and manage your account</li>
            <li>
              Deliver targeted advertising, newsletters, and other information
            </li>
            <li>
              Email you regarding your account or order
            </li>
            <li>
              Generate a personal profile about you to make future visits more personalized
            </li>
            <li>
              Increase the efficiency and operation of our website
            </li>
            <li>
              Monitor and analyze usage and trends to improve your experience
            </li>
            <li>
              Offer new products, services, and/or recommendations
            </li>
          </ul>

          <h2 className="text-md font-semibold pb-4">3. Disclosure of Your Information</h2>
          <p className="pb-4">
            We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
          </p>
          <ul className="list-disc pl-6 pb-7">
            <li><span className="font-semibold">By Law or to Protect Rights: </span>If we believe disclosure is necessary to comply with the law or protect our rights</li>
            <li><span className="font-semibold">Business Transfers: </span>We may share or transfer your information in connection with any merger, sale of assets, or acquisition</li>
            <li><span className="font-semibold">With Your Consent: </span>We may disclose your personal information for any other purpose with your consent</li>
          </ul>

          <h2 className="text-md font-semibold pb-4">4. Security of Your Information</h2>
          <p className="pb-7">
            We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.
          </p>

          <h2 className="text-md font-semibold pb-4">
            5. Policy for Children
          </h2>
          <p className="pb-7">
            We do not knowingly solicit information from or market to children under the age of 13. If we learn that we have collected personal information from a child under age 13 without verification of parental consent, we will delete that information as quickly as possible.
          </p>

          <h2 className="text-md font-semibold pb-4">
            6. Controls for Do-Not-Track Features
          </h2>
          <p className="pb-7">
            Most web browsers and some mobile operating systems include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference. We currently do not respond to DNT browser signals or mechanisms.
          </p>

          <h2 className="text-md font-semibold pb-4">7. Your Rights</h2>
          <p className="pb-4">
            You have the right to:
          </p>
           <ul className="list-disc pl-6 pb-7">
            <li>Access the personal information we hold about you</li>
            <li>
              Request correction of inaccurate personal information
            </li>
            <li>
              Request deletion of your personal information 
            </li>
            <li>
              Object to our processing of your personal information
            </li>
            <li>
              Request restriction of processing of your personal information
            </li>
          </ul>



          <h2 className="text-md font-semibold pb-4">8. Changes to This Privacy Policy</h2>
          <p className="pb-7">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
          </p>

          <h2 className="text-md font-semibold pb-4">9. Contact Us</h2>
          <p className="pb-4">
            If you have questions or comments about this Privacy Policy, please contact us at:
          </p>
          <p className="">Email: mail@kartavya.io</p>
          <p className="pb-7">
            Address: 71-75 Shelton Street, Covent Garden, London, United
            Kingdom.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
