"use client";
import React from "react";
import Slider from "react-slick";
import "./slider.css";
import Image from "next/image";

const SliderComponent = () => {
  var settings = {
    dots: true,
    arrows: false, // Remove arrows
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="slider-wrapper">
      <div className="container-xxl">
        <div className="row website_padding-global">
          <div className="col-12">
            <div className="slider-container">
              <Slider {...settings}>
                {[...Array(5)].map((_, idx) => (
                  <div
                    className="wrapper_slider_image d-flex justify-content-center flex-column align-items-center"
                    key={idx}
                  >
                    <Image
                      src={"/images/newgitl.png"}
                      alt=""
                      width={250}
                      height={100}
                      className="img-fluid"
                    />
                    <div className="content-wrapper">
                      <h4>Ahadees</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Minima adipisci placeat at totam nostrum itaque
                        voluptatum cum numquam libero aliquid!
                      </p>
                      <button>Start Quiz</button>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SliderComponent;
