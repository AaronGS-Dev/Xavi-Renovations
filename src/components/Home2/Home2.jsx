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

      <div id='containerHome2' className='w-[40%] h-[80%] bg-white bg-opacity-80 flex flex-col items-center gap-4 p-16 text-xl'>
        <h1 className=''>{t("home2.title")}</h1>
         <p>{t("home2.text")}</p> 
        <div className='w-full flex justify-center gap-16 '>
          <button  onClick={() => handleClick('/ourwork')} className="button-57" role="button"><span class="text">{t('header.works')}</span><span>{t('header.works')}</span></button>

          <button  onClick={() => handleClick('/design')} className="button-57" role="button"><span class="text">{t('header.design')}</span><span>{t('header.design')}</span></button>
        </div>
      </div>
      

    </main>
  );
};

export default Home2;
