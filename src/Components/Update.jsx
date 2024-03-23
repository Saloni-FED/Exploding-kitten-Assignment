import { motion } from "framer-motion";

const Update = () => {
  return (
    <section className="bg-[#cc866c] text-white py-10 overflow-x-hidden  w-full">
      <motion.div
        className="container mx-auto px-4 md:px-10"
        initial="hidden"
        whileInView="visible"
        transition={{ delay: 0.2, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className="mx-auto flex flex-col md:flex-row md:max-w-screen-lg justify-center md:justify-between items-center">
          <h2 className="text-4xl md:text-5xl font-thin mb-4 md:mb-0 text-center md:text-left">
            GET UPDATES BY SIGNING UP TO OUR NEWSLETTER
          </h2>
          <form className="mt-6 md:mt-0 flex flex-col md:flex-row max-w-md md:max-w-none w-full">
            <input
              type="email"
              placeholder="Email Address..."
              className="outline-none md:mr-2 md:px-6 md:py-4 px-4 py-3 w-full md:w-auto"
            />
            <button className="bg-black md:px-6 md:py-4 px-4 py-3 mt-2 md:mt-0 hover:bg-[#FFFAF0] hover:text-black transition-all duration-700">
              JOIN NOW
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Update;
