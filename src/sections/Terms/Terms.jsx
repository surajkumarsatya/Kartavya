import Heading from "../../components/Heading/Heading";

const Terms = () => {
  return (
    <div
      className="relative rounded-full top-20 w-full 
      bg-[linear-gradient(90deg,#CDEFFB_0%,#FFFFFF_33.23%,#FFFFFF_65.77%,#FDEECB_100%)] before:top-0"
    >
      <div className="absolute bg-transparent backdrop-blur-[70px] w-full h-full"></div>
      <div className="relative flex flex-col h-fit items-center justify-center 
    lg:mb-20 max-w-screen-xl m-auto lg:px-20 lg:py-20 px-4 py-20">
        <div className="pb-5 lg:pb-5">
          <Heading normal={"Terms & Conditions"} italic={""} />
        </div>

        <div className="bg-white px-8 py-8">
          <p className="pb-7">
            Welcome to Kartavya. These terms and conditions outline the rules
            and regulations for the use of Kartavya's Website, located at
            kartavya.io.
          </p>
          <p className="pb-7">
            By accessing this website, we assume you accept these terms and
            conditions. Do not continue to use Kartavya if you do not agree to
            take all of the terms and conditions stated on this page.
          </p>

          <h2 className="text-md font-semibold pb-4">1. Definitions</h2>
          <p className="pb-7">
            When we say "Company" (or "we" or "us" or "our"), we are referring
            to Kartavya. When we say "Services", we are referring to the digital
            marketing, web design, and consulting services offered by Kartavya.
            When we say "you" or "your" or "Client", we are referring to the
            person or entity that is using our Services.
          </p>

          <h2 className="text-md font-semibold pb-4">2. Use License</h2>
          <p className="pb-4">
            Permission is granted to temporarily download one copy of the
            materials on Kartavya's website for personal, non-commercial
            transitory viewing only. This is the grant of a license, not a
            transfer of title, and under this license you may not:
          </p>
          <ul className="list-disc pl-6 pb-7">
            <li>modify or copy the materials</li>
            <li>
              use the materials for any commercial purpose or for any public
              display
            </li>
            <li>
              attempt to reverse engineer any software contained on the website
            </li>
            <li>
              remove any copyright or other proprietary notations from the
              materials
            </li>
          </ul>

          <h2 className="text-md font-semibold pb-4">3. Services</h2>
          <p className="pb-7">
            Kartavya provides digital marketing services, web design and
            development, consulting, and related services. All services are
            provided on a project basis or as ongoing retainer agreements as
            specified in individual service agreements.
          </p>

          <h2 className="text-md font-semibold pb-4">4. Payment Terms</h2>
          <p className="pb-4">
            Payment terms are specified in individual service agreements.
            Generally, we require:
          </p>
          <ul className="list-disc pl-6 pb-7">
            <li>50% deposit before work begins</li>
            <li>Final payment due within 30 days of project completion</li>
            <li>Monthly retainer payments due on the 1st of each month</li>
          </ul>

          <h2 className="text-md font-semibold pb-4">
            5. Intellectual Property
          </h2>
          <p className="pb-4">
            Upon full payment, clients will own the final deliverables created
            specifically for their project. However, Kartavya retains ownership
            of:
          </p>
          <ul className="list-disc pl-6 pb-7">
            <li>Pre-existing intellectual property and methodologies</li>
            <li>General knowledge and techniques developed</li>
            <li>Templates and frameworks not specifically customized</li>
          </ul>

          <h2 className="text-md font-semibold pb-4">
            6. Limitation of Liability
          </h2>
          <p className="pb-7">
            In no event shall Kartavya or its suppliers be liable for any
            damages (including, without limitation, damages for loss of data or
            profit, or due to business interruption) arising out of the use or
            inability to use our services, even if Kartavya or a Kartavya
            authorized representative has been notified orally or in writing of
            the possibility of such damage.
          </p>

          <h2 className="text-md font-semibold pb-4">7. Governing Law</h2>
          <p className="pb-7">
            These terms and conditions are governed by and construed in
            accordance with the laws of India and you irrevocably submit to the
            exclusive jurisdiction of the courts in that State or location.
          </p>

          <h2 className="text-md font-semibold pb-4">8. Changes to Terms</h2>
          <p className="pb-7">
            Kartavya reserves the right to revise these terms and conditions at
            any time. By using this website, you are agreeing to be bound by the
            current version of these terms and conditions.
          </p>

          <h2 className="text-md font-semibold pb-4">9. Contact Information</h2>
          <p className="pb-4">
            If you have any questions about these Terms and Conditions, please
            contact us at:
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

export default Terms;
