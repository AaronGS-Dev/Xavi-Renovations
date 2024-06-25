import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useActiveLink } from '../../context/ActiveLinkContext.jsx';
import { Menu } from '../Menu/Menu.jsx';
import { useTranslation } from 'react-i18next';


const Header = () => {
    const navigate = useNavigate()
    const { setActiveLink, activeLink } = useActiveLink();
    const { t } = useTranslation()

    const handleClick = (path) => {
        navigate(path);
      };
      
  return (
    <div className='w-full h-1/6 flex flex-col'>
        <div className='h-3/5 flex justify-center items-center cursor-pointer' onClick={() => handleClick('/')}>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='xl:text-4xl'>XaviRenovaties</h1>
                <h2 className='text-sm'>{t('subtitle')}</h2>
            </div>
            <img src="../image/logo2.png" className='h-3/6 xl:h-full' />  
        </div>
        <div className='h-1/5 xl:h-2/5 xl:w-[100%] self-center flex flex-wrap justify-center gap-4'>
            <button className={activeLink === '/' ? 'font-bold w:20 px-4 xl:w-60 text-sm xl:text-lg' : 'w:20 px-4 xl:w-60 text-sm xl:text-lg'} onClick={() => handleClick('/')}>{t('header.home')}</button>
            <button className={activeLink === '/ourwork' ? 'font-bold w:20 px-4 xl:w-60 text-sm xl:text-lg' : 'w:20 px-4 xl:w-60 text-sm xl:text-lg'} onClick={() => handleClick('/ourwork')}>{t('header.works')}</button>
            <button className={activeLink === '/about' ? 'font-bold w:20 px-4 xl:w-60 text-sm xl:text-lg' : 'w:20 px-4 xl:w-60 text-sm xl:text-lg'} onClick={() => handleClick('/about')}>{t('header.about')}</button>
            <button className={activeLink === '/process' ? 'font-bold w:20 px-4 xl:w-60 text-sm xl:text-lg' : 'w:20 px-4 xl:w-60 text-sm xl:text-lg'} onClick={() => handleClick('/process')}>{t('header.process')}</button>
            <button className={activeLink === '/design' ? 'font-bold w:20 px-4 xl:w-60 text-sm xl:text-lg' : 'w:20 px-4 xl:w-60 text-sm xl:text-lg'} onClick={() => handleClick('/design')}>{t('header.design')}</button>
            <button className={activeLink === '/contact' ? 'font-bold w:20 px-4 xl:w-60 text-sm xl:text-lg' : 'w:20 px-4 xl:w-60 text-sm xl:text-lg'} onClick={() => handleClick('/contact')}>{t('header.contact')}</button>
        </div>
    </div>
  )
}

export default Header