"use client";
import React, { useState, useEffect } from "react";
import "./header.css";
import Image from "next/image";
import { GrLanguage } from "react-icons/gr";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai"; // Cross icon for sidebar

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar state

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Detect scroll and add sticky class
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`header_wrapper ${isSticky ? "sticky" : ""}`}>
        <div className="container-xxl">
          <div
            className={`row header-row align-items-center ${
              isSticky ? "small_row" : ""
            }`}
          >
            <div className="col-lg-3 col-md-4 col-sm-6 logo_header_area">
              <Image src={"/images/logo.svg"} alt="" width={50} height={50} />
            </div>
            <div className="col-lg-9 col-md-8 col-sm-6 web_items">
              <div className="d-flex align-items-center justify-content-end ">
                <div className="nav-items-wrapper">
                  <ul className="d-flex justify-content-center align-items-center p-0 mb-0">
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">Sign In</a>
                    </li>
                    <li>
                      <a href="#">Sign Up</a>
                    </li>
                  </ul>
                </div>
                <div className="dropdown">
                  {/* Dropdown Button */}
                  <button onClick={toggleDropdown} className="dropdown-button">
                    English <GrLanguage className="langauge_icon" />
                  </button>

                  {/* Dropdown Content */}
                  <div className={`dropdown-content ${isOpen ? "open" : ""}`}>
                    <ul>
                      <li onClick={() => alert("English selected")}>English</li>
                      <li onClick={() => alert("Arabic selected")}>Arabic</li>
                      <li onClick={() => alert("French selected")}>French</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8 col-sm-6 mobile_items_icon">
              <div className="text-end">
                <button
                  className="bars_menu_icon"
                  onClick={toggleSidebar} // Open sidebar on click
                >
                  <FaBars color="white" size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      {/* {isSidebarOpen && (
        <div className="sidebar">
          <button className="close-sidebar" onClick={toggleSidebar}>
            <AiOutlineClose size={24} />
          </button>
          <ul className="sidebar-menu">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Sign In</a>
            </li>
            <li>
              <a href="#">Sign Up</a>
            </li>
          </ul>
        </div>
      )} */}
      <div
        className={`overlay ${isSidebarOpen ? "open " : " "}`}
        onClick={toggleSidebar}
      ></div>
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <button className="close-sidebar" onClick={toggleSidebar}>
          &times;
        </button>
        <ul className="sidebar-menu">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Sign In</a>
          </li>
          <li>
            <a href="#">Sign Up</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
