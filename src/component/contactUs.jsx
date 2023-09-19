import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import EarthCanvas from "./canvas/earth";

const ContactUs = () => {
  const [selected, setSelected] = useState("individual");
  return (
    <section className="p-4 bg-transparent">
      <div className="w-full max-w-xl mx-auto my-auto shadow-lg flex flex-col-reverse lg:flex-row rounded-lg overflow-hidden">
        <Form selected={selected} setSelected={setSelected} />

        {/* <Images selected={selected} /> */}
      </div>
    </section>
  );
};

const Form = ({ selected, setSelected }) => {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className={`p-8 w-full text-black transition-colors duration-[750ms] ${
        selected === "company" ? "bg-yellow-400" : "bg-yellow-400"
      }`}
    >
      <h3 className="text-4xl font-bold mb-6">Contact us</h3>

      {/* Name input */}
      <div className="mb-6">
        <p className="font-semibold text-xl mb-2">Hi 👋! My name is...</p>
        <div className="flex flex-row gap-1">
          <input
            type="text"
            placeholder="First Name..."
            className={`${
              selected === "company" ? "bg-yellow-500" : "bg-yellow-500"
            } transition-colors duration-[750ms] placeholder-black/70 p-2 rounded-md w-full focus:outline-0`}
          />
          <input
            type="text"
            placeholder="Last name..."
            className={`${
              selected === "company" ? "bg-yellow-500" : "bg-yellow-500"
            } transition-colors duration-[750ms] placeholder-black/70 p-2 rounded-md w-full focus:outline-0`}
          />
        </div>
      </div>
      <div className="mb-6">
        <p className=" font-semibold text-xl mb-2">Email Address *</p>

        <input
          type="text"
          placeholder="Your Email Address..."
          className={`${
            selected === "company" ? "bg-yellow-500" : "bg-yellow-500"
          } transition-colors duration-[750ms] placeholder-black/70 p-2 rounded-md w-full focus:outline-0`}
        />
      </div>

      {/* Company/individual toggle */}
      <div className="mb-6">
        <p className="font-semibold text-xl mb-2">and I represent...</p>
        <FormSelect selected={selected} setSelected={setSelected} />
      </div>

      {/* Company name */}
      <AnimatePresence>
        {selected === "company" && (
          <motion.div
            initial={{
              // 104 === height of element + margin
              // Alternatively can use mode='popLayout' on AnimatePresence
              // and add the "layout" prop to relevant elements to reduce
              // distortion
              marginTop: -104,
              opacity: 0,
            }}
            animate={{
              marginTop: 0,
              opacity: 1,
            }}
            exit={{
              marginTop: -104,
              opacity: 0,
            }}
            transition={BASE_TRANSITION}
            className="mb-6"
          >
            <p className="font-semibold text-xl mb-2">by the name of...</p>
            <input
              type="text"
              placeholder="Your company name..."
              className={`${
                selected === "company" ? "bg-yellow-500" : "bg-yellow-500"
              } transition-colors duration-[750ms] placeholder-black/70 p-2 rounded-md w-full focus:outline-0`}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="mb-6">
        <p className="font-semibold text-xl mb-2">Email Address *</p>

        <input
          type="text"
          placeholder="Your Email Address..."
          className={`${
            selected === "company" ? "bg-yellow-500" : "bg-yellow-500"
          } transition-colors duration-[750ms] placeholder-black/70 p-2 rounded-md w-full focus:outline-0`}
        />
      </div>

      {/* Info */}
      <div className="mb-6">
        <p className="font-semibold text-xl mb-2">I'd love to ask about...</p>
        <textarea
          placeholder="Whatever your heart desires :)"
          className={`${
            selected === "company" ? "bg-yellow-500" : "bg-yellow-500"
          } transition-colors duration-[750ms] min-h-[150px] resize-none placeholder-black/70 p-2 rounded-md w-full focus:outline-0`}
        />
      </div>

      {/* Submit */}
      <motion.button
        whileHover={{
          scale: 1.01,
        }}
        whileTap={{
          scale: 0.99,
        }}
        type="submit"
        className={`${
          selected === "company"
            ? "bg-black text-yellow-400"
            : "bg-black text-yellow-400"
        } transition-colors duration-[750ms] text-lg text-center rounded-lg w-full py-3 font-semibold`}
      >
        Submit
      </motion.button>
    </form>
  );
};

const FormSelect = ({ selected, setSelected }) => {
  return (
    <div className="border-[1px] rounded border-black overflow-hidden font-medium w-fit">
      <button
        className={`${
          selected === "individual" ? "text-yellow-400" : "text-black"
        } text-sm px-3 py-1.5 transition-colors duration-[750ms] relative`}
        onClick={() => setSelected("individual")}
      >
        <span className="relative z-10">An individual</span>
        {selected === "individual" && (
          <motion.div
            transition={BASE_TRANSITION}
            layoutId="form-tab"
            className="absolute inset-0 bg-black z-0"
          />
        )}
      </button>
      <button
        className={`${
          selected === "company" ? "text-yellow-400" : "text-black"
        } text-sm px-3 py-1.5 transition-colors duration-[750ms] relative`}
        onClick={() => setSelected("company")}
      >
        <span className="relative z-10">A company</span>
        {selected === "company" && (
          <motion.div
            transition={BASE_TRANSITION}
            layoutId="form-tab"
            className="absolute inset-0 bg-black z-0"
          />
        )}
      </button>
    </div>
  );
};

const Images = ({ selected }) => {
  return (
    <div className="bg-black relative overflow-hidden w-full min-h-[100px]">
      <motion.div
        initial={false}
        animate={{
          x: selected === "individual" ? "0%" : "100%",
        }}
        transition={BASE_TRANSITION}
        className="absolute inset-0 bg-slate-200"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <motion.div
        initial={false}
        animate={{
          x: selected === "company" ? "0%" : "-100%",
        }}
        transition={BASE_TRANSITION}
        className="absolute inset-0 bg-slate-200"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </div>
  );
};

export default ContactUs;

const BASE_TRANSITION = { ease: "anticipate", duration: 0.75 };
