  import React from 'react';
  import { useTranslation } from 'react-i18next';
  import "./Home3.css"

  const Home3 = () => {
    const { t } = useTranslation();
    return (
      <div className='h-[100%] w-[100%] flex justify-evenly items-center'>
        <div id='containerHome3' className='w-[40%] h-[80%] bg-white bg-opacity-80 flex flex-col items-center gap-4 p-16 text-xl'>
          <h1>Proyectos de Interiorismo y Reforma</h1>
          <p> XaviRenovaties es una empresa consolidada en el sector de la reforma integral desde hace más de 15 años. Especializada y dedicada a la reforma de viviendas de todo tipo, proyectos de interiores, locales, chalets, naves, garajes y comunidades de propietarios.</p>
          <p>¿Listo para comenzar tu próxima obra? Contáctanos y hagamos realidad tu visión hoy mismo.</p>
          <button class="button-57" role="button"><span class="text">Contact us</span><span>Contact us</span></button>
        </div>
        <div id='containerHome3' className='w-[40%] h-[80%] text-center bg-none'>
        </div>
      </div>
    );
  }

  export default Home3;
