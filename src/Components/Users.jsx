import React from "react";
import { motion } from "framer-motion";
const Users = () => {
  return (
    <section className="bg-[#222] uppercase px-5 md:px-20  py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ delay: 0.2, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <h1 className="text-base md:text-lg text-[#cc866c] md:mb-3 mb-2">
          Users
        </h1>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ delay: 0.2, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <h2 className="text-white text-3xl md:text-6xl font-light">
          Worldwide Users
        </h2>
        <div className="bg-white md:w-full w-4/5 h-14 md:h-28 mt-12 md:mt-10 "></div>
      </motion.div>
    </section>
  );
};

export default Users;
