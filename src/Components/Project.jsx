import React from 'react'
import sliderLeft from '../assets/left_arrow.svg'
import sliderRight from '../assets/right_arrow.svg'
import {assets, projectsData } from '../assets/assets'
import { useEffect, useState } from 'react'


const Project = () => {
    
    const [currentIndex, setCurrentIndex] = useState(0);  
    const [itemsToShow, setItemsToShow] = useState(1);

    useEffect(() => {
        const updateItemsToShow = () => {
            if(window.innerWidth >= 1024) {
            setItemsToShow(projectsData.length);
            } else {
                setItemsToShow(1)
            }
            };
        updateItemsToShow()
        window.addEventListener('resize', updateItemsToShow);
        return () => window.removeEventListener('resize', updateItemsToShow);
      
    }, []); 

    const nextProject = () => {
        setCurrentIndex((prevIndex) =>
        (prevIndex + 1) % projectsData.length
        );
    };

    const prevProject = () => {
        setCurrentIndex((prevIndex) =>    
        (prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1)
        );
    }; 

  return (
    <main className=' container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 w-full overflow-hidden ' id="project" >
       <h1 className='font-bold sm:text-4xl text-2xl mb-2 text-center  '>Projects <span className='underline underline-offset-4 decoration-1 font-light'>Completed</span> </h1>
          <p className='text-gray-500 text-center mb-8 max-w-80 mx-auto'> Crafting spacing, Building Legacies-Explore Our Portfolio</p>
              
              {/*Slider buttons */ }
              <div className='flex justify-end items-center mb-8 '>
                <button className='p-3 bg-gray-200 rounded mr-2' onClick={prevProject} aria-label='Previous Project'>
                  <img src={sliderLeft} alt="Left image" />
                </button>

              <button className='p-3 bg-gray-200 rounded mr-2' onClick={nextProject} aria-label='Next Project'>
                <img src={sliderRight} alt="Right image" />
              </button> 
                </div>

            {/*-----PROJECT CARDS----*/}
            <div className='overflow-hidden '>
                <div className='flex gap-8 transition-transform duration-500 ease-in-out' style={{transform: `translateX(-${(currentIndex * 100) / itemsToShow}%)`}}>
                   {projectsData.map((project, index ) => (
                    <div key={index} className='relative shrink-0 w-full sm:w-1/4'>
                      <img src={project.image} alt={project.title} className='w-full h-auto mb-14' />     
                      <div className='absolute left-0 right-0 bottom-5 flex justify-center '>
                        <div className='bg-white inline-block w-3/4 px-4 py-2  shadow-md'>
                        <h2 className='text-xl font-semibold mb-2 text-gray-800'> {project.title} </h2>
                        <p className='text-gray-600 text-sm'> {project.price} <span className='px-1'> | </span>   {project.location} </p>

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