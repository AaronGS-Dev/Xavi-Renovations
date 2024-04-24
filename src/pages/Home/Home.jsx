import React, { useState, useEffect } from 'react';
import { useActiveLink } from '../../context/ActiveLinkContext.jsx';
import './Home.css'
import Home1 from '../../components/Home1/Home1.jsx';
import Home2 from '../../components/Home2/Home2.jsx';
import Home3 from '../../components/Home3/Home3.jsx';
const Home = () => {
  const { setActiveLink, activeLink } = useActiveLink();
  setActiveLink('/') 
  return (
    <main className='h-full w-full' >
      <div id='containerHome' className="flex flex-col h-full  overflow-y-scroll relative">
          <div id='home1' className=" bg-blue-200 flex flex-col items-center justify-between">
        <div></div>
          <Home1/>
          </div>
          <div id='home2' className="bg-green-200 flex flex-col justify-center items-center content-start">
            <Home2/>
          </div>
          <div id='home3' className=" bg-yellow-200 flex flex-col justify-center items-center">
            <Home3/>
          </div>
      </div>
    </main> 
  );
};

export default Home;










