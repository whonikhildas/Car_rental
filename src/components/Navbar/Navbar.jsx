import React, { useState } from 'react'
import { BiSolidSun,BiSolidMoon } from "react-icons/bi";
import ResponsiveMenu from "./ResponsiveMenu.jsx";
import { HiMenuAlt1,HiMenuAlt3 } from "react-icons/hi"


export const NavLinks=[
    {
        id:'1',
        name:'HOME',
        link:'/#'
    },
    {
        id:'2',
        name:'CARS',
        link:'/#cars'
    },
    {
        id:'3',
        name:'ABOUT',
        link:'/#about'
    },
    {
        id:'4',
        name:'BOOKING',
        link:'/#booking'
    },]
const Navbar= ({theme, setTheme})=> {
    const [showMenu, setShowMenu] = useState(false)

    const toogleMenu = ()=> {
        setShowMenu(!showMenu);
    }
  return (
    <nav className='shadow-md bg-white dark:bg-dark
    dark:text-white duration-300 z-40'
        >
        <div className="container">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className='text-3xl font-bold'
                    >Car Rental</h1>
                </div>
            <div className='hidden md:block'>
                <ul className='flex items-center gap-8'>
                    {
                        NavLinks.map((data)=> (

                    <li 
                    key={data.id}
                    className='py-4 '>
                        <a className=' py-2 hover:border-b-2
                        hover:text-primary
                        hover:border-primary transition-colors duration-500 text-lg font-medium'
                        href={data.link}>
                            {data.name}
                            </a>

                    </li>
                        ))
                    }
                   
                </ul>
            </div>
                <div>
                { theme === "dark" ? (
                    <BiSolidSun
                    onClick={()=> setTheme('light')}  className='text-2xl '/>
                    ):(
                        <BiSolidMoon
                    onClick={()=> setTheme('dark')}  className='text-2xl'/>)
                }
            
            </div>
            {/* {Mobile Hamburger Menu} */}
                <div  className='flex items-center gap-4 md:hidden'>
            {
                showMenu?(
                    <HiMenuAlt1 onClick={toogleMenu}
                    size ={30}
                    className="cursor-pointer transition-all duration-300"/>
                ): (
                    <HiMenuAlt3 onClick={toogleMenu}
                    size ={30}
                    className="cursor-pointer transition-all duration-300"
                    />
                )
            }
            </div>
            </div>
        </div>
        <ResponsiveMenu showMenu={showMenu} />
    </nav>
  )
}

export default Navbar;