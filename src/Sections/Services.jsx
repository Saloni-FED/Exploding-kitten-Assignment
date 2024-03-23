import { useLoaderData } from "react-router-dom";
import { motion } from "framer-motion";
const Services = () => {
  const { user } = useLoaderData();
  const { services } = user;

  return (
    <motion.div
      className="flex flex-wrap justify-center"
      initial={{ y: "-500vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1.5 }}
    >
      {services.map((service, index) => (
        <div
          className="bg-black border border-[#777] shadow-lg rounded-lg overflow-hidden m-4"
          key={index}
        >
          <img
            src={service.image.url}
            alt={service.name}
            className="w-full h-48 object-cover object-center"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold text-[#cc866c]">
              {service.name}
            </h2>
            <p className="text-[#777] mt-2">{service.desc}</p>
            <div className="flex items-center mt-4 text-white">
              <span className=" mr-2">Charge:</span>
              <span className="font-semibold">${service.charge}</span>
            </div>
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default Services;
