



// import { useState } from "react";
// import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
// import img from '../assets/circle.jpg'

// import imgs from '../assets/web-screen.png'

// const faqs = [
//  {
//   question: "What services does Brikel provide?",
//   answer: "We offer comprehensive sport facility management solutions, including:\n- Daily operations and supervision\n- Staffing and personnel management\n- Facility maintenance (routine and emergency)\n- Event planning and coordination\n- Scheduling and booking management\n- Marketing and revenue optimization strategies"
// },

//   {
//     question: "How can I contact Brikel?",
//     answer: "You can reach us via our contact form or at contact@brikel.com."
//   },
//   {
//     question: "Where is Brikel located?",
//     answer: "We are headquartered in New York, with remote teams worldwide."
//   },
//   {
//     question: "What industries does Brikel serve?",
//     answer: "We work with tech startups, healthcare, finance, and eCommerce companies."
//   },
//   {
//     question: "Does Brikel offer support after project completion?",
//     answer: "Yes, we provide ongoing support and maintenance for completed projects."
//   },
//   {
//     question: "Can Brikel handle enterprise-level projects?",
//     answer: "Absolutely! We’ve worked with companies of all sizes, including Fortune 500s."
//   },
//   {
//     question: "What’s Brikel’s design process like?",
//     answer: "Our process includes discovery, wireframes, prototypes, testing, and launch."
//   },
//   {
//     question: "Is Brikel hiring?",
//     answer: "Check our Careers page for current openings!"
//   },
// ];

// const Foa = () => {
//   const [openIndexes, setOpenIndexes] = useState([]);

//   const toggleAccordion = (index) => {
//     setOpenIndexes(prev =>
//       prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
//     );
//   };

//   return (
//      <>
//     <div
//       className="w-full min-h-[500px] text-black py-16 px-4 sm:px-0  bg-cover bg-center relative"
//       style={{
//         backgroundImage: `linear-gradient(rgba(0, 20, 61, 0.8), rgba(0, 41, 122, 0.8)),url(${img})`
//       }}
//     >
       
//       <h1 className="text-3xl max-w-[1120px] sm:text-4xl font-bold mb-8 text-white w-full text-center">
//         FAQ
//       </h1>
//  <div className="absolute inset-0 rounded-[5px] bg-[#001F5C]/40"></div>
//       <div className="max-w-[1120px] mx-auto flex flex-col gap-4 items-center text-white">
//         {faqs.map((item, index) => (
//           <div
//             key={index}
//             className="w-full sm:max-w-[800px] py-2 bg-gradient-to-r from-[#00143D]/80 to-[#00297A]/80  backdrop-blur-md rounded-md border border-white/30 p-4 transition-all duration-300"
//           >
//             <div
//               onClick={() => toggleAccordion(index)}
//               className="flex justify-between items-center cursor-pointer"
//             >
//               <h2 className="text-lg font-semibold font-poppins text-white">{item.question}</h2>
//               <span className="text-white">
//                 {openIndexes.includes(index) ? <IoIosArrowUp size={24} /> : <IoIosArrowDown size={24} />}
//               </span>
//             </div>
//             {openIndexes.includes(index) && (
//               <div className="mt-2 text-white font-poppins text-sm">
//                 {item.answer}
//               </div>
//             )}
//           </div>
//         ))} 
//       </div>
//     </div>
//      <img src={imgs} alt="image" className="h-[300px] w-full" />
    
//     </>
//   );
// };

// export default Foa;





import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import img from '../assets/circle.jpg';
import imgs from '../assets/web-screen.png';

const faqs = [
  {
    question: "What services does Brikel provide?",
    answer:
      "We offer comprehensive sport facility management solutions, including:\n- Daily operations and supervision\n- Staffing and personnel management\n- Facility maintenance (routine and emergency)\n- Event planning and coordination\n- Scheduling and booking management\n- Marketing and revenue optimization strategies"
  },
  {
    question: "How can I contact Brikel?",
    answer: "You can reach us via our contact form or at contact@brikel.com."
  },
  {
    question: "Where is Brikel located?",
    answer: "We are headquartered in New York, with remote teams worldwide."
  },
  {
    question: "What industries does Brikel serve?",
    answer: "We work with tech startups, healthcare, finance, and eCommerce companies."
  },
  {
    question: "Does Brikel offer support after project completion?",
    answer: "Yes, we provide ongoing support and maintenance for completed projects."
  },
  {
    question: "Can Brikel handle enterprise-level projects?",
    answer: "Absolutely! We’ve worked with companies of all sizes, including Fortune 500s."
  },
  {
    question: "What’s Brikel’s design process like?",
    answer: "Our process includes discovery, wireframes, prototypes, testing, and launch."
  },
  {
    question: "Is Brikel hiring?",
    answer: "Check our Careers page for current openings!"
  },
];

const Foa = () => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleAccordion = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <>
      <div
        className="w-full bg-cover bg-center relative py-[100px] px-4 sm:px-8"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 20, 61, 0.8), rgba(0, 41, 122, 0.8)), url(${img})`,
        }}
      >
        {/* Optional semi-transparent overlay (if needed visually) */}
        {/* <div className="absolute inset-0 bg-[#001F5C]/40 z-0" /> */}

        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#00297A] to-[#00143D] opacity-70" />


        {/* Content container */}
        <div className="relative z-10 max-w-[1280px] mx-auto flex flex-col gap-[50px]">
          <h1 className="text-3xl sm:text-4xl font-bold text-white text-center">
            FAQ
          </h1>

          {/* FAQ Accordions */}
          <div className="max-w-[1120px] mx-auto flex flex-col gap-6 items-center text-white px-2 sm:px-0">
            {faqs.map((item, index) => (
              <div
                key={index}
                className="w-full sm:max-w-[1120px] bg-gradient-to-r from-[#00143D]/80 to-[#00297A]/80 backdrop-blur-md rounded-md border border-white/30 p-4 transition-all duration-300"
              >
                <div
                  onClick={() => toggleAccordion(index)}
                  className="flex justify-between items-center cursor-pointer"
                >
                  <h2 className="text-base sm:text-lg font-semibold font-poppins text-white">
                    {item.question}
                  </h2>
                  <span className="text-white">
                    {openIndexes.includes(index) ? (
                      <IoIosArrowUp size={24} />
                    ) : (
                      <IoIosArrowDown size={24} />
                    )}
                  </span>
                </div>
                {openIndexes.includes(index) && (
                  <div className="mt-2 text-white font-poppins text-sm whitespace-pre-line">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Below Section */}
      <img
        src={imgs}
        alt="Web Screen"
        className="w-full h-auto object-cover max-h-[400px] sm:max-h-[301px]"
      />
    </>
  );
};

export default Foa;
