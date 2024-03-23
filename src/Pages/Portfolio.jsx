import { useLoaderData } from "react-router-dom";
import Navbar from "../Sections/Navbar";
import { Outlet } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const Portfolio = () => {
  const data = useLoaderData();
  console.log(data);
  const pathname = window.location.pathname;

  return (
    <AnimatePresence mode="wait">
      <div
        key={pathname}
        className="w-full min-h-screen bg-black  py-16 md:py-32"
      >
        {/* Navbar */}
        <motion.div
          className="h-screen w-screen bg-[#cc866c] fixed rounded-b-[100px] z-40"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <motion.div
          className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-4xl cursor-default z-30 w-fit h-fit"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0}}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          {pathname.substring(1)}
        </motion.div>
        <motion.div
          className="h-screen md:w-screen bg-white text-black fixed rounded-t-[100px] z-30"
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { delay: 0.5 } }}
        />
        <div className="h-16 md:h-24 ">
          <Navbar about={data.user} />
        </div>
        {/* Content */}
        <div className="py-4 max-md:px-3">
          <Outlet />
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Portfolio;
