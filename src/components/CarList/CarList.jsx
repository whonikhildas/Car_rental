import React from 'react'
import car4 from '../../assets/car4.png';
import car5 from '../../assets/car5.png';
import car6 from '../../assets/car6.png';

const CarListData=[
    {
        name: 'Tucson',
        price: '2600',
        image: car4,
        aosDelay: "300",
        miles:"50000km"
    },
    {
        name: 'Corolla',
        price: '1600',
        image: car5,
        aosDelay: "500",
        miles:"120000km"
    },
    {
        name: 'Hilux',
        price: '3600',
        image: car6,
        aosDelay: "1000",
        miles:"10000km"
    },
]

function CarList() {
  return (
    <div className='pb-24 pt-12 bg-white dark:bg-dark dark:text-white '>
        <div className="container">
            {/* {heading} */}
            <h1 data-aos="fade-up"
            className='text-3xl sm:text-4xl font-semibold mb-3'>Lorem ipsum dolor sit.</h1>
            <p data-aos="fade-up"
            className='text-sm pb-10 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum esse harum veritatis.</p>
            {/* {Car Listing cards} */}
            <div>
                <div  className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16'>
                    {
                        CarListData.map((car)=> (
                            <div data-aos="fade-up"
                            data-aos-duration={car.aosDelay}
                             className='space-y-3 border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group'>
                                <div className='w-full h-[120px]'>
                                    <img
                                    className='w-full h-[120px] object-contain sm:translate-x-8 group-hover:translate-x-16 duration-700'
                                    src={car.image}/>
                                </div>
                                <div className='space-y-2'>
                                    <h1 className='text-primary font-semibold'>{car.name}</h1>
                                    <div className='flex justify-between items-center text-xl font-semibold'>
                                    <p>{car.price}/Day</p>
                                    <a href='#'>Details</a>
                                    </div>
                                </div>
                                <p className='text-xl font-semibold absolute top-0 left-3'>
                                    {car.miles}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
            {/* {end of card} */}
            <div className='grid place-content-center mt-8'>
                <button data-aos="fade-up" className='dark:bg-primary text-black border-primary border-2 px-6 py-2 rounded-md  '>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default CarList