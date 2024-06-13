  import React from 'react';
  import { useTranslation } from 'react-i18next';

  const Home3 = () => {
    const { t } = useTranslation();
    return (
      <div className='h-[100%] w-[100%] flex justify-center items-center'>
        <div id='containerHome3' className='w-[90%] h-[90%] text-center bg-white bg-opacity-80'>
          Hola
        </div>
        <div id='containerHome3' className='w-[90%] h-[90%] text-center bg-none'>
        </div>
      </div>
    );
  }

  export default Home3;
