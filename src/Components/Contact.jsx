import React from 'react'
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {

 const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....")
    const formData = new FormData(event.target);

    formData.append("access_key", "516af617-cd78-438a-8bc2-48ab9e326c3a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      alert("Form Submitted Successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult("")
      alert(data.message);
    }
}


  return (
    <main className='py-20 text-center p-6 w-full overflow-hidden lg:px-32 '>
        
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center '> Contact <span className='underline underline-offset-4 decoration-1 font-light'> With Us</span> </h1>    
        <p> Ready to Make a Move? Let's Build Your  Future Together. </p>

    <form action="" onSubmit={onSubmit} className='max-w-2xl mx-auto text-gray-300 rounded py-3 '>
    <div className='flex flex-wrap '>
            <div className='w-full md:w-1/2  text-left'>
                        Your Name
              <input type="text" placeholder='Your Name' name='Name' required 
               className='w-full border border-gray-400 rounded py-3 px-4 mt-2 '  />
            </div>

           <div className='w-full md:w-1/2 text-left md:pl-4 '>
               Your Email
            <input type="email" name='Email' required placeholder='Your Email'
             className='w-full border border-gray-400 rounded py-3 px-4 mt-2 ' />
           </div>
     </div>
    <div className='text-left' > 
        Message
        <textarea className='resize-none w-full pr-2 py-6 px-4 border rounded border-gray-400 mt-3'
         name="text" required placeholder='Message'></textarea>
       </div>
          <button className='bg-blue-500 rounded py-2 px-12 mb-12' > {result ? result : "Send Message" } </button> 
      </form>

        </main>
  )
}

export default Contact