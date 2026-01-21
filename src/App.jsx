import { useState } from 'react'
import './App.css'

import Header from './Components/Header'
import About from './Components/About'
import Project from './Components/Project'
import Testimonials from './Components/Testimonials'
import Contact from './Components/Contact'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <ToastContainer />
       <section id='header'>
          <Header />
         </section>
     
        <section id='about'>
          <About/>
        </section>

        <section id="project">
          <Project />
        </section>

     <section id='testimonials'>
    <Testimonials/>
   </section>

<section id='contact'>
  <Contact/>
</section>

            <section id="footer">
              <Footer/>
            </section>

      </div>
      
    </>
  )
}

export default App
