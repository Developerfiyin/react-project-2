import { useState } from 'react'
import './App.css'

import Header from './Components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <section id='header'>
          <Header />
         </section>
     
        <section id='about'>
          
        </section>
      </div>
      
    </>
  )
}

export default App
