  import React from 'react';
  import { useTranslation } from 'react-i18next';
  import "./Home3.css"
  import { useNavigate } from 'react-router-dom';


  const Home3 = () => {
    const { t } = useTranslation();
    const navigate = useNavigate()
    const handleClick = (path) => {
      navigate(path);
    };
    return (
      <div className='h-[100%] w-[100%] flex flex-col xl:flex-row xl:justify-evenly xl:items-center gap-4'>
        <img id="image-home3-small" className='h-auto w-full' src="https://res.cloudinary.com/dytjoh7oh/image/upload/v1718290910/XaviRenovaties/Public/Home1_fexwvl.jpg" alt=""/>
        <div id='containerHome3' className='w-full xl:w-[40%] h-[40%] xl:h-[80%] bg-white bg-opacity-80 flex flex-col items-center gap-4 xl:p-16 xl:text-2xl'>
          <h1 className='text-lg xl:text-3xl'>{t("home3.title")}</h1>
          <p className='px-4'>{t("home3.text3")}</p>
          <p className='px-4'>{t("home3.text2")}</p>
          <button onClick={() => handleClick('/contact')} class="button-57" role="button"><span class="text">{t('header.contact')}</span><span>{t('header.contact')}</span></button>
        </div>
        <div id='div-aux' className='w-[40%] h-[80%] text-center bg-none'>
        </div>
      </div>
    );
  }

  export default Home3;
