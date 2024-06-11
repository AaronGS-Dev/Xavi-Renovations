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
    <main className='flex justify-evenly mt-10'>
      <div>
        <div>
        <h1>Xavi Renovations</h1>
        </div>
        <div>
          <p>Descubre nuestras obras más destacadas y la calidad que nos define.</p>
          <button onClick={() => handleClick('/ourwork')}>{t('header.works')}</button>
        </div>
        <div>
          <p>Explora los proyectos que hemos llevado a cabo con pasión y dedicación.</p>
          <button onClick={() => handleClick('/ourwork')}></button>
        </div>
      </div>
   
      <div>
        <Slider/>
      </div>

    </main>
  )
}

export default Home1