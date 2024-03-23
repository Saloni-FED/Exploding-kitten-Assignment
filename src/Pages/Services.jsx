import { NavLink } from "react-router-dom";
import Cards from "../Components/Cards";
import Slider from "../Components/Slider";
import PriceCard from "../Components/PriceCard";

const Services = () => {
  return (
    <>
      <div className="w-full">
        <main className="px-4 md:px-0 md:py-32 bg-gray-300 min-h-screen">
          <div className="max-w-screen-lg mx-auto">
            <div className="flex justify-center items-center text-white md:pt-56 ">
              <div className="max-md:pt-44">
                <h1 className="text-5xl text-center">SERVICES</h1>
                <div className="mt-5 flex justify-center items-center gap-3 uppercase max-md:hidden">
                  <div>
                    <NavLink to="/" className="hover:text-[#cc866c]">
                      Home
                    </NavLink>
                  </div>
                  <div className="h-3 w-0.5 bg-[#777]"></div>
                  <div>
                    <NavLink
                      to="/services"
                      className={({ isActive }) =>
                        isActive
                          ? "underline text-[#cc866c] text-base"
                          : "hover:text-[#cc866c]"
                      }
                    >
                      Services
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Cards />
        <Slider />
        <PriceCard />
      </div>
    </>
  );
};

export default Services;
