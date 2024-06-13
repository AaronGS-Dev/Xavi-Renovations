import React from 'react';
import { useTranslation } from 'react-i18next';

const Home2 = () => {
  const { t } = useTranslation();
  return (
    <main className='h-[100%] w-[100%] flex justify-evenly items-center'>

      <div className='w-[40%] h-[80%] text-center bg-none'>
        
      </div>

      <div id='container' className='w-[40%] h-[80%] bg-white bg-opacity-80 p-8'>
        <div>
        <h1 className=''>Descubre nuestras obras y diseños.</h1>
         <p>En cada obra y remodelación, creamos ambientes que reflejan tu estilo y personalidad. Desde diseño de interiores hasta renovaciones completas,
          nuestro equipo se dedica a hacer realidad tus ideas.
          Descubre cómo nuestros proyectos destacan por su innovación y funcionalidad. Con un enfoque único en cada detalle, logramos espacios que inspiran y transforman.
          Explora nuestros trabajos y déjate llevar por la creatividad.</p> 
        </div>
        <div>
        <button id='button' onClick={() => handleClick('/ourwork')}>{t('header.works')}</button>
        <button id='button' onClick={() => handleClick('/design')}>{t('header.design')}</button>

        </div>
      </div>
      

    </main>
  );
};

export default Home2;
