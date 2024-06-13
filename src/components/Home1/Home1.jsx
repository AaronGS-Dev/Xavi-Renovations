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
    <main className='h-[100%] w-[100%] flex justify-evenly items-center'>
      <div className='w-[40%] h-[80%] flex flex-col items-center gap-4 p-16 text-xl'>
      <h1 className='text-4xl'>XaviRenovaties</h1>
        <p>{t("home3.text1")}</p>
        <button onClick={() => handleClick('/about')} class="button-57" role="button"><span class="text">{t('header.about')}</span><span>{t('header.about')}</span></button>
      </div>
   
      <div>
        <Slider/>
      </div>

    </main>
  )
}

export default Home1