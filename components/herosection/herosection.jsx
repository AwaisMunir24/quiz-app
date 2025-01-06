import React from 'react'
import './herosection.css'
import Image from 'next/image'
const Herosection = () => {
  return (
    <section className='main_hero_wrapper'> 
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-lg-4'>
          <Image src={'/images/girl-boy.png'} alt="" width={400} height={310} className='img-fluid'/>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Herosection