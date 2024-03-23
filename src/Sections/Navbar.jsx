// import React from "react";
// import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
const Navbar = ({ about }) => {
  const links = [
    {
      url:'/portfolio',
      title: "Hero",
    },
    {
      url:'/portfolio/poservices',
      title: "Services",
    },
    {
      url:'/portfolio/poprojects',
      title: "Projects",
    },
    {
       url:'/portfolio/skills',
      title: "Skills",
    },
    {
      url:'/portfolio/potesti',
      title: "Testimonials",
    },
    {
      url:'/portfolio/social',
      title: "Social",
    },
  ];
  const name = about.about.name.split(" ");
  return (
    <div className="h-full  flex justify-around items-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-[#cc866c] z-10">
      {/* Navbar */}
      <div className="">
        <Link
          href="/portfolio"
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center max-md:hidden border-2 border-[#cc866c]"
        >
          <span className="text-white mr-1">{name[0]}</span>
          <span className="w-12 h-8 rounded bg-[#cc866c] text-white flex items-center justify-center">
            {name[1]}
          </span>
        </Link>
      </div>
      <div className="flex justify-center max-md:items-end  items-center gap-5 flex-wrap">
        {links.map((items)=>{
            return <Link to={items.url} key={items.title}>{items.title}</Link>
        })}
      </div>
    </div>
  );
};

export default Navbar;
