import React from 'react'
import image from '../assets/brand_img.png'
const About = () => {
  return (
    <main className='mx-auto flex bg-white flex-col container text-center items-center justify-center px-14 py-4 md:px-16 lg:32 mt-4 w-full overflow-hidden ' id="about">
        
        <div>
        <h2 className='text-3xl font-bold mb-2 sm:text-4xl '> About Us <span className='underline underline-offset-4 decoration-1 font-light ' > Our Brands</span> </h2>
        <p className='text-gray-500 max-w-80 mb-8 text-center'> Passionate about properties Dedicated to our vision.</p>

        <div className=' flex flex-col md:flex-row items-center md:items-start md:gap-20 '>

          <img src={image} alt="Our Brands" className='w-full sm:w-1/2 max-w-lg  '/>

    <div className='flex flex-col items-center mt-10 md:items-start text-gray-600  '>
         <div className='grid grid-col-2 gap-6 md:gap-10 w-full 2xl:pr-28 '>
        
             <div>
              <p className='text-4xl font-medium text-gray-800'>10 + </p>
              <p>Years of excellence</p>
             </div>

           <div>
              <p className='text-4xl font-medium text-gray-800'>10 + </p>
              <p>Years of excellence</p>
             </div>

              <div>
              <p className='text-4xl font-medium text-gray-800'>10 + </p>
              <p>Years of excellence</p>
             </div>

         </div>
   </div>
        </div>
        </div>

                                                        
    </main>
  )
}

export default About