import React from "react";

const Contact = () => {
  return (
    <section id="container" className="bg-[#222] py-20 overflow-x-auto">
      <div className="container mx-auto flex flex-col md:flex-row justify-center gap-10 px-5 md:px-10 max-md:items-center">
        <div className="text-white flex flex-col md:flex-row gap-5">
          <div className="w-20 h-20 rounded-full bg-[#cc866c] relative flex justify-center items-center">
            <h1 className="absolute top-6 right-8 ">Hh</h1>
          </div>
          <div>
            <h2 className="text-xl text-[#cc866c]">OFFICE ADDRESS</h2>
            <h5 className="mt-3">380 St Kilda Road, Melbourne</h5>
            <h5> VIC 3004, Australia</h5>
          </div>
        </div>
        <div className="text-white flex flex-col md:flex-row gap-5">
          <div className="w-20 h-20 rounded-full bg-[#cc866c] relative flex justify-center items-center">
            <h1 className="absolute top-6 right-8 ">Hh</h1>
          </div>
          <div>
            <h2 className="text-xl text-[#cc866c]">WORKING HOURS</h2>
            <h5 className="mt-3">Monday to Friday 09:00 to 18:30</h5>
            <h5>Saturday 15:30</h5>
          </div>
        </div>
        <div className="text-white flex flex-col md:flex-row gap-5">
          <div className="w-20 h-20 rounded-full bg-[#cc866c] relative flex justify-center items-center">
            <h1 className="absolute top-6 right-8 ">Hh</h1>
          </div>
          <div>
            <h2 className="text-xl text-[#cc866c]">MESSAGE US</h2>
            <h5 className="mt-3">support@example.com</h5>
            <h5>info@example.com</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
