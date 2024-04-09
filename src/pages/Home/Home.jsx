// import React, { useState } from 'react';

// const Home = () => {
//   const [currentDiv, setCurrentDiv] = useState(1);
 
//   const handleClick = (divNumber) => {
//     setCurrentDiv(divNumber);
//   };

//   return (
//     <main className="h-screen overflow-y-auto">
//       <div id='home1' style={{ display: currentDiv === 1 ? 'block' : 'none' }}>
//         <div className="h-screen bg-blue-200 flex flex-col justify-center items-center">
//           <p>Contenido del Home 1</p>
//           <button className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleClick(2)}>Ir al Home 2</button>
//         </div>
//       </div>

//       <div id='home2' style={{ display: currentDiv === 2 ? 'block' : 'none' }}>
//         <div className="h-screen bg-green-200 flex flex-col justify-center items-center">
//           <p>Contenido del Home 2</p>
//           <button className="ml-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleClick(1)}>Ir al Home 1</button>
//           <button className="ml-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleClick(3)}>Ir al Home 3</button>
//        </div>
//       </div>

//       <div id='home3' style={{ display: currentDiv === 3 ? 'block' : 'none' }}>
//         <div className="h-screen bg-yellow-200 flex flex-col justify-center items-center">
//           <p>Contenido del Home 3</p>
//           <button className="ml-4 bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleClick(2)}>Ir al Home 2</button>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Home

import React, { useState } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const Home = () => {
  const [currentDiv, setCurrentDiv] = useState(1);
 
  const handleClick = (divId) => {
    const div = document.getElementById(divId);
    div.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="h-screen overflow-y-auto">
      <div id='home1'>
        <div className="h-screen bg-blue-200 flex flex-col justify-center items-center">
          <p>Contenido del Home 1</p>
          <button className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleClick('home2')}><KeyboardArrowDownIcon/></button>
        </div>
      </div>

      <div id='home2' >
        <div className="h-screen bg-green-200 flex flex-col justify-center items-center">
          <p>Contenido del Home 2</p>
          <button className="ml-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleClick('home1')}><KeyboardArrowUpIcon/></button>
          <button className="ml-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleClick('home3')}><KeyboardArrowDownIcon/></button>
       </div>
      </div>

      <div id='home3'>
        <div className="h-screen bg-yellow-200 flex flex-col justify-center items-center">
          <p>Contenido del Home 3</p>
          <button className="ml-4 bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleClick('home2')}><KeyboardArrowUpIcon/></button>
        </div>
      </div>
    </main>
  );
};

export default Home;





