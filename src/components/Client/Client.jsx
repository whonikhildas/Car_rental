import React from 'react'

const ClientData = [
  {
    name: 'Nikhil',
    image: "https://picsum.photos/200",
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    aosDelay:"0",
  },
  {
    name: 'Ridham',
    image: "https://picsum.photos/200",
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    aosDelay:"0",
  },
  {
    name: 'Ritik',
    image: "https://picsum.photos/200",
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    aosDelay:"0",
  }

]
const Client=()=> {
  return (
    <div className='py-14 dark:bg-black dark:text-white sm:min-h-[600px] sm:grid'>
      <div className='container'>
        <div className='pb-12'>
          <h1
          className='text-3xl font-semibold text-center sm:text-4xl'
          >What Our Clients Say About Us</h1>
          <p className='text-center pt-4'> 
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-black dark:text-white'>
          {
            ClientData.map((data)=>(
              <div key={data.name}
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              className='card text-center group space-y-3 sm:space-y-6 p-4 bg-gray-100 dark:bg-white/20 sm:py-12 duration-300 rounded-lg'>
                <div className='grid place-items-center'>
                <img
                src={data.image}
                className='h-20 w-20 rounded-full text-center'/>
                </div>
                <div className='text-2xl'>⭐⭐⭐⭐⭐</div>
                <p>{data.desc}</p>
                <h1>{data.name}</h1>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Client