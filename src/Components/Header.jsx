import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className='w-full h-screen bg-cover bg-center' style={{backgroundImage: "url('src/assets/header_img.png')"}} id="header">
       <Navbar /> 
       <div>
        <h1 className="text-white text-6xl md:text-6xl font-bold "> Explore home that fits your Dream. </h1>

        <div>
        <a href="#projects"><button>Projects</button></a>
        <a href="#contact"><button>Contact Us </button></a>
        </div>
       
       </div>
    </div>
  )
};

export default Header