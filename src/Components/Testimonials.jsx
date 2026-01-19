import React from 'react'
import { testimonialsData } from '../assets/assets'


const Testimonials = () => {
  return (
    <main className='container mx-auto py-10 lg:px-32 w-full overflow-hidden '>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'> Customer <span className='underline underline-offset-4 decoration-1 font-light '> Testimonials</span>  </h1>

        <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto '> 
            Real Stories from Those Who Found Home with Us.
            </p>

      <div className='flex flex-wrap justify-center gap-8 '>
         
         {testimonialsData.map ( (testimonial, index) => (
            <div key={index} className='max-w-85 border shadow-lg rounded px-8 py-12 text-center'> 
               <img src={testimonial.image} className='w-20 h-20 rounded-full mx-auto mb-4 ' alt="Testimonials image" />
               <h2>{testimonial.name}</h2>
               <p> {testimonial.title} </p>
              </div>
         )) }

      </div>

        </main>
  )
}

export default Testimonials