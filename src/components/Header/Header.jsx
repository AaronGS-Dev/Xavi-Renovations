import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useActiveLink } from '../../context/ActiveLinkContext.jsx';

const Header = () => {
    const navigate = useNavigate()
    const { setActiveLink, activeLink } = useActiveLink();

    const handleClick = (path) => {
        navigate(path);
      };
      
  return (
    <div className='w-full h-1/6 flex flex-col'>
        <div className='h-3/5 flex justify-center items-center cursor-pointer' onClick={() => handleClick('/')}>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-4xl'>XaviRenovaties</h1>
                <h2>Reformas generales</h2>
            </div>
            <img src="../public/image/logo2.png" className='h-full' />  
        </div>
        <div className='h-2/5 w-full flex justify-center gap-5'>
            <button className={activeLink === '/' ? 'font-bold' : ''} onClick={() => handleClick('/')}>Página principal</button>
            <button className={activeLink === '/ourwork' ? 'font-bold' : ''} onClick={() => handleClick('/ourwork')}>Nuestros trabajos</button>
            <button className={activeLink === '/about' ? 'font-bold' : ''} onClick={() => handleClick('/about')}>Sobre nosotros</button>
            <button className={activeLink === '/process' ? 'font-bold' : ''} onClick={() => handleClick('/process')}>Nuestro proceso</button>
            <button className={activeLink === '/contact' ? 'font-bold' : ''} onClick={() => handleClick('/contact')}>Contáctanos</button>
        </div>
    </div>
  )
}

export default Header