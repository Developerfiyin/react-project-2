import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className='w-full h-screen bg-cover bg-center' style={{backgroundImage: "url('src/assets/header_img.png')"}}>
       <Navbar /> 
    </div>
  )
}

export default Header