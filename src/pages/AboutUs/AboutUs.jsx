import React from 'react'
import { useActiveLink } from '../../context/ActiveLinkContext.jsx';
import { useTranslation } from 'react-i18next';


const AboutUs = () => {
    const { setActiveLink, activeLink } = useActiveLink();
    setActiveLink('/about')

    const { t } = useTranslation();

  return (
    <div className='h-full w-full flex items-center justify-center'>
        <div className='h-[90%] w-full xl:w-[75%] flex flex-col-reverse xl:flex-row items-center xl:gap-8'>
            <div className='h-[40%] xl:h-[90%] w-[95%] xl:w-[60%] bg-[url("https://res.cloudinary.com/dytjoh7oh/image/upload/v1718290911/XaviRenovaties/Public/Home4_wtyqzj.png")] bg-contain bg-no-repeat bg-center xl:bg-cover xl:bg-center flex justify-center items-center'>
            </div>
            <div className='h-[60%] xl:h-[90%] w-[95%] xl:w-[40%] flex flex-col xl:gap-4 xl:justify-center'>
                <div className='w-full pl-8 xl:pt-4 flex flex-col xl:justify-center xl:gap-4'>
                    <h1 className='text-lg xl:text-4xl'>{t('about.title')}</h1>
                </div>
                <div className='xl:h-[80%] w-full xl:w-[70%] pl-8 flex flex-col xl:gap-4 xl:text-xl'>
                    <p>{t('about.description')}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs