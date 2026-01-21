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
       
     <div className=''> 
         <h3>Company </h3>
         <div>
            <a href=""></a>
            <a href=""></a>
            <a href=""></a>
            <a href=""></a>
         </div>
        
         </div>
     <div>  </div>

    </div>

 {/* second div*/}
<div>


</div>
        
    </main>
  )
}

export default Footer