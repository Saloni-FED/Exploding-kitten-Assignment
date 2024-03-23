import { NavLink } from "react-router-dom";
import AboutMain from "../Components/About/AboutMain";
import Slider from "../Components/Slider";
import Update from "../Components/Update";

const AboutMe = () => {
  return (
    <>
      <div className="w-full overflow-hidden">
        <main className="px-4 md:px-0 md:py-32 bg-gray-300 min-h-screen">
          <div className="w-full mx-auto">
            <div className="flex justify-center items-center text-white md:pt-56">
              <div className="max-md:pt-32">
                <h1 className="text-5xl text-center">ABOUT US</h1>
                <div className="mt-5 flex justify-center items-center gap-3 uppercase max-md:hidden">
                  <div>
                    <h3>Home</h3>
                  </div>
                  <div className="h-3 w-0.5 bg-[#777]"></div>
                  <div>
                    <NavLink
                      to="/about"
                      className={({ isActive }) =>
                        isActive
                          ? "underline text-[#cc866c] text-base"
                          : "hover:text-[#cc866c]"
                      }
                    >
                      About me
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <AboutMain />
        <Slider /> 
      </div>
    </>
  );
};

export default AboutMe;
