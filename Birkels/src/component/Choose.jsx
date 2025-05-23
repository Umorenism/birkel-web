
// import pic from '../assets/Group 97.svg'

// export default function Choose() {
//   return (
//     <div className="w-full py-10 px-5">
//       <div className="max-w-[1120px] mx-auto flex flex-col items-center text-center">
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center bg-white  p-6 sm:p-12">
          
//           {/* Text Section */}
//           <div className="space-y-6 text-left">
//               <button className="bg-[#F0F3F9] border border-[#FBFCFD] text-[#003399] px-5 py-2 rounded-full hover:bg-blue-700 transition">Choose Birkel</button>
//             <p className="text-[#2A2A2A] font-poppins">
//               With the vision of transforming the way sports facilities are managed in Nigeria,
//               Brikel has quickly established itself as a leader in the sports facility management industry.
//             </p>
//             <div className="flex gap-4">
           
//               <button className="border border-[#00297A] bg-[#001F5C] text-white px-5 py-2 rounded-full hover:bg-blue-50 transition">Book a Call</button>
//             </div>
//           </div>

//           {/* Image Section */}
//           <div className="flex justify-center sm:justify-end">
//             <img src={pic} alt="Birkel Illustration" className="w-full max-w-[400px] h-auto object-contain" />
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }


import pic from "../assets/Group 97.svg";

export default function Choose() {
  return (
    <div className="w-full py-10 px-5 min-h-[524px]">
      <div className="max-w-[1120px] mx-auto flex flex-col items-center text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center bg-white p-6 sm:p-12">
          {/* Text Section */}
          <div className="space-y-6 text-left">
            <div className="w-fit p-[2px] rounded-[100px] bg-gradient-to-r from-[#003399] to-[#CCD6EB]">
              <button className="bg-gradient-to-r from-[#CCD6EB] to-[#F5F5F5] w-[146px] h-[41px] text-[#003399] px-5 py-2 rounded-full font-[500]  hover:opacity-90 transition">
                Choose Birkel
              </button>
            </div>

            <p className="text-[#2A2A2A] font-poppins">
              With the vision of transforming the way sports facilities are
              managed in Nigeria, Brikel has quickly established itself as a
              leader in the sports facility management industry.
            </p>
            <div className="flex gap-4">
              {/* <button className="border border-[#00297A] bg-[#001F5C] text-white px-5 py-2 rounded-full hover:bg-blue-50 transition">
                Book a Call
              </button> */}

             
              <button className="bg-gradient-to-r from-[#001F5C] to-[#00297A] w-[146px] h-[41px] text-[#FFFFFF] font-poppins font-[500] px-5 py-2 rounded-[100px]  hover:opacity-90 transition">
               Book a Call
             </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center sm:justify-end">
            <img
              src={pic}
              alt="Birkel Illustration"
              className="w-full max-w-[300px] sm:max-w-[379px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
