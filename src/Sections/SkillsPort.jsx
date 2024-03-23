import { useLoaderData } from "react-router-dom";
import { motion } from "framer-motion";
const SkillsPort = () => {
  const { user } = useLoaderData();
  return (
    <motion.div
      className="container mx-auto px-4 py-8  flex flex-wrap justify-center items-center"
      initial={{ y: "-500vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 2 }}
    >
      {user.skills.map((item) => {
        return (
          <div
            className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 text-white"
            key={item._id}
          >
            <div className="bg-[#222] rounded-lg shadow-md p-6">
              <img
                src={item.image.url}
                alt=""
                className="w-12 h-12 mb-4 object-contain"
              />
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <div className="bg-gray-200 h-2 mt-2 rounded-full">
                <div
                  className="bg-[#cc866c] h-full rounded-full"
                  style={{ width: `${item.percentage}%` }}
                ></div>
              </div>
              <p className=" text-sm mt-2">{item.percentage}%</p>
            </div>
          </div>
        );
      })}
    </motion.div>
  );
};

export default SkillsPort;
