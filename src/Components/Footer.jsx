import React from 'react'
import logo from '../assets/logo_dark.svg'

const Footer = () => {
  return (
    <main className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden '>

    <div className='flex flex-col mx-auto justify-between items-start md:flex-row  '>  
     <div className='w-full md:w-1/3 mb-8 md:m-0'>
        <img src={logo} alt="The dark logo image " className=''  />
        <p className='text-gray-400 mt-4 text-xl '> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy text. </p> 
             </div>
       
     <div className='w-full md:1/5 mb-8 md:mb-0'> 
         <h3 className='text-xl text-gray-900 font-bold mb-4'>Company </h3>
         <div className="flex flex-col gap-2 text-gray-400 ">
            <a href="#home" className='hover:text-white '>Home</a>
            <a href="about" className='hover:text-white'>About Us</a>
            <a href="projects" className='hover:text-white' > Projects</a>
            <a href="#testimonials" className='hover:text-white'>Testimonials</a>
         </div>
         </div>
         
     <div className=''> 
        
         </div>

    </div>

 {/* second div*/}
<div>


</div>
        
    </main>
  )
}

export default Footer