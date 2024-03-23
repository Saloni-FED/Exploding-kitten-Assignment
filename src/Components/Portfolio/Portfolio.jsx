import portfolioImg1 from "../../assets/images/gallery/protfolio-img01.jpg";
import portfolioImg2 from "../../assets/images/gallery/protfolio-img02.jpg";
import portfolioImg3 from "../../assets/images/gallery/protfolio-img03.jpg";
import portfolioImg4 from "../../assets/images/gallery/protfolio-img04.jpg";
import portfolioImg5 from "../../assets/images/gallery/protfolio-img05.jpg";
import portfolioImg6 from "../../assets/images/gallery/protfolio-img06.jpg";
import { motion } from "framer-motion";
import { useState } from "react";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("*");

  const portfolioItems = [
    { id: 1, src: portfolioImg1, alt: "Face Makeup", category: "financial" },
    {
      id: 2,
      src: portfolioImg2,
      alt: "Eye Makeup",
      category: "financial banking",
    },
    { id: 3, src: portfolioImg3, alt: "Hair Makeup", category: "insurance" },
    { id: 4, src: portfolioImg4, alt: "Bridal Makeup", category: "family" },
    { id: 5, src: portfolioImg5, alt: "Business Makeup", category: "business" },
    { id: 6, src: portfolioImg6, alt: "Face Makeup", category: "financial" },
  ];

  const handleFilter = (category) => {
    setSelectedCategory(category);
  };

  return (
    <section id="portfolio" className="py-16 lg:py-32 bg-black uppercase">
      <div className="container mx-auto text-white">
        <motion.div
          className="flex flex-col items-center justify-center mb-12"
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h5 className="text-base text-[#cc866c]">Portfolio</h5>
          <h2 className="text-4xl lg:text-6xl mt-2">Creative Works</h2>
        </motion.div>
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-8 lg:mb-16"
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <button
            onClick={() => handleFilter("*")}
            className={`btn ${selectedCategory === "*" ? "selected" : ""}`}
          >
            All Works
          </button>
          <button
            onClick={() => handleFilter(".financial")}
            className={`btn ${
              selectedCategory === ".financial" ? "selected" : ""
            }`}
          >
            Face Makeup
          </button>
          <button
            onClick={() => handleFilter(".banking")}
            className={`btn ${
              selectedCategory === ".banking" ? "selected" : ""
            }`}
          >
            Eye Makeup
          </button>
          <button
            onClick={() => handleFilter(".insurance")}
            className={`btn ${
              selectedCategory === ".insurance" ? "selected" : ""
            }`}
          >
            Hair Makeup
          </button>
          <button
            onClick={() => handleFilter(".family")}
            className={`btn ${
              selectedCategory === ".family" ? "selected" : ""
            }`}
          >
            Bridal Makeup
          </button>
          <button
            onClick={() => handleFilter(".business")}
            className={`btn ${
              selectedCategory === ".business" ? "selected" : ""
            }`}
          >
            Business Makeup
          </button>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 max-md:px-3"
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          {portfolioItems.map((item) => (
            <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
              key={item.id}
              className={`grid-item ${
                selectedCategory === "*" ||
                item.category.includes(selectedCategory.replace(".", ""))
                  ? ""
                  : "hidden"
              }`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-auto transform hover:scale-105 transition duration-300 ease-in-out"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
