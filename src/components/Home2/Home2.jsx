import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import "./Home2.css"

const Home2 = () => {
  const { t } = useTranslation();
  const navigate = useNavigate()
  const handleClick = (path) => {
    navigate(path);
  };
  return (
    <main className='h-[100%] w-[100%] flex justify-evenly items-center'>

      <div className='w-[40%] h-[80%] text-center bg-none'>
        
      </div>

      <div id='containerHome2' className='w-[40%] h-[80%] bg-white bg-opacity-80 flex flex-col items-center gap-4 p-8 text-xl'>
        <h1 className=''>Descubre nuestras obras y diseños.</h1>
         <p>En cada obra y remodelación, creamos ambientes que reflejan tu estilo y personalidad. Desde diseño de interiores hasta renovaciones completas,
          nuestro equipo se dedica a hacer realidad tus ideas.
          Descubre cómo nuestros proyectos destacan por su innovación y funcionalidad. Con un enfoque único en cada detalle, logramos espacios que inspiran y transforman.
          Explora nuestros trabajos y déjate llevar por la creatividad.</p> 
        <div className='flex flex-col gap-16 '>
        <button  onClick={() => handleClick('/ourwork')} className="button-57" role="button"><span class="text">{t('header.works')}</span><span>{t('header.works')}</span></button>

        <button  onClick={() => handleClick('/design')} className="button-57" role="button"><span class="text">{t('header.design')}</span><span>{t('header.design')}</span></button>

        </div>
      </div>
      

    </main>
  );
};

export default Home2;
