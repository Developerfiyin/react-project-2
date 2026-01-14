import React from 'react'
import logo from '../assets/logo.svg'



const Navbar = () => {
  return (
    <nav className='w-full absolute z-10 top-0 left-0'> 

    <div className=''> 
      <img src={logo} alt="Logo" />

    </div>

    </nav>
  )
}

export default Navbar