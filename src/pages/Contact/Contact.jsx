import ContactForm from "../../components/ContactForm/ContactForm";
import FAQ from "../../sections/FAQ/FAQ";

const Contact = () => {
  return (
    <section>
      <div className="max-w-screen-xl m-auto">
        <ContactForm />
      </div>
      <div className="pb-20">
        <FAQ />
      </div>
    </section>
  );
};

export default Contact;
