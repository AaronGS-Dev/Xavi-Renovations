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
    <main className='h-[100%] w-[100%] flex flex-col xl:flex-row xl:justify-evenly xl:items-center'>

      <div id='div-aux' className='w-[40%] h-[80%] text-center bg-none'>
      </div>

      <div id="image-home2-small" className='h-[60%] w-[100%] bg-[url("https://res.cloudinary.com/dytjoh7oh/image/upload/v1718290910/XaviRenovaties/Public/Home2_scwnkq.jpg")] 
            bg-contain bg-no-repeat bg-center'>
      </div>

      <div id='containerHome2' className='w-[100%] xl:w-[40%] h-[40%] xl:h-[80%] xl:shadow-none bg-none xl:bg-white bg-opacity-80 flex flex-col items-center xl:gap-4 xl:p-16 xl:text-xl'>
        <h1 className='text-lg xl:text-3xl'>{t("home2.title")}</h1>
        <p className='px-4'>{t("home2.text")}</p> 
        <div className='w-full flex justify-center gap-4 xl:gap-16 '>
          <button onClick={() => handleClick('/ourwork')} className="button-57" role="button"><span class="text">{t('header.works')}</span><span>{t('header.works')}</span></button>
          <button onClick={() => handleClick('/design')} className="button-57" role="button"><span class="text">{t('header.design')}</span><span>{t('header.design')}</span></button>
        </div>
      </div>
    </main>
  );
};

export default Home2;
