import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import qt from "../assets/images/qt-icon.png";
import testi from "../assets/images/testi_avatar.png";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Adjust breakpoints as needed
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="overflow-hidden">
      <Slider {...settings}>
        <div className="px-4">
          <div className="text-center">
            <img src={qt} alt="qt" className="mx-auto" />
          </div>
          <p className="text-center text-3xl leading-10 py-10">
            “Etiam sodales congue consequat. Aenean vitae ullamcorper leo.
            Pellentesque condimentum ex ut erat posuere, quis tincidunt augue
            semper. Cras congue nulla sed quam hendrerit euismod”
          </p>
          <div className="flex justify-center items-center gap-3 uppercase ">
            <img src={testi} alt="img" className="" />
            <div className="text-left">
              <h6 className="text-xl">Alexis Browni JR.</h6>
              <span className="text-sm text-[#cc866c] mt-1">
                Founder of Alxis Co.
              </span>
            </div>
          </div>
        </div>
        <div className="px-4">
          <div className="text-center">
            <img src={qt} alt="qt" className="mx-auto" />
          </div>
          <p className="text-center text-3xl leading-10 py-10">
            “Etiam sodales congue consequat. Aenean vitae ullamcorper leo.
            Pellentesque condimentum ex ut erat posuere, quis tincidunt augue
            semper. Cras congue nulla sed quam hendrerit euismod”
          </p>
          <div className="flex justify-center items-center gap-3 uppercase">
            <img src={testi} alt="img" className="" />
            <div className="text-left">
              <h6 className="text-xl">Paul M Matney.</h6>
              <span className="text-sm text-[#cc866c] mt-1">Lawyer</span>
            </div>
          </div>
        </div>
        <div className="px-4">
          <div className="text-center">
            <img src={qt} alt="qt" className="mx-auto" />
          </div>
          <p className="text-center text-3xl leading-10 py-10">
            “Etiam sodales congue consequat. Aenean vitae ullamcorper leo.
            Pellentesque condimentum ex ut erat posuere, quis tincidunt augue
            semper. Cras congue nulla sed quam hendrerit euismod”
          </p>
          <div className="flex justify-center items-center gap-3 uppercase ">
            <img src={testi} alt="img" className="" />
            <div className="text-left">
              <h6 className="text-xl">Alexis Browni JR.</h6>
              <span className="text-sm text-[#cc866c]">
                Founder of Alxis Co.
              </span>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
