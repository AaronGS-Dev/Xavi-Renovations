import React from 'react'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import 'animate.css/animate.min.css'

const Home2 = () => {
  return (
    <main>
         <div className='top-0 flex justify-center'>
            <a href='#home1'><KeyboardArrowUpIcon/></a>
          </div>
          <div id='service' className='bg-white flex flex-col text-center w-4/5	h-full rounded ml-auto animate__animated animate__fadeIn'>
            <div>
              <h1 className='p-6'>Nuestros Servicios</h1>
            </div>
            <div className="flex justify-center items-center">
              <img src="\public\image\maintenance.png" className='w-1/6 h-auto ' alt="" />
              <p className=''>Ofrecemos los siguientes servicios</p>
            </div>
            <div className="flex justify-center items-center">
              <p>Grandes obras de renovación</p>
              <img src="\public\image\renovation.png" className='w-1/6 h-auto' alt="" />
            </div>
            <div className="flex justify-center items-center">
              <img src="\public\image\renovation-2.png" className='w-1/6 h-auto' alt="" />
              <p>Hermosa carpintería</p>
            </div> 
            <div className="flex justify-center items-center">
              <p>Trabajos eléctricos seguros</p>
              <img src="\public\image\electrical-service.png" className='w-1/6 h-auto' alt="" />
            </div>
            <div className="flex justify-center items-center">
              <img src="\public\image\plumbing.png" className='w-1/6 h-auto' alt="" />
              <p>Fontaneria a fondo</p>
            </div>
          </div>
          <div className='bottom-0 flex justify-center'>
              <a href='#home3' ><KeyboardArrowDownIcon/></a>
          </div>
    </main>
  )
}

export default Home2