import React, { useState, useEffect } from 'react';
import { useActiveLink } from '../../context/ActiveLinkContext.jsx';
import './Home.css'
import Home1 from '../../components/Home1/Home1.jsx';
import Home2 from '../../components/Home2/Home2.jsx';
import Home3 from '../../components/Home3/Home3.jsx';
import { Fade, Slide } from "react-awesome-reveal";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const Home = () => {
  const { setActiveLink, activeLink } = useActiveLink();
  setActiveLink('/') 
  return (
    <main id='mainHome' className='h-full w-full' >
      <div id='containerHome' className="flex flex-col h-full  overflow-y-scroll relative">
          <div id='home1' className=" bg-blue-200 flex flex-col items-center justify-between">
        <div></div>
          <Home1/>
          <div className='bottom-0'>
    <a href='#home2' className=''><KeyboardArrowDownIcon/></a>
    </div>
          </div>
          <div id='home2' className="bg-green-200 flex flex-col items-center justify-between ">
            <a href='#home1'><KeyboardArrowUpIcon/></a>
            <Slide>
            <Home2/>
            </Slide>
            <a href='#home3' ><KeyboardArrowDownIcon/></a>

          </div>
          <div id='home3' className=" bg-yellow-200 flex flex-col justify-center items-center">
          <a href='#home2'><KeyboardArrowUpIcon/></a>
            <Fade duration={1000} delay={500}>
            <Home3/>
            </Fade>
          </div>
      </div>
    </main> 
  );
};

export default Home;










