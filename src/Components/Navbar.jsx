import { useState, useEffect } from "react";
import logo from "../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  
  const closeMenu = () => {
    setShowMenu(false);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav
      className={` shadow md:flex md:items-center  md:justify-between md:px-5 md:py-4 z-10 fixed top-0 w-full ${
        scrolling ? 'bg-black text-white transition-all duration-700' : 'transition-all duration-700'
      }`}
      
    >
      <div>
        <span
          className="text-2xl cursor-pointer max-md:flex max-md:justify-around max-md:items-center max-md:py-2  "
          onClick={toggleMenu}
        >
          <img src={logo} alt="logo" className="h-10" />
          <span className="p-3  md:hidden">
            {showMenu ? (
              <FiX className="text-white" />
            ) : (
              <FiMenu className="text-white" />
            )}
          </span>
        </span>
      </div>
      <motion.ul
        initial={{ y: "-500vh" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1.5 }}
        className={`md:flex md:items-center md:gap-4 flex max-md:flex-col gap-4 max-md:bg-white md:mx-2 md:py-3 max-md:absolute max-md:w-full  max-md:text-[#777] tracking-tight font-medium  ${
          showMenu ? "block" : "hidden"
        }`}
      >
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "md:text-[#cc866c]" : "md:text-white")}
          onClick={closeMenu}
        >
          <li className="uppercase mx-4 max-md:border-b ">Home</li>
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "md:text-[#cc866c]" : "md:text-white")}
          onClick={closeMenu}
        >
          <li className="uppercase mx-4 max-md:border-b">About Me</li>
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) => (isActive ? "md:text-[#cc866c]" : "md:text-white")}
          onClick={closeMenu}
        >
          <li className="uppercase mx-4 max-md:border-b">Services</li>
        </NavLink>
        <NavLink
          to="/portfolio"
          className={({ isActive }) => (isActive ? "md:text-[#cc866c]" : "md:text-white")}
          onClick={closeMenu}
        >
          <li className="uppercase mx-4 max-md:border-b">Portfolio</li>
        </NavLink>
        <NavLink
          to="/news"
          className={({ isActive }) => (isActive ? "md:text-[#cc866c]" : "md:text-white")}
          onClick={closeMenu}
        >
          <li className="uppercase mx-4 max-md:border-b">News</li>
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "md:text-[#cc866c]" : "md:text-white")}
          onClick={closeMenu}
        >
          <li className="uppercase mx-4 max-md:border-b">contact</li>
        </NavLink>
      </motion.ul>
      <div>
        <button className="text-white rounded-full px-5 py-3 bg-[#cc866c] max-md:hidden flex justify-between items-center gap-3">
          GET A QUOTE{" "}
          <span>
            <FaArrowRight />
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
