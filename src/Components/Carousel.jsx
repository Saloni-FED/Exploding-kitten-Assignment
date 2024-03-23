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
    <Slider {...settings}>
      <div className="">
        <div>
          <img src={qt} alt="qt" className="mx-auto " />
        </div>
        <p className="w-2/3 mx-auto text-3xl leading-10 py-10">
          “Etiam sodales congue consequat. Aenean vitae ullamcorper leo.
          Pellentesque condimentum ex ut erat posuere, quis tincidunt augue
          semper. Cras congue nulla sed quam hendrerit euismod”
        </p>
        <div className="flex justify-center items-center gap-3 uppercase ">
          <img src={testi} alt="img" className="" />
          <div className="text-left">
            <h6 className="text-xl">Alexis browni JR.</h6>
            <span className="text-sm text-[#cc866c] mt-5">
              founder of alxis co.
            </span>
          </div>
        </div>
      </div>
      <div className="">
        <div>
          <img src={qt} alt="qt" className="mx-auto" />
        </div>
        <p className="w-2/3 mx-auto text-3xl leading-10 py-10">
          “Etiam sodales congue consequat. Aenean vitae ullamcorper leo.
          Pellentesque condimentum ex ut erat posuere, quis tincidunt augue
          semper. Cras congue nulla sed quam hendrerit euismod”
        </p>
        <div className="flex justify-center items-center gap-3 uppercase">
          <img src={testi} alt="img" className="" />
          <div className="text-left">
            <h6 className="text-xl">PAUL M MATNEY.</h6>
            <span className="text-sm text-[#cc866c] mt-5">LAWYER</span>
          </div>
        </div>
      </div>
      <div className="">
        <div>
          <img src={qt} alt="qt" className="mx-auto" />
        </div>
        <p className="w-2/3 mx-auto text-3xl leading-10 py-10">
          “Etiam sodales congue consequat. Aenean vitae ullamcorper leo.
          Pellentesque condimentum ex ut erat posuere, quis tincidunt augue
          semper. Cras congue nulla sed quam hendrerit euismod”
        </p>
        <div className="flex justify-center items-center gap-3 uppercase ">
          <img src={testi} alt="img" className="" />
          <div className="text-left">
            <h6 className="text-xl">Alexis browni JR.</h6>
            <span className="text-sm text-[#cc866c] ">
              founder of alxis co.
            </span>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Carousel;
