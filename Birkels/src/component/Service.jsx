import { IoIosLock } from "react-icons/io";
import { TiSpanner } from "react-icons/ti";
import { TbDeviceAnalytics } from "react-icons/tb";
const Services = () => {
  return (
    <div className="w-full  text-black py-16 px-4 sm:px-0">
      <div className="max-w-[1120px] mx-auto flex flex-col items-center text-center">
        {/* Button */}
        <a href="tel:+1234567890" className="hidden sm:block">
          <div className="mb-6 w-[141px] h-[43px] rounded-full p-[2px] bg-gradient-to-r from-[#003399] to-[#CCD6EB]">
            <button className="w-full h-full bg-gradient-to-r from-[#FBFCFD] to-[#F0F3F9] rounded-full text-[#003399] font-medium hover:opacity-90 transition duration-300">
              Book a Call
            </button>
          </div>
        </a>

        {/* Title and Text */}
        <h1 className="text-3xl sm:text-4xl font-poppins mb-10 sm:mb-5 text-[#003399]">
          Welcome to Brikel
        </h1>
        <div className="max-w-[1120px] mt-4 h-[60px] w-full  flex justify-center items-center flex-col">
        <p className="text-md sm:text-start font-[400] text-center font-poppins ">
          With innovative strategies, advanced technology, and a strong
          commitment
        </p>
        <p className="text-md sm:text-start fontt-[400] text-center  font-poppins mb-12">
          to client satisfaction, we deliver top-notch maintenance and
          optimization for sports spaces.
        </p>
        </div>

        {/* Cards */}
        <div className="w-full mt-5 sm:mt-0 grid grid-cols-1  md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-[#fofofo] border border-[#BAE5FA] text-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <TbDeviceAnalytics className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold font-poppins mb-2 text-[#003399]">
              Reporting & Analytics
            </h3>
            <p>
              Generate detailed reports on maintenance activities, asset
              performance and more for informed decision-making
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#fofofo] text-gray-800 border border-[#BAE5FA] p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <TiSpanner className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold font-poppins mb-2">
              Maintenance Scheduling
            </h3>
            <p>
              Prevent unexpected failures through time and equipment usage data
              maintenance schedules
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#fofofo] border border-[#BAE5FA] text-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <IoIosLock className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold font-poppins mb-2">
              Security
            </h3>
            <p className="font-poppins">
              We offer robust security measures to protect sensitive information
              including data encryption, user authentication and more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
