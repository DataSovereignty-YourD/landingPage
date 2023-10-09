import { AnimatePresence, motion } from "framer-motion";
import { useState, useRef } from "react";
import Footer from "./footer";

const BASE_TRANSITION = { ease: "anticipate", duration: 0.75 };
const COMMON_CLASSES = {
  formBgColor: "bg-transparent",
  inputBgColor: "bg-slate-100",
  placeholderColor: "placeholder-black/70",
  transitionDuration: "duration-[750ms]",
};

const ContactUs = () => {
  const [selected, setSelected] = useState("individual");

  return (
    <div className="flex flex-col min-h-screen pt-16 sm:pt-24">
      <section className="flex-grow flex items-center justify-center z-[30] mb-24">
        <div className="z-[50] w-full max-w-xl mx-auto my-auto backdrop-blur-sm shadow-lg flex flex-col-reverse lg:flex-row rounded-lg overflow-hidden">
          <Form selected={selected} setSelected={setSelected} />
        </div>
      </section>
      <div className="bottom-0">
        <Footer />
      </div>
    </div>
  );
};

const Form = ({ selected, setSelected }) => {
  const formRefs = {
    firstName: useRef(null),
    lastName: useRef(null),
    country: useRef(null),
    email: useRef(null),
    company: useRef(null),
    message: useRef(null),
  };
  const handleSubmit = () => {
    const formData = Object.entries(formRefs).reduce((acc, [key, ref]) => {
      acc[key] = ref.current?.value;
      return acc;
    }, {});

    const subject = encodeURIComponent("YourD ContactUs Submission");

    let bodyContent = `Name: ${formData.firstName} ${formData.lastName}\nCountry: ${formData.country}\nEmail: ${formData.email}\n`;

    if (selected === "company") {
      bodyContent += `Type: Company\nCompany: ${formData.company}\n`;
    } else {
      bodyContent += `Type: Individual\n`;
    }

    bodyContent += `Message: ${formData.message}`;

    const body = encodeURIComponent(bodyContent);

    const mailtoLink = `mailto:0xcatbox@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      className={`p-8 w-full text-black transition-colors ${COMMON_CLASSES.transitionDuration} ${COMMON_CLASSES.formBgColor}`}
    >
      <h3 className="text-4xl font-pre-bold mb-6">Contact us</h3>
      {[
        {
          label: "Hi 👋! My name is...",
          type: "text",
          placeholder: ["First Name", "Last Name"],
          refs: [formRefs.firstName, formRefs.lastName],
        },
        {
          label: "Country (selection)",
          type: "text",
          placeholder: "Your Country",
          ref: formRefs.country,
        },
        {
          label: "Email Address ",
          type: "email",
          placeholder: "Email address to receive replies",
          ref: formRefs.email,
        },
      ].map((field, idx) => (
        <FormField
          key={idx}
          label={field.label}
          type={field.type}
          placeholder={field.placeholder}
          refs={field.refs}
          inputRef={field.ref}
        />
      ))}
      <div className="mb-6">
        <p className="font-pre-semibold text-xl mb-2">and I represent...</p>
        <FormSelect selected={selected} setSelected={setSelected} />
      </div>
      <AnimatePresence>
        {selected === "company" && (
          <motion.div
            initial={{ marginTop: -104, opacity: 0 }}
            animate={{ marginTop: 0, opacity: 1 }}
            exit={{ marginTop: -104, opacity: 0 }}
            transition={BASE_TRANSITION}
            className="mb-6"
          >
            <p className="font-pre-semibold text-xl mb-2">by the name of...</p>
            <input
              type="text"
              placeholder="Your company name"
              className={`transition-colors ${COMMON_CLASSES.transitionDuration} ${COMMON_CLASSES.placeholderColor} ${COMMON_CLASSES.inputBgColor} p-2 rounded-md w-full focus:outline-0`}
              ref={formRefs.company}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="mb-6">
        <p className="font-pre-semibold text-xl mb-2">
          I'd love to ask about...
        </p>
        <textarea
          ref={formRefs.message}
          placeholder="Whatever you want to ask"
          className={`transition-colors ${COMMON_CLASSES.transitionDuration} ${COMMON_CLASSES.placeholderColor} ${COMMON_CLASSES.inputBgColor} min-h-[150px] resize-none p-2 rounded-md w-full focus:outline-0`}
        />
      </div>
      <motion.button
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        type="submit"
        className={`transition-colors ${COMMON_CLASSES.transitionDuration} text-lg text-center rounded-lg w-full py-3 font-pre-semibold bg-black text-[#fccc00]`}
      >
        Submit
      </motion.button>
    </form>
  );
};

const FormField = ({ label, type, placeholder, refs, inputRef }) => {
  return (
    <div className="mb-6">
      <p className="font-pre-semibold text-xl mb-2">{label}</p>
      <div className="flex flex-row gap-4">
        {(Array.isArray(placeholder) ? placeholder : [placeholder]).map(
          (ph, index) => (
            <input
              key={index}
              type={type}
              placeholder={ph}
              className={`transition-colors ${COMMON_CLASSES.transitionDuration} ${COMMON_CLASSES.placeholderColor} ${COMMON_CLASSES.inputBgColor} p-2 rounded-md w-full focus:outline-0`}
              ref={refs ? refs[index] : inputRef}
            />
          )
        )}
      </div>
    </div>
  );
};

const FormSelect = ({ selected, setSelected }) => {
  return (
    <div className="border-[1px] rounded border-gray-200 overflow-hidden font-medium w-fit">
      {["individual", "company"].map((type) => (
        <SelectButton
          key={type}
          type={type}
          selected={selected}
          setSelected={setSelected}
        />
      ))}
    </div>
  );
};

const SelectButton = ({ type, selected, setSelected }) => {
  const text = type === "individual" ? "An individual" : "A company";
  return (
    <button
      type="button"
      className={`text-sm px-3 py-1.5 transition-colors ${
        COMMON_CLASSES.transitionDuration
      } relative ${selected === type ? "text-[#fccc00]" : "text-black"}`}
      onClick={() => setSelected(type)}
    >
      <span className="relative z-10">{text}</span>
      {selected === type && (
        <motion.div
          transition={BASE_TRANSITION}
          layoutId="form-tab"
          className="absolute inset-0 bg-black z-0"
        />
      )}
    </button>
  );
};

export default ContactUs;
