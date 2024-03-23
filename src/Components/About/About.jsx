import AboutMain from "./AboutMain";
import Users from "../Users";
import Cards from "../Cards";
import Slider from "../Slider";
import Portfolio from "../Portfolio/Portfolio";
import News from "../News/News";
import Update from "../Update";
// import Footer from "../Footer";
const About = () => {
  return (
    <>
      <div className=" w-full overflow-hidden">
        <AboutMain />
        <Users />
        <Cards />
        <Slider />
        <Portfolio />
        <News />
      </div>
    </>
  );
};

export default About;
