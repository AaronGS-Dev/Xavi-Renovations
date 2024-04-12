import React, { useState } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useActiveLink } from '../../context/ActiveLinkContext.jsx';
import './Home.css'

const Home = () => {
  const { setActiveLink, activeLink } = useActiveLink();
  setActiveLink('/') 
  return (
    <main className='h-full w-full' >
      <div id='containerHome' className="flex flex-col h-full overflow-y-scroll relative">
        <div className='fixed'>
        <button className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleClick('home1')}><KeyboardArrowUpIcon/></button>
        </div>

          <div id='home1' className=" bg-blue-200 flex flex-col items-center ">
            <div className=''>
            <a href='#home2'><KeyboardArrowDownIcon/></a>
            </div>
          </div>


          <div id='home2' className=" bg-green-200 flex flex-col justify-center items-center">
            <div>
              <h1>Nuestros Servicios</h1>
            </div>
            <a href='#home1'><KeyboardArrowUpIcon/></a>
            <a href='#home3'><KeyboardArrowDownIcon/></a>
        </div>


          <div id='home3' className=" bg-yellow-200 flex flex-col justify-center items-center">
            <p>Contenido del Home 3</p>
            <a href='#home2'><KeyboardArrowUpIcon/></a>
          </div>
      </div>
    </main>
  );
};

export default Home;










