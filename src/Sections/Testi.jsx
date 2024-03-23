import { Swiper, SwiperSlide } from "swiper/react";
import { useLoaderData } from "react-router-dom";
import { FreeMode, Pagination } from "swiper/modules";
import { motion } from "framer-motion"
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { RxArrowTopRight } from "react-icons/rx";

const Testi = () => {
  const { user } = useLoaderData();

  return (
    <motion.div className="flex items-center justify-center flex-col h-screen overflow-hidden bg-black"
    initial={{ y: "-500vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1.5 }}>
      <Swiper
        style={{
          "--swiper-pagination-color": "#cc688c",
          "--swiper-pagination-bullet-inactive-color": "#fff",
          
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="w-full max-w-[90%] lg:max-w-[80%]"
      >
        {user.testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial._id}>
            <div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 lg:px-8 lg:py-12 lg:h-[400px] overflow-hidden cursor-pointer">
              <div
                className="absolute inset-0 bg-cover bg-center border"
                style={{
                  backgroundImage: `url(${testimonial.image.url})`,
                  filter: "brightness(0.6)", // Adjust the brightness of the background image
                }}
              />
              <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-50" />
              <div className="relative flex flex-col gap-3">
                <h1 className="text-xl lg:text-2xl text-white">
                  {testimonial.name}
                </h1>
                <p className="text-gray-300">{testimonial.position}</p>
                <p className="lg:text-[18px] text-gray-300">
                  {testimonial.review}
                </p>
              </div>
              <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-[#cc866c] group-hover:rotate-45 duration-100" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default Testi;
