import React from "react";
import "./footer.css";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="container-xxl">
        <div className="row ">
          <div className="col-lg-4 ">
            <Image
              src={"/images/footerlogo.png"}
              alt=""
              width={200}
              height={200}
            />
            <div className="icons_social">
              <Link href="#" className="footer_icons">
                <FaFacebook />
              </Link>
              <Link href="#" className="footer_icons">
                <FaInstagram />
              </Link>
            </div>
          </div>
          <div className="col-lg-4">
            <h4>Easy Access</h4>
            <div className="main_row_margin">
              <ul className="footer_links">
                <li>
                  <Link href="#">Home</Link>
                </li>
                <li>
                  <Link href="#">Terms and Condition</Link>
                </li>
                <li>
                  <Link href="#">Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <h4>Contact Us</h4>
            <div className="main_row_margin">
              <div className="contact_us_area d-flex align-items-center ">
                <MdOutlineEmail color="white" size={20} />

                <Link href="mailto:google@google.com">contact@gmail.com</Link>
              </div>
              <div className="contact_us_area d-flex align-items-center whatsapp_icon">
                <FaWhatsapp color="white" size={20} />
                <Link href="https://wa.me/+447482020223" target="_blank">
                  Whatsapp +447482020223
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
