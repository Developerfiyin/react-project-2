import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className='w-full h-screen bg-cover bg-center' style={{backgroundImage: "url('src/assets/header_img.png')"}} id="header">
       <Navbar /> 
       <div>
        <h1 className="text-white text-6xl md:text-6xl font-bold ">Welcome to Our Website  Explore </h1>
        <button>Projects</button>
        <button>Contact Us </button>
       </div>
    </div>
  )
}

export default Header