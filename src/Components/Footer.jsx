import React from 'react'
import logo from '../assets/logo_dark.svg'

const Footer = () => {
  return (
    <main className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden '>

    <div className='flex flex-col mx-auto justify-between items-start md:flex-row  '>  
     <div>
        <img src={logo} alt="The dark logo image " className=''  />
        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy text. </p> 
             </div>
             
     <div>  </div>
     <div>  </div>

    </div>

 {/* second div*/}
<div>


</div>
        
    </main>
  )
}

export default Footer