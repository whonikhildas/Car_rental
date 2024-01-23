import React from 'react'
import carPng2 from "../../assets/car2.png";

const Main = ({theme})=> {
  return (
    <div className='dark:bg-black dark:text-white duration-300 relative-z-20'>
        <div className='container min-h-[620px] flex'>
            <div className='grid place-items-center grid-cols-1 sm:grid-cols-2'>
                <div 
                data-aos="zoom-in"
                data-aos-duration="1100"
                className='order-1 sm:order-2'>
                    <img src={theme === 'dark' ? carPng2 : carPng2}
                    className='relative-z-10 max-h-[600px] sm:scale-125
                    drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]'/>
                </div>
                <div className='order-2 sm:order-1 space-y-5 sm:pr-32'>
                    <p className='text-primary text-2xl '
                    data-aos="fade-up">Effortless</p>
                    <h1
                    data-aos="fade-up"
                    data-aos-delay="600" className='text-5xl lg:text-7xl font font-semibold'>Car Rental</h1>
                    <p
                    data-aos="fade-up"
                    data-aos-delay="700" className=''>Lorem ipsum dolor sit amet,ectetur adipisicing elit. Ullam,ectetur adipisicing elit. Ullam, consectetur adipisicing elit. Ullam, autem?</p>
                    <button
                    data-aos="fade-up"
                    data-aos-duration="1500" className='btn bg-primary text-black px-6 py-2 rounded-md hover:bg-primary/80 duration-300'>Get Started</button>
                </div>
            </div>
        </div>  
    </div>
  )
}

export default Main;