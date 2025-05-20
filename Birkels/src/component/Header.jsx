import React, { useState } from "react";
import logo from "../assets/birkeslogo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white  z-50">
        <div className="max-w-[1060px] mx-auto px-4 flex justify-between items-center py-5">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <img src={logo} alt="Logo" className="h-14 w-14 object-contain" />

            <nav className="hidden md:flex items-center gap-10">
              <ul className="flex items-center gap-8 text-gray-700 font-medium">
                <li className="hover:text-[#003399] cursor-pointer">Home</li>

                <li className="hover:text-[#003399] cursor-pointer flex items-center gap-1">
                  About Us <IoIosArrowDown size={16} />
                </li>

                <li className="hover:text-[#003399] cursor-pointer flex items-center gap-1">
                  Expertise <IoIosArrowDown size={16} />
                </li>

                <li className="hover:text-[#003399] cursor-pointer flex items-center gap-1">
                  Products <IoIosArrowDown size={16} />
                </li>

                <li className="hover:text-[#003399] cursor-pointer">Pricing</li>
              </ul>
            </nav>
          </div>
          <a href="tel:+1234567890" className="hidden sm:block">
          <button className="w-[140px] h-[44px] bg-[#1212121A] hidden sm:block rounded-full border border-[#003399] text-[#003399] font-medium">
            Book a Call
          </button>
          </a>

          {/* Desktop Nav */}

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleDrawer}>
              {drawerOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Side Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col gap-6 pt-20">
          <img src={logo} alt="Logo" className="h-12 w-12 object-contain" />
          <ul className="flex flex-col gap-6 text-gray-700 font-medium">
            <li
              className="hover:text-[#003399] cursor-pointer"
              onClick={toggleDrawer}
            >
              Home
            </li>
            <li
              className="hover:text-[#003399] cursor-pointer"
              onClick={toggleDrawer}
            >
              About Us
            </li>
            <li
              className="hover:text-[#003399] cursor-pointer"
              onClick={toggleDrawer}
            >
              Expertise
            </li>
            <li
              className="hover:text-[#003399] cursor-pointer"
              onClick={toggleDrawer}
            >
              Products
            </li>
            <li
              className="hover:text-[#003399] cursor-pointer"
              onClick={toggleDrawer}
            >
              Pricing
            </li>
          </ul>
          <button className="bg-[#1212121A] px-6 py-2 rounded-full text-[#003399] mt-6">
            Book a Call
          </button>
        </div>
      </div>

      {/* Backdrop */}
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={toggleDrawer}
        ></div>
      )}

      {/* Push content down to prevent it hiding behind fixed header */}
      <div className="pt-[88px]" />
    </>
  );
};

export default Header;
