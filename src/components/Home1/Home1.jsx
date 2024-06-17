import React from 'react'
import "./Home1.css"
import Slider from '../../components/Slider/Slider.jsx'
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const Home1 = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <main className='h-[100%] w-[100%] flex flex-col xl:flex-row justify-evenly items-center'>
      <div className='w-[90%] h-[40%] xl:w-[40%] xl:h-[80%] flex flex-col items-center xl:gap-4 xl:p-16 xl:text-2xl'>
        <h1 className='mb-4 xl:text-4xl'>XaviRenovaties</h1>
        <p>{t("home3.text1")}</p>
        <button onClick={() => handleClick('/about')} class="button-57" role="button"><span class="text">{t('header.about')}</span><span>{t('header.about')}</span></button>
      </div>
      <div className='h-[40%] xl:h-auto'>
        <Slider/>
      </div>

    </main>
  )
}

export default Home1