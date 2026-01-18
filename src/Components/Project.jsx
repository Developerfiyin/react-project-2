import React from 'react'
import sliderLeft from '../assets/left_arrow.svg'
import sliderRight from '../assets/right_arrow.svg'
import {assets, projectsData } from '../assets/assets'


const Project = () => {

    const [currentIndex, setCurrentIndex] = React.useState(0);  
    const [itemsToShow, setItemsToShow] = React.useState(1);

    const nextProject = () => {
        if (currentIndex < projectsData.length - itemsToShow) {
            setCurrentIndex(currentIndex + 1);
        }
    };
    
    const prevProject = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }       
    };

  return (
    <main className=' container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 w-full overflow-hidden ' id="project" >
       <h1 className='font-bold sm:text-4xl text-2xl mb-2 text-center  '>Projects <span className='underline underline-offset-4 decoration-1 font-light'>Completed</span> </h1>
          <p className='text-gray-500 text-center mb-8 max-w-80 mx-auto'> Crafting spacing, Building Legacies-Explore Our Portfolio</p>
              
              <div className='flex justify-end items-center mb-8 '>
                <button className='p-3 bg-gray-200 rounded mr-2'>
                  <img src={sliderLeft} alt="Left image" className='' aria-label='Previous project'  />
                </button>

              <button className='p-3 bg-gray-200 rounded mr-2'>
                <img src={sliderRight} alt="Right image" className='' aria-label='Next project' />
              </button> 
                </div>

            {/*-----PROJECT CARDS----*/}

            <div className='overflow-hidden '>
                <div className='flex gap-8 transition-transform duration-500 ease-in-out '>
                   {projectsData.map((project, index ) => (
                    <div key={index} className='relative shrink-0 w-full sm:w-1/4'>
                      <img src={project.image} alt={project.title} className='w-full h-auto mb-14' />     
                      <div className='absolute left-0 right-0 bottom-5 flex justify-center '>
                        <div className='bg-white inline-block w-3/4 px-4 py-2  shadow-md'>
                        <h2 className='text-xl font-semibold mb-2 text-gray-800'> {project.title} </h2>
                        <p className='text-gray-600 text-sm'> {project.price} <span></span>   {project.location} </p>


                        </div>

                      </div>

                    </div>
                     ))}

                </div>
            </div>


        </main>
  )
}

export default Project