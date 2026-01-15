import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className='w-full min-h-screen mb-4 flex items-center bg-cover bg-center overflow-hidden ' style={{backgroundImage: "url('src/assets/header_img.png')"}} id="header">
       <Navbar /> 
       <div className='mx-auto py-4 px-6 md:px-16 lg:px-32 text-white'>
        <h1 className=" text-5xl sm:text-6xl pt-16 md:text-(--82px) max-w-3xl inline-block font-bold "> Explore home that fits your Dream. </h1>

        <div>
        <a href="#projects" className=''><button>Projects</button></a>
        <a href="#contact" className='py-2 px-6'><button>Contact Us </button></a>
        </div>
       
       </div>
    </div>
  )
};

export default Header