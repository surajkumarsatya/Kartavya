import { BiMinus, BiPlus } from "react-icons/bi";
import FAQCards from "../../components/FAQCards/FAQCards";
import Heading from "../../components/Heading/Heading";

const FAQ = () => {
  return (
    <section>
      <div className="max-w-screen-xl m-auto xl:px-20 xl:py-20">
        <div className="xl:pb-20 w-[40%] m-auto">
          <Heading normal={"Got questions? We've got"} italic={" answers"} />
        </div>
        <div>
          {faq.map((item) => {
            return (
              <FAQCards
                ques={item.ques}
                ans={item.ans}
                plusIcon={<BiPlus />}
                minusIcon={<BiMinus />}
                key={item.id}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

const faq = [
  {
    id: 1,
    ques: "What services does Kartavya offer?",
    ans: "We offer web development, branding, SEO, AI solutions, growth strategies, and go-to-market support for businesses and individuals.",
  },

  {
    id: 2,
    ques: "How long does a typical project take?",
    ans: "Project timelines vary by scope, but most projects take 2–6 weeks from start to finish.",
  },

  {
    id: 3,
    ques: "How is pricing structured at Kartavya?",
    ans: "We offer flexible pricing based on your project needs—hourly, milestone-based, or fixed packages.",
  },

  {
    id: 4,
    ques: "Do you offer ongoing support after project completion?",
    ans: "Yes, we provide continuous support, maintenance, and growth guidance after project delivery.",
  },

  {
    id: 5,
    ques: "Do you offer post-launch support and maintenance services?",
    ans: "Yes, we provide post-launch support to ensure smooth implementation and offer ongoing maintenance packages for clients needing regular updates or technical assistance.",
  },

  {
    id: 6,
    ques: "How often will I receive updates on my project?",
    ans: "You’ll receive regular updates—usually weekly or as agreed—along with full transparency throughout the process.",
  },
];
