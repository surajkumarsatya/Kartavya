import Hero from "../../sections/Hero/Hero";
import Stats from "../../sections/Stats/Stats";
import Navbar from "../../components/Navbar/Navbar";
import Offers from "../../sections/Offers/Offers";
import Works from "../../sections/Works/Works"
import TeamMembers from "../../sections/TeamMenbers/TeamMembers";
import Customers from "../../sections/Customers/Customers";
import Pricing from "../../sections/Pricing/Pricing"
import FAQs from "../../sections/FAQ/FAQ";
import Awards from "../../sections/Awards/Awards"
import CTA from "../../sections/CTA/CTA";
import Footer from "../../sections/Footer/Footer"


const Home = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      <Stats />
      <Offers />
      <Works />
      <TeamMembers />
      <Customers />
      <Pricing />
      <FAQs />
      <Awards />
      <CTA />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
