
const Appointment = () => {
  return (
    <section className="bg-black text-white py-20 px-5">
      <div className="container mx-auto flex flex-col md:flex-row gap-10 px-5 md:px-10 py-20">
        <div className="md:basis-1/2">
          <iframe
            className="w-full h-96 md:h-[600px]"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12080.73732861526!2d-74.0059418!3d40.7127847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMDA2JzEwLjAiTiA3NMKwMjUnMzcuNyJX!5e0!3m2!1sen!2sus!4v1648482801994!5m2!1sen!2sus"
          ></iframe>
        </div>
        <div className="md:basis-1/2">
          <div>
            <h5 className="text-base font-thin text-[#cc866c]">GET A QUOTE</h5>
            <h2 className="text-4xl md:text-6xl font-thin mt-3">
              MAKE AN APPOINTMENT
            </h2>
          </div>
          <form
            action=""
            className="w-full md:w-4/5 mt-7 flex flex-col gap-3 text-black uppercase"
          >
            <input
              type="text"
              className="px-8 py-4 rounded-full outline-none"
              placeholder="First Name"
            />
            <input
              type="text"
              className="px-8 py-4 rounded-full outline-none"
              placeholder="Email"
            />
            <input
              type="text"
              className="px-8 py-4 rounded-full outline-none"
              placeholder="Phone No"
            />
            <textarea
              type="text"
              className="outline-none px-8 py-4 rounded-3xl"
              placeholder="write comments"
              cols="30"
              rows="5"
            />
            <button className="text-white rounded-full px-7 py-4 bg-[#cc866c] mt-5 uppercase w-fit hover:text-black hover:bg-white transition-all duration-700">
              Submit now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
