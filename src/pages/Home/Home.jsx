import React, { useState, useEffect } from 'react';
import { useActiveLink } from '../../context/ActiveLinkContext.jsx';
import './Home.css'
import Home1 from '../../components/Home1/Home1.jsx';
import Home2 from '../../components/Home2/Home2.jsx';
import Home3 from '../../components/Home3/Home3.jsx';
import { Fade, Slide } from "react-awesome-reveal";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useTranslation } from 'react-i18next';
const Home = () => {
  const { setActiveLink, activeLink } = useActiveLink();
  const { t } = useTranslation();
  setActiveLink('/') 
  return (
    <main id='mainHome' className='h-full w-full' >
      <div id='containerHome' className="flex flex-col h-full overflow-y-scroll relative">
          <div id='home1' className='h-[100%] xl:h-[100%] w-[100%] xl:w-[100%] flex flex-col justify-between'>
          <Home1/>
          <div className='bottom-0 flex flex-col items-center justify-between'>
            <a href='#home2' className=''><KeyboardArrowDownIcon/></a>
          </div>
      </div>
          <div id='home2' className='h-[100%] xl:h-[100%] w-[100%] xl:w-[100%] flex flex-col items-center justify-between '>
            <a href='#home1'><KeyboardArrowUpIcon/></a>
            <div className='h-[100%] xl:h-[100%] w-[90%] xl:w-[90%] bg-[url("../image/Home2.jpg")] 
            bg-contain bg-no-repeat bg-center xl:bg-cover xl:bg-center flex flex-col items-center justify-center'>
              <Slide >
              <Home2/>
              </Slide> 
            </div>
            <div>
             <a href='#home3' ><KeyboardArrowDownIcon/></a>  
            </div>
            </div>
            <div id='home3' className=' h-[100%] xl:h-[100%] w-[100%] xl:w-[100%] flex flex-col justify-center items-center'>
              <a href='#home2'><KeyboardArrowUpIcon/></a>
          <div className=' h-[90%] xl:h-[90%] w-[90%] xl:w-[90%] bg-[url("../image/Home3.jpg")] 
          bg-contain bg-no-repeat bg-center xl:bg-cover xl:bg-center flex flex-col justify-center items-center'>
            <Fade duration={1000} delay={500}>
            <Home3/>
            </Fade>
          </div>
          </div>
      </div>
    </main> 
  );
};

export default Home;










