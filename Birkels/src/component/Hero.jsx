
// import bgImage from '../assets/hero.jpg';

// export default function Hero() {
//   return (
//     <div className="w-full bg-[#f9f9f9] sm:py-[50px] p-5 sm:p-0">
//       <div
//         style={{ backgroundImage: `url(${bgImage})` }}
//         className="max-w-[1160px] sm:h-[750px] h-[500px] mx-auto bg-cover  p-2 bg-center bg-no-repeat flex flex-col items-center justify-center text-center px-4 rounded-xl shadow-lg relative overflow-hidden"
//       >
//         {/* Optional overlay for better text visibility */}
//         <div className="absolute inset-0 bg-black bg-opacity-40 z-0" />

//         {/* Content */}
//         <div className="relative z-10 text-white">
//           <h1 className="text-4xl md:text-5xl font-bold font-poppins p-2 sm:p-0  mb-6">
//             Premier Sports <br />
//             <span className='text-[26px] sm:text-[35px]'>Facility Management </span> 
//           </h1>
//           <p className="text-lg md:text-xl font-poppins sm:p-0 mb-8 max-w-[700px] mx-auto">
//            Sustainable, efficient, and effective solutions
//           </p>
//           <a href="tel:+1234567890" className=" sm:block">
//           <button className="w-[140px] h-[44px] rounded-full border-[1px] border-[#CCD6EB33] bg-[#F5F5F5]  text-[#003399] font-medium hover:bg-white hover:text-[#003399] transition duration-300">
//             Book a Call
//           </button>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }






import bgImage from '../assets/Hero picture.svg';

export default function Hero() {
  return (
    <div className="w-full bg-[#f9f9f9] sm:py-[50px] py-10 px-5 sm:px-0">
      <div
        style={{ backgroundImage: `url(${bgImage})` }}
        className="max-w-[1120px] sm:h-[774px] h-[665px] mx-auto bg-cover bg-center bg-no-repeat rounded-2xl shadow-lg relative flex items-center justify-center text-center px-4"
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0  bg-opacity-40 z-0" />

        {/* Content */}
        <div className="relative z-10 text-white max-w-[820px] w-full space-y-[35px] px-4">
          <h1 className="text-[28px] sm:text-[55px] leading-tight font-bold font-poppins">
            Premier Sports <br />
            <span className="text-[20px] sm:text-[55px] block">Facility Management</span>
          </h1>

          <p className="text-[16px] sm:text-xl font-poppins max-w-[700px] mx-auto">
            Sustainable, efficient, and effective solutions
          </p>

          <a href="tel:+1234567890" >
            <button className="sm:w-[194px] w-[149px] mt-[15px] h-[44px] px-[26px] py-[10px] rounded-full border border-[#003399] text-[#003399] font-medium bg-gradient-to-r from-[#CCD6EB] to-[#F5F5F5]
             hover:opacity-90 transition duration-300">
              Book a Call
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
