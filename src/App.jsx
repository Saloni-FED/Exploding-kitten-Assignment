
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import AboutMe from "./Pages/AboutMe";
import Services from "./Pages/Services";
import Update from "./Components/Update";
import Contact from "./Pages/Contact";
import { Outlet, createBrowserRouter } from "react-router-dom";
import News from "./Pages/News";
import Portfolio from "./Pages/Portfolio";
import Hero from "./Sections/Hero";
import ServicePort from "./Sections/Services"
import Projects from "./Sections/Projects";
import Skills from './Sections/SkillsPort'
import Testi from "./Sections/Testi";
import Social from "./Sections/Social";
const getData = async () => {
  const response = await fetch(
    "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
  );
  console.log(response);
  return response.json();
};

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Update />
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <AboutMe />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "news",
        element: <News />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
        loader: getData,
        children: [
          {
            path: "",
            element: <Hero />,
            loader: getData,
          },
          {
            path: "poservices",
            element: <ServicePort />,
            loader: getData,
          },
          {
            path: "poprojects",
            element: <Projects />,
            loader: getData,
          },
          {
            path: "skills",
            element: <Skills />,
            loader: getData,
          },
          {
            path: "potesti",
            element: <Testi />,
            loader: getData,
          },
          {
            path: "social",
            element: <Social />,
            loader: getData,
          },
        ],
      },
    ],
  },
]);

export default router;
