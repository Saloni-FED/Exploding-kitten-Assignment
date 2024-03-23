import { NavLink } from "react-router-dom";
import Blog from "../Components/Blog/Blog";
const News = () => {
  return (
    <>
      <div className="w-full">
        <main className="px-32 md:py-32  bg-gray-300  h-screen">
          <div className="flex  justify-center items-center  text-white md:pt-56">
            <div className="max-md:pt-32">
              <h1 className="text-5xl">BLOG</h1>
              <div className="mt-5 flex justify-center items-center gap-3 uppercase">
                <div className="">
                  <h3>Home</h3>
                </div>
                <div className="h-3 w-0.5 bg-[#777]"></div>
                <div className="">
                  <NavLink
                    to="/news"
                    className={({ isActive }) =>
                      isActive
                        ? "underline text-[#cc866c] text-base"
                        : "hover:text-[#cc866c]"
                    }
                  >
                    News
                  </NavLink>
                  {/* Nav<h3>About</h3> */}
                </div>
              </div>
            </div>
          </div>
        </main>
        <Blog />
      </div>
    </>
  );
};

export default News;
