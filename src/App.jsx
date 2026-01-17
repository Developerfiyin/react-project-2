import { useState } from 'react'
import './App.css'

import Header from './Components/Header'
import About from './Components/About'
import Project from './Components/Project'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <section id='header'>
          <Header />
         </section>
     
        <section id='about'>
          <About/>
        </section>

        <section id="project">
          <Project />
        </section>
      </div>
      
    </>
  )
}

export default App
