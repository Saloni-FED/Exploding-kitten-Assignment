import logo from "../assets/images/logo.png";
import Line from "../assets/images/f-line.png";

const Footer = () => {
  return (
    <footer>
      <div className="bg-black py-10 lg:py-20 overflow-x-hidden ">
        <div className="container mx-auto flex flex-wrap justify-center lg:justify-between gap-8 px-4 lg:px-20">
          <div className="w-full md:basis-1/4  lg:mb-0 flex flex-col  lg:items-start ">
            <img src={logo} alt="logo" className="h-10 " />
            <p className="text-gray-400 mt-5 text-sm lg:text-base  text-left">
              Nam purus nibh, luctus at cursus vel, efficitur eu dui. Aenean
              tellus massa, euismod eu dictum in, tincidunt ac lacus. Quisque
              vitae tellus a nibh sollicitudin viverra id sed libero.
            </p>
          </div>
          <div className="w-full md:basis-1/4 mb-8">
            <div>
              <h1 className="text-white text-lg lg:text-xl">Our Links</h1>
              <img src={Line} alt="line" className="mt-2" />
            </div>
            <ul className="text-gray-400 flex flex-col gap-3 mt-5 font-light text-sm lg:text-base">
              <li className="cursor-pointer hover:text-[#cc866c]">Home</li>
              <li className="cursor-pointer hover:text-[#cc866c]">About Us</li>
              <li className="cursor-pointer hover:text-[#cc866c]">Services</li>
              <li className="cursor-pointer hover:text-[#cc866c]">
                Contact Us
              </li>
            </ul>
          </div>
          <div className="w-full md:basis-1/4 mb-8">
            <div>
              <h1 className="text-white text-lg lg:text-xl">OUR SERVICES</h1>
              <img src={Line} alt="line" className="mt-2" />
            </div>
            <ul className="text-gray-400 flex flex-col gap-3 mt-5 font-light text-sm lg:text-base">
              <li className="cursor-pointer hover:text-[#cc866c]">FAQ</li>
              <li className="cursor-pointer hover:text-[#cc866c]">Support</li>
              <li className="cursor-pointer hover:text-[#cc866c]">Support</li>
              <li className="cursor-pointer hover:text-[#cc866c]">
                Term & Conditions
              </li>
            </ul>
          </div>
          <div className="w-full md:basis-1/4 mb-8">
            <div>
              <h1 className="text-white text-lg lg:text-xl">
                SUBSCRIBE TO OUR NEWSLETTER
              </h1>
              <img src={Line} alt="line" className="mt-2" />
              <div className="mt-5">
                <iframe
                  title="Google Maps"
                  className="w-full h-40 lg:h-30"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12080.73732861526!2d-74.0059418!3d40.7127847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMDA2JzEwLjAiTiA3NMKwMjUnMzcuNyJX!5e0!3m2!1sen!2sus!4v1648482801994!5m2!1sen!2sus"
                  // frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#222] text-white py-2">
        <div className="container px-4 lg:px-10 mx-auto">
          <div className="flex justify-between items-center">
            <h2 className="text-sm lg:text-base">
              Copyright © 2021 Zcubedesign. All rights reserved.
            </h2>
            <div className="flex gap-4">
              <h1 className="px-2 border-r border-gray-700">Privacy</h1>
              <h1>Term & Conditions</h1>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
