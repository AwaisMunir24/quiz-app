import React from "react";
import "./contact-form.css";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const ContactForm = () => {
  return (
    <section className="form-wrapper-main">
      <div className="container-xxl">
        <div className="row align-items-center justify-content-center website_padding-global">
          <div className="col-lg-7 col-md-12">
            <div>
              <h2 className="contact-us-heading">Contact Us</h2>
              <div>
                <p className="udpate_heading">
                  Contact us to receive new updates about Test Islam
                </p>
                <div>
                  <div className="contact_us_email_area d-flex align-items-center">
                    <div className="icon_areaa">
                      <IoIosMail color="#A38429" size={25} />
                    </div>
                    <p>contact@gmail.com</p>
                  </div>
                  <div className="contact_us_email_area phone_section d-flex align-items-center">
                    <div className="icon_areaa">
                      <FaPhoneAlt color="#A38429" size={16} />
                    </div>
                    <p> +447482020223</p>
                  </div>
                  <div className="contact_us_email_area phone_section d-flex align-items-center">
                    <div className="icon_areaa">
                      <FaLocationDot color="#A38429" size={16} />
                    </div>
                    <p>London United Kingdom.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-12">
            <div className="form_wrapper text-center">
              <input
                type="text"
                placeholder="Enter Your Name"
                className="form-control"
              />
              <input
                type="email"
                placeholder="Enter Your Email"
                className="form-control"
              />
              <textarea
                rows={5}
                placeholder="Enter Your Message"
                className="form-control"
              ></textarea>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
