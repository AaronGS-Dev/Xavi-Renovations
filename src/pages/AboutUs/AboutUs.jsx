import React from 'react'
import { useActiveLink } from '../../context/ActiveLinkContext.jsx';
import { useTranslation } from 'react-i18next';


const AboutUs = () => {
    const { setActiveLink, activeLink } = useActiveLink();
    setActiveLink('/about')

    const { t } = useTranslation();

  return (
    <div className='h-full w-full flex flex-col items-center justify-center'>
        <div className='h-[90%] w-[75%] flex items-center'>
            <div className='h-[90%] w-[60%] bg-[url("https://res.cloudinary.com/dytjoh7oh/image/upload/v1712826578/XaviRenovaties/asdfad_zwuhoa.jpg")] flex justify-center items-center'>
            </div>
            <div className='h-[90%] w-[40%] 0'>
                <div className='h-[20%] w-full pl-8 pt-4 flex flex-col justify-center gap-4'>
                    <h1>{t('about.title')}</h1>
                </div>
                <div className='h-[80%] w-[70%] pl-8 pt-4  flex flex-col gap-4'>
                    <p>{t('about.description')}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs