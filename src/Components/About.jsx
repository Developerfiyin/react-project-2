import React from 'react'
import image from '../assets/brand_img.png'
import { motion } from 'framer-motion'


const About = () => {
  return (
    <motion.main 
    
    initial={{opacity:0, x:200 }}
    transition={ {duration:1}}
    whileInView={{opacity:1, x:0}}
    viewport={ {once : true}}

    className='mx-auto flex flex-col container items-center justify-center p-14 md:px-20 lg:px-32 w-full overflow-hidden ' id="about">
        <h2 className='text-2xl font-bold mb-2 sm:text-4xl '> About Us <span className='underline underline-offset-4 decoration-1 font-light ' > Our Brands</span> </h2>
        <p className='text-gray-500 max-w-80 mb-8 text-center'> Passionate about properties Dedicated to our vision.</p>

        <div className=' flex flex-col md:flex-row items-center md:items-start md:gap-20 '>
          <img src={image} alt="Our Brands" className='w-full sm:w-1/2 max-w-lg  '/>
     <div className='flex flex-col items-center mt-10 md:items-start text-gray-600  '>
         <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28 '>
        
             <div>
              <p className='text-4xl font-medium text-gray-800'>10 + </p>
              <p>Years of excellence</p>
             </div>

           <div>
              <p className='text-4xl font-medium text-gray-800'>12 + </p>
              <p> Projects Completed </p>
             </div>

              <div>
              <p className='text-4xl font-medium text-gray-800'>20 + </p>
              <p> Mn. Sq. Ft. Delivered</p>
             </div>

           <div>
              <p className='text-4xl font-medium text-gray-800'>25 + </p>
              <p>Ongoing Projects </p>
             </div>
         </div>

         <p className='my-10 max-w-lg'> 
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
           when an unknown printer took a galley of type and scrambled it to make a type specimen book.
         </p>
         <button className='bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition duration-300'> Learn More</button>
       </div>
        
        </div>

                                                        
    </motion.main>
  )
}

export default About