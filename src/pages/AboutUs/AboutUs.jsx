import React from 'react'
import { useActiveLink } from '../../context/ActiveLinkContext.jsx';
import { useTranslation } from 'react-i18next';


const AboutUs = () => {
    const { setActiveLink, activeLink } = useActiveLink();
    setActiveLink('/about')

    const { t } = useTranslation();

  return (
    <div className='h-full w-full flex items-center justify-center'>
        <div className='h-[90%] w-[75%] flex flex-col-reverse xl:flex-row items-center gap-8'>
            <div className='h-[50%] xl:h-[90%] w-[95%] xl:w-[60%] bg-[url("../image/Home4.png")] bg-contain bg-no-repeat bg-center xl:bg-cover xl:bg-center flex justify-center items-center'>
            </div>
            <div className='h-[50%] xl:h-[90%] w-[95%] xl:w-[40%]'>
                <div className='h-[20%] w-full pl-8 pt-4 flex flex-col justify-center gap-4 text-xl'>
                    <h1 className='text-4xl'>{t('about.title')}</h1>
                </div>
                <div className='h-[80%] w-[95%] xl:w-[70%] pl-8 flex flex-col gap-4 text-xl'>
                    <p>{t('about.description')}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs