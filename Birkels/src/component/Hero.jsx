




import React from 'react';
import bgImage from '../assets/hero.jpg';

export default function Hero() {
  return (
    <div className="w-full bg-[#f9f9f9] sm:py-[50px] p-5 sm:p-0">
      <div
        style={{ backgroundImage: `url(${bgImage})` }}
        className="max-w-[1120px] h-[500px] mx-auto bg-cover p-4 bg-center bg-no-repeat flex flex-col items-center justify-center text-center px-4 rounded-xl shadow-lg relative overflow-hidden"
      >
        {/* Optional overlay for better text visibility */}
        <div className="absolute inset-0 bg-black bg-opacity-40 z-0" />

        {/* Content */}
        <div className="relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Welcome to Birkes
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-[700px] mx-auto">
            We provide top-notch solutions tailored to your needs. Discover our
            expertise and explore what we can build together.
          </p>
          <a href="tel:+1234567890" className="hidden sm:block">
          <button className="w-[140px] h-[44px] rounded-full border-[1px] border-[#CCD6EB33] bg-[#F5F5F5]  text-[#003399] font-medium hover:bg-white hover:text-[#003399] transition duration-300">
            Book a Call
          </button>
          </a>
        </div>
      </div>
    </div>
  );
}
