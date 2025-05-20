
// import { IoIosArrowDown } from "react-icons/io";


// const Foa = () => {
//   return (
//     <div className="w-full min-h-[500px]  text-black py-16 px-4 sm:px-0 bg-blue-500">

//          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-[#003399] w-full text-center">FAQ</h1>
//          <div className="max-w-[1120px] mx-auto flex flex-col items-center text-center">
//           <div className="flex items-center justify-between w-full sm:max-w-[900px] border py-3 p-2 mt-10">
//             <h1>What services does Brikel provide?</h1>
//             <IoIosArrowDown/>
//           </div>
//       </div>
//     </div>
//   );
// };

// export default Foa;




import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import img from '../assets/circle.jpg'

import imgs from '../assets/web-screen.png'

const faqs = [
  {
    question: "What services does Brikel provide?",
    answer: "Brikel offers web development, app design, and digital strategy services."
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
    setOpenIndexes(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  return (
     <>
    <div
      className="w-full min-h-[500px] text-black py-16 px-4 sm:px-0  bg-cover bg-center relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 20, 61, 0.8), rgba(0, 41, 122, 0.8)),url(${img})`
      }}
    >
       
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-white w-full text-center">
        FAQ
      </h1>
 <div className="absolute inset-0 bg-[#001F5C]/40"></div>
      <div className="max-w-[1120px] mx-auto flex flex-col gap-4 items-center text-white">
        {faqs.map((item, index) => (
          <div
            key={index}
            className="w-full sm:max-w-[900px] bg-gradient-to-r from-[#00143D]/80 to-[#00297A]/80  backdrop-blur-md rounded-md border border-white/30 p-4 transition-all duration-300"
          >
            <div
              onClick={() => toggleAccordion(index)}
              className="flex justify-between items-center cursor-pointer"
            >
              <h2 className="text-lg font-semibold text-white">{item.question}</h2>
              <span className="text-white">
                {openIndexes.includes(index) ? <IoIosArrowUp size={24} /> : <IoIosArrowDown size={24} />}
              </span>
            </div>
            {openIndexes.includes(index) && (
              <div className="mt-2 text-white text-sm">
                {item.answer}
              </div>
            )}
          </div>
        ))} 
      </div>
    </div>
     <img src={imgs} alt="image" className="h-[300px] w-full" />
    
    </>
  );
};

export default Foa;

