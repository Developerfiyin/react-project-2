import React from 'react'
import logo from '../assets/logo.svg'



const Navbar = () => {
  return (
    <nav className='w-full absolute z-10 top-0 left-0'> 
    
    <div className=''> 
      <img src={logo} alt="Logo" />
         <div>
            <a href="#header" className='cursor-pointer hover:text-gray-400'>Home</a>
            <a href="#about" className='cursor-pointer hover:text-gray-400'>About</a>
            <a href="#project" className='cursor-pointer hover:text-gray-400'>Projects</a>
            <a href="#testimonials" className='cursor-pointer hover:text-gray-400'>Testimonials</a>
         </div>
    </div>

    </nav>
  )
}

export default Navbar