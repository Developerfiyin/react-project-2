import React from 'react'
import sliderLeft from '../assets/sliderLeft.png'
import sliderRight from '../assets/sliderRight.png'


const Project = () => {
  return (
    <main className=' container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 w-full overflow-hidden ' id="project" >
       <h1 className='font-bold sm:text-4xl text-2xl mb-2 text-center  '>Projects <span className='underline underline-offset-4 decoration-1 font-light'>Completed</span> </h1>
          <p className='text-gray-500 text-center mb-8 max-w-80 mx-auto'> Crafting spacing, Building Legacies-Explore Our Portfolio</p>
              
              {/* Slider buttons */}
              <button>
                <img src={sliderLeft} alt="Left image"  />
              </button>

              <button>
                <img src={sliderRight} alt="Right image" />
              </button> 

        </main>
  )
}

export default Project