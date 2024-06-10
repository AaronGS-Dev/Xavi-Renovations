  import React from 'react';
  import { useTranslation } from 'react-i18next';

  const Home3 = () => {
    const { t } = useTranslation();
    return (
      <div className='flex flex-col justify-center'>
      
        <div id='containerHome3' className='grid grid-cols-2 gap-10 text-center'>
          <div className='bg-white bg-opacity-80 rounded p-6 text-xl'>
            <p>{t("home2.first")}</p>
          </div>
          <div className='bg-white bg-opacity-80 rounded p-6 text-xl'>
            <p>{t("home2.second")}</p>
          </div>
          <div className='bg-white bg-opacity-80 rounded p-6 text-xl'>
            <p>{t("home2.third")}</p>
          </div>
          <div className='bg-white bg-opacity-80 rounded p-6 text-xl'>
            <p>{t("home2.fourth")}</p>
          </div>
          <div className='bg-white bg-opacity-80 rounded p-6 text-xl'>
            <p>{t("home2.fifth")}</p>
          </div>
          <div className='bg-white bg-opacity-80 rounded p-6 text-xl'>
            <p>{t("home2.sixth")}</p>
          </div>
          <div className='bg-white bg-opacity-80 rounded p-6 text-xl'>
            <p>{t("home2.seventh")}</p>
          </div>
          <div className='bg-white bg-opacity-80 rounded p-6 text-xl'>
            <p>{t("home2.eighth")}</p>
          </div>
        </div>
      </div>
    );
  }

  export default Home3;
