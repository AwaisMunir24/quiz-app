import React from 'react'
import './herosection.css'
import Image from 'next/image'
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple  } from "react-icons/fa";

const Herosection = () => {
  return (
    <section className='main_hero_wrapper'> 
    <div className='container-fluid'>
      <div className='row align-items-center'>
       
        <div className='col-lg-7'>
          <h4 className='heading_hero'>
            Lorem, ipsum.
          </h4>
          <p className='desp_hero'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur natus deleniti, ab vitae cum, quo ipsam provident excepturi accusamus, odio atque tempora harum rem inventore. Velit nam quos quidem dolorum at voluptas laboriosam nihil totam quae esse voluptatem veritatis voluptatum reprehenderit dolores cum harum, animi rerum rem id? Qui, quaerat?</p>
          <div className='d-flex align-items-center button_wrapper'>
          <button className='app-btn-google'>Google App <IoLogoGooglePlaystore size={18} className='icons_'/></button>
          <button className='app-btn-ios'>App Store <FaApple  size={24} className='icons_'/></button>
          </div>
        </div>
        <div className='col-lg-5 text-center'>
          <Image src={'/images/girl-boy.png'} alt="" width={400} height={310} className='img-fluid'/>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Herosection