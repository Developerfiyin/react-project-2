import React from 'react'
import logo from '../assets/logo.svg'
import menu from '../assets/menu_icon.svg'
import cross from '../assets/cross_icon.svg'
import { useState } from 'react'



const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
         
         useEffect(() => {
        if(menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    })
   
  return (
    <nav className='w-full absolute z-10 top-0 left-0 '> 
    
    <div className=' flex justify-between bg-transparent py-4 px-6 md:px-16 mx-auto lg:px-32'> 
    <img src={logo} alt="Logo"/>
         <div className='gap-8 hidden md:flex text-white font-medium items-center'>
            <a href="#header" className='cursor-pointer hover:text-gray-400'>Home</a>
            <a href="#about" className='cursor-pointer hover:text-gray-400'>About</a>
            <a href="#project" className='cursor-pointer hover:text-gray-400'>Projects</a>
            <a href="#testimonials" className='cursor-pointer hover:text-gray-400'>Testimonials</a>
         </div>
         <button className='hidden md:block bg-white font-semibold px-8 py-2 rounded-full'>Sign Up</button>
         <img onClick={ () => setMenuOpen (true)} src={menu} alt="menu icon" className='md:hidden w-7 cursor-pointer'/>

    </div>

        {/*--------MOBILE MENU--*/}

       <div className={`'md:hidden  items-center ${menuOpen ? 'fixed w-full' : 'h-0 w-0'} fixed top-0 w-full bottom-0 right-0 overflow-hidden bg-white transition-all '`}> 
        <div className='flex justify-end p-6 cursor-pointer'>
            <img onClick={ () => setMenuOpen (false)} src={cross} alt="THE CROSS ICON" className=' w-6' />
        </div>

        <div className='flex space-x-5 flex-col items-center gap-3 mt-5 text-lg font-medium transition-all duration-300 '> 
            <a href="#header" className='px-4 py-2 cursor-pointer inline-block rounded-full'>Home</a>
            <a href="#about" className='px-4 py-2 cursor-pointer inline-block rounded-full'>About</a>
            <a href="#project" className='px-4 py-2 cursor-pointer inline-block rounded-full'>Projects</a>
            <a href="#testimonials" className='px-4 py-2 cursor-pointer inline-block rounded-full'>Testimonials</a>
         </div> 
       </div>




    </nav>
  )
}

export default Navbar