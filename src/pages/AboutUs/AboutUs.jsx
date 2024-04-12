import React from 'react'
import { useActiveLink } from '../../context/ActiveLinkContext.jsx';

const AboutUs = () => {
    const { setActiveLink } = useActiveLink();
    setActiveLink('/about')

  return (
    <div className='h-full w-full flex flex-col items-center justify-center'>
        <div className='h-[90%] w-[75%] flex items-center'>
            <div className='h-[90%] w-[60%] bg-[url("https://res.cloudinary.com/dytjoh7oh/image/upload/v1712826578/XaviRenovaties/asdfad_zwuhoa.jpg")] flex justify-center items-center'>
            </div>
            <div className='h-[90%] w-[40%] 0'>
                <div className='h-[20%] w-full pl-8 pt-4 flex flex-col justify-center gap-4'>
                    <h1>Bienvenido a Xavi Renovaties</h1>
                </div>
                <div className='h-[80%] w-[70%] pl-8 pt-4  flex flex-col gap-4'>
                    <p>Xavi Renovaties lleva muchos años en activo y hace realidad tu deseo de renovación. Siempre decimos: La calidad es el orgullo de la artesanía. Ponemos al cliente en primer lugar, escuchando activamente sus deseos y brindándole asesoramiento profesional adecuado sobre el proyecto a realizar. Nuestras actividades comerciales consisten en trabajos de renovación y mantenimiento. Puede contactar con nosotros para trabajos de reforma y mantenimiento de cualquier naturaleza y tamaño. Xavi Renovations trabaja con un equipo permanente que incluye diversos especialistas.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs