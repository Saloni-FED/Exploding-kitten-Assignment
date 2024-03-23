import React from 'react';
import testimonial_bg from "../assets/images/testimonial-bg.png";
import Carousel from "./Carousel";

const Slider = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${testimonial_bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
         // Prevent horizontal scrolling
      }}
      className="py-10 md:py-20 overflow-x-hidden"
    >
      <div className="container text-white text-center mx-auto border-4 border-green-400">
        <div>
          <h5 className="text-[#cc866c] text-lg md:text-xl">TESTIMONIALS</h5>
          <h1 className="text-4xl md:text-6xl mt-3 md:mt-5 font-thin">SOME USERS FEEDBACK</h1>
        </div>
        <div className="mt-8 md:mt-12">
          <Carousel />
        </div>
      </div>
    </section>
  );
};

export default Slider;
