import React from 'react'
import logo from '../assets/logo.svg'



const Navbar = () => {
  return (
    <nav className='w-full absolute z-10 top-0 left-0 bg-cover bg-center ' style={{backgroundImage: "url('src/assets/header_img.png')"}}> 
    
    <div className=' flex justify-between bg-transparent py-4 px-6 md:px-16 mx-auto lg:px-32'> 
    <img src={logo} alt="Logo"/>
         <div className='gap-8 hidden md:flex text-white font-medium items-center'>
            <a href="#header" className='cursor-pointer hover:text-gray-400'>Home</a>
            <a href="#about" className='cursor-pointer hover:text-gray-400'>About</a>
            <a href="#project" className='cursor-pointer hover:text-gray-400'>Projects</a>
            <a href="#testimonials" className='cursor-pointer hover:text-gray-400'>Testimonials</a>
         </div>
         <button className='hidden md:block bg-white px-8 py-2 rounded-full'>Sign Up</button>
    </div>

    </nav>
  )
}

export default Navbar