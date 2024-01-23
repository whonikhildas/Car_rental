import React from 'react'
import carPng3 from "../../assets/car3.png";

const About=()=> {
  return (
    <div className='dark:bg-black bg-slate-100 dark:text-white duration-300 relative-z-20'>
        <div className='container min-h-[620px] flex'>
            <div className='grid place-items-center grid-cols-1 sm:grid-cols-2'>
                <div 
                data-aos="slide-right"
                data-aos-duration="1500"
                className='order-2 sm:order-1'>
                    <img src={carPng3}
                    className='relative-z-10 sm:scale-105
                    sm:translate-x-11 max-h-[300px]
                    drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]'/>
                </div>
                <div className='order-1 sm:order-2 space-y-5 sm:pr-16 pb-6'>
                    <p className=' text-3xl font-bold sm:text-4xl'
                    data-aos="fade-up">About Us</p>
                    
                    <p
                    data-aos="fade-up"
                    data-aos-delay="700" className=''>Lorem ipsum dolor sit amet,ectetur adipisicing elit. Ullam,ectetur adipisicing elit. Ullam, consectetur adipisicing elit. Ullam, autem?</p>
                    <p
                    data-aos="fade-up"
                    data-aos-delay="700" className=''>Lorem ipsum dolor sit amet,ectetur adipisicing elit. Ullam,ectetur adipisicing elit. Ullam, consectetur adipisicing elit. Ullam, autem?</p>
                    <button
                    data-aos="fade-up"
                    data-aos-duration="1500" className='btn dark:bg-black text-primary border-primary border-2 px-6 py-2 rounded-md hover:bg-black/80 duration-300'>Get Started</button>
                </div>
            </div>
        </div>  
    </div>
  )
}

export default About