import React from "react";
import { useLoaderData } from "react-router-dom";
import { motion } from "framer-motion";
const Social = () => {
  const { user } = useLoaderData();
  return (
    <motion.div
      className="flex flex-col items-center justify-center gap-4"
      initial={{ y: "-500vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 2 }}
    >
      <h2 className="text-2xl font-bold text-white mb-4">
        Get connected with me here
      </h2>
      <div className="flex flex-wrap gap-4">
        {user.social_handles.map((items) => {
          return (
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 p-2 bg-gray-800 rounded-lg shadow-md transition duration-300 hover:bg-gray-700"
              key={items._id}
            >
              <img
                src={items.image.url}
                alt={items.platform}
                className="w-8 h-8"
              />
              <span className="text-white">{items.platform}</span>
            </a>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Social;
