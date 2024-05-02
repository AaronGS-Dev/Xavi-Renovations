import React from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Home3 = () => {
  return (
    <div className='flex flex-col justify-center'>
      <div>
        <a href='#home2'><KeyboardArrowUpIcon/></a>
      </div>
      <div id='containerHome3' className='grid grid-cols-2 gap-4'>
        <div className='bg-white bg-opacity-50 p-4'>
          <p>Nos gusta pensar con usted y prestar atención a su proyecto.</p>
        </div>
        <div className='bg-white bg-opacity-50 p-4'>
          <p>Tendrá un único interlocutor que se comunicará con usted de forma abierta y transparente.</p>
        </div>
        <div className='bg-white bg-opacity-50 p-4'>
          <p>Le ofrecemos un presupuesto completo por escrito. </p>
        </div>
        <div className='bg-white bg-opacity-50 p-4'>
          <p>En todos nuestros proyectos se presta atención a la artesanía y el detalle. </p>
        </div>
        <div className='bg-white bg-opacity-50 p-4'>
          <p>Todo el material que utilizamos es de primera calidad. </p>
        </div>
        <div className='bg-white bg-opacity-50 p-4'>
          <p>También estamos a su disposición tras la finalización.</p>
        </div>
        <div className='bg-white bg-opacity-50 p-4'>
          <p>Profesionales apasionados por su trabajo.</p>
        </div>
        <div className='bg-white bg-opacity-50 p-4'>
          <p>Buena relación calidad-precio para cualquier trabajo.</p>
        </div>
      </div>
    </div>
  );
}

export default Home3;
