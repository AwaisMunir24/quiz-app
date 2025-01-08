"use client";
import React, { useState } from "react";
import "./pillars.css";
import Image from "next/image";
const Pillars = () => {
  const [pillarsData, setPillarsData] = useState([
    {
      icons: "/images/SAHADA-ONE.png",
      name: "Shahadah",
      urdu: "Faith",
    },
    {
      icons: "/images/PRAYER-MAT-2.png",
      name: "Salat",
      urdu: "Prayer",
    },
    {
      icons: "/images/FASTING.png",
      name: "Shaum",
      urdu: "Fasting",
    },
    {
      icons: "/images/INFAQ-1.png",
      name: "Zakat",
      urdu: "Alms",
    },
    {
      icons: "/images/KAABA.png",
      name: "Hajj",
      urdu: "Pilgrimage",
    },
  ]);
  console.log(pillarsData);
  return (
    <section className="pillars_wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className=" text-center col-lg-12 ">
            <h4>Pillars Of Islam</h4>
          </div>
        </div>

        <div className="row justify-content-around pillar_icons_row">
          {pillarsData.map((e, idx) => (
            <div className="col-lg-2 text-center" key={idx}>
              <div className="d-flex align-items-center flex-column">
                <div className="d-flex pillar_icon_wrapper">
                  <Image src={e.icons} alt={e.name} width={60} height={60} />
                </div>
                <h5 className="pillar_name">{e.name}</h5>
                <p className="pillar_in_urdu">{e.urdu}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pillars;
