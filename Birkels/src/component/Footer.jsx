import img from "../assets/footer.jpg";
import logo from "../assets/logo-white.svg";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
export default function Footer() {
  return (
    <div className="relative w-full min-h-[400px] text-white overflow-hidden">
      {/* Background Image */}
      <img
        src={img}
        alt="Footer background"
        className="absolute bottom-1 left-0 w-full h-full object-cover"
      />

      <div className="absolute z-2 inset-0 bg-[#001F5C]/90"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1000px] mx-auto h-full flex flex-col justify-between px-4 py-10">
        <div className="w-full max-w-[950px]  mx-auto grid grid-cols-1 md:grid-cols-2 gap-2 items-start">
          {/* Logo Section */}
          <div className="flex justify-center md:justify-start mb-6 md:mb-0">
            <img src={logo} alt="Brikel Logo" className="w-40 sm:w-48" />
          </div>

          {/* Links Section */}
          <div className="w-full grid grid-cols-2 sm:p-0 sm:grid-cols-2 md:grid-cols-3 gap-10 p-4 text-sm sm:text-base">
            {/* Company */}
            <div className="flex flex-col space-y-1">
              <h2 className="font-poppins text-white mb-3 font-[700]">Company</h2>
              <div className="space-y-4">
             <p className="text-gray-200 font-poppins">

              <a
                href="#"
                className="hover:underline text-gray-200 font-poppins"
              >
                Home
              </a>
             </p>
              <p className="text-gray-200 font-poppins">

              <a
                href="#"
                className="hover:underline text-gray-200 font-poppins"
              >
                Bookings
              </a>
              </p>
              <p className="text-gray-200 font-poppins">

              <a
                href="#"
                className="hover:underline text-gray-200 font-poppins"
              >
                FAQs
              </a>
              </p>
              <p className="text-gray-200 font-poppins">

              <a
                href="#"
                className="hover:underline text-gray-200 font-poppins"
              >
                Contact
              </a>
              </p>
              </div>
            </div>

            {/* Legal */}
            <div className="flex flex-col space-y-1">
              <h2 className="font-poppins text-white mb-3 font-[700] ">Legal</h2>
              <div className="space-y-4">
                <p className="text-gray-200 font-poppins">
                  <a
                    href="#"
                    className="hover:underline text-gray- font-poppins"
                  >
                    Terms & Conditions
                  </a>
                </p>
                <p className="text-gray-200 font-poppins">
                  <a
                    href="#"
                    className="hover:underline text-gray-200 font-poppins"
                  >
                    Privacy Policy
                  </a>
                </p>
                <p className="text-gray-200 font-poppins">
                  <a
                    href="#"
                    className="hover:underline text-gray-200 font-poppins"
                  >
                    Cookies Policy
                  </a>
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="flex flex-col sm:ml-0 ml-20 space-y-1">
              <h2 className=" text-white mb-3 font-[700]">Contact</h2>
              <div className="space-y-3">
                <p className="text-gray-200 font-poppins">Address:</p>
                <p className="text-gray-200 font-poppins ">Tel: +234.....</p>
                <p className="text-gray-200 font-poppins ">
                 
                  <a
                    href="mailto:hello@brikel.com"
                    className="hover:underline text-gray-200 font-poppins"
                  >
                    hello@brikel.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Social + Copyright */}
        <div className="relative z-10 w-full max-w-[950px] sm:mt-20 mt-[80px] h-[80%] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex space-x-4 text-xl text-white sm:mb-0 mb-20">
            <FaFacebook className="hover:text-gray-300 transition" />
            <FaInstagram className="hover:text-gray-300 transition" />
            <FaLinkedin className="hover:text-gray-300 transition" />
            <FaTwitter className="hover:text-gray-300 transition" />
          </div>
          <h1 className="text-gray-300 text-sm text-center md:text-right font-poppins">
            © 2025 BRIKEL. All rights reserved.
          </h1>
        </div>
      </div>
    </div>
  );
}
