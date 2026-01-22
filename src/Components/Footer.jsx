import React from 'react'
import logo from '../assets/logo_dark.svg'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <motion.main 
    
     initial={{opacity:0, x:200 }}
    transition={ {duration:1}}
    whileInView={{opacity:1, x:0}}
    viewport={ {once : true}}
    
    className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden '>
    <div className='flex flex-col mx-auto justify-between items-start md:flex-row  '>  
     <div className='w-full md:w-1/3 mb-8 md:m-0'>
        <img src={logo} alt="The dark logo image " className=''  />
        <p className='text-gray-400 mt-4 text-xl '> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy text. </p> 
             </div>
       
     <div className='w-full md:w-1/5 mb-8 md:mb-0'> 
         <h3 className='text-xl text-white font-bold mb-4'>Company </h3>
         <div className="flex flex-col gap-2 text-gray-400 ">
            <a href="#home" className='hover:text-white '>Home</a>
            <a href="about" className='hover:text-white'>About Us</a>
            <a href="projects" className='hover:text-white' > Projects</a>
            <a href="#testimonials" className='hover:text-white'>Testimonials</a>
         </div>
         </div>

     <div className='w-full md:w-1/3'> 
        <h3 className='text-lg font-medium mb-4 text-white '> Subscribe to our newsletter</h3>
           <p className='max-w-80 font-medium mb-4 text-gray-500'> The greatest news, articles, resources, sent to your weekly. </p>
           <div className='flex gap-3 '>
            <input type="text" placeholder='Enter Your Email' className='py-2 rounded px-2 md:w-auto text-gray-300 border border-gray-800 focus:outline-none w-full  ' />
             <button className='bg-blue-500 text-white font-medium text-xl rounded py-2 px-4 '> Subscribe </button>
           </div>
         </div>
    </div>

 {/* second div*/}
    <div className='text-center border-t border-gray-800 mt-10 text-gray-400 '>
     Copyright 2024 © GreatStack. All Right Reserved. Owned by greatstack, recreated by me.
</div>




    </motion.main>
  )
}

export default Footer