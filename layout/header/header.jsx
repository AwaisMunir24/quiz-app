"use client"
import React ,{useState} from 'react'
import './header.css'
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  return (
    <header className='header_wrapper'>
        <div className='container-fluid'>
            <div className='row header-row align-items-center'>
                <div className='col-lg-3'>
                    <h4 className='mb-0'>logo</h4>
                </div>
                <div className='col-lg-6'>
                    <div className='nav-items-wrapper'>
                        <ul className='d-flex justify-content-center align-items-center p-0 mb-0'>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Sign In</a></li>
                            <li><a href="#">Sign Up</a></li>
                        </ul>
                    </div>
                </div>
                <div className='col-lg-3 d-flex justify-content-end'>
                <div className="dropdown">
      {/* Dropdown Button */}
      <button onClick={toggleDropdown} className="dropdown-button">
        Select Language
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
        </div>
    </header>
  )
}

export default Header