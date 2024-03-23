import About from "./About/About";
import { FaArrowRight } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa6";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <>
      <section className="px-4 md:px-32 py-16 md:py-32 bg-gray-300 border-4 w-full">
        <div className="h-full">
          <motion.div
            className="flex flex-col gap-5 uppercase "
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h5 className="font-light text-[#cc866c] mt-3 text-xl">
              Makeup Artist
            </h5>
            <h2 className="text-white font-light text-4xl md:text-6xl leading-none tracking-tighter">
              WELCOME TO
              <br />
              GMAAEUP
              <br />
              Beauty Salon
            </h2>
            <div className="flex flex-col md:flex-row gap-3 mt-3 ">
              <button className="border rounded-full px-6 py-3 bg-white uppercase text-lg max-md:w-fit flex gap-3 items-center font-thin">
                Learn More{" "}
                <span>
                  <FaArrowRight className="text-sm text-[#777] font-thin" />
                </span>
              </button>
              <a
                href="https://www.youtube.com/watch?v=gyGsPlt06bo"
                className="rounded-full border bg-[#cc866c] w-14 h-14 flex items-center justify-center max-md:hidden"
              >
                <span className="text-white text-sm">
                  <FaPlay className="text-2xl" />
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      <About />
    </>
  );
};

export default Home;
