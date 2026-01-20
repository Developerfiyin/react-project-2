import React from 'react'

const Contact = () => {

 const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
}


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

    <div> 
        <textarea className='resize-none w-full pr-3 py-6 px-4 border rounded border-gray-300 mt-3'
         name="text" id="" required > Message</textarea>
    </div>
    
          <button className='bg-blue-500 rounded py-2 px-12'> bg-blue-500 </button> 

</form>

                                   
        </main>
  )
}

export default Contact