import React, { useState } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './Home.css'
const Home = () => {
  const [currentDiv, setCurrentDiv] = useState(1);
 
  const handleClick = (divId) => {
    const div = document.getElementById(divId);
    div.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main >
      <div id='containerHome' className="">
        <div className='fixed'>
        <button className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleClick('home1')}><KeyboardArrowUpIcon/></button>
        </div>

          <div id='home1' className=" bg-blue-200 flex flex-col justify-center items-center ">
            <p>Contenido del Home 1</p>
            <button className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleClick('home2')}><KeyboardArrowDownIcon/></button>
          </div>


          <div id='home2' className=" bg-green-200 flex flex-col justify-center items-center">
            <p>Contenido del Home 2</p>
            <button className="ml-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleClick('home1')}><KeyboardArrowUpIcon/></button>
            <button className="ml-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleClick('home3')}><KeyboardArrowDownIcon/></button>
        </div>


          <div id='home3' className=" bg-yellow-200 flex flex-col justify-center items-center">
            <p>Contenido del Home 3</p>
            <button className="ml-4 bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleClick('home2')}><KeyboardArrowUpIcon/></button>
          </div>
        </div>
    </main>
  );
};

export default Home;










