import React from 'react';
import { useTranslation } from 'react-i18next';

const Home2 = () => {
  const { t } = useTranslation();
  return (
    <main>
      <div id='service' className='bg-white bg-opacity-80 flex flex-col text-center w-4/5 h-full rounded transform translate-x-16 pb-4'>
        <div>
          <h1 className='p-6'>{t('home.ourservices')}</h1>
        </div>
        <div className="flex justify-evenly items-center">
          <img src="\public\image\maintenance.png" className='w-1/6 h-auto ' alt="" />
          <p>{t('home.first')}</p>
        </div>
        <div className="flex justify-evenly items-center">
          <p>{t('home.second')}</p>
          <img src="\public\image\renovation.png" className='w-1/6 h-auto' alt="" />
        </div>
        <div className="flex justify-evenly items-center">
          <img src="\public\image\renovation-2.png" className='w-1/6 h-auto' alt="" />
          <p>{t('home.third')}</p>
        </div> 
        <div className="flex justify-evenly items-center">
          <p>{t('home.fourth')}</p>
          <img src="\public\image\electrical-service.png" className='w-1/6 h-auto' alt="" />
        </div>
        <div className="flex justify-evenly items-center">
          <img src="\public\image\plumbing.png" className='w-1/6 h-auto' alt="" />
          <p>{t('home.fifth')}</p>
        </div>
      </div>
    </main>
  );
};

export default Home2;
