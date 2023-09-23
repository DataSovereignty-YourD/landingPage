import { AnimatePresence, motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import Footer from "./footer";

const BASE_TRANSITION = { ease: "anticipate", duration: 0.75 };
const COMMON_CLASSES = {
  formBgColor: "bg-yellow-200",
  inputBgColor: "bg-yellow-400",
  placeholderColor: "placeholder-black/70",
  transitionDuration: "duration-[750ms]",
};

const ContactUs = () => {
  const [selected, setSelected] = useState("individual");
  return (
    <div className="flex flex-col min-h-screen pt-24">
      <section className="flex-grow flex items-center justify-center z-[30]">
        <div className="z-[50] w-full max-w-xl mx-auto my-auto shadow-lg flex flex-col-reverse lg:flex-row rounded-lg overflow-hidden">
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
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const countryRef = useRef(null);
  const emailRef = useRef(null);
  const companyRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit = () => {
    console.log("First Name:", firstNameRef.current?.value);
    console.log("Last Name:", lastNameRef.current?.value);
    console.log("Country:", countryRef.current?.value);
    console.log("Email Address:", emailRef.current?.value);
    if (selected === "company") {
      console.log("Company Name:", companyRef.current?.value);
    }
    console.log("Message:", messageRef.current?.value);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      className={`p-8 w-full text-black transition-colors ${COMMON_CLASSES.transitionDuration} ${COMMON_CLASSES.formBgColor}`}
    >
      <h3 className="text-4xl font-bold mb-6">Contact us</h3>
      {[
        {
          label: "Hi 👋! My name is...",
          type: "text",
          placeholder: ["First Name", "Last Name"],
          isDouble: true,
          refs: [firstNameRef, lastNameRef],
        },
        {
          label: "Country *",
          type: "text",
          placeholder: "Your Country",
          ref: countryRef,
        },
        {
          label: "Email Address *",
          type: "email",
          placeholder: "Your Email Address",
          ref: emailRef,
        },
      ].map((field, idx) => (
        <FormField
          key={idx}
          label={field.label}
          type={field.type}
          placeholder={field.placeholder}
          isDouble={field.isDouble}
          refs={field.refs}
          inputRef={field.ref} // 'inputRef' 속성을 사용하여 참조를 전달합니다.
          selected={selected}
        />
      ))}

      <div className="mb-6">
        <p className="font-semibold text-xl mb-2">and I represent...</p>
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
            <p className="font-semibold text-xl mb-2">by the name of...</p>
            <input
              type="text"
              placeholder="Your company name"
              className={`transition-colors ${COMMON_CLASSES.transitionDuration} ${COMMON_CLASSES.placeholderColor} ${COMMON_CLASSES.inputBgColor} p-2 rounded-md w-full focus:outline-0`}
              ref={companyRef}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mb-6">
        <p className="font-semibold text-xl mb-2">I'd love to ask about...</p>
        <textarea
          ref={messageRef}
          placeholder="Whatever your heart desires :)"
          className={`transition-colors ${COMMON_CLASSES.transitionDuration} ${COMMON_CLASSES.placeholderColor} ${COMMON_CLASSES.inputBgColor} min-h-[150px] resize-none p-2 rounded-md w-full focus:outline-0`}
        />
      </div>

      <motion.button
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        type="submit"
        className={`transition-colors ${COMMON_CLASSES.transitionDuration} text-lg text-center rounded-lg w-full py-3 font-semibold bg-black text-yellow-400`}
      >
        Submit
      </motion.button>
    </form>
  );
};

const FormField = ({ label, type, placeholder, isDouble, refs, inputRef }) => {
  return (
    <div className="mb-6">
      <p className="font-semibold text-xl mb-2">{label}</p>
      <div className="flex flex-row gap-4">
        {(Array.isArray(placeholder) ? placeholder : [placeholder]).map(
          (ph, index) => (
            <input
              key={index}
              type={type}
              placeholder={ph}
              className={`transition-colors ${
                COMMON_CLASSES.transitionDuration
              } ${COMMON_CLASSES.placeholderColor} ${
                COMMON_CLASSES.inputBgColor
              } p-2 rounded-md w-full focus:outline-0 ${
                isDouble ? "w-full" : ""
              }`}
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
    <div className="border-[1px] rounded border-black overflow-hidden font-medium w-fit">
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
      className={`text-sm px-3 py-1.5 transition-colors ${
        COMMON_CLASSES.transitionDuration
      } relative ${selected === type ? "text-yellow-200" : "text-black"}`}
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
