import React from "react";
import About_img from "../../assets/images/about-us.png";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
const AboutMain = () => {
  return (
    <section className="about bg-black text-white w-full flex flex-col md:flex-row justify-center py-10 md:py-36 px-5 md:px-20 ">
      <motion.div
        className="w-full md:w-1/2 relative mb-10 md:mb-0 md:mr-5"
        initial="hidden"
        whileInView="visible"
        transition={{ delay: 0.2, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div>
          <img src={About_img} alt="about_img" className="w-full" />
        </div>
        <span className="absolute w-48 h-48 border-2 border-white bg-[#cc866c] rounded-full top-36 left-48 flex justify-center items-center text-center pb-9 max-md:hidden">
          <div className="">
            <h1 className="text-white text-6xl tracking-tighter font-light">
              30<span className="text-lg">+</span>
            </h1>
            <p className="text-white">Years Experience</p>
          </div>
        </span>
      </motion.div>
      <motion.div
        className="w-full md:w-1/2 uppercase"
        initial="hidden"
        whileInView="visible"
        transition={{ delay: 0.2, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div>
          <h5 className="text-[#cc866c] text-base font-thin">About Me</h5>
          <h2 className="text-3xl md:text-6xl mt-2 font-light">
            Your Beauty and Success Starts Here
          </h2>
        </div>
        <p className="mt-5 md:mt-10 tracking-wider text-sm md:text-base font-thin normal-case text-[#777]">
          Hello, I'm Olivia a Professional Makeup Artist. Quisque luctus
          tincidunt enim dapibus pharetra neue ultricies at. Morbi dapibus
          mauris id scelerisque placerat nula massa lacinia orci in facilisis
          nulla quam volutpat lectus. Nunc elementum ante commodo felis
          hendrerit.{" "}
        </p>
        <div className="mt-4 md:mt-8 tracking-wider leading-5 text-sm md:text-base font-thin normal-case text-[#777]">
          <ul>
            <li className="flex gap-2">
              <FaRegCheckCircle className="text-[#cc866c] text-2xl font-bold" />
              Fringilla risus nec, luctus mauris orci auctor purus euismod at
              pretium purus pretium ligula rutrum tempor sapien .
            </li>
            <li className="flex gap-2 mt-4">
              <FaRegCheckCircle className="text-[#cc866c] text-2xl font-bold" />
              Nemo ipsam egestas volute turpis dolores ut aliquam quaerat
              sodales sapien undo pretium purus .
            </li>
          </ul>
        </div>
        <button className="text-white rounded-full px-6 py-3 bg-[#cc866c] mt-6 md:mt-8 flex justify-center gap-3 items-center">
          LEARN MORE{" "}
          <span>
            <FaArrowRight />
          </span>
        </button>
      </motion.div>
    </section>
  );
};

export default AboutMain;
