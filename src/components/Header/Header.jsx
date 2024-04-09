import React from 'react'
import { useNavigate } from 'react-router-dom';


const Header = () => {
    const navigate = useNavigate()

    const handleClick = (path) => {
        navigate(path);
      };
      
  return (
    <div className='w-full h-1/6 border-4 border-black flex flex-col'>
        <div className='h-3/5 flex justify-center items-center'>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-4xl'>XaviRenovaties</h1>
                <h2>Reformas generales</h2>
            </div>
            <img src="../public/image/logo2.png" className='h-full' />
            
        </div>
        <div className='h-2/5 w-full border border-black flex justify-center gap-5'>
            <button onClick={() => handleClick('/')}>Página principal</button>
            <button onClick={() => handleClick('/ourwork')}>Nuestros trabajos</button>
            <button>Sobre nosotros</button>
            <button>Nuestro proceso</button>
            <button>Contáctanos</button>
        </div>
    </div>
  )
}

export default Header