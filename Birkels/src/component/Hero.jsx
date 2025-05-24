
import bgImage from "../assets/Hero picture.svg";

export default function Hero() {
  return (
    <div className="w-full bg-[#f9f9f9] sm:py-[50px] py-10 px-5 sm:px-0">
      <div
        style={{ backgroundImage: `url(${bgImage})` }}
        className="max-w-[1200px] sm:h-[774px] h-[665px] mx-auto bg-cover bg-center bg-no-repeat rounded-[50px] shadow-lg relative flex items-center justify-center text-center px-4"
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0  bg-opacity-40 z-0" />

        {/* Content */}
        <div className="relative z-10 text-white max-w-[820px] w-full space-y-[35px] px-4">
          <h1 className="text-[28px] sm:text-[55px] leading-tight font-bold font-poppins">
            Premier Sports <br />
            <span className="text-[20px] sm:text-[55px] block">
              Facility Management
            </span>
          </h1>

          <p className="text-[16px] sm:text-xl font-poppins max-w-[700px] mx-auto">
            Sustainable, efficient, and effective solutions
          </p>

          <div className="w-full flex items-center justify-center">
            <a href="tel:+1234567890">
              <div className="sm:w-[150px]  w-[150px] h-[48px] bg-[#CCD6EB] rounded-full flex items-center justify-center">
                <button
                  className="px-[26px] py-[10px] h-[90%] sm:w-[95%] flex items-center rounded-full border border-[#003399] text-[#003399] font-medium bg-gradient-to-r from-[#CCD6EB] to-[#F5F5F5]
                 hover:opacity-90 transition duration-300 "
                >
                  Book a Call
                </button>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
