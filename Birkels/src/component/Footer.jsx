
import img from '../assets/footer.jpg'
import logo from '../assets/logo-white.svg'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
export default function Footer() {
  return (
   <div className="relative w-full min-h-[400px] text-white overflow-hidden">
  {/* Background Image */}
 <img
  src={img}
  alt="Footer background"
  className="absolute bottom-1 left-0 w-full h-full object-cover"

/>


  

  <div className="absolute inset-0 bg-[#001F5C]/90"></div>




  {/* Content */}
  <div className="relative z-10 w-full max-w-[1020px] mx-auto h-full flex flex-col justify-between px-4 py-10">
    <div className="w-full max-w-[1010px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-2 items-start">
      {/* Logo Section */}
      <div className="flex justify-center md:justify-start mb-6 md:mb-0">
        <img src={logo} alt="Brikel Logo" className="w-40 sm:w-48" />
      </div>

      {/* Links Section */}
      <div className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-10 text-sm sm:text-base">
        {/* Company */}
        <div className="flex flex-col space-y-2">
          <h2 className="font-poppins text-white mb-2">Company</h2>
          <a href="#" className="hover:underline text-gray-200 font-poppins">Home</a>
          <a href="#" className="hover:underline text-gray-200 font-poppins">Bookings</a>
          <a href="#" className="hover:underline text-gray-200 font-poppins">FAQs</a>
          <a href="#" className="hover:underline text-gray-200 font-poppins">Contact</a>
        </div>

        {/* Legal */}
        <div className="flex flex-col space-y-2">
          <h2 className="font-poppins text-white mb-2 ">Legal</h2>
          <a href="#" className="hover:underline text-gray- font-poppins">Terms & Conditions</a>
          <a href="#" className="hover:underline text-gray-200 font-poppins">Privacy Policy</a>
          <a href="#" className="hover:underline text-gray-200 font-poppins">Cookies Policy</a>
        </div>

        {/* Contact */}
        <div className="flex flex-col space-y-2"> 
          <h2 className="font-semibold text-white mb-2">Contact</h2>
          <p className="text-gray-200 font-poppins">Address: Your Street, City, NG</p>
          <p className="text-gray-200 font-poppins">Tel: +234.....</p>
          <a href="mailto:hello@brikel.com" className="hover:underline text-gray-200 font-poppins">hello@brikel.com</a>
        </div>
      </div>
    </div>

    {/* Social + Copyright */}
    <div className="relative z-10 mt-10 w-full max-w-[1010px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="flex space-x-4 text-xl text-white">
        <FaFacebook className="hover:text-gray-300 transition" />
        <FaInstagram className="hover:text-gray-300 transition" />
        <FaLinkedin className="hover:text-gray-300 transition" />
        <FaTwitter className="hover:text-gray-300 transition" />
      </div>
      <h1 className="text-gray-300 text-sm text-center md:text-right font-poppins">© 2025 BRIKEL. All rights reserved.</h1>
    </div>
  </div>
</div>

  )
}
