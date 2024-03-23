import { motion } from "framer-motion";
const Cards = () => {
  return (
    <section className="bg-black py-24 md:py-20">
      <motion.div
        className="uppercase"
        initial="hidden"
        whileInView="visible"
        transition={{ delay: 0.2, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <h3 className="text-[#cc866c] text-base md:text-lg text-center font-thin">
          What we do
        </h3>
        <h1 className="text-white text-3xl md:text-6xl text-center font-light mt-2">
          Makeup Services
        </h1>
      </motion.div>
      <motion.div
        className="flex flex-col md:flex-row gap-6 justify-center mt-8 md:mt-12 uppercase max-md:px-5"
        initial="hidden"
        whileInView="visible"
        transition={{ delay: 0.2, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className="w-full md:w-56 h-72 md:h-96 bg-white relative hover:-translate-y-5 transition-all duration-700 cursor-pointer">
          <div className="absolute w-full h-36 md:h-56 bottom-0 bg-[#222] text-white text-center py-5 md:py-10 px-5 hover:bg-[#FFFAF0] hover:text-black transition-all duration-500">
            <h1 className="text-lg md:text-xl font-thin">FACE MAKEUP</h1>
            <p className="text-[#777] text-xs md:text-sm mt-1 md:mt-3">
              Author of Die Vertretung beim Rechtsgeschälft. Agency, in law, the
              relationship that exists.
            </p>
          </div>
        </div>
        <div className="w-full md:w-56 h-72 md:h-96 bg-white relative hover:-translate-y-5 transition-all duration-700 cursor-pointer">
          <div className="absolute w-full h-36 md:h-56 bottom-0 bg-[#222] text-white text-center py-5 md:py-10 px-5 hover:bg-[#FFFAF0] hover:text-black transition-all duration-500">
            <h1 className="text-lg md:text-xl font-thin">EYE MAKEUP</h1>
            <p className="text-[#777] text-xs md:text-sm mt-1 md:mt-3">
              Author of Die Vertretung beim Rechtsgeschälft. Agency, in law, the
              relationship that exists.
            </p>
          </div>
        </div>
        <div className="w-full md:w-56 h-72 md:h-96 bg-white relative hover:-translate-y-5 transition-all duration-700 cursor-pointer">
          <div className="absolute w-full h-36 md:h-56 bottom-0 bg-[#222] text-white text-center py-5 md:py-10 px-5 hover:bg-[#FFFAF0] hover:text-black transition-all duration-500">
            <h1 className="text-lg md:text-xl font-thin">HAIR MAKEUP</h1>
            <p className="text-[#777] text-xs md:text-sm mt-1 md:mt-3">
              Author of Die Vertretung beim Rechtsgeschälft. Agency, in law, the
              relationship that exists.
            </p>
          </div>
        </div>
        <div className="w-full md:w-56 h-72 md:h-96 bg-white relative hover:-translate-y-5 transition-all duration-700 cursor-pointer">
          <div className="absolute w-full h-36 md:h-56 bottom-0 bg-[#222] text-white text-center py-5 md:py-10 px-5 hover:bg-[#FFFAF0] hover:text-black transition-all duration-500">
            <h1 className="text-lg md:text-xl font-thin">BRIDAL MAKEUP</h1>
            <p className="text-[#777] text-xs md:text-sm mt-1 md:mt-3">
              Author of Die Vertretung beim Rechtsgeschälft. Agency, in law, the
              relationship that exists.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Cards;
