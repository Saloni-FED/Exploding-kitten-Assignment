import { FaRegCheckCircle } from "react-icons/fa";
const PriceCard = () => {
  return (
    <>
      {/* Section
      
      */}
      <div className="bg-[#222] py-32  w-full">
        <div className="text-center pb-10">
          <h1 className="text-base text-[#cc866c]">
            BEST VALUE AT YOUR SERVICE
          </h1>
          <h1 className="text-white text-6xl uppercase font-thin tracking-tighter mt-2">
            Pricing
          </h1>
        </div>
        <div className="flex flex-wrap justify-center gap-9  px-5">
          <div
            id="card"
            className="max-w-sm border border-[#777] bg-[#222] text-white py-6 text-center md:basis-1/3 max-md:w-full"
          >
            <h5 className="text-2xl">BASIC PLAN</h5>
            <h2 className="text-4xl text-[#cc866c] mt-3 font-normal">$49</h2>
            <h2 className="bg-[#777] w-32 h-0.5 mx-auto mt-3"></h2>
            <div className="mt-3 text-[#777] text-base flex flex-col gap-5">
              <span className="flex justify-center items-center gap-2">
                <FaRegCheckCircle className="text-[#cc866c]  font-bold" />
                <div>Three Keyword Monitors</div>
              </span>
              <span className="flex justify-center items-center gap-2">
                <FaRegCheckCircle className="text-[#cc866c]  font-bold" />
                <div>Three Brand Monitors</div>
              </span>
              <span className="flex justify-center items-center gap-2">
                <FaRegCheckCircle className="text-[#cc866c]  font-bold" />
                <div>300 Search Results</div>
              </span>
              <span className="flex justify-center items-center gap-2">
                <FaRegCheckCircle className="text-[#cc866c]  font-bold" />
                <div>Full Social Profiles</div>
              </span>
              <span className="flex justify-center items-center gap-2">
                <FaRegCheckCircle className="text-[#cc866c]  font-bold" />
                <div>Basic Quota</div>
              </span>
              <span className="flex justify-center items-center gap-2">
                <FaRegCheckCircle className="text-[#cc866c]  font-bold" />
                <div>PDF reports</div>
              </span>
              <button className="uppercase text-white bg-[#cc866c] w-fit mx-auto py-3 px-7 rounded-full hover:bg-black transition-all duration-700 ">
                Start Now
              </button>
            </div>
          </div>

          <div
            id="card"
            className="max-w-sm border border-[#777] bg-[#222] text-white py-6 text-center md:basis-1/3 max-md:w-full"
          >
            <h5 className="text-2xl">BASIC PLAN</h5>
            <h2 className="text-4xl text-[#cc866c] mt-3 font-normal">$49</h2>
            <h2 className="bg-[#777] w-32 h-0.5 mx-auto mt-3"></h2>
            <div className="mt-3 text-[#777] text-base flex flex-col gap-5">
              <span className="flex justify-center items-center gap-2">
                <FaRegCheckCircle className="text-[#cc866c]  font-bold" />
                <div>Three Keyword Monitors</div>
              </span>
              <span className="flex justify-center items-center gap-2">
                <FaRegCheckCircle className="text-[#cc866c]  font-bold" />
                <div>Three Brand Monitors</div>
              </span>
              <span className="flex justify-center items-center gap-2">
                <FaRegCheckCircle className="text-[#cc866c]  font-bold" />
                <div>300 Search Results</div>
              </span>
              <span className="flex justify-center items-center gap-2">
                <FaRegCheckCircle className="text-[#cc866c]  font-bold" />
                <div>Full Social Profiles</div>
              </span>
              <span className="flex justify-center items-center gap-2">
                <FaRegCheckCircle className="text-[#cc866c]  font-bold" />
                <div>Basic Quota</div>
              </span>
              <span className="flex justify-center items-center gap-2">
                <FaRegCheckCircle className="text-[#cc866c]  font-bold" />
                <div>PDF reports</div>
              </span>
              <button className="uppercase text-white bg-[#cc866c] w-fit mx-auto py-3 px-7 rounded-full hover:bg-black transition-all duration-700 ">
                Start Now
              </button>
            </div>
          </div>

          <div
            id="card"
            className="max-w-sm border border-[#777] bg-[#222] text-white py-6 text-center md:basis-1/3 max-md:w-full"
          >
            <h5 className="text-2xl">BASIC PLAN</h5>
            <h2 className="text-4xl text-[#cc866c] mt-3 font-normal">$49</h2>
            <h2 className="bg-[#777] w-32 h-0.5 mx-auto mt-3"></h2>
            <div className="mt-3 text-[#777] text-base flex flex-col gap-5">
              <span className="flex justify-center items-center gap-2">
                <FaRegCheckCircle className="text-[#cc866c]  font-bold" />
                <div>Three Keyword Monitors</div>
              </span>
              <span className="flex justify-center items-center gap-2">
                <FaRegCheckCircle className="text-[#cc866c]  font-bold" />
                <div>Three Brand Monitors</div>
              </span>
              <span className="flex justify-center items-center gap-2">
                <FaRegCheckCircle className="text-[#cc866c]  font-bold" />
                <div>300 Search Results</div>
              </span>
              <span className="flex justify-center items-center gap-2">
                <FaRegCheckCircle className="text-[#cc866c]  font-bold" />
                <div>Full Social Profiles</div>
              </span>
              <span className="flex justify-center items-center gap-2">
                <FaRegCheckCircle className="text-[#cc866c]  font-bold" />
                <div>Basic Quota</div>
              </span>
              <span className="flex justify-center items-center gap-2">
                <FaRegCheckCircle className="text-[#cc866c]  font-bold" />
                <div>PDF reports</div>
              </span>
              <button className="uppercase text-white bg-[#cc866c] w-fit mx-auto py-3 px-7 rounded-full hover:bg-black transition-all duration-700 ">
                Start Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PriceCard;
