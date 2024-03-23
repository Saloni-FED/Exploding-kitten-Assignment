import { NavLink } from "react-router-dom";
import { RiAdminFill } from "react-icons/ri";
import { FaCalendarAlt } from "react-icons/fa";
import { motion } from "framer-motion";
const News = () => {
  return (
    <motion.section
      className="bg-black py-20"
      initial="hidden"
      whileInView="visible"
      transition={{ delay: 0.2, duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      <div className="uppercase">
        <h3 className="text-[#cc866c] text-base text-center font-thin">READ</h3>
        <h1 className="text-white text-6xl text-center font-light mt-2">
          LATEST NEWS
        </h1>
      </div>
      <div className="flex gap-6 max-md:flex-wrap justify-center mt-12 ">
        <div className=" w-72 h-96 bg-white relative  cursor-pointer">
          <div className="absolute w-full h-56 bottom-0 bg-[#222] text-white text-center py-10 px-5">
            <div className=" flex justify-between text-[#777] text-sm">
              <h1 className="flex gap-2 items-center">
                <span className="text-[#cc866c]">
                  <RiAdminFill />
                </span>
                Admin
              </h1>
              <h1 className="flex gap-2 items-center">
                <span className="text-[#cc866c]">
                  <FaCalendarAlt />
                </span>
                24 march 2021
              </h1>
            </div>
            <p className="text-white text-2xl tracking-tight leading-none text-start pt-3 font-light">
              FUSCE SUSCIPIT ARCU VELIT ID SCELERISQUE TEMPUS EST
            </p>
            <p className="text-[#777] text-base tracking-tight  text-start py-3 font-light leading-4">
              Cras ultrices maximus arcu ut aqam. Aliquam daber a diam ante.
            </p>

            <NavLink to="/news">
              <button className="text-[#cc866c] hover:text-white transition-all duration-500  w-full text-left">
                Read
              </button>
            </NavLink>
          </div>
        </div>
        <div className="w-72 h-96 bg-white relative  cursor-pointer">
          <div className="absolute w-full h-56 bottom-0 bg-[#222] text-white text-center py-10 px-5 ">
            <div className=" flex justify-between text-[#777] text-sm">
              <h1 className="flex gap-2 items-center">
                <span className="text-[#cc866c]">
                  <RiAdminFill />
                </span>
                Admin
              </h1>
              <h1 className="flex gap-2 items-center">
                <span className="text-[#cc866c]">
                  <FaCalendarAlt />
                </span>
                24 march 2021
              </h1>
            </div>
            <p className="text-white text-2xl tracking-tight leading-none text-start pt-3 font-light">
              FUSCE SUSCIPIT ARCU VELIT ID SCELERISQUE TEMPUS EST
            </p>
            <p className="text-[#777] text-base tracking-tight  text-start py-3 font-light leading-4">
              Cras ultrices maximus arcu ut aqam. Aliquam daber a diam ante.
            </p>

            <NavLink to="/news">
              <button className="text-[#cc866c] hover:text-white transition-all duration-500  w-full text-left">
                Read
              </button>
            </NavLink>
          </div>
        </div>

        <div className="w-72 h-96 bg-white relative  cursor-pointer">
          <div className="absolute w-full h-56 bottom-0 bg-[#222] text-white text-center py-10 px-5 ">
            <div className=" flex justify-between text-[#777] text-sm">
              <h1 className="flex gap-2 items-center">
                <span className="text-[#cc866c]">
                  <RiAdminFill />
                </span>
                Admin
              </h1>
              <h1 className="flex gap-2 items-center">
                <span className="text-[#cc866c]">
                  <FaCalendarAlt />
                </span>
                24 march 2021
              </h1>
            </div>
            <p className="text-white text-2xl tracking-tight leading-none text-start pt-3 font-light">
              FUSCE SUSCIPIT ARCU VELIT ID SCELERISQUE TEMPUS EST
            </p>
            <p className="text-[#777] text-base tracking-tight  text-start py-3 font-light leading-4">
              Cras ultrices maximus arcu ut aqam. Aliquam daber a diam ante.
            </p>

            <NavLink to="/news">
              <button className="text-[#cc866c] hover:text-white transition-all duration-500  w-full text-left">
                Read
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default News;
