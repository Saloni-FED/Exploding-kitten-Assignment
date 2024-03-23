import { NavLink } from "react-router-dom";
import ContactMain from "../Components/Contact/Contact";
import Appointment from "../Components/Appoinment/Appointment";
const Contact = () => {
  return (
    <>
      <div>
        <main className="px-4 md:px-32 py-16 md:py-32 bg-gray-300">
          <div className="text-white text-center md:text-left max-md:py-32">
            <h1 className="text-3xl md:text-5xl">Contact</h1>
            <div className="mt-5 flex flex-col md:flex-row items-center justify-center gap-3 uppercase max-md:hidden">
              <NavLink exact to="/" className="hover:text-[#cc866c]">
                Home
              </NavLink>
              <div className="h-3 w-0.5 bg-[#777] hidden md:block"></div>
              <NavLink
                exact
                to="/contact"
                className="hover:text-[#cc866c] underline md:no-underline"
              >
                Contact
              </NavLink>
            </div>
          </div>
        </main>
        <ContactMain/>
        <Appointment/>
      </div>
    </>
  );
};

export default Contact;
