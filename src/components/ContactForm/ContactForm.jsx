import { BsArrowUpRightCircleFill } from "react-icons/bs";
import Button from "../Button/Button";
import Heading from "../Heading/Heading";
import { Formik, Form, Field } from "formik";
import { ContactFormValidation } from "./ContactFormValidatoin";
import { useState } from "react";

const initialValues = {
  firstname: "",
  lastname: "",
  email: "",
  number: "",
  message: "",
};

const submitForm = (values) => {
  console.log("Form submitted:", values);
};

const ContactForm = () => {
  //   const { values, handleBlur, handleChange, handleSubmit, errors } = useFormik({
  //     initialValues: initialValues,
  //     validationSchema: ContactFormValidation,
  //     onSubmit: (values) => {
  //       console.log(values);
  //     },
  //   });

  //   console.log(formik);


  const [isHovered, setIsHovered] = useState(false);

  function onMouseEnter() {
    {
      isHovered ? setIsHovered(false) : setIsHovered(true);
    }
  }

  function onMouseLeave() {
    {
      isHovered ? setIsHovered(false) : setIsHovered(true);
    }
  }

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

        <div className="flex items-center justify-center w-full max-w-screen-xl m-auto xl:px-20 xl:pb-20">
          <div className="w-full p-8 space-y-8 bg-white rounded-3xl shadow-xl">
            <Formik
              initialValues={initialValues}
              validationSchema={ContactFormValidation}
              onSubmit={submitForm}
            >
              {({ errors }) => (
                <Form
                  action=""
                  className="grid grid-cols-1 gap-y-6 gap-x-8 md:grid-cols-2"
                >
                  <div>
                    <label
                      htmlFor="firstname"
                      className="block mb-2 text-sm font-medium text-gray-700"
                    >
                      First Name *
                    </label>

                    <Field
                      type="text"
                      name="firstname"
                      className="block w-full px-4 py-3 text-gray-800 placeholder-gray-400 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    ></Field>

                    {errors.firstname && (
                      <small className="capitalize text-red-500">
                        {errors.firstname}
                      </small>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="lastname"
                      className="block mb-2 text-sm font-medium text-gray-700"
                    >
                      Last Name *
                    </label>

                    <Field
                      type="text"
                      name="lastname"
                      className="block w-full px-4 py-3 text-gray-800 placeholder-gray-400 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    ></Field>

                    {errors.lastname && (
                      <small className="capitalize text-red-500">
                        {errors.lastname}
                      </small>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-700"
                    >
                      Email *
                    </label>

                    <Field
                      type="email"
                      name="email"
                      className="block w-full px-4 py-3 text-gray-800 placeholder-gray-400 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    ></Field>

                    {errors.email && (
                      <small className="capitalize text-red-500">
                        {errors.email}
                      </small>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="number"
                      className="block mb-2 text-sm font-medium text-gray-700"
                    >
                      Phone Number
                    </label>

                    <Field
                      type="tel"
                      name="number"
                      className="block w-full px-4 py-3 text-gray-800 placeholder-gray-400 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    ></Field>
                  </div>

                  <div className="md:col-span-2">
                    <label
                      htmlFor="message"
                      className="block mb-2 text-sm font-medium text-gray-700"
                    >
                      Message *
                    </label>
                
                    <Field
                      as="textarea"
                      rows="5"
                      name="message"
                      className="block w-full px-4 py-3 text-gray-800 placeholder-gray-400 bg-white border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    ></Field>

                    {errors.message && (
                      <small className="capitalize text-red-500">
                        {errors.message}
                      </small>
                    )}
                  </div>

                  <button
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    type="submit"
                    className={`bg-black text-white w-fit border-1 px-4 py-2 gap-8 
                        rounded-full flex items-center hover:cursor-pointer`}
                  >
                    <span
                      className={`${
                        isHovered ? "translate-x-15" : ""
                      } transition-transform duration-300`}
                    >
                      Let's Collaborate
                    </span>
                    <span
                      className={`${
                        isHovered ? "-translate-x-38" : ""
                      } transition-transform duration-300 text-3xl`}
                    >
                      <BsArrowUpRightCircleFill />
                    </span>
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
