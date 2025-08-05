import ContactForm from "../../components/ContactForm/ContactForm";
import FAQ from "../../sections/FAQ/FAQ";

const Contact = () => {
  return (
    <section>
      <div className="max-w-screen-xl m-auto">
        <ContactForm />
      </div>
      <FAQ />
    </section>
  );
};

export default Contact;
