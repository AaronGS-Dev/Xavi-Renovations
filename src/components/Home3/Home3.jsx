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
      <div className='h-[100%] w-[100%] flex justify-evenly items-center'>
        <div id='containerHome3' className='w-[40%] h-[80%] bg-white bg-opacity-80 flex flex-col items-center gap-4 p-16 text-xl'>
          <h1>{t("home3.title")}</h1>
          <p>{t("home3.text3")}</p>
          <p>{t("home3.text2")}</p>
          <button onClick={() => handleClick('/contact')} class="button-57" role="button"><span class="text">{t('header.contact')}</span><span>{t('header.contact')}</span></button>
        </div>
        <div id='containerHome3' className='w-[40%] h-[80%] text-center bg-none'>
        </div>
      </div>
    );
  }

  export default Home3;
