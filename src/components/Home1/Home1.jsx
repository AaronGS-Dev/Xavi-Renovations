import React from 'react'
import "./Home1.css"
import Slider from '../../components/Slider/Slider.jsx'

const Home1 = () => {
  return (
    <main className='flex justify-evenly'>
      <div>
        <h1>Xavi Renovations</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam.</p>
      </div>
   
      <div>
        <Slider/>
      </div>

    </main>
  )
}

export default Home1