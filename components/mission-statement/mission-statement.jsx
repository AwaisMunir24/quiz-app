"use client";
import React from "react";
import "./mission-statement.css";
import Image from "next/image";
const MissionStatement = () => {
  return (
    <section className="mission-wrapper">
      <div className="container-xxl">
        <div className="row website_padding-global align-items-center">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="mission-heading-wrapper">
              <h5>Mission Statement</h5>
              <p className="first-para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                rerum voluptates sit exercitationem dolor sunt omnis praesentium
                minus ducimus, saepe, magnam asperiores corrupti, id sed
                quibusdam harum quidem nesciunt incidunt?
              </p>
              <p className="second-para">
                Enim in curae congue euismod arcu interdum non. Volutpat rhoncus
                platea congue torquent primis mollis maecenas integer nam massa.
              </p>
              <ul className="listing-points">
                <li>Pede cubilia consectetur posuere justo purus cursus.</li>
                <li>
                  Convallis id interdum dictum libero habitasse ullamcorper
                  lorem.
                </li>
                <li>Lorem per condimentum ipsum phasellus habitasse.</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="img-wrapper_quran">
              <img
                src={"/images/quran.jpg"}
                alt=""
                className="img-fluid w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionStatement;
