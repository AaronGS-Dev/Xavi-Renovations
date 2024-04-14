import React, { useState, useEffect } from 'react';
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
          <div id='home1' className=" bg-blue-200 flex flex-col items-center aling-end">
            <div className=''>
            <a href='#home2'><KeyboardArrowDownIcon/></a>
            </div>
          </div>
          <div id='home2' className=" bg-green-200 flex flex-col justify-center items-center">
            <div>
            <a href='#home1'><KeyboardArrowUpIcon/></a>
            </div>
            <div>
              <h1>Nuestros Servicios</h1>
            </div>
            <div>
            <a href='#home3'><KeyboardArrowDownIcon/></a>
            </div>
        </div>
          <div id='home3' className=" bg-yellow-200 flex flex-col justify-center items-center">
            <p>Contenido del Home 3</p>
            <div>
            <a href='#home2'><KeyboardArrowUpIcon/></a>
            </div>
          </div>
      </div>
    </main> 
  );
};

export default Home;










