import React from 'react'

const Contact = () => {
  return (
    <main className='py-20 text-center p-6 w-full overflow-hidden lg:px-32 '>
        
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center '> Contact <span className='underline underline-offset-4 decoration-1 font-light'> With Us</span> </h1>    
        <p> Ready to Make a Move? Let's Build Your  Future Together. </p>

    <form action="" className='max-w-2xl mx-auto text-gray-300 rounded py-3 '>
    <div className='flex flex-wrap '>
            <div className='w-full md:w-1/2  text-left '>
                        Your Name
              <input type="text" placeholder='Your Name' name='Name' required 
               className='w-full border border-gray-300 rounded py-3 px-4 mt-2 '  />
            </div>

           <div className='w-full md:w-1/2 text-left md:pl-4 '>
               Your Email
            <input type="email" name='Email' required
             className='w-full border border-gray-300 rounded py-3 px-4 mt-2 ' />
           </div>

    </div>

</form>

                                   
        </main>
  )
}

export default Contact