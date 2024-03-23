import {  motion } from "framer-motion";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";

const Projects = () => {
  const { user } = useLoaderData();

  return (
    <motion.div
      className="h-full overflow-hidden" 
      initial={{ y: "-500vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 2 }}
    >
      <div className="h-[600vh] text-white relative" >
        <div className="sticky top-0 flex flex-wrap gap-4 items-center justify-center">
          {user.projects.map((item, i) => {
            return (
              <div
                key={item._id}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 flex items-center justify-center bg-black py-4"
              >
                <div className="flex flex-col gap-8 p-4 border border-[#777] rounded hover:scale-105 cursor-pointer transition-all duration-500">
                  <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                    Project {i + 1}
                  </h1>
                  <div className="relative w-full h-[15rem] md:h-auto ">
                    {" "}
                    {/* Changed height to h-auto */}
                    <img
                      src={item.image.url}
                      alt=""
                      className="w-full object-cover"
                    />
                  </div>
                  <p className="text-sm md:text-base lg:text-lg xl:text-xl">
                    {item.techStack}
                  </p>
                  <Link to="/portfolio/poprojects">
                    <button className="bg-[#cc866c] uppercase border hover:border-[#cc866c] text-white px-4 py-2 rounded-md hover:bg-black hover:text-white transition-all duration-700">
                      Demo
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
