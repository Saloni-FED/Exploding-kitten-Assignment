import Bg from "../../assets/images/testimonial-bg.png";
import Quote from "../../assets/images/blockquote.png";
import { NavLink } from "react-router-dom";

const Blog = () => {
  return (
    <section id="blog" className="bg-black text-white w-full">
      <div className="container mx-auto flex flex-col md:flex-row justify-center px-5 py-20">
        <div className="md:max-w-2/3 flex flex-col gap-10">
          {/* Blog Cards */}
          {[1, 2, 3, 4].map((index) => (
            <div key={index} className="relative">
              <img src={Bg} alt="" className="w-full mx-auto h-96 max-md:h-48" />
              <div className="absolute top-0 right-0 bg-[#cc866c] text-white px-6 py-4 max-md:hidden">
                <div className="flex gap-3">
                  <h1>Date</h1>
                  <h1>24 March 2021</h1>
                </div>
              </div>
              <div className="bg-[#222] mx-auto py-10 px-5 text-[#777]">
                {/* Blog Info */}
                <div className="flex gap-3">
                  <div className="flex gap-2 text-sm border-r-2 border-[#777] px-2 items-end">
                    <div>Hi</div>
                    <div>
                      <h1>100 Views</h1>
                    </div>
                  </div>
                  <div className="flex gap-2 text-sm border-r-2 border-[#777] px-2 items-center">
                    <div>Hi</div>
                    <div>
                      <h1>35 Comments</h1>
                    </div>
                  </div>
                  <div className="flex gap-2 text-sm border-r-2 border-[#777] px-2 items-center">
                    <div>Hi</div>
                    <div className="max-mdLhidden">
                      <h1>by Hetmayar</h1>
                    </div>
                  </div>
                </div>
                {/* Blog Content */}
                <h1 className="mt-5 text-3xl font-light hover:text-[#cc866c] cursor-pointer">
                  LOREM IPSUM DOLOR SIT AMET, CONSECTETUR CING ELIT, SED
                  <br />
                  DO EIUSMOD TEMPOR.
                </h1>
                <p className="text-base mt-3 leading-6">
                  Novia's spaciously two bedroom apartments are perfect for
                  families and even business partners. Look out into the
                  Manhattan skyline from the open fully equipped kitchen.
                </p>
              </div>
            </div>
          ))}
          {/* Pagination */}
          <div className="flex flex-wrap max-md:gap-3 justify-center items-center mt-10">
            {[1, 2, 3, 4, "...", 6, 7].map((item, index) => (
              <div
                key={index}
                className="w-12 h-12 rounded-full bg-[#222] text-sm flex justify-center items-center hover:bg-white hover:text-black transition-all duration-700"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        {/* Sidebar */}
        <div className="md:w-1/3 mt-10 md:mt-0">
          {/* Search */}
          <div className="w-full bg-[#222] mx-auto p-5 mb-7">
            <h1 className="uppercase text-xl border-b border-[#777] pb-3">
              SEARCH
            </h1>
            <div className="py-5 flex">
              <input
                type="text"
                className="py-3 px-1"
                placeholder="Search..."
              />
              <NavLink
                to="/news"
                className="border py-5 px-1 w-1/2 bg-[#cc866c] text-white flex justify-center items-center"
              >
                Search
              </NavLink>
            </div>
          </div>
          {/* Follow Us */}
          <div className="w-full bg-[#222] mx-auto p-5 mb-7">
            <h1 className="uppercase text-xl border-b border-[#777] pb-3">
              Follow Us
            </h1>
            <div className="pt-6 pb-3 flex gap-2">
              {[0, 1, 2, 3, 4].map((item, index) => (
                <div
                  key={index}
                  className="w-10 h-10 rounded-full border border-[#777] bg-[#222] flex justify-center items-center hover:bg-[#cc866c] hover:text-white transition-all duration-700"
                >
                  <h1>tit</h1>
                </div>
              ))}
            </div>
          </div>
          {/* Categories */}
          <div className="w-full bg-[#222] mx-auto p-5 mb-7">
            <h1 className="uppercase text-xl border-b border-[#777] pb-3">
              Categories
            </h1>
            <div className="py-3 flex flex-col text-[#777]">
              {[
                { name: "Branding", serial: "(4)" },
                { name: "Corporat", serial: "(3)" },
                { name: "Design", serial: "(3)" },
                { name: "Gallery", serial: "(4)" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-end py-2 border-b border-[#777]"
                >
                  <div>
                    <h1>{item.name}</h1>
                  </div>
                  <div>
                    <h1>{item.serial}</h1>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Recent Posts */}
          <div className="w-full bg-[#222] mx-auto p-5 mb-7">
            <h1 className="uppercase text-xl border-b border-[#777] pb-3">
              RECENT POSTS
            </h1>
            <div className="py-3 flex flex-col text-[#777]">
              {[
                {
                  title: "User Experience Psychology And",
                  date: "August 19, 2021",
                },
                {
                  title: "Monthly Web Development Up Cost Of JavaScript",
                  date: "August 19, 2021",
                },
                {
                  title: "There are many variation passages of like",
                  date: "August 19, 2021",
                },
              ].map((item, index) => (
                <div key={index} className="py-2 border-b border-[#777]">
                  <h1>{item.title}</h1>
                  <h1>{item.date}</h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
