import React, { useState } from 'react'
import { useActiveLink } from '../../context/ActiveLinkContext.jsx';
import './OurProcess.css'
import Filter1Icon from '@mui/icons-material/Filter1';
import Filter2Icon from '@mui/icons-material/Filter2';
import Filter3Icon from '@mui/icons-material/Filter3';
import Filter4Icon from '@mui/icons-material/Filter4';

const OurProcess = () => {
    const [isHovered, setIsHovered] = useState(false)
    const { setActiveLink } = useActiveLink();
    setActiveLink('/process')
    return (
        <div className='h-full w-full flex flex-col items-center justify-center'>
            <div className='h-[90%] w-[80%] bg-[url("https://res.cloudinary.com/dytjoh7oh/image/upload/v1712826578/XaviRenovaties/asdfad_zwuhoa.jpg")] flex justify-center items-center'>
                <div className='h-[90%] w-[80%] bg-blue-100 flex flex-col items-center gap-4 p-8'>
                    <h1 className='text-4xl'>Nuestro proceso en Xavi Renovaties</h1>
                    <p className='w-[70%] text-[20px]'>Si estás pensando en renovar uno, ¡has venido al lugar indicado! Xavi Renovatie mantendrá una conversación contigo en la que identificaremos y describiremos claramente tus deseos.</p>
                    <div className='h-full flex flex-col justify-evenly'>
                        <div className='icon-container' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                            <div className={`icon-wrapper flex gap-4 ${isHovered ? 'hovered' : ''}`}>
                                <Filter1Icon className='icon' sx={{ fontSize: 50 }}/>
                                {isHovered && <p className='my-auto text-[20px]'>Mantendremos una conversación contigo en la que identificaremos y describiremos claramente sus deseos.</p>}
                            </div>
                        </div>
                        <div className='icon-container' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                            <div className={`icon-wrapper flex gap-4 ${isHovered ? 'hovered' : ''}`}>
                                <Filter2Icon className='icon' sx={{ fontSize: 50 }}/>
                                {isHovered && <p className='my-auto text-[20px]'>El equipo crea un asesoramiento adecuado y profesional en un plan de reforma.</p>}
                            </div>
                        </div>
                        <div className='icon-container' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                            <div className={`icon-wrapper flex gap-4 ${isHovered ? 'hovered' : ''}`}>
                                <Filter3Icon className='icon' sx={{ fontSize: 50 }}/>
                                {isHovered && <p className='my-auto text-[20px]'>Todos los trabajos y costes se pueden planificar basándose en el plan de reforma.</p>}
                            </div>
                        </div>
                        <div className='icon-container' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                            <div className={`icon-wrapper flex gap-4 ${isHovered ? 'hovered' : ''}`}>
                                <Filter4Icon className='icon' sx={{ fontSize: 50 }}/>
                                {isHovered && <p className='my-auto text-[20px]'>Después de la aprobación del cliente, se iniciará la reforma.</p>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurProcess