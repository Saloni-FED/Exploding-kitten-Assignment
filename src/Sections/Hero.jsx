import React from "react";
import { useLoaderData } from "react-router-dom";
import { motion } from "framer-motion";
const Hero = () => {
  const { user } = useLoaderData();
  const { about } = user;

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-500vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1.5 }}
    >
      <div className="flex flex-col md:flex-row justify-center gap-4 h-full w-full text-white">
        {/* Hero Image */}
        <div className="h-72 md:w-1/3">
          <img
            src={about.avatar.url}
            alt=""
            className="object-cover w-full h-72 grayscale"
          />
        </div>
        {/* Text */}
        <div className="md:w-1/2 max-w-md flex flex-col justify-center">
          <h1 className="text-center md:text-6xl text-4xl font-semibold text-[#cc866c]">
            Hello, I'm {about.name}
          </h1>
          {/* <h1 className="text-center md:text-6xl text-4xl font-semibold text-[#cc866c]">
            I'm {about.title}
          </h1> */}
          <p className="text-center py-5">{about.description}</p>
          <div className="flex gap-4 justify-center  py-4">
            <button className="p-4 rounded-lg ring-1 ring-[#cc866c] bg-[#cc866c] text-white uppercase">
              Contact
            </button>
            <button className="p-4 rounded-lg ring-1 ring-[#cc866c] bg-[#cc866c] text-white uppercase">
              View My Work
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
